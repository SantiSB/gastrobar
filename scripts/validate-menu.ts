/**
 * Menu integrity validator — run any time the carta changes:
 *   node --experimental-strip-types scripts/validate-menu.ts
 *
 * Checks: expected product count, non-empty names, valid prices, unique ids,
 * every referenced image exists on disk, no orphan images, valid kitchens.
 * Exits non-zero on any error (usable as a pre-build gate).
 */
import { readdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { BERRACO_CATEGORIES } from '../src/data/menu/berraco.ts';
import { AMAYA_CATEGORIES } from '../src/data/menu/amaya.ts';
import { BEBIDAS_CATEGORIES } from '../src/data/menu/bebidas.ts';
import type { MenuKitchen } from '../src/types/berraco.types';

// Rebuilt locally (not via index.ts) so raw Node ESM needs no extensionless resolution.
const MENU = [...BERRACO_CATEGORIES, ...AMAYA_CATEGORIES, ...BEBIDAS_CATEGORIES];
const KITCHENS: { id: MenuKitchen; label: string }[] = [
  { id: 'berraco', label: 'Cocina Berraco' },
  { id: 'amaya', label: 'AMAYA' },
  { id: 'bebidas', label: 'Bebidas' },
];

const HERE = dirname(fileURLToPath(import.meta.url));
const ASSETS = join(HERE, '..', 'src', 'assets', 'menu');
const EXPECTED = 128;
const TOLERANCE = 3;

const errors: string[] = [];
const warnings: string[] = [];

const validKitchens = new Set(KITCHENS.map((k) => k.id));
const ids = new Set<string>();
const referenced = new Map<MenuKitchen, Set<string>>();
let itemCount = 0;

for (const cat of MENU) {
  if (!validKitchens.has(cat.kitchen)) errors.push(`Category "${cat.id}" has invalid kitchen "${cat.kitchen}"`);
  if (!cat.items.length) errors.push(`Category "${cat.id}" has no items`);

  for (const item of cat.items) {
    itemCount++;
    if (!item.name?.trim()) errors.push(`Item "${item.id}" has empty name`);
    if (ids.has(item.id)) errors.push(`Duplicate item id "${item.id}"`);
    ids.add(item.id);

    if (!item.prices?.length) {
      errors.push(`Item "${item.id}" has no prices`);
    } else {
      for (const p of item.prices) {
        if (typeof p.amount !== 'number' || !Number.isFinite(p.amount) || p.amount <= 0) {
          errors.push(`Item "${item.id}" has invalid price amount: ${String(p.amount)}`);
        }
      }
    }

    if (item.image) {
      const file = join(ASSETS, cat.kitchen, `${item.image}.jpg`);
      if (!existsSync(file)) {
        errors.push(`Item "${item.id}" references missing image: ${cat.kitchen}/${item.image}.jpg`);
      }
      if (!referenced.has(cat.kitchen)) referenced.set(cat.kitchen, new Set());
      referenced.get(cat.kitchen)!.add(`${item.image}.jpg`);
    }
  }
}

// Orphan images: files on disk not referenced by any item.
for (const kitchen of validKitchens) {
  const dir = join(ASSETS, kitchen);
  if (!existsSync(dir)) continue;
  const used = referenced.get(kitchen) ?? new Set<string>();
  for (const file of readdirSync(dir)) {
    if (file.endsWith('.jpg') && !used.has(file)) {
      warnings.push(`Orphan image (not referenced): ${kitchen}/${file}`);
    }
  }
}

if (Math.abs(itemCount - EXPECTED) > TOLERANCE) {
  warnings.push(`Product count ${itemCount} differs from expected ~${EXPECTED} by more than ${TOLERANCE}`);
}

// Report
const byKitchen = KITCHENS.map((k) => {
  const cats = MENU.filter((c) => c.kitchen === k.id);
  const n = cats.reduce((s, c) => s + c.items.length, 0);
  return `  ${k.label}: ${cats.length} categorías, ${n} productos`;
}).join('\n');

console.log('── Carta Berraco ──');
console.log(byKitchen);
console.log(`  TOTAL: ${itemCount} productos, ${ids.size} ids únicos`);

if (warnings.length) {
  console.log(`\n⚠️  ${warnings.length} advertencia(s):`);
  warnings.forEach((w) => console.log(`   - ${w}`));
}
if (errors.length) {
  console.error(`\n❌ ${errors.length} error(es):`);
  errors.forEach((e) => console.error(`   - ${e}`));
  process.exit(1);
}
console.log('\n✅ Carta válida: sin errores.');
