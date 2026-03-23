'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ChevronLeft, Play, Sparkles, Target, Users, Zap } from 'lucide-react';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';

const bootcampSessions = [
  {
    id: 1,
    speaker: 'Pharm Nneji Tobechukwu',
    title: 'Get clear on what to create and who to serve',
    description: 'This session breaks down why clarity is key—what you should create, who you should serve, and how to define your niche and content direction.',
    youtubeUrl: 'https://www.youtube.com/live/c0NGPE7J9c0?si=2Jp6BU5COU8dOzFM',
    icon: Target,
    gradient: 'from-red-500 to-purple-500'
  },
  {
    id: 2,
    speaker: 'Chikamdinaka Ibe',
    title: 'Turn your medical journey into authority',
    description: 'Here, you\'ll learn how to position your medical experiences as expertise that builds trust and credibility.',
    youtubeUrl: 'https://www.youtube.com/live/jaw9guwCYAM?si=jlrHyWeobVxck8zp',
    icon: Sparkles,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    speaker: 'Precious Obo',
    title: 'Build influence that leads to income',
    description: 'This session focuses on how influence goes beyond followers, and how engagement can be turned into real income.',
    youtubeUrl: 'https://www.youtube.com/live/T7mIlTT7qlw?si=q-H-M0sXAAlyRZIO',
    icon: Zap,
    gradient: 'from-pink-500 to-red-500'
  }
];

