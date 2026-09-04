import { ArrowUpRight } from 'lucide-react';
import { person } from '@/data/portfolio';
import { ContactForm } from './ContactForm';

const CHANNELS = [
  { label: 'Email', value: person.email, href: `mailto:${person.email}` },
  { label: 'LinkedIn', value: 'in/zaibing', href: person.linkedin },
  { label: 'GitHub', value: 'Muhammad-Zohaib-Bawani', href: person.github },
  { label: 'Résumé', value: 'PDF', href: person.resume },
];

export function Contact() {
  return (
    <section id="contact" className="section border-t border-[var(--line)]">
      <div className="shell">
        <div className="grid gap-x-16 gap-y-14 lg:grid-cols-[1fr_1fr]">
          <div className="reveal">
            <div className="flex items-center gap-3">
              <span className="t-label text-[var(--signal)]">07</span>
              <span className="h-px w-8 bg-[var(--line-2)]" aria-hidden />
              <span className="t-label">Contact</span>
            </div>

            <h2 className="t-h2 mt-7 text-[clamp(2.25rem,4.6vw,3.6rem)]">
              Have a complex
              <br />
              <span className="text-[var(--ink-3)]">product to build?</span>
            </h2>

            <p className="t-lead mt-7 max-w-[46ch]">
              I am open to full-stack engineering roles and product work. If it touches interfaces,
              APIs, data and the infrastructure underneath, it is the kind of problem I want.
            </p>

            <dl className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius)] border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
              {CHANNELS.map((c) => (
                <div key={c.label} className="bg-[var(--surface)] p-5">
                  <dt className="t-label">{c.label}</dt>
                  <dd className="mt-2">
                    <a
                      href={c.href}
                      target={c.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="group inline-flex items-baseline gap-1.5"
                    >
                      <span className="link-ext t-mono">{c.value}</span>
                      <ArrowUpRight
                        size={12}
                        className="translate-y-0.5 text-[var(--ink-4)] transition-colors group-hover:text-[var(--signal)]"
                        aria-hidden
                      />
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="reveal lg:pt-24">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
