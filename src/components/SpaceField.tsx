'use client';

import { useEffect, useRef } from 'react';

/**
 * The ambient layer for the whole page: a star field painted once to a canvas,
 * plus a CSS grid veil and two static atmospheric washes.
 *
 * No animation frame loop — the drift is a CSS transform on the canvas element,
 * so it stays on the compositor and costs nothing on the main thread. This
 * replaces the previous three.js scene (~600KB) with roughly 40 lines.
 */
export function SpaceField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const paint = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      // Oversize so the slow drift never exposes an empty edge.
      const w = window.innerWidth * 1.1;
      const h = window.innerHeight * 1.1;

      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      // Density scales with area so phones don't render desktop star counts.
      const count = Math.round((w * h) / 5200);

      for (let i = 0; i < count; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        // Most stars are faint dust; a few are bright enough to read as stars.
        const bright = Math.random();
        const r = bright > 0.97 ? 1.25 : bright > 0.82 ? 0.85 : 0.55;
        const alpha = bright > 0.97 ? 0.72 : bright > 0.82 ? 0.4 : 0.18;

        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        // Cool white, very slightly blue — never coloured, never glowing.
        ctx.fillStyle = `rgba(206, 219, 245, ${alpha})`;
        ctx.fill();
      }
    };

    paint();

    // Repaint on resize only, debounced — a new random field is fine here.
    let t: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(t);
      t = setTimeout(paint, 200);
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      clearTimeout(t);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Ground wash: light gathers toward the top of the page. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 80% at 50% -10%, #0d1424 0%, #080b14 42%, var(--void) 78%)',
        }}
      />

      {/* Star field */}
      <canvas
        ref={ref}
        className="drift absolute -left-[5%] -top-[5%] opacity-90"
      />

      {/* Technical grid, masked to a soft ellipse */}
      <div className="grid-veil absolute inset-0" />

      {/* Two atmospheric washes. Static, low opacity, no blur animation. */}
      <div
        className="absolute -top-40 left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full"
        style={{ background: 'radial-gradient(circle, var(--signal-glow) 0%, transparent 65%)' }}
      />
      <div
        className="absolute bottom-0 right-[-10%] h-[36rem] w-[36rem] rounded-full opacity-40"
        style={{ background: 'radial-gradient(circle, rgb(91 140 255 / 0.1) 0%, transparent 68%)' }}
      />

      {/* Horizon: the page fades to true black at the base. */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-[var(--void)]" />
    </div>
  );
}
