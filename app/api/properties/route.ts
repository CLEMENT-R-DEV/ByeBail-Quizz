import { NextResponse } from 'next/server';

const API_URL = 'https://images.braumanandk.com/lot-byebail.json';

export async function GET() {
  try {
    const response = await fetch(API_URL, {
      headers: {
        'Accept': 'application/json',
      },
      // Revalidate every 5 minutes
      next: { revalidate: 300 }
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch properties' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching properties:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
