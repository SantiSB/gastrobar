import type { SVGProps } from 'react';

export type IconName =
  | 'instagram'
  | 'whatsapp'
  | 'mail'
  | 'phone'
  | 'map'
  | 'clock'
  | 'arrow-right'
  | 'ticket'
  | 'utensils'
  | 'calendar'
  | 'external';

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
  /** Accessible label; when omitted the icon is aria-hidden (decorative). */
  title?: string;
}

const PATHS: Record<IconName, React.ReactNode> = {
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  whatsapp: (
    <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Zm4.5 12.3c-.2.6-1.1 1.1-1.6 1.1-.4 0-1 .1-3.4-1s-3.7-3.5-3.8-3.7c-.1-.2-.8-1.1-.8-2s.5-1.4.7-1.6c.2-.2.4-.2.5-.2h.4c.2 0 .3 0 .5.4l.7 1.7c.1.1.1.3 0 .5l-.4.5c-.1.2-.3.3-.1.6.1.2.6 1 1.3 1.7.9.8 1.6 1 1.8 1.1.2.1.4.1.5-.1l.6-.7c.2-.2.3-.2.5-.1l1.6.8c.2.1.4.2.4.3.1.1.1.5 0 .8Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </>
  ),
  phone: (
    <path d="M6.6 3.5 4 4.2c-.6.2-1 .8-1 1.5C3 13.6 10.4 21 18.3 21c.7 0 1.3-.4 1.5-1l.7-2.6c.2-.7-.2-1.4-.8-1.7l-3-1.2c-.5-.2-1.1-.1-1.5.3l-.9 1c-2-.9-3.6-2.5-4.5-4.5l1-.9c.4-.4.5-1 .3-1.5L9.3 4.3c-.3-.6-1-1-1.7-.8Z" />
  ),
  map: (
    <>
      <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  'arrow-right': <path d="M5 12h14M13 6l6 6-6 6" />,
  ticket: (
    <>
      <path d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2 2 2 0 0 0 0 4 2 2 0 0 1-2 2v0a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2 2 2 0 0 0 0-4 2 2 0 0 0 0-4Z" />
      <path d="M15 6v12" strokeDasharray="2 2" />
    </>
  ),
  utensils: (
    <>
      <path d="M5 3v7a2 2 0 0 0 4 0V3M7 10v11" />
      <path d="M17 3c-1.5 0-3 1.8-3 5s1 4 2 4v9" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <path d="M4 10h16M8 3v4M16 3v4" />
    </>
  ),
  external: <path d="M14 5h5v5M19 5l-9 9M12 5H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5" />,
};

export function Icon({ name, size = 20, title, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {PATHS[name]}
    </svg>
  );
}
