import Image from "next/image";
import twitter from "../../public/sosmed/twitter.png";
import facebook from "../../public/sosmed/facebook.png";
import youtube from "../../public/sosmed/youtube.png";
import instagram from "../../public/sosmed/instagram.png";
import tiktok from "../../public/sosmed/tiktok.png";
import pinterest from "../../public/sosmed/pinterest.png";

export default function Footer() {
  return (
    <footer className="bg-slate-900/95 backdrop-blur-sm text-slate-200 py-12 mt-16 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white mb-2">DigimetaShop</h3>
          <p className="text-slate-400">Toko Buku & eBook Terlengkap</p>
        </div>
        <div className="border-t border-slate-800 pt-6">
          <p className="mb-3 text-slate-300">
            © {new Date().getFullYear()} DigimetaShop — Toko Buku & eBook
            Terlengkap
          </p>
          <p className="text-slate-400">
            Contact:
            <a
              href="https://wa.me/6282141733187"
              target="_blank"
              className="text-green-400 hover:text-green-300 transition-colors duration-200 font-medium"
            >
              WhatsApp
            </a>
            | Email:
            <a
              href="mailto:digimetateam@gmail.com?subject=Halo%20Tim%20DigimetaShop"
              target="_blank"
              className="text-primary-light hover:text-red-500"
            >
              digimetateam@gmail.com
            </a>
          </p>
          <div className="flex justify-center items-center gap-4 mt-3">
            <a
              href="https://web.facebook.com/people/Zona-Ebook/61577771426575/?sk=reels_tab"
              target="_blank"
              className="bg-blue-600/10 hover:bg-blue-600/30 rounded-full p-3 transition-transform transform hover:scale-110"
            >
              <Image
                src={facebook}
                alt="facebook-logo"
                width={24}
                height={24}
              />
            </a>

            <a
              href="https://www.youtube.com/channel/UClcLLG2Uu9kBl2d486Vdppg"
              target="_blank"
              className="bg-red-600/10 hover:bg-red-600/30 rounded-full p-3 transition-transform transform hover:scale-110"
            >
              <Image src={youtube} alt="youtube-logo" width={24} height={24} />
            </a>

            <a
              href="#"
              target="_blank"
              className="bg-sky-500/10 hover:bg-sky-500/30 rounded-full p-3 transition-transform transform hover:scale-110"
            >
              <Image src={twitter} alt="twitter-logo" width={24} height={24} />
            </a>

            <a
              href="https://www.instagram.com/ebook.zona3/"
              target="_blank"
              className="bg-pink-500/10 hover:bg-pink-500/30 rounded-full p-3 transition-transform transform hover:scale-110"
            >
              <Image
                src={instagram}
                alt="instagram-logo"
                width={24}
                height={24}
              />
            </a>
            <a
              href="#"
              target="_blank"
              className="bg-pink-500/10 hover:bg-pink-500/30 rounded-full p-3 transition-transform transform hover:scale-110"
            >
              <Image
                src={pinterest}
                alt="instagram-logo"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://www.tiktok.com/@digimetashop"
              target="_blank"
              className="bg-pink-500/10 hover:bg-black-500/30 rounded-full p-3 transition-transform transform hover:scale-110"
            >
              <Image src={tiktok} alt="instagram-logo" width={24} height={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
