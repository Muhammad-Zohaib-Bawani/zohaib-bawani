import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { type Post } from '@/data/blog';
import { formatDate } from '@/lib/utils';

/**
 * The post list, shared by the home page section and /blog so the two never
 * drift apart. Numbered rows: it reads as an index even when it holds one item.
 */
export function PostList({ posts, limit }: { posts: Post[]; limit?: number }) {
  const shown = limit ? posts.slice(0, limit) : posts;

  return (
    <ol className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
      {shown.map((p, i) => (
        <li
          key={p.slug}
          className="reveal"
          style={{ '--reveal-delay': `${i * 80}ms` } as React.CSSProperties}
        >
          <Link
            href={`/blog/${p.slug}`}
            className="group grid gap-y-4 py-8 transition-colors md:grid-cols-[auto_1fr] md:gap-x-10 md:py-9"
          >
            {/* Row number, so a single post still reads as the first of a series. */}
            <span className="t-mono pt-0.5 text-[var(--ink-4)] transition-colors group-hover:text-[var(--signal)]">
              {String(i + 1).padStart(2, '0')}
            </span>

            <div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <time className="t-mono text-[var(--ink-4)]" dateTime={p.date}>
                  {formatDate(p.date)}
                </time>
                <span className="h-px w-6 bg-[var(--line-2)]" aria-hidden />
                <span className="t-label">{p.readingTime}</span>
                {p.medium && (
                  <>
                    <span className="h-px w-6 bg-[var(--line-2)]" aria-hidden />
                    <span className="t-label text-[var(--ink-4)]">Also on Medium</span>
                  </>
                )}
              </div>

              <h3 className="t-h3 mt-4 flex items-baseline gap-2 transition-colors group-hover:text-[var(--signal)]">
                {p.title}
                <ArrowUpRight
                  size={16}
                  className="translate-y-0.5 shrink-0 text-[var(--ink-4)] transition-colors group-hover:text-[var(--signal)]"
                />
              </h3>

              <p className="t-body mt-4 max-w-[68ch] text-[0.9375rem]">{p.standfirst}</p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        </li>
      ))}
    </ol>
  );
}
