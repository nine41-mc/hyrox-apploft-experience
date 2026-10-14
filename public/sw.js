/*
 * Offline support for the pitch site.
 * - On install: precache every file of the static export (list injected by scripts/precache.mjs),
 *   so all pages (EN, DE, summaries) work offline right after the first visit.
 * - Pages / RSC payloads: network first (revalidated, never a stale HTTP copy), cache as offline fallback.
 * - Assets: cache first, refreshed in the background.
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
    req.mode === "navigate" || accept.includes("text/html") || accept.includes("text/x-component") || req.url.includes("_rsc=");

  if (isPage) {
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
        ),
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
