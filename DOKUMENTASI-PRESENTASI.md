# 📊 Dokumentasi Presentasi - DigimetaShop

## 🎯 Ringkasan Proyek

**Nama Proyek:** DigimetaShop - Toko Buku & eBook Digital  
**Teknologi:** Next.js 14, React, Tailwind CSS, TypeScript  
**Tujuan:** Platform e-commerce untuk penjualan buku digital (PDF, Kindle, Mobi)

---

## 📐 Rumus & Formula Penting

### 1. **Perhitungan Diskon**

```javascript
// Formula diskon produk
discount_percentage = ((originalPrice - price) / originalPrice) × 100

// Contoh implementasi:
const originalPrice = 89000
const price = 45000
const discount = Math.round(((originalPrice - price) / originalPrice) * 100)
// Hasil: 49%
```

### 2. **Format Harga Indonesia**

```javascript
// Konversi angka ke format Rupiah
price.toLocaleString('id-ID')

// Contoh:
45000.toLocaleString('id-ID')  // Output: "45.000"
```

### 3. **Perhitungan Rating**

```javascript
// Rating bintang (skala 1-5)
rating = total_rating_points / total_reviews

// Contoh:
const totalPoints = 245
const totalReviews = 50
const averageRating = (totalPoints / totalReviews).toFixed(1)
// Hasil: 4.9
```

### 4. **Perhitungan Penghematan**

```javascript
// Total penghematan pelanggan
savings = originalPrice - price

// Contoh:
const savings = 89000 - 45000  // Rp 44.000
const savingsPercentage = (savings / 89000) * 100  // 49.4%
```

---

## 🏗️ Struktur Proyek

```
digimeta1/
├── public/
│   ├── books/              # Gambar cover buku (DIBERSIHKAN)
│   │   ├── OIP.svg                          ✅ DIGUNAKAN
│   │   ├── Deep-Work-by-Cal-Newport-Book.svg ✅ DIGUNAKAN
│   │   ├── rich-dad-poor-dad-9.webp         ✅ DIGUNAKAN
│   │   └── 71MDz2FR1dL._SL1500_.svg         ✅ DIGUNAKAN
│   ├── team/
│   │   └── sari-dewi.svg   ✅ DIGUNAKAN
│   ├── favicon.ico
│   ├── logo.png
│   └── og-image.png
├── src/
│   ├── app/
│   │   ├── page.jsx        # Homepage
│   │   ├── about/          # Halaman tentang
│   │   ├── services/       # Halaman layanan
│   │   ├── teams/          # Halaman tim
│   │   ├── contact/        # Halaman kontak
│   │   └── blog/           # Halaman blog
│   ├── components/
│   │   ├── BookCard.jsx    # Komponen kartu buku
│   │   ├── BookSlider.jsx  # Slider buku
│   │   ├── Hero.jsx        # Hero section
│   │   ├── Navbar.jsx      # Navigation bar
│   │   └── Footer.jsx      # Footer
│   └── data/
│       └── posts.json      # Data blog posts
└── package.json
```

---

## 📊 Data Produk

### Katalog Buku (5 Produk Utama)

| No | Judul | Penulis | Harga Asli | Harga Jual | Diskon | Rating |
|----|-------|---------|------------|------------|--------|--------|
| 1 | Atomic Habits | James Clear | Rp 89.000 | Rp 45.000 | 49% | 4.9 ⭐ |
| 2 | The Psychology of Money | Morgan Housel | Rp 95.000 | Rp 50.000 | 47% | 5.0 ⭐ |
| 3 | Deep Work | Cal Newport | Rp 85.000 | Rp 42.000 | 51% | 4.8 ⭐ |
| 4 | Rich Dad Poor Dad | Robert T. Kiyosaki | Rp 92.000 | Rp 48.000 | 48% | 4.7 ⭐ |
| 5 | The Warren Buffett Way | Robert G. Hagstrom | Rp 104.000 | Rp 52.000 | 50% | 4.6 ⭐ |

**Total Katalog:** 5000+ ebook dalam berbagai kategori

---

## 💰 Model Bisnis

### Strategi Harga

```
1. Buku Reguler: Rp 15.000 - Rp 25.000
2. Paket Bundling (5-10 buku): Rp 50.000 - Rp 100.000
   - Hemat hingga 40%
3. Request Khusus (buku langka): Rp 30.000 - Rp 50.000
```

