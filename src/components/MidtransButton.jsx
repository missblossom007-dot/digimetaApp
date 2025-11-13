"use client";
import { useState } from "react";
import { initMidtransSnap } from "../lib/midtrans";

export default function MidtransButton({ product, className }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handlePayment() {
    setLoading(true);
    setError(null);

    try {
      // Initialize Snap
      const snap = await initMidtransSnap();

      // Generate unique order ID
      const orderId = `ORDER-${Date.now()}-${Math.random()
        .toString(36)
        .substr(2, 9)}`;

      // Prepare transaction data
      const transactionData = {
        transaction_details: {
          order_id: orderId,
          gross_amount: product.harga || product.price,
        },
        item_details: [
          {
            id: product.slug || "product",
            price: product.harga || product.price,
            quantity: 1,
            name: product.judul || product.title || "Product",
          },
        ],
        customer_details: {
          first_name: "Customer",
          email: "customer@example.com",
          phone: "08123456789",
        },
      };

      // Open Snap payment popup
      snap.pay(JSON.stringify(transactionData), {
        onSuccess: (result) => {
          console.log("✅ Payment success:", result);
          alert("Pembayaran berhasil! Terima kasih.");
          setLoading(false);
          // Redirect to success page
          window.location.href = `/success?order_id=${result.order_id}`;
        },
        onPending: (result) => {
          console.log("⏳ Payment pending:", result);
          alert("Pembayaran pending. Silakan selesaikan pembayaran Anda.");
          setLoading(false);
        },
        onError: (result) => {
          console.error("❌ Payment error:", result);
          setError("Pembayaran gagal. Silakan coba lagi.");
          setLoading(false);
        },
        onClose: () => {
          console.log("Payment popup closed");
          setLoading(false);
        },
      });
    } catch (err) {
      console.error("❌ Error processing payment:", err);
      setError(`Gagal memproses pembayaran: ${err.message}`);
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
