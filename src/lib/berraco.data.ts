import type { BerracoEvent, EventCard, MenuItem, MenuCategory, NavLink, Service } from '../types/berraco.types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Menú', href: '#menu' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Reservas', href: '#reservas' },
];

export const JULY_EVENTS: EventCard[] = [
  {
    id: 'evt-jul-01',
    name: 'TRANCE OSCURO',
    subtitle: 'Noche Electrónica',
    date: 'Viernes 4 de julio',
    time: '10:00 PM',
    genre: 'Electrónica · House · Techno',
    description: 'Luces, beats y basslines que te transportan. La noche más electrizante del sur.',
    color: '#00d4ff',
    colorBg: 'rgba(0,212,255,0.08)',
    colorGlow: 'rgba(0,212,255,0.12)',
  },
  {
    id: 'evt-jul-02',
    name: 'CORRIDOS BRAVOS',
    subtitle: 'Noche Regional',
    date: 'Sábado 12 de julio',
    time: '9:00 PM',
    genre: 'Corridos · Regional Mexicano',
    description: 'Los temas más pesados del regional y corridos tumbados en el corazón de Pasto.',
    color: '#39ff14',
    colorBg: 'rgba(57,255,20,0.07)',
    colorGlow: 'rgba(57,255,20,0.12)',
  },
  {
    id: 'evt-jul-03',
    name: 'NOCHE DE SALSA',
    subtitle: 'Noche Tropical',
    date: 'Sábado 19 de julio',
    time: '8:00 PM',
    genre: 'Salsa · Cumbia · Tropical',
    description: 'El ritmo que mueve a Pasto. Salsa caliente, ambiente festivo y pura energía.',
    color: '#ffd700',
    colorBg: 'rgba(255,215,0,0.07)',
    colorGlow: 'rgba(255,215,0,0.12)',
  },
  {
    id: 'evt-jul-04',
    name: 'PURA LLORADERA',
    subtitle: 'Noche de Despecho',
    date: 'Sábado 26 de julio',
    time: '9:00 PM',
    genre: 'Despecho · Vallenato · Popular',
    description: 'La noche para llorar a gritos con los mejores temas del despecho colombiano.',
    color: '#bf40ff',
    colorBg: 'rgba(191,64,255,0.07)',
    colorGlow: 'rgba(191,64,255,0.12)',
  },
];

export const FEATURED_EVENT: BerracoEvent = {
  id: 'evt-001',
  name: 'EXPERIENCIA BERRACO Vol. 1',
  date: 'Sábado 28 de junio',
  time: '7:00 PM',
  description:
    'La primera edición de nuestra noche insignia. Menú de degustación de 5 tiempos, cócteles de autor y una ambientación única en el corazón del Palermo pastuso.',
  tickets: [
    { name: 'Experiencia', price: '$120.000', description: '5 tiempos + cóctel de bienvenida' },
    { name: 'Maridaje Completo', price: '$180.000', description: 'Menú + maridaje por cada tiempo' },
    { name: 'Mesa Grupal', price: 'Desde $480.000', description: 'Mesa de 4 personas · experiencia completa' },
  ],
  badges: ['Cupos limitados', 'Ingreso con QR', 'Reserva segura', 'Pago online'],
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'menu-001',
    icon: '🍽️',
    name: 'Gastronomía',
    description: 'Platos de autor con ingredientes frescos y técnica de vanguardia. Del campo a la mesa.',
  },
  {
    id: 'menu-002',
    icon: '🍸',
    name: 'Coctelería de Autor',
    description: 'Cócteles únicos creados por nuestros bartenders con técnicas artesanales y productos locales.',
  },
  {
    id: 'menu-003',
    icon: '🍷',
    name: 'Maridajes',
    description: 'Experiencias completas que combinan gastronomía y coctelería para momentos verdaderamente únicos.',
  },
];

