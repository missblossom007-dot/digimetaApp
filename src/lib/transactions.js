import Backendless from "backendless";

// Initialize Backendless
const APP_ID = "4A199CBD-443F-46F1-92AD-510866DF18E4";
const API_KEY = "E040786E-A130-438F-8A2A-16267112B9B8";

if (!Backendless.applicationId) {
  Backendless.initApp(APP_ID, API_KEY);
}

// Save transaction to Backendless
export async function saveTransaction(transactionData) {
  try {
    const transaction = await Backendless.Data.of("Transactions").save(
      transactionData
    );
    console.log("✅ Transaction saved to Backendless:", transaction);
    return transaction;
  } catch (error) {
    console.error("❌ Error saving transaction:", error);
    throw error;
  }
}

// Update transaction status
export async function updateTransactionStatus(objectId, status, paymentData) {
  try {
    const updateData = {
      objectId,
      status,
      payment_type: paymentData.payment_type,
      transaction_time: paymentData.transaction_time,
      updated: new Date().getTime(),
    };

    const transaction = await Backendless.Data.of("Transactions").save(
      updateData
    );
    console.log("✅ Transaction status updated:", transaction);
    return transaction;
  } catch (error) {
    console.error("❌ Error updating transaction:", error);
    throw error;
  }
}

// Get transaction by order ID
export async function getTransactionByOrderId(orderId) {
  try {
    const whereClause = `order_id = '${orderId}'`;
    const transactions = await Backendless.Data.of("Transactions").find({
      where: whereClause,
    });

    if (transactions && transactions.length > 0) {
      return transactions[0];
    }
    return null;
  } catch (error) {
    console.error("❌ Error getting transaction:", error);
    throw error;
  }
}

// Get all transactions
export async function getAllTransactions() {
  try {
    const transactions = await Backendless.Data.of("Transactions").find({
      sortBy: "created desc",
      pageSize: 100,
    });
    return transactions;
  } catch (error) {
    console.error("❌ Error getting transactions:", error);
    return [];
  }
}

// Get transactions by customer email
export async function getTransactionsByEmail(email) {
  try {
    const whereClause = `customer_email = '${email}'`;
    const transactions = await Backendless.Data.of("Transactions").find({
      where: whereClause,
      sortBy: "created desc",
    });
    return transactions;
  } catch (error) {
    console.error("❌ Error getting transactions:", error);
    return [];
  }
}
