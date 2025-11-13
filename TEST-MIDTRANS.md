# 🧪 Test Midtrans Integration

## 🎯 Cara Test Midtrans

### 1. Test Credentials (API Test)

**URL:** `http://localhost:3000/api/midtrans/test`

Atau setelah deploy:
```
https://your-vercel-url.vercel.app/api/midtrans/test
```

**Response jika berhasil:**
```json
{
  "success": true,
  "message": "Midtrans credentials are valid!",
  "snapToken": "***abc123xyz",
  "config": {
    "serverKey": "***CS9nKr",
    "isProduction": true,
    "apiUrl": "https://app.midtrans.com/snap/v1/transactions"
  }
}
```

**Response jika gagal:**
```json
{
  "success": false,
  "error": "Access denied due to unauthorized transaction",
  "status": 401,
  "config": {
    "serverKey": "***CS9nKr",
    "isProduction": true,
    "apiUrl": "https://app.midtrans.com/snap/v1/transactions"
  }
}
```

---

### 2. Test Payment Button

**Langkah:**
1. Jalankan dev server: `npm run dev`
2. Buka: `http://localhost:3000`
3. Klik tombol "💳 Bayar Sekarang" pada produk
4. Popup Midtrans akan muncul
5. Pilih metode pembayaran
6. Selesaikan pembayaran

**Test Cards (Sandbox):**
- **Success:** 4811 1111 1111 1114
- **Pending:** 4911 1111 1111 1113
- **Failed:** 4411 1111 1111 1118

**CVV:** 123  
**Expiry:** 01/25

---

### 3. Cek Transaction di Backendless

**URL:** https://backendless.com

**Langkah:**
1. Login ke Backendless Console
2. Buka: Data → Transactions
3. Lihat transaksi yang baru dibuat
4. Cek status: pending/success/failed

---

## 🔧 Troubleshooting

### Error: "Access denied due to unauthorized transaction"

**Penyebab:**
- Server Key salah atau expired
- Merchant ID tidak match
- Environment salah (production vs sandbox)

**Solusi:**
1. Cek credentials di `.env.local`
2. Login ke Midtrans Dashboard: https://dashboard.midtrans.com
3. Buka: Settings → Access Keys
4. Copy Server Key yang benar
5. Update `.env.local`:
   ```
   NEXT_PUBLIC_MIDTRANS_SERVER_KEY=Mid-server-YOUR_KEY
   ```
6. Restart dev server

---

### Error: "Transaksi tidak ditemukan"

**Penyebab:**
- Snap token tidak valid
- Order ID sudah digunakan
- API route tidak berfungsi

**Solusi:**
1. Test API endpoint: `/api/midtrans/test`
2. Cek console browser (F12) untuk error
3. Cek console server untuk log
4. Pastikan API route sudah dibuat

---

### Popup Midtrans tidak muncul

**Penyebab:**
- Snap.js tidak ter-load
- Client Key salah
- Browser block popup

**Solusi:**
1. Cek console browser untuk error
2. Allow popup di browser
3. Cek Client Key di `.env.local`
4. Refresh browser (Ctrl+Shift+R)

---

## 📊 Credentials Midtrans

### Production (missblossom007@gmail.com)

```env
NEXT_PUBLIC_MIDTRANS_CLIENT_KEY=Mid-client-oFOsaBvke_JvFpYc
NEXT_PUBLIC_MIDTRANS_SERVER_KEY=Mid-server-AT0ZZkIQAQRzC0VyFQFCS9nKr
NEXT_PUBLIC_MIDTRANS_MERCHANT_ID=G445401830
NEXT_PUBLIC_MIDTRANS_PRODUCTION=true
```

**Dashboard:** https://dashboard.midtrans.com

---

### Sandbox (Testing)

Jika ingin test di sandbox:

```env
NEXT_PUBLIC_MIDTRANS_CLIENT_KEY=SB-Mid-client-YOUR_KEY
NEXT_PUBLIC_MIDTRANS_SERVER_KEY=SB-Mid-server-YOUR_KEY
NEXT_PUBLIC_MIDTRANS_MERCHANT_ID=YOUR_MERCHANT_ID
NEXT_PUBLIC_MIDTRANS_PRODUCTION=false
```

**Dashboard:** https://dashboard.sandbox.midtrans.com

---

## 🔍 Cara Cek Credentials Valid

### Via Dashboard Midtrans:

1. Login: https://dashboard.midtrans.com
2. Buka: Settings → Access Keys
3. Lihat:
   - Client Key
   - Server Key
   - Merchant ID
4. Copy dan paste ke `.env.local`

### Via API Test:

1. Buka: `http://localhost:3000/api/midtrans/test`
2. Lihat response:
   - `success: true` → Credentials valid ✅
   - `success: false` → Credentials invalid ❌

---

## 🎯 Checklist Test

- [ ] Test API endpoint: `/api/midtrans/test`
- [ ] Response success: `true`
- [ ] Buka homepage
- [ ] Klik tombol "Bayar Sekarang"
- [ ] Popup Midtrans muncul
- [ ] Pilih metode pembayaran
- [ ] Test payment (sandbox card)
- [ ] Cek transaction di Backendless
- [ ] Status transaction: success/pending/failed

---

## 📝 Log yang Harus Muncul

### Console Browser:
```
🔑 Midtrans Config: {
  clientKey: "Mid-client-oFOsaBvke_JvFpYc",
  merchantId: "G445401830",
  isProduction: true,
  snapUrl: "https://app.midtrans.com/snap/snap.js"
}
✅ Midtrans Snap loaded
✅ Transaction saved to Backendless: {...}
✅ Snap token received: abc123xyz
```

### Console Server:
```
📦 Creating Midtrans transaction: {...}
✅ Midtrans transaction created: {
  token: "abc123xyz",
  redirect_url: "https://app.midtrans.com/snap/v2/vtweb/abc123xyz"
}
```

---

## 🚀 Next Steps

Setelah test berhasil:

1. **Deploy ke Vercel**
   - Push ke GitHub
   - Vercel auto-deploy
   - Set environment variables di Vercel

2. **Test di Production**
   - Buka URL Vercel
   - Test payment dengan real card
   - Cek transaction di Midtrans Dashboard

3. **Monitor Transactions**
   - Cek Midtrans Dashboard regular
   - Cek Backendless Transactions table
   - Setup notification (email/webhook)

---

## 📞 Support

**Midtrans Support:**
- Email: support@midtrans.com
- Docs: https://docs.midtrans.com
- Dashboard: https://dashboard.midtrans.com

**Backendless Support:**
- Email: support@backendless.com
- Docs: https://backendless.com/docs
- Console: https://backendless.com

---

**Happy Testing! 🎉**

Last Updated: November 12, 2025
