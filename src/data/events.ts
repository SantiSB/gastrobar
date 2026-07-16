import type { BerracoEvent } from '../types/berraco.types';

/* ============================================================
   BERRACO — Events source of truth
   ------------------------------------------------------------
   ➜ To add an event: append a new object to EVENTS.
   ➜ To hide one: set `status: 'hidden'`.
   ➜ The section renders from these helpers, never from markup.
   Only ONE real event exists today (Perros y Gatas).
   ============================================================ */

export const EVENTS: BerracoEvent[] = [
  {
    id: 'evt-perros-y-gatas',
    slug: 'perros-y-gatas',
    name: 'Perros y Gatas',
    category: { key: 'reggaeton', label: 'Reguetón' },
    tagline: 'La fiesta más perreo del sur',
    description: 'Una noche de reggaeton sin tregua. El flow más berraco de Pasto.',
    date: '2026-07-18',
    dateLabel: 'Sábado 18 de julio',
    time: '8:00 PM',
    location: 'Berraco Gastrobar · Pasto',
    image: '/events/perros-y-gatas.jpg',
    imageAlt: 'Banner del evento Perros y Gatas — fiesta de reguetón en Berraco Gastrobar',
    ticketUrl: 'https://www.passtix.co/eventos/perros-y-gatas',
    status: 'upcoming',
    featured: true,
  },
];

/* ---- Selectors -------------------------------------------- */

/** Events that should be publicly rendered (everything except hidden). */
export function getVisibleEvents(events: BerracoEvent[] = EVENTS): BerracoEvent[] {
  return events
    .filter((e) => e.status !== 'hidden')
    .slice()
    .sort((a, b) => a.date.localeCompare(b.date));
}

/** The single featured event, if any (falls back to first visible). */
export function getFeaturedEvent(events: BerracoEvent[] = EVENTS): BerracoEvent | null {
  const visible = getVisibleEvents(events);
  return visible.find((e) => e.featured) ?? visible[0] ?? null;
}

/** Upcoming (and sold-out) events excluding the featured one. */
export function getUpcomingEvents(events: BerracoEvent[] = EVENTS): BerracoEvent[] {
  const featured = getFeaturedEvent(events);
  return getVisibleEvents(events).filter(
    (e) => e.id !== featured?.id && (e.status === 'upcoming' || e.status === 'soldout'),
  );
}
