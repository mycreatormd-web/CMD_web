import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts, formatDate } from '@/lib/blog';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';

export const metadata: Metadata = {
  title: 'Blog | CreatorMD',
  description:
    'Insights, tips, and stories for medical content creators. Learn how to build your online presence and grow your influence.',
  alternates: { canonical: 'https://thecreatormd.com/blog' },
  openGraph: {
    title: 'Blog | CreatorMD',
    description: 'Insights, tips, and stories for medical content creators.',
    url: 'https://thecreatormd.com/blog',
    siteName: 'CreatorMD',
    type: 'website',
    images: [{ url: 'https://thecreatormd.com/icon.jpg', width: 1200, height: 630 }],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
        {/* ── Hero ── */}
        <section className="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10 text-center">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase text-red-400 bg-red-500/10 border border-red-500/20 rounded-full">
              The CreatorMD Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Insights for Medical{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                Content Creators
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Practical strategies, stories, and tips to help healthcare professionals build their
              authority online.
            </p>
          </div>
        </section>

        {/* ── Posts Grid ── */}
        <section className="container mx-auto px-4 pb-24">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No posts published yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/5"
                >
                  {/* Cover image */}
                  <div className="relative h-48 w-full bg-gray-800 overflow-hidden">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                        <span className="text-4xl opacity-20">✍️</span>
                      </div>
                    )}
                    {/* Category badge */}
                    <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold bg-red-600/90 text-white rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="flex flex-col flex-1 p-5">
                    <p className="text-xs text-gray-500 mb-2">
                      {formatDate(post.date)}
                      {post.author ? ` · ${post.author}` : ''}
                    </p>

                    <h2 className="text-white font-semibold text-lg leading-snug mb-2 group-hover:text-red-400 transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    {post.excerpt && (
                      <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}

                    {/* Tags */}
                    {post.tags.length > 0 && (
                      <div className="mt-auto flex flex-wrap gap-1.5 pt-3 border-t border-gray-800">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-xs text-gray-400 bg-gray-800 rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
