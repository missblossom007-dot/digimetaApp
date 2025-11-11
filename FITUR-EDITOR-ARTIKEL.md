# ✍️ Fitur Editor Artikel Profesional

## 🎯 Fitur Utama yang Ditambahkan:

### 1. **Rich Text Toolbar**
- ✅ **H2 & H3** - Insert heading
- ✅ **📝 Paragraf** - Insert paragraf terformat
- ✅ **📋 List** - Insert bullet list
- ✅ **🖼️ Gambar** - Insert gambar dari URL
- ✅ **🔗 Link** - Insert hyperlink

### 2. **Word Counter**
- ✅ Hitung kata real-time
- ✅ Maksimal 1000 kata
- ✅ Minimal 50 kata
- ✅ Warning warna (hijau → orange → merah)

### 3. **Preview Mode**
- ✅ Toggle preview/edit
- ✅ Lihat hasil akhir sebelum publish
- ✅ Render HTML dengan styling

### 4. **Metadata Lengkap**
- ✅ Judul artikel
- ✅ Kategori (dropdown)
- ✅ Icon emoji (8 pilihan)
- ✅ Ringkasan/excerpt (opsional)

### 5. **Sidebar Helper**
- ✅ Tips menulis artikel
- ✅ Statistik (kata, karakter, estimasi baca)
- ✅ Preview real-time

### 6. **Validasi**
- ✅ Cek panjang artikel (50-1000 kata)
- ✅ Required fields
- ✅ Error handling
- ✅ Loading state

---

## 📝 Cara Menggunakan:

### 1. Menulis Judul
```
Masukkan judul yang menarik dan deskriptif
Contoh: "5 Tips Memilih Buku Bisnis untuk Pemula"
```

### 2. Pilih Kategori & Icon
- Pilih kategori yang sesuai
- Pilih emoji icon yang relevan

### 3. Gunakan Toolbar untuk Format:

**Insert Heading:**
```html
Klik "H2" → Masukkan teks
Hasil: <h2 class="text-2xl font-bold mt-6 mb-3">Judul Besar</h2>
```

**Insert Paragraf:**
```html
Klik "📝 Paragraf" → Masukkan teks
Hasil: <p class="text-slate-700 leading-relaxed mb-4">Isi paragraf...</p>
```

**Insert List:**
```html
Klik "📋 List" → Masukkan item (pisah dengan koma)
Hasil:
<ul class="list-disc ml-6 my-4">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

**Insert Gambar:**
```html
Klik "🖼️ Gambar" → Masukkan URL gambar
Hasil: <img src="URL" alt="Gambar artikel" class="w-full rounded-lg my-4" />
```

**Insert Link:**
```html
Klik "🔗 Link" → Masukkan URL → Masukkan teks
Hasil: <a href="URL" target="_blank">Teks Link</a>
```

### 4. Preview Artikel
- Klik tombol "👁️ Preview"
- Lihat hasil akhir
- Klik "📝 Edit" untuk kembali edit

### 5. Publikasikan
- Pastikan word count 50-1000 kata
- Klik "✅ Publikasikan Artikel"
- Artikel akan tersimpan ke Backendless

---

## 🎨 Contoh Artikel Lengkap:

```html
<h2 class="text-2xl font-bold mt-6 mb-3">Mengapa Membaca Itu Penting?</h2>

<p class="text-slate-700 leading-relaxed mb-4">
Membaca adalah investasi terbaik untuk pengembangan diri. Berikut beberapa alasan mengapa Anda harus membaca setiap hari.
</p>

<img src="https://example.com/reading.jpg" alt="Orang membaca buku" class="w-full rounded-lg my-4 shadow-md" />

<h3 class="text-xl font-bold mt-4 mb-2">Manfaat Membaca:</h3>

<ul class="list-disc ml-6 my-4 text-slate-700">
  <li class="mb-2">Meningkatkan pengetahuan</li>
  <li class="mb-2">Melatih fokus dan konsentrasi</li>
  <li class="mb-2">Mengurangi stress</li>
  <li class="mb-2">Memperluas wawasan</li>
</ul>

<p class="text-slate-700 leading-relaxed mb-4">
Untuk rekomendasi buku terbaik, kunjungi 
<a href="https://digimetashop.com" target="_blank" class="text-primary hover:underline font-semibold">DigimetaShop</a>.
</p>

<h2 class="text-2xl font-bold mt-6 mb-3">Kesimpulan</h2>

