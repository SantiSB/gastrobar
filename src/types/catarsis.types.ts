export interface TicketTier {
  name: string;
  price: string;
  description: string;
}

export interface CatarsisEvent {
  id: string;
  name: string;
  date: string;
  time: string;
  description: string;
  tickets: TicketTier[];
  badges: string[];
}

export interface MenuItem {
  id: string;
  icon: string;
  name: string;
  description: string;
}

export interface Service {
  id: string;
  icon: string;
  name: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface EventCard {
  id: string;
  name: string;
  subtitle: string;
  date: string;
  time: string;
  genre: string;
  description: string;
  color: string;
  colorBg: string;
  colorGlow: string;
}

export interface FullMenuItem {
  name: string;
  description?: string;
  price: string;
}

export interface MenuCategory {
  id: string;
  icon: string;
  name: string;
  items: FullMenuItem[];
}
