import { formatInTimeZone, toDate } from 'date-fns-tz';
import { addMinutes, eachMinuteOfInterval, format, isAfter, isBefore } from 'date-fns';

export const DEFAULT_TIMEZONE = 'America/New_York';

export function generateDailySlots(
  date: Date,
  timezone: string = DEFAULT_TIMEZONE,
  busyAppointments: { start: Date; end: Date }[] = [],
  chairs: number = 4
) {
  const dayStart = toDate(format(date, 'yyyy-MM-dd') + 'T08:00:00', { timeZone: timezone });
  const dayEnd = toDate(format(date, 'yyyy-MM-dd') + 'T17:00:00', { timeZone: timezone });

  const intervals = eachMinuteOfInterval({ start: dayStart, end: dayEnd }, { step: 30 });

  return intervals.map((slotStart) => {
    const slotEnd = addMinutes(slotStart, 30);
    const occupiedChairs = busyAppointments.filter(app => {
      return isBefore(app.start, slotEnd) && isAfter(app.end, slotStart);
    }).length;

    return {
      start: slotStart.toISOString(),
      available: occupiedChairs < chairs,
    };
  });
}
