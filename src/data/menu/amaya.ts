import type { MenuCategory } from '../../types/berraco.types';

/* ============================================================
   BERRACO — Cocina AMAYA · Fusión México × Argentina
   Fuego, picante mexicano y asado argentino.
   ============================================================ */

export const AMAYA_CATEGORIES: MenuCategory[] = [
  {
    id: 'amaya-entradas',
    name: 'Entradas',
    kitchen: 'amaya',
    items: [
      {
        id: 'croquetas-platano-maduro',
        name: 'Croquetas de Plátano Maduro',
        description:
          'Croquetas hechas con base de plátano maduro rellenas de queso doble crema, tocineta ahumada y jalapeños, acompañadas de crema agria de albahaca con un toque de salsa criolla argentina.',
        prices: [{ amount: 22000 }],
        image: 'croquetas',
        signature: true,
      },
      {
        id: 'tapitas-pan-baguette-chorizo',
        name: 'Tapitas de pan baguette y chorizo',
        description:
          'Pan con mantequilla de ajo confitado a la plancha, acompañado de chorizo argentino ahogado en salsa de chiles y vegetales tatemados, queso panela.',
        prices: [{ amount: 22500 }],
      },
      {
        id: 'tacos-birria',
        name: 'Tacos de Birria (x3)',
        description:
          'Carne en cocción lenta con chiles y vegetales tatemados, tortillas de maíz, crema de aguacate, cebolla encurtida y queso campesino.',
        prices: [{ amount: 28000 }],
      },
      {
        id: 'tacos-al-pastor',
        name: 'Tacos al Pastor (x3)',
        description:
          'Carne al pastor, tortillas de maíz, piña asada, pico de gallo, queso doble crema y crema de aguacate.',
        prices: [{ amount: 28000 }],
      },
    ],
  },
  {
    id: 'amaya-fuertes',
    name: 'Fuertes',
    kitchen: 'amaya',
    items: [
      {
        id: 'baby-beef-chilaquiles',
        name: 'Baby Beef con Chilaquiles Rojos',
        description:
          '300 g de baby beef al término deseado a la parrilla, acompañado de chilaquiles rojos hechos a base de tomates y chile jalapeño confitado, coronados con queso campesino, crema agria con finas hierbas y rábanos encurtidos.',
        prices: [{ amount: 42000 }],
        image: 'baby-beef',
        signature: true,
      },
      {
        id: 'langostinos-machos',
        name: 'Langostinos Machos',
        description:
          'Langostinos a la parrilla, bañados con una salsa macha en reducción de piña, coronando un espejo de puré de papa sobre una base de alioli de queso parmesano.',
        prices: [{ amount: 48000 }],
      },
      {
        id: 'churrasco-papas-salteadas',
        name: 'Churrasco con Papas Salteadas',
        description:
          '300 g de churrasco al término deseado a la parrilla, acompañado de papas salteadas con chile morita y hierbas andinas, coronadas con un aire de aguacate y aromatizadas con pimienta.',
        prices: [{ amount: 45000 }],
      },
      {
        id: 'risotto-chorizo-argentino',
        name: 'Risotto con Chorizo Argentino',
        description:
          'Risotto cremoso con chorizo argentino salteado, reducción de vinagre balsámico con chile quebrado, mayonesa de albahaca, rábanos encurtidos y brotes de cilantro.',
        prices: [{ amount: 38000 }],
      },
      {
        id: 'pollo-salsa-maiz-dulce',
        name: 'Pollo en Salsa de Maíz Dulce',
        description:
          '280 g de suprema de pollo a la parrilla, coronada con salsa de maíz dulce y chiles chipotle, acompañada de croquetas de plátano maduro rellenas de queso doble crema, tocineta y chile jalapeño, coronadas con crema de aguacate y queso parmesano.',
        prices: [{ amount: 38000 }],
      },
      {
        id: 'milanesa-pesto-guajillo',
        name: 'Milanesa al Pesto Guajillo',
        description:
          '280 g de milanesa de pollo dorada con queso mozzarella, salsa pesto y chile guajillo. Acompañada de papas enchiladas al horno, crema de aguacate, pepinos encurtidos, pico de gallo reinterpretado y queso doble crema.',
        prices: [{ amount: 40000 }],
      },
      {
        id: 'chuleton-frutos-amarillos',
        name: 'Chuletón de Cerdo con Frutos Amarillos',
        description:
          '300 g de chuletón de cerdo a la parrilla con salsa de frutos amarillos, acompañado de papas rústicas con queso parmesano, pico de gallo y mayonesa de chile guajillo.',
        prices: [{ amount: 43500 }],
        image: 'chuleton-frutos-amarillos',
      },
      {
        id: 'costillas-glaseadas-entequiladas',
        name: 'Costillas Glaseadas Entequiladas',
        description:
          '350 g de costillas de cerdo a la parrilla glaseadas en una reducción de panela, tequila y salsa criolla, acompañadas de esquites, crema agria, chimichurri y aguacate.',
        prices: [{ amount: 48500 }],
        image: 'costillas-glaseadas',
        signature: true,
      },
      {
        id: 'ceviche-mexoargentino',
        name: 'Ceviche Mexoargentino',
        description:
          'Camarones marinados en zumo de limón y vino blanco, mezclados con chile morita, cebolla morada y tomate fresco, servido con tostadas mexicanas crujientes.',
        prices: [{ amount: 38000 }],
        image: 'ceviche',
      },
      {
        id: 'choripan-argentino-ahogado',
        name: 'Choripán Argentino Ahogado',
        description:
          'Chorizo argentino a la parrilla servido en pan artesanal sellado con mantequilla de ajo, ahogado en una salsa de vegetales y chiles tatemados. Acompañado de mayonesa de chile chipotle, cebolla morada encurtida, pico de gallo reinterpretado con toques cítricos y un delicado aire de aguacate.',
        prices: [{ amount: 35000 }],
      },
      {
        id: 'costillas-frutos-amarillos',
        name: 'Costillas en Salsa de Frutos Amarillos',
        description:
          '350 g de costillas en cocción lenta, bañadas en una salsa de frutos amarillos aromatizada con albahaca, acompañadas de papas en cascos con chimichurri y mayonesa de cilantro. 2.º puesto en Costilleros Pasto.',
        prices: [{ amount: 48000 }],
      },
      {
        id: 'quesadillas-pollo-parrilla',
        name: 'Quesadillas con Pollo a la Parrilla',
        description:
          'Tortilla de harina rellena de pollo a la parrilla con chimichurri, queso doble crema, mermelada de mortiño y ubilla, crema agria.',
        prices: [{ amount: 30000 }],
      },
      {
        id: 'burritos-parrillada-argentina',
        name: 'Burritos Parrillada Argentina',
        description:
          'Tortilla de harina rellena de parrillada argentina (cerdo y pollo), pico de gallo, frijoles refritos y mayonesa de jalapeños.',
        prices: [{ amount: 32000 }],
      },
      {
        id: 'alitas-parrilla-bufalo-parmesano',
        name: 'Alitas a la Parrilla, Búfalo y Parmesano',
        description:
          'Alitas bañadas en salsa búfalo de mango y parmesano, acompañadas de papas en cascos, ranch de chimichurri y vegetales frescos.',
        prices: [{ amount: 32000 }],
      },
      {
        id: 'papas-al-pastor',
        name: 'Papas al Pastor',
        description:
          'Base de papas con queso doble crema, crema de aguacate, crema agria, pico de gallo, rábanos encurtidos, carne al pastor y salsa al pastor.',
        prices: [{ amount: 30000 }],
      },
      {
        id: 'sandwich-mexoargentino',
        name: 'Sándwich Mexoargentino',
        description:
          'Relleno de chorizo argentino y pollo a la parrilla, queso doble crema, mermelada de mortiño y ubilla, pico de gallo y aguacate fresco.',
        prices: [{ amount: 28000 }],
      },
      {
        id: 'combo-amaya',
        name: 'Combo Amaya',
        description:
          '3 piezas de alitas de la casa, 1 quesadilla, 150 g de costilla, 1 burrito más porción de papas.',
        prices: [{ amount: 65000 }],
      },
    ],
  },
  {
    id: 'amaya-postres',
    name: 'Postres',
    kitchen: 'amaya',
    items: [
      {
        id: 'alfajores-on-fire',
        name: 'Alfajores on Fire',
        description:
          'Clásicos alfajores argentinos rellenos con crema pastelera a base de frutos rojos y bañados en un caramelo salado de tamarindo, con un toque de chile ancho. Coronados con frutos secos tostados que aportan textura y equilibrio entre lo dulce, lo picante y lo ácido.',
        prices: [{ amount: 18000 }],
      },
    ],
  },
];
