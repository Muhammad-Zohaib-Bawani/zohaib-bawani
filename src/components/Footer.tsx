import { person } from '@/data/portfolio';

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] py-12">
      <div className="shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-sm tracking-tight">{person.name}</p>
          <p className="t-mono mt-1 text-[var(--ink-4)]">
            {person.role} — {person.location}
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {[
            { label: 'Work', href: '/#work' },
            { label: 'Experience', href: '/#experience' },
            { label: 'Writing', href: '/blog' },
            { label: 'About', href: '/#about' },
            { label: 'Contact', href: '/#contact' },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[var(--ink-3)] transition-colors hover:text-[var(--ink)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <p className="t-mono text-[var(--ink-4)]">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
