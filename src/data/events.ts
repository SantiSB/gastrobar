import type { BerracoEvent } from '../types/berraco.types';

/* ============================================================
   BERRACO — Events source of truth
   ------------------------------------------------------------
   ➜ To add an event: append a new object to EVENTS.
   ➜ To hide one: set `status: 'hidden'`.
   ➜ The section renders from these helpers, never from markup.
   No event is currently scheduled — EventGrid falls back to its
   empty state until the next one is added here.
   ============================================================ */

export const EVENTS: BerracoEvent[] = [];

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
