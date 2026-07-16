import type { Cuisine } from '../types/berraco.types';

/* ============================================================
   BERRACO — Propuesta gastronómica (conceptos / cocinas)
   ------------------------------------------------------------
   These describe the CONCEPTS behind the menu, not the carta.
   No dish names, no prices — that carta comes in a next stage.
   Derived from "Menu_BERRACO.pdf": three worlds under one roof.
   ============================================================ */

export const CUISINES: Cuisine[] = [
  {
    id: 'cocina-berraco',
    name: 'Cocina Berraco',
    kicker: 'Sabor del sur reinventado',
    description:
      'Gastronomía nariñense y colombiana llevada a otro nivel. Tablas para compartir, parrilladas y platos de carácter, pensados para el centro de la mesa y las buenas conversaciones.',
    tags: ['Andino', 'Para compartir', 'Parrilla', 'Comfort'],
    accent: 'brown',
  },
  {
    id: 'amaya',
    name: 'AMAYA',
    kicker: 'Fusión México × Argentina',
    description:
      'Cambiamos de nacionalidad: una mezcla de fuego, sabor y pasión donde el picante mexicano se encuentra con el asado argentino. Cada plato celebra lo mejor de ambas culturas.',
    tags: ['México', 'Argentina', 'Fuego', 'Asado'],
    accent: 'green',
  },
  {
    id: 'cocteleria-de-autor',
    name: 'Coctelería de Autor',
    kicker: 'La barra Berraco',
    description:
      'Coctelería creativa de alto impacto: tragos de autor, hervidos del sur y clásicos bien ejecutados. Ahumados, botánicos y cítricos con el carácter indomable de la casa.',
    tags: ['Autor', 'Hervidos', 'Clásicos', 'Sin licor'],
    accent: 'sage',
  },
];

/** House specials teaser — presented conceptually, without the carta. */
export const CUISINE_INTRO = {
  eyebrow: 'Propuesta gastronómica',
  title: 'Tres mundos, un mismo carácter',
  lead: 'En Berraco la tradición se transforma en innovación. Gastronomía local reinventada y coctelería creativa que rinden homenaje a la cultura nariñense y colombiana.',
} as const;
