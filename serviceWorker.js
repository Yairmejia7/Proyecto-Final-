const staticDevSpace = "Emergency Call"
const assets = [
  "index.html",
  "css/estilos.css",
  "js/nucleo.js",
  "img/Alien.png",
  "img/astronauta3.png",
  "img/fondo.jpg",
  "img/metiorito.png",
  "img/Mounstrou.png",
  "img/suelo.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevSpace).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })
  