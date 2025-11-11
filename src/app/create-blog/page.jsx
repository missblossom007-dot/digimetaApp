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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const t = localStorage.getItem("dm_token");
    if (!t) {
      router.push("/login");
    } else {
      setAuth(true);
    }
  }, [router]);

  async function submit(e) {
    e.preventDefault();
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
        excerpt: excerpt || content.slice(0, 150) + "...",
        content,
        author: "Admin DigimetaShop",
        slug,
        category,
        image,
        created: Date.now(),
      };

      console.log(postData);

      await createPost(postData);
      router.push("/blog");
    } catch (err) {
      console.error("Error creating post:", err);
      setError(
        "Gagal menyimpan artikel. Pastikan Backendless sudah dikonfigurasi dengan benar."
      );
    } finally {
      setLoading(false);
    }
  }

  if (!auth) return <div className="p-6 text-center">Redirecting...</div>;
  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-2xl font-bold mb-4">Buat Artikel</h1>
        <form onSubmit={submit} className="space-y-4">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border rounded"
            placeholder="Judul"
            required
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-3 border rounded h-48"
            placeholder="Konten"
            required
          />
          <button className="px-4 py-2 bg-primary text-white rounded">
            Simpan
          </button>
        </form>
      </div>
    </section>
  );
}
