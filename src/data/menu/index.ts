import type { MenuCategory, MenuItem, MenuKitchen } from '../../types/berraco.types';
import { BERRACO_CATEGORIES } from './berraco';
import { AMAYA_CATEGORIES } from './amaya';
import { BEBIDAS_CATEGORIES } from './bebidas';

/* ============================================================
   BERRACO — Carta (fuente de verdad agregada)
   ------------------------------------------------------------
   ➜ Editar productos/precios: en berraco.ts / amaya.ts / bebidas.ts.
   ➜ La página /carta se renderiza desde estos selectores.
   ➜ Validar con: node --experimental-strip-types scripts/validate-menu.ts
   ============================================================ */

export const MENU: MenuCategory[] = [
  ...BERRACO_CATEGORIES,
  ...AMAYA_CATEGORIES,
  ...BEBIDAS_CATEGORIES,
];

/** Presentation metadata for each kitchen (order = tab order). */
export interface KitchenMeta {
  id: MenuKitchen;
  /** Full name shown as the section heading. */
  label: string;
  /** Short label shown in the sticky tab bar. */
  tab: string;
  kicker: string;
}

export const KITCHENS: KitchenMeta[] = [
  { id: 'berraco', label: 'Cocina Berraco', tab: 'Berraco', kicker: 'Sabor del sur reinventado' },
  { id: 'amaya', label: 'Cocina AMAYA', tab: 'AMAYA', kicker: 'Fusión México × Argentina' },
  { id: 'bebidas', label: 'Bebidas', tab: 'Bebidas', kicker: 'La barra Berraco' },
];

/* ---- Selectors -------------------------------------------- */

/** Categories belonging to a kitchen, in declared order. */
export function getCategories(kitchen: MenuKitchen, menu: MenuCategory[] = MENU): MenuCategory[] {
  return menu.filter((c) => c.kitchen === kitchen);
}

/** Every item across the whole carta (flat). */
export function getAllItems(menu: MenuCategory[] = MENU): MenuItem[] {
  return menu.flatMap((c) => c.items);
}

/** Find one item by its unique id. */
export function findItem(id: string, menu: MenuCategory[] = MENU): MenuItem | undefined {
  return getAllItems(menu).find((i) => i.id === id);
}

/** Signature (visually featured) items of a kitchen. */
export function getSignatureItems(kitchen: MenuKitchen, menu: MenuCategory[] = MENU): MenuItem[] {
  return getCategories(kitchen, menu)
    .flatMap((c) => c.items)
    .filter((i) => i.signature && i.image);
}
