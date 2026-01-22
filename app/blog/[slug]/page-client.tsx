// app/blog/[slug]/page-client.tsx
"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Share2, Twitter, Linkedin } from 'lucide-react';

interface BlogPostClientProps {
  slug: string;
}

// Sample post data - this would come from markdown files via Decap CMS
const samplePostContent = {
  title: 'Getting Started with Medical Content Creation',
  excerpt: 'A comprehensive guide for healthcare professionals looking to share their expertise online.',
  date: '2026-01-20',
  readTime: '5 min read',
  category: 'Getting Started',
  author: 'CreatorMD Team',
  content: `
## Why Medical Content Creation Matters

In today's digital age, healthcare professionals have an unprecedented opportunity to educate, inspire, and connect with audiences worldwide. Medical content creation isn't just about building a personal brand—it's about democratizing health information and making medical knowledge accessible to everyone.

### The Growing Need for Trusted Medical Voices

With so much health misinformation circulating online, there's never been a greater need for credible medical professionals to share accurate, evidence-based information. Your expertise can make a real difference in people's lives.

## Getting Started: The Basics

### 1. Define Your Niche

Before you start creating content, ask yourself:
- What topics are you most passionate about?
- What unique perspective can you bring?
- Who is your target audience?

### 2. Choose Your Platform

Different platforms serve different purposes:
- **LinkedIn** - Professional networking and thought leadership
- **Instagram** - Visual content and building community
- **TikTok** - Short-form educational content
- **YouTube** - Long-form educational videos
- **Twitter/X** - Quick insights and engaging in medical discussions

### 3. Start Creating

The most important step is to simply begin. Your first pieces of content won't be perfect, and that's okay. Consistency matters more than perfection.

## Tips for Success

1. **Be authentic** - Share your genuine experiences and perspectives
2. **Stay evidence-based** - Always cite credible sources
3. **Engage with your audience** - Respond to comments and questions
4. **Collaborate** - Connect with other medical creators
5. **Keep learning** - The landscape is always evolving

## Conclusion

Medical content creation is a powerful way to extend your impact beyond the clinic or hospital. By sharing your knowledge online, you can help countless people make better health decisions.

Ready to start your journey? Join the CreatorMD community and connect with fellow medical creators who are making a difference.
  `
};

export default function BlogPostClient({ slug }: BlogPostClientProps) {
  const post = samplePostContent;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Hero */}
      <section className="relative pt-24 pb-8 md:pt-32 md:pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            {/* Category */}
            <span className="inline-block px-3 py-1 bg-gradient-to-r from-red-500/20 to-purple-500/20 border border-red-500/30 rounded-full text-sm font-semibold text-red-400 mb-4">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <span>By {post.author}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="prose prose-invert prose-lg max-w-none
                prose-headings:text-white prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-gray-300 prose-p:leading-relaxed
                prose-li:text-gray-300
                prose-strong:text-white
                prose-a:text-red-400 prose-a:no-underline hover:prose-a:underline"
            >
              {/* This would be rendered markdown content */}
              <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />').replace(/## /g, '<h2>').replace(/### /g, '<h3>') }} />
            </motion.article>

            {/* Share */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-12 pt-8 border-t border-white/10"
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <span className="text-gray-400 font-medium">Share this article</span>
                <div className="flex gap-3">
                  <button className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors">
                    <Twitter className="w-5 h-5 text-gray-400" />
                  </button>
                  <button className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors">
                    <Linkedin className="w-5 h-5 text-gray-400" />
                  </button>
                  <button className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors">
                    <Share2 className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 bg-gradient-to-r from-red-500/10 to-purple-500/10 border border-red-500/20 rounded-2xl p-8 text-center"
            >
              <h3 className="text-xl font-bold text-white mb-3">
                Ready to start your creator journey?
              </h3>
              <p className="text-gray-400 mb-6">
                Join the CreatorMD community and connect with fellow medical professionals.
              </p>
              <Link
                href="/#community"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-red-500/30 transition-all"
              >
                Join Community
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
