# Wonderfull Inn

Platform pemesanan paket wisata berbasis web yang dikembangkan menggunakan React dan Vite. Aplikasi ini menyediakan fitur manajemen paket wisata untuk Travel Agent serta sistem pemesanan untuk Tourist.

## Deskripsi Sistem

Wonderfull Inn merupakan Single Page Application (SPA) yang menghubungkan Travel Agent dengan Tourist dalam ekosistem pariwisata. Travel Agent dapat mengelola paket wisata dan destinasi, sedangkan Tourist dapat melakukan pencarian, pemesanan, dan memberikan ulasan terhadap paket yang telah digunakan.

## Fitur Utama

### Autentikasi

- Registrasi dan login dengan dua role: Tourist dan Travel Agent
- Proteksi route berdasarkan role pengguna
- Manajemen sesi menggunakan JWT token

### Manajemen Paket Wisata (Travel Agent)

- Pembuatan, pengeditan, dan penghapusan paket wisata
- Pengelolaan destinasi wisata
- Pemantauan booking dan verifikasi pembayaran
- Dashboard analitik performa paket

### Sistem Pemesanan (Tourist)

- Pencarian dan filter paket wisata
- Pemesanan paket dengan pemilihan tanggal dan jumlah peserta
- Upload bukti pembayaran via QRIS
- Riwayat pemesanan dan status tracking
- Wishlist paket favorit

### Ulasan dan Rating

- Pemberian ulasan setelah perjalanan selesai
- Sistem rating bintang untuk paket wisata

## Teknologi

| Komponen         | Teknologi         |
| ---------------- | ----------------- |
| Framework        | React 19          |
| Build Tool       | Vite              |
| Routing          | React Router DOM  |
| State Management | Zustand           |
| HTTP Client      | Axios             |
| Styling          | Tailwind CSS      |
| UI Components    | Radix UI (Shadcn) |
| Form Validation  | Zod               |
| Notifications    | Sonner            |

## Struktur Direktori

```
src/
├── components/     # Komponen UI reusable
│   └── ui/         # Komponen Shadcn UI
├── pages/          # Halaman aplikasi
│   ├── auth/       # Halaman autentikasi
│   └── dashboard/  # Dashboard Tourist dan Agent
├── services/       # Layer komunikasi API
├── store/          # State management Zustand
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
└── layout/         # Layout components
```

## Instalasi

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build
```

## Konfigurasi

Buat file `.env` dengan variabel berikut:

```
VITE_API_URL=http://localhost:6543
```

## Akun Demo

| Role    | Email                        | Password |
| ------- | ---------------------------- | -------- |
| Tourist | tourist@wonderfullinn.web.id | password |
| Agent   | agent@wonderfullinn.web.id   | password |
