import { NextResponse } from 'next/server';
import { generateDailySlots, DEFAULT_TIMEZONE } from '@/lib/scheduling';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get('date');
  if (!date) return NextResponse.json({ error: 'Date required' }, { status: 400 });

  const slots = generateDailySlots(new Date(date), DEFAULT_TIMEZONE, [], 4);
  return NextResponse.json({ slots });
}
