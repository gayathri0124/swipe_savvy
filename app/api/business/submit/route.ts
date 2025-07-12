import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import pool from '@/lib/database';
import { sendWelcomeEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    // Get token from cookie
    const token = request.cookies.get('token')?.value;

    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Verify jwt token
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
    const userId = decoded.userId;

    const businessData = await request.json();
    const {
      businessName,
      businessType,
      address,
      phone,
      email,
      website,
      description,
      googlePlaceId,
      latitude,
      longitude,
    } = businessData;

    const client = await pool.connect();

    try {
      // Insert business listing
      const result = await client.query(
        `INSERT INTO business_listings 
         (user_id, business_name, business_type, address, phone, email, website, description, google_place_id, latitude, longitude, status)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, 'active')
         RETURNING *`,
        [userId, businessName, businessType, address, phone, email, website, description, googlePlaceId, latitude, longitude]
      );

      const listing = result.rows[0];

      // Get user details for email
      const userResult = await client.query(
        'SELECT name, email FROM users WHERE id = $1',
        [userId]
      );

      const user = userResult.rows[0];

      // Send welcome email
      try {
        await sendWelcomeEmail(user.email, businessName, user.name);
      } catch (emailError) {
        console.error('Failed to send welcome email:', emailError);
        
      }

      return NextResponse.json({
        message: 'Business listing submitted successfully',
        listing: {
          id: listing.id,
          businessName: listing.business_name,
          status: listing.status,
        },
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Business submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}