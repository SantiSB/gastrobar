import { useRef, useState, useLayoutEffect, type ReactNode, type CSSProperties } from 'react';
import { cn } from '../../../lib/cn';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms. */
  delay?: number;
  style?: CSSProperties;
}

/**
 * Scroll-reveal with progressive enhancement.
 *
 * Rendered VISIBLE on the server (SSR/SEO/no-JS safe). Once mounted,
 * JS arms it to a hidden state and reveals it when it scrolls into
 * view. Respects prefers-reduced-motion.
 */
export function Reveal({ children, className, delay = 0, style }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true);
      return;
    }

    setArmed(true);
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn('reveal-base', armed && !shown && 'reveal-hidden', shown && 'reveal-shown', className)}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}
