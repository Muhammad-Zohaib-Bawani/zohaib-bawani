'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
];

export function Nav() {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock the page behind the mobile sheet so it can't scroll underneath.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[var(--ink)] focus:px-4 focus:py-2 focus:text-sm focus:text-[var(--void)]"
      >
        Skip to content
      </a>

      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter,padding] duration-300',
          compact
            ? 'border-b border-[var(--line)] bg-[rgb(5_7_13/0.72)] py-3 backdrop-blur-xl'
            : 'border-b border-transparent py-5',
        )}
      >
        <nav className="shell-wide flex items-center justify-between" aria-label="Primary">
          <a
            href="#top"
            className="group flex items-baseline gap-2.5"
            aria-label="Zohaib Bawani — home"
          >
            <span className="font-display text-[0.95rem] font-medium tracking-tight text-[var(--ink)]">
              Zohaib Bawani
            </span>
            <span className="t-label hidden text-[var(--ink-4)] sm:inline">Full-Stack Engineer</span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-md px-3 py-2 text-sm text-[var(--ink-2)] transition-colors hover:text-[var(--ink)]"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn btn-ghost ml-3 py-2 text-[0.8125rem]">
              Let&rsquo;s build something
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 p-2 text-[var(--ink-2)] md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile sheet. Full-bleed and simple — no nested animation on a phone. */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="fixed inset-0 z-40 bg-[rgb(5_7_13/0.97)] backdrop-blur-xl md:hidden"
      >
        <nav className="shell flex h-full flex-col justify-center gap-1" aria-label="Mobile">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-[var(--line)] py-5 font-display text-2xl tracking-tight"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-8 justify-center"
          >
            Let&rsquo;s build something
          </a>
        </nav>
      </div>
    </>
  );
}
