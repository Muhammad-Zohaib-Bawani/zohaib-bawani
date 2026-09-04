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
              className="reveal bg-[var(--surface)] p-7 transition-colors duration-300 hover:bg-[var(--surface-2)] md:p-9"
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
