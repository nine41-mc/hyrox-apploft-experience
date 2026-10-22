// Password-protects the static export for GitHub Pages (which has no server-side auth).
//
//   SITE_PASSWORD=… node scripts/encrypt-export.mjs out
//
// Every HTML page is replaced by a small lock page that carries the original document
// AES-256-GCM-encrypted (key from PBKDF2-SHA256 over the password, fixed per-site salt).
// The RSC payload files (*.txt) are encrypted as JSON ({"pcenc":1,…}).
//
// After the password is entered, the lock page stores the derived key in IndexedDB and registers
// public/sw.js: the service worker decrypts pages and payloads before the browser sees them (also from its
// offline cache), so the site behaves exactly like an unprotected build. Adapted from the PadelCity prototype.
// Fallback without service workers: the lock page decrypts itself via document.write.
// NOT protected: JS chunks (UI strings of client components), images, fonts – and the
// source code in a public repository.
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { webcrypto as crypto } from "node:crypto";

const dir = process.argv[2] ?? "out";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const password = process.env.SITE_PASSWORD;
if (!password) {
  console.error("SITE_PASSWORD is not set – refusing to publish an unprotected build.");
  process.exit(1);
}

const ITERATIONS = 310_000;
// Fixed per-site salt: the key a viewer stored stays valid across deploys until the password changes.
const salt = new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode("hyrox-vision-apploft"))).slice(0, 16);
const b64 = (u) => Buffer.from(u).toString("base64");

const base = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveBits"]);
const bits = await crypto.subtle.deriveBits({ name: "PBKDF2", salt, iterations: ITERATIONS, hash: "SHA-256" }, base, 256);
const key = await crypto.subtle.importKey("raw", bits, "AES-GCM", false, ["encrypt"]);

