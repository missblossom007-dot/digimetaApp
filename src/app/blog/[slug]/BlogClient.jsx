"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchPostBySlug } from "../../../lib/backendless";

export default function BlogClient({ slugParam }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadPost();
  }, [slugParam]);

  async function loadPost() {
    try {
      setLoading(true);
      const data = await fetchPostBySlug(slugParam);

      if (data) {
        setPost(data);
      } else {
        // Fallback ke data default
        const defaultPosts = [
          {
            objectId: "1",
            title: "5 Buku Bisnis Wajib Baca untuk Entrepreneur",
            excerpt:
              "Rekomendasi buku bisnis terbaik yang akan mengubah cara pandang Anda tentang entrepreneurship dan kesuksesan.",
            content: `
              <h2>Mengapa Entrepreneur Harus Banyak Membaca?</h2>
              <p>Membaca adalah investasi terbaik untuk mengembangkan mindset bisnis. Berikut 5 buku yang wajib dibaca:</p>
              
              <h3>1. The Lean Startup - Eric Ries</h3>
              <p>Buku ini mengajarkan cara membangun startup dengan efisien menggunakan metode lean.</p>
              
              <h3>2. Zero to One - Peter Thiel</h3>
              <p>Panduan membangun perusahaan yang benar-benar inovatif, bukan sekadar meniru kompetitor.</p>
              
              <h3>3. The Hard Thing About Hard Things - Ben Horowitz</h3>
              <p>Pengalaman nyata menghadapi tantangan terberat dalam membangun bisnis.</p>
              
              <h3>4. Good to Great - Jim Collins</h3>
              <p>Riset mendalam tentang apa yang membuat perusahaan biasa menjadi luar biasa.</p>
              
              <h3>5. The E-Myth Revisited - Michael Gerber</h3>
              <p>Mengapa kebanyakan bisnis kecil gagal dan bagaimana cara menghindarinya.</p>
              
              <h2>Kesimpulan</h2>
              <p>Kelima buku ini akan memberikan perspektif berbeda tentang entrepreneurship dan membantu Anda menghindari kesalahan umum dalam berbisnis.</p>
            `,
            author: "Admin DigimetaShop",
            slug: "buku-bisnis-entrepreneur",
            created: new Date("2024-01-15").getTime(),
            category: "Bisnis",
            image: "💼",
          },
        ];

        const found = defaultPosts.find((p) => p.slug === slugParam);
        setPost(found || null);
      }
    } catch (err) {
      console.error("Error loading post:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function formatDate(timestamp) {
    if (!timestamp) return "Baru saja";
    const date = new Date(timestamp);
    return date.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto p-10 text-center">
        <div className="text-6xl mb-4 animate-bounce">📚</div>
        <p className="text-xl text-slate-600">Memuat artikel...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-3xl mx-auto p-10 text-center">
        <div className="text-6xl mb-4">⚠️</div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Terjadi Kesalahan
        </h2>
        <p className="text-slate-600 mb-8">{error}</p>
        <Link
          href="/blog"
          className="inline-block px-8 py-4 bg-primary hover:bg-primary-dark text-slate-900 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Kembali ke Blog
        </Link>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto p-10 text-center">
        <div className="text-6xl mb-4">📭</div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Artikel Tidak Ditemukan
        </h2>
        <p className="text-slate-600 mb-8">
          Artikel yang Anda cari tidak tersedia.
        </p>
        <Link
          href="/blog"
          className="inline-block px-8 py-4 bg-primary hover:bg-primary-dark text-slate-900 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Kembali ke Blog
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-6 pt-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-primary transition-colors"
        >
          ← Kembali ke Blog
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-6 py-10">
        <div className="text-center mb-12">
          <div className="text-7xl mb-6">{post.image || "📚"}</div>
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            {post.category || "Artikel"}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-slate-600">
            <span className="flex items-center gap-2">
              <span>👤</span>
              {post.author}
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              <span>📅</span>
              {formatDate(post.created)}
            </span>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {post.content ? (
            <div
              className="text-slate-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          ) : (
            <p className="text-lg text-slate-700 leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </div>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-4">
            Bagikan Artikel
          </h3>
          <div className="flex gap-4">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                post.title + " - " + window.location.href
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
            >
              📱 WhatsApp
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                window.location.href
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
            >
              📘 Facebook
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                post.title
              )}&url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
            >
              🐦 Twitter
            </a>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 p-8 bg-gradient-to-r from-primary to-primary-dark rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Tertarik dengan Buku-buku Kami?
          </h3>
          <p className="text-slate-700 mb-6">
            Dapatkan koleksi ebook terlengkap dengan harga terjangkau
          </p>
          <Link
            href="/services"
            className="inline-block px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Lihat Koleksi Buku
          </Link>
        </div>
      </article>
    </>
  );
}
