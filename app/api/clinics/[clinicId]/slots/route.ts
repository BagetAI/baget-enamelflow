import { NextResponse } from 'next/server';
import { generateDailySlots, DEFAULT_TIMEZONE } from '@/lib/scheduling';

/**
 * GET /api/clinics/[clinicId]/slots?date=2026-05-20
 * Returns 30-minute availability slots for a specific clinic.
 */

export async function GET(
  request: Request,
  { params }: { params: { clinicId: string } }
) {
  const { searchParams } = new URL(request.url);
  const dateStr = searchParams.get('date');
  
  if (!dateStr) {
    return NextResponse.json({ error: 'Date parameter is required (YYYY-MM-DD)' }, { status: 400 });
  }

  try {
    const targetDate = new Date(dateStr);
    
    // In a real production app, we would fetch the clinic's config and existing appointments from the DB
    // For this architectural slice, we simulate the logic with the provided utility
    
    // Mocking a few busy slots to demonstrate the "Slot Availability" logic
    const mockBusy = [
      { start: new Date(`${dateStr}T09:00:00Z`), end: new Date(`${dateStr}T10:00:00Z`) },
      { start: new Date(`${dateStr}T09:00:00Z`), end: new Date(`${dateStr}T10:00:00Z`) },
      { start: new Date(`${dateStr}T09:00:00Z`), end: new Date(`${dateStr}T10:00:00Z`) },
      { start: new Date(`${dateStr}T09:00:00Z`), end: new Date(`${dateStr}T10:00:00Z`) }, // 4 chairs full at 9am
    ];

    const slots = generateDailySlots(targetDate, DEFAULT_TIMEZONE, mockBusy, 4);

    return NextResponse.json({
      clinicId: params.clinicId,
      timezone: DEFAULT_TIMEZONE,
      date: dateStr,
      slots
    });

  } catch (error) {
    return NextResponse.json({ error: 'Invalid date format' }, { status: 400 });
  }
}
