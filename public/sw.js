/*
 * Offline support for the pitch site.
 * - On install: precache every file of the static export (list injected by scripts/precache.mjs),
 *   so all pages (EN, DE, summaries) work offline right after the first visit.
 * - Pages / RSC payloads: network first (revalidated, never a stale HTTP copy), cache as offline fallback.
 * - Assets: cache first, refreshed in the background.
 * - Password protection (scripts/encrypt-export.mjs): pages and RSC payloads are published AES-GCM-encrypted.
 *   Once the visitor has entered the password, the lock page stores the derived key in IndexedDB and this
 *   worker decrypts every page/payload (from network or cache) before the browser sees it. Without a stored
 *   key the encrypted response – the lock page – passes through unchanged.
 */
const VERSION = "dev";
const PRECACHE = [];
const PREFIX = "hyrox-2027-";
const CACHE = PREFIX + VERSION;
const scope = self.registration.scope;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((c) => Promise.allSettled([scope, ...PRECACHE].map((url) => c.add(url))))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  // Only our own caches – other projects share this origin (github.io).
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith(PREFIX) && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

// --- decryption (password protection) ---
let keyCache = null; // { salt, key }
function idb() {
  return new Promise((resolve, reject) => {
    const r = indexedDB.open("hyrox-vision", 1);
    r.onupgradeneeded = () => r.result.createObjectStore("kv");
    r.onsuccess = () => resolve(r.result);
    r.onerror = () => reject(r.error);
  });
}
async function idbGet(k) {
  try {
    const db = await idb();
    return await new Promise((resolve) => {
      const r = db.transaction("kv").objectStore("kv").get(k);
      r.onsuccess = () => resolve(r.result);
      r.onerror = () => resolve(undefined);
    });
  } catch {
    return undefined;
  }
}
async function idbDelete(k) {
  try {
    const db = await idb();
    await new Promise((resolve) => {
      const tx = db.transaction("kv", "readwrite");
      tx.objectStore("kv").delete(k);
      tx.oncomplete = tx.onerror = () => resolve();
    });
  } catch {}
}
const fromB64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
async function getKey(salt) {
  if (keyCache && keyCache.salt === salt) return keyCache.key;
  const stored = await idbGet("key"); // { salt, raw: base64 }
  if (!stored || stored.salt !== salt) return null;
  const key = await crypto.subtle.importKey("raw", fromB64(stored.raw), "AES-GCM", false, ["decrypt"]);
  keyCache = { salt, key };
  return key;
}
async function unlock(res, isTxt) {
  if (!res || !res.ok) return res;
  let payload;
  try {
    const body = await res.clone().text();
    if (isTxt) {
      if (!body.startsWith('{"pcenc"')) return res;
      payload = JSON.parse(body);
    } else {
      const m = body.match(/<script type="application\/json" id="p">([\s\S]*?)<\/script>/);
      if (!m) return res;
      payload = JSON.parse(m[1]);
    }
  } catch {
    return res;
  }
  const key = await getKey(payload.salt);
  if (!key) return res; // not unlocked yet → lock page
  try {
    const plain = await crypto.subtle.decrypt({ name: "AES-GCM", iv: fromB64(payload.iv) }, key, fromB64(payload.ct));
    return new Response(plain, {
      status: res.status,
      statusText: res.statusText,
      headers: { "content-type": isTxt ? "text/x-component" : "text/html; charset=utf-8", "cache-control": "no-cache" },
    });
  } catch {
    // password changed since the key was stored → forget it and show the lock page again
    keyCache = null;
    await idbDelete("key");
    return res;
  }
}

function put(req, res) {
  if (res && res.ok && !res.redirected) {
    const copy = res.clone();
    caches.open(CACHE).then((c) => c.put(req, copy));
  }
  return res;
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET" || !req.url.startsWith(self.location.origin)) return;

  const accept = req.headers.get("accept") || "";
  const isPage =
    req.mode === "navigate" ||
    accept.includes("text/html") ||
    accept.includes("text/x-component") ||
    req.url.includes("_rsc=") ||
    new URL(req.url).pathname.endsWith(".txt");

  if (isPage) {
    const isTxt = req.mode !== "navigate" && !accept.includes("text/html");
    event.respondWith(
      fetch(req.url, { cache: "no-cache", credentials: "same-origin", headers: req.mode === "navigate" ? undefined : req.headers })
        .then((res) => {
          // e.g. /de → /de/ on GitHub Pages: hand the redirect to the browser instead of a redirected body
          if (res.redirected && req.mode === "navigate") return Response.redirect(res.url, 301);
          return put(req, res);
        })
        .catch(() =>
          caches
            .match(req, { ignoreSearch: req.mode === "navigate" })
            .then((hit) => hit || caches.match(scope))
            .then((hit) => hit || Response.error()),
        )
        .then((res) => (res.type === "opaqueredirect" || res.status === 301 ? res : unlock(res, isTxt))),
    );
    return;
  }

  event.respondWith(
    caches.match(req).then((hit) => {
      const network = fetch(req)
        .then((res) => put(req, res))
        .catch(() => hit || Response.error());
      return hit || network;
    }),
  );
});
