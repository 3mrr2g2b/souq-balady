// sw.js
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

workbox.setConfig({ debug: false });

self.addEventListener('install', event => {
  self.skipWaiting();
});

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);