<p class="text-slate-700 leading-relaxed mb-4">
Mulai kebiasaan membaca dari sekarang dan rasakan manfaatnya dalam hidup Anda.
</p>
```

---

## 📊 Statistik yang Ditampilkan:

1. **Jumlah Kata:** Real-time word count
2. **Jumlah Karakter:** Total characters
3. **Estimasi Baca:** Berdasarkan 200 kata/menit

---

## 🎯 Tips Menulis Artikel Berkualitas:

### Struktur Artikel yang Baik:

```
1. Judul Menarik (H1 - auto dari title)
2. Pembukaan (1-2 paragraf)
3. Isi Utama:
   - Heading 2 untuk topik besar
   - Heading 3 untuk sub-topik
   - Paragraf untuk penjelasan
   - List untuk poin-poin
   - Gambar untuk visual
4. Kesimpulan (1-2 paragraf)
5. Call-to-Action (opsional)
```

### Panjang Ideal:
- **Artikel Pendek:** 300-500 kata
- **Artikel Sedang:** 500-800 kata
- **Artikel Panjang:** 800-1000 kata

### Gunakan:
- ✅ Heading untuk struktur
- ✅ Paragraf pendek (3-5 kalimat)
- ✅ List untuk kemudahan baca
- ✅ Gambar setiap 200-300 kata
- ✅ Link ke sumber/referensi

---

## 🔧 Kustomisasi:

### Ubah Maksimal Kata:

Edit `src/app/create-blog/page.jsx`:

```javascript
// Ubah dari 1000 ke 1500 kata
if (wordCount > 1500) {
  setError('Artikel terlalu panjang! Maksimal 1500 kata.')
  return
}
```

### Tambah Kategori Baru:

```jsx
<select value={category} onChange={(e) => setCategory(e.target.value)}>
  <option value="Artikel">Artikel</option>
  <option value="Bisnis">Bisnis</option>
  <option value="Tips">Tips</option>
  <option value="Review">Review</option>
  <option value="Self Growth">Self Growth</option>
  <option value="Tutorial">Tutorial</option> {/* Baru */}
  <option value="News">News</option> {/* Baru */}
</select>
```

### Tambah Icon Emoji:

```jsx
<select value={image} onChange={(e) => setImage(e.target.value)}>
  {/* ... existing options ... */}
  <option value="🎓">🎓 Edukasi</option>
  <option value="🏆">🏆 Achievement</option>
  <option value="🔥">🔥 Trending</option>
</select>
```

---

## 🚀 Fitur Lanjutan (Opsional):

### 1. Auto-Save Draft
```javascript
useEffect(() => {
  const timer = setTimeout(() => {
    localStorage.setItem('draft', JSON.stringify({ title, content, category }))
  }, 5000) // Save every 5 seconds
  
  return () => clearTimeout(timer)
}, [title, content, category])
```

### 2. Image Upload (bukan URL)
```javascript
function handleImageUpload(e) {
  const file = e.target.files[0]
  // Upload to cloud storage (Cloudinary, AWS S3, etc.)
  // Get URL and insert to content
}
```

### 3. Markdown Support
```javascript
import { marked } from 'marked'

function convertMarkdown() {
  const html = marked(content)
  setContent(html)
}
```

---

## ✅ Checklist Sebelum Publish:

- [ ] Judul menarik dan deskriptif
- [ ] Kategori sudah dipilih
- [ ] Icon emoji sesuai
- [ ] Word count 50-1000 kata
- [ ] Ada heading (H2/H3)
- [ ] Ada gambar (minimal 1)
- [ ] Ada link (jika perlu)
- [ ] Sudah preview
- [ ] Tidak ada typo

---

## 📱 Responsive Design:

Editor sudah responsive:
- **Desktop:** 2 kolom (form + sidebar)
- **Tablet:** 2 kolom dengan spacing lebih kecil
- **Mobile:** 1 kolom (sidebar di bawah)

---

## 🎓 Contoh Penggunaan:

### Artikel Review Buku:

1. **Judul:** "Review: Atomic Habits oleh James Clear"
2. **Kategori:** Review
3. **Icon:** ⭐
4. **Konten:**
   - H2: Tentang Buku
   - Paragraf: Deskripsi
   - Gambar: Cover buku
   - H2: Poin-Poin Penting
   - List: Key takeaways
   - H2: Kesimpulan
   - Link: Beli buku

### Artikel Tips:

1. **Judul:** "5 Tips Produktif Bekerja dari Rumah"
2. **Kategori:** Tips
3. **Icon:** 💡
4. **Konten:**
   - H2: Mengapa Produktivitas Penting?
   - Paragraf: Penjelasan
   - H2: 5 Tips Utama
   - H3: Tip 1 - Buat Jadwal
   - Paragraf + Gambar
   - H3: Tip 2 - Atur Workspace
   - Paragraf + Gambar
   - (dst...)

---

**Editor artikel profesional siap digunakan! 🎉**

Upload file ini ke GitHub dan deploy untuk melihat hasilnya!
