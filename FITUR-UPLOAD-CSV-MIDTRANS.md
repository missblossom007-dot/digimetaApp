# 📦 Fitur Upload Produk CSV & Midtrans Payment

## 🎯 Fitur yang Ditambahkan:

### 1. **Upload Produk via CSV**
- ✅ Upload file CSV untuk bulk import produk
- ✅ Preview data sebelum upload
- ✅ Download template CSV
- ✅ Validasi format file
- ✅ Simpan ke Backendless atau localStorage

### 2. **Integrasi Midtrans Payment Gateway**
- ✅ Pembayaran dengan Midtrans Snap
- ✅ Support semua metode pembayaran (Credit Card, Bank Transfer, E-Wallet, dll)
- ✅ Sandbox & Production mode
- ✅ Transaction status tracking
- ✅ Secure payment popup

### 3. **Komponen Pembayaran**
- ✅ MidtransButton component
- ✅ Auto-generate order ID
- ✅ Loading state
- ✅ Error handling
- ✅ Success/Pending/Error callbacks

---

## 📁 File yang Ditambahkan:

```
src/
├── lib/
│   └── midtrans.js                    # Midtrans API integration
├── app/
│   └── admin/
│       └── upload-products/
│           └── page.jsx               # Upload CSV page
└── components/
    └── MidtransButton.jsx             # Payment button component
```

---

## 🚀 Cara Menggunakan:

### A. Setup Midtrans

1. **Daftar di Midtrans:**
   - Buka: https://dashboard.midtrans.com/register
   - Daftar akun baru
   - Verifikasi email

2. **Dapatkan API Keys:**
   - Login ke dashboard
   - Buka: Settings → Access Keys
   - Copy:
     - Client Key
     - Server Key

3. **Update .env.local:**
```env
NEXT_PUBLIC_MIDTRANS_CLIENT_KEY=SB-Mid-client-xxx
NEXT_PUBLIC_MIDTRANS_SERVER_KEY=SB-Mid-server-xxx
NEXT_PUBLIC_MIDTRANS_PRODUCTION=false
```

4. **Test Mode:**
   - Gunakan Sandbox untuk testing
   - Ganti `PRODUCTION=true` untuk live

---

### B. Upload Produk via CSV

1. **Akses halaman upload:**
   ```
   http://localhost:3000/admin/upload-products
   ```

2. **Download template CSV:**
   - Klik tombol "Download Template"
   - Buka dengan Excel/Google Sheets

3. **Isi data produk:**
   ```csv
   judul,slug,deskripsi,cover_url,harga,link_pemesanan,penulis,kategori,tag,anggel_riil,bahasa,file_ebook_url,meta_seo,deskripsi_lengkap,rating
   Atomic Habits,atomic-habits,Buku tentang kebiasaan,https://example.com/cover.jpg,45000,https://midtrans.com/pay,James Clear,Self Help,habits;productivity,2025-01-01,Indonesia,https://example.com/file.pdf,Atomic Habits - James Clear,Deskripsi lengkap...,4.9
   ```

4. **Upload file:**
   - Klik area upload atau drag & drop
   - Preview data (5 baris pertama)
   - Klik "Upload Produk"

5. **Produk tersimpan:**
   - Data disimpan ke localStorage atau Backendless
   - Redirect ke halaman produk

---

### C. Integrasi Pembayaran Midtrans

**Di halaman produk (BookCard.jsx):**

```jsx
import MidtransButton from '../components/MidtransButton'

<MidtransButton 
  product={{
    judul: "Atomic Habits",
    slug: "atomic-habits",
    harga: 45000
  }}
/>
```

**Atau ganti tombol "Beli Sekarang":**

```jsx
// Sebelum (WhatsApp)
<a href="https://wa.me/...">
  🛒 Beli Sekarang
</a>

// Sesudah (Midtrans)
<MidtransButton product={book} />
```

---

## 📋 Format CSV Detail:

### Kolom Wajib:

| Kolom | Deskripsi | Contoh |
|-------|-----------|--------|
| `judul` | Judul produk | Atomic Habits |
| `slug` | URL-friendly name | atomic-habits |
| `harga` | Harga (angka saja) | 45000 |
| `link_pemesanan` | Link Midtrans | https://midtrans.com/pay |
| `cover_url` | URL gambar cover | https://example.com/cover.jpg |

### Kolom Opsional:

| Kolom | Deskripsi | Contoh |
|-------|-----------|--------|
| `deskripsi` | Deskripsi singkat | Buku tentang kebiasaan |
| `penulis` | Nama penulis | James Clear |
| `kategori` | Kategori produk | Self Help |
| `tag` | Tags (pisah dengan ;) | habits;productivity |
| `anggel_riil` | Tanggal rilis | 2025-01-01 |
| `bahasa` | Bahasa buku | Indonesia |
| `file_ebook_url` | Link download | https://example.com/file.pdf |
| `meta_seo` | SEO meta | Atomic Habits - James Clear |
| `deskripsi_lengkap` | Deskripsi detail | Deskripsi lengkap... |
| `rating` | Rating (0-5) | 4.9 |

---

## 💳 Flow Pembayaran Midtrans:

```
1. User klik "Bayar Sekarang"
   ↓
2. Generate Order ID unik
   ↓
3. Create transaction via Midtrans API
   ↓
4. Get Snap Token
   ↓
5. Open Midtrans payment popup
   ↓
6. User pilih metode pembayaran
   ↓
7. User selesaikan pembayaran
   ↓
8. Callback:
   - Success → Redirect ke /success
   - Pending → Show pending message
   - Error → Show error message
```

