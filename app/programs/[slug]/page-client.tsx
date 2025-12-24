'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ChevronLeft, ExternalLink, CheckCircle } from 'lucide-react';
import Navigation from '@/app/components/Navigation';
import { programs } from '@/app/data/programs';
import { Program } from '@/app/types/program';

export default function CourseDetailClient({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const [program, setProgram] = useState<Program | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Find the program by slug from both available and coming soon
    const allPrograms = [...programs.availableNow, ...programs.comingSoon];
    const foundProgram = allPrograms.find(p => p.slug === params.slug);
    
    if (foundProgram) {
      setProgram(foundProgram);
    }
    setIsLoading(false);
  }, [params.slug]);

  if (isLoading) {
    return (
      <main className="bg-white min-h-screen">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading course details...</p>
          </div>
        </div>
      </main>
    );
  }

  if (!program) {
    return (
      <main className="bg-white min-h-screen">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Course Not Found</h1>
            <p className="text-gray-600 mb-8">The course you're looking for doesn't exist.</p>
            <button
              onClick={() => router.push('/programs')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-red-600 text-white font-bold rounded-lg hover:shadow-lg transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
              Back to Programs
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white">
      <Navigation />

      {/* Hero Section with Course Header */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-black via-purple-950 to-black overflow-hidden">
        {/* Background Gradient Blobs */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-red-900/40 via-purple-900/30 to-transparent rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-purple-900/40 to-transparent rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Back Button */}
          <motion.button
            onClick={() => router.back()}
            whileHover={{ x: -5 }}
            className="mb-8 flex items-center gap-2 text-red-400 hover:text-red-300 font-semibold transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Programs
          </motion.button>

          {/* Header Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
              {program.title}
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-6 leading-relaxed">
              {program.shortDescription}
            </p>

            {/* Status Badge */}
            {program.status === 'coming-soon' && (
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-900/50 text-red-200 rounded-full border border-red-700/50 mb-6">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                Coming Soon
              </span>
            )}

            {/* Metadata */}
            <div className="flex flex-wrap gap-6 mt-8">
              {program.duration && (
                <div>
                  <span className="text-xs font-bold text-red-400 uppercase tracking-widest block mb-1">Duration</span>
                  <p className="text-lg font-semibold text-white">{program.duration}</p>
                </div>
              )}
              {program.level && (
                <div>
                  <span className="text-xs font-bold text-red-400 uppercase tracking-widest block mb-1">Level</span>
                  <p className="text-lg font-semibold text-white">{program.level}</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Main Content - Left */}
            <div className="md:col-span-2">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-black text-gray-900 mb-4">About This Course</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {program.fullDescription}
                </p>
              </motion.div>

              {/* Benefits */}
              {program.benefits && program.benefits.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mb-12"
                >
                  <h2 className="text-2xl font-black text-gray-900 mb-6">What You'll Learn</h2>
                  <div className="space-y-4">
                    {program.benefits.map((benefit, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-red-50 rounded-xl border border-purple-200"
                      >
                        <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-800 leading-relaxed">{benefit}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar - Right */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="sticky top-24 bg-gradient-to-br from-purple-50 to-red-50 rounded-2xl p-8 border-2 border-purple-200"
              >
                <h3 className="text-xl font-black text-gray-900 mb-6">Ready to Get Started?</h3>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  {program.status === 'available' && program.externalLink && (
                    <a
                      href={program.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-gradient-to-r from-purple-600 to-red-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-purple-600/30 transition-all transform hover:scale-105 text-sm uppercase tracking-wide"
                    >
                      Access Course
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  
                  {program.status === 'available' && program.internalPath && !program.externalLink && (
                    <a
                      href={program.internalPath}
                      className="flex items-center justify-center w-full px-6 py-3.5 bg-gradient-to-r from-purple-600 to-red-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-purple-600/30 transition-all transform hover:scale-105 text-sm uppercase tracking-wide"
                    >
                      Access Course
                    </a>
                  )}

                  <button
                    className="w-full px-6 py-3.5 border-2 border-purple-300 text-gray-900 font-bold rounded-xl hover:border-purple-600 hover:bg-purple-100 transition-all text-sm uppercase tracking-wide"
                  >
                    {program.status === 'coming-soon' ? 'Join Waitlist' : 'Request Info'}
                  </button>
                </div>

                {/* Quick Stats */}
                <div className="mt-8 pt-8 border-t-2 border-purple-200 space-y-4">
                  {program.duration && (
                    <div className="text-sm">
                      <span className="text-purple-700 font-bold">Duration:</span>
                      <p className="text-gray-900 font-semibold">{program.duration}</p>
                    </div>
                  )}
                  {program.level && (
                    <div className="text-sm">
                      <span className="text-purple-700 font-bold">Level:</span>
                      <p className="text-gray-900 font-semibold">{program.level}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Similar Courses Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 mb-8">More Learning Paths</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {programs.availableNow
              .filter(p => p.slug !== params.slug)
              .slice(0, 2)
              .map((p, idx) => (
                <motion.button
                  key={p.id}
                  onClick={() => router.push(`/programs/${p.slug}`)}
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="text-left p-6 bg-white rounded-xl border-2 border-purple-200 hover:border-red-500 transition-all group"
                >
                  <h3 className="text-lg font-black text-gray-900 group-hover:text-red-600 transition-colors mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700">
                    {p.shortDescription}
                  </p>
                </motion.button>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
