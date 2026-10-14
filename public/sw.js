/*
 * Offline support for the pitch site.
 * - Pages (navigations): network first, cache as offline fallback → updates always arrive.
 * - Assets (JS, CSS, fonts, images): stale-while-revalidate → fast, refreshed in the background.
 * Bump CACHE to drop everything an older worker stored.
 */
const CACHE = "hyrox-2027-v2";
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

  const isPage = req.mode === "navigate" || (req.headers.get("accept") || "").includes("text/html");
  if (isPage) {
    event.respondWith(
      fetch(req)
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
