import type { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import { getAllProgramSlugs } from '@/app/data/programs';

const SITE_URL = 'https://thecreatormd.com';

function getBlogSlugs(): string[] {
  const blogDir = path.join(process.cwd(), 'content', 'blog');

  if (!fs.existsSync(blogDir)) {
    return [];
  }

  return fs
    .readdirSync(blogDir)
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/programs`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  const programRoutes: MetadataRoute.Sitemap = getAllProgramSlugs().map((slug) => ({
    url: `${SITE_URL}/programs/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = getBlogSlugs().map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...programRoutes, ...blogRoutes];
}
