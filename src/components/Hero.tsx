import { ArrowDown, ArrowUpRight, FileText } from 'lucide-react';
import { person } from '@/data/portfolio';
import { OrbitSystem } from './OrbitSystem';

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92svh] items-center pb-24 pt-36 md:min-h-screen md:pt-40"
    >
      <div className="shell-wide grid w-full items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div>
          <p className="reveal t-label flex items-center gap-2.5">
            <span
              className="inline-block size-1.5 rounded-full bg-[var(--signal)]"
              style={{ animation: 'pulse-dot 3s ease-in-out infinite' }}
              aria-hidden
            />
            {person.role}
            <span className="hidden sm:inline"> — {person.location}</span>
          </p>

          {/* The H1 is a claim about range, not a greeting. */}
          <h1 className="reveal t-display mt-7" style={{ '--reveal-delay': '70ms' } as React.CSSProperties}>
            {person.headline[0]}
            <br />
            <span className="text-[var(--ink-3)]">{person.headline[1]}</span>
          </h1>

          <p
            className="reveal t-lead mt-8 max-w-[54ch]"
            style={{ '--reveal-delay': '140ms' } as React.CSSProperties}
          >
            {person.intro}
          </p>

          <div
            className="reveal mt-10 flex flex-wrap items-center gap-3"
            style={{ '--reveal-delay': '210ms' } as React.CSSProperties}
          >
            <a href="#work" className="btn btn-primary">
              See the work
              <ArrowDown size={15} />
            </a>
            <a href={person.resume} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
              <FileText size={15} />
              Résumé
            </a>
            <a
              href={person.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost hidden sm:inline-flex"
            >
              GitHub
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Two names a recruiter can recognise, above the fold, as links. */}
          <dl
            className="reveal mt-14 flex flex-wrap gap-x-10 gap-y-5 border-t border-[var(--line)] pt-7"
            style={{ '--reveal-delay': '280ms' } as React.CSSProperties}
          >
            <div>
              <dt className="t-label">Currently</dt>
              <dd className="mt-1.5 text-sm text-[var(--ink-2)]">
                Full-stack engineering at MicrosysX
              </dd>
            </div>
            <div>
              <dt className="t-label">Building</dt>
              <dd className="mt-1.5 text-sm text-[var(--ink-2)]">
                <a
                  href="https://mailafiniti.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-ext"
                >
                  MailAfiniti
                </a>
                , business email hosting
              </dd>
            </div>
          </dl>
        </div>

        <div className="reveal relative hidden lg:block" style={{ '--reveal-delay': '160ms' } as React.CSSProperties}>
          <OrbitSystem className="h-auto w-full max-w-[560px]" />
        </div>
      </div>
    </section>
  );
}
