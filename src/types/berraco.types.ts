/* ============================================================
   BERRACO — Domain types
   ============================================================ */

/* ---- Navigation ------------------------------------------- */
export interface NavLink {
  label: string;
  href: string;
}

/* ---- Events ----------------------------------------------- */
/**
 * Lifecycle of an event.
 * - `upcoming`  : on sale / announced.
 * - `soldout`   : announced but no tickets left.
 * - `finished`  : already happened (kept for archive).
 * - `hidden`    : draft / inactive → never rendered.
 */
export type EventStatus = 'upcoming' | 'soldout' | 'finished' | 'hidden';

export interface EventCategory {
  /** Machine key, e.g. "reggaeton". */
  key: string;
  /** Human label rendered on the badge, e.g. "Reguetón". */
  label: string;
}

export interface BerracoEvent {
  id: string;
  /** URL-friendly identifier, also used as a stable key. */
  slug: string;
  name: string;
  category: EventCategory;
  /** Short punchy line shown above the title. */
  tagline?: string;
  description: string;
  /** ISO date (YYYY-MM-DD) — used for chronological ordering. */
  date: string;
  /** Human date label, e.g. "Sábado 26 de julio". */
  dateLabel: string;
  /** Human time label, e.g. "9:00 PM". */
  time: string;
  location: string;
  /** Public path to the banner/flyer image. */
  image: string;
  imageAlt: string;
  /** External ticketing URL (opened safely in a new tab). */
  ticketUrl: string;
  status: EventStatus;
  /** Marks the hero/featured event of the section. */
  featured: boolean;
}

/* ---- Gastronomic concept (cocinas) ------------------------ */
export interface Cuisine {
  id: string;
  /** Concept / kitchen name, e.g. "AMAYA". */
  name: string;
  /** One-line positioning, e.g. "Fusión México × Argentina". */
  kicker: string;
  description: string;
  /** Representative tags — cuisines/styles, NOT dishes. */
  tags: string[];
  /** Accent color token used to theme the card. */
  accent: 'green' | 'orange' | 'sage' | 'brown';
}

/* ---- Contact / social ------------------------------------- */
export interface SocialLink {
  label: string;
  href: string;
  handle: string;
  /** Icon key resolved by the Icon component. */
  icon: 'instagram' | 'whatsapp' | 'mail' | 'phone' | 'map' | 'clock';
}

export interface ContactItem {
  label: string;
  value: string;
  href?: string;
  icon: SocialLink['icon'];
}
