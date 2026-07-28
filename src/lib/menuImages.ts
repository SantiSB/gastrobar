import type { ImageMetadata } from 'astro';

/**
 * Eagerly resolves every optimized menu master under src/assets/menu/ so
 * `astro:assets` can process them at build time (AVIF/WebP + responsive srcset).
 * Data files reference images by basename; this maps (kitchen, name) → asset.
 */
const images = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/menu/**/*.{jpg,jpeg,png}',
  { eager: true },
);

export function getMenuImage(kitchen: string, name: string): ImageMetadata | undefined {
  return images[`../assets/menu/${kitchen}/${name}.jpg`]?.default;
}
