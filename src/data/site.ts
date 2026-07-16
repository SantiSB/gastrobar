import type { NavLink, SocialLink, ContactItem } from '../types/berraco.types';
import {
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  WHATSAPP_RESERVE_URL,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  ADDRESS,
  CITY,
  HOURS,
  MAPS_URL,
} from '../lib/constants';

/* ============================================================
   BERRACO — Site content
   ============================================================ */

export const NAV_LINKS: NavLink[] = [
  { label: 'Eventos', href: '#eventos' },
  { label: 'Cocinas', href: '#cocinas' },
  { label: 'Reservas', href: '#reservas' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

/** Brand voice & storytelling — reorganized from the brand manual. */
export const BRAND = {
  name: 'Berraco',
  suffix: 'Gastrobar',
  /** Colloquial meaning highlighted in the manual. */
  tagline: 'Puro sabor del sur',
  heroLead:
    'El gastrobar insignia del sur colombiano. Eventos, cocina reinventada y coctelería de autor con el carácter más berraco de Pasto.',
  storyEyebrow: 'Nuestra esencia',
  storyTitle: 'Ser berraco es sobresalir',
  story: [
    'Berraco es fuerza, autenticidad y sabor. Nacimos en Pasto para ofrecer momentos diferentes, auténticos y llenos de carácter — un espacio para sentirse en casa y conectar con el verdadero significado de ser berraco.',
    'En el argot colombiano, “berraco” describe a alguien destacado, talentoso y valiente. Esa es la esencia que llevamos a la mesa: un lugar que se atreve a sobresalir ofreciendo algo fuera de lo común.',
  ],
  /** Manual: Visión & Misión, presented as brand pillars. */
  pillars: [
    {
      title: 'Visión',
      text: 'Ser el gastrobar insignia del sur colombiano, reconocido por su innovación constante, calidad impecable y compromiso auténtico con la cultura y el impacto social.',
    },
    {
      title: 'Misión',
      text: 'Creamos experiencias memorables que transforman la tradición en innovación, rindiendo homenaje a la cultura nariñense y colombiana con sabores, colores y emociones a un nuevo nivel.',
    },
  ],
} as const;

export const SOCIALS: SocialLink[] = [
  { label: 'Instagram', href: INSTAGRAM_URL, handle: INSTAGRAM_HANDLE, icon: 'instagram' },
  { label: 'WhatsApp', href: WHATSAPP_RESERVE_URL, handle: PHONE_DISPLAY, icon: 'whatsapp' },
];

export const CONTACT_ITEMS: ContactItem[] = [
  { label: 'Instagram', value: INSTAGRAM_HANDLE, href: INSTAGRAM_URL, icon: 'instagram' },
  { label: 'WhatsApp', value: PHONE_DISPLAY, href: WHATSAPP_RESERVE_URL, icon: 'whatsapp' },
  { label: 'Correo', value: EMAIL, href: `mailto:${EMAIL}`, icon: 'mail' },
  { label: 'Teléfono', value: PHONE_DISPLAY, href: `tel:${PHONE_TEL}`, icon: 'phone' },
  { label: 'Ubicación', value: `${ADDRESS} · ${CITY}`, href: MAPS_URL, icon: 'map' },
  { label: 'Horario', value: HOURS, icon: 'clock' },
];
