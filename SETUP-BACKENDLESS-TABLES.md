# 🗄️ Setup Backendless Tables

## Login Backendless

```
URL: https://backendless.com/login
Email: missblossom007@gmail.com
Password: [Your Password]
```

---

## 📋 Tables yang Perlu Dibuat:

### 1. Table: Products

**Cara Buat:**
1. Login ke Backendless Console
2. Pilih App Anda
3. Klik "Data" di sidebar
4. Klik "Create Table"
5. Nama: `Products`
6. Klik "Create"

**Columns:**

| Column Name | Type | Required | Default |
|-------------|------|----------|---------|
| objectId | String | Auto | - |
| created | Number | Auto | - |
| updated | Number | Auto | - |
| judul | String | Yes | - |
| slug | String | Yes | - |
| harga | Number | Yes | - |
| link_pemesanan | String | No | - |
| cover_url | String | No | - |
| deskripsi | Text | No | - |
| penulis | String | No | - |
| kategori | String | No | Umum |
| rating | Number | No | 4.5 |
| file_ebook_url | String | No | - |

**Permissions:**
- Security & Roles → Data Permissions
- Table: Products
- Allow: CREATE, READ, UPDATE, DELETE
- For: All Users

---

### 2. Table: BlogPosts

**Cara Buat:**
1. Data → Create Table
2. Nama: `BlogPosts`
3. Klik "Create"

**Columns:**

| Column Name | Type | Required | Default |
|-------------|------|----------|---------|
| objectId | String | Auto | - |
| created | Number | Auto | - |
| updated | Number | Auto | - |
| title | String | Yes | - |
| slug | String | Yes | - |
| excerpt | Text | No | - |
| content | Text | Yes | - |
| author | String | No | Admin |
| category | String | No | Artikel |
| image | String | No | 📚 |

**Permissions:**
- Allow: CREATE, READ, UPDATE, DELETE
- For: All Users

---

### 3. Table: Transactions

**Cara Buat:**
1. Data → Create Table
2. Nama: `Transactions`
3. Klik "Create"

**Columns:**

| Column Name | Type | Required | Default |
|-------------|------|----------|---------|
| objectId | String | Auto | - |
| created | Number | Auto | - |
| updated | Number | Auto | - |
| order_id | String | Yes | - |
| product_id | String | Yes | - |
| product_name | String | Yes | - |
| amount | Number | Yes | - |
| status | String | Yes | pending |
| customer_name | String | No | - |
| customer_email | String | No | - |
| customer_phone | String | No | - |
| payment_type | String | No | - |
| transaction_time | String | No | - |

**Permissions:**
- Allow: CREATE, READ, UPDATE, DELETE
- For: All Users

---

## 🔧 Cara Tambah Column:

1. Buka table (contoh: Products)
2. Klik tab "Schema"
3. Klik "Add Column"
4. Isi:
   - Column Name: (nama kolom)
   - Data Type: (pilih tipe)
   - Required: (centang jika wajib)
   - Default Value: (isi jika ada)
5. Klik "Save"

---

## 🔒 Cara Set Permissions:

1. Klik "Security & Roles" di sidebar
2. Klik "Data Permissions"
3. Pilih table (contoh: Products)
4. Centang semua:
   - ✅ CREATE
   - ✅ READ
   - ✅ UPDATE
   - ✅ DELETE
5. For: "All Users"
6. Klik "Save"

---

## ✅ Verifikasi Setup:

### Test Products Table:
1. Buka website: /admin/products/add
2. Isi form dan submit
3. Cek di Backendless Console → Data → Products
4. Seharusnya ada record baru

### Test BlogPosts Table:
1. Buka website: /create-blog
2. Login (jika perlu)
3. Tulis artikel dan publish
4. Cek di Backendless Console → Data → BlogPosts
5. Seharusnya ada record baru

### Test Transactions Table:
1. Buka website homepage
2. Klik "💳 Bayar Sekarang" di produk
3. Selesaikan pembayaran (test mode)
4. Cek di Backendless Console → Data → Transactions
5. Seharusnya ada record baru

---

## 🆘 Troubleshooting:

### Error: "Table not found"
- Pastikan nama table persis: `Products`, `BlogPosts`, `Transactions`
- Case-sensitive!

### Error: "Permission denied"
- Cek permissions sudah di-set
- Allow CREATE, READ, UPDATE, DELETE
- For: All Users

### Error: "Column not found"
- Cek semua columns sudah dibuat
- Nama column harus persis sama
- Case-sensitive!

### Data tidak tersimpan:
- Cek console browser (F12)
- Lihat error message
- Pastikan Backendless credentials benar

---

## 📊 Sample Data:

### Products:
```json
{
  "judul": "Atomic Habits",
  "slug": "atomic-habits",
  "harga": 45000,
  "link_pemesanan": "https://wa.me/6282141733187",
  "cover_url": "https://m.media-amazon.com/images/I/51Tlm0GZTXL.jpg",
  "deskripsi": "Buku tentang kebiasaan baik",
  "penulis": "James Clear",
  "kategori": "Self Help",
  "rating": 4.9,
  "file_ebook_url": "https://drive.google.com/..."
}
```

### BlogPosts:
```json
{
  "title": "5 Tips Membaca Efektif",
  "slug": "5-tips-membaca-efektif",
  "excerpt": "Tips untuk membaca lebih efektif...",
  "content": "<h2>Pendahuluan</h2><p>...</p>",
  "author": "Admin DigimetaShop",
  "category": "Tips",
  "image": "💡"
}
```

### Transactions:
```json
{
  "order_id": "ORDER-1234567890-abc",
  "product_id": "atomic-habits",
  "product_name": "Atomic Habits",
  "amount": 45000,
  "status": "success",
  "customer_name": "Customer",
  "customer_email": "customer@example.com",
  "customer_phone": "08123456789",
  "payment_type": "credit_card",
  "transaction_time": "2024-01-15 10:30:00"
}
```

---

## 🎯 Checklist Setup:

- [ ] Login ke Backendless Console
- [ ] Buat table Products
- [ ] Tambah columns Products
- [ ] Set permissions Products
- [ ] Buat table BlogPosts
- [ ] Tambah columns BlogPosts
- [ ] Set permissions BlogPosts
- [ ] Buat table Transactions
- [ ] Tambah columns Transactions
- [ ] Set permissions Transactions
- [ ] Test upload produk
- [ ] Test create blog
- [ ] Test payment

---

**Setup selesai! 🎉**

Setelah semua table dibuat, website akan berfungsi dengan baik!
