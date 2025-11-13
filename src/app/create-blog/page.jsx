"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createPost } from "../../lib/backendless";

export default function CreateBlog() {
  const router = useRouter();
  const [auth, setAuth] = useState(false);
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Artikel");
  const [image, setImage] = useState("📚");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    const t = localStorage.getItem("dm_token");
    if (!t) {
      router.push("/login");
    } else {
      setAuth(true);
    }
  }, [router]);

  useEffect(() => {
    // Count words in content
    const text = content.replace(/<[^>]*>/g, ""); // Remove HTML tags
    const words = text.trim().split(/\s+/).filter((word) => word.length > 0);
    setWordCount(words.length);
  }, [content]);

  function insertImage() {
    const url = prompt("Masukkan URL gambar:");
    if (url) {
      const imageTag = `\n<img src="${url}" alt="Gambar artikel" class="w-full rounded-lg my-4 shadow-md" />\n`;
      setContent(content + imageTag);
    }
  }

  function insertLink() {
    const url = prompt("Masukkan URL link:");
    if (url) {
      const text = prompt("Masukkan teks link:") || url;
      const linkTag = `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-semibold">${text}</a>`;
      setContent(content + linkTag);
    }
  }

  function insertHeading(level) {
    const text = prompt(`Masukkan teks heading ${level}:`);
    if (text) {
      const className =
        level === 2
          ? "text-2xl font-bold mt-6 mb-3 text-slate-900"
          : "text-xl font-bold mt-4 mb-2 text-slate-800";
      const heading = `\n<h${level} class="${className}">${text}</h${level}>\n`;
      setContent(content + heading);
    }
  }

  function insertParagraph() {
    const text = prompt("Masukkan teks paragraf:");
    if (text) {
      const paragraph = `\n<p class="text-slate-700 leading-relaxed mb-4">${text}</p>\n`;
      setContent(content + paragraph);
    }
  }

  function insertList() {
    const items = prompt("Masukkan item list (pisahkan dengan koma):");
    if (items) {
      const listItems = items
        .split(",")
        .map((item) => `  <li class="mb-2">${item.trim()}</li>`)
        .join("\n");
      const list = `\n<ul class="list-disc ml-6 my-4 text-slate-700">\n${listItems}\n</ul>\n`;
      setContent(content + list);
    }
  }

  async function submit(e) {
    e.preventDefault();

    if (wordCount > 1000) {
      setError("Artikel terlalu panjang! Maksimal 1000 kata.");
      return;
    }

    if (wordCount < 50) {
      setError("Artikel terlalu pendek! Minimal 50 kata.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();

      const postData = {
        title,
        excerpt:
          excerpt || content.replace(/<[^>]*>/g, "").slice(0, 150) + "...",
        content,
        author: "Admin DigimetaShop",
        slug,
        category,
        image: imageUrl || image,
        created: Date.now(),
      };

      await createPost(postData);
      router.push("/blog");
    } catch (err) {
      console.error("Error creating post:", err);
      setError(
        "Gagal menyimpan artikel ke Backendless. Pastikan table BlogPosts sudah dibuat."
      );
    } finally {
      setLoading(false);
    }
  }

  if (!auth) return <div className="p-6 text-center">Redirecting...</div>;

  return (
    <section className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            ✍️ Tulis Artikel Baru
          </h1>
          <p className="text-slate-600">
            Bagikan pengetahuan dan pengalaman Anda dengan pembaca
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
            <p className="font-semibold">⚠️ Error:</p>
            <p>{error}</p>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <form onSubmit={submit} className="space-y-6">
              {/* Title */}
              <div className="bg-white rounded-2xl shadow-md p-6">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Judul Artikel *
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-4 border-2 border-slate-200 rounded-lg focus:border-primary focus:outline-none text-lg"
                  placeholder="Masukkan judul artikel yang menarik..."
                  required
                />
              </div>

              {/* Category & Image */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl shadow-md p-6">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Kategori
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-3 border-2 border-slate-200 rounded-lg focus:border-primary focus:outline-none"
                  >
                    <option value="Artikel">Artikel</option>
                    <option value="Bisnis">Bisnis</option>
                    <option value="Tips">Tips</option>
                    <option value="Review">Review</option>
                    <option value="Self Growth">Self Growth</option>
                  </select>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-6">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Icon Emoji
                  </label>
                  <select
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="w-full p-3 border-2 border-slate-200 rounded-lg focus:border-primary focus:outline-none text-2xl"
                  >
                    <option value="📚">📚 Buku</option>
                    <option value="💼">💼 Bisnis</option>
                    <option value="💡">💡 Tips</option>
                    <option value="⭐">⭐ Review</option>
                    <option value="🌱">🌱 Growth</option>
                    <option value="🎯">🎯 Target</option>
                    <option value="🚀">🚀 Startup</option>
                    <option value="💰">💰 Keuangan</option>
                  </select>
                </div>
              </div>

              {/* Excerpt */}
              <div className="bg-white rounded-2xl shadow-md p-6">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Ringkasan (Opsional)
                </label>
                <textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  className="w-full p-4 border-2 border-slate-200 rounded-lg focus:border-primary focus:outline-none resize-none"
                  rows="3"
                  placeholder="Ringkasan singkat artikel (akan auto-generate jika kosong)"
                />
              </div>

              {/* Toolbar */}
              <div className="bg-white rounded-2xl shadow-md p-4">
                <p className="text-sm font-semibold text-slate-700 mb-3">
                  🛠️ Toolbar Editor
                </p>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => insertHeading(2)}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-semibold transition-colors"
                    title="Heading 2"
                  >
                    H2
                  </button>
                  <button
                    type="button"
                    onClick={() => insertHeading(3)}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-semibold transition-colors"
                    title="Heading 3"
                  >
                    H3
                  </button>
                  <button
                    type="button"
                    onClick={insertParagraph}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-semibold transition-colors"
                    title="Paragraf"
                  >
                    📝 Paragraf
                  </button>
                  <button
                    type="button"
                    onClick={insertList}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-semibold transition-colors"
                    title="List"
                  >
                    📋 List
                  </button>
                  <button
                    type="button"
                    onClick={insertImage}
                    className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg text-sm font-semibold transition-colors"
                    title="Insert Image"
                  >
                    🖼️ Gambar
                  </button>
                  <button
                    type="button"
                    onClick={insertLink}
                    className="px-4 py-2 bg-green-100 hover:bg-green-200 text-green-700 rounded-lg text-sm font-semibold transition-colors"
                    title="Insert Link"
                  >
                    🔗 Link
                  </button>
                </div>
              </div>

              {/* Content Editor */}
              <div className="bg-white rounded-2xl shadow-md p-6">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-semibold text-slate-700">
                    Konten Artikel *
                  </label>
                  <span
                    className={`text-sm font-semibold ${
                      wordCount > 1000
                        ? "text-red-600"
                        : wordCount > 800
                        ? "text-orange-600"
                        : "text-slate-600"
                    }`}
                  >
                    {wordCount} / 1000 kata
                  </span>
                </div>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full p-4 border-2 border-slate-200 rounded-lg focus:border-primary focus:outline-none resize-none font-mono text-sm"
                  rows="20"
                  placeholder="Tulis konten artikel di sini... Gunakan toolbar di atas untuk format teks."
                  required
                />
                <p className="text-xs text-slate-500 mt-2">
                  💡 Tips: Gunakan HTML tags atau toolbar untuk formatting
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={loading || wordCount > 1000}
                  className="flex-1 px-8 py-4 bg-primary hover:bg-primary-dark text-slate-900 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "⏳ Menyimpan..." : "✅ Publikasikan Artikel"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowPreview(!showPreview)}
                  className="px-8 py-4 bg-slate-200 hover:bg-slate-300 text-slate-900 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {showPreview ? "📝 Edit" : "👁️ Preview"}
                </button>
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Preview */}
            {showPreview && (
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  👁️ Preview
                </h3>
                <div className="border-t pt-4">
                  <div className="text-4xl mb-3 text-center">{image}</div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    {title || "Judul Artikel"}
                  </h2>
                  <p className="text-sm text-slate-500 mb-4">{category}</p>
                  <div
                    className="prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{
                      __html: content || "<p>Konten artikel...</p>",
                    }}
                  />
                </div>
              </div>
            )}

            {/* Tips */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                💡 Tips Menulis
              </h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Gunakan judul yang menarik dan deskriptif</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Bagi artikel dengan heading (H2, H3)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Tambahkan gambar untuk visual menarik</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Gunakan list untuk poin-poin penting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Tambahkan link ke sumber referensi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Target 500-1000 kata untuk artikel lengkap</span>
                </li>
              </ul>
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                📊 Statistik
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Jumlah Kata:</span>
                  <span className="font-bold text-slate-900">{wordCount}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">
                    Karakter:
                  </span>
                  <span className="font-bold text-slate-900">
                    {content.length}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">
                    Estimasi Baca:
                  </span>
                  <span className="font-bold text-slate-900">
                    {Math.ceil(wordCount / 200)} menit
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
