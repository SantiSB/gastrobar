import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Wordmark } from '../brand/Wordmark';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { NAV_LINKS } from '../../../data/site';
import { WHATSAPP_RESERVE_URL } from '../../../lib/constants';

export function Navbar() {
  const reduced = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <motion.header
      className="fixed inset-x-0 top-0"
      style={{
        zIndex: 'var(--z-nav)',
        background: scrolled || open ? 'rgba(6,26,18,0.92)' : 'transparent',
        backdropFilter: scrolled || open ? 'blur(18px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--color-line)' : 'transparent'}`,
        transition: 'background .35s ease, border-color .35s ease, backdrop-filter .35s ease',
      }}
      initial={reduced ? false : { y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <nav className="container-berraco flex h-16 items-center justify-between md:h-20" aria-label="Principal">
        <a href="#inicio" className="flex items-center" aria-label="Berraco Gastrobar — inicio">
          <Wordmark variant="cream" height={26} priority className="md:h-8" />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-ink-muted)] transition-colors duration-[var(--dur-base)] hover:text-cream"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button href={WHATSAPP_RESERVE_URL} target="_blank" rel="noopener noreferrer" variant="secondary">
            Reservar mesa
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] text-cream md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span className="relative block h-4 w-6">
            <span
              className="absolute left-0 block h-0.5 w-6 bg-current transition-all duration-[var(--dur-base)]"
              style={{ top: open ? 7 : 2, transform: open ? 'rotate(45deg)' : 'none' }}
            />
            <span
              className="absolute left-0 top-[7px] block h-0.5 w-6 bg-current transition-all duration-[var(--dur-base)]"
              style={{ opacity: open ? 0 : 1 }}
            />
            <span
              className="absolute left-0 block h-0.5 w-6 bg-current transition-all duration-[var(--dur-base)]"
              style={{ top: open ? 7 : 12, transform: open ? 'rotate(-45deg)' : 'none' }}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-[var(--color-line)] md:hidden"
          >
            <ul className="container-berraco flex flex-col py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-[var(--color-line)] py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--color-ink-muted)] transition-colors hover:text-cream"
                  >
                    {link.label}
                    <Icon name="arrow-right" size={16} className="text-sage" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="container-berraco pb-6">
              <Button
                href={WHATSAPP_RESERVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                block
                onClick={() => setOpen(false)}
              >
                <Icon name="whatsapp" size={18} />
                Reservar mesa
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
