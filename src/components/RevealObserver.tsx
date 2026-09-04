'use client';

import { useEffect } from 'react';

/**
 * One observer for the whole page. Any element (server-rendered or not) opts in
 * with className="reveal"; all the motion lives in CSS. This keeps every section
 * a server component instead of dragging an animation library into each one.
 */
export function RevealObserver() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>('.reveal:not(.is-in)');

    // No IntersectionObserver (or reduced motion handled in CSS): show everything.
    if (typeof IntersectionObserver === 'undefined') {
      nodes.forEach((n) => n.classList.add('is-in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('is-in');
          io.unobserve(entry.target); // reveal once, then stop paying for it
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return null;
}
