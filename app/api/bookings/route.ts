import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ success: true, bookingId: 'bk_123', ...body }, { status: 201 });
}
