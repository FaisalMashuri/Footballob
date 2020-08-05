const CACHE_NAME = "bal-balan";
let urlToChache = [
  "/",
  "/index.html",
  "/pages/fav.html",
  "/pages/home.html",
  "/pages/liga.html",
  "/pages/team.html",
  "/assets/js/db.js",
  "/assets/js/fetch-api.js",
  "/assets/js/idb.js",
  "/assets/js/jquery.min.js",
  "/assets/js/materialize.min.js",
  "/assets/js/nav.js",
  "/assets/js/notif.js",
  "/assets/js/register.js",
  "/assets/js/routes.js",
  "/assets/js/show.js",
  "/assets/css/materialize.min.css",
  "/assets/css/style.css",
  "/assets/nav/sidenav.html",
  "/assets/nav/topnav.html",
  "https://fonts.googleapis.com/icon?family=Material+Icons",
  "https://fonts.gstatic.com/s/materialicons/v53/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2",
  "/logo-128x128.png",
  "/logo-144x144.png",
  "/logo-152x152.png",
  "/logo-192x192.png",
  "/logo-384x384.png",
  "/logo-512x512.png",
  "/manifest.json",
  "/sw.js",
  "/assets/img/faisal.jpg",
];

self.addEventListener("install", (e) => {
  console.log("Service Worker Menginstall...");

  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Service Worker: Membuka Cache");
      return cache.addAll(urlToChache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((res) => {
      console.log("ServiceWorker: Menarik data: ", event.request.url);

      if (res) {
        console.log("ServiceWorker: Gunakan Aset dari cache: ", res.url);
        return res;
      }

      console.log("ServiceWorker: Memuat Aset server: ", event.request.ur);
      return fetch(event.request);
    })
  );
});
