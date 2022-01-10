// Sources:
// https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker
// https://web.dev/offline-cookbook/

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open("eszter-portfolio")
      .then((cache) =>
        cache.addAll([
          "/",
          "/scripts/main.js",
          "/styles/main.css",
          "/styles/fa-all.css",
        ])
      )
  );
});

// Network falling back to the cache
// Get it from the network, send it to the page and add it to the cache at the same time.
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.open("eszter-portfolio").then((cache) => {
      return cache.match(e.request).then((response) => {
        return (
          // response ||
          fetch(e.request)
            .then((response) => {
              cache.put(e.request, response.clone());
              return response;
            })
            .catch(() => {
              return response;
            })
        );
      });
    })
  );
});
