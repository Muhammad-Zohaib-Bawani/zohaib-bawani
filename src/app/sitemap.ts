import type { MetadataRoute } from 'next';
import { person } from '@/data/portfolio';
import { posts } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: person.site,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${person.site}/blog`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...posts.map((p) => ({
      url: `${person.site}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ];
}
