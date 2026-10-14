/*
 * Offline support for the pitch site.
 * - Pages (navigations): network first, cache as offline fallback → updates always arrive.
 * - Assets (JS, CSS, fonts, images): stale-while-revalidate → fast, refreshed in the background.
 * Bump CACHE to drop everything an older worker stored.
 */
const CACHE = "hyrox-2027-v3";
const scope = self.registration.scope;

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll([scope])).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

function put(req, res) {
  if (res && res.ok) {
    const copy = res.clone();
    caches.open(CACHE).then((c) => c.put(req, copy));
  }
  return res;
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET" || !req.url.startsWith(self.location.origin)) return;

  // Pages and Next.js RSC payloads must never come from a stale HTTP cache: after a deploy the
  // old HTML points at chunk files that no longer exist. Revalidate with the server every time.
  const accept = req.headers.get("accept") || "";
  const isPage =
    req.mode === "navigate" || accept.includes("text/html") || accept.includes("text/x-component") || req.url.includes("_rsc=");
  if (isPage) {
    event.respondWith(
      fetch(req.url, { cache: "no-cache", credentials: "same-origin", headers: req.mode === "navigate" ? undefined : req.headers })
        .then((res) => put(req, res))
        .catch(() => caches.match(req).then((hit) => hit || caches.match(scope))),
    );
    return;
  }

  event.respondWith(
    caches.match(req).then((hit) => {
      const network = fetch(req)
        .then((res) => put(req, res))
        .catch(() => hit);
      return hit || network;
    }),
  );
});
