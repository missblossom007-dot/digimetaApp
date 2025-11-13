"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Backendless from "backendless";
import MidtransButton from "../../../components/MidtransButton";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(null);

  // Initialize Backendless
  useEffect(() => {
    const APP_ID = "4A199CBD-443F-46F1-92AD-510866DF18E4";
    const API_KEY = "E040786E-A130-438F-8A2A-16267112B9B8";

    if (!Backendless.applicationId) {
      Backendless.initApp(APP_ID, API_KEY);
      console.log("✅ Backendless initialized");
    }

    loadProducts();
  }, []);

  async function loadProducts() {
    try {
      setLoading(true);
      setError(null);

      const queryBuilder = Backendless.DataQueryBuilder.create();
      queryBuilder.setSortBy(["created DESC"]);
      queryBuilder.setPageSize(100);

      const productsData = await Backendless.Data.of("Products").find(
        queryBuilder
      );

      console.log("✅ Products loaded:", productsData);
      setProducts(productsData);
    } catch (err) {
      console.error("❌ Error loading products:", err);
      setError(err.message || "Gagal memuat produk");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(objectId, productName) {
    if (!confirm(`Hapus produk "${productName}"?`)) {
      return;
    }

    try {
      setDeleteLoading(objectId);
      await Backendless.Data.of("Products").remove({ objectId });
      console.log("✅ Product deleted:", objectId);

      // Reload products
      await loadProducts();
      alert("Produk berhasil dihapus!");
    } catch (err) {
      console.error("❌ Error deleting product:", err);
      alert(`Gagal menghapus produk: ${err.message}`);
    } finally {
      setDeleteLoading(null);
    }
  }

  function formatPrice(price) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  }

  function formatDate(timestamp) {
    if (!timestamp) return "-";
    const date = new Date(timestamp);
    return date.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return (
    <section className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-2">
              📦 Manage Products
            </h1>
            <p className="text-slate-600">
              Kelola produk ebook dari Backendless
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/admin/products/add"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              ➕ Tambah Manual
            </Link>
            <Link
              href="/admin/upload-products"
              className="px-6 py-3 bg-primary hover:bg-primary-dark text-slate-900 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              📤 Upload CSV
            </Link>
          </div>
        </div>

        {/* Stats */}
        {!loading && products.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">📚</div>
              <div className="text-2xl font-bold text-slate-900">
                {products.length}
              </div>
              <div className="text-sm text-slate-600">Total Produk</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">⭐</div>
              <div className="text-2xl font-bold text-slate-900">
                {(
                  products.reduce((sum, p) => sum + (parseFloat(p.rating) || 0), 0) /
                  products.length
                ).toFixed(1)}
              </div>
              <div className="text-sm text-slate-600">Rating Rata-rata</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">📁</div>
              <div className="text-2xl font-bold text-slate-900">
                {[...new Set(products.map((p) => p.kategori))].length}
              </div>
              <div className="text-sm text-slate-600">Kategori</div>
            </div>
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4 animate-bounce">📦</div>
            <p className="text-xl text-slate-600">Memuat produk...</p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-6">
            <p className="font-semibold text-red-700">⚠️ Error:</p>
            <p className="text-red-600">{error}</p>
            <button
              onClick={loadProducts}
              className="mt-4 px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
            >
              Coba Lagi
            </button>
          </div>
        )}

        {/* Products Table */}
        {!loading && !error && products.length > 0 && (
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-slate-100 to-slate-50">
                  <tr>
                    <th className="px-4 py-4 text-left text-sm font-semibold text-slate-700">
                      Cover
                    </th>
                    <th className="px-4 py-4 text-left text-sm font-semibold text-slate-700">
                      Judul
                    </th>
                    <th className="px-4 py-4 text-left text-sm font-semibold text-slate-700">
                      Kategori
                    </th>
                    <th className="px-4 py-4 text-left text-sm font-semibold text-slate-700">
                      Rating
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold text-slate-700">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {products.map((product) => (
                    <tr
                      key={product.objectId}
                      className="hover:bg-blue-50/30 transition-colors"
                    >
                      <td className="px-4 py-4">
                        <img
                          src={product.cover_url || "/placeholder.jpg"}
                          alt={product.judul}
                          className="w-12 h-16 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow"
                          onError={(e) => {
                            e.target.src =
                              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='64' viewBox='0 0 48 64'%3E%3Crect fill='%23e2e8f0' width='48' height='64'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='24'%3E📚%3C/text%3E%3C/svg%3E";
                          }}
                        />
                      </td>
                      <td className="px-4 py-4">
                        <div className="font-semibold text-slate-900 mb-1">
                          {product.judul}
                        </div>
                        <div className="text-xs text-slate-500">
                          {product.penulis || "Unknown"}
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                          {product.kategori || "Umum"}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-400">⭐</span>
                          <span className="font-semibold text-sm">
                            {product.rating || "0.0"}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center justify-center gap-2">
                          <Link
                            href={`/admin/products/edit/${product.objectId}`}
                            className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm transition-all hover:scale-105"
                            title="Edit Produk"
                          >
                            ✏️
                          </Link>
                          <button
                            onClick={() =>
                              handleDelete(product.objectId, product.judul)
                            }
                            disabled={deleteLoading === product.objectId}
                            className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                            title="Hapus Produk"
                          >
                            {deleteLoading === product.objectId ? "⏳" : "🗑️"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && products.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl shadow-md">
            <div className="text-6xl mb-4">📭</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Belum Ada Produk
            </h3>
            <p className="text-slate-600 mb-8">
              Upload produk pertama Anda untuk memulai
            </p>
            <Link
              href="/admin/upload-products"
              className="inline-block px-8 py-4 bg-primary hover:bg-primary-dark text-slate-900 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Upload Produk Sekarang
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