function walk(d) {
  return readdirSync(d).flatMap((f) => {
    const p = join(d, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

const T = {
  de: { title: "HYROX Vision · apploft.", h: "HYROX Vision", p: "Diese Seite ist nur für einen kleinen Personenkreis bestimmt. Bitte gib das Passwort ein, das du separat bekommen hast.", label: "Passwort", go: "Entsperren", check: "Prüfe …", wrong: "Das Passwort stimmt nicht." },
  en: { title: "HYROX Vision · apploft.", h: "HYROX Vision", p: "This site is for a small group of people only. Please enter the password you received separately.", label: "Password", go: "Unlock", check: "Checking …", wrong: "That password isn’t right." },
};
const lockPage = (payload, lang) => { const t = T[lang]; return `<!doctype html>
<html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow"><title>${t.title}</title>
<style>
:root{color-scheme:dark;--ink:#000;--card:#111;--line:#333;--fg:#fff;--muted:#b3b3b3;--yellow:#ffed00;--err:#ff8a8a}
*{box-sizing:border-box}html,body{height:100%}
body{margin:0;background:var(--ink);color:var(--fg);font:16px/1.5 system-ui,-apple-system,"Segoe UI",sans-serif;display:grid;place-items:center;padding:16px}
form{width:100%;max-width:400px;background:var(--card);border:1px solid var(--line);border-radius:24px;padding:28px 24px;display:grid;gap:14px}
.brand{font-size:12px;letter-spacing:.35em;color:var(--muted);text-transform:uppercase}
h1{margin:0;font:500 34px/1 system-ui,sans-serif;text-transform:uppercase;letter-spacing:-.01em}
h1 span{background:var(--yellow);color:#000;padding:0 .12em}
p{margin:0;color:var(--muted)}label{font-weight:600;font-size:14px}
input{width:100%;font:inherit;padding:12px 16px;border-radius:12px;border:1px solid var(--line);background:var(--ink);color:var(--fg)}
input:focus{outline:2px solid var(--yellow);outline-offset:2px}
button{font:600 15px/1 system-ui,sans-serif;text-transform:uppercase;letter-spacing:.12em;min-height:48px;border:0;border-radius:12px;color:#000;background:var(--yellow);cursor:pointer}
button:disabled{opacity:.6}.err{color:var(--err);font-size:14px;min-height:1.3em}
[hidden]{display:none!important} /* the form must stay invisible while a stored key decrypts the page */
</style></head><body>
<form id="f" hidden>
  <div class="brand">HYROX | apploft.</div>
  <h1><span>${t.h}</span></h1>
  <p>${t.p}</p>
  <label for="pw">${t.label}</label>
  <input id="pw" type="password" autocomplete="current-password" required autofocus>
  <button id="go" type="submit">${t.go}</button>
  <div class="err" id="err" role="alert"></div>
</form>
<script type="application/json" id="p">${payload}</script>
<script>
(async () => {
  const P = JSON.parse(document.getElementById("p").textContent);
  const d = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
  const enc = (u) => btoa(String.fromCharCode(...u));
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const swOK = "serviceWorker" in navigator && window.isSecureContext;
  if (swOK) navigator.serviceWorker.register(P.base + "/sw.js", { scope: P.base + "/" }).catch(() => {});

  // Key storage: IndexedDB (read by the service worker) + localStorage (fallback path)
  const idb = () => new Promise((res, rej) => { const r = indexedDB.open("hyrox-vision", 1); r.onupgradeneeded = () => r.result.createObjectStore("kv"); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); });
  const idbSet = async (v) => { const db = await idb(); await new Promise((res) => { const tx = db.transaction("kv", "readwrite"); tx.objectStore("kv").put(v, "key"); tx.oncomplete = res; tx.onerror = res; }); };
  const idbGet = async () => { try { const db = await idb(); return await new Promise((res) => { const r = db.transaction("kv").objectStore("kv").get("key"); r.onsuccess = () => res(r.result); r.onerror = () => res(undefined); }); } catch { return undefined; } };
  const lsGet = () => { try { return JSON.parse(localStorage.getItem("hyrox-vision-key") || "null"); } catch { return null; } };
  const store = async (raw) => { const v = { salt: P.salt, raw: enc(raw) }; try { await idbSet(v); } catch {} try { localStorage.setItem("hyrox-vision-key", JSON.stringify(v)); } catch {} };

  async function decrypt(raw) {
    const key = await crypto.subtle.importKey("raw", raw, "AES-GCM", false, ["decrypt"]);
    return new TextDecoder().decode(await crypto.subtle.decrypt({ name: "AES-GCM", iv: d(P.iv) }, key, d(P.ct)));
  }
  // Fallback (no service worker in control): decrypt RSC payloads in the page itself, otherwise Next's client
  // router receives the encrypted *.txt and falls back to opening the raw file (seen in Safari).
  let rawKey = null;
  function installFetchShim() {
    if (window.__hxFetchShim || !rawKey) return;
    window.__hxFetchShim = true;
    const orig = window.fetch.bind(window);
    window.fetch = async (...args) => {
      const res = await orig(...args);
      try {
        const url = new URL(res.url || String(args[0] && args[0].url || args[0]), location.href);
        if (!url.pathname.endsWith(".txt")) return res;
        const text = await res.clone().text();
        if (!text.startsWith('{"pcenc"')) return res;
        const p = JSON.parse(text);
        const key = await crypto.subtle.importKey("raw", rawKey, "AES-GCM", false, ["decrypt"]);
        const plain = await crypto.subtle.decrypt({ name: "AES-GCM", iv: d(p.iv) }, key, d(p.ct));
        return new Response(plain, { status: res.status, headers: { "content-type": "text/plain; charset=utf-8" } });
      } catch { return res; }
    };
  }
  function writeDoc(html) { installFetchShim(); document.open(); document.write(html); document.close(); }
  // Hand over to the service worker: once it controls the page, a reload returns the decrypted document.
  async function viaWorker() {
    if (!swOK) return false;
    const last = Number(sessionStorage.getItem("hyrox-sw-reload") || 0);
    if (Date.now() - last < 10000) return false; // reloaded a moment ago and still locked → don't loop
    await Promise.race([navigator.serviceWorker.ready, sleep(4000)]);
    sessionStorage.setItem("hyrox-sw-reload", String(Date.now()));
    location.reload();
    return true;
  }

  const saved = (await idbGet()) || lsGet();
  if (saved && saved.salt === P.salt) {
    try {
      const html = await decrypt(d(saved.raw));
      rawKey = d(saved.raw);
      if (await viaWorker()) return;
      writeDoc(html);
      return;
    } catch {}
  }
  const f = document.getElementById("f"); f.hidden = false; document.getElementById("pw").focus();
  f.addEventListener("submit", async (e) => {
    e.preventDefault();
    const err = document.getElementById("err"), go = document.getElementById("go");
    go.disabled = true; err.textContent = "${t.check}";
    try {
      const base = await crypto.subtle.importKey("raw", new TextEncoder().encode(document.getElementById("pw").value), "PBKDF2", false, ["deriveBits"]);
      const raw = new Uint8Array(await crypto.subtle.deriveBits({ name: "PBKDF2", salt: d(P.salt), iterations: P.iter, hash: "SHA-256" }, base, 256));
      const html = await decrypt(raw); // throws on a wrong password
      rawKey = raw;
      await store(raw);
      if (await viaWorker()) return;
      writeDoc(html);
    } catch { err.textContent = "${t.wrong}"; go.disabled = false; }
  });
})();
</script></body></html>`; };

async function seal(text) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ct = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, new TextEncoder().encode(text)));
  return { salt: b64(salt), iv: b64(iv), ct: b64(ct) };
}

let pages = 0, payloads = 0;
for (const file of walk(dir)) {
  if (file.endsWith(".txt") && !file.endsWith("robots.txt")) {
    writeFileSync(file, JSON.stringify({ pcenc: 1, ...(await seal(readFileSync(file, "utf8"))) }));
    payloads++;
  } else if (file.endsWith(".html")) {
    const payload = JSON.stringify({ v: 2, iter: ITERATIONS, base: basePath, ...(await seal(readFileSync(file, "utf8"))) });
    writeFileSync(file, lockPage(payload, /(^|[\\/])de([\\/]|$)/.test(file.slice(dir.length)) ? "de" : "en"));
    pages++;
  }
}
console.log(`encrypted ${pages} HTML pages and ${payloads} RSC payloads`);
