# 🔐 Cara Setup Midtrans dari Awal

## 📋 Prerequisites

- Email: missblossom007@gmail.com
- Akses ke email untuk verifikasi

---

## 🚀 Langkah 1: Daftar Akun Midtrans

### A. Daftar Sandbox (Testing)

1. **Buka:** https://dashboard.sandbox.midtrans.com/register
2. **Isi form:**
   - Email: missblossom007@gmail.com
   - Password: (buat password kuat)
   - Business Name: DigimetaShop
   - Phone: 082141733187
3. **Klik:** "Sign Up"
4. **Verifikasi email** (cek inbox)
5. **Login:** https://dashboard.sandbox.midtrans.com

### B. Daftar Production (Live)

1. **Buka:** https://dashboard.midtrans.com/register
2. **Isi form lengkap:**
   - Email: missblossom007@gmail.com
   - Password: (sama dengan sandbox)
   - Business Name: DigimetaShop
   - Business Type: E-commerce
   - Phone: 082141733187
   - Website: https://digimetashop.vercel.app
3. **Upload dokumen:**
   - KTP
   - NPWP (jika ada)
   - Surat izin usaha (jika ada)
4. **Submit** dan tunggu approval (1-3 hari kerja)

---

## 🔑 Langkah 2: Dapatkan API Keys

### Sandbox Keys:

1. **Login:** https://dashboard.sandbox.midtrans.com
2. **Buka:** Settings → Access Keys
3. **Copy:**
   - Client Key: `SB-Mid-client-XXXXXXXX`
   - Server Key: `SB-Mid-server-XXXXXXXX`
   - Merchant ID: `GXXXXXXXX`

### Production Keys:

1. **Login:** https://dashboard.midtrans.com
2. **Tunggu approval** (jika belum approved)
3. **Buka:** Settings → Access Keys
4. **Copy:**
   - Client Key: `Mid-client-XXXXXXXX`
   - Server Key: `Mid-server-XXXXXXXX`
   - Merchant ID: `GXXXXXXXX`

---

## 📝 Langkah 3: Update .env.local

### Untuk Testing (Sandbox):

```env
# Midtrans Configuration - SANDBOX MODE
NEXT_PUBLIC_MIDTRANS_CLIENT_KEY=SB-Mid-client-XXXXXXXX
NEXT_PUBLIC_MIDTRANS_SERVER_KEY=SB-Mid-server-XXXXXXXX
NEXT_PUBLIC_MIDTRANS_MERCHANT_ID=GXXXXXXXX
NEXT_PUBLIC_MIDTRANS_PRODUCTION=false
```

### Untuk Production (Live):

```env
# Midtrans Configuration - PRODUCTION MODE
NEXT_PUBLIC_MIDTRANS_CLIENT_KEY=Mid-client-XXXXXXXX
NEXT_PUBLIC_MIDTRANS_SERVER_KEY=Mid-server-XXXXXXXX
NEXT_PUBLIC_MIDTRANS_MERCHANT_ID=GXXXXXXXX
NEXT_PUBLIC_MIDTRANS_PRODUCTION=true
```

---

## 🧪 Langkah 4: Test Credentials

### Via API Test:

1. **Jalankan dev server:**
   ```bash
   npm run dev
   ```

2. **Buka browser:**
   ```
   http://localhost:3000/api/midtrans/test
   ```

3. **Lihat response:**
   - ✅ `success: true` → Credentials valid!
   - ❌ `success: false` → Credentials invalid, cek lagi

### Via Payment Button:

1. **Buka homepage:** http://localhost:3000
2. **Klik tombol:** "💳 Bayar Sekarang"
3. **Popup Midtrans muncul** → Credentials valid! ✅
4. **Test payment** dengan test card

---

## 💳 Test Cards (Sandbox)

### Credit Card:

| Card Number | Result | CVV | Expiry |
|-------------|--------|-----|--------|
| 4811 1111 1111 1114 | Success | 123 | 01/25 |
| 4911 1111 1111 1113 | Pending | 123 | 01/25 |
| 4411 1111 1111 1118 | Failed | 123 | 01/25 |

### E-Wallet:

- **GoPay:** Pilih GoPay → Akan muncul QR code
- **OVO:** Pilih OVO → Input nomor HP
- **ShopeePay:** Pilih ShopeePay → Redirect ke app

---

