import type { Metadata, Viewport } from 'next';
import { Inter, Instrument_Sans, JetBrains_Mono } from 'next/font/google';
import { person } from '@/data/portfolio';
import { Nav } from '@/components/Nav';
import { SpaceField } from '@/components/SpaceField';
import { RevealObserver } from '@/components/RevealObserver';
import './globals.css';

/* Body. */
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

/* Display — tighter and more editorial than Inter at large sizes. */
const display = Instrument_Sans({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

/* The technical voice: labels, record names, diagram annotations. */
const mono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
});

const title = `${person.name} — ${person.role}`;
const description =
  'Zohaib Bawani is a full-stack software engineer building production systems end to end: React and Next.js interfaces, .NET Core and Node APIs, SQL Server and PostgreSQL, authentication, payments, and email and DNS infrastructure.';

export const metadata: Metadata = {
  metadataBase: new URL(person.site),
  title: {
    default: title,
    template: `%s — ${person.name}`,
  },
  description,
  applicationName: person.name,
  authors: [{ name: person.name, url: person.site }],
  creator: person.name,
  keywords: [
    'Zohaib Bawani',
    'Full-Stack Software Engineer',
    'Next.js developer',
    'React developer',
    '.NET Core developer',
    'Node.js engineer',
    'SQL Server',
    'email infrastructure',
    'DNS SPF DKIM DMARC',
    'MailAfiniti',
    'software engineer Karachi',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: person.site,
    siteName: person.name,
    title,
    description,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export const viewport: Viewport = {
  themeColor: '#05070d',
  colorScheme: 'dark',
};

/** Structured data so a search result states the role, not just the name. */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: person.name,
  jobTitle: person.role,
  email: `mailto:${person.email}`,
  url: person.site,
  address: { '@type': 'PostalAddress', addressLocality: 'Karachi', addressCountry: 'PK' },
  sameAs: [person.github, person.linkedin, 'https://mailafiniti.com/'],
  knowsAbout: [
    'Next.js',
    'React',
    'TypeScript',
    '.NET Core',
    'Node.js',
    'SQL Server',
    'PostgreSQL',
    'REST API design',
    'Authentication and role-based access control',
    'Payment integrations',
    'Email infrastructure and DNS',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SpaceField />
        <RevealObserver />
        <Nav />
        {children}
      </body>
    </html>
  );
}