---

## 🎨 Kustomisasi MidtransButton:

### Custom Styling:

```jsx
<MidtransButton 
  product={book}
  className="px-6 py-3 bg-blue-500 text-white rounded-lg"
/>
```

### Dengan Customer Data:

Edit `MidtransButton.jsx`:

```jsx
const orderData = {
  orderId,
  amount: product.harga,
  customerName: customerName, // Dari form
  customerEmail: customerEmail, // Dari form
  customerPhone: customerPhone, // Dari form
  itemDetails: [...]
}
```

### Multiple Items:

```jsx
itemDetails: [
  {
    id: "book-1",
    price: 45000,
    quantity: 1,
    name: "Atomic Habits"
  },
  {
    id: "book-2",
    price: 50000,
    quantity: 1,
    name: "Deep Work"
  }
]
```

---

## 🧪 Testing Midtrans:

### Test Cards (Sandbox):

**Success:**
```
Card Number: 4811 1111 1111 1114
CVV: 123
Exp: 01/25
```

**Failure:**
```
Card Number: 4911 1111 1111 1113
CVV: 123
Exp: 01/25
```

**Challenge:**
```
Card Number: 4611 1111 1111 1112
CVV: 123
Exp: 01/25
OTP: 112233
```

### Test Bank Transfer:

- Pilih Bank Transfer
- Akan dapat Virtual Account number
- Copy VA number
- Simulasi pembayaran di dashboard Midtrans

---

## 🔒 Security Best Practices:

1. **Jangan expose Server Key di frontend:**
   ```javascript
   // ❌ JANGAN
   const serverKey = "SB-Mid-server-xxx"
   
   // ✅ GUNAKAN
   const serverKey = process.env.NEXT_PUBLIC_MIDTRANS_SERVER_KEY
   ```

2. **Validasi di backend:**
   - Buat API route untuk create transaction
   - Validasi amount dan item details
   - Jangan trust data dari frontend

3. **Webhook untuk notifikasi:**
   - Setup webhook URL di Midtrans dashboard
   - Verify signature
   - Update order status

---

## 📊 Monitoring Transaksi:

### Di Midtrans Dashboard:

1. Login ke dashboard
2. Buka "Transactions"
3. Lihat semua transaksi
4. Filter by status:
   - Settlement (Success)
   - Pending
   - Expire
   - Cancel

### Get Transaction Status:

```javascript
import { getTransactionStatus } from '../lib/midtrans'

const status = await getTransactionStatus(orderId)
console.log(status.transaction_status)
```

---

## 🚀 Deploy ke Production:

### 1. Update Environment Variables:

**Di Vercel:**
```
Settings → Environment Variables → Add

NEXT_PUBLIC_MIDTRANS_CLIENT_KEY = Mid-client-xxx (Production)
NEXT_PUBLIC_MIDTRANS_SERVER_KEY = Mid-server-xxx (Production)
NEXT_PUBLIC_MIDTRANS_PRODUCTION = true
```

### 2. Verifikasi Midtrans Account:

- Submit dokumen bisnis
- Tunggu approval
- Aktifkan production mode

### 3. Test Production:

- Gunakan real credit card
- Test semua payment methods
- Verify webhook

---

## 📱 Integrasi dengan BookCard:

Update `src/components/BookCard.jsx`:

```jsx
import MidtransButton from './MidtransButton'

// Ganti tombol WhatsApp dengan Midtrans
<MidtransButton 
  product={{
    judul: book.title,
    slug: book.slug || book.title.toLowerCase().replace(/\s+/g, '-'),
    harga: book.price
  }}
/>
```

---

## 🎯 Roadmap Fitur Selanjutnya:

### Phase 1 (Current):
- [x] Upload CSV
- [x] Midtrans integration
- [x] Basic payment flow

### Phase 2:
- [ ] Customer form (name, email, phone)
- [ ] Order history
- [ ] Download link after payment
- [ ] Email notification

### Phase 3:
- [ ] Webhook handler
- [ ] Auto-send ebook file
- [ ] Invoice generation
- [ ] Refund system

### Phase 4:
- [ ] Subscription model
- [ ] Discount codes
- [ ] Affiliate system
- [ ] Analytics dashboard

---

## 🆘 Troubleshooting:

### Error: "Midtrans Snap not loaded"
- Cek internet connection
- Cek Client Key sudah benar
- Clear browser cache

### Error: "Transaction failed"
- Cek Server Key sudah benar
- Cek amount > 0
- Cek item details format

### Payment popup tidak muncul:
- Cek console browser (F12)
- Pastikan Snap script loaded
- Cek popup blocker

### CSV upload gagal:
- Pastikan format CSV benar
- Cek tidak ada koma dalam data
- Gunakan template yang disediakan

---

## 📞 Support:

**Midtrans:**
- Docs: https://docs.midtrans.com
- Support: support@midtrans.com
- Dashboard: https://dashboard.midtrans.com

**DigimetaShop:**
- Email: support@digimetashop.com
- WhatsApp: +62 821-4173-3187

---

**Fitur upload CSV dan Midtrans siap digunakan! 🎉**

Upload file ini ke GitHub dan deploy untuk testing!
