"use client";
import { useState } from "react";
import { createTransaction, openPaymentPopup } from "../lib/midtrans";

export default function MidtransButton({ product, className }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handlePayment() {
    setLoading(true);
    setError(null);

    try {
      // Generate unique order ID
      const orderId = `ORDER-${Date.now()}-${Math.random()
        .toString(36)
        .substr(2, 9)}`;

      // Prepare order data
      const orderData = {
        orderId,
        amount: product.harga || product.price,
        customerName: "Customer", // Bisa diganti dengan form input
        customerEmail: "customer@example.com", // Bisa diganti dengan form input
        customerPhone: "08123456789", // Bisa diganti dengan form input
        itemDetails: [
          {
            id: product.slug,
            price: product.harga || product.price,
            quantity: 1,
            name: product.judul || product.title,
          },
        ],
      };

      // Create transaction and get snap token
      const transaction = await createTransaction(orderData);

      // Open Midtrans payment popup
      await openPaymentPopup(transaction.token, {
        onSuccess: (result) => {
          console.log("Payment success:", result);
          alert("Pembayaran berhasil! Terima kasih.");
          // Redirect to success page or send download link
          window.location.href = `/success?order_id=${orderId}`;
        },
        onPending: (result) => {
          console.log("Payment pending:", result);
          alert("Pembayaran pending. Silakan selesaikan pembayaran Anda.");
        },
        onError: (result) => {
          console.error("Payment error:", result);
          setError("Pembayaran gagal. Silakan coba lagi.");
        },
        onClose: () => {
          console.log("Payment popup closed");
          setLoading(false);
        },
      });
    } catch (err) {
      console.error("Error processing payment:", err);
      setError("Gagal memproses pembayaran. Silakan coba lagi.");
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        onClick={handlePayment}
        disabled={loading}
        className={
          className ||
          "w-full bg-primary hover:bg-primary-dark text-slate-900 font-semibold py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        }
      >
        {loading ? (
          <>
            <span className="animate-spin">⏳</span>
            Processing...
          </>
        ) : (
          <>
            💳 Bayar Sekarang
          </>
        )}
      </button>

      {error && (
        <p className="mt-2 text-sm text-red-600 text-center">{error}</p>
      )}
    </div>
  );
}
