// Midtrans Configuration
const MIDTRANS_SERVER_KEY = process.env.NEXT_PUBLIC_MIDTRANS_SERVER_KEY || 'YOUR_SERVER_KEY'
const MIDTRANS_CLIENT_KEY = process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY || 'YOUR_CLIENT_KEY'
const MIDTRANS_IS_PRODUCTION = process.env.NEXT_PUBLIC_MIDTRANS_PRODUCTION === 'true'

const MIDTRANS_API_URL = MIDTRANS_IS_PRODUCTION
  ? 'https://app.midtrans.com/snap/v1'
  : 'https://app.sandbox.midtrans.com/snap/v1'

// Create Midtrans Transaction
export async function createTransaction(orderData) {
  try {
    const {
      orderId,
      amount,
      customerName,
      customerEmail,
      customerPhone,
      itemDetails,
    } = orderData

    const payload = {
      transaction_details: {
        order_id: orderId,
        gross_amount: amount,
      },
      customer_details: {
        first_name: customerName,
        email: customerEmail,
        phone: customerPhone,
      },
      item_details: itemDetails,
      credit_card: {
        secure: true,
      },
    }

    const response = await fetch(`${MIDTRANS_API_URL}/transactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Basic ${btoa(MIDTRANS_SERVER_KEY + ':')}`,
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      throw new Error('Failed to create transaction')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error creating Midtrans transaction:', error)
    throw error
  }
}

// Get Transaction Status
export async function getTransactionStatus(orderId) {
  try {
    const response = await fetch(
      `${MIDTRANS_API_URL}/transactions/${orderId}/status`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Basic ${btoa(MIDTRANS_SERVER_KEY + ':')}`,
        },
      }
    )

    if (!response.ok) {
      throw new Error('Failed to get transaction status')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error getting transaction status:', error)
    throw error
  }
}

// Initialize Midtrans Snap
export function initMidtransSnap() {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('Window is not defined'))
      return
    }

    // Load Midtrans Snap script
    const script = document.createElement('script')
    script.src = MIDTRANS_IS_PRODUCTION
      ? 'https://app.midtrans.com/snap/snap.js'
      : 'https://app.sandbox.midtrans.com/snap/snap.js'
    script.setAttribute('data-client-key', MIDTRANS_CLIENT_KEY)
    script.onload = () => resolve(window.snap)
    script.onerror = () => reject(new Error('Failed to load Midtrans Snap'))
    document.body.appendChild(script)
  })
}

// Open Midtrans Payment Popup
export async function openPaymentPopup(snapToken, callbacks = {}) {
  try {
    const snap = await initMidtransSnap()
    
    snap.pay(snapToken, {
      onSuccess: (result) => {
        console.log('Payment success:', result)
        if (callbacks.onSuccess) callbacks.onSuccess(result)
      },
      onPending: (result) => {
        console.log('Payment pending:', result)
        if (callbacks.onPending) callbacks.onPending(result)
      },
      onError: (result) => {
        console.error('Payment error:', result)
        if (callbacks.onError) callbacks.onError(result)
      },
      onClose: () => {
        console.log('Payment popup closed')
        if (callbacks.onClose) callbacks.onClose()
      },
    })
  } catch (error) {
    console.error('Error opening payment popup:', error)
    throw error
  }
}

export { MIDTRANS_CLIENT_KEY, MIDTRANS_IS_PRODUCTION }
