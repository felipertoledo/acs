// Ficha do ACS — service worker
// Guarda o aplicativo no aparelho para abrir sem internet. Não envia nem recebe dado de paciente.
const CACHE = "ficha-acs-v2.5";
const ARQUIVOS = ["./", "./index.html", "./manifest.json", "./icon-192.png", "./icon-512.png"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(r => r || fetch(e.request).then(resp => {
    const cp = resp.clone(); caches.open(CACHE).then(c => c.put(e.request, cp)); return resp;
  }).catch(() => caches.match("./index.html"))));
});
