import { Wordmark } from '../brand/Wordmark';
import { Icon } from '../ui/Icon';
import { NAV_LINKS, SOCIALS, BRAND } from '../../../data/site';
import { ADDRESS, CITY } from '../../../lib/constants';

export function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-[var(--color-line)] bg-bg">
      <div className="container-berraco py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Wordmark variant="cream" height={34} />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[color:var(--color-ink-muted)]">
              {BRAND.tagline}. El gastrobar insignia del sur colombiano — {ADDRESS}, {CITY}.
            </p>
          </div>

          <nav aria-label="Secundaria">
            <p className="eyebrow mb-4 text-[color:var(--color-ink-faint)]">Explora</p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[color:var(--color-ink-muted)] transition-colors hover:text-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow mb-4 text-[color:var(--color-ink-faint)]">Síguenos</p>
            <ul className="flex gap-3">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-line)] text-cream transition-[border-color,background,transform] duration-[var(--dur-base)] hover:-translate-y-0.5 hover:border-[var(--color-line-strong)] hover:bg-[rgba(254,251,226,0.06)]"
                  >
                    <Icon name={social.icon} size={20} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-[var(--color-line)] pt-6 text-xs text-[color:var(--color-ink-faint)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Berraco Gastrobar. Todos los derechos reservados.</p>
          <p>Hecho con carácter en Pasto, Nariño.</p>
        </div>
      </div>
    </footer>
  );
}