export default function BootcampClient() {
  const router = useRouter();

  return (
    <main className="bg-black min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-10 xs:py-12 sm:py-16 md:py-20 lg:py-28 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-br from-black via-purple-950/30 to-black overflow-hidden">
        {/* Background Effects - Hidden on very small screens for performance */}
        <div className="absolute inset-0 z-0 hidden xs:block">
          <div className="absolute top-0 left-1/4 w-[250px] xs:w-[300px] sm:w-[400px] md:w-[500px] h-[250px] xs:h-[300px] sm:h-[400px] md:h-[500px] bg-gradient-to-br from-red-900/30 via-purple-900/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-[200px] xs:w-[250px] sm:w-[300px] md:w-[400px] h-[200px] xs:h-[250px] sm:h-[300px] md:h-[400px] bg-gradient-to-tl from-purple-900/30 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Back Button */}
          <motion.button
            onClick={() => router.push('/programs')}
            whileHover={{ x: -5 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-6 xs:mb-8 sm:mb-10 flex items-center gap-1.5 xs:gap-2 text-red-400 hover:text-red-300 font-semibold transition-colors text-sm xs:text-base"
          >
            <ChevronLeft className="w-4 h-4 xs:w-5 xs:h-5" />
            Back to Programs
          </motion.button>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 xs:gap-2 px-2.5 xs:px-3 sm:px-4 py-1.5 xs:py-2 bg-gradient-to-r from-red-600/20 to-purple-600/20 border border-red-500/30 rounded-full mb-4 xs:mb-5 sm:mb-6">
              <Zap className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 text-red-400" />
              <span className="text-xs xs:text-sm font-bold text-red-300">7-Day Intensive Program</span>
            </div>

            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-3 xs:mb-4 sm:mb-5 md:mb-6 leading-tight">
              CreatorMD{' '}
              <span className="bg-gradient-to-r from-red-500 via-purple-500 to-red-500 bg-clip-text text-transparent">
                Bootcamp
              </span>
            </h1>
            
            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-5 xs:mb-6 sm:mb-8 max-w-3xl leading-relaxed">
              An intensive live program designed to help medical professionals launch their content authority and build real influence.
            </p>

            {/* Quick Stats - Stack on mobile, row on larger */}
            <div className="grid grid-cols-1 xs:grid-cols-3 gap-3 xs:gap-4 sm:gap-6 md:gap-8 lg:gap-10">
              <div className="flex items-center gap-2.5 xs:gap-3 p-2.5 xs:p-0 bg-gray-900/50 xs:bg-transparent rounded-xl xs:rounded-none">
                <div className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 rounded-lg xs:rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-red-400" />
                </div>
                <div>
                  <p className="text-[10px] xs:text-xs text-gray-500 uppercase tracking-wider">Duration</p>
                  <p className="text-sm xs:text-base sm:text-lg font-bold text-white">7 Days</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 xs:gap-3 p-2.5 xs:p-0 bg-gray-900/50 xs:bg-transparent rounded-xl xs:rounded-none">
                <div className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 rounded-lg xs:rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-[10px] xs:text-xs text-gray-500 uppercase tracking-wider">Level</p>
                  <p className="text-sm xs:text-base sm:text-lg font-bold text-white">Intermediate</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 xs:gap-3 p-2.5 xs:p-0 bg-gray-900/50 xs:bg-transparent rounded-xl xs:rounded-none">
                <div className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 rounded-lg xs:rounded-xl bg-pink-600/20 border border-pink-500/30 flex items-center justify-center flex-shrink-0">
                  <Play className="w-5 h-5 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-pink-400" />
                </div>
                <div>
                  <p className="text-[10px] xs:text-xs text-gray-500 uppercase tracking-wider">Sessions</p>
                  <p className="text-sm xs:text-base sm:text-lg font-bold text-white">3 Expert-Led</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sessions Section - Modern 2.0 Layout */}
      <section className="py-10 xs:py-12 sm:py-16 md:py-20 lg:py-24 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 xs:mb-10 sm:mb-12 md:mb-16"
          >
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2 xs:mb-3 sm:mb-4">
              Bootcamp Sessions
            </h2>
            <p className="text-gray-400 text-xs xs:text-sm sm:text-base md:text-lg max-w-2xl">
              Watch our expert-led sessions and start your transformation journey
            </p>
          </motion.div>

          {/* Sessions - Timeline Style */}
          <div className="space-y-0">
            {bootcampSessions.map((session, idx) => {
              const Icon = session.icon;
              return (
                <motion.div
                  key={session.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Connecting Line - Hidden on very small screens */}
                  {idx < bootcampSessions.length - 1 && (
                    <div className="absolute left-5 xs:left-6 sm:left-7 md:left-8 top-14 xs:top-16 sm:top-20 bottom-0 w-0.5 bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 hidden xs:block"></div>
                  )}

                  <div className="flex gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-8 pb-8 xs:pb-10 sm:pb-12 md:pb-16">
                    {/* Session Number / Icon */}
                    <div className="flex-shrink-0">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl xs:rounded-2xl bg-gradient-to-br ${session.gradient} flex items-center justify-center shadow-lg shadow-purple-500/20 relative z-10`}
                      >
                        <span className="text-white font-black text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl">{String(idx + 1).padStart(2, '0')}</span>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 pt-0.5 xs:pt-1">
                      {/* Speaker Badge */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + 0.1 }}
                        className="inline-flex items-center gap-1.5 xs:gap-2 mb-2 xs:mb-3 sm:mb-4"
                      >
                        <div className={`w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-gradient-to-r ${session.gradient}`}></div>
                        <span className="text-xs xs:text-sm sm:text-base font-semibold text-purple-300 truncate">{session.speaker}</span>
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-white mb-2 xs:mb-3 leading-tight group-hover:text-red-300 transition-colors">
                        {session.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 text-xs xs:text-sm sm:text-base md:text-lg mb-4 xs:mb-5 sm:mb-6 leading-relaxed max-w-2xl">
                        {session.description}
                      </p>

                      {/* Watch Button */}
                      <motion.button
                        onClick={() => window.open(session.youtubeUrl, '_blank')}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className={`inline-flex items-center gap-2 xs:gap-2.5 sm:gap-3 px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 bg-gradient-to-r ${session.gradient} text-white font-bold rounded-lg xs:rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all text-xs xs:text-sm sm:text-base`}
                      >
                        <Play className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                        <span>Watch Session</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-10 xs:py-12 sm:py-16 md:py-20 lg:py-24 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 xs:mb-10 sm:mb-12"
          >
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2 xs:mb-3 sm:mb-4">
              What You'll <span className="text-red-400">Learn</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 sm:gap-6 md:gap-8">
            {[
              { icon: Target, text: 'Get clear on what to create and who to serve', color: 'red' },
              { icon: Sparkles, text: 'Turn your medical journey into authority', color: 'purple' },
              { icon: Zap, text: 'Build influence that leads to income', color: 'pink' },
              { icon: Users, text: 'Connect with a community of medical creators', color: 'amber' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-3 xs:gap-4 p-4 xs:p-5 sm:p-6 bg-gray-900/50 border border-gray-800 rounded-xl xs:rounded-2xl hover:border-red-500/30 transition-all group"
              >
                <div className={`w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 rounded-lg xs:rounded-xl bg-${item.color}-600/20 border border-${item.color}-500/30 flex items-center justify-center flex-shrink-0`}>
                  <item.icon className={`w-5 h-5 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-${item.color}-400`} />
                </div>
                <p className="text-gray-300 text-sm xs:text-base sm:text-lg font-medium leading-relaxed group-hover:text-white transition-colors">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 xs:py-12 sm:py-16 md:py-20 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-5 xs:p-6 sm:p-8 md:p-10 lg:p-12 bg-gradient-to-br from-purple-900/30 via-red-900/20 to-purple-900/30 border border-purple-500/20 rounded-2xl xs:rounded-3xl"
          >
            <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-2 xs:mb-3 sm:mb-4">
              Ready to Transform Your Career?
            </h2>
            <p className="text-gray-400 text-xs xs:text-sm sm:text-base md:text-lg mb-5 xs:mb-6 sm:mb-8 max-w-xl mx-auto">
              Join hundreds of medical professionals who have already started their creator journey.
            </p>
            <motion.button
              onClick={() => router.push('/programs')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 bg-gradient-to-r from-red-600 via-purple-600 to-red-600 text-white font-bold rounded-lg xs:rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all text-sm xs:text-base sm:text-lg"
            >
              Explore All Programs
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
