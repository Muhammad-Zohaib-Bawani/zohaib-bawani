import { stackLayers } from '@/data/portfolio';
import { SectionHeader } from './Section';

/**
 * "Beyond the Interface" — the layers of a product I actually work in,
 * drawn as a stack rather than listed as skills. The connective spine on the
 * left is the whole argument: these are not separate competencies.
 */
export function StackStrip() {
  return (
    <section id="identity" className="section">
      <div className="shell">
        <SectionHeader
          index="01"
          eyebrow="Engineering identity"
          title={
            <>
              Beyond the interface.
              <br />
              <span className="text-[var(--ink-3)]">I work the whole stack.</span>
            </>
          }
          standfirst="A feature is rarely one layer deep. These are the layers I move between when shipping one."
        />

        <ol className="mt-16 md:mt-20">
          {stackLayers.map((layer, i) => (
            <li
              key={layer.id}
              className="reveal group relative"
              style={{ '--reveal-delay': `${i * 70}ms` } as React.CSSProperties}
            >
              <div className="grid gap-x-8 gap-y-4 border-t border-[var(--line)] py-8 transition-colors duration-300 group-hover:border-[var(--line-2)] md:grid-cols-[4rem_minmax(0,11rem)_1fr] md:py-9">
                {/* Spine node */}
                <div className="flex items-center gap-4 md:block">
                  <span className="t-label text-[var(--ink-4)]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="font-display text-xl tracking-tight md:text-2xl">
                  {layer.label}
                </h3>

                <div>
                  <p className="t-body max-w-[46ch] text-[0.9375rem]">{layer.detail}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {layer.items.map((item) => (
                      <li key={item} className="chip">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Signal rule that sweeps in on hover — the only motion in the section. */}
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[var(--signal)] opacity-60 transition-transform duration-500 ease-out group-hover:scale-x-100"
              />
            </li>
          ))}
        </ol>
        <div className="border-t border-[var(--line)]" />
      </div>
    </section>
  );
}
