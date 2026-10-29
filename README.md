# Beringin Smart 🏫 — Portal Pengaduan Sarana & Prasarana Sekolah

<div align="center">
  <img src="Beringin-Smart/public/logo-smkn1beringin.png" alt="Logo SMKN 1 Beringin" width="130" style="margin-bottom: 12px;"/>
  <p><strong>Aplikasi Pelaporan & Manajemen Kerusakan Sarana Prasarana Terpadu</strong></p>
  <p><em>SMK Negeri 1 Beringin • Tahun Ajaran 2026/2027</em></p>
</div>

---

## 📋 Informasi Proyek Kolaborasi

| Atribut Proyek | Informasi Resmi Terdaftar |
| :--- | :--- |
| **Aplikasi** | **Beringin Smart** |
| **Tim Pengembang** | **Dhiaurrahman & Nur Wahidah** |
| **Pengembang 1** | **Dhiaurrahman** (XI PPLG 1) |
| **Pengembang 2** | **Nur Wahidah** (XI PPLG 1) |
| **Sekolah** | SMK Negeri 1 Beringin, Deli Serdang |
| **Petugas / Teknisi** | Pak Hendra *(Koordinator Sarana & Prasarana)* |
| **Frontend Stack** | Ionic React (v8), Vite, TypeScript, Ionicons, Axios |
| **Backend Stack** | Laravel 11 RESTful API, Laravel Sanctum, MySQL |
| **Database** | `beringin_smart_dhia_wahidah` |
| **Standar Acuan** | SKKNI No. 282 Tahun 2016 (Pemrograman Web & Perangkat Bergerak) |

---

## 🎨 Karakteristik & Filosofi Desain

Proyek kolaborasi ini mengusung tema **Midnight Sapphire & Tuscan Amber**:
- **Warna Utama (Primary):** *Deep Midnight Sapphire* (`#1d4ed8`, `#1e40af`, `#172554`) melambangkan stabilitas, ketelitian teknis, dan keandalan sistem pelaporan inventaris sekolah.
- **Warna Aksen (Accent):** *Tuscan Amber & Solar Gold* (`#f59e0b`, `#fbbf24`) mencerminkan responsivitas penanganan perbaikan dan keterbukaan layanan bagi warga sekolah.
- **Struktur Antarmuka (UI):** Dilengkapi *dual-contributor badge*, header berkontur halus dengan bingkai emas amber, serta *responsive card grid* untuk efisiensi monitoring status tiket secara *real-time*.

---

## 🔐 Kredensial Akun Pengujian Sistem

| Peran Pengguna | Nama Terdaftar | Email Login | Kata Sandi | Hak Akses |
| :--- | :--- | :--- | :--- | :--- |
| **Petugas Sarpras** | Pak Hendra | `petugas@beringin.sch.id` | `password123` | Validasi, ubah status tiket, monitoring menyeluruh |
| **Siswa / Pelapor 1**| Dhiaurrahman | `dhiaurrahman@beringin.sch.id`| `password123` | Buat laporan baru, riwayat pengaduan, detail tiket |
| **Siswa / Pelapor 2**| Nur Wahidah | `nurwahidah@beringin.sch.id` | `password123` | Buat laporan baru, riwayat pengaduan, detail tiket |
| **Siswa Umum** | Fajar Alamsyah | `siswa@beringin.sch.id` | `password123` | Akun verifikasi pelapor umum |

---

## 🚀 Panduan Menjalankan Sistem

### 1. Prasyarat Lingkungan
- PHP >= 8.2 & Composer
- Node.js >= 18.x & NPM
- MySQL Server (Laragon / XAMPP)

### 2. Konfigurasi Backend (Laravel)
```bash
cd beringin-backend
php artisan migrate:fresh --seed --force
php artisan serve
```
Backend berjalan pada: `http://localhost:8000`

### 3. Konfigurasi Frontend (Ionic React)
```bash
cd Beringin-Smart
npm run dev
```
Aplikasi web berjalan pada: `http://localhost:5173`

---

## 📸 Dokumentasi & Bukti Pengujian Sistem

Seluruh alur aplikasi telah diuji dan didokumentasikan ke dalam folder `screenshots/`:
1. `berkas_01_portal_autentikasi_sistem.png` — Halaman login dengan identitas kolaborasi Dhiaurrahman & Nur Wahidah.
2. `berkas_02_pengujian_validasi_kredensial.png` — Uji coba keamanan input password.
3. `berkas_03_beranda_feed_pelapor_siswa.png` — Dashboard pelapor dengan statistik tiket.
4. `berkas_04_rincian_lengkap_tiket_sarpras.png` — Informasi detail pelaporan fasilitas.
5. `berkas_05_filter_kategori_laboratorium.png` — Penyaringan laporan berdasarkan kategori.
6. `berkas_06_formulir_pengajuan_kerusakan.png` — Formulir pengaduan kerusakan sarpras.
7. `berkas_07_konfirmasi_tiket_baru_masuk.png` — Notifikasi tiket berhasil diteruskan ke sistem.
8. `berkas_08_pusat_kontrol_petugas_sarpras.png` — Tampilan manajemen kontrol petugas sarpras.
9. `berkas_09_panel_resolusi_pekerjaan_teknisi.png` — Dialog perubahan status penanganan.
10. `berkas_10_verifikasi_pekerjaan_tuntas.png` — Tiket status selesai dan tervalidasi.
11. `berkas_11_tampilan_responsif_seluler.png` — Tampilan adaptif pada layar smartphone.

---
<div align="center">
  <p>© 2026 <strong>Beringin Smart</strong> • SMKN 1 Beringin. Hak Cipta Dilindungi Undang-Undang.</p>
</div>
