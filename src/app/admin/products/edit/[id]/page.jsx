"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Backendless from "backendless";
import Link from "next/link";

export default function EditProduct() {
  const router = useRouter();
  const params = useParams();
  const productId = params.id;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const [formData, setFormData] = useState({
    judul: "",
    slug: "",
    harga: "",
    link_pemesanan: "",
    cover_url: "",
    deskripsi: "",
    penulis: "",
    kategori: "Umum",
    rating: "4.5",
    file_ebook_url: "",
  });

  // Initialize Backendless
  useEffect(() => {
    const APP_ID = "4A199CBD-443F-46F1-92AD-510866DF18E4";
    const API_KEY = "E040786E-A130-438F-8A2A-16267112B9B8";

    if (!Backendless.applicationId) {
      Backendless.initApp(APP_ID, API_KEY);
    }

    loadProduct();
  }, [productId]);

  async function loadProduct() {
    try {
      setLoading(true);
      const product = await Backendless.Data.of("Products").findById(
        productId
      );

      if (product) {
        setFormData({
          judul: product.judul || "",
          slug: product.slug || "",
          harga: product.harga || "",
          link_pemesanan: product.link_pemesanan || "",
          cover_url: product.cover_url || "",
          deskripsi: product.deskripsi || "",
          penulis: product.penulis || "",
          kategori: product.kategori || "Umum",
          rating: product.rating || "4.5",
          file_ebook_url: product.file_ebook_url || "",
        });
      }
    } catch (err) {
      console.error("❌ Error loading product:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Auto-generate slug from judul
    if (name === "judul") {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();
      setFormData((prev) => ({
        ...prev,
        slug,
      }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setSuccess(null);

    try {
      const updateData = {
        objectId: productId,
        ...formData,
        harga: parseInt(formData.harga),
        rating: parseFloat(formData.rating),
        updated: new Date().getTime(),
      };

      await Backendless.Data.of("Products").save(updateData);

      setSuccess("✅ Produk berhasil diupdate!");
      setTimeout(() => {
        router.push("/admin/products");
      }, 1500);
    } catch (err) {
      console.error("❌ Error updating product:", err);
      setError(err.message || "Gagal mengupdate produk");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-bounce">📦</div>
          <p className="text-xl text-slate-600">Memuat produk...</p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/admin/products"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-primary transition-colors mb-4"
          >
            ← Kembali ke Products
          </Link>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            ✏️ Edit Produk
          </h1>
          <p className="text-slate-600">Update informasi produk</p>
        </div>

        {/* Messages */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
            <p className="font-semibold">⚠️ Error:</p>
            <p>{error}</p>
          </div>
        )}

        {success && (
          <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-700 rounded">
            <p>{success}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
            {/* Judul */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Judul Produk *
              </label>
              <input
                type="text"
                name="judul"
                value={formData.judul}
                onChange={handleChange}
                className="w-full p-3 border-2 border-slate-200 rounded-lg focus:border-primary focus:outline-none"
                required
              />
            </div>

            {/* Slug */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Slug (URL-friendly)
              </label>
              <input
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                className="w-full p-3 border-2 border-slate-200 rounded-lg focus:border-primary focus:outline-none bg-slate-50"
                readOnly
              />
            </div>

            {/* Harga & Rating */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Harga (Rp) *
                </label>
                <input
                  type="number"
                  name="harga"
                  value={formData.harga}
                  onChange={handleChange}
                  className="w-full p-3 border-2 border-slate-200 rounded-lg focus:border-primary focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Rating (0-5)
                </label>
                <input
                  type="number"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  step="0.1"
                  min="0"
                  max="5"
                  className="w-full p-3 border-2 border-slate-200 rounded-lg focus:border-primary focus:outline-none"
                />
              </div>
            </div>

            {/* Penulis & Kategori */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Penulis
                </label>
                <input
                  type="text"
                  name="penulis"
                  value={formData.penulis}
                  onChange={handleChange}
                  className="w-full p-3 border-2 border-slate-200 rounded-lg focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Kategori
                </label>
                <select
                  name="kategori"
                  value={formData.kategori}
                  onChange={handleChange}
                  className="w-full p-3 border-2 border-slate-200 rounded-lg focus:border-primary focus:outline-none"
                >
                  <option value="Umum">Umum</option>
                  <option value="Bisnis">Bisnis</option>
                  <option value="Teknologi">Teknologi</option>
                  <option value="Self Help">Self Help</option>
                  <option value="Fiksi">Fiksi</option>
                  <option value="Non-Fiksi">Non-Fiksi</option>
                </select>
              </div>
            </div>

            {/* Cover URL */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Cover URL
              </label>
              <input
                type="url"
                name="cover_url"
                value={formData.cover_url}
                onChange={handleChange}
                className="w-full p-3 border-2 border-slate-200 rounded-lg focus:border-primary focus:outline-none"
                placeholder="https://..."
              />
            </div>

            {/* Link Pemesanan */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Link Pemesanan (WhatsApp)
              </label>
              <input
                type="url"
                name="link_pemesanan"
                value={formData.link_pemesanan}
                onChange={handleChange}
                className="w-full p-3 border-2 border-slate-200 rounded-lg focus:border-primary focus:outline-none"
                placeholder="https://wa.me/..."
              />
            </div>

            {/* File Ebook URL */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                File Ebook URL
              </label>
              <input
                type="url"
                name="file_ebook_url"
                value={formData.file_ebook_url}
                onChange={handleChange}
                className="w-full p-3 border-2 border-slate-200 rounded-lg focus:border-primary focus:outline-none"
                placeholder="https://..."
              />
            </div>

            {/* Deskripsi */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Deskripsi
              </label>
              <textarea
                name="deskripsi"
                value={formData.deskripsi}
                onChange={handleChange}
                className="w-full p-3 border-2 border-slate-200 rounded-lg focus:border-primary focus:outline-none resize-none"
                rows="4"
                placeholder="Deskripsi produk..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={saving}
              className="flex-1 px-8 py-4 bg-primary hover:bg-primary-dark text-slate-900 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {saving ? "⏳ Menyimpan..." : "💾 Simpan Perubahan"}
            </button>
            <Link
              href="/admin/products"
              className="px-8 py-4 bg-slate-200 hover:bg-slate-300 text-slate-900 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              Batal
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
