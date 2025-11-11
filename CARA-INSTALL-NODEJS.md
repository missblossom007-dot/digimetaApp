# 📦 Cara Install Node.js di Windows

## Langkah 1: Download Node.js

1. Buka browser (Chrome/Edge/Firefox)
2. Kunjungi: **https://nodejs.org/**
3. Klik tombol hijau **"Download Node.js (LTS)"**
   - LTS = Long Term Support (versi stabil)
   - Ukuran file sekitar 30-50 MB
4. Tunggu download selesai

## Langkah 2: Install Node.js

1. Buka file installer yang sudah didownload
   - Biasanya di folder **Downloads**
   - Nama file: `node-v20.x.x-x64.msi` (atau versi terbaru)

2. Klik **Next** di welcome screen

3. Centang **"I accept the terms..."** → Klik **Next**

4. Pilih lokasi instalasi (biarkan default) → Klik **Next**

5. **PENTING:** Pastikan semua fitur tercentang, terutama:
   - ✅ Node.js runtime
   - ✅ npm package manager
   - ✅ Add to PATH
   
6. Klik **Next** → Klik **Install**

7. Tunggu proses instalasi (2-5 menit)

8. Klik **Finish**

## Langkah 3: Restart Terminal

1. **Tutup semua terminal/PowerShell yang sedang terbuka**
2. Buka PowerShell atau Command Prompt baru
3. Atau restart komputer untuk memastikan

## Langkah 4: Verifikasi Instalasi

Buka PowerShell/CMD, ketik:

```bash
node --version
```

Harusnya muncul: `v20.x.x` (atau versi yang Anda install)

Lalu ketik:

```bash
npm --version
```

Harusnya muncul: `10.x.x` (atau versi npm)

## Langkah 5: Jalankan Project

Setelah Node.js terinstall, jalankan perintah ini di folder project:

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Tunggu sampai muncul:

```
✓ Ready in 2.5s
○ Local:   http://localhost:3000
```

Buka browser dan akses: **http://localhost:3000**

## ❓ Troubleshooting

### Error: "npm is not recognized"
- Restart terminal/komputer
- Pastikan saat install Node.js, opsi "Add to PATH" tercentang

### Error: "Permission denied"
- Jalankan PowerShell sebagai Administrator
- Klik kanan PowerShell → Run as Administrator

### Port 3000 sudah dipakai
```bash
npm run dev -- -p 3001
```
(Akan jalan di port 3001)

## ✅ Selesai!

Setelah berhasil, Anda bisa:
- Lihat website di browser
- Test fitur QR Code di setiap buku
- Coba buat artikel blog baru
- Lihat detail artikel

---

**Butuh bantuan?** Hubungi saya jika ada error!
