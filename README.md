# Zohaib Bawani — Portfolio

Next.js 16 (App Router, Turbopack) · React 19 · Tailwind CSS v4 · TypeScript.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm start
```

## Where content lives

All copy, projects, experience and capabilities are in a single file:
[`src/data/portfolio.ts`](src/data/portfolio.ts). Sections render straight from it —
edit that file, not the components, to change what the site says.

## Configuration

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | Formspree form URL, e.g. `https://formspree.io/f/xxxxxxxx`. When unset, the contact section falls back to a direct email panel instead of rendering a form that would silently discard messages. |

Set it in `.env.local` for development and in the host's environment for production.

Also update `person.site` in `src/data/portfolio.ts` to the real production domain —
it drives the canonical URL, Open Graph metadata, `sitemap.xml` and `robots.txt`.

## Assets to add

- `public/resume.pdf` — the hero and contact sections both link to it.
- An Open Graph image (`src/app/opengraph-image.png`, 1200×630) for link previews.
- `public/avatar.png` is currently unused. The About section is text-only until a
  real photograph replaces the AI-generated illustration that was there.

## Design notes

- Dark only. Tokens are defined once at the top of [`src/app/globals.css`](src/app/globals.css):
  a deep navy ground, one signal blue, one telemetry amber. No third accent.
- Three typefaces with distinct jobs: Instrument Sans (display), Inter (body),
  JetBrains Mono (labels, record names, diagram annotations).
- The ambient star field is a canvas painted **once** on mount; its drift is a CSS
  transform, so there is no animation frame loop. Diagrams are inline SVG + CSS.
- Scroll reveals use one `IntersectionObserver` in `RevealObserver` for the whole
  page. Elements opt in with `className="reveal"`, which keeps every section a
  server component.
- `prefers-reduced-motion` disables the drift, the orbits and the reveals.
