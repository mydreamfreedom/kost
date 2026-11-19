/* Service worker minimal untuk aplikasi "Kost Admin".
   Fungsinya hanya agar Chrome/Android mengenali halaman ini sebagai aplikasi yang bisa dipasang
   (bukan sekadar pintasan). Semua permintaan tetap diambil langsung dari internet, tidak ada data yang disimpan. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => { e.respondWith(fetch(e.request)); });
