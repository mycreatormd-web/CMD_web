// app/blog/page.tsx
import { Metadata } from 'next';
import BlogPageClient from './page-client';

export const metadata: Metadata = {
  title: 'Blog | CreatorMD',
  description: 'Insights, tips, and stories for medical content creators. Learn how to build your online presence and grow your influence.',
};

export default function BlogPage() {
  return <BlogPageClient />;
}
