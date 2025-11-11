# 🧮 Rumus & Formula Teknis - DigimetaShop

## 📐 MATEMATIKA BISNIS

### 1. Perhitungan Diskon & Harga

#### A. Persentase Diskon
```
Formula:
Diskon (%) = ((Harga Asli - Harga Jual) / Harga Asli) × 100

Contoh:
Harga Asli = Rp 89.000
Harga Jual = Rp 45.000
Diskon = ((89.000 - 45.000) / 89.000) × 100
Diskon = (44.000 / 89.000) × 100
Diskon = 0.494 × 100
Diskon = 49.4% ≈ 49%
```

#### B. Harga Setelah Diskon
```
Formula:
Harga Jual = Harga Asli × (1 - Diskon%)

Contoh:
Harga Asli = Rp 100.000
Diskon = 50%
Harga Jual = 100.000 × (1 - 0.50)
Harga Jual = 100.000 × 0.50
Harga Jual = Rp 50.000
```

#### C. Penghematan Pelanggan
```
Formula:
Penghematan = Harga Asli - Harga Jual

Total Penghematan (Multiple Items):
Total = Σ(Harga Asli - Harga Jual)

Contoh:
Buku 1: 89.000 - 45.000 = 44.000
Buku 2: 95.000 - 50.000 = 45.000
Buku 3: 85.000 - 42.000 = 43.000
Total Penghematan = 132.000
```

---

## 💰 ANALISIS KEUANGAN

### 2. Return on Investment (ROI)

```
Formula:
ROI = ((Pendapatan - Biaya) / Biaya) × 100%

Contoh Kasus:
Biaya Akuisisi Buku Digital = Rp 10.000
Harga Jual = Rp 50.000
ROI = ((50.000 - 10.000) / 10.000) × 100%
ROI = (40.000 / 10.000) × 100%
ROI = 4 × 100%
ROI = 400%

Interpretasi: Setiap Rp 1 yang diinvestasikan menghasilkan Rp 4 profit
```

### 3. Profit Margin

```
Formula:
Profit Margin = ((Harga Jual - Biaya) / Harga Jual) × 100%

Contoh:
Harga Jual = Rp 50.000
Biaya = Rp 10.000
Profit Margin = ((50.000 - 10.000) / 50.000) × 100%
Profit Margin = (40.000 / 50.000) × 100%
Profit Margin = 0.8 × 100%
Profit Margin = 80%
```

### 4. Break-Even Point (BEP)

```
Formula:
BEP (unit) = Biaya Tetap / (Harga Jual - Biaya Variable per Unit)

Contoh:
Biaya Tetap (website, hosting, marketing) = Rp 5.000.000/bulan
Harga Jual per Buku = Rp 50.000
Biaya Variable per Buku = Rp 10.000

BEP = 5.000.000 / (50.000 - 10.000)
BEP = 5.000.000 / 40.000
BEP = 125 buku/bulan

Interpretasi: Harus menjual minimal 125 buku per bulan untuk impas
```

---

## 📊 METRIK PERFORMA

### 5. Conversion Rate

```
Formula:
Conversion Rate = (Jumlah Pembelian / Jumlah Pengunjung) × 100%

Contoh:
Pengunjung Website = 1.000 orang/hari
Pembelian = 50 transaksi/hari
Conversion Rate = (50 / 1.000) × 100%
Conversion Rate = 5%

Target Industry Standard: 2-5%
```

### 6. Average Order Value (AOV)

```
Formula:
AOV = Total Pendapatan / Jumlah Pesanan

Contoh:
Total Pendapatan = Rp 5.000.000
Jumlah Pesanan = 100
AOV = 5.000.000 / 100
AOV = Rp 50.000

Strategi Meningkatkan AOV:
- Bundling (paket buku)
- Upselling (rekomendasi buku serupa)
- Cross-selling (buku kategori berbeda)
```

