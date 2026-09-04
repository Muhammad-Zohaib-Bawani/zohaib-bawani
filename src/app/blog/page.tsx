import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { posts } from '@/data/blog';
import { SectionHeader } from '@/components/Section';
import { Footer } from '@/components/Footer';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Writing',
  description:
    'Notes on building production systems: DNS and email infrastructure, onboarding flows, APIs, and the parts of a product users never see.',
  alternates: { canonical: '/blog' },
};

export default function BlogIndex() {
  return (
    <>
      <main id="main" className="pt-28">
        <section className="section">
          <div className="shell">
            <SectionHeader
              index="04"
              eyebrow="Writing"
              title="Notes from the parts users never see."
              standfirst="Short pieces on the infrastructure behind products: DNS, email delivery, onboarding flows, and the failure modes that only show up in production."
            />

            <div className="mt-14 divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {posts.map((p, i) => (
                <article
                  key={p.slug}
                  className="reveal py-9"
                  style={{ '--reveal-delay': `${i * 80}ms` } as React.CSSProperties}
                >
                  <Link href={`/blog/${p.slug}`} className="group block">
                    <div className="flex items-center gap-3">
                      <time className="t-mono text-[var(--ink-4)]" dateTime={p.date}>
                        {formatDate(p.date)}
                      </time>
                      <span className="h-px w-6 bg-[var(--line-2)]" aria-hidden />
                      <span className="t-label">{p.readingTime}</span>
                    </div>

                    <h2 className="t-h3 mt-4 flex items-baseline gap-2 transition-colors group-hover:text-[var(--signal)]">
                      {p.title}
                      <ArrowUpRight
                        size={16}
                        className="translate-y-0.5 text-[var(--ink-4)] transition-colors group-hover:text-[var(--signal)]"
                      />
                    </h2>

                    <p className="t-body mt-4 max-w-[68ch] text-[0.9375rem]">{p.standfirst}</p>

                    <ul className="mt-6 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <li key={t} className="chip">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </Link>
                </article>
              ))}
            </div>

            <Link href="/" className="btn btn-ghost mt-14">
              Back to portfolio
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

