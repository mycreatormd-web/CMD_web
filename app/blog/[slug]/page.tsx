// app/blog/[slug]/page.tsx
import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import BlogPostClient from './page-client';

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

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return {
    title: `${params.slug.replace(/-/g, ' ')} | CreatorMD Blog`,
    description: 'Read the latest insights from CreatorMD',
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <BlogPostClient slug={params.slug} />;
}
