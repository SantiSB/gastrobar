import type { CatarsisEvent, EventCard, MenuItem, MenuCategory, NavLink, Service } from '../types/catarsis.types';

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

export const FEATURED_EVENT: CatarsisEvent = {
  id: 'evt-001',
  name: 'NOCHE ROJA Vol. 3',
  date: 'Sábado 28 de junio',
  time: '10:00 PM',
  description:
    'La tercera edición de la noche más intensa de Pasto. Reggaetón, trap y urbano hasta el amanecer. Visuals en vivo, shots de bienvenida y el dancefloor más ardiente del sur.',
  tickets: [
    { name: 'General', price: '$20.000', description: 'Acceso general + consumo mínimo' },
    { name: 'VIP', price: '$35.000', description: 'Zona VIP + shot de bienvenida' },
    { name: 'Mesa Grupal', price: 'Desde $180.000', description: 'Mesa reservada (4–8 personas)' },
  ],
  badges: ['Boletas limitadas', 'Ingreso con QR', 'Reserva segura', 'Pago online'],
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'menu-001',
    icon: '🥃',
    name: 'Licores & Botellas',
    description: 'Aguardiente, vodka, ron, whisky y más. Botellas con servicio en mesa.',
  },
  {
    id: 'menu-002',
    icon: '🍹',
    name: 'Cocteles & Shots',
    description: 'Mezclas artesanales, tragos de autor y shots para encender la noche.',
  },
  {
    id: 'menu-003',
    icon: '🎉',
    name: 'Combos para Grupos',
    description: 'Paquetes todo incluido para 4 a 20 personas. Licor, hielo y mixers.',
  },
];

export const FULL_MENU: MenuCategory[] = [
  {
    id: 'licores',
    icon: '🥃',
    name: 'Licores & Botellas',
    items: [
      { name: 'Aguardiente Blanco Nariño', price: '$80.000', description: '750ml · botella entera' },
      { name: 'Aguardiente Sin Azúcar', price: '$85.000', description: '750ml · botella entera' },
      { name: 'Vodka Smirnoff', price: '$120.000', description: '750ml · con mixers incluidos' },
      { name: 'Ron Medellín Añejo', price: '$100.000', description: '750ml · botella entera' },
      { name: 'Whisky Old Parr', price: '$230.000', description: '750ml · con hielo y vaso' },
      { name: 'Tequila José Cuervo', price: '$160.000', description: '750ml · con sal y limón' },
      { name: 'Champaña Mumm', price: '$180.000', description: '750ml · presentación especial' },
    ],
  },
  {
    id: 'cocteles',
    icon: '🍹',
    name: 'Cocteles & Shots',
    items: [
      { name: 'Catarsis Rojo', price: '$18.000', description: 'Vodka · granadina · limón · hielo' },
      { name: 'Noche Negra', price: '$18.000', description: 'Ron oscuro · cola · menta · limón' },
      { name: 'Fuego Libre', price: '$20.000', description: 'Tequila · mango · chile · limón' },
      { name: 'Margarita Clásica', price: '$18.000', description: 'Tequila · triple sec · limón' },
      { name: 'Mojito de la Casa', price: '$16.000', description: 'Ron · menta · azúcar · soda' },
      { name: 'Shot de Tequila', price: '$8.000', description: 'Con sal y limón' },
      { name: 'Shot de Vodka', price: '$8.000', description: 'Frío, doble filtrado' },
      { name: 'Shot de Aguardiente', price: '$5.000', description: 'Bien frío' },
    ],
  },
  {
    id: 'grupos',
    icon: '🎉',
    name: 'Combos para Grupos',
    items: [
      { name: 'Pack Dúo', price: '$60.000', description: '2 personas · 1 botella mediana + mixers + hielo' },
      { name: 'Pack Cuarteto', price: '$120.000', description: '4 personas · 1 botella grande + mixers + hielo' },
      { name: 'Pack Sexteto', price: '$160.000', description: '6 personas · 1 botella + shots + mixers' },
      { name: 'Pack VIP Octet', price: '$220.000', description: '8 personas · 2 botellas + shots + mesa reservada' },
      { name: 'Pack Privado', price: 'Consultar', description: '+15 personas · licor + mesa + servicio completo' },
    ],
  },
];

export const SERVICES: Service[] = [
  {
    id: 'srv-001',
    icon: '🎂',
    name: 'Cumpleaños & Celebraciones',
    description: 'Decoración, torta, sorpresa y atención VIP para hacer tu noche inolvidable.',
  },
  {
    id: 'srv-002',
    icon: '🏢',
    name: 'Eventos Empresariales',
    description: 'Cierra el local o reserva zona exclusiva. Perfecto para after office y team building.',
  },
  {
    id: 'srv-003',
    icon: '🔊',
    name: 'Sonido & Luces Pro',
    description: 'Sistema de sonido profesional y show de luces para crear la atmósfera perfecta.',
  },
  {
    id: 'srv-004',
    icon: '📺',
    name: 'Pantallas & Transmisiones',
    description: 'Pantallas LED HD para partidos, peleas UFC, conciertos y contenido especial.',
  },
  {
    id: 'srv-005',
    icon: '🪑',
    name: 'Reservas de Mesas',
    description: 'Asegura tu espacio con reserva anticipada online. Sin filas, sin perder el plan.',
  },
  {
    id: 'srv-006',
    icon: '🍾',
    name: 'Licor & Combos VIP',
    description: 'Paquetes especiales de licor con mixers, hielo y servicio para grupos grandes.',
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
