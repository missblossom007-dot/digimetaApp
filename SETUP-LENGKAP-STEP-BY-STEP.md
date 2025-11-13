# 🚀 Setup Lengkap DigimetaShop - Step by Step

## ✅ Checklist Setup (15 Menit)

---

## STEP 1: Setup Backendless Tables (5 menit)

### 1.1 Login Backendless
```
URL: https://backendless.com/login
Email: missblossom007@gmail.com
Password: [Your Password]
```

### 1.2 Buat Table "Products"

1. Klik **"Data"** di sidebar kiri
2. Klik **"Create Table"**
3. Nama: `Products` (persis seperti ini)
4. Klik **"Create"**

5. **Tambah Columns** (klik "Add Column" untuk setiap column):

```
Column 1:
- Name: judul
- Type: STRING
- Required: YES
→ Save

Column 2:
- Name: slug
- Type: STRING
- Required: YES
→ Save

Column 3:
- Name: harga
- Type: INT
- Required: YES
→ Save

Column 4:
- Name: cover_url
- Type: STRING
→ Save

Column 5:
- Name: link_pemesanan
- Type: STRING
→ Save

Column 6:
- Name: deskripsi
- Type: TEXT
→ Save

Column 7:
- Name: penulis
- Type: STRING
→ Save

Column 8:
- Name: kategori
- Type: STRING
→ Save

Column 9:
- Name: rating
- Type: DOUBLE
→ Save

Column 10:
- Name: file_ebook_url
- Type: STRING
→ Save
```

6. **Set Permissions:**
   - Klik **"Security & Roles"** di sidebar
   - Klik **"Data Permissions"**
   - Pilih table **"Products"**
   - Centang semua: CREATE, READ, UPDATE, DELETE
   - For: **"All Users"**
   - Klik **"Save"**

### 1.3 Buat Table "BlogPosts"

1. Klik **"Data"** → **"Create Table"**
2. Nama: `BlogPosts`
3. Klik **"Create"**

4. **Tambah Columns:**

```
- title (STRING, Required)
- slug (STRING, Required)
- excerpt (TEXT)
- content (TEXT, Required)
- author (STRING)
- category (STRING)
- image (STRING)
```

5. **Set Permissions** (sama seperti Products)

### 1.4 Buat Table "Transactions"

1. Klik **"Data"** → **"Create Table"**
2. Nama: `Transactions`
3. Klik **"Create"**

4. **Tambah Columns:**

```
- order_id (STRING, Required)
- product_id (STRING)
- product_name (STRING)
- amount (INT, Required)
- status (STRING, Required)
- customer_name (STRING)
- customer_email (STRING)
- customer_phone (STRING)
- payment_type (STRING)
- transaction_time (STRING)
```

5. **Set Permissions** (sama seperti Products)

---

## STEP 2: Setup Vercel Environment Variables (5 menit)

### 2.1 Login Vercel
```
URL: https://vercel.com/dashboard
Login dengan GitHub
```

### 2.2 Pilih Project
- Cari project: **"digimetashop"** atau **"digimetaApp"**
- Klik project tersebut

### 2.3 Tambah Environment Variables

1. Klik **"Settings"** (tab di atas)
2. Klik **"Environment Variables"** di sidebar
3. Tambahkan satu per satu:

**Variable 1:**
```
Name: NEXT_PUBLIC_MIDTRANS_CLIENT_KEY
Value: Mid-client-oFOsaBvke_JvFpYc
Environment: ✅ Production ✅ Preview ✅ Development
→ Save
```

**Variable 2:**
```
Name: NEXT_PUBLIC_MIDTRANS_SERVER_KEY
Value: Mid-server-AT0ZZkIQAQRzC0VyFQFCS9nKr
Environment: ✅ Production ✅ Preview ✅ Development
→ Save
```

**Variable 3:**
```
Name: NEXT_PUBLIC_MIDTRANS_MERCHANT_ID
Value: G445401830
Environment: ✅ Production ✅ Preview ✅ Development
→ Save
```

**Variable 4:**
```
Name: NEXT_PUBLIC_MIDTRANS_PRODUCTION
Value: true
Environment: ✅ Production ✅ Preview ✅ Development
→ Save
```

### 2.4 Redeploy

1. Klik tab **"Deployments"**
2. Klik **"..."** (3 titik) pada deployment terakhir
3. Pilih **"Redeploy"**
4. Tunggu 2-3 menit

---

## STEP 3: Test Semua Fitur (5 menit)

### 3.1 Dapatkan URL Website

