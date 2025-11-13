# 📚 Index Dokumentasi - DigimetaShop

Panduan lengkap untuk setup, deployment, dan pengelolaan website.

---

## 🚀 Quick Start

**Baru mulai? Mulai dari sini:**

1. **SETUP-LENGKAP-STEP-BY-STEP.md** - Setup lengkap dari awal
2. **ADMIN-QUICK-GUIDE.md** - Panduan cepat untuk admin
3. **README.md** - Overview project dan fitur

---

## 📦 Upload & Kelola Produk

### Upload Produk
- **CARA-UPLOAD-PRODUK.md** - Cara upload produk via CSV
- **products-upload.csv** - Template CSV asli
- **products-upload-example.csv** - Contoh CSV dengan data lengkap

### Input Gambar Cover (PENTING!)
- **CARA-DAPAT-LINK-GAMBAR.md** - 📖 Panduan lengkap mendapatkan link gambar
- **CHECKLIST-UPLOAD-GAMBAR.md** - ✅ Checklist step-by-step
- **FLOWCHART-UPLOAD-GAMBAR.md** - 🔄 Visual flowchart alur upload
- **FAQ-GAMBAR-LINK.md** - ❓ Pertanyaan yang sering ditanyakan
- **SUMMARY-GAMBAR-LINK.md** - 📊 Summary perubahan sistem
- **PANDUAN-UPLOAD-GAMBAR.md** - Panduan alternatif (legacy)

### Admin Panel
- **ADMIN-QUICK-GUIDE.md** - Panduan cepat admin
- `/admin/products` - Kelola produk (CRUD)
- `/admin/products/add` - Tambah produk manual
- `/admin/upload-products` - Upload produk via CSV

---

## 🗄️ Setup Database & Payment

### Backendless (Database)
- **SETUP-BACKENDLESS-TABLES.md** - Setup database Backendless
- Console: https://backendless.com
- Email: missblossom007@gmail.com

### Midtrans (Payment Gateway)
- **SETUP-MIDTRANS-VERCEL.md** - Integrasi Midtrans
- **FITUR-UPLOAD-CSV-MIDTRANS.md** - Upload produk + Midtrans
- Dashboard: https://dashboard.midtrans.com

---

## 🚀 Deployment

### Vercel (Recommended)
- **CARA-DEPLOY-KE-VERCEL.md** - Deploy ke Vercel
- **CARA-DEPLOY-VERCEL.md** - Panduan alternatif
- **CARA-UPLOAD-VERCEL-LANGSUNG.md** - Upload langsung
- **PUSH-KE-VERCEL-SEKARANG.md** - Quick deploy
- **CARA-FIX-VERCEL-ERROR.md** - Troubleshooting Vercel

### Netlify (Alternative)
- **NETLIFY-DEPLOY.md** - Deploy ke Netlify
- **NETLIFY-FIX.md** - Fix Netlify issues

### GitHub
- **CARA-PUSH-KE-GITHUB.md** - Push ke GitHub
- **CARA-PUSH-KE-GITHUB-INDRI007.md** - Push ke akun indri007
- **LANGKAH-MUDAH-PUSH-GITHUB.md** - Langkah mudah
- **CHECKLIST-UPLOAD-GITHUB.md** - Checklist GitHub

---

## 🎨 Fitur Khusus

### Countdown Timer
- **FITUR-COUNTDOWN.md** - Implementasi countdown timer
- Component: `src/components/Countdown.jsx`

### Rich Text Editor (Blog)
- **FITUR-EDITOR-ARTIKEL.md** - Editor artikel blog
- Page: `src/app/create-blog/page.jsx`

### CSV Upload + Midtrans
- **FITUR-UPLOAD-CSV-MIDTRANS.md** - Upload CSV dengan Midtrans

---

## 🛠️ Setup Tools

### Node.js
- **CARA-INSTALL-NODEJS.md** - Install Node.js

### Git
- **CARA-INSTALL-GIT.md** - Install Git

---

## 📋 Checklist & Reference

