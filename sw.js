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
          "/images/bag.svg",
          "/images/bg.svg",
          "/images/bg2.svg",
          "/images/bird1.svg",
          "/images/bird2.svg",
          "/images/cloud1.svg",
          "/images/cloud2.svg",
          "/images/cloud3.svg",
          "/images/computer.svg",
          "/images/computer2.svg",
          "/images/couch.svg",
          "/images/couch2.svg",
          "/images/cup.svg",
          "/images/etracker.jpg",
          "/images/girl.svg",
          "/images/girl2.svg",
          "/images/girl3.svg",
          "/images/increscendoduo.jpg",
          "/images/portfolio.jpg",
          "/images/star1.svg",
          "/images/underline.png",
          "/images/vancouver1887.jpg",
          "/images/watchlistapp.jpg",
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
            .then((res) => {
              cache.put(e.request, res.clone());
              return res;
            })
            .catch(() => {
              return response;
            })
        );
      });
    })
  );
});
