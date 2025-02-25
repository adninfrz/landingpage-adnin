# Vite + Tailwind CSS + Alpine JS Project

Proyek ini dibuat menggunakan Vite sebagai build tool, dengan Tailwind CSS untuk styling dan Alpine JS untuk fungsionalitas interaktif di sisi klien.

## Daftar Isi
- [Persyaratan](#persyaratan)
- [Instalasi](#instalasi)
- [Struktur Proyek](#struktur-proyek)
- [Pengembangan](#pengembangan)
- [Build](#build)
- [Fitur](#fitur)
- [Customisasi](#customisasi)
- [Sumber Daya](#sumber-daya)
- [Lisensi](#lisensi)

## Persyaratan

- Node.js (versi 14 atau lebih baru)
- npm atau yarn

## Instalasi

Ikuti langkah-langkah berikut untuk menginstal dan menjalankan proyek:

1. Clone repositori ini
   ```bash
   git clone https://github.com/zachran-recodex/landingpage-adnin.git
   cd landingpage-adnin
   ```

2. Instal dependensi
   ```bash
   npm install
   # atau, jika menggunakan yarn
   yarn install
   ```

3. Jalankan server pengembangan
   ```bash
   npm run dev
   # atau
   yarn dev
   ```

4. Buka browser dan akses `http://localhost:5174`

## Struktur Proyek

```
nama-proyek/
├── dist/                 # File output untuk build production
├── node_modules/         # Dependensi npm
├── public/               # File statis yang tidak perlu diproses
├── src/
│   ├── assets/           # Asset yang akan diproses oleh Vite
│   ├── components/       # Komponen yang dapat digunakan kembali
│   ├── style.css         # File CSS utama dengan direktif Tailwind
│   └── main.js           # File JavaScript utama
├── index.html            # Halaman utama
├── package.json          # Konfigurasi npm dan dependensi
├── tailwind.config.js    # Konfigurasi Tailwind CSS
├── postcss.config.js     # Konfigurasi PostCSS
└── vite.config.js        # Konfigurasi Vite
```

## Pengembangan

Untuk menjalankan server pengembangan dengan hot-reload:

```bash
npm run dev
```

Server pengembangan akan berjalan di `http://localhost:5174` secara default.

## Build

Untuk membuat build untuk production:

```bash
npm run build
```

File hasil build akan tersedia di direktori `dist`, yang siap untuk di-deploy ke web server atau layanan hosting.

Untuk melihat preview build production secara lokal:

```bash
npm run preview
```

## Fitur

Proyek ini memiliki fitur-fitur berikut:

- **Vite** - Build tool yang cepat dengan hot module replacement
- **Tailwind CSS** - Framework CSS utility-first untuk styling yang fleksibel
- **Alpine JS** - Framework JavaScript minimal untuk menambahkan interaktivitas ke halaman

## Customisasi

### Tailwind CSS

Anda dapat mengubah tema dan konfigurasi Tailwind di file `tailwind.config.js`:

```javascript
import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
   ],

   theme: {
      extend: {
         fontFamily: {
            sans: ['Figtree', ...defaultTheme.fontFamily.sans],
         },
         colors: {
            // Tambahkan warna kustom di sini
         },
         // Ekstend theme lainnya
      },
   },

   plugins: [
      forms,
      // Tambahkan plugin di sini
   ],
};
```

### Alpine JS

Alpine JS dikonfigurasi di file `main.js`. Anda dapat menambahkan komponen atau direktif kustom di sana.

## Sumber Daya

- [Dokumentasi Vite](https://vitejs.dev/guide/)
- [Dokumentasi Tailwind CSS](https://tailwindcss.com/docs)
- [Dokumentasi Alpine JS](https://alpinejs.dev/start-here)

## Lisensi

[MIT](LICENSE)
