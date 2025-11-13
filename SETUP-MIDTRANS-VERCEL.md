# 🔑 Setup Midtrans di Vercel

## Kredensial Midtrans (Production)

Dari dashboard: https://dashboard.midtrans.com/settings/access-keys

```
Merchant ID: G445401830
Client Key: Mid-client-oFOsaBvke_JvFpYc
Server Key: Mid-server-AT0ZZkIQAQRzC0VyFQFCS9nKr
Environment: Production
```

---

## 📋 Langkah Setup di Vercel:

### 1. Login ke Vercel Dashboard
```
https://vercel.com/dashboard
```

### 2. Pilih Project
- Cari project: `digimetashop` atau `digimetaApp`
- Klik project tersebut

### 3. Buka Settings
- Klik tab "Settings"
- Pilih "Environment Variables" di sidebar

### 4. Tambahkan Variables

**Variable 1:**
```
Name: NEXT_PUBLIC_MIDTRANS_CLIENT_KEY
Value: Mid-client-oFOsaBvke_JvFpYc
Environment: Production, Preview, Development (centang semua)
```

**Variable 2:**
```
Name: NEXT_PUBLIC_MIDTRANS_SERVER_KEY
Value: Mid-server-AT0ZZkIQAQRzC0VyFQFCS9nKr
Environment: Production, Preview, Development (centang semua)
```

**Variable 3:**
```
Name: NEXT_PUBLIC_MIDTRANS_MERCHANT_ID
Value: G445401830
Environment: Production, Preview, Development (centang semua)
```

**Variable 4:**
```
Name: NEXT_PUBLIC_MIDTRANS_PRODUCTION
Value: true
Environment: Production, Preview, Development (centang semua)
```

### 5. Save Variables
- Klik "Save" untuk setiap variable

### 6. Redeploy
- Klik tab "Deployments"
- Klik "..." pada deployment terakhir
- Pilih "Redeploy"
- Tunggu 2-3 menit

---

## ✅ Verifikasi Setup:

### 1. Cek Console Browser
Setelah deploy, buka website dan cek console (F12):
```javascript
🔑 Midtrans Config: {
  clientKey: "Mid-client-oFOsaBvke_JvFpYc",
  merchantId: "G445401830",
  isProduction: true,
  snapUrl: "https://app.midtrans.com/snap/snap.js"
}
```

### 2. Test Payment
1. Buka homepage atau /admin/products
2. Klik "💳 Bayar Sekarang"
3. Popup Midtrans harus muncul
4. Test dengan real payment method (Production mode)

---

## 🧪 Test Cards (Production):

**⚠️ PENTING:** Karena mode Production, gunakan kartu kredit ASLI atau test cards yang disediakan Midtrans untuk Production.

**Untuk testing, bisa switch ke Sandbox:**
```
NEXT_PUBLIC_MIDTRANS_PRODUCTION=false
```

**Test Cards Sandbox:**
```
Success:
Card: 4811 1111 1111 1114
CVV: 123
Exp: 01/25
OTP: 112233

Failure:
Card: 4911 1111 1111 1113
CVV: 123
Exp: 01/25
```

---

## 🔒 Security Notes:

1. **Server Key** - Jangan expose di frontend
   - Hanya gunakan untuk backend API
   - Di frontend, cukup Client Key

2. **Client Key** - Aman untuk frontend
   - Digunakan untuk load Snap.js
   - Public key, tidak masalah di-expose

3. **Production Mode** - Hati-hati
   - Transaksi real money
   - Test dulu di Sandbox
   - Pastikan semua flow sudah benar

---

## 📊 Monitoring Transaksi:

### Di Midtrans Dashboard:
```
https://dashboard.midtrans.com/transactions
```

Filter by:
- Status: Settlement, Pending, Expire, Cancel
- Date range
- Payment method

### Di Backendless:
```
https://backendless.com
Table: Transactions
```

Cek:
- order_id
- status
- amount
- customer details

---

## 🆘 Troubleshooting:

### Error: "Snap not loaded"
- Cek Client Key sudah benar
- Cek internet connection
- Clear browser cache

### Error: "Invalid credentials"
- Cek Server Key sudah benar
- Pastikan tidak ada typo
- Cek environment (Production vs Sandbox)

### Payment popup tidak muncul:
- Cek console browser (F12)
- Pastikan Snap.js loaded
- Cek popup blocker

### Transaksi tidak tersimpan:
- Cek Backendless credentials
- Cek table "Transactions" sudah dibuat
- Cek permissions (Allow CREATE)

---

## 📞 Support:

**Midtrans:**
- Dashboard: https://dashboard.midtrans.com
- Docs: https://docs.midtrans.com
- Support: support@midtrans.com

**Backendless:**
- Console: https://backendless.com
- Email: missblossom007@gmail.com

---

**Setup selesai! 🎉**

Jangan lupa redeploy setelah tambah environment variables!
