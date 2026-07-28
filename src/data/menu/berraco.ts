import type { MenuCategory } from '../../types/berraco.types';

/* ============================================================
   BERRACO — Cocina Berraco
   Sabor del sur reinventado: entradas, tablas para compartir,
   platos de carácter y especiales de la casa.
   ➜ Precios en COP como número (33900 → "$33.900").
   ➜ `image` = basename en src/assets/menu/berraco/.
   ============================================================ */

export const BERRACO_CATEGORIES: MenuCategory[] = [
  {
    id: 'berraco-entradas',
    name: 'Entradas',
    kitchen: 'berraco',
    items: [
      {
        id: 'fogoncitos',
        name: 'Fogoncitos',
        description:
          'Tabla para compartir con 5 chorizos asados, 10 mini arepas, guacamole, ají y ahogado, ideal para disfrutar al centro de la mesa.',
        prices: [{ amount: 33900 }],
        image: 'fogoncitos',
      },
      {
        id: 'tostada-urkunina',
        name: 'Tostada Urkunina',
        description:
          'Tostadas cubiertas con lomo de res (180 g), queso Colby Jack fundido y una combinación de chimichurri de pimentón y chimichurri argentino, acompañadas de sour cream para equilibrar los sabores.',
        prices: [{ amount: 35900 }],
        image: 'tostada-urkunina',
      },
      {
        id: 'burrata-mediterranea',
        name: 'Burrata Mediterránea',
        description:
          'Suave queso burrata servido con tomates confitados, pesto y cebolla crispy. Finalizado con reducción de balsámico, sour cream y acompañado de pan baguette tostado.',
        prices: [{ amount: 32900 }],
        image: 'burrata',
        signature: true,
      },
      {
        id: 'empanada-luna-andina',
        name: 'Empanada Luna Andina',
        description:
          '3 empanadas andinas doradas y crujientes, acompañadas de salsa de ajo y ají de maní, perfectas para abrir el apetito.',
        prices: [{ amount: 25900 }],
        image: 'empanada-luna-andina',
      },
    ],
  },
  {
    id: 'berraco-para-compartir',
    name: 'Para compartir',
    kitchen: 'berraco',
    items: [
      {
        id: 'nachos-trueno',
        name: 'Nachos Trueno',
        description:
          'Crujientes tortillas de maíz cubiertas con pollo desmechado (80 g), frijol refrito, queso rallado fundido y queso crema. Acompañados de sour cream, guacamole, pico de gallo y relish de jalapeños y pepinillo.',
        prices: [{ amount: 34900 }],
        image: 'nachos-trueno',
        signature: true,
      },
      {
        id: 'parrillada-leon-dormido',
        name: 'Parrillada León Dormido',
        description:
          'Personal: 100 g de lomito de res, 75 g de pechuga de pollo y 1 chorizo, con papas fritas, arepitas, guacamole, salsas de la casa, tomates marinados y crispetas. Compartir para 2: 200 g de lomito, 150 g de pollo y 2 chorizos con los mismos acompañamientos.',
        prices: [
          { label: 'Personal', amount: 35900 },
          { label: 'Compartir 2 personas', amount: 62900 },
        ],
        image: 'parrillada-leon-dormido',
        signature: true,
      },
    ],
  },
  {
    id: 'berraco-platos',
    name: 'Platos individuales',
    kitchen: 'berraco',
    items: [
      {
        id: 'mazorcada-al-wok',
        name: 'Mazorcada al Wok',
        description:
          'Maíz tierno (200 g) salteado al wok con lomo de res (80 g) y tocineta crocante, bañado en crema de leche y queso rallado fundido. Coronado con ripio de papa, pico de gallo, relish de jalapeños y pepinillo y salsa de ajo.',
        prices: [{ amount: 32900 }],
        image: 'mazorcada',
        signature: true,
      },
      {
        id: 'papas-artesanas',
        name: 'Papas Artesanas',
        description:
          'Papas francesas cargadas con pollo desmechado (80 g), salchicha, panceta crocante (80 g) y queso rallado fundido, bañadas con salsa de ajo.',
        prices: [{ amount: 34900 }],
        image: 'papas-artesanas',
      },
      {
        id: 'papas-toscani',
        name: 'Papas Toscani',
        description:
          'Papas francesas cubiertas con mini albóndigas (100 g) en salsa napolitana, terminadas con queso parmesano y pesto fresco.',
        prices: [{ amount: 34900 }],
        image: 'papas-toscani',
      },
      {
        id: 'chicharron-crujiente-andino',
        name: 'Chicharrón Crujiente Andino',
        description:
          'Jugosa panceta crocante (200 g) acompañada de guacamole, 5 mini arepas, sour cream y chimichurri de pimentón.',
        prices: [{ amount: 31900 }],
        image: 'chicharron',
        signature: true,
      },
      {
        id: 'hamburguesa-la-berraca',
        name: 'Hamburguesa La Berraca',
        description:
          'Hamburguesa de carne artesanal (150 g) en pan suave, con queso tajado, queso crema, tocineta crujiente, lechuga crespa, tomate fresco y guacamole. Finalizada con chimichurri argentino, pepinillo y salsa de ajo.',
        prices: [{ amount: 31900 }],
        image: 'hamburguesa-berraca',
      },
      {
        id: 'mexican-burguer',
        name: 'Mexican Burguer',
        description:
          'Ganadora de Burgerland 2026. Servida en pan brioche, una deliciosa carne magra seleccionada acompañada de queso mozzarella, guacamole cremoso, totopos, mermelada de tocineta, queso cheddar y jalapeños tatemados.',
        prices: [{ amount: 31900 }],
        image: 'mexican-burguer',
        tags: ['Premiada'],
      },
    ],
  },
  {
    id: 'berraco-adicionales',
    name: 'Adicionales',
    kitchen: 'berraco',
    items: [
      { id: 'porcion-de-papas', name: 'Porción de papas', prices: [{ amount: 8000 }] },
      { id: 'salsa-de-la-casa', name: 'Salsa de la casa', prices: [{ amount: 3000 }] },
      { id: 'salsa-de-ajo', name: 'Salsa de ajo', prices: [{ amount: 3000 }] },
    ],
  },
  {
    id: 'berraco-especiales',
    name: 'Especiales de la casa',
    kitchen: 'berraco',
    items: [
      {
        id: 'mar-y-tierra-berraco',
        name: 'Mar y Tierra Berraco',
        description:
          'Lomo fino 160 g con camarones sellados 120 g sobre puré de papa, bañado en salsa de tocineta y perejil con toque de doble crema, cimarrón frito y cherrys.',
        prices: [{ amount: 55000 }],
        image: 'mar-y-tierra',
      },
      {
        id: 'salmon-encocado',
        name: 'Salmón Encocado',
        description:
          'Salmón 150 g con salsa encocada de camarones, servido con puré de papa, queso encostrado, crunchy de patacones y mizunas para un final fresco y crocante.',
        prices: [{ amount: 64000 }],
        image: 'salmon-encocado',
      },
    ],
  },
];
