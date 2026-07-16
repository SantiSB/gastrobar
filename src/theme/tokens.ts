/**
 * BERRACO — Design tokens (TypeScript mirror of styles/global.css).
 *
 * Use these when you need a token value inside JS/inline styles or
 * framer-motion animations. For static markup prefer the Tailwind
 * utilities (bg-green, text-cream, …) or the CSS custom properties
 * (var(--color-orange)). Keep this file in sync with global.css.
 */

export const colors = {
  cream: '#fefbe2',
  creamDim: '#efe9c8',
  green: '#0d3326',
  green950: '#061a12',
  green900: '#08221a',
  green800: '#0d3326',
  green700: '#124533',
  green600: '#1a5842',
  sage: '#aab388',
  sage600: '#94a06f',
  orange: '#c4661f',
  orange500: '#d5772e',
  orange400: '#e0894a',
  brown: '#783d19',
  brown600: '#8f4d26',
} as const;

export const semantic = {
  bg: '#061a12',
  surface: '#08221a',
  surface2: '#0d3326',
  ink: '#fefbe2',
  inkMuted: 'rgba(254,251,226,0.68)',
  inkFaint: 'rgba(254,251,226,0.42)',
  line: 'rgba(254,251,226,0.12)',
  lineStrong: 'rgba(254,251,226,0.24)',
} as const;

export const fonts = {
  display: '"Fraunces", "Playfair Display", Georgia, serif',
  body: '"Hanken Grotesk", "Inter", system-ui, sans-serif',
} as const;

export const radius = {
  xs: '0.375rem',
  sm: '0.625rem',
  md: '0.875rem',
  lg: '1.25rem',
  xl: '1.75rem',
  '2xl': '2.25rem',
  pill: '999px',
} as const;

export const shadow = {
  sm: '0 2px 10px rgba(0,0,0,0.25)',
  md: '0 12px 32px rgba(0,0,0,0.35)',
  lg: '0 28px 70px rgba(0,0,0,0.5)',
  glowOrange: '0 0 34px rgba(196,102,31,0.4)',
  glowCream: '0 0 30px rgba(254,251,226,0.22)',
} as const;

/** Milliseconds — mirror of --dur-* custom properties. */
export const duration = {
  fast: 0.15,
  base: 0.25,
  slow: 0.45,
  slower: 0.7,
} as const;

export const easeBrand = [0.25, 0.46, 0.45, 0.94] as const;

export const zIndex = {
  base: 1,
  decor: 5,
  content: 10,
  sticky: 40,
  nav: 50,
  overlay: 60,
  modal: 70,
} as const;
