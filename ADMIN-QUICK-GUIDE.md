# 🚀 Admin Quick Guide - DigimetaShop

Panduan cepat untuk admin mengelola produk dan konten.

---

## 📦 Menambah Produk

### Opsi 1: Manual (Satu per Satu)

**URL:** `/admin/products/add`

**Langkah:**
1. Isi form produk
2. **Gambar Cover:** Input LINK URL (bukan upload file!)
3. Klik "Tambah Produk"

**Field Wajib:**
- Judul Produk
- Harga
- Cover URL (link gambar)

---

### Opsi 2: Upload CSV (Massal)

**URL:** `/admin/upload-products`

**Langkah:**
1. Siapkan file CSV (lihat `products-upload-example.csv`)
2. Upload file CSV
3. Preview data
4. Klik "Upload Produk"

**Format CSV:**
```csv
judul,slug,harga,link_pemesanan,cover_url,deskripsi,penulis,kategori,rating,file_ebook_url
```

---

## 🖼️ Cara Input Gambar Cover

### ⚠️ PENTING: Gambar Menggunakan LINK URL!

**Bukan upload file, tapi input link URL gambar.**

### Quick Steps:

#### 1. Upload Gambar ke Imgur (Paling Mudah)
1. Buka https://imgur.com
2. Klik "New post"
3. Upload gambar
4. Klik kanan → "Copy image address"
5. Paste link ke form admin

**Contoh link:** `https://i.imgur.com/abc123.jpg`

#### 2. Upload ke Google Drive
1. Upload gambar ke Google Drive
2. Klik kanan → "Get link" → "Anyone with the link"
3. Copy link, ubah format:
   - Dari: `https://drive.google.com/file/d/FILE_ID/view`
   - Jadi: `https://drive.google.com/uc?export=view&id=FILE_ID`
4. Paste ke form admin

#### 3. Upload ke Postimages
1. Buka https://postimages.org
2. Upload gambar
3. Copy "Direct link"
4. Paste ke form admin

### ✅ Cek Link Sudah Benar:
- Paste link di browser baru
- Seharusnya langsung muncul gambar
- Preview otomatis muncul di form admin

📖 **Panduan lengkap:** `CARA-DAPAT-LINK-GAMBAR.md`

---

## ✏️ Edit Produk

**URL:** `/admin/products`

**Langkah:**
1. Klik tombol "Edit" pada produk
2. Update informasi
3. Klik "Simpan Perubahan"

---

## 🗑️ Hapus Produk

**URL:** `/admin/products`

**Langkah:**
1. Klik tombol "Hapus" pada produk
2. Konfirmasi penghapusan

---

## 📝 Buat Artikel Blog

**URL:** `/create-blog`

**Fitur Editor:**
- Heading 1, 2, 3
- Bold, Italic, Underline
- Insert Image (URL)
- Insert Link
- Word Counter

**Langkah:**
1. Tulis judul artikel
2. Tulis konten dengan rich text editor
3. Klik "Publish Article"

---

## 💳 Integrasi Midtrans

**Setup:**
1. Daftar di https://midtrans.com
2. Dapatkan Server Key dan Client Key
3. Tambahkan ke `.env.local`:
   ```
   NEXT_PUBLIC_MIDTRANS_CLIENT_KEY=your_client_key
   MIDTRANS_SERVER_KEY=your_server_key
   ```

**Cara Kerja:**
1. Customer klik "Beli Sekarang"
2. Redirect ke Midtrans payment page
3. Customer bayar
4. Transaksi tersimpan di Backendless
5. Admin bisa lihat di dashboard

---

## 🗄️ Database Backendless

**Console:** https://backendless.com

**Tables:**
- **Products** - Data produk ebook
- **Transactions** - Riwayat transaksi
- **Blog** - Artikel blog (opsional)

**Akses:**
- Email: missblossom007@gmail.com
- Lihat data real-time di console

---

## 🎯 Tips Admin

### Upload Gambar:
- ✅ Gunakan Imgur untuk kemudahan
- ✅ Ukuran ideal: 400x600px (rasio 2:3)
- ✅ Format: JPG atau PNG
- ✅ Size: < 500KB
- ❌ Jangan upload file langsung (tidak didukung)

### Harga Produk:
- Input angka saja (tanpa Rp atau titik)
- Contoh: `50000` bukan `Rp 50.000`

### Slug:
- Auto-generate dari judul
- URL-friendly (lowercase, dash)
- Contoh: `atomic-habits-james-clear`

### Rating:
- Angka desimal 0-5
- Contoh: `4.5`, `4.8`, `5.0`

### Link Pemesanan:
- Saat ini: WhatsApp link
- Nanti: Midtrans payment link
- Format: `https://wa.me/6282141733187?text=Pesan`

---

## 🔧 Troubleshooting

### Preview gambar tidak muncul:
- Cek link bisa dibuka di browser
- Pastikan format link benar
- Coba ganti dengan Imgur

### Upload CSV gagal:
- Cek format CSV sesuai template
- Pastikan tidak ada koma dalam data
- Cek Backendless table sudah dibuat

### Produk tidak muncul di website:
- Refresh browser (Ctrl+Shift+R)
- Cek di Backendless Console
- Cek console browser (F12) untuk error

### Error Backendless:
- Cek koneksi internet
- Cek API Key di `.env.local`
- Cek permissions di Backendless Console

---

## 📞 Support

**Butuh bantuan?**
- Baca dokumentasi lengkap di folder root
- Cek file `SETUP-LENGKAP-STEP-BY-STEP.md`
- Hubungi developer team

---

## 📚 Dokumentasi Lengkap

- `SETUP-LENGKAP-STEP-BY-STEP.md` - Setup dari awal
- `SETUP-BACKENDLESS-TABLES.md` - Setup database
- `SETUP-MIDTRANS-VERCEL.md` - Setup payment
- `CARA-UPLOAD-PRODUK.md` - Upload produk detail
- `CARA-DAPAT-LINK-GAMBAR.md` - Panduan link gambar
- `products-upload-example.csv` - Contoh CSV

---

**Happy Managing! 🎉**