### 7. Customer Lifetime Value (CLV)

```
Formula:
CLV = (Average Order Value) × (Purchase Frequency) × (Customer Lifespan)

Contoh:
AOV = Rp 50.000
Frekuensi Pembelian = 4 kali/tahun
Customer Lifespan = 3 tahun

CLV = 50.000 × 4 × 3
CLV = Rp 600.000

Interpretasi: Setiap pelanggan bernilai Rp 600.000 selama masa hidupnya
```

### 8. Cart Abandonment Rate

```
Formula:
Cart Abandonment Rate = (1 - (Completed Purchases / Carts Created)) × 100%

Contoh:
Keranjang Dibuat = 200
Pembelian Selesai = 150
Cart Abandonment = (1 - (150 / 200)) × 100%
Cart Abandonment = (1 - 0.75) × 100%
Cart Abandonment = 25%

Target: < 30%
```

---

## ⭐ SISTEM RATING

### 9. Average Rating

```
Formula:
Average Rating = Σ(Rating × Jumlah Review) / Total Review

Contoh:
5 bintang: 100 review
4 bintang: 30 review
3 bintang: 10 review
2 bintang: 5 review
1 bintang: 5 review

Total Points = (5×100) + (4×30) + (3×10) + (2×5) + (1×5)
Total Points = 500 + 120 + 30 + 10 + 5 = 665

Total Reviews = 100 + 30 + 10 + 5 + 5 = 150

Average Rating = 665 / 150 = 4.43 ≈ 4.4 ⭐
```

### 10. Weighted Rating (Bayesian Average)

```
Formula:
Weighted Rating = (v/(v+m)) × R + (m/(v+m)) × C

Dimana:
v = jumlah votes untuk item ini
m = minimum votes required (threshold)
R = average rating untuk item ini
C = mean rating across all items

Contoh:
v = 50 reviews
m = 10 (minimum threshold)
R = 4.8 (rating buku ini)
C = 4.2 (rata-rata semua buku)

Weighted = (50/(50+10)) × 4.8 + (10/(50+10)) × 4.2
Weighted = (50/60) × 4.8 + (10/60) × 4.2
Weighted = 0.833 × 4.8 + 0.167 × 4.2
Weighted = 4.0 + 0.7
Weighted = 4.7 ⭐
```

---

## 📈 GROWTH METRICS

### 11. Month-over-Month Growth

```
Formula:
MoM Growth = ((Current Month - Previous Month) / Previous Month) × 100%

Contoh:
Penjualan Bulan Lalu = 100 buku
Penjualan Bulan Ini = 150 buku

MoM Growth = ((150 - 100) / 100) × 100%
MoM Growth = (50 / 100) × 100%
MoM Growth = 50%
```

### 12. Compound Annual Growth Rate (CAGR)

```
Formula:
CAGR = ((Ending Value / Beginning Value)^(1/n) - 1) × 100%

Dimana n = jumlah tahun

Contoh:
Tahun 1: 1.000 customers
Tahun 3: 8.000 customers
n = 2 tahun

CAGR = ((8.000 / 1.000)^(1/2) - 1) × 100%
CAGR = (8^0.5 - 1) × 100%
CAGR = (2.828 - 1) × 100%
CAGR = 182.8%
```

---

## 🎯 MARKETING METRICS

### 13. Customer Acquisition Cost (CAC)

```
Formula:
CAC = Total Marketing Spend / Number of New Customers

Contoh:
Marketing Budget = Rp 10.000.000/bulan
New Customers = 500

CAC = 10.000.000 / 500
CAC = Rp 20.000 per customer
```

### 14. CAC Payback Period

```
Formula:
Payback Period = CAC / (Monthly Revenue per Customer - Monthly Cost per Customer)

Contoh:
CAC = Rp 20.000
Monthly Revenue per Customer = Rp 50.000
Monthly Cost per Customer = Rp 10.000

Payback = 20.000 / (50.000 - 10.000)
Payback = 20.000 / 40.000
Payback = 0.5 bulan

Interpretasi: Biaya akuisisi kembali dalam 0.5 bulan (15 hari)
```

