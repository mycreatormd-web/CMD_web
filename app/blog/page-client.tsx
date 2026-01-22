// app/blog/page-client.tsx
"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Search, Tag } from 'lucide-react';

// Blog post type
interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  author: string;
}

// This will be replaced with actual data fetching from markdown files
const samplePosts: BlogPost[] = [
  {
    slug: 'getting-started-medical-content-creation',
    title: 'Getting Started with Medical Content Creation',
    excerpt: 'A comprehensive guide for healthcare professionals looking to share their expertise online and build a meaningful audience.',
    date: '2026-01-20',
    readTime: '5 min read',
    category: 'Getting Started',
    image: '/blog/getting-started.jpg',
    author: 'CreatorMD Team'
  },
  {
    slug: 'building-your-personal-brand',
    title: 'Building Your Personal Brand as a Medical Professional',
    excerpt: 'Learn how to establish credibility, authenticity, and trust while sharing medical knowledge on social media.',
    date: '2026-01-18',
    readTime: '7 min read',
    category: 'Personal Branding',
    image: '/blog/personal-brand.jpg',
    author: 'CreatorMD Team'
  },
  {
    slug: 'content-ideas-for-doctors',
    title: '10 Content Ideas Every Medical Creator Should Try',
    excerpt: 'Struggling with what to post? Here are proven content formats that resonate with audiences and showcase your expertise.',
    date: '2026-01-15',
    readTime: '6 min read',
    category: 'Content Strategy',
    image: '/blog/content-ideas.jpg',
    author: 'CreatorMD Team'
  }
];

const categories = ['All', 'Getting Started', 'Personal Branding', 'Content Strategy', 'Growth Tips', 'Monetization'];

export default function BlogPageClient() {
  const [posts, setPosts] = useState<BlogPost[]>(samplePosts);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(samplePosts);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    let result = posts;
    
    if (searchQuery) {
      result = result.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (selectedCategory !== 'All') {
      result = result.filter(post => post.category === selectedCategory);
    }
    
    setFilteredPosts(result);
  }, [searchQuery, selectedCategory, posts]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500/20 to-purple-500/20 border border-red-500/30 rounded-full mb-6"
            >
              <span className="text-sm font-semibold text-red-400">CREATORMD BLOG</span>
            </motion.div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Insights for{' '}
              <span className="bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
                Medical Creators
              </span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              Tips, strategies, and stories to help you build your online presence and make an impact as a healthcare professional.
            </p>
          </motion.div>

          {/* Search & Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-10 max-w-4xl mx-auto"
          >
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 transition-colors"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-red-600 to-purple-600 text-white'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-red-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10">
                      {/* Image Placeholder */}
                      <div className="relative h-48 bg-gradient-to-br from-red-500/20 to-purple-500/20 overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-4xl">📝</span>
                        </div>
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        {/* Meta */}
                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {formatDate(post.date)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors line-clamp-2">
                          {post.title}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        {/* Read More */}
                        <div className="flex items-center gap-2 text-red-400 text-sm font-semibold group-hover:gap-3 transition-all">
                          Read article
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="mt-4 text-red-400 hover:text-red-300 font-medium"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-500/10 to-purple-500/10 border border-red-500/20 rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Want to contribute?
            </h3>
            <p className="text-gray-400 mb-6">
              Share your insights and experiences with the CreatorMD community. We're always looking for voices from medical professionals.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-red-500/30 transition-all"
            >
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
