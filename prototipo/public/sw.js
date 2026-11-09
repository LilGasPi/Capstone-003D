const CACHE_NAME = 'estacionando-offline-v3'
const CACHE_PREFIX = 'estacionando-offline-'
const OFFLINE_URL = '/offline.html'

// Guarda únicamente la pantalla pública sin conexión.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.add(OFFLINE_URL))
      .then(() => self.skipWaiting()),
  )
})

// Elimina únicamente versiones antiguas de nuestra caché offline.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter(
              (key) =>
                key.startsWith(CACHE_PREFIX) &&
                key !== CACHE_NAME,
            )
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  )
})

// Intercepta solamente navegaciones GET del mismo origen.
self.addEventListener('fetch', (event) => {
  const request = event.request

  if (request.mode !== 'navigate' || request.method !== 'GET') {
    return
  }

  const url = new URL(request.url)

  if (url.origin !== self.location.origin) {
    return
  }

  // Nunca interferimos con las rutas API, incluidos los pagos.
  if (url.pathname.startsWith('/api/')) {
    return
  }

  // La propia página offline puede servirse desde caché.
  if (url.pathname === OFFLINE_URL) {
    event.respondWith(
      caches.match(OFFLINE_URL).then(
        (cached) => cached || fetch(request),
      ),
    )
    return
  }

  // Primero intentamos obtener la página desde la red.
  event.respondWith(
    fetch(request).catch(async () => {
      const cache = await caches.open(CACHE_NAME)
      const fallback = await cache.match(OFFLINE_URL)

      return fallback || Response.error()
    }),
  )
})
