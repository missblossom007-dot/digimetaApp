import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Watermark from "../components/Watermark";
import Script from "next/script";

export const metadata = {
  title: "DigimetaShop | Toko Buku & eBook Terlengkap",
  description:
    "Belanja eBook dan buku eksklusif lebih dari 5000 koleksi hanya di DigimetaShop.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-Y5XKG44VXP`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Watermark />
      </body>
    </html>
  );
}
