# ✅ Checklist Upload ke GitHub

## 📦 File yang Perlu Diupload/Update:

### 1. File Baru (Create New File):

#### Countdown Timer:
- [ ] `src/components/Countdown.jsx`
  - Path: `src/components/Countdown.jsx`
  - Cara: Add file → Create new file → Paste kode → Commit

#### Dokumentasi:
- [ ] `FITUR-COUNTDOWN.md`
  - Path: `FITUR-COUNTDOWN.md`
  - Cara: Add file → Create new file → Paste kode → Commit

- [ ] `FITUR-EDITOR-ARTIKEL.md`
  - Path: `FITUR-EDITOR-ARTIKEL.md`
  - Cara: Add file → Create new file → Paste kode → Commit

---

### 2. File yang Diupdate (Edit Existing):

#### Homepage (Countdown):
- [ ] `src/app/page.jsx`
  - Cara: Buka file → Klik ✏️ → Replace isi → Commit changes
  - Yang berubah: Import Countdown, ganti timer statis dengan <Countdown />

#### Editor Artikel:
- [ ] `src/app/create-blog/page.jsx`
  - Cara: Buka file → Klik ✏️ → Replace isi → Commit changes
  - Yang berubah: Form editor lengkap dengan toolbar, preview, word counter

#### Config:
- [ ] `next.config.js`
  - Cara: Buka file → Klik ✏️ → Replace isi → Commit changes
  - Yang berubah: Hapus `output: 'export'`, tambah domain QR server

---

## 🎯 Langkah-Langkah Detail:

### A. Upload File Baru:

1. **Buka:** https://github.com/missblossom007-dot/digimetashop

2. **Klik:** "Add file" → "Create new file"

3. **Untuk `src/components/Countdown.jsx`:**
   - Di kotak "Name your file", ketik: `src/components/Countdown.jsx`
   - GitHub akan otomatis buat folder `src/components/`
   - Paste kode dari file lokal Anda
   - Scroll ke bawah
   - Commit message: "Add Countdown component"
   - Klik "Commit new file"

4. **Ulangi untuk file dokumentasi:**
   - `FITUR-COUNTDOWN.md`
   - `FITUR-EDITOR-ARTIKEL.md`

---

### B. Update File yang Ada:

1. **Buka:** https://github.com/missblossom007-dot/digimetashop

2. **Navigasi ke file** (contoh: `src/app/page.jsx`)
   - Klik folder `src`
   - Klik folder `app`
   - Klik file `page.jsx`

3. **Klik icon pensil** (✏️) di pojok kanan atas

4. **Edit file:**
   - Tekan Ctrl+A (select all)
   - Delete
   - Paste kode baru dari file lokal

5. **Commit changes:**
   - Scroll ke bawah
   - Commit message: "Update homepage with countdown timer"
   - Klik "Commit changes"

6. **Ulangi untuk file lain:**
   - `src/app/create-blog/page.jsx` → "Update blog editor with rich features"
   - `next.config.js` → "Fix next config for Vercel"

---

## 🔍 Cara Copy Kode dari File Lokal:

### Windows:

1. **Buka File Explorer**
2. **Navigasi ke:** `C:\Users\hp\Desktop\digimeta1`
3. **Buka file dengan Notepad:**
   - Klik kanan file → "Open with" → "Notepad"
   - Atau drag file ke Notepad
4. **Select All:** Ctrl+A
5. **Copy:** Ctrl+C
6. **Paste di GitHub:** Ctrl+V

---

## ⚡ Vercel Auto-Deploy:

Setelah commit ke GitHub:

1. **Vercel otomatis detect perubahan**
2. **Build dimulai otomatis** (2-3 menit)
3. **Cek status:**
   - Buka: https://vercel.com/dashboard
   - Klik project "digimetashop"
   - Lihat status deployment

4. **Jika berhasil:**
   - Status: ✅ Ready
   - Klik URL untuk lihat website

5. **Jika gagal:**
   - Status: ❌ Failed
   - Klik "View Build Logs"
   - Screenshot error
   - Kirim ke saya untuk bantuan

---

## 📱 Test Fitur Baru:

Setelah deploy berhasil:

### 1. Test Countdown:
- Buka homepage
- Scroll ke Flash Sale banner
- Lihat countdown bergerak mundur setiap detik

### 2. Test Editor Artikel:
- Login ke website
- Klik "Tulis Artikel"
- Test toolbar:
  - Klik H2 → Masukkan teks
  - Klik "🖼️ Gambar" → Masukkan URL
  - Klik "🔗 Link" → Masukkan URL
- Lihat word counter berubah
- Klik "👁️ Preview"
- Publikasikan artikel

### 3. Test QR Code:
- Buka halaman buku
- Klik tombol 📱 di setiap buku
- Scan QR code dengan HP
- Harus buka WhatsApp

---

## 🆘 Troubleshooting:

### Error: "File not found"
- Pastikan path file benar
- Contoh: `src/components/Countdown.jsx` (bukan `components/Countdown.jsx`)

### Error: "Syntax error"
- Cek kode yang dipaste
- Pastikan tidak ada karakter aneh
- Copy ulang dari file asli

### Build Failed di Vercel:
- Cek build logs
- Screenshot error
- Kirim ke saya

### Countdown tidak bergerak:
- Clear cache browser (Ctrl+Shift+R)
- Cek console browser (F12)
- Pastikan file `Countdown.jsx` terupload

### Editor tidak muncul:
- Pastikan file `create-blog/page.jsx` terupdate
- Clear cache browser
- Login ulang

---

## 📊 Progress Tracking:

```
Upload File Baru:
[ ] src/components/Countdown.jsx
[ ] FITUR-COUNTDOWN.md
[ ] FITUR-EDITOR-ARTIKEL.md

Update File:
[ ] src/app/page.jsx
[ ] src/app/create-blog/page.jsx
[ ] next.config.js

Vercel Deploy:
[ ] Build started
[ ] Build success
[ ] Website live

Test Fitur:
[ ] Countdown berjalan
[ ] Editor berfungsi
[ ] QR code muncul
```

---

## 🎉 Setelah Selesai:

1. **Bookmark URL website**
2. **Test semua fitur**
3. **Screenshot untuk presentasi**
4. **Siap presentasi!**

---

**Good luck! 🚀**

Jika ada masalah, screenshot dan kirim ke saya!
