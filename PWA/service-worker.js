importScripts("https://storage.googleapis.com/workbox-cdn/releases/7.3.0/workbox-sw.js");

workbox.routing.registerRoute(
    ({request}) => request.destination === 'image',
    new workbox.strategies.CacheFirst()
);