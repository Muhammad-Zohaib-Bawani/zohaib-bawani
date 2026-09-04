/**
 * Single source of truth for every piece of portfolio content.
 * Nothing here is decorative — if a field exists, a section renders it.
 */

export const person = {
  name: 'Zohaib Bawani',
  role: 'Full-Stack Software Engineer',
  location: 'Karachi, Pakistan',
  email: 'zohaibbawani05@gmail.com',
  phone: '+92 315 2734817',
  linkedin: 'https://linkedin.com/in/zaibing',
  github: 'https://github.com/Muhammad-Zohaib-Bawani',
  resume: '/resume.pdf',
  site: 'https://zohaibbawani.com',
  /** Hero. Specific enough to be checkable, short enough to read in one breath. */
  headline: ['From DNS record', 'to rendered pixel.'],
  intro:
    "I'm Zohaib Bawani, a full-stack engineer. I build products end to end — interfaces, APIs, databases, authentication, payments, and the email and DNS infrastructure underneath them.",
  /** About section. No "passionate", no "love turning ideas into reality". */
  bio: [
    'I have been building production software for over three years, across government-scale visa systems, news platforms, event ticketing, and my own email hosting product.',
    'Most of that work has been full-stack by necessity rather than by title. Shipping a mailbox provisioning flow means writing the React that renders it, the .NET or Node service behind it, the SQL schema underneath, and then working out why a DKIM record has not propagated. I work at whichever layer the problem is on.',
    'I care about the parts users never see: authorization boundaries that actually hold, audit trails that survive a review, and billing logic that does not quietly double-charge someone.',
  ],
};

/* ------------------------------------------------------------------ */
/* Engineering identity — the "Beyond the Interface" stack strip       */
/* ------------------------------------------------------------------ */

export const stackLayers = [
  {
    id: 'interface',
    label: 'Interface',
    detail: 'Application surfaces, design systems, state, forms, accessibility.',
    items: ['Next.js', 'React', 'TypeScript', 'Redux', 'Tailwind CSS'],
  },
  {
    id: 'api',
    label: 'API',
    detail: 'REST services, request validation, versioning, third-party integration.',
    items: ['.NET Core Web API', 'Node.js', 'Express', 'REST', 'GraphQL'],
  },
  {
    id: 'identity',
    label: 'Identity',
    detail: 'Authentication and authorization: sessions, tokens, providers, per-role access.',
    items: ['JWT', 'OAuth', 'Azure AD', 'Role-based access control'],
  },
  {
    id: 'data',
    label: 'Data',
    detail: 'Relational schema design, queries, migrations, document stores.',
    items: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Firebase'],
  },
  {
    id: 'infrastructure',
    label: 'Infrastructure',
    detail: 'Deployment pipelines, environments, domain and email infrastructure.',
    items: ['Azure DevOps', 'GitHub Actions', 'DNS', 'SPF / DKIM / DMARC', 'Vercel'],
  },
];

/* ------------------------------------------------------------------ */
/* Featured case studies                                              */
/* ------------------------------------------------------------------ */

export const mailafiniti = {
  slug: 'mailafiniti',
  name: 'MailAfiniti',
  category: 'Business email hosting',
  kind: 'Own product',
  /** Public positioning, taken from the live marketing site. */
  positioning: 'Stop sending business emails from Gmail.',
  summary:
    'Business email hosting for small teams: custom-domain mailboxes, guided DNS setup, deliverability monitoring, migration, webmail and billing.',
  links: [
    { label: 'mailafiniti.com', href: 'https://mailafiniti.com/', note: 'Marketing site' },
    { label: 'app.mailafiniti.io', href: 'https://app.mailafiniti.io/', note: 'Product portal' },
  ],
  problem: [
    'Email hosting is not a website with a checkout attached. Before a customer can send a single message, a domain has to be claimed, four DNS records have to be published correctly at a registrar nobody controls, authentication has to be verified, mailboxes have to be provisioned, and a subscription has to start billing.',
    'Every one of those steps can fail independently, and most of them fail silently. The product had to make an infrastructure problem feel like a five-minute setup.',
  ],
  role: [
    'I built both halves of the product: the client-facing site that acquires customers, and the portal where they actually run their email.',
    'That covered onboarding, domain configuration, DNS verification, mailbox creation and management, the email management experience, payment and subscription flows, and administrative tooling.',
  ],
  /** The differentiator: end-to-end ownership across the whole funnel. */
  pipeline: [
    { step: 'Marketing site', note: 'Positioning, pricing, acquisition' },
    { step: 'Signup', note: 'Account creation, OAuth, trial start' },
    { step: 'Domain', note: 'Claim and ownership check' },
    { step: 'DNS verify', note: 'Record generation, propagation polling' },
    { step: 'Mailbox', note: 'Provisioning, aliases, storage' },
    { step: 'Email', note: 'Webmail, IMAP and SMTP clients' },
    { step: 'Billing', note: 'Plans, subscriptions, renewals' },
    { step: 'Admin', note: 'Team, roles, account controls' },
  ],
  /** Real record types the product generates — the technical credibility exhibit. */
  dns: [
    { record: 'MX', purpose: 'Routes inbound mail to the hosting infrastructure' },
    { record: 'SPF', purpose: 'Declares which servers may send on the domain' },
    { record: 'DKIM', purpose: 'Cryptographically signs outbound mail' },
    { record: 'DMARC', purpose: 'Sets failure policy and the reporting address' },
  ],
  billing: [
    'Tiered subscriptions priced per user, with a trial that converts into a paid plan.',
    'Plan changes, renewals and account state stay in sync with mailbox entitlements — storage and seat limits are enforced from the same source of truth the portal reads.',
  ],
  outcome: [
    'One product that owns the whole path, from a stranger reading a pricing page to a business running its email on its own domain.',
    'The marketing site and the portal were not separate deliverables handed between teams. I designed and built both, which is why the onboarding story on the site and the actual setup flow in the app describe the same four DNS records.',
  ],
  tech: ['Next.js', 'React', 'TypeScript', 'Node.js', 'REST APIs', 'DNS', 'SMTP / IMAP', 'Payments'],
};

export const hayya = {
  slug: 'hayya',
  name: 'Hayya',
  fullName: 'Hayya — Road to Qatar',
  category: 'Government visa platform',
  kind: 'Production system',
  summary:
    'A global visa application platform built as three interconnected portals sharing one identity, authorization and workflow core.',
  problem: [
    'A national visa programme cannot be one application. Individual travellers, accredited partners handling group bookings, and internal operations staff each need a different interface onto the same records — while every one of them touches the same identity documents and the same approval decisions.',
    'The constraint is that those surfaces must never diverge. One applicant record, one authorization model, one audit history, three very different front doors.',
  ],
  portals: [
    {
      key: 'B2C',
      title: 'Applicant portal',
      detail: 'Identity verification, document submission, application and status tracking.',
    },
    {
      key: 'B2B',
      title: 'Partner platform',
      detail: 'Group bookings and service workflows for accredited partners.',
    },
    {
      key: 'ADMIN',
      title: 'Operations portal',
      detail: 'Workflow approvals, internal review, reporting and audit trails.',
    },
  ],
  /** Shared core the three portals orbit. */
  core: ['Authentication', 'Role-based access', 'Shared APIs', 'SQL Server', 'Workflow', 'Audit trail'],
  role: [
    'Frontend development across all three portals: identity verification, document submission and application status tracking on the applicant side; approval workflows, audit trails and role-based access on the operations side.',
    'Backend work on .NET Core services and SQL Server, and collaboration on API design and system architecture across the portals.',
  ],
  complexity: [
    'Three consumers of one record set, each with a different authorization surface.',
    'Approval workflows where every state transition has to stay attributable after the fact.',
    'Identity documents, which raise the cost of getting access control subtly wrong.',
  ],
  outcome: 'The platform served hundreds of thousands of users.',
  tech: ['Next.js', 'React', '.NET Core', 'SQL Server', 'Azure AD', 'Azure DevOps'],
};