### Checklist
- **CHECKLIST-PRESENTASI.md** - Checklist presentasi
- **CHECKLIST-UPDATE-FINAL.md** - Checklist update final
- **CHECKLIST-UPLOAD-GAMBAR.md** - ✅ Checklist upload gambar
- **CHECKLIST-UPLOAD-GITHUB.md** - Checklist GitHub

### Quick Reference
- **QUICK-REFERENCE.md** - Referensi cepat
- **QUICK-START.md** - Quick start guide
- **RUMUS-TEKNIS.md** - Rumus dan teknis

---

## 📖 Dokumentasi Presentasi

- **README-PRESENTASI.md** - README untuk presentasi
- **DOKUMENTASI-PRESENTASI.md** - Dokumentasi presentasi
- **RINGKASAN-PRESENTASI.md** - Ringkasan presentasi

---

## 🎯 Berdasarkan Kebutuhan

### Saya ingin...

#### 1. Setup project dari awal
→ **SETUP-LENGKAP-STEP-BY-STEP.md**

#### 2. Upload produk baru
→ **CARA-UPLOAD-PRODUK.md**
→ **ADMIN-QUICK-GUIDE.md**

#### 3. Mendapatkan link gambar untuk cover buku
→ **CARA-DAPAT-LINK-GAMBAR.md** ⭐
→ **CHECKLIST-UPLOAD-GAMBAR.md** ⭐

#### 4. Deploy ke Vercel
→ **CARA-DEPLOY-KE-VERCEL.md**
→ **SETUP-MIDTRANS-VERCEL.md**

#### 5. Setup database Backendless
→ **SETUP-BACKENDLESS-TABLES.md**

#### 6. Integrasi payment Midtrans
→ **SETUP-MIDTRANS-VERCEL.md**
→ **FITUR-UPLOAD-CSV-MIDTRANS.md**

#### 7. Push ke GitHub
→ **LANGKAH-MUDAH-PUSH-GITHUB.md**
→ **CHECKLIST-UPLOAD-GITHUB.md**

#### 8. Troubleshooting error
→ **CARA-FIX-VERCEL-ERROR.md**
→ **NETLIFY-FIX.md**

#### 9. Buat artikel blog
→ **FITUR-EDITOR-ARTIKEL.md**

#### 10. Tambah countdown timer
→ **FITUR-COUNTDOWN.md**

---

## 🖼️ PENTING: Input Gambar

**⚠️ Gambar cover buku menggunakan LINK URL, bukan upload file!**

**Panduan lengkap:**
1. **CARA-DAPAT-LINK-GAMBAR.md** - Panduan detail
2. **CHECKLIST-UPLOAD-GAMBAR.md** - Checklist step-by-step

**Quick guide:**
- Imgur: https://imgur.com (paling mudah)
- Google Drive: Ubah ke format direct view
- Postimages: https://postimages.org

---

## 📞 Support

**Butuh bantuan?**
1. Cek dokumentasi yang relevan di atas
2. Baca **ADMIN-QUICK-GUIDE.md** untuk troubleshooting
3. Hubungi developer team

---

## 📂 Struktur File Penting

```
digimeta1/
├── src/
│   ├── app/
│   │   ├── admin/
│   │   │   ├── products/          # Kelola produk
│   │   │   └── upload-products/   # Upload CSV
│   │   └── create-blog/           # Buat artikel
│   ├── components/
│   │   ├── Countdown.jsx          # Timer promo
│   │   ├── MidtransButton.jsx     # Payment button
│   │   └── BookCard.jsx           # Card produk
│   └── lib/
│       ├── midtrans.js            # Midtrans config
│       └── transactions.js        # Transaction handler
├── .env.local                     # Environment variables
├── products-upload.csv            # Template CSV
└── [Dokumentasi].md               # File dokumentasi
```

---

## 🎯 Tips Navigasi

1. **Gunakan Ctrl+F** untuk search di file ini
2. **Baca README.md** untuk overview
3. **Mulai dari SETUP-LENGKAP** jika baru
4. **Gunakan ADMIN-QUICK-GUIDE** untuk daily tasks
5. **Bookmark file yang sering dipakai**

---

**Happy Coding! 🚀**

Last Updated: November 12, 2025
