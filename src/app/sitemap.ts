import type { MetadataRoute } from 'next';
import { person } from '@/data/portfolio';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: person.site,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
