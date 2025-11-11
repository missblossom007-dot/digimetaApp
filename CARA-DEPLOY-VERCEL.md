# 🚀 Cara Deploy DigimetaShop ke Vercel

## Metode 1: Deploy via GitHub (Paling Mudah)

### Langkah 1: Upload ke GitHub

1. **Buka GitHub.com**
   - Login ke akun GitHub Anda
   - Jika belum punya, daftar di https://github.com/signup

2. **Buat Repository Baru**
   - Klik tombol **"+"** di pojok kanan atas
   - Pilih **"New repository"**
   - Nama repository: `digimetashop`
   - Pilih **Public** atau **Private**
   - **JANGAN** centang "Initialize with README"
   - Klik **"Create repository"**

3. **Upload Project ke GitHub**
   
   **Cara A: Via GitHub Desktop (Mudah)**
   - Download GitHub Desktop: https://desktop.github.com/
   - Install dan login
   - File → Add Local Repository
   - Pilih folder `digimeta1`
   - Commit changes → Push to GitHub
   
   **Cara B: Via Web (Paling Mudah)**
   - Di halaman repository yang baru dibuat
   - Klik **"uploading an existing file"**
   - Drag & drop semua file project Anda
   - Klik **"Commit changes"**

### Langkah 2: Deploy ke Vercel

1. **Buka Vercel.com**
   - Kunjungi: https://vercel.com/
   - Klik **"Sign Up"** atau **"Login"**
   - Pilih **"Continue with GitHub"**
   - Authorize Vercel untuk akses GitHub

2. **Import Project**
   - Klik **"Add New..."** → **"Project"**
   - Pilih repository **"digimetashop"**
   - Klik **"Import"**

3. **Configure Project**
   - Framework Preset: **Next.js** (otomatis terdeteksi)
   - Root Directory: `./` (biarkan default)
   - Build Command: `npm run build` (otomatis)
   - Output Directory: `.next` (otomatis)
   
4. **Environment Variables (Opsional)**
   - Klik **"Environment Variables"**
   - Tambahkan jika sudah punya Backendless:
     ```
     NEXT_PUBLIC_BACKENDLESS_APP_ID = your_app_id
     NEXT_PUBLIC_BACKENDLESS_API_KEY = your_api_key
     ```
   - Jika belum punya, skip saja (akan pakai data default)

5. **Deploy!**
   - Klik **"Deploy"**
   - Tunggu 2-3 menit
   - Selesai! 🎉

6. **Akses Website**
   - Setelah deploy selesai, akan muncul URL
   - Contoh: `https://digimetashop.vercel.app`
   - Klik URL untuk buka website
   - Share URL ini untuk presentasi!

---

## Metode 2: Deploy via Vercel CLI (Untuk yang sudah punya Node.js)

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy production
vercel --prod
```

---

## ✅ Fitur yang Sudah Siap

Setelah deploy, website Anda akan punya:

1. **Homepage dengan Katalog Buku**
   - 5 buku terlaris dengan diskon
   - Flash sale banner
   - Testimoni pelanggan

2. **QR Code untuk Setiap Buku** ✨ BARU!
   - Klik tombol 📱 di setiap buku
   - Scan QR code untuk beli via WhatsApp
   - Otomatis generate link pembelian

3. **Blog dengan Backendless** ✨ BARU!
   - List artikel blog
   - Detail artikel lengkap
   - Share ke social media
   - Create artikel baru (perlu login)

4. **Halaman Lainnya**
   - About Us
   - Services
   - Contact
   - Request Buku Langka
   - Teams

---

## 🔧 Update Website Setelah Deploy

Setiap kali Anda push perubahan ke GitHub, Vercel akan otomatis deploy ulang!

```bash
# Jika pakai GitHub Desktop
1. Commit changes
2. Push to origin
3. Vercel auto-deploy

# Jika pakai Git command
git add .
git commit -m "Update website"
git push
```

---

## 📱 Custom Domain (Opsional)

Jika punya domain sendiri (misal: digimetashop.com):

1. Buka project di Vercel Dashboard
2. Settings → Domains
3. Add domain Anda
4. Ikuti instruksi DNS configuration
5. Tunggu propagasi (5-60 menit)

---

## ❓ Troubleshooting

### Build Failed
- Cek error message di Vercel dashboard
- Pastikan semua file sudah terupload
- Cek `package.json` sudah benar

### Environment Variables
- Jika pakai Backendless, pastikan sudah set di Vercel
- Settings → Environment Variables
- Redeploy setelah tambah env vars

### 404 Not Found
- Pastikan routing Next.js sudah benar
- Cek folder structure di GitHub

---

## 🎯 Tips Presentasi

1. **Siapkan URL Vercel** sebelum presentasi
2. **Test semua fitur** sebelum presentasi:
   - Klik setiap menu
   - Test QR code (scan dengan HP)
   - Buka detail artikel blog
3. **Bookmark URL** di browser
4. **Screenshot** untuk backup jika internet bermasalah

---

## 📞 Butuh Bantuan?

Jika ada masalah saat deploy:
- Cek dokumentasi Vercel: https://vercel.com/docs
- Atau hubungi saya untuk bantuan lebih lanjut

**Selamat mencoba! 🚀**
