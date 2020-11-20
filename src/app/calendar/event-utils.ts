import { EventInput } from '@fullcalendar/angular';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: TODAY_STR
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: '2020-11-20T12:00:00',
    end: '2020-11-20T15:00:00'
  },
  {
    id: createEventId(),
    title: "Leandro",
    start: "2020-11-15T15:40:00",
    end: "2020-11-15T16:41:00"
  },
  {id: createEventId(), title: "Leandro", start: "2020-11-10T22:05:00", end: "2020-11-10T22:04:00"}
];

export function createEventId() {
  return String(eventGuid++);
}
