import { ArrowDown } from 'lucide-react';
import { hayya, mailafiniti } from '@/data/portfolio';
import { SectionHeader } from './Section';

const ENTRIES = [
  {
    href: '#mailafiniti',
    n: '01',
    name: mailafiniti.name,
    category: mailafiniti.category,
    line: 'Marketing site, product portal, DNS and mailbox infrastructure, billing.',
    tech: mailafiniti.tech.slice(0, 4),
  },
  {
    href: '#hayya',
    n: '02',
    name: hayya.name,
    category: hayya.category,
    line: 'Three portals over one identity, authorization and workflow core.',
    tech: hayya.tech.slice(0, 4),
  },
];

/**
 * The contents page for the work that follows. A recruiter should be able to
 * stop here and still know what the two serious systems are.
 */
export function WorkIndex() {
  return (
    <section id="work" className="section">
      <div className="shell">
        <SectionHeader
          index="02"
          eyebrow="Featured work"
          title="Two systems, built end to end."
          standfirst="Both are full case studies below — the product, the constraint, what I built, and what made it hard."
        />

        <div className="mt-16 border-t border-[var(--line)] md:mt-20">
          {ENTRIES.map((e, i) => (
            <a
              key={e.href}
              href={e.href}
              className="reveal group grid gap-x-8 gap-y-5 border-b border-[var(--line)] py-10 transition-colors duration-300 hover:bg-[rgb(255_255_255/0.014)] md:grid-cols-[4rem_1fr_auto] md:py-12"
              style={{ '--reveal-delay': `${i * 90}ms` } as React.CSSProperties}
            >
              <span className="t-label pt-2 text-[var(--ink-4)] transition-colors group-hover:text-[var(--signal)]">
                {e.n}
              </span>

              <div className="min-w-0">
                <span className="t-label">{e.category}</span>
                <h3 className="t-h2 mt-2.5 text-[clamp(1.75rem,4vw,2.75rem)] transition-colors duration-300 group-hover:text-[var(--signal)]">
                  {e.name}
                </h3>
                <p className="t-body mt-3 max-w-[48ch]">{e.line}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {e.tech.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <span className="flex items-start pt-2 text-[var(--ink-4)] transition-all duration-300 group-hover:translate-y-1 group-hover:text-[var(--signal)]">
                <ArrowDown size={20} aria-hidden />
                <span className="sr-only">Read the {e.name} case study</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
