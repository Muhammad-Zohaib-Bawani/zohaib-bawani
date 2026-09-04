import { ArrowUpRight, Lock } from 'lucide-react';
import { otherProjects } from '@/data/portfolio';
import { SectionHeader } from './Section';

/**
 * Secondary work. Deliberately lighter than the case studies — same design
 * language, a fraction of the visual weight.
 */
export function OtherWork() {
  return (
    <section id="other-work" className="section border-t border-[var(--line)]">
      <div className="shell">
        <SectionHeader
          index="03"
          eyebrow="Also built"
          title="Other production work."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius)] border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
          {otherProjects.map((p, i) => (
            <article
              key={p.name}
              className="reveal bg-[var(--surface)] p-7 transition-colors duration-300 hover:bg-[var(--surface-2)] md:p-9 md:[&:last-child:nth-child(odd)]:col-span-2"
              style={{ '--reveal-delay': `${i * 80}ms` } as React.CSSProperties}
            >
              <span className="t-label">{p.category}</span>
              <h3 className="t-h3 mt-4">{p.name}</h3>
              <p className="t-body mt-4 text-[0.9375rem]">{p.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
              {'link' in p && p.link ? (
                <a
                  href={p.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 flex items-baseline gap-2"
                >
                  <span className="link-ext t-mono">{p.link.label}</span>
                  <ArrowUpRight
                    size={13}
                    className="translate-y-0.5 text-[var(--ink-4)] transition-colors duration-200 group-hover:text-[var(--signal)]"
                  />
                </a>
              ) : 'note' in p && p.note ? (
                <p className="t-mono mt-6 flex items-baseline gap-2 text-[var(--ink-4)]">
                  <Lock size={12} className="translate-y-0.5" aria-hidden />
                  {p.note}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
