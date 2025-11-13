# 📦 Cara Upload Produk ke Backendless

## 📁 File CSV Sudah Siap:

File: `products-upload.csv`

Berisi 5 produk ebook:
1. The Power of Games Business Impacts
2. Predictably Irrational (Dan Ariely)
3. Pemrograman Website dengan PHP-MySQL
4. Technology Entrepreneurship 3e
5. Kubernetes Guide for Beginners

---

## 🖼️ PENTING: Gambar Cover Menggunakan LINK URL!

**Input gambar bukan upload file, tapi LINK URL gambar.**

📖 **Baca panduan lengkap:** `CARA-DAPAT-LINK-GAMBAR.md`

**Quick Guide:**
- Imgur (paling mudah): https://imgur.com
- Google Drive: Ubah link ke format direct view
- Postimages: https://postimages.org

---

## 🚀 Cara Upload:

### 1. Pastikan Backendless Sudah Setup:

**Login ke Backendless Console:**
- URL: https://backendless.com/login
- Email: missblossom007@gmail.com

**Buat Table "Products":**
1. Buka: Schema → Data
2. Klik "Create Table"
3. Nama: `Products`
4. Klik "Create"

**Tambahkan Columns:**
- `judul` (String)
- `slug` (String)
- `harga` (Number)
- `link_pemesanan` (String)
- `cover_url` (String)
- `deskripsi` (Text)
- `penulis` (String)
- `kategori` (String)
- `rating` (Number)
- `file_ebook_url` (String)

**Set Permissions:**
1. Security & Roles → Data Permissions
2. Table: Products
3. Allow: CREATE, READ, UPDATE, DELETE
4. For: All Users

---

### 2. Upload via Website:

**Akses halaman upload:**
```
http://localhost:3000/admin/upload-products
```

Atau setelah deploy:
```
https://your-vercel-url.vercel.app/admin/upload-products
```

**Upload file:**
1. Klik area upload atau drag & drop
2. Pilih file: `products-upload.csv`
3. Lihat preview data (5 produk)
4. Klik "Upload Produk"
5. Tunggu proses selesai
6. Akan redirect ke /admin/products

---

### 3. Verifikasi Upload:

**Di Backendless Console:**
1. Buka: Data → Products
2. Seharusnya ada 5 records baru
3. Cek data sudah benar

**Di Website:**
1. Buka homepage
2. Seharusnya produk muncul di katalog
3. Test klik "Beli Sekarang" (WhatsApp link)

---

## 🔧 Troubleshooting:

### Error: "Table 'Products' tidak ditemukan"
- Buat table di Backendless Console
- Pastikan nama table persis: `Products` (case-sensitive)

### Error: "Permission denied"
- Set permissions di Backendless
- Allow CREATE untuk All Users

### Error: "Invalid data"
- Cek format CSV
- Pastikan tidak ada koma dalam data
- Gunakan quotes untuk text yang panjang

### Upload berhasil tapi produk tidak muncul:
- Refresh browser (Ctrl+Shift+R)
- Cek di Backendless Console apakah data tersimpan
- Cek console browser (F12) untuk error

---

## 📊 Format CSV:

```csv
judul,slug,harga,link_pemesanan,cover_url,deskripsi,penulis,kategori,rating,file_ebook_url
"Judul Buku","slug-buku",50000,"https://wa.me/...","https://...","Deskripsi","Penulis","Kategori",4.5,"https://..."
```

**Kolom Wajib:**
- judul
- slug
- harga
- link_pemesanan
- cover_url

**Kolom Opsional:**
- deskripsi
- penulis
- kategori
- rating
- file_ebook_url

---

## 💡 Tips:

1. **Link Pemesanan:**
   - Saat ini pakai WhatsApp link
   - Nanti bisa diganti dengan Midtrans payment link
   - Format: `https://wa.me/6282141733187?text=Pesan`

2. **Cover URL (Link Gambar):**
   - 🖼️ Input berupa LINK URL gambar (bukan upload file)
   - Gunakan Google Drive link (ubah ke direct link)
   - Atau upload ke image hosting: Imgur, Cloudinary, Postimages
   - Pastikan URL bisa diakses public
   - Contoh: `https://i.imgur.com/abc123.jpg`
   - **Cara dapat link dari Google Drive:**
     1. Upload gambar ke Google Drive
     2. Klik kanan → Get link → Anyone with the link
     3. Copy link, ubah format:
        - Dari: `https://drive.google.com/file/d/FILE_ID/view`
        - Jadi: `https://drive.google.com/uc?export=view&id=FILE_ID`

3. **File Ebook URL:**
   - Link download ebook
   - Bisa Google Drive, Dropbox, dll
   - Kirim ke customer setelah pembayaran

4. **Harga:**
   - Angka saja (tanpa Rp atau titik)
   - Contoh: 50000 (bukan Rp 50.000)

5. **Rating:**
   - Angka desimal 0-5
   - Contoh: 4.5, 4.8, 5.0

---

## 🎯 Next Steps:

Setelah upload berhasil:

1. **Tampilkan di Homepage:**
   - Fetch produk dari Backendless
   - Render di katalog buku

2. **Integrasi Midtrans:**
   - Generate payment link otomatis
   - Ganti WhatsApp link dengan Midtrans

3. **Auto-send Ebook:**
   - Setelah payment success
   - Kirim email dengan download link

4. **Admin Dashboard:**
   - Manage produk (CRUD)
   - Lihat statistik penjualan

---

**File CSV siap diupload! 🚀**

Lokasi: `products-upload.csv`
