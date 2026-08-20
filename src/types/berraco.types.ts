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
  /** Concept / kitchen name, e.g. "Cocina Berraco". */
  name: string;
  /** One-line positioning, e.g. "Fusión México × Argentina". */
  kicker: string;
  description: string;
  /** Representative tags — cuisines/styles, NOT dishes. */
  tags: string[];
  /** Accent color token used to theme the card. */
  accent: 'green' | 'orange' | 'sage' | 'brown';
}

/* ---- Menu / carta ----------------------------------------- */
/** The three worlds of the carta. */
export type MenuKitchen = 'berraco' | 'bebidas';

/**
 * A single price line. `amount` is COP as a raw number (e.g. 33900) so it
 * can be validated/sorted; formatting lives in `lib/formatCurrency.ts`.
 * `label` distinguishes variants (e.g. "Jarra 1.600 ml", "Botella").
 */
export interface MenuPrice {
  label?: string;
  amount: number;
}

export interface MenuItem {
  /** Unique slug across the whole carta; also the image basename. */
  id: string;
  name: string;
  /** Optional — spirits, beers and sodas are name + price only. */
  description?: string;
  /** One or more prices (unidad/jarra, copa/botella, personal/compartir…). */
  prices: MenuPrice[];
  /**
   * Image basename (without extension) inside
   * `src/assets/menu/<kitchen>/`. Omitted when the item has no photo.
   */
  image?: string;
  /** Optional dietary/style chips — only set when they add value. */
  tags?: string[];
  /** Marks a visually featured dish/cocktail (shown in the destacados strip). */
  signature?: boolean;
}

export interface MenuCategory {
  /** Unique category id, e.g. "berraco-entradas". */
  id: string;
  name: string;
  kitchen: MenuKitchen;
  items: MenuItem[];
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
