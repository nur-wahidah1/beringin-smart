<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Laporan;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $petugas = User::create([
            'name' => 'Pak Hendra (Koordinator Sarana & Prasarana)',
            'email' => 'petugas@beringin.sch.id',
            'password' => Hash::make('password123'),
            'role' => 'petugas',
        ]);

        $dhia = User::create([
            'name' => 'Dhiaurrahman (XI PPLG 1)',
            'email' => 'dhiaurrahman@beringin.sch.id',
            'password' => Hash::make('password123'),
            'role' => 'siswa',
        ]);

        $wahidah = User::create([
            'name' => 'Nur Wahidah (XI PPLG 1)',
            'email' => 'nurwahidah@beringin.sch.id',
            'password' => Hash::make('password123'),
            'role' => 'siswa',
        ]);

        $teman = User::create([
            'name' => 'Fajar Alamsyah (Siswa XI PPLG 1)',
            'email' => 'siswa@beringin.sch.id',
            'password' => Hash::make('password123'),
            'role' => 'siswa',
        ]);

        Laporan::create([
            'user_id' => $dhia->id,
            'nama' => 'Kabel VGA & HDMI Proyektor Lab RPL Meleleh Akibat Panas',
            'lokasi' => 'Lab Pemrograman & Jaringan Lt. 2',
            'kategori' => 'Laboratorium',
            'deskripsi' => 'Kabel data transfer monitor proyektor terhimpit meja server dan lapisan luar isolator mengelupas sehingga sinyal tampilan sering terputus.',
            'status' => 'Sedang Diproses',
        ]);

        Laporan::create([
            'user_id' => $wahidah->id,
            'nama' => 'Pintu Kaca Etalase Ruang Praktik PPLG Menggesek Keramik',
            'lokasi' => 'Ruang Teori & Praktik PPLG',
            'kategori' => 'Fasilitas Kelas',
            'deskripsi' => 'Engsel bawah pintu lemari peraga modul longgar, daun pintu bergesekan langsung dengan ubin lantai dan berisiko pecah.',
            'status' => 'Menunggu',
        ]);

        Laporan::create([
            'user_id' => $dhia->id,
            'nama' => 'Kran Sensor Wastafel Koridor Utama Patah Mengalir',
            'lokasi' => 'Toilet Siswa Gedung Barat Lt. 1',
            'kategori' => 'Toilet/Sanitasi',
            'deskripsi' => 'Pipa leher angsa kran cuci tangan patah di bagian drat bawah sehingga air bersih terus mengalir membanjiri lantai selasar.',
            'status' => 'Selesai',
        ]);

        Laporan::create([
            'user_id' => $wahidah->id,
            'nama' => 'Router Mikrotik Access Point Kelas XI PPLG 1 Sering Restart',
            'lokasi' => 'Ruang Kelas XI PPLG 1',
            'kategori' => 'Laboratorium',
            'deskripsi' => 'Adaptor power supply access point Wi-Fi kelas mengalami overheat dan menyebabkan koneksi jaringan lokal mati berulang kali saat praktik.',
            'status' => 'Selesai',
        ]);

        Laporan::create([
            'user_id' => $teman->id,
            'nama' => 'Stop Kontak Meja Praktik Siswa Baris 3 Korsleting Listrik',
            'lokasi' => 'Lab Rekayasa Perangkat Lunak',
            'kategori' => 'Fasilitas Kelas',
            'deskripsi' => 'Terminal colokan listrik nomor 7 mengeluarkan percikan api kecil saat adaptor laptop dihubungkan dan mengeluarkan bau sangit.',
            'status' => 'Sedang Diproses',
        ]);
    }
}
