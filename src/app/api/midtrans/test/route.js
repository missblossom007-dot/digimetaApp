import { NextResponse } from 'next/server';

const MIDTRANS_SERVER_KEY = process.env.NEXT_PUBLIC_MIDTRANS_SERVER_KEY;
const MIDTRANS_IS_PRODUCTION = process.env.NEXT_PUBLIC_MIDTRANS_PRODUCTION === 'true';

export async function GET() {
  try {
    // Test Midtrans credentials
    const testOrderId = `TEST-${Date.now()}`;
    
    const MIDTRANS_API_URL = MIDTRANS_IS_PRODUCTION
      ? 'https://app.midtrans.com/snap/v1/transactions'
      : 'https://app.sandbox.midtrans.com/snap/v1/transactions';

    const transactionData = {
      transaction_details: {
        order_id: testOrderId,
        gross_amount: 10000,
      },
      item_details: [
        {
          id: 'test-item',
          price: 10000,
          quantity: 1,
          name: 'Test Product',
        },
      ],
      customer_details: {
        first_name: 'Test',
        email: 'test@example.com',
        phone: '08123456789',
      },
    };

    console.log('🧪 Testing Midtrans with:', {
      serverKey: MIDTRANS_SERVER_KEY ? '***' + MIDTRANS_SERVER_KEY.slice(-4) : 'NOT SET',
      isProduction: MIDTRANS_IS_PRODUCTION,
      apiUrl: MIDTRANS_API_URL,
    });

    const response = await fetch(MIDTRANS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Basic ${Buffer.from(MIDTRANS_SERVER_KEY + ':').toString('base64')}`,
      },
      body: JSON.stringify(transactionData),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({
        success: false,
        error: data.error_messages || data.message || 'Unknown error',
        status: response.status,
        config: {
          serverKey: MIDTRANS_SERVER_KEY ? '***' + MIDTRANS_SERVER_KEY.slice(-4) : 'NOT SET',
          isProduction: MIDTRANS_IS_PRODUCTION,
          apiUrl: MIDTRANS_API_URL,
        },
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Midtrans credentials are valid!',
      snapToken: data.token ? '***' + data.token.slice(-10) : null,
      config: {
        serverKey: MIDTRANS_SERVER_KEY ? '***' + MIDTRANS_SERVER_KEY.slice(-4) : 'NOT SET',
        isProduction: MIDTRANS_IS_PRODUCTION,
        apiUrl: MIDTRANS_API_URL,
      },
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message,
      config: {
        serverKey: MIDTRANS_SERVER_KEY ? '***' + MIDTRANS_SERVER_KEY.slice(-4) : 'NOT SET',
        isProduction: MIDTRANS_IS_PRODUCTION,
      },
    }, { status: 500 });
  }
}
