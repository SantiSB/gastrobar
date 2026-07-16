/* ============================================================
   BERRACO — Constants
   Central place for external links & contact endpoints.
   Data extracted from the brand manual & existing project.
   ============================================================ */

/** WhatsApp business line (from manual: 310 507 9441 → +57). */
export const WHATSAPP_NUMBER = '573105079441';

/** Pre-filled reservation message. */
const RESERVATION_TEXT =
  '¡Hola Berraco! Quiero reservar una mesa. ¿Me ayudan con la disponibilidad?';

export const WHATSAPP_RESERVE_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  RESERVATION_TEXT,
)}`;

export const INSTAGRAM_URL = 'https://instagram.com/berraco.col';
export const INSTAGRAM_HANDLE = '@berraco.col';

/** Passtix — ticketera oficial de Berraco (gestiona los eventos). */
export const PASSTIX_URL = 'https://www.passtix.co';

export const EMAIL = 'berracogastrobar@gmail.com';
export const PHONE_DISPLAY = '310 507 9441';
export const PHONE_TEL = '+573105079441';

/**
 * NOTE: address preserved from the existing project. If Berraco has an
 * official address in the brand assets, update it here (single source).
 */
export const ADDRESS = 'Cra 36 #18-43, Palermo';
export const CITY = 'Pasto, Nariño';
/** TODO(config): confirm official opening hours — placeholder from typical gastrobar schedule. */
export const HOURS = 'Mar – Dom · 5:00 PM – 1:00 AM';
export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Berraco+Gastrobar+Pasto';
