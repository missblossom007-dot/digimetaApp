"use client";
import { useState } from "react";
import { initMidtransSnap } from "../lib/midtrans";
import { saveTransaction, updateTransactionStatus } from "../lib/transactions";

export default function MidtransButton({ product, className, buttonText }) {
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

      // Customer details (bisa diganti dengan form input)
      const customerDetails = {
        first_name: "Customer",
        email: "customer@example.com",
        phone: "08123456789",
      };

      // Prepare transaction data for Midtrans
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
        customer_details: customerDetails,
      };

      // Save transaction to Backendless
      const backendlessTransaction = await saveTransaction({
        order_id: orderId,
        product_id: product.objectId || product.slug,
        product_name: product.judul || product.title,
        amount: product.harga || product.price,
        status: "pending",
        customer_name: customerDetails.first_name,
        customer_email: customerDetails.email,
        customer_phone: customerDetails.phone,
        created: new Date().getTime(),
      });

      console.log("✅ Transaction saved to Backendless:", backendlessTransaction);

      // Open Snap payment popup
      snap.pay(JSON.stringify(transactionData), {
        onSuccess: async (result) => {
          console.log("✅ Payment success:", result);
          
          // Update transaction status in Backendless
          try {
            await updateTransactionStatus(
              backendlessTransaction.objectId,
              "success",
              result
            );
            console.log("✅ Transaction status updated to success");
          } catch (err) {
            console.error("❌ Error updating transaction status:", err);
          }
          
          alert("Pembayaran berhasil! Terima kasih.");
          setLoading(false);
          // Redirect to success page
          window.location.href = `/success?order_id=${result.order_id}`;
        },
        onPending: async (result) => {
          console.log("⏳ Payment pending:", result);
          
          // Update transaction status in Backendless
          try {
            await updateTransactionStatus(
              backendlessTransaction.objectId,
              "pending",
              result
            );
            console.log("✅ Transaction status updated to pending");
          } catch (err) {
            console.error("❌ Error updating transaction status:", err);
          }
          
          alert("Pembayaran pending. Silakan selesaikan pembayaran Anda.");
          setLoading(false);
        },
        onError: async (result) => {
          console.error("❌ Payment error:", result);
          
          // Update transaction status in Backendless
          try {
            await updateTransactionStatus(
              backendlessTransaction.objectId,
              "failed",
              result
            );
            console.log("✅ Transaction status updated to failed");
          } catch (err) {
            console.error("❌ Error updating transaction status:", err);
          }
          
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
            {buttonText || "💳 Bayar Sekarang"}
          </>
        )}
      </button>

      {error && (
        <p className="mt-2 text-sm text-red-600 text-center">{error}</p>
      )}
    </div>
  );
}