/* ------------------------------------------------------------------ */
/* Secondary work                                                     */
/* ------------------------------------------------------------------ */

export const otherProjects = [
  {
    name: 'Event Management & Guest Ticketing',
    category: 'Ticketing & operations',
    description:
      'Event ticketing with seat and table selection, plus guest management covering travel and accommodation for attending parties. Dynamic forms and Ajax-driven interfaces over a .NET Core backend.',
    tech: ['.NET Core', 'Razor', 'jQuery', 'Ajax', 'SQL Server'],
  },
  {
    name: 'Bow Valley Chauffeur',
    category: 'Booking platform',
    description:
      'A ride booking platform for a chauffeur service: REST APIs for booking management, Stripe integration for payments, and MongoDB for customer and booking records.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Stripe'],
  },
];

/* ------------------------------------------------------------------ */
/* Capabilities — grouped by what they let me build, not by logo      */
/* ------------------------------------------------------------------ */

export const capabilities = [
  {
    title: 'Frontend engineering',
    items: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'Redux', 'Vue.js', 'Nuxt.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend engineering',
    items: ['.NET Core Web API', 'C#', 'Node.js', 'Express.js', 'REST API design', 'Python'],
  },
  {
    title: 'Data',
    items: ['SQL Server', 'PostgreSQL', 'MongoDB', 'MySQL', 'Firebase'],
  },
  {
    title: 'Infrastructure & delivery',
    items: ['Azure DevOps', 'GitHub Actions', 'CI/CD pipelines', 'DNS', 'Vercel', 'Netlify'],
  },
  {
    title: 'Product engineering',
    items: [
      'Authentication (JWT, OAuth)',
      'Role-based access control',
      'Payments & subscriptions',
      'Email infrastructure',
      'Admin portals',
    ],
  },
  {
    title: 'Integrations',
    items: ['Stripe', 'WordPress', 'HubSpot', 'GoHighLevel', 'Zapier', 'WooCommerce', 'Shopify', 'Strapi'],
  },
];

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

export const experience = [
  {
    company: 'FarmaTrust',
    role: 'Full-Stack Software Engineer',
    period: 'Aug 2024 — Present',
    summary: 'Full-stack delivery across Next.js frontends and .NET Core services.',
    points: [
      'Built full-stack applications in Next.js, including reusable UI components and frontend architecture.',
      'Developed backend APIs and database logic in .NET (C#) and SQL Server.',
      'Implemented CI/CD pipelines using Azure DevOps.',
    ],
    tech: ['Next.js', '.NET Core', 'C#', 'SQL Server', 'Azure DevOps'],
  },
  {
    company: 'Dawn News',
    role: 'Frontend Developer',
    period: 'May 2024 — Jul 2024',
    summary: 'Modernised legacy publishing platforms at national news scale.',
    points: [
      'Rebuilt legacy websites on Next.js and improved performance and UX of existing platforms.',
      'Worked within a React and Redux architecture.',
      'Used Firebase and MongoDB for real-time data and storage.',
    ],
    tech: ['Next.js', 'React', 'Redux', 'Firebase', 'MongoDB'],
  },
  {
    company: 'Steel Marketing',
    role: 'Frontend Developer (Remote)',
    period: 'Nov 2023 — May 2024',
    summary: 'WordPress builds wired into CRM and lead automation.',
    points: [
      'Developed and customised WordPress websites.',
      'Integrated CRM systems including HubSpot and GoHighLevel.',
      'Implemented automated lead capture systems.',
    ],
    tech: ['WordPress', 'HubSpot', 'GoHighLevel', 'JavaScript'],
  },
];

export const education = [
  { degree: 'BS Software Engineering', institution: 'Virtual University of Pakistan' },
  { degree: 'Intermediate, Computer Science', institution: 'Gulshan Science & Commerce College' },
  { degree: 'Web & Mobile App Development', institution: 'Saylani Mass IT Training' },
];
