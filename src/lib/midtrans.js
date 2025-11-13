// Midtrans Configuration
const MIDTRANS_CLIENT_KEY = process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY || 'Mid-client-oFOsaBvke_JvFpYc'
const MIDTRANS_SERVER_KEY = process.env.NEXT_PUBLIC_MIDTRANS_SERVER_KEY || 'Mid-server-AT0ZZkIQAQRzC0VyFQFCS9nKr'
const MIDTRANS_MERCHANT_ID = process.env.NEXT_PUBLIC_MIDTRANS_MERCHANT_ID || 'G445401830'
const MIDTRANS_IS_PRODUCTION = process.env.NEXT_PUBLIC_MIDTRANS_PRODUCTION === 'true'

const MIDTRANS_SNAP_URL = MIDTRANS_IS_PRODUCTION
  ? 'https://app.midtrans.com/snap/snap.js'
  : 'https://app.sandbox.midtrans.com/snap/snap.js'

console.log('🔑 Midtrans Config:', {
  clientKey: MIDTRANS_CLIENT_KEY,
  merchantId: MIDTRANS_MERCHANT_ID,
  isProduction: MIDTRANS_IS_PRODUCTION,
  snapUrl: MIDTRANS_SNAP_URL
})

// Create Midtrans Snap Token (via backend/API route recommended)
// For now, we'll use direct Snap integration
export async function createSnapToken(orderData) {
  try {
    // In production, this should be done via backend API route
    // For now, we'll use Snap.js directly with client key
    
    const {
      orderId,
      amount,
      customerName,
      customerEmail,
      customerPhone,
      itemDetails,
    } = orderData

    // Return order data for Snap.js
    return {
      orderId,
      amount,
      customerName,
      customerEmail,
      customerPhone,
      itemDetails,
    }
  } catch (error) {
    console.error('Error creating Snap token:', error)
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

    // Check if Snap already loaded
    if (window.snap) {
      resolve(window.snap)
      return
    }

    // Load Midtrans Snap script
    const script = document.createElement('script')
    script.src = MIDTRANS_SNAP_URL
    script.setAttribute('data-client-key', MIDTRANS_CLIENT_KEY)
    script.onload = () => {
      console.log('✅ Midtrans Snap loaded')
      resolve(window.snap)
    }
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

export { MIDTRANS_CLIENT_KEY, MIDTRANS_SERVER_KEY, MIDTRANS_MERCHANT_ID, MIDTRANS_IS_PRODUCTION }
