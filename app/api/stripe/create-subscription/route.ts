import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import jwt from 'jsonwebtoken';
import pool from '@/lib/database';
import axios from 'axios';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
});

export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get('token')?.value;

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
    const userId = decoded.userId;

    const client = await pool.connect();
    const userResult = await client.query(
      'SELECT email, name FROM users WHERE id = $1',
      [userId]
    );

    if (userResult.rows.length === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const user = userResult.rows[0];

    const customer = await stripe.customers.create({
      email: user.email,
      name: user.name,
      metadata: {
        userId: userId.toString(),
      },
    });

    const session = await stripe.checkout.sessions.create({
  payment_method_types: ['card'],
  mode: 'subscription',
  customer: customer.id,
  line_items: [
    {
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'Shop Savvy Premium',
          description: 'Premium business listing features',
        },
        unit_amount: 3450,
        recurring: {
          interval: 'month',
        },
      },
      quantity: 1,
    },
  ],
  subscription_data: {
    trial_settings: {
      end_behavior: {
        missing_payment_method: 'cancel',
      },
    },
    trial_period_days: 30, 
    metadata: {
      userId: userId.toString(),
    },
  },
  success_url: `${process.env.NEXTAUTH_URL}/dashboard?success=true`,
  cancel_url: `${process.env.NEXTAUTH_URL}/dashboard?canceled=true`,
});

  await axios.post('https://hook.us2.make.com/t8ovljado7jsaob6jflc47m9il9dia8v', {
      name: user.name,
      email: user.email,
      plan: 'premium',
      subscribed_on: new Date().toISOString(),
      status: 'active'
    });
    console.log('Stripe Checkout session URL:', session.url);
    return NextResponse.json({ sessionUrl: session.url });
  } catch (error) {
    console.error('Stripe Checkout error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
