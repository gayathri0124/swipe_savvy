import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');

  if (!query) {
    return NextResponse.json(
      { error: 'Query parameter is required' },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(
        query
      )}&key=${process.env.GOOGLE_PLACES_API_KEY}`
    );

    const data = await response.json();

    if (data.status !== 'OK') {
      return NextResponse.json(
        { error: 'Failed to fetch places' },
        { status: 400 }
      );
    }

    const places = data.results.map((place: any) => ({
      placeId: place.place_id,
      name: place.name,
      address: place.formatted_address,
      phone: place.formatted_phone_number,
      latitude: place.geometry.location.lat,
      longitude: place.geometry.location.lng,
      types: place.types,
      photoUrl: place.photos?.[0] ? 
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photos[0].photo_reference}&key=${process.env.GOOGLE_PLACES_API_KEY}` 
        : null,
    }));

    return NextResponse.json({ places });
  } catch (error) {
    console.error('Places API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}