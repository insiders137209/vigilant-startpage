# 🚀 Vigilant Startpage

**Vigilant Startpage** ialah sebuah **Chrome Extension** (*New Tab Replacement*) bertemakan **Dark Glassmorphism** yang direka untuk memberikan pengalaman papan pemuka (*dashboard*) yang pantas, bersih dan moden.

Extension ini memaparkan jam, tarikh, maklumat cuaca semasa serta penggunaan CPU komputer secara **masa nyata (real-time)** terus pada halaman tab baharu tanpa bergantung kepada framework luaran.

---

# 📌 Isi Kandungan

* [✨ Ciri-Ciri Utama](#-ciri-ciri-utama)
* [🖼️ Paparan Antaramuka](#️-paparan-antaramuka)
* [🛠️ Struktur Projek](#️-struktur-projek)
* [🔐 Keperluan Kebenaran](#-keperluan-kebenaran)
* [📦 Panduan Pemasangan](#-panduan-pemasangan)
* [🎨 Pengubahsuaian](#-pengubahsuaian)
* [❓ Penyelesaian Masalah](#-penyelesaian-masalah)
* [🔮 Roadmap](#-roadmap)
* [📄 Lesen & Kredit](#-lesen--kredit)

---

# ✨ Ciri-Ciri Utama

* 🕒 **Jam & Tarikh Dinamik**

  * Paparan masa dalam format 12 atau 24 jam.
  * Dikemas kini setiap saat.
  * Menyokong nama hari dan bulan mengikut bahasa tempatan.

* ⚡ **Pemantauan CPU Secara Masa Nyata**

  * Menggunakan Chrome `system.cpu` API.
  * Mengira purata penggunaan CPU daripada semua teras pemproses.

* 🌤️ **Cuaca Automatik**

  * Mendapatkan lokasi menggunakan Geolocation API.
  * Mengambil suhu semasa melalui Open-Meteo API.
  * Tidak memerlukan API Key.

* 🎨 **Reka Bentuk Glassmorphism**

  * Antaramuka moden.
  * Backdrop blur.
  * CSS Grid yang responsif.
  * Animasi transisi yang lembut.

* 🔒 **Privasi Terjamin**

  * Tiada data pengguna dihantar ke pelayan luar.
  * Semua pemprosesan dilakukan terus di dalam pelayar.

---

# 🖼️ Paparan Antaramuka

```text
+-----------------------------------------------------------------------+
|                                                                       |
|                              10:42 PM                                 |
|                       Jumaat, 7 Ogos 2026                             |
|                                                                       |
|      +------------------------+      +------------------------+       |
|      |     CUACA TERKINI      |      |     PENGGUNAAN CPU     |       |
|      |         31°C           |      |          24%           |       |
|      |        Melaka          |      |  [====------------]    |       |
|      +------------------------+      +------------------------+       |
|                                                                       |
+-----------------------------------------------------------------------+
```

---

# 🛠️ Struktur Projek

Projek ini dibina menggunakan HTML, CSS dan JavaScript tulen (**Zero Dependencies**) bagi memastikan prestasi yang pantas dan saiz extension yang kecil.

```text
vigilant-startpage/
├── manifest.json       # Manifest Chrome Extension (Manifest V3)
├── index.html          # Struktur halaman
├── style.css           # Reka bentuk Glassmorphism
├── script.js           # Logik jam, CPU & cuaca
└── README.md           # Dokumentasi projek
```

---

# 🔐 Keperluan Kebenaran

Extension memerlukan kebenaran berikut dalam `manifest.json`.

| Permission    | Fungsi                                                                  |
| ------------- | ----------------------------------------------------------------------- |
| `system.cpu`  | Membaca penggunaan CPU komputer secara masa nyata.                      |
| `geolocation` | Mendapatkan lokasi pengguna untuk memaparkan cuaca semasa. *(Opsional)* |

---

# 📦 Panduan Pemasangan

## Kaedah 1 — Load Unpacked

1. Clone repositori.

```bash
git clone https://github.com/insiders137209/vigilant-startpage.git
```

2. Buka Chrome atau pelayar berasaskan Chromium.

3. Pergi ke:

```
chrome://extensions/
```

4. Aktifkan **Developer Mode**.

5. Klik **Load unpacked**.

6. Pilih folder projek `vigilant-startpage`.

7. Buka tab baharu (`Ctrl + T`).

---

## Kaedah 2 — Membina Fail `.crx`

1. Pergi ke:

```
chrome://extensions/
```

2. Aktifkan **Developer Mode**.

3. Klik **Pack extension**.

4. Pilih folder projek.

5. Klik **Pack Extension**.

Chrome akan menghasilkan:

* `.crx`
* `.pem`

Fail `.crx` boleh dipasang pada komputer lain.

---

# 🎨 Pengubahsuaian

## Menukar Warna Latar Belakang

Fail:

```text
style.css
```

```css
body{
    background: linear-gradient(135deg,#0f172a 0%,#1e1b4b 100%);
}
```

---

## Menukar Lokasi Cuaca Lalai

Fail:

```text
script.js
```

Contoh menukar lokasi kepada Kuala Lumpur.

```javascript
() => fetchWeather(
    3.1390,
    101.6869,
    "Kuala Lumpur"
)
```

---

# ❓ Penyelesaian Masalah

## Penggunaan CPU sentiasa 0%

Pastikan:

* `system.cpu` telah ditambah ke dalam `manifest.json`.
* Extension telah di-*reload* selepas mengubah fail manifest.

---

## Cuaca tidak mengesan lokasi

Semak bahawa:

* Geolocation dibenarkan.
* Jika akses lokasi ditolak, extension akan menggunakan lokasi lalai dalam `script.js`.

---

# 🔮 Roadmap

* [ ] Quick Links / Bookmarks
* [ ] Custom Wallpapers
* [ ] Integrasi Unsplash API
* [ ] Bacaan RAM menggunakan `system.memory`
* [ ] Dark / Light Mode
* [ ] Tetapan pengguna
* [ ] Pilihan format jam 12/24 jam
* [ ] Paparan penggunaan rangkaian (*Network Usage*)

---

# 📄 Lesen & Kredit

## Lesen

Projek ini dilesenkan di bawah **MIT License**.

Anda bebas untuk:

* Menggunakan
* Mengubah suai
* Mengedar semula
* Menggunakannya bagi tujuan komersial

selagi mematuhi syarat lesen MIT.

---

## Kredit

* Inspirasi antaramuka daripada **Bonjourr Startpage**.
* Data cuaca menggunakan **Open-Meteo API**.
* Dibangunkan menggunakan HTML, CSS dan JavaScript tanpa sebarang framework (*Zero Dependencies*).
