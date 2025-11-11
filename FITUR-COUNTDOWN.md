# ⏱️ Fitur Countdown Timer - Flash Sale

## ✨ Yang Sudah Ditambahkan:

### 1. Komponen Countdown (`src/components/Countdown.jsx`)

**Fitur:**
- ✅ Countdown mundur secara real-time (update setiap detik)
- ✅ Format: Jam : Menit : Detik
- ✅ Animasi pulse pada detik (berkedip)
- ✅ Auto-reset ke 24 jam ketika countdown selesai
- ✅ Responsive design
- ✅ Padding angka dengan 0 (contoh: 09 bukan 9)

**Cara Kerja:**
```javascript
// Default: countdown 24 jam dari sekarang
<Countdown />

// Custom: set tanggal akhir tertentu
<Countdown endDate="2024-12-31T23:59:59" />
```

### 2. Integrasi di Homepage

**Lokasi:** Flash Sale Banner di homepage

**Sebelum:**
```jsx
<div className="text-2xl font-bold">12</div> // Statis
```

**Sesudah:**
```jsx
<Countdown /> // Dynamic, bergerak mundur
```

---

## 🎯 Cara Menggunakan:

### Default (24 Jam dari Sekarang):
```jsx
import Countdown from '../components/Countdown'

<Countdown />
```

### Custom Tanggal Akhir:
```jsx
// Set flash sale berakhir tanggal tertentu
<Countdown endDate="2024-12-25T23:59:59" />

// Atau hitung dari sekarang + X jam
const endTime = new Date(Date.now() + 12 * 60 * 60 * 1000) // 12 jam
<Countdown endDate={endTime.toISOString()} />
```

---

## 🔧 Kustomisasi:

### Ubah Durasi Default:

Edit file `src/components/Countdown.jsx`:

```javascript
// Ubah dari 24 jam ke 12 jam
const targetDate = endDate ? new Date(endDate) : new Date(Date.now() + 12 * 60 * 60 * 1000)

// Atau 6 jam
const targetDate = endDate ? new Date(endDate) : new Date(Date.now() + 6 * 60 * 60 * 1000)
```

### Ubah Style:

```jsx
// Ubah warna background
<div className="bg-red-500/30 backdrop-blur-sm rounded-lg px-4 py-2">

// Ubah ukuran font
<div className="text-3xl font-bold"> // Lebih besar

// Ubah animasi
<div className="animate-bounce"> // Bouncing effect
```

### Tambah Hari:

Jika ingin menampilkan hari juga:

```javascript
const days = Math.floor(distance / (1000 * 60 * 60 * 24))
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

setTimeLeft({ days, hours, minutes, seconds })
```

---

## 📱 Responsive Design:

Countdown sudah responsive:
- Desktop: Tampil horizontal dengan spacing normal
- Mobile: Tetap horizontal tapi dengan ukuran lebih kecil
- Min-width 60px untuk setiap box agar tidak terlalu kecil

---

## 🎨 Fitur Visual:

1. **Background Blur:** `backdrop-blur-sm` untuk efek glass
2. **Opacity:** `bg-white/20` untuk transparansi
3. **Padding:** Konsisten di semua box
4. **Animation:** Detik berkedip dengan `animate-pulse`
5. **Font:** Bold dan besar untuk mudah dibaca

---

## 🚀 Testing:

**Cara Test:**
1. Jalankan `npm run dev`
2. Buka http://localhost:3000
3. Scroll ke Flash Sale Banner
4. Lihat countdown bergerak mundur setiap detik
5. Tunggu sampai 00:00:00 (akan reset ke 24:00:00)

**Atau test di production:**
1. Deploy ke Vercel
2. Akses URL website
3. Cek countdown berjalan

---

## 💡 Tips:

1. **Sinkronisasi dengan Backend:**
   - Simpan waktu akhir flash sale di database
   - Fetch dari API saat load page
   - Pass ke komponen: `<Countdown endDate={flashSaleEnd} />`

2. **Notifikasi Saat Selesai:**
   ```javascript
   if (distance < 0) {
     alert('Flash Sale Berakhir!')
     // Atau redirect ke halaman lain
   }
   ```

3. **Multiple Countdown:**
   ```jsx
   <Countdown endDate="2024-12-25T23:59:59" />
   <Countdown endDate="2024-12-31T23:59:59" />
   ```

---

## 🐛 Troubleshooting:

**Countdown tidak bergerak:**
- Pastikan komponen menggunakan `"use client"` di atas
- Cek console browser untuk error
- Pastikan useEffect berjalan

**Countdown tidak akurat:**
- Gunakan `Date.now()` bukan `new Date()`
- Pastikan timezone konsisten

**Memory leak warning:**
- Pastikan `clearInterval` dipanggil di cleanup
- Sudah dihandle di komponen

---

## ✅ Checklist:

- [x] Komponen Countdown dibuat
- [x] Integrasi di homepage
- [x] Countdown bergerak mundur
- [x] Auto-reset saat selesai
- [x] Responsive design
- [x] Animasi smooth
- [x] No memory leak

---

**Countdown timer siap digunakan! 🎉**
