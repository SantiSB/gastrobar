import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Icon } from '../ui/Icon';
import { Wordmark } from '../brand/Wordmark';
import { CONTACT_ITEMS } from '../../../data/site';

export function ContactSection() {
  return (
    <Section id="contacto" tone="surface">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <SectionHeading
            eyebrow="Contacto"
            title="Hablemos"
            lead="Escríbenos, síguenos o pásate a visitarnos. Estamos listos para recibirte con lo mejor del sur."
          />
          <div className="mt-8">
            <Wordmark variant="cream" height={36} />
          </div>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {CONTACT_ITEMS.map((item) => {
            const Wrapper = item.href ? 'a' : 'div';
            return (
              <li key={item.label}>
                <Wrapper
                  {...(item.href
                    ? {
                        href: item.href,
                        ...(item.href.startsWith('http')
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {}),
                      }
                    : {})}
                  className="flex h-full items-start gap-3.5 rounded-[var(--radius-md)] border border-[var(--color-line)] bg-surface-2 p-5 transition-[border-color,transform] duration-[var(--dur-base)] hover:border-[var(--color-line-strong)] hover:-translate-y-0.5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-green-700 text-cream">
                    <Icon name={item.icon} size={18} />
                  </span>
                  <div className="min-w-0">
                    <p className="eyebrow text-[color:var(--color-ink-faint)]">{item.label}</p>
                    <p className="mt-1 break-words font-medium text-cream">{item.value}</p>
                  </div>
                </Wrapper>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
