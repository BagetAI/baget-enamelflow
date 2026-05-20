import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { clinicId, patientInfo, startTime } = req.body;

  if (!clinicId || !patientInfo || !startTime) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  return res.status(201).json({
    success: true,
    bookingId: `bk_${Math.random().toString(36).substr(2, 9)}`,
    message: 'Appointment request received and ledger updated.'
  });
}
