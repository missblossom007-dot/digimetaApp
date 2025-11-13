import { NextResponse } from 'next/server';

const MIDTRANS_SERVER_KEY = process.env.NEXT_PUBLIC_MIDTRANS_SERVER_KEY;
const MIDTRANS_IS_PRODUCTION = process.env.NEXT_PUBLIC_MIDTRANS_PRODUCTION === 'true';

const MIDTRANS_API_URL = MIDTRANS_IS_PRODUCTION
  ? 'https://app.midtrans.com/snap/v1/transactions'
  : 'https://app.sandbox.midtrans.com/snap/v1/transactions';

export async function POST(request) {
  try {
    const body = await request.json();
    
    const {
      orderId,
      amount,
      customerName,
      customerEmail,
      customerPhone,
      itemDetails,
    } = body;

    // Validate required fields
    if (!orderId || !amount || !itemDetails) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Prepare Midtrans transaction data
    const transactionData = {
      transaction_details: {
        order_id: orderId,
        gross_amount: amount,
      },
      item_details: itemDetails,
      customer_details: {
        first_name: customerName || 'Customer',
        email: customerEmail || 'customer@example.com',
        phone: customerPhone || '08123456789',
      },
    };

    console.log('📦 Creating Midtrans transaction:', transactionData);

    // Call Midtrans Snap API
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
      console.error('❌ Midtrans API error:', data);
      return NextResponse.json(
        { error: data.error_messages || 'Failed to create transaction' },
        { status: response.status }
      );
    }

    console.log('✅ Midtrans transaction created:', data);

    return NextResponse.json({
      snapToken: data.token,
      redirectUrl: data.redirect_url,
    });
  } catch (error) {
    console.error('❌ Error creating Midtrans transaction:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
