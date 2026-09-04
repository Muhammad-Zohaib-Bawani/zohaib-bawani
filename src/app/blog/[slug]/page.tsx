import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { type Block, posts, postBySlug } from '@/data/blog';
import { person } from '@/data/portfolio';
import { Footer } from '@/components/Footer';
import { formatDate } from '@/lib/utils';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.standfirst,
    keywords: post.tags,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.standfirst,
      url: `${person.site}/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [person.name],
    },
    twitter: { card: 'summary_large_image', title: post.title, description: post.standfirst },
  };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.standfirst,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Person', name: person.name, url: person.site },
    keywords: post.tags.join(', '),
    mainEntityOfPage: `${person.site}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main id="main" className="pt-28">
        <article className="section">
          <div className="shell">
            <Link
              href="/blog"
              className="t-mono inline-flex items-center gap-2 text-[var(--ink-3)] transition-colors hover:text-[var(--ink)]"
            >
              <ArrowLeft size={14} />
              Writing
            </Link>

            <header className="mt-10 max-w-[62ch]">
              <div className="flex items-center gap-3">
                <time className="t-mono text-[var(--ink-4)]" dateTime={post.date}>
                  {formatDate(post.date)}
                </time>
                <span className="h-px w-6 bg-[var(--line-2)]" aria-hidden />
                <span className="t-label">{post.readingTime}</span>
              </div>

              <h1 className="t-h2 mt-5">{post.title}</h1>
              <p className="t-lead mt-6">{post.standfirst}</p>

              <ul className="mt-8 flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            </header>

            <hr className="seam my-12" />

            <div className="max-w-[68ch]">
              {post.body.map((block, i) => (
                <Prose key={i} block={block} />
              ))}
            </div>

            <hr className="seam my-12" />

            <footer className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <p className="t-body text-[0.9375rem]">
                Written by {person.name}, {person.role}.
              </p>
              <Link href="/#contact" className="btn btn-ghost">
                Get in touch
              </Link>
            </footer>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

/** One switch, every block type. This is the whole markdown pipeline. */
function Prose({ block }: { block: Block }) {
  switch (block.kind) {
    case 'h':
      return <h2 className="t-h3 mt-12 mb-5">{block.text}</h2>;

    case 'p':
      return <p className="t-body mb-5 leading-[1.75]">{block.text}</p>;

    case 'ul':
      return (
        <ul className="mb-6 space-y-2.5">
          {block.items.map((item) => (
            <li key={item} className="t-body flex gap-3 leading-[1.7]">
              <span className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-[var(--signal)]" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      );

    case 'ol':
      return (
        <ol className="mb-6 space-y-2.5">
          {block.items.map((item, i) => (
            <li key={item} className="t-body flex gap-3 leading-[1.7]">
              <span className="t-mono shrink-0 text-[var(--signal)]">{i + 1}.</span>
              {item}
            </li>
          ))}
        </ol>
      );

    case 'code':
      return (
        <figure className="panel-2 mb-7 overflow-hidden">
          <pre className="overflow-x-auto p-5 text-[0.8125rem] leading-relaxed">
            <code className="font-mono text-[var(--ink-2)]">{block.text}</code>
          </pre>
          {block.caption && (
            <figcaption className="t-label border-t border-[var(--line)] px-5 py-3">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case 'note':
      return (
        <aside className="mb-7 border-l-2 border-[var(--signal)] bg-[rgb(91_140_255/0.06)] px-5 py-4">
          <p className="t-body leading-[1.7] text-[var(--ink)]">{block.text}</p>
        </aside>
      );
  }
}
