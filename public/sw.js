var VERSAO="cinza-cf-2026-11-09-01";
var BASE=["./","index.html","style.css","app.js","tools.js","data/index.json","manifest.webmanifest","media/favicon.svg","media/selo-1111.jpg","icons/icon-192.png","icons/icon-512.png","icons/maskable-512.png","icons/apple-touch-icon.png","icons/icon.svg"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(VERSAO).then(function(c){return c.addAll(BASE)}));self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(n){return n!==VERSAO}).map(function(n){return caches.delete(n)}))}));self.clients.claim()});
self.addEventListener("fetch",function(e){var u=new URL(e.request.url);if(e.request.method!=="GET"||u.origin!==location.origin||/\.(mp4|mp3)$/.test(u.pathname))return;
 e.respondWith(fetch(e.request).then(function(r){var c=r.clone();caches.open(VERSAO).then(function(x){x.put(e.request,c)});return r}).catch(function(){return caches.match(e.request).then(function(r){return r||caches.match("index.html")})}))});
