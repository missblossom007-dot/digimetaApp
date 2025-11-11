# 📦 Deployment Guide - DigimetaShop

## 🎯 Pilihan Deployment

Anda punya 3 pilihan untuk deploy website:

### 1. ⚡ Vercel (RECOMMENDED)
- **Paling mudah dan cepat**
- Deploy otomatis dari GitHub
- Free SSL certificate
- Global CDN
- **Waktu: 10 menit**

👉 **Ikuti panduan:** `CARA-DEPLOY-VERCEL.md`

---

### 2. 🌐 Netlify
- Alternatif Vercel
- Fitur mirip dengan Vercel
- Free tier generous

**Cara Deploy:**
1. Buka https://netlify.com
2. Login dengan GitHub
3. New site from Git
4. Pilih repository
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Deploy!

---

### 3. 📄 GitHub Pages (Static Export)
- Untuk hosting static
- Gratis selamanya
- Tapi fitur terbatas (no API routes)

**Cara Deploy:**
```bash
npm run build
npm run export
# Upload folder 'out' ke GitHub Pages
```

---

## 🔑 Environment Variables

Jika menggunakan Backendless untuk blog, tambahkan di platform deployment:

```env
NEXT_PUBLIC_BACKENDLESS_APP_ID=your_app_id_here
NEXT_PUBLIC_BACKENDLESS_API_KEY=your_api_key_here
```

**Cara set di Vercel:**
1. Project Settings
2. Environment Variables
3. Add variable
4. Redeploy

**Cara set di Netlify:**
1. Site Settings
2. Build & Deploy
3. Environment
4. Add variable
5. Redeploy

---

## ✅ Checklist Sebelum Deploy

- [ ] Semua file sudah di-commit
- [ ] `.env.local` sudah di `.gitignore`
- [ ] Test build lokal: `npm run build`
- [ ] Cek tidak ada error di console
- [ ] Update URL di file (jika ada hardcoded URL)
- [ ] Siapkan environment variables (jika pakai Backendless)

---

## 🚀 Quick Start (Tanpa Node.js)

**Jika Anda tidak punya Node.js di komputer:**

1. Upload semua file ke GitHub (via web)
2. Connect ke Vercel
3. Deploy otomatis
4. Selesai!

Tidak perlu install apapun di komputer Anda!

---

## 📊 Monitoring

Setelah deploy, Anda bisa monitor:

**Vercel Dashboard:**
- Visitor analytics
- Build logs
- Performance metrics
- Error tracking

**Google Analytics (Opsional):**
- Tambahkan tracking code di `layout.jsx`
- Monitor traffic detail

---

## 🔄 Update Website

**Jika sudah deploy:**

1. Edit file di komputer
2. Push ke GitHub
3. Vercel auto-deploy (2-3 menit)
4. Website terupdate otomatis!

**Atau edit langsung di GitHub:**
1. Buka file di GitHub
2. Klik icon pensil (Edit)
3. Edit file
4. Commit changes
5. Auto-deploy!

---

## 🎓 Untuk Presentasi

**URL yang bisa digunakan:**

Setelah deploy, Anda akan dapat URL seperti:
- `https://digimetashop.vercel.app`
- `https://digimetashop.netlify.app`

**Siapkan:**
1. Bookmark URL
2. Test semua fitur sebelum presentasi
3. Screenshot untuk backup
4. QR code URL website (untuk dibagikan)

---

## 💡 Tips

1. **Deploy 1-2 hari sebelum presentasi** untuk test
2. **Jangan edit saat presentasi** (bisa auto-deploy)
3. **Siapkan backup** (screenshot/video)
4. **Test di berbagai device** (HP, tablet, laptop)

---

## 📞 Support

Jika ada masalah:
- Cek build logs di dashboard
- Baca error message
- Google error message
- Tanya di Discord/Forum

**Good luck! 🎉**
