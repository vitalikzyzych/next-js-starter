import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export function formattedDate(date: string | Date) {
  return dayjs(date).format('MM/DD/YYYY');
}