## ⚙️ Langkah 5: Konfigurasi Payment Methods

### Di Dashboard Midtrans:

1. **Login:** https://dashboard.midtrans.com (atau sandbox)
2. **Buka:** Settings → Payment Configuration
3. **Enable payment methods:**
   - ✅ Credit Card (Visa, Mastercard, JCB)
   - ✅ Bank Transfer (BCA, Mandiri, BNI, BRI, Permata)
   - ✅ E-Wallet (GoPay, OVO, ShopeePay, QRIS)
   - ✅ Convenience Store (Alfamart, Indomaret)
4. **Save changes**

---

## 🔔 Langkah 6: Setup Notification URL (Webhook)

### Untuk Production:

1. **Buka:** Settings → Configuration
2. **Set Notification URL:**
   ```
   https://your-domain.vercel.app/api/midtrans/notification
   ```
3. **Set Finish Redirect URL:**
   ```
   https://your-domain.vercel.app/success
   ```
4. **Set Unfinish Redirect URL:**
   ```
   https://your-domain.vercel.app/pending
   ```
5. **Set Error Redirect URL:**
   ```
   https://your-domain.vercel.app/error
   ```
6. **Save**

---

## 🚨 Troubleshooting

### Error: "Access denied due to unauthorized transaction"

**Penyebab:**
- Server Key salah
- Merchant belum approved (production)
- Environment salah (production vs sandbox)

**Solusi:**
1. Cek Server Key di dashboard
2. Pastikan copy dengan benar (tidak ada spasi)
3. Jika production, tunggu approval dulu
4. Gunakan sandbox untuk testing

---

### Error: "Merchant ID not found"

**Penyebab:**
- Merchant ID salah
- Akun belum fully setup

**Solusi:**
1. Cek Merchant ID di dashboard
2. Pastikan akun sudah verified
3. Hubungi support Midtrans

---

### Popup Midtrans tidak muncul

**Penyebab:**
- Client Key salah
- Snap.js tidak ter-load
- Browser block popup

**Solusi:**
1. Cek Client Key di `.env.local`
2. Allow popup di browser
3. Cek console browser (F12) untuk error
4. Refresh browser (Ctrl+Shift+R)

---

## 📊 Status Akun

### Sandbox:
- ✅ Langsung bisa digunakan setelah daftar
- ✅ Tidak perlu approval
- ✅ Gratis unlimited transactions
- ⚠️ Hanya untuk testing, tidak bisa terima uang real

### Production:
- ⏳ Perlu approval (1-3 hari kerja)
- ⏳ Perlu upload dokumen
- ✅ Bisa terima uang real
- ⚠️ Ada fee per transaksi (2.9% + Rp 2,000)

---

## 💰 Fee Midtrans (Production)

### Credit Card:
- Domestic: 2.9% + Rp 2,000
- International: 3.9% + Rp 2,000

### Bank Transfer:
- Rp 4,000 per transaksi

### E-Wallet:
- GoPay: 2% + Rp 1,000
- OVO: 2% + Rp 1,000
- ShopeePay: 2% + Rp 1,000

### QRIS:
- 0.7% (no minimum fee)

---

## 📞 Support Midtrans

**Email:** support@midtrans.com  
**Phone:** +62 21 2963 4433  
**Docs:** https://docs.midtrans.com  
**Dashboard:** https://dashboard.midtrans.com

---

## 🎯 Checklist Setup

- [ ] Daftar akun Midtrans (sandbox/production)
- [ ] Verifikasi email
- [ ] Login ke dashboard
- [ ] Copy API Keys (Client Key, Server Key, Merchant ID)
- [ ] Update `.env.local`
- [ ] Restart dev server
- [ ] Test API: `/api/midtrans/test`
- [ ] Test payment button
- [ ] Enable payment methods
- [ ] Setup notification URL (production)
- [ ] Test dengan test card (sandbox)
- [ ] Deploy ke Vercel
- [ ] Test di production

---

## 🚀 Next Steps

Setelah setup berhasil:

1. **Test di Sandbox** - Pastikan semua berfungsi
2. **Apply Production** - Submit dokumen untuk approval
3. **Deploy ke Vercel** - Set environment variables
4. **Test di Production** - Test dengan real card
5. **Monitor Transactions** - Cek dashboard regular

---

**Selamat! Midtrans sudah siap digunakan! 🎉**

Last Updated: November 12, 2025
