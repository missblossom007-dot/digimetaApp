# ✅ Checklist Update Final ke Vercel

## 📦 File Baru yang Perlu Diupload:

### 1. Countdown Timer:
- [ ] `src/components/Countdown.jsx`

### 2. Editor Artikel:
- [ ] `src/app/create-blog/page.jsx` (updated)

### 3. Upload CSV & Midtrans:
- [ ] `src/lib/midtrans.js`
- [ ] `src/app/admin/upload-products/page.jsx`
- [ ] `src/components/MidtransButton.jsx`

### 4. File yang Diupdate:
- [ ] `src/app/page.jsx` (countdown)
- [ ] `next.config.js` (fixed)
- [ ] `.env.local` (Midtrans keys)

### 5. Dokumentasi:
- [ ] `FITUR-COUNTDOWN.md`
- [ ] `FITUR-EDITOR-ARTIKEL.md`
- [ ] `FITUR-UPLOAD-CSV-MIDTRANS.md`

---

## 🚀 Cara Upload ke GitHub:

### Opsi 1: Pakai Script (Jika punya Git)

**Double-click file:** `upload-to-github.bat`

Atau jalankan manual:
```bash
git add .
git commit -m "Add countdown, rich editor, CSV upload, and Midtrans payment"
git push origin main
```

---

### Opsi 2: Manual via GitHub Web

#### A. Upload File Baru:

1. **Buka:** https://github.com/missblossom007-dot/digimetashop

2. **Upload Countdown Component:**
   - Klik "Add file" → "Create new file"
   - Path: `src/components/Countdown.jsx`
   - Copy paste isi file dari komputer
   - Commit: "Add countdown component"

3. **Upload Midtrans Library:**
   - Klik "Add file" → "Create new file"
   - Path: `src/lib/midtrans.js`
   - Copy paste isi file
   - Commit: "Add Midtrans integration"

4. **Upload MidtransButton:**
   - Klik "Add file" → "Create new file"
   - Path: `src/components/MidtransButton.jsx`
   - Copy paste isi file
   - Commit: "Add Midtrans payment button"

5. **Upload Admin Page:**
   - Klik "Add file" → "Create new file"
   - Path: `src/app/admin/upload-products/page.jsx`
   - Copy paste isi file
   - Commit: "Add CSV upload page"

#### B. Update File yang Ada:

1. **Update Homepage:**
   - Buka: `src/app/page.jsx`
   - Klik ✏️ (edit)
   - Replace dengan isi baru
   - Commit: "Add countdown to homepage"

2. **Update Create Blog:**
   - Buka: `src/app/create-blog/page.jsx`
   - Klik ✏️ (edit)
   - Replace dengan isi baru
   - Commit: "Update blog editor with rich features"

3. **Update Config:**
   - Buka: `next.config.js`
   - Klik ✏️ (edit)
   - Replace dengan isi baru
   - Commit: "Fix next config"

---

## ⚙️ Setup Environment Variables di Vercel:

1. **Buka Vercel Dashboard:**
   - https://vercel.com/dashboard

2. **Pilih Project:** `digimetashop`

3. **Buka Settings → Environment Variables**

4. **Tambahkan Variables:**

```
Name: NEXT_PUBLIC_MIDTRANS_CLIENT_KEY
Value: (dapatkan dari Midtrans dashboard)

Name: NEXT_PUBLIC_MIDTRANS_SERVER_KEY
Value: (dapatkan dari Midtrans dashboard)

Name: NEXT_PUBLIC_MIDTRANS_PRODUCTION
Value: false
```

5. **Klik "Save"**

6. **Redeploy:**
   - Klik tab "Deployments"
   - Klik "Redeploy" pada deployment terakhir

---

## 🧪 Testing Setelah Deploy:

### 1. Test Countdown:
- [ ] Buka homepage
- [ ] Scroll ke Flash Sale banner
- [ ] Countdown bergerak mundur setiap detik

### 2. Test QR Code:
- [ ] Scroll ke katalog buku
- [ ] Klik tombol 📱
- [ ] QR code muncul
- [ ] Scan dengan HP

### 3. Test Editor Artikel:
- [ ] Buka /create-blog
- [ ] Login (jika perlu)
- [ ] Test toolbar (H2, H3, Gambar, Link)
- [ ] Lihat word counter
- [ ] Klik Preview
- [ ] Publikasikan artikel

### 4. Test Upload CSV:
- [ ] Buka /admin/upload-products
- [ ] Download template
- [ ] Upload file CSV
- [ ] Preview data
- [ ] Upload produk

### 5. Test Midtrans:
- [ ] Setup Midtrans keys di Vercel
- [ ] Buka halaman produk
- [ ] Klik "Bayar Sekarang"
- [ ] Payment popup muncul
- [ ] Test dengan test card

---

## 📊 Progress Tracking:

```
Upload File Baru:
[ ] src/components/Countdown.jsx
[ ] src/lib/midtrans.js
[ ] src/components/MidtransButton.jsx
[ ] src/app/admin/upload-products/page.jsx

Update File:
[ ] src/app/page.jsx
[ ] src/app/create-blog/page.jsx
[ ] next.config.js

Setup Vercel:
[ ] Add Midtrans environment variables
[ ] Redeploy

Testing:
[ ] Countdown berjalan
[ ] QR code muncul
[ ] Editor berfungsi
[ ] Upload CSV berhasil
[ ] Midtrans payment works
```

---

## 🎯 Fitur yang Sudah Siap:

### ✅ Countdown Timer
- Real-time countdown
- Auto-reset ke 24 jam
- Animasi smooth

### ✅ QR Code
- QR untuk setiap buku
- Link ke WhatsApp
- Scan dengan HP

### ✅ Rich Text Editor
- Toolbar lengkap (H2, H3, Paragraf, List, Gambar, Link)
- Word counter (max 1000 kata)
- Preview mode
- Statistik artikel

### ✅ Upload CSV
- Bulk import produk
- Preview data
- Download template
- Validasi format

### ✅ Midtrans Payment
- Payment gateway terintegrasi
- Support semua metode pembayaran
- Sandbox & Production mode
- Transaction tracking

---

## 🔗 URL Penting:

**GitHub Repository:**
```
https://github.com/missblossom007-dot/digimetashop
```

**Vercel Dashboard:**
```
https://vercel.com/dashboard
```

**Midtrans Dashboard:**
```
https://dashboard.midtrans.com
```

**Website (setelah deploy):**
```
https://digimetashop.vercel.app
(atau URL custom Anda)
```

---

## 📞 Jika Ada Masalah:

### Build Failed:
1. Cek build logs di Vercel
2. Screenshot error
3. Perbaiki error
4. Push ulang ke GitHub

### Environment Variables:
1. Pastikan semua keys sudah diisi
2. Tidak ada typo
3. Redeploy setelah update

### Fitur Tidak Berfungsi:
1. Clear browser cache (Ctrl+Shift+R)
2. Cek console browser (F12)
3. Cek network tab untuk API errors

---

## 🎉 Setelah Selesai:

1. **Bookmark URL website**
2. **Test semua fitur**
3. **Screenshot untuk presentasi**
4. **Siap presentasi!**

---

**Good luck! 🚀**

Jika butuh bantuan, screenshot error dan kirim ke saya!
