// 只为满足「可安装」条件而存在的最小 service worker。
// 不做任何缓存：每次打开都从网络取最新版本，保证你改了站点、手机上立刻就是新版。
self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()))
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request).then(r => r || Response.error())))
})
