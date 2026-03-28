import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getAllPostSlugs, getPostBySlug, formatDate } from '@/lib/blog';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';

interface Props {
  params: { slug: string };
}

// Tell Next.js which slugs to build at compile time
export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

// Per-post SEO metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: 'Post Not Found | CreatorMD' };

  const description = post.seoDescription || post.excerpt;
  const image = post.image
    ? `https://thecreatormd.com${post.image}`
    : 'https://thecreatormd.com/icon.jpg';

  return {
    title: `${post.title} | CreatorMD Blog`,
    description,
    alternates: { canonical: `https://thecreatormd.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description,
      url: `https://thecreatormd.com/blog/${post.slug}`,
      siteName: 'CreatorMD',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: image, width: 1200, height: 630, alt: post.title }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
        {/* ── Hero ── */}
        <section className="relative pt-28 pb-0 md:pt-36 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10 max-w-3xl">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8"
            >
              ← Back to Blog
            </Link>

            {/* Category + date */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 text-xs font-semibold bg-red-600/80 text-white rounded-full">
                {post.category}
              </span>
              <span className="text-xs text-gray-500">
                {formatDate(post.date)} · {post.author}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              {post.title}
            </h1>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-gray-400 text-lg leading-relaxed mb-8">{post.excerpt}</p>
            )}

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs text-gray-400 bg-gray-800 border border-gray-700 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── Cover Image ── */}
        {post.image && (
          <div className="container mx-auto px-4 max-w-3xl mb-0">
            <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </div>
        )}

        {/* ── Article Body ── */}
        <article className="container mx-auto px-4 max-w-3xl py-12">
          <div
            className="prose prose-invert prose-red max-w-none
              prose-headings:font-bold prose-headings:text-white
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-5
              prose-a:text-red-400 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-white
              prose-ul:text-gray-300 prose-ol:text-gray-300
              prose-li:mb-1
              prose-blockquote:border-red-500 prose-blockquote:text-gray-400
              prose-code:text-red-300 prose-code:bg-gray-800 prose-code:px-1 prose-code:rounded
              prose-pre:bg-gray-800 prose-pre:border prose-pre:border-gray-700
              prose-img:rounded-xl prose-img:my-8"
            dangerouslySetInnerHTML={{ __html: post.content || '' }}
          />
        </article>

        {/* ── Bottom nav ── */}
        <div className="container mx-auto px-4 max-w-3xl pb-20">
          <div className="border-t border-gray-800 pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-red-400 transition-colors"
            >
              ← Back to all posts
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
