import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { posts } from '@/data/blog';
import { SectionHeader } from '@/components/Section';
import { PostList } from '@/components/PostList';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Blog',
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
              as="h1"
              index="07"
              eyebrow="Blog"
              title="Writing about what I build."
              standfirst="Short pieces on the infrastructure behind products: DNS, email delivery, onboarding flows, and the failure modes that only show up in production."
            />

            <p className="t-mono mt-10 text-[var(--ink-4)]">
              {posts.length} {posts.length === 1 ? 'post' : 'posts'}
            </p>

            <div className="mt-5">
              <PostList posts={posts} />
            </div>

            <Link href="/" className="btn btn-ghost mt-14">
              <ArrowLeft size={15} />
              Back to portfolio
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

