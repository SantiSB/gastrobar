import type { MenuCategory } from '../../types/berraco.types';

/* ============================================================
   BERRACO — Bebidas / La Barra
   Coctelería de autor, clásicos, vinos, hervidos, cervezas,
   licores por botella y bebidas sin licor.
   ➜ Jarra de coctelería = 1.600 ml.
   ============================================================ */

export const BEBIDAS_CATEGORIES: MenuCategory[] = [
  {
    id: 'bebidas-cocteles-autor',
    name: 'Cócteles de autor',
    kitchen: 'bebidas',
    items: [
      {
        id: 'niebla-de-eucalipto',
        name: 'Niebla de Eucalipto',
        description:
          'Tequila, piña y eucalipto, limón y soda. Ligero, aromático y refrescante: bruma cítrica de espíritu limpio.',
        prices: [
          { label: 'Unidad', amount: 35000 },
          { label: 'Jarra', amount: 130000 },
        ],
        image: 'jarra-coctelera',
        signature: true,
      },
      {
        id: 'fuego-verde',
        name: 'Fuego Verde',
        description:
          'Ron blanco y ron oscuro con syrup de albahaca morada, limón y agua tónica. Botánico, seco y efervescente: frescura vibrante con un toque de brío.',
        prices: [
          { label: 'Unidad', amount: 35000 },
          { label: 'Jarra', amount: 130000 },
        ],
        image: 'fuego-verde',
        signature: true,
      },
      {
        id: 'coctel-berraco',
        name: 'Berraco',
        description:
          'Tequila con syrup de miel y pimentón tatemado, y limón. Ahumado, especiado y seco: carácter indomable con elegancia firme.',
        prices: [
          { label: 'Unidad', amount: 35000 },
          { label: 'Jarra', amount: 130000 },
        ],
        image: 'coctel-berraco',
        signature: true,
      },
      {
        id: 'galeras-blanco',
        name: 'Galeras Blanco',
        description:
          'Ginebra con hierbabuena, kiwi y pepino, limón, un toque de Chardonnay y ron oscuro. Nítido, verde y brillante: frescura de altura en equilibrio perfecto.',
        prices: [
          { label: 'Unidad', amount: 32000 },
          { label: 'Jarra', amount: 120000 },
        ],
        image: 'galeras-blanco',
      },
      {
        id: 'la-congona',
        name: 'La Congona',
        description:
          'Ron oscuro con syrup de maracuyá y congona, y limón. Herbal, profundo y vibrante: un trago que honra la raíz andina con carácter tropical.',
        prices: [
          { label: 'Unidad', amount: 32000 },
          { label: 'Jarra', amount: 120000 },
        ],
        image: 'la-congona',
      },
      {
        id: 'raiz-brava',
        name: 'Raíz Brava',
        description:
          'Ron con syrup de caramelo salado, limón y ginger beer. Especiado, cítrico y vibrante: raíz brava que asciende con carácter.',
        prices: [
          { label: 'Unidad', amount: 32000 },
          { label: 'Jarra', amount: 120000 },
        ],
        image: 'raiz-brava',
      },
      {
        id: 'doble-origen',
        name: 'Doble Origen',
        description:
          'Un cóctel de contrastes: café y fruta, dulzor y acidez, ron y vodka. Equilibrado, moderno y con personalidad fuerte, pensado para paladares curiosos y amantes de lo diferente.',
        prices: [
          { label: 'Unidad', amount: 32000 },
          { label: 'Jarra', amount: 120000 },
        ],
        image: 'doble-origen',
        signature: true,
      },
    ],
  },
  {
    id: 'bebidas-cocteles-clasicos',
    name: 'Cócteles clásicos',
    kitchen: 'bebidas',
    items: [
      {
        id: 'mojito',
        name: 'Mojito',
        description:
          'Ron blanco, hierbabuena fresca, limón y soda. Refrescante, herbáceo y crujiente de burbuja: un clásico que nunca falla.',
        prices: [
          { label: 'Unidad', amount: 30000 },
          { label: 'Jarra', amount: 115000 },
        ],
      },
      {
        id: 'gin-tonic',
        name: 'Gin Tonic',
        description:
          'Gin botánico y tónica helada con cítricos aromáticos. Seco y perfumado, de trago largo y elegante.',
        prices: [{ amount: 30000 }],
        image: 'gin-tonic',
      },
      { id: 'gin-tonic-gordons', name: 'Gin Tonic Gordons', prices: [{ amount: 35000 }] },
      { id: 'gin-tonic-tanqueray', name: 'Gin Tonic Tanqueray', prices: [{ amount: 40000 }] },
      { id: 'gin-tonic-hendricks', name: 'Gin Tonic Hendricks', prices: [{ amount: 47000 }] },
      {
        id: 'moscow-mule',
        name: 'Moscow Mule',
        description:
          'Vodka, jugo de limón y ginger beer en su icónica taza. Picante, cítrico y súper refrescante.',
        prices: [
          { label: 'Unidad', amount: 30000 },
          { label: 'Jarra', amount: 115000 },
        ],
        image: 'moscow-mule',
      },
      {
        id: 'margarita',
        name: 'Margarita',
        description:
          'Tequila, triple sec y limón, con o sin sal al borde. Cítrica, limpia y balanceada; un favorito atemporal.',
        prices: [
          { label: 'Unidad', amount: 30000 },
          { label: 'Jarra', amount: 115000 },
        ],
        image: 'margarita',
      },
      {
        id: 'whisky-sour',
        name: 'Whisky Sour',
        description:
          'Whisky, limón y almíbar; espuma sedosa (opcional clara). Equilibrio perfecto entre ácido y dulce.',
        prices: [
          { label: 'Unidad', amount: 30000 },
          { label: 'Jarra', amount: 115000 },
        ],
      },
      {
        id: 'long-island',
        name: 'Long Island',
        description:
          'Vodka, gin, ron, tequila y triple sec con toque de cola. Potente, cítrico y sorprendentemente amable.',
        prices: [
          { label: 'Unidad', amount: 30000 },
          { label: 'Jarra', amount: 115000 },
        ],
        image: 'long-island',
      },
      {
        id: 'pina-colada',
        name: 'Piña Colada',
        description:
          'Ron, piña y crema de coco. Cremosa, tropical y golosa: vacaciones en un vaso.',
        prices: [
          { label: 'Unidad', amount: 28000 },
          { label: 'Jarra', amount: 115000 },
        ],
        image: 'pina-colada',
      },
    ],
  },
  {
    id: 'bebidas-vinos',
    name: 'Vinos',
    kitchen: 'bebidas',
    items: [
      {
        id: 'vino-por-copa',
        name: 'Vino por copa',
        description:
          'Selección de vino suave y aromático, ideal para acompañar la noche con un sorbo cálido y equilibrado.',
        prices: [{ label: 'Copa', amount: 15000 }],
        image: 'vino',
      },
      { id: 'santa-helena', name: 'Santa Helena', prices: [{ label: 'Botella', amount: 90000 }] },
      {
        id: 'casillero-del-diablo',
        name: 'Casillero del Diablo',
        prices: [{ label: 'Botella', amount: 110000 }],
      },
      {
        id: 'vino-caliente',
        name: 'Vino Caliente',
        description:
          'Vino tinto especiado, infusionado lentamente con cítricos y notas cálidas de canela y clavo. Una bebida reconfortante, perfecta para las noches frías.',
        prices: [{ label: 'Copa', amount: 20000 }],
      },
    ],
  },
  {
    id: 'bebidas-hervidos',
    name: 'Hervidos de autor',
    kitchen: 'bebidas',
    items: [
      {
        id: 'hervido-coco',
        name: 'Hervido Coco',
        description:
          'Infusión caliente de coco cremoso con especias seleccionadas; toque sutil de licor nacional. Aromático, envolvente y tropical, con equilibrio entre dulzor natural y calidez especiada.',
        prices: [{ amount: 14000 }],
      },
      {
        id: 'hervido-berraco',
        name: 'Hervido Berraco',
        description:
          'Infusión caliente de tamarindo con especias tradicionales; balance dulce-ácido que reconforta. Perfecto para las noches frías del sur.',
        prices: [{ amount: 14000 }],
        image: 'hervidos',
      },
      {
        id: 'hervido-maracuya',
        name: 'Hervido Maracuyá',
        description:
          'Infusión caliente de maracuyá con especias; toque de licor nacional. Aromático, reconfortante y auténtico del sur.',
        prices: [{ amount: 10000 }],
      },
    ],
  },
  {
    id: 'bebidas-cerveza-artesanal',
    name: 'Cerveza artesanal',
    kitchen: 'bebidas',
    items: [
      {
        id: 'bbc-cajica',
        name: 'BBC Cajicá',
        prices: [
          { label: 'Copa 330 ml', amount: 12000 },
          { label: 'Pinta 460 ml', amount: 14500 },
          { label: 'Jarra 1.000 ml', amount: 33000 },
        ],
      },
      {
        id: 'castiza',
        name: 'Castiza',
        prices: [
          { label: 'Copa 330 ml', amount: 12500 },
          { label: 'Pinta 460 ml', amount: 16000 },
          { label: 'Jarra 1.000 ml', amount: 36000 },
        ],
      },
    ],
  },
  {
    id: 'bebidas-jirafas',
    name: 'Jirafas de cerveza',
    kitchen: 'bebidas',
    items: [
      { id: 'jirafa-club-colombia', name: 'Jirafa Club Colombia', prices: [{ amount: 70000 }] },
      { id: 'jirafa-bbc', name: 'Jirafa BBC', prices: [{ amount: 105000 }] },
      { id: 'jirafa-castiza', name: 'Jirafa Castiza', prices: [{ amount: 115000 }] },
    ],
  },
  {
    id: 'bebidas-cervezas-importadas',
    name: 'Cervezas importadas',
    kitchen: 'bebidas',
    items: [
      { id: 'stella-artois', name: 'Stella Artois', prices: [{ amount: 12000 }] },
      { id: 'corona', name: 'Corona', prices: [{ amount: 12000 }] },
    ],
  },
  {
    id: 'bebidas-cervezas-nacionales',
    name: 'Cervezas nacionales',
    kitchen: 'bebidas',
    items: [
      { id: 'club-colombia', name: 'Club Colombia', prices: [{ amount: 10000 }] },
      { id: 'poker', name: 'Poker', prices: [{ amount: 9000 }] },
      { id: 'michela-sal', name: 'Michela tu cerveza · Sal', prices: [{ amount: 4000 }] },
      { id: 'michela-tajin', name: 'Michela tu cerveza · Tajín', prices: [{ amount: 5000 }] },
    ],
  },
  {
    id: 'bebidas-licores-whisky',
    name: 'Licores · Whisky',
    kitchen: 'bebidas',
    items: [
      { id: 'buchanans-18', name: 'Buchanan’s 18 Años', prices: [{ amount: 600000 }] },
      { id: 'buchanans-12', name: 'Buchanan’s 12 Años', prices: [{ amount: 320000 }] },
      { id: 'buchanans-master', name: 'Buchanan’s Máster', prices: [{ amount: 380000 }] },
      { id: 'chivas', name: 'Chivas', prices: [{ amount: 290000 }] },
      { id: 'jack-daniels-fire', name: 'Jack Daniels Fire', prices: [{ amount: 250000 }] },
      { id: 'jack-daniels-apple', name: 'Jack Daniels Apple', prices: [{ amount: 250000 }] },
      { id: 'jack-daniels-honey', name: 'Jack Daniels Honey', prices: [{ amount: 250000 }] },
      { id: 'jack-daniels-tennessee', name: 'Jack Daniels Tennessee', prices: [{ amount: 250000 }] },
      { id: 'old-parr', name: 'Old Parr', prices: [{ amount: 290000 }] },
    ],
  },
  {
    id: 'bebidas-licores-ginebra',
    name: 'Licores · Ginebra',
    kitchen: 'bebidas',
    items: [
      { id: 'ginebra-hendricks', name: 'Hendricks', prices: [{ amount: 380000 }] },
      { id: 'ginebra-bombay', name: 'Bombay', prices: [{ amount: 310000 }] },
      { id: 'ginebra-gordons', name: 'Gordons', prices: [{ amount: 190000 }] },
    ],
  },
  {
    id: 'bebidas-licores-tequila',
    name: 'Licores · Tequila',
    kitchen: 'bebidas',
    items: [
      { id: 'don-julio-70', name: 'Don Julio 70', prices: [{ amount: 580000 }] },
      { id: 'don-julio-reposado', name: 'Don Julio Reposado', prices: [{ amount: 500000 }] },
      { id: 'don-julio-blanco', name: 'Don Julio Blanco', prices: [{ amount: 400000 }] },
      { id: 'jimador-reposado', name: 'Jimador Reposado', prices: [{ amount: 210000 }] },
      { id: 'jimador-silver', name: 'Jimador Silver', prices: [{ amount: 210000 }] },
      { id: 'olmeca-reposado', name: 'Olmeca Reposado', prices: [{ amount: 170000 }] },
      { id: 'olmeca-silver', name: 'Olmeca Silver', prices: [{ amount: 170000 }] },
      { id: '1800-silver', name: '1800 Silver', prices: [{ amount: 360000 }] },
      { id: '1800-reposado', name: '1800 Reposado', prices: [{ amount: 390000 }] },
    ],
  },
  {
    id: 'bebidas-licores-importados',
    name: 'Licores · Importados',
    kitchen: 'bebidas',
    items: [
      {
        id: 'smirnoff-tamarindo',
        name: 'Smirnoff Tamarindo',
        prices: [
          { label: 'Botella', amount: 120000 },
          { label: 'Media', amount: 70000 },
        ],
      },
      { id: 'jagermeister', name: 'Jagermeister', prices: [{ amount: 190000 }] },
      { id: 'baileys', name: 'Baileys', prices: [{ amount: 130000 }] },
    ],
  },
  {
    id: 'bebidas-licores-aguardiente',
    name: 'Licores · Aguardiente',
    kitchen: 'bebidas',
    items: [
      {
        id: 'aguardiente-narino',
        name: 'Aguardiente Nariño',
        prices: [
          { label: 'Botella', amount: 120000 },
          { label: 'Media', amount: 70000 },
        ],
      },
      { id: 'aguardiente-amarillo', name: 'Aguardiente Amarillo', prices: [{ label: 'Botella', amount: 120000 }] },
      { id: 'aguardiente-antioqueno', name: 'Aguardiente Antioqueño', prices: [{ label: 'Botella', amount: 120000 }] },
    ],
  },
  {
    id: 'bebidas-licores-ron',
    name: 'Licores · Ron',
    kitchen: 'bebidas',
    items: [
      {
        id: 'ron-viejo-de-caldas',
        name: 'Ron Viejo de Caldas',
        prices: [
          { label: 'Botella', amount: 130000 },
          { label: 'Media', amount: 75000 },
        ],
      },
      {
        id: 'ron-viejo-de-caldas-8',
        name: 'Ron Viejo de Caldas 8 Años',
        prices: [{ label: 'Botella', amount: 180000 }],
      },
      { id: 'zacapa-12', name: 'Zacapa 12 Años', prices: [{ label: 'Botella', amount: 280000 }] },
      { id: 'zacapa-23', name: 'Zacapa 23 Años', prices: [{ label: 'Botella', amount: 480000 }] },
    ],
  },
  {
    id: 'bebidas-sin-licor',
    name: 'Bebidas sin licor',
    kitchen: 'bebidas',
    items: [
      { id: 'mocktail-cold-brew-tonic', name: 'Mocktail Cold Brew Tonic', prices: [{ amount: 15000 }] },
      { id: 'mocktail-cold-maracuya', name: 'Mocktail Cold Maracuyá', prices: [{ amount: 15000 }] },
      { id: 'malteada-cafe', name: 'Malteada de café', prices: [{ amount: 15000 }] },
      { id: 'malteada-oreo', name: 'Malteada de Oreo', prices: [{ amount: 15000 }] },
      { id: 'soda-feijoa-ruda', name: 'Soda feijoa ruda', prices: [{ amount: 14000 }] },
      { id: 'soda-eucalipto-pina', name: 'Soda eucalipto piña', prices: [{ amount: 14000 }] },
      { id: 'soda-albahaca-morada', name: 'Soda albahaca morada', prices: [{ amount: 14000 }] },
      { id: 'soda-hierbabuena', name: 'Soda de hierbabuena', prices: [{ amount: 14000 }] },
      { id: 'soda-maracuya-congona', name: 'Soda de maracuyá congona', prices: [{ amount: 14000 }] },
      { id: 'soda-frutos-rojos', name: 'Soda de frutos rojos', prices: [{ amount: 14000 }] },
      { id: 'limonada-cafe', name: 'Limonada de café', prices: [{ amount: 14000 }] },
      { id: 'limonada-vino-tinto', name: 'Limonada de vino tinto', prices: [{ amount: 12000 }] },
      { id: 'limonada-coco', name: 'Limonada de coco', prices: [{ amount: 12000 }] },
      { id: 'limonada-hierbabuena', name: 'Limonada de hierbabuena', prices: [{ amount: 9000 }] },
      { id: 'limonada-natural', name: 'Limonada natural', prices: [{ amount: 7000 }] },
      {
        id: 'jugos-en-leche',
        name: 'Jugos en leche',
        description: 'Sabores: maracuyá, mora y lulo.',
        prices: [{ amount: 9000 }],
      },
      {
        id: 'jugos-en-agua',
        name: 'Jugos en agua',
        description: 'Sabores: maracuyá, mora, mango y lulo.',
        prices: [{ amount: 8000 }],
      },
      { id: 'electrolit', name: 'Electrolit', prices: [{ amount: 15000 }] },
      { id: 'gaseosas', name: 'Gaseosas', prices: [{ amount: 7000 }] },
      { id: 'red-bull', name: 'Red Bull', prices: [{ amount: 15000 }] },
      { id: 'soda', name: 'Soda', prices: [{ amount: 7000 }] },
      { id: 'botella-de-agua', name: 'Botella de agua', prices: [{ amount: 7000 }] },
      { id: 'gatorade', name: 'Gatorade', prices: [{ amount: 10000 }] },
    ],
  },
];
