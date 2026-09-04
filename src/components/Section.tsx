import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * Every section opens the same way: a numbered mono index, a rule, a title,
 * and an optional standfirst. The repetition is the point — it is what makes
 * the page read as one document rather than a stack of unrelated blocks.
 */
export function SectionHeader({
  index,
  eyebrow,
  title,
  standfirst,
  align = 'left',
  className,
  /** A standalone page's header is its h1; sections on the home page stay h2. */
  as: Heading = 'h2',
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  standfirst?: string;
  align?: 'left' | 'center';
  className?: string;
  as?: 'h1' | 'h2';
}) {
  return (
    <header
      className={cn(
        'reveal',
        align === 'center' && 'mx-auto max-w-2xl text-center',
        className,
      )}
    >
      <div
        className={cn(
          'flex items-center gap-3',
          align === 'center' && 'justify-center',
        )}
      >
        <span className="t-label text-[var(--signal)]">{index}</span>
        <span className="h-px w-8 bg-[var(--line-2)]" aria-hidden />
        <span className="t-label">{eyebrow}</span>
      </div>

      <Heading className="t-h2 mt-5 max-w-3xl">{title}</Heading>

      {standfirst && (
        <p
          className={cn(
            't-lead mt-5 max-w-[52ch]',
            align === 'center' && 'mx-auto',
          )}
        >
          {standfirst}
        </p>
      )}
    </header>
  );
}

export function Seam() {
  return (
    <div className="shell-wide">
      <hr className="seam" />
    </div>
  );
}