### Perhitungan ROI (Return on Investment)

```javascript
// Formula ROI
ROI = ((Revenue - Cost) / Cost) × 100%

// Contoh:
const revenue = 50000      // Harga jual
const cost = 10000         // Biaya akuisisi
const roi = ((revenue - cost) / cost) * 100
// Hasil: 400% ROI
```

---

## 📈 Metrik Performa

### Key Performance Indicators (KPI)

```
✅ 5000+ Koleksi eBook
✅ 10.000+ Pembaca Puas
✅ 24/7 Customer Support
✅ Rating Rata-rata: 4.8/5.0
✅ Diskon Rata-rata: 48%
```

### Conversion Rate Formula

```javascript
// Tingkat konversi pengunjung menjadi pembeli
conversion_rate = (total_purchases / total_visitors) × 100%

// Target: 3-5% conversion rate
```

---

## 🎨 Desain & UX

### Color Palette

```css
/* Primary Colors */
--primary: #fbbf24        /* Kuning/Gold */
--primary-dark: #f59e0b   /* Kuning Gelap */
--primary-light: #fef3c7  /* Kuning Terang */

/* Text Colors */
--text-primary: #1e293b   /* Slate 900 */
--text-secondary: #64748b /* Slate 500 */

/* Background */
--bg-gradient: linear-gradient(to bottom right, #fef3c7, #ffffff)
```

### Responsive Breakpoints

```css
/* Mobile First Approach */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices (tablets) */
lg: 1024px  /* Large devices (desktops) */
xl: 1280px  /* Extra large devices */
```

---

## 🔧 Fitur Utama

### 1. **Instant Download**
- Download langsung setelah pembayaran
- Format: PDF, Kindle, Mobi

### 2. **Flash Sale System**
```javascript
// Countdown timer untuk flash sale
const calculateTimeLeft = () => {
  const difference = +new Date(saleEndDate) - +new Date()
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((difference / 1000 / 60) % 60)
  const seconds = Math.floor((difference / 1000) % 60)
  return { hours, minutes, seconds }
}
```

### 3. **Request Buku Langka**
- Sistem pencarian buku khusus
- Garansi ketersediaan

### 4. **Multi-Format Support**
- PDF (Universal)
- Kindle (Amazon)
- Mobi (E-readers)

---

## 📱 Integrasi

### WhatsApp Business API
```javascript
// Link WhatsApp dengan pre-filled message
const waLink = `https://wa.me/6282141733187?text=Halo,%20saya%20tertarik%20dengan%20buku%20${bookTitle}%20(Rp%20${price})`
```

### Social Media Links
- TikTok: @digimetashop
- Instagram: @digimeta007
- Tokopedia: digimeta007

---

## 🚀 Deployment

### Platform yang Didukung
1. **Vercel** (Recommended)
2. **Netlify**
3. **GitHub Pages**

### Build Commands
```bash
# Install dependencies
npm install

# Development
npm run dev

# Production build
npm run build

# Start production server
npm start
```

---

## 📊 Analytics & Tracking

### Metrics to Track
```javascript
// User engagement metrics
1. Page Views
2. Bounce Rate
3. Average Session Duration
4. Conversion Rate
5. Cart Abandonment Rate

// Formula: Cart Abandonment Rate
abandonment_rate = (1 - (completed_purchases / carts_created)) × 100%
```

---

## 🎓 Kesimpulan

### Keunggulan Kompetitif
1. ✅ Harga 40-50% lebih murah dari toko fisik
2. ✅ Instant delivery (no shipping time)
3. ✅ Koleksi lengkap 5000+ judul
4. ✅ Multi-format support
5. ✅ Customer service 24/7

### Target Market
- 🎓 Mahasiswa & Pelajar
- 💼 Profesional & Entrepreneur
- 📚 Book Enthusiasts
- 🧠 Self-learners

### Proyeksi Pertumbuhan
```
Year 1: 1000 customers
Year 2: 5000 customers (5x growth)
Year 3: 15000 customers (3x growth)

Revenue Growth Rate = 400% annually
```

---

## 📞 Kontak

**WhatsApp:** +62 821-4173-3187  
**Website:** https://www.digimetashop.com  
**Email:** support@digimetashop.com

---

**Dibuat untuk:** Presentasi Akademik  
**Tanggal:** November 2025  
**Versi:** 1.0
