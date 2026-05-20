import { VercelRequest, VercelResponse } from '@vercel/node';
import { generateDailySlots, DEFAULT_TIMEZONE } from './_lib/scheduling';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { date } = req.query;
  
  if (!date || typeof date !== 'string') {
    return res.status(400).json({ error: 'Date query parameter required' });
  }

  const targetDate = new Date(date);
  const mockBusy = [
    { start: new Date(`${date}T13:00:00Z`), end: new Date(`${date}T14:00:00Z`) },
    { start: new Date(`${date}T13:00:00Z`), end: new Date(`${date}T14:00:00Z`) },
    { start: new Date(`${date}T13:00:00Z`), end: new Date(`${date}T14:00:00Z`) },
    { start: new Date(`${date}T13:00:00Z`), end: new Date(`${date}T14:00:00Z`) }, // Full
  ];

  const slots = generateDailySlots(targetDate, DEFAULT_TIMEZONE, mockBusy, 4);

  return res.status(200).json({
    timezone: DEFAULT_TIMEZONE,
    slots
  });
}
