import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../../lib/cn';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'md' | 'lg';

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Stretch to the container width (mobile-first default at call site). */
  block?: boolean;
  children: ReactNode;
  className?: string;
}

type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { as?: 'a' };
type NativeButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { as: 'button' };
type ButtonProps = AnchorProps | NativeButtonProps;

const BASE =
  'inline-flex items-center justify-center gap-2 font-semibold uppercase rounded-[var(--radius-md)] ' +
  'transition-[background,color,box-shadow,transform,border-color] duration-[var(--dur-base)] ease-[var(--ease-brand)] ' +
  'active:scale-[0.97] disabled:opacity-45 disabled:pointer-events-none select-none';

const VARIANTS: Record<ButtonVariant, string> = {
  // Primary action — brand orange (nightlife energy)
  primary:
    'bg-orange text-cream shadow-[var(--shadow-glow-orange)] hover:bg-orange-500 hover:-translate-y-0.5',
  // Cream — high contrast on dark green
  secondary:
    'bg-cream text-green-950 hover:bg-white hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow-cream)]',
  // Outlined — quiet on dark backgrounds
  outline:
    'bg-transparent text-cream border border-[var(--color-line-strong)] hover:border-cream hover:bg-[rgba(254,251,226,0.06)]',
  // Ghost — text-only affordance
  ghost: 'bg-transparent text-cream hover:text-orange-400',
};

const SIZES: Record<ButtonSize, string> = {
  md: 'text-[0.72rem] tracking-[0.16em] px-6 py-3.5 min-h-[44px]',
  lg: 'text-[0.78rem] tracking-[0.16em] px-8 py-4 min-h-[52px]',
};

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    block = false,
    className,
    children,
    ...rest
  } = props;

  const classes = cn(BASE, VARIANTS[variant], SIZES[size], block && 'w-full', className);

  if (props.as === 'button') {
    const { as: _as, ...buttonRest } = rest as NativeButtonProps;
    return (
      <button className={classes} {...buttonRest}>
        {children}
      </button>
    );
  }

  const { as: _a, ...anchorRest } = rest as AnchorProps;
  return (
    <a className={classes} {...anchorRest}>
      {children}
    </a>
  );
}
