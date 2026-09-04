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
    'Zohaib',
    'Zohaib Bawani portfolio',
    'Zohaib Bawani software engineer',
    'Zohaib Bawani developer',
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
    type: 'profile',
    url: person.site,
    siteName: person.name,
    title,
    description,
    locale: 'en_US',
    images: [{ url: '/og.png', width: 2400, height: 1260, alt: title }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og.png'],
  },
  // Paste the token from Google Search Console here once the domain is live.
  // verification: { google: 'xxxxxxxxxxxxxxxxxxxxxxxx' },
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

/**
 * Structured data. Three linked nodes so a search for the name resolves to a
 * person, a site, and a page — not just a title tag.
 */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfilePage',
      '@id': `${person.site}/#page`,
      url: person.site,
      name: `${person.name} — ${person.role}`,
      isPartOf: { '@id': `${person.site}/#website` },
      about: { '@id': `${person.site}/#person` },
      primaryImageOfPage: { '@id': `${person.site}/#og` },
      inLanguage: 'en',
    },
    {
      '@type': 'WebSite',
      '@id': `${person.site}/#website`,
      url: person.site,
      name: person.name,
      alternateName: `${person.name} — ${person.role}`,
      description,
      publisher: { '@id': `${person.site}/#person` },
      inLanguage: 'en',
    },
    {
      '@type': 'ImageObject',
      '@id': `${person.site}/#og`,
      url: `${person.site}/og.png`,
      width: 2400,
      height: 1260,
      caption: `${person.name} — ${person.role}`,
    },
    {
      '@type': 'Person',
      '@id': `${person.site}/#person`,
      name: person.name,
      alternateName: ['Zohaib', 'Muhammad Zohaib Bawani'],
      givenName: 'Zohaib',
      familyName: 'Bawani',
      jobTitle: person.role,
      description,
      email: `mailto:${person.email}`,
      telephone: person.phone,
      url: person.site,
      image: `${person.site}/og.png`,
      mainEntityOfPage: { '@id': `${person.site}/#page` },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Karachi',
        addressRegion: 'Sindh',
        addressCountry: 'PK',
      },
      worksFor: { '@type': 'Organization', name: 'MicrosysX' },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Virtual University of Pakistan',
      },
      sameAs: [
        person.github,
        person.linkedin,
        'https://medium.com/@zohaibbawani05',
        'https://mailafiniti.com/',
      ],
      knowsAbout: [
        'Next.js',
        'React',
        'TypeScript',
        '.NET Core',
        'C#',
        'Node.js',
        'Express.js',
        'SQL Server',
        'PostgreSQL',
        'MongoDB',
        'REST API design',
        'GraphQL',
        'Azure and Azure DevOps',
        'CI/CD pipelines',
        'Authentication and role-based access control',
        'Payment integrations',
        'Email infrastructure, DNS, SPF, DKIM and DMARC',
      ],
    },
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
