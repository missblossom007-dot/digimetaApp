"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Backendless from "../../../lib/backendlessupload";

export default function UploadProducts() {
  const router = useRouter();
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [preview, setPreview] = useState([]);

  function handleFileChange(e) {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "text/csv") {
      setFile(selectedFile);
      setError(null);
      parseCSV(selectedFile);
    } else {
      setError("Please upload a valid CSV file");
      setFile(null);
    }
  }

  function parseCSV(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      const lines = text.split("\n");
      const headers = lines[0].split(",");

      const data = [];
      for (let i = 1; i < Math.min(lines.length, 6); i++) {
        // Preview first 5 rows
        if (lines[i].trim()) {
          const values = lines[i].split(",");
          const row = {};
          headers.forEach((header, index) => {
            row[header.trim()] = values[index]?.trim() || "";
          });
          data.push(row);
        }
      }
      setPreview(data);
    };
    reader.readAsText(file);
  }

  // async function handleUpload() {
  //   if (!file) {
  //     setError("Please select a file first");
  //     return;
  //   }

  //   setLoading(true);
  //   setError(null);
  //   setSuccess(null);

  //   try {
  //     const reader = new FileReader();
  //     reader.onload = async (e) => {
  //       const text = e.target.result;
  //       const lines = text.split("\n");
  //       const headers = lines[0].split(",").map((h) => h.trim());

  //       const products = [];
  //       for (let i = 1; i < lines.length; i++) {
  //         if (lines[i].trim()) {
  //           const values = lines[i].split(",");
  //           const product = {};
  //           headers.forEach((header, index) => {
  //             product[header] = values[index]?.trim() || "";
  //           });
  //           products.push(product);
  //         }
  //       }

  //       // Save to Backendless or localStorage
  //       const existingProducts =
  //         JSON.parse(localStorage.getItem("dm_products")) || [];
  //       const updatedProducts = [...existingProducts, ...products];
  //       localStorage.setItem("dm_products", JSON.stringify(updatedProducts));

  //       setSuccess(
  //         `Successfully uploaded ${products.length} products!`
  //       );
  //       setLoading(false);

  //       // Redirect after 2 seconds
  //       setTimeout(() => {
  //         router.push("/admin/products");
  //       }, 2000);
  //     };
  //     reader.readAsText(file);
  //   } catch (err) {
  //     console.error("Error uploading products:", err);
  //     setError("Failed to upload products. Please try again.");
  //     setLoading(false);
  //   }
  // }

  async function handleUpload() {
    if (!file) {
      setError("Please select a file first");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const text = e.target.result;
        const lines = text.split(/\r?\n/).filter((line) => line.trim() !== ""); // ✅ lines didefinisikan di sini
        const headers = lines[0].split(",").map((h) => h.trim());

        const products = [];
        for (let i = 1; i < lines.length; i++) {
          const values = lines[i].split(",");
          const product = {};
          headers.forEach((header, index) => {
            product[header] = values[index]?.trim() || "";
          });

          // ✅ Hapus kolom rating agar tidak error di Backendless
          delete product.rating;

          products.push(product);
        }

        try {
          // Simpan data satu per satu ke table "Products" di Backendless
          const responses = await Promise.all(
            products.map((p) => Backendless.Data.of("Products").save(p))
          );

          setSuccess(
            `✅ Berhasil upload ${responses.length} produk ke Backendless!`
          );
          setLoading(false);
          setTimeout(() => router.push("/admin/products"), 2500);
        } catch (beErr) {
          console.error("Backendless error:", beErr);
          setError(
            "Gagal upload ke Backendless. Periksa tabel dan permission."
          );
          setLoading(false);
        }
      };

      // ✅ Pastikan read dijalankan terakhir
      reader.readAsText(file);
    } catch (err) {
      console.error("Error reading file:", err);
      setError("Gagal membaca file CSV. Coba ulangi.");
      setLoading(false);
    }
  }

  //   function downloadTemplate() {
  //     const template = `judul,slug,deskripsi,cover_url,harga,link_pemesanan,penulis,kategori,tag,anggel_riil,bahasa,file_ebook_url,meta_seo,deskripsi_lengkap,rating
  // Ebook Contoh 1,ebook-contoh-1,Deskripsi lengkap untuk Ebook Contoh 1,https://drive.google.com/example1,40000,https://midtrans.com/example1,Indri,Umum,ebook;belajar,2025-01-01,Indonesia,https://drive.google.com/file1,Ebook Contoh 1 - Belajar,Deskripsi lengkap untuk ebook contoh 1,4.5
  // Ebook Contoh 2,ebook-contoh-2,Deskripsi lengkap untuk Ebook Contoh 2,https://drive.google.com/example2,50000,https://midtrans.com/example2,Indri,Umum,ebook;belajar,2025-01-02,Indonesia,https://drive.google.com/file2,Ebook Contoh 2 - Belajar,Deskripsi lengkap untuk ebook contoh 2,4.8`;

  //     const blob = new Blob([template], { type: "text/csv" });
  //     const url = window.URL.createObjectURL(blob);
  //     const a = document.createElement("a");
  //     a.href = url;
  //     a.download = "template-products.csv";
  //     a.click();
  //     window.URL.revokeObjectURL(url);
  //   }
  function downloadTemplate() {
    const template = `judul,slug,deskripsi,cover_url,harga,link_pemesanan,penulis,kategori,tag,anggel_riil,bahasa,file_ebook_url,meta_seo,deskripsi_lengkap
Ebook Contoh 1,ebook-contoh-1,Deskripsi lengkap untuk Ebook Contoh 1,https://drive.google.com/example1,40000,https://midtrans.com/example1,Indri,Umum,ebook;belajar,2025-01-01,Indonesia,https://drive.google.com/file1,Ebook Contoh 1 - Belajar,Deskripsi lengkap untuk ebook contoh 1
Ebook Contoh 2,ebook-contoh-2,Deskripsi lengkap untuk Ebook Contoh 2,https://drive.google.com/example2,50000,https://midtrans.com/example2,Indri,Umum,ebook;belajar,2025-01-02,Indonesia,https://drive.google.com/file2,Ebook Contoh 2 - Belajar,Deskripsi lengkap untuk ebook contoh 2`;

    const blob = new Blob([template], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "template-products.csv";
    a.click();
    window.URL.revokeObjectURL(url);
  }

  return (
    <section className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            📦 Upload Produk via CSV
          </h1>
          <p className="text-slate-600">
            Upload file CSV untuk menambahkan produk secara massal
          </p>
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
            <p className="font-semibold">✅ Success:</p>
            <p>{success}</p>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Upload Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* File Upload */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                1. Upload File CSV
              </h2>

              <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-primary transition-colors">
                <input
                  type="file"
                  accept=".csv"
                  onChange={handleFileChange}
                  className="hidden"
                  id="csv-upload"
                />
                <label
                  htmlFor="csv-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <div className="text-6xl mb-4">📄</div>
                  <p className="text-lg font-semibold text-slate-900 mb-2">
                    {file ? file.name : "Klik untuk upload CSV"}
                  </p>
                  <p className="text-sm text-slate-600">
                    atau drag & drop file CSV di sini
                  </p>
                </label>
              </div>

              {file && (
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-700">
                    <strong>File:</strong> {file.name}
                  </p>
                  <p className="text-sm text-blue-700">
                    <strong>Size:</strong> {(file.size / 1024).toFixed(2)} KB
                  </p>
                </div>
              )}
            </div>

            {/* Preview */}
            {preview.length > 0 && (
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  2. Preview Data (5 baris pertama)
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-100">
                        {Object.keys(preview[0]).map((key) => (
                          <th
                            key={key}
                            className="px-4 py-2 text-left font-semibold"
                          >
                            {key}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {preview.map((row, index) => (
                        <tr key={index} className="border-t">
                          {Object.values(row).map((value, i) => (
                            <td key={i} className="px-4 py-2">
                              {String(value).substring(0, 30)}
                              {String(value).length > 30 ? "..." : ""}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Upload Button */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                3. Upload Produk
              </h2>

              <button
                onClick={handleUpload}
                disabled={!file || loading}
                className="w-full px-8 py-4 bg-primary hover:bg-primary-dark text-slate-900 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "⏳ Uploading..." : "✅ Upload Produk"}
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Template */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                📥 Download Template
              </h3>
              <p className="text-sm text-slate-700 mb-4">
                Download template CSV untuk memudahkan upload produk
              </p>
              <button
                onClick={downloadTemplate}
                className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition-all duration-300"
              >
                Download Template
              </button>
            </div>

            {/* Format CSV */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                📋 Format CSV
              </h3>
              <div className="space-y-2 text-sm text-slate-700">
                <p>
                  <strong>Kolom wajib:</strong>
                </p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>judul</li>
                  <li>slug</li>
                  <li>harga</li>
                  <li>link_pemesanan (Midtrans)</li>
                  <li>cover_url</li>
                </ul>
                <p className="mt-3">
                  <strong>Kolom opsional:</strong>
                </p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>deskripsi</li>
                  <li>penulis</li>
                  <li>kategori</li>
                  <li>rating</li>
                  <li>file_ebook_url</li>
                </ul>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">💡 Tips</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Gunakan Excel/Google Sheets untuk edit CSV</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Pastikan tidak ada koma dalam data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>URL harus lengkap (https://...)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Harga dalam format angka (tanpa Rp)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Link Midtrans untuk pembayaran</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
