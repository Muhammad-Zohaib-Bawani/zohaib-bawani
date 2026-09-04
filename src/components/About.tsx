import { education, person } from '@/data/portfolio';
import { SectionHeader } from './Section';

/*
 * No portrait here on purpose. The previous avatar.png was a neon "cyberpunk
 * hacker" illustration that fought the rest of the art direction. Drop a real
 * photograph in and this can become a two-column layout again.
 */
export function About() {
  return (
    <section id="about" className="section border-t border-[var(--line)]">
      <div className="shell">
        <SectionHeader index="06" eyebrow="About" title="Who is writing this code." />

        <div className="mt-14 grid gap-x-16 gap-y-14 md:mt-16 lg:grid-cols-[1.35fr_1fr]">
          <div className="reveal">
            {person.bio.map((p, i) => (
              <p key={i} className="t-lead mt-6 max-w-[56ch] first:mt-0">
                {p}
              </p>
            ))}
          </div>

          <aside className="reveal lg:pt-1">
            <div className="panel-2 p-6 md:p-7">
              <h3 className="t-label">At a glance</h3>
              <dl className="mt-5 divide-y divide-[var(--line)]">
                {[
                  { k: 'Based in', v: person.location },
                  { k: 'Focus', v: 'Full-stack product engineering' },
                  { k: 'Primary stack', v: 'Next.js · .NET Core · SQL Server' },
                  { k: 'Also comfortable in', v: 'Node.js · PostgreSQL · MongoDB' },
                ].map((row) => (
                  <div key={row.k} className="flex flex-wrap justify-between gap-x-6 gap-y-1 py-3">
                    <dt className="t-label">{row.k}</dt>
                    <dd className="t-mono text-[var(--ink-2)]">{row.v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-8">
              <h3 className="t-label">Education</h3>
              <ul className="mt-5 space-y-5">
                {education.map((e) => (
                  <li key={e.degree}>
                    <p className="text-[0.9375rem] leading-snug text-[var(--ink)]">{e.degree}</p>
                    <p className="t-mono mt-1.5 text-[var(--ink-4)]">{e.institution}</p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