Setelah deploy selesai:
1. Klik deployment yang sudah "Ready"
2. Klik **"Visit"** atau copy URL
3. Contoh: `https://digimeta-app.vercel.app`

### 3.2 Test Fitur

**Homepage:**
```
✅ Countdown timer bergerak
✅ QR Code muncul (klik 📱)
✅ Tombol "💳 Bayar Sekarang" ada
```

**Admin Products:**
```
URL: /admin/products

✅ Klik "➕ Tambah Manual"
✅ Isi form dan submit
✅ Produk muncul di list
✅ Klik "✏️" untuk edit
✅ Klik "💳" untuk test payment
```

**Upload CSV:**
```
URL: /admin/upload-products

✅ Upload file: products-upload.csv
✅ Preview data muncul
✅ Klik "Upload Produk"
✅ Cek di /admin/products
```

**Create Blog:**
```
URL: /create-blog

✅ Login (jika perlu)
✅ Tulis artikel
✅ Test toolbar (H2, Gambar, Link)
✅ Klik Preview
✅ Publikasikan
```

**Test Payment:**
```
1. Klik "💳 Bayar Sekarang"
2. Popup Midtrans muncul
3. Test dengan test card:
   Card: 4811 1111 1111 1114
   CVV: 123
   Exp: 01/25
   OTP: 112233
4. Cek di Backendless → Transactions
```

---

## 📊 Verifikasi Data:

### Di Backendless Console:

**Products Table:**
```
Data → Products
Seharusnya ada produk yang diupload
```

**BlogPosts Table:**
```
Data → BlogPosts
Seharusnya ada artikel yang dibuat
```

**Transactions Table:**
```
Data → Transactions
Seharusnya ada transaksi yang dilakukan
```

### Di Midtrans Dashboard:

```
URL: https://dashboard.midtrans.com/transactions
Seharusnya ada transaksi yang dilakukan
```

---

## 🎯 URL Penting:

**Website:**
```
https://[your-vercel-url].vercel.app
```

**Admin Pages:**
```
/admin/products - List produk
/admin/products/add - Tambah manual
/admin/products/edit/[id] - Edit produk
/admin/upload-products - Upload CSV
```

**Public Pages:**
```
/ - Homepage
/blog - Blog list
/create-blog - Tulis artikel
/about - About us
/services - Services
/contact - Contact
/teams - Teams
```

---

## 🆘 Jika Ada Error:

### Error di Create Blog:
```
"Gagal menyimpan artikel ke Backendless"
→ Pastikan table BlogPosts sudah dibuat
→ Cek permissions sudah di-set
```

### Error di Upload Products:
```
"Gagal upload ke Backendless"
→ Pastikan table Products sudah dibuat
→ Cek permissions sudah di-set
```

### Error di Payment:
```
"Snap not loaded"
→ Pastikan Midtrans keys sudah di-set di Vercel
→ Redeploy setelah tambah keys
```

### Build Failed di Vercel:
```
→ Cek build logs
→ Screenshot error
→ Perbaiki error
→ Push ulang ke GitHub
```

---

## 📱 Untuk Presentasi:

### Siapkan:
1. ✅ Bookmark URL website
2. ✅ Test semua fitur sebelum presentasi
3. ✅ Screenshot untuk backup
4. ✅ Siapkan demo data (produk, artikel)
5. ✅ Test payment dengan test card

### Demo Flow:
```
1. Buka homepage
   → Tunjukkan countdown timer
   → Tunjukkan QR code
   → Tunjukkan katalog buku

2. Klik "💳 Bayar Sekarang"
   → Popup Midtrans muncul
   → Tunjukkan metode pembayaran

3. Buka /admin/products
   → Tunjukkan list produk
   → Klik "➕ Tambah Manual"
   → Demo tambah produk

4. Buka /create-blog
   → Demo editor artikel
   → Tunjukkan toolbar
   → Tunjukkan word counter
   → Klik preview

5. Buka /admin/upload-products
   → Demo upload CSV
   → Tunjukkan preview data
```

---

## 🎉 Selesai!

**Total Waktu Setup:** 15 menit
**Fitur yang Aktif:** Semua ✅

**Dokumentasi Lengkap:**
- SETUP-BACKENDLESS-TABLES.md
- SETUP-MIDTRANS-VERCEL.md
- CARA-UPLOAD-PRODUK.md
- FITUR-COUNTDOWN.md
- FITUR-EDITOR-ARTIKEL.md
- FITUR-UPLOAD-CSV-MIDTRANS.md

**File CSV Siap Upload:**
- products-upload.csv (5 produk)

---

**Good luck dengan presentasi! 🚀**

Jika ada masalah, screenshot dan kirim ke saya!
