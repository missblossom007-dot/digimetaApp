"use client";
import { useEffect, useState } from "react";
import Backendless from "../../../lib/backendlessupload";

export default function page() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await Backendless.Data.of("Products").find();
        console.log("Fetched products:", data);
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex justify-center items-center text-xl">
        ⏳ Loading produk...
      </div>
    );

  return (
    <section className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">
          🛍️ Daftar Produk
        </h1>

        {products.length === 0 ? (
          <p className="text-slate-600">Belum ada produk yang diupload.</p>
        ) : (
          <div className="overflow-x-auto bg-white rounded-2xl shadow-md">
            <table className="w-full text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left">Judul</th>
                  <th className="px-4 py-3 text-left">Harga</th>
                  <th className="px-4 py-3 text-left">Penulis</th>
                  <th className="px-4 py-3 text-left">Kategori</th>
                  <th className="px-4 py-3 text-left">Link Pembayaran</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.objectId} className="border-t hover:bg-slate-50">
                    <td className="px-4 py-2">{p.judul}</td>
                    <td className="px-4 py-2">Rp {p.harga}</td>
                    <td className="px-4 py-2">{p.penulis}</td>
                    <td className="px-4 py-2">{p.kategori}</td>
                    <td className="px-4 py-2">
                      <a
                        href={p.link_pemesanan}
                        target="_blank"
                        className="text-blue-600 hover:underline"
                      >
                        Buka Link
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