### 15. Return on Ad Spend (ROAS)

```
Formula:
ROAS = Revenue from Ads / Cost of Ads

Contoh:
Ad Spend = Rp 5.000.000
Revenue Generated = Rp 25.000.000

ROAS = 25.000.000 / 5.000.000
ROAS = 5:1 atau 500%

Interpretasi: Setiap Rp 1 iklan menghasilkan Rp 5 revenue
Target: ROAS > 4:1
```

---

## 📦 INVENTORY & BUNDLING

### 16. Bundle Discount Calculation

```
Formula:
Bundle Price = Σ(Individual Prices) × (1 - Bundle Discount%)

Contoh Paket 5 Buku:
Buku 1: Rp 45.000
Buku 2: Rp 50.000
Buku 3: Rp 42.000
Buku 4: Rp 48.000
Buku 5: Rp 52.000
Total Individual = Rp 237.000

Bundle Discount = 40%
Bundle Price = 237.000 × (1 - 0.40)
Bundle Price = 237.000 × 0.60
Bundle Price = Rp 142.200 ≈ Rp 140.000

Customer Savings = 237.000 - 140.000 = Rp 97.000
```

---

## ⏱️ TIME-BASED CALCULATIONS

### 17. Flash Sale Countdown

```javascript
// JavaScript Implementation
function calculateTimeLeft(endDate) {
  const now = new Date().getTime()
  const end = new Date(endDate).getTime()
  const difference = end - now
  
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((difference / (1000 * 60)) % 60)
  const seconds = Math.floor((difference / 1000) % 60)
  
  return { hours, minutes, seconds }
}

// Contoh:
// End Date: 2025-11-11 23:59:59
// Current: 2025-11-10 11:25:03
// Result: { hours: 12, minutes: 34, seconds: 56 }
```

---

## 📊 STATISTICAL ANALYSIS

### 18. Standard Deviation (Variasi Harga)

```
Formula:
σ = √(Σ(xi - μ)² / N)

Dimana:
σ = standard deviation
xi = setiap nilai harga
μ = mean (rata-rata)
N = jumlah data

Contoh Harga 5 Buku:
45.000, 50.000, 42.000, 48.000, 52.000

Mean (μ) = (45+50+42+48+52) / 5 = 237/5 = 47.400

Variance = ((45-47.4)² + (50-47.4)² + (42-47.4)² + (48-47.4)² + (52-47.4)²) / 5
Variance = (5.76 + 6.76 + 29.16 + 0.36 + 21.16) / 5
Variance = 63.2 / 5 = 12.64

Standard Deviation = √12.64 = 3.555 ≈ Rp 3.600

Interpretasi: Harga buku bervariasi ±Rp 3.600 dari rata-rata
```

---

## 🎓 KESIMPULAN RUMUS

### Rumus Paling Penting untuk Presentasi:

1. **Diskon**: `((Harga Asli - Harga Jual) / Harga Asli) × 100`
2. **ROI**: `((Revenue - Cost) / Cost) × 100%`
3. **Conversion Rate**: `(Purchases / Visitors) × 100%`
4. **CLV**: `AOV × Frequency × Lifespan`
5. **Break-Even**: `Fixed Cost / (Price - Variable Cost)`

### Tips Presentasi:
- ✅ Gunakan contoh nyata dari data proyek
- ✅ Visualisasikan dengan grafik/chart
- ✅ Jelaskan interpretasi bisnis dari setiap rumus
- ✅ Tunjukkan bagaimana rumus diimplementasikan dalam code

---

**Catatan:** Semua rumus ini sudah diimplementasikan dalam kode JavaScript/React di proyek DigimetaShop.
