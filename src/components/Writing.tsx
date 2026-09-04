import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { posts } from '@/data/blog';
import { SectionHeader } from './Section';
import { PostList } from './PostList';

/**
 * Writing on the home page: the two most recent posts, then out to /blog.
 * Same list component as the blog index, so they cannot drift.
 */
export function Writing() {
  if (posts.length === 0) return null;

  return (
    <section id="writing" className="section border-t border-[var(--line)]">
      <div className="shell">
        <SectionHeader
          index="07"
          eyebrow="Blog"
          title="Writing about what I build."
          standfirst="Notes on the infrastructure behind products: DNS and email delivery, onboarding flows, and the failure modes that only appear in production."
        />

        <div className="mt-14">
          <PostList posts={posts} limit={2} />
        </div>

        <Link href="/blog" className="btn btn-ghost mt-10">
          All posts
          <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}
