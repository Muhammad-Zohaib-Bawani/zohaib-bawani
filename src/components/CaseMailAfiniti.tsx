import { ArrowUpRight, Check } from 'lucide-react';
import { mailafiniti as m } from '@/data/portfolio';

/** Numbered movement heading, used throughout the case study. */
function Movement({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="t-label text-[var(--signal)]">{n}</span>
      <h3 className="t-h3">{title}</h3>
    </div>
  );
}

export function CaseMailAfiniti() {
  return (
    <article
      id="mailafiniti"
      aria-labelledby="mailafiniti-title"
      className="relative border-y border-[var(--line)] bg-[var(--surface)]"
    >
      {/* A single warm wash marks this as the flagship without shouting. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-96"
        style={{
          background: 'radial-gradient(60% 100% at 50% 0%, rgb(91 140 255 / 0.08), transparent 70%)',
        }}
      />

      <div className="shell relative py-[var(--section-y)]">
        {/* ---------------------------------------------------------- */}
        {/* Masthead                                                    */}
        {/* ---------------------------------------------------------- */}
        <header className="reveal">
          <div className="flex flex-wrap items-center gap-3">
            <span className="t-label text-[var(--signal)]">Case study 01</span>
            <span className="h-px w-8 bg-[var(--line-2)]" aria-hidden />
            <span className="t-label">{m.category}</span>
            <span className="chip border-[var(--line-2)] text-[var(--amber)]">{m.kind}</span>
          </div>

          <h2 id="mailafiniti-title" className="t-display mt-7">
            {m.name}
          </h2>

          <p className="mt-6 max-w-[42ch] font-display text-2xl leading-tight tracking-tight text-[var(--ink-2)] md:text-3xl">
            &ldquo;{m.positioning}&rdquo;
          </p>
          <p className="t-lead mt-5 max-w-[58ch]">{m.summary}</p>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {m.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-baseline gap-2"
              >
                <span className="link-ext t-mono">{l.label}</span>
                <ArrowUpRight
                  size={13}
                  className="translate-y-0.5 text-[var(--ink-4)] transition-transform duration-200 group-hover:-translate-y-0 group-hover:text-[var(--signal)]"
                />
                <span className="t-label">{l.note}</span>
              </a>
            ))}
          </div>
        </header>

        {/* ---------------------------------------------------------- */}
        {/* 01 / 02 — the product and the problem                       */}
        {/* ---------------------------------------------------------- */}
        <div className="reveal mt-24 grid gap-x-16 gap-y-12 border-t border-[var(--line)] pt-14 md:grid-cols-2">
          <section>
            <Movement n="01" title="The product" />
            <p className="t-body mt-5">
              MailAfiniti gives a small business professional email on its own domain: custom-domain
              mailboxes, aliases, webmail, IMAP and SMTP client access, spam and virus filtering,
              migration from an existing provider, and an admin surface to run the team.
            </p>
          </section>

          <section>
            <Movement n="02" title="The challenge" />
            {m.problem.map((p, i) => (
              <p key={i} className="t-body mt-5">
                {p}
              </p>
            ))}
          </section>
        </div>

        {/* ---------------------------------------------------------- */}
        {/* 03 / 04 — my role, and the pipeline that proves it          */}
        {/* ---------------------------------------------------------- */}
        <div className="mt-24 grid gap-x-16 gap-y-14 border-t border-[var(--line)] pt-14 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="reveal lg:sticky lg:top-28 lg:self-start">
            <Movement n="03" title="My role" />
            {m.role.map((p, i) => (
              <p key={i} className="t-body mt-5">
                {p}
              </p>
            ))}

            <div className="panel-2 mt-8 p-5">
              <p className="t-label">Worth being precise about</p>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-[var(--ink-2)]">
                I did not build the landing page for someone else&rsquo;s product. I built the
                acquisition surface <em className="not-italic text-[var(--ink)]">and</em> the
                platform behind it — every stage in the pipeline.
              </p>
            </div>

            <ul className="mt-8 flex flex-wrap gap-2">
              {m.tech.map((t) => (
                <li key={t} className="chip">
                  {t}
                </li>
              ))}
            </ul>
          </section>

          {/* Pipeline: the end-to-end funnel, as a single rail. */}
          <section className="reveal">
            <Movement n="04" title="End to end" />
            <p className="t-body mt-5 max-w-[46ch]">
              Every stage between a stranger and a working mailbox, and where my work sat in it.
            </p>

            <ol className="mt-9">
              {m.pipeline.map((s, i) => (
                <li key={s.step} className="group relative flex gap-5 pb-7 last:pb-0">
                  {/* Rail */}
                  <div className="relative flex w-4 shrink-0 justify-center">
                    {i < m.pipeline.length - 1 && (
                      <span
                        aria-hidden
                        className="absolute top-3 h-full w-px bg-[var(--line-2)]"
                      />
                    )}
                    <span
                      aria-hidden
                      className="relative mt-1.5 size-2.5 rounded-full border border-[var(--signal)] bg-[var(--surface)] transition-colors duration-300 group-hover:bg-[var(--signal)]"
                    />
                  </div>

                  <div className="-mt-0.5 min-w-0 flex-1 pb-1">
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <span className="t-label text-[var(--ink-4)]">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h4 className="font-display text-[1.0625rem] tracking-tight">{s.step}</h4>
                    </div>
                    <p className="t-mono mt-1 text-[var(--ink-3)]">{s.note}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </div>

        {/* ---------------------------------------------------------- */}
        {/* 05 — infrastructure                                         */}
        {/* ---------------------------------------------------------- */}
        <section className="reveal mt-24 border-t border-[var(--line)] pt-14">
          <Movement n="05" title="The infrastructure underneath" />
          <p className="t-body mt-5 max-w-[62ch]">
            The hardest part of the product is not the interface. It is getting four DNS records
            published correctly at a registrar the product does not control, then proving they
            propagated before a customer sends their first message.
          </p>

          <div className="panel-2 mt-9 overflow-hidden">
            <div className="flex flex-col gap-1 border-b border-[var(--line)] px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <span className="t-label">Domain authentication — schematic</span>
              <span className="t-mono truncate text-[var(--ink-4)]">yourcompany.com</span>
            </div>

            <div className="grid md:grid-cols-[minmax(0,1fr)_auto_minmax(0,0.85fr)]">
              {/* Records */}
              <ul className="divide-y divide-[var(--line)]">
                {m.dns.map((r) => (
                  <li key={r.record} className="flex items-start gap-4 px-5 py-4">
                    <span className="t-mono w-14 shrink-0 pt-px font-medium text-[var(--signal)]">
                      {r.record}
                    </span>
                    <span className="text-[0.875rem] leading-relaxed text-[var(--ink-2)]">
                      {r.purpose}
                    </span>
                    <Check
                      size={14}
                      className="ml-auto mt-1 shrink-0 text-[var(--ink-4)]"
                      aria-hidden
                    />
                  </li>
                ))}
              </ul>

              <div
                aria-hidden
                className="hidden w-px bg-[var(--line)] md:block"
              />

              {/* Outcome chain */}
              <div className="flex flex-col justify-center gap-px border-t border-[var(--line)] px-5 py-6 md:border-t-0">
                {['Records verified', 'Mailbox provisioned', 'Mail routed', 'Inbox delivery'].map(
                  (step, i) => (
                    <div key={step} className="flex items-center gap-3 py-2">
                      <span
                        aria-hidden
                        className="size-1.5 shrink-0 rounded-full"
                        style={{
                          background: i === 3 ? 'var(--amber)' : 'var(--signal)',
                          opacity: 0.5 + i * 0.16,
                        }}
                      />
                      <span className="t-mono text-[var(--ink-2)]">{step}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* 06 / 07 — billing and result                                */}
        {/* ---------------------------------------------------------- */}
        <div className="reveal mt-24 grid gap-x-16 gap-y-12 border-t border-[var(--line)] pt-14 md:grid-cols-2">
          <section>
            <Movement n="06" title="Billing" />
            {m.billing.map((p, i) => (
              <p key={i} className="t-body mt-5">
                {p}
              </p>
            ))}
          </section>

          <section>
            <Movement n="07" title="Result" />
            {m.outcome.map((p, i) => (
              <p key={i} className="t-body mt-5">
                {p}
              </p>
            ))}
          </section>
        </div>
      </div>
    </article>
  );
}
