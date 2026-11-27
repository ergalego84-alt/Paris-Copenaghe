const CACHE = 'paris-enruta-v1';
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(['./','./index.html','./manifest.webmanifest','./icon.svg','../transportes-paris-copenhague.pdf']))));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('paris-enruta-') && key !== CACHE).map(key => caches.delete(key))))));
self.addEventListener('fetch', event => {
  const request=event.request,url=new URL(request.url),scope=new URL(self.registration.scope).pathname,pdfPath=new URL('../transportes-paris-copenhague.pdf',self.registration.scope).pathname;
  if(request.method!=='GET'||url.origin!==self.location.origin||(!url.pathname.startsWith(scope)&&url.pathname!==pdfPath))return;
  event.respondWith(caches.match(request).then(cached=>cached||fetch(request).then(response=>{if(response.ok)caches.open(CACHE).then(cache=>cache.put(request,response.clone()));return response}).catch(()=>caches.match('./index.html'))));
});

