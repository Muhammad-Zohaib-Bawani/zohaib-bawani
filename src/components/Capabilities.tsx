import { capabilities } from '@/data/portfolio';
import { SectionHeader } from './Section';

/**
 * Skills grouped by the kind of work they make possible. No logo wall, no
 * invented proficiency bars — a hiring manager can read the grouping alone
 * and know what I can be handed.
 */
export function Capabilities() {
  return (
    <section id="capabilities" className="section border-t border-[var(--line)]">
      <div className="shell">
        <SectionHeader
          index="04"
          eyebrow="Capabilities"
          title="What I work with."
          standfirst="Grouped by what they are for, and weighted toward what I have actually shipped."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius)] border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <section
              key={c.title}
              className="reveal bg-[var(--surface)] p-7 transition-colors duration-300 hover:bg-[var(--surface-2)]"
              style={{ '--reveal-delay': `${(i % 3) * 70}ms` } as React.CSSProperties}
            >
              <div className="flex items-baseline gap-3">
                <span className="t-label text-[var(--ink-4)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-lg tracking-tight">{c.title}</h3>
              </div>

              <ul className="mt-6 space-y-2.5">
                {c.items.map((item) => (
                  <li key={item} className="t-mono flex items-center gap-3 text-[var(--ink-2)]">
                    <span
                      aria-hidden
                      className="h-px w-3 shrink-0 bg-[var(--line-3)]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
