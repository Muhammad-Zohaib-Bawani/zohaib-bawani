import { experience } from '@/data/portfolio';
import { SectionHeader } from './Section';

/**
 * Career, most recent first. The rail brightens toward the present rather than
 * relying on an alternating-card layout, which never survives a narrow viewport.
 */
export function Timeline() {
  return (
    <section id="experience" className="section border-t border-[var(--line)]">
      <div className="shell">
        <SectionHeader
          index="05"
          eyebrow="Experience"
          title="Four years of production work."
          standfirst="Increasing ownership: from frontend builds, to platform work, to full-stack delivery across services and pipelines."
        />

        <ol className="relative mt-16 md:mt-20">
          {/* The rail. Brightest at the present, fading into the past. */}
          <span
            aria-hidden
            className="absolute left-0 top-2 hidden w-px md:block"
            style={{
              bottom: '3rem',
              background:
                'linear-gradient(to bottom, var(--signal), var(--line-2) 45%, transparent)',
            }}
          />

          {experience.map((job, i) => (
            <li
              key={job.company}
              className="reveal group relative pb-14 md:pl-12"
              style={{ '--reveal-delay': `${i * 80}ms` } as React.CSSProperties}
            >
              {/* Rail node */}
              <span
                aria-hidden
                className="absolute -left-[3.5px] top-2 hidden size-2 rounded-full bg-[var(--surface-3)] ring-2 ring-[var(--void)] transition-colors duration-300 group-hover:bg-[var(--signal)] md:block"
                style={i === 0 ? { background: 'var(--signal)' } : undefined}
              />

              <div className="border-b border-[var(--line)] pb-12">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                  <span className="t-mono text-[var(--signal)]">{job.period}</span>
                  {i === 0 && (
                    <span className="t-label text-[var(--amber)]">Current</span>
                  )}
                </div>

                <h3 className="t-h3 mt-4">{job.role}</h3>
                <p className="mt-1.5 text-[1.0625rem] text-[var(--ink-2)]">{job.company}</p>
                <p className="t-body mt-4 max-w-[52ch] text-[0.9375rem]">{job.summary}</p>

                <ul className="mt-6 grid gap-3 md:max-w-[60ch]">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3.5">
                      <span
                        aria-hidden
                        className="mt-2.5 size-1 shrink-0 rounded-full bg-[var(--ink-4)]"
                      />
                      <span className="text-[0.9375rem] leading-relaxed text-[var(--ink-2)]">
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