export const FULL_MENU: MenuCategory[] = [
  {
    id: 'gastronomia',
    icon: '🍽️',
    name: 'Gastronomía',
    items: [
      { name: 'Tabla de quesos y charcutería', price: '$42.000', description: 'Selección de quesos artesanales · jamón · mermelada de frutas' },
      { name: 'Bruschetta de autor', price: '$28.000', description: 'Pan artesanal · tomate · albahaca · aceite de oliva extra virgen' },
      { name: 'Ceviche de camarón', price: '$38.000', description: 'Camarón fresco · limón · ají · cilantro · cebolla morada' },
      { name: 'Tartar de res', price: '$45.000', description: 'Lomo fino · alcaparras · mostaza Dijon · yema curada' },
      { name: 'Carpaccio de pulpo', price: '$48.000', description: 'Pulpo cocido · aceite de oliva · pimentón ahumado · limón' },
      { name: 'Pinchos de lomo', price: '$35.000', description: 'Lomo al carbón · chimichurri · papas rústicas' },
      { name: 'Pasta al pesto con camarones', price: '$52.000', description: 'Pasta fresca · pesto de albahaca · camarones salteados' },
    ],
  },
  {
    id: 'cocteleria',
    icon: '🍸',
    name: 'Coctelería de Autor',
    items: [
      { name: 'Berraco Sour', price: '$24.000', description: 'Whisky · jengibre · limón · clara de huevo · bitters' },
      { name: 'Verde que te quiero verde', price: '$22.000', description: 'Gin · pepino · albahaca · tónica premium · pepino encurtido' },
      { name: 'La Mala', price: '$20.000', description: 'Mezcal · tamarindo · chile · limón · sal ahumada' },
      { name: 'Negroni de la Casa', price: '$22.000', description: 'Gin · Campari · vermut rojo · piel de naranja' },
      { name: 'Espresso Martini', price: '$24.000', description: 'Vodka · licor de café · espresso doble · espuma' },
      { name: 'Mojito Gastro', price: '$20.000', description: 'Ron añejo · hierbabuena · azúcar de caña · soda · lima' },
      { name: 'Gin & Tonic Botánico', price: '$22.000', description: 'Gin premium · tónica · frutos rojos · romero fresco' },
    ],
  },
  {
    id: 'maridajes',
    icon: '🍷',
    name: 'Maridajes',
    items: [
      { name: 'Maridaje Clásico', price: '$85.000', description: '3 tiempos gastronómicos + copa de vino o cóctel por tiempo' },
      { name: 'Experiencia de Autor', price: '$120.000', description: '5 tiempos + cóctel de bienvenida + maridaje curado' },
      { name: 'Tabla + Copa', price: '$65.000', description: 'Tabla de charcutería · 2 copas de vino de selección' },
      { name: 'Cena del Chef', price: '$180.000', description: 'Menú degustación 7 tiempos · maridaje completo · por persona' },
      { name: 'Maridaje Express', price: '$55.000', description: '2 tiempos gastronómicos + 1 cóctel de autor + postre' },
    ],
  },
];

export const SERVICES: Service[] = [
  {
    id: 'srv-001',
    icon: '🕯️',
    name: 'Cenas Privadas',
    description: 'Espacio exclusivo para cenas íntimas con menú personalizado y ambientación única.',
  },
  {
    id: 'srv-002',
    icon: '🍷',
    name: 'Maridaje de Autor',
    description: 'Chef y bartender crean una experiencia sensorial a medida exclusivamente para tu grupo.',
  },
  {
    id: 'srv-003',
    icon: '🎂',
    name: 'Celebraciones Especiales',
    description: 'Cumpleaños y fechas especiales con decoración, torta y atención VIP personalizada.',
  },
  {
    id: 'srv-004',
    icon: '🏢',
    name: 'Eventos Corporativos',
    description: 'Almuerzos, team building y lanzamientos con propuesta gastronómica de alto nivel.',
  },
  {
    id: 'srv-005',
    icon: '🪑',
    name: 'Reservas de Mesa',
    description: 'Asegura tu mesa online y garantiza tu experiencia Berraco sin filas ni esperas.',
  },
  {
    id: 'srv-006',
    icon: '🎨',
    name: 'Experiencias VIP',
    description: 'Menús exclusivos, cócteles únicos y servicio personalizado para grupos especiales.',
  },
];

export const QR_PATTERN: number[] = [
  1,1,1,0,1,1,1,
  1,0,1,0,1,0,1,
  1,1,1,1,0,1,1,
  0,1,0,1,1,0,0,
  1,1,1,0,1,0,1,
  1,0,0,1,0,1,1,
  1,1,1,0,1,1,1,
];
