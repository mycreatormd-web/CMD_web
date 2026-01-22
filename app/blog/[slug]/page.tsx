// app/blog/[slug]/page.tsx
import { Metadata } from 'next';
import BlogPostClient from './page-client';

// This would be replaced with actual data fetching
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return {
    title: `Blog Post | CreatorMD`,
    description: 'Read the latest insights from CreatorMD',
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <BlogPostClient slug={params.slug} />;
}
