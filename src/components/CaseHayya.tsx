import { hayya as h } from '@/data/portfolio';

/* Three portals, one shared core. The geometry is the architecture. */
const C = { x: 240, y: 190 };
const R = 142;
const NODES = [
  { angle: -90, key: 'B2C' },
  { angle: 30, key: 'B2B' },
  { angle: 150, key: 'ADMIN' },
] as const;

const pos = (angle: number) => ({
  x: C.x + R * Math.cos((angle * Math.PI) / 180),
  y: C.y + R * Math.sin((angle * Math.PI) / 180) * 0.78,
});

function PortalDiagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 380"
      className={className}
      role="img"
      aria-label="Diagram: B2C, B2B and admin portals connected to one shared core of authentication, role-based access, APIs, SQL Server, workflow and audit trail"
    >
      <defs>
        <radialGradient id="hayya-core-glow">
          <stop offset="0%" stopColor="var(--signal)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="var(--signal)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx={C.x} cy={C.y} r="150" fill="url(#hayya-core-glow)" />

      {/* Shared orbit the three portals sit on */}
      <ellipse
        cx={C.x}
        cy={C.y}
        rx={R}
        ry={R * 0.78}
        fill="none"
        stroke="var(--signal)"
        strokeOpacity="0.16"
        strokeDasharray="2 6"
      />

      {/* Every portal talks to the same core — draw that, literally. */}
      {NODES.map(({ angle, key }) => {
        const p = pos(angle);
        return (
          <line
            key={key}
            x1={C.x}
            y1={C.y}
            x2={p.x}
            y2={p.y}
            stroke="var(--signal)"
            strokeOpacity="0.24"
          />
        );
      })}

      {/* Core */}
      <circle cx={C.x} cy={C.y} r="56" fill="var(--surface-2)" stroke="var(--line-2)" />
      <text
        x={C.x}
        y={C.y - 6}
        textAnchor="middle"
        fill="var(--ink-2)"
        fontSize="8.5"
        letterSpacing="1.5"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        SHARED
      </text>
      <text
        x={C.x}
        y={C.y + 8}
        textAnchor="middle"
        fill="var(--ink-2)"
        fontSize="8.5"
        letterSpacing="1.5"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        CORE
      </text>

      {/* Portals */}
      {NODES.map(({ angle, key }) => {
        const p = pos(angle);
        return (
          <g key={key}>
            <circle cx={p.x} cy={p.y} r="34" fill="var(--surface-3)" stroke="var(--line-2)" />
            <text
              x={p.x}
              y={p.y + 3.5}
              textAnchor="middle"
              fill="var(--ink)"
              fontSize="10"
              letterSpacing="1.2"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {key}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export function CaseHayya() {
  return (
    <article
      id="hayya"
      aria-labelledby="hayya-title"
      className="section relative"
    >
      <div className="shell">
        <header className="reveal">
          <div className="flex flex-wrap items-center gap-3">
            <span className="t-label text-[var(--signal)]">Case study 02</span>
            <span className="h-px w-8 bg-[var(--line-2)]" aria-hidden />
            <span className="t-label">{h.category}</span>
            <span className="chip border-[var(--line-2)] text-[var(--amber)]">{h.kind}</span>
          </div>

          <h2 id="hayya-title" className="t-display mt-7">
            {h.name}
          </h2>
          <p className="t-mono mt-3 text-[var(--ink-4)]">{h.fullName}</p>
          <p className="t-lead mt-6 max-w-[58ch]">{h.summary}</p>
        </header>

        {/* Problem + diagram side by side: the constraint, then its shape. */}
        <div className="mt-20 grid gap-x-16 gap-y-14 border-t border-[var(--line)] pt-14 lg:grid-cols-2">
          <section className="reveal">
            <div className="flex items-baseline gap-3">
              <span className="t-label text-[var(--signal)]">01</span>
              <h3 className="t-h3">The problem</h3>
            </div>
            {h.problem.map((p, i) => (
              <p key={i} className="t-body mt-5">
                {p}
              </p>
            ))}
          </section>

          <div className="reveal flex items-center justify-center">
            <PortalDiagram className="h-auto w-full max-w-[480px]" />
          </div>
        </div>

        {/* The three portals */}
        <section className="reveal mt-20 border-t border-[var(--line)] pt-14">
          <div className="flex items-baseline gap-3">
            <span className="t-label text-[var(--signal)]">02</span>
            <h3 className="t-h3">The system</h3>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-[var(--radius)] border border-[var(--line)] bg-[var(--line)] md:grid-cols-3">
            {h.portals.map((p) => (
              <div key={p.key} className="bg-[var(--surface)] p-6 md:p-7">
                <span className="t-mono font-medium text-[var(--signal)]">{p.key}</span>
                <h4 className="t-h3 mt-4 text-xl">{p.title}</h4>
                <p className="t-body mt-3 text-[0.9375rem]">{p.detail}</p>
              </div>
            ))}
          </div>

          {/* The shared core, spelled out. */}
          <div className="mt-px flex flex-wrap items-center gap-x-3 gap-y-3 rounded-[var(--radius)] border border-[var(--line)] bg-[var(--surface-2)] p-6">
            <span className="t-label mr-2">Shared across all three</span>
            {h.core.map((c) => (
              <span key={c} className="chip">
                {c}
              </span>
            ))}
          </div>
        </section>

        {/* Role / complexity / result */}
        <div className="reveal mt-20 grid gap-x-16 gap-y-12 border-t border-[var(--line)] pt-14 md:grid-cols-2">
          <section>
            <div className="flex items-baseline gap-3">
              <span className="t-label text-[var(--signal)]">03</span>
              <h3 className="t-h3">My role</h3>
            </div>
            {h.role.map((p, i) => (
              <p key={i} className="t-body mt-5">
                {p}
              </p>
            ))}
            <ul className="mt-7 flex flex-wrap gap-2">
              {h.tech.map((t) => (
                <li key={t} className="chip">
                  {t}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <div className="flex items-baseline gap-3">
              <span className="t-label text-[var(--signal)]">04</span>
              <h3 className="t-h3">What made it hard</h3>
            </div>
            <ul className="mt-5 space-y-4">
              {h.complexity.map((c) => (
                <li key={c} className="flex gap-3.5">
                  <span
                    aria-hidden
                    className="mt-2.5 size-1 shrink-0 rounded-full bg-[var(--signal)]"
                  />
                  <span className="t-body">{c}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 border-l-2 border-[var(--amber)] pl-5 font-display text-xl leading-snug tracking-tight text-[var(--ink)]">
              {h.outcome}
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
