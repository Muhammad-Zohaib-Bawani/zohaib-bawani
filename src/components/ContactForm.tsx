'use client';

import { useState } from 'react';
import { ArrowUpRight, Send } from 'lucide-react';
import { person } from '@/data/portfolio';

const ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

const field =
  'w-full rounded-lg border border-[var(--line-2)] bg-[var(--surface-2)] px-4 py-3 text-[0.9375rem] text-[var(--ink)] placeholder:text-[var(--ink-4)] transition-colors focus:border-[var(--signal)] focus:outline-none';

/**
 * Posts to Formspree. If the endpoint env var is absent the form is not
 * rendered at all — a form that silently discards messages is worse than none.
 */
export function ContactForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  // Visitors never see setup instructions. To enable the form, set
  // NEXT_PUBLIC_FORMSPREE_ENDPOINT to your Formspree form URL (see README).
  if (!ENDPOINT) {
    return (
      <div className="panel-2 p-7 md:p-8">
        <p className="t-label">Direct line</p>
        <p className="t-h3 mt-4">Send me a note.</p>
        <p className="t-body mt-4 max-w-[38ch] text-[0.9375rem]">
          Tell me what you are building and where it is stuck. I read everything that lands here.
        </p>
        <a href={`mailto:${person.email}`} className="btn btn-primary mt-7">
          {person.email}
          <ArrowUpRight size={15} />
        </a>
      </div>
    );
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setState('sending');
    try {
      const res = await fetch(ENDPOINT!, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setState('sent');
    } catch {
      setState('error');
    }
  }

  return (
    <form onSubmit={onSubmit} className="panel-2 grid gap-4 p-6 md:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="t-label">Name</span>
          <input name="name" type="text" required autoComplete="name" className={field} />
        </label>
        <label className="grid gap-2">
          <span className="t-label">Email</span>
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
      </div>

      <label className="grid gap-2">
        <span className="t-label">What are you building?</span>
        <textarea name="message" rows={5} required className={`${field} resize-y`} />
      </label>

      {/* Honeypot: bots fill it, people never see it. */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />

      <div className="mt-2 flex flex-wrap items-center gap-4">
        <button type="submit" disabled={state === 'sending'} className="btn btn-primary disabled:opacity-60">
          {state === 'sending' ? 'Sending…' : 'Send message'}
          <Send size={15} />
        </button>

        <p aria-live="polite" className="text-sm text-[var(--ink-2)]">
          {state === 'sent' && 'Sent — I will reply to the address you gave.'}
          {state === 'error' && (
            <>
              Something went wrong.{' '}
              <a href={`mailto:${person.email}`} className="link-ext">
                Email me directly
              </a>
              .
            </>
          )}
        </p>
      </div>
    </form>
  );
}
