/**
 * The hero visual: a product at the centre with the layers I work across in
 * orbit around it. Pure SVG + CSS — no canvas, no WebGL, no JS. It is the
 * argument of the whole site rendered as a diagram.
 *
 * A node follows its ellipse by rotating inside a non-uniformly scaled group,
 * which is cheaper and steadier than an offset-path animation.
 */

const RINGS = [
  { label: 'Interface', rx: 70, period: 34, start: 0 },
  { label: 'API', rx: 114, period: 52, start: 128 },
  { label: 'Data', rx: 158, period: 76, start: 244 },
  { label: 'Infrastructure', rx: 202, period: 104, start: 62 },
];

/** Vertical squash — turns the circular orbits into a viewed-at-an-angle system. */
const TILT = 0.52;
const C = 220;

export function OrbitSystem({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 440 440"
      className={className}
      role="img"
      aria-label="Diagram: interface, API, data and infrastructure layers in orbit around a product core"
    >
      <defs>
        {/* Orbits fade toward the back of the system so it reads as depth. */}
        <linearGradient id="orbit-stroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--signal)" stopOpacity="0.05" />
          <stop offset="45%" stopColor="var(--signal)" stopOpacity="0.34" />
          <stop offset="100%" stopColor="var(--signal)" stopOpacity="0.05" />
        </linearGradient>
        <radialGradient id="core-glow">
          <stop offset="0%" stopColor="var(--signal)" stopOpacity="0.34" />
          <stop offset="100%" stopColor="var(--signal)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx={C} cy={C} r="104" fill="url(#core-glow)" />

      {RINGS.map(({ label, rx, period, start }) => (
        <g key={label} transform={`translate(${C} ${C}) scale(1 ${TILT})`}>
          <ellipse
            cx="0"
            cy="0"
            rx={rx}
            ry={rx}
            fill="none"
            stroke="url(#orbit-stroke)"
            strokeWidth={1 / TILT}
            vectorEffect="non-scaling-stroke"
          />

          {/* Rotating arm + node. The static start angle keeps the four nodes
              distributed even when prefers-reduced-motion freezes them. */}
          <g transform={`rotate(${start})`}>
            <g
              style={{
                animation: `orbit ${period}s linear infinite`,
                transformOrigin: '0px 0px',
              }}
            >
              <line
                x1="0"
                y1="0"
                x2={rx}
                y2="0"
                stroke="var(--signal)"
                strokeOpacity="0.13"
                strokeWidth={1 / TILT}
                vectorEffect="non-scaling-stroke"
              />
              <circle cx={rx} cy="0" r={4 / TILT} fill="var(--signal)" opacity="0.14" />
              <circle cx={rx} cy="0" r={1.9 / TILT} fill="var(--signal)" />
            </g>
          </g>
        </g>
      ))}

      {/* Ring labels sit on the flat plane of the diagram, not on the orbits. */}
      {RINGS.map(({ label, rx }) => (
        <text
          key={label}
          x={C}
          y={C - rx * TILT - 10}
          textAnchor="middle"
          fill="var(--ink-3)"
          fontSize="8.5"
          letterSpacing="1.6"
          style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}
        >
          {label.toUpperCase()}
        </text>
      ))}

      {/* Core */}
      <circle cx={C} cy={C} r="27" fill="var(--surface-3)" stroke="var(--line-2)" />
      <circle cx={C} cy={C} r="4" fill="var(--amber)">
        <animate attributeName="opacity" values="1;0.4;1" dur="4s" repeatCount="indefinite" />
      </circle>
      <text
        x={C}
        y={C + 44}
        textAnchor="middle"
        fill="var(--ink-2)"
        fontSize="8.5"
        letterSpacing="1.6"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        PRODUCT
      </text>
    </svg>
  );
}
