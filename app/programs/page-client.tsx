'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/app/components/Navigation';
import { programs } from '@/app/data/programs';
import ProgramModal from '@/app/components/ProgramModal';
import { Program } from '@/app/types/program';
import { 
  Zap, 
  BookOpen, 
  Users, 
  Heart, 
  Briefcase,
  Mail,
  MessageSquare,
  HelpCircle
} from 'lucide-react';

// Icon mapping
const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap className="w-16 h-16" />,
  BookOpen: <BookOpen className="w-16 h-16" />,
  Users: <Users className="w-16 h-16" />,
  Heart: <Heart className="w-16 h-16" />,
  Briefcase: <Briefcase className="w-16 h-16" />,
  Target: <Briefcase className="w-16 h-16" />,
};

// Enhanced color mapping for dark theme
const getColorClasses = (color: string) => {
  const colorMap: Record<string, { bg: string; text: string; border: string; glow: string }> = {
    'from-red-500 to-purple-500': {
      bg: 'from-purple-700 to-purple-900',
      text: 'text-purple-400',
      border: 'border-purple-700',
      glow: 'shadow-lg shadow-purple-500/20'
    },
    'from-purple-500 to-red-500': {
      bg: 'from-red-700 to-red-900',
      text: 'text-red-400',
      border: 'border-red-700',
      glow: 'shadow-lg shadow-red-500/20'
    },
    'from-purple-500 to-pink-500': {
      bg: 'from-purple-900 to-black',
      text: 'text-red-400',
      border: 'border-purple-700',
      glow: 'shadow-lg shadow-purple-500/20'
    },
  };
  return colorMap[color] || {
    bg: 'from-gray-800 to-gray-900',
    text: 'text-gray-400',
    border: 'border-gray-700',
    glow: 'shadow-lg shadow-gray-500/20'
  };
};

// Expandable Coming Soon Card Component
const ComingSoonCard = ({ 
  program, 
  onPreview,
  isVisible = true,
  isClient = false
}: { 
  program: Program; 
  onPreview: (program: Program) => void;
  isVisible?: boolean;
  isClient?: boolean;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const colorClasses = getColorClasses(program.color);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full"
    >
      <motion.div
        layout
        className="group relative h-full bg-gradient-to-br from-purple-950/40 via-black to-red-950/30 border border-purple-600/40 rounded-xl sm:rounded-2xl overflow-hidden hover:border-purple-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 backdrop-blur-sm"
      >
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-purple-600/5 group-hover:from-red-600/10 group-hover:to-purple-600/10 transition-all duration-500 pointer-events-none"></div>

        {/* Coming Soon Badge */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
          <motion.span 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-red-900/90 to-red-800/70 text-red-200 text-xs sm:text-sm font-bold rounded-full border border-red-500/60 backdrop-blur-sm shadow-lg shadow-red-600/30"
          >
            <motion.span 
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.span>
            <span className="hidden sm:inline">Coming Soon</span>
            <span className="sm:hidden">New</span>
          </motion.span>
        </div>

        {/* Icon Section - Mobile Optimized */}
        <div className={`bg-gradient-to-br ${colorClasses.bg} p-6 sm:p-8 flex items-center justify-center relative overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110 transform shadow-inner`}>
          <div className="absolute inset-0 opacity-20 group-hover:opacity-35 transition-opacity duration-300">
            <div className="absolute top-0 right-0 w-40 sm:w-48 h-40 sm:h-48 bg-white/15 rounded-full blur-3xl"></div>
          </div>
          <div className={`relative z-10 ${colorClasses.text} drop-shadow-lg`}>
            {isClient && (iconMap[program.icon] || <Zap className="w-14 sm:w-20 h-14 sm:h-20" />)}
            {!isClient && <Zap className="w-14 sm:w-20 h-14 sm:h-20" />}
          </div>
        </div>

        {/* Content - Mobile Optimized */}
        <motion.div layout className="p-4 sm:p-6 md:p-8 flex flex-col h-full relative z-10">
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-2 sm:mb-3 group-hover:text-red-300 transition-colors duration-300 line-clamp-2 bg-gradient-to-r from-red-200 via-purple-200 to-white bg-clip-text group-hover:text-transparent">
            {program.title}
          </h3>

          {/* Description - Single Line with Truncation */}
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? "auto" : "1.5rem" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="overflow-hidden mb-4 sm:mb-5"
          >
            <p className={`text-gray-200 text-sm sm:text-base leading-relaxed group-hover:text-gray-50 transition-colors ${!isExpanded ? 'line-clamp-1' : ''}`}>
              {program.shortDescription}
            </p>
          </motion.div>

          {/* Expand/Collapse Button */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className="mb-4 sm:mb-5 text-purple-300 hover:text-purple-100 transition-colors text-sm sm:text-base font-bold flex items-center gap-2 group/btn px-2 py-1.5 rounded-lg hover:bg-purple-600/15"
          >
            <span>{isExpanded ? 'Show Less Details' : 'Show Full Details'}</span>
            <motion.span
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="text-xs"
            >
              ▼
            </motion.span>
          </motion.button>

          {/* Metadata - Only show when expanded */}
          <motion.div
            initial={false}
            animate={{ 
              opacity: isExpanded ? 1 : 0,
              height: isExpanded ? "auto" : 0
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="overflow-hidden"
          >
            {(program.duration || program.level) && (
              <div className="flex flex-wrap gap-3 sm:gap-6 mb-4 sm:mb-5 pb-4 sm:pb-5 border-t border-purple-700/30">
                {program.duration && (
                  <div>
                    <span className="text-xs font-bold text-purple-400 uppercase tracking-widest block mb-1">Duration</span>
                    <p className="text-sm sm:text-base font-bold text-white">{program.duration}</p>
                  </div>
                )}
                {program.level && (
                  <div>
                    <span className="text-xs font-bold text-purple-400 uppercase tracking-widest block mb-1">Level</span>
                    <p className="text-sm sm:text-base font-bold text-white">{program.level}</p>
                  </div>
                )}
              </div>
            )}
          </motion.div>

          {/* Actions - Only show when expanded */}
          <motion.div
            initial={false}
            animate={{ 
              opacity: isExpanded ? 1 : 0,
              height: isExpanded ? "auto" : 0
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-3 mt-auto">
              <motion.button
                onClick={() => onPreview(program)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-4 sm:px-5 py-2.5 sm:py-3 bg-gradient-to-r from-purple-700 to-purple-900 border border-purple-600 text-purple-100 font-bold rounded-lg hover:from-purple-600 hover:to-purple-800 hover:border-purple-500 transition-all text-sm sm:text-base hover:shadow-lg hover:shadow-purple-600/30"
              >
                Preview Program
              </motion.button>
              <motion.button
                onClick={() => onPreview(program)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-4 sm:px-5 py-2.5 sm:py-3 border-2 border-red-600/60 text-red-300 font-bold rounded-lg bg-red-600/15 hover:bg-red-600/25 hover:border-red-600 transition-all text-sm sm:text-base hover:shadow-lg hover:shadow-red-600/30"
              >
                Join Waitlist
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default function ProgramsPageClient() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAllComingSoon, setShowAllComingSoon] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handlePreviewClick = (program: Program) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProgram(null), 300);
  };

  // Display coming soon programs without randomization to avoid hydration errors
  // Show only 3 cards initially, show all when expanded
  const visibleComingSoonPrograms = showAllComingSoon 
    ? programs.comingSoon
    : programs.comingSoon.slice(0, 3);

  return (
    <main className="relative bg-white">
      <Navigation />

      {/* Hero Section - Premium Design - Mobile Optimized */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 px-4 sm:px-6 md:px-8 overflow-hidden bg-black">
        {/* Gradient Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-red-900/40 via-purple-900/30 to-transparent rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-purple-900/40 to-transparent rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-1/2 left-1/4 w-72 h-72 bg-gradient-to-tr from-red-900/30 to-transparent rounded-full blur-3xl opacity-40"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-900/30 to-purple-900/30 rounded-full mb-6 border border-red-700/50 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-purple-500 animate-pulse"></span>
              <span className="text-sm font-bold text-red-300">Professional Learning Paths</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight">
              Transform Your <span className="bg-gradient-to-r from-red-500 via-purple-500 to-red-600 bg-clip-text text-transparent">Medical Career</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium px-2">
              Expert-designed programs combining self-paced learning, live bootcamps, and personalized mentorship. Take control of your professional development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Available Now Section - Premium Cards - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-black via-purple-950/20 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-red-600 to-purple-600 rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">
                Available Now
              </h2>
            </div>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg mt-2 sm:mt-3">Start your transformation today with our most popular programs</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {programs.availableNow.map((program, idx) => {
              const colorClasses = getColorClasses(program.color);
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20, rotateX: 10 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.12, ease: "easeOut" }}
                  viewport={{ once: true }}
                  whileHover={{ y: -12, transition: { duration: 0.3 } }}
                >
                  <div className={`group relative bg-black rounded-3xl border border-purple-900/40 overflow-hidden hover:border-red-600/60 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 flex flex-col h-full`}>
                    {/* Gradient border effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 via-purple-600/0 to-black/0 group-hover:from-red-600/5 group-hover:via-purple-600/5 transition-all duration-500 pointer-events-none rounded-3xl"></div>

                    {/* Top gradient accent bar */}
                    <div className={`h-1 bg-gradient-to-r ${program.color}`}></div>

                    {/* Icon Section */}
                    <div className="px-6 sm:px-8 pt-6 sm:pt-8 pb-4 flex items-start">
                      <div className={`bg-gradient-to-br ${colorClasses.bg} p-3 sm:p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                        <div className={`relative z-10 ${colorClasses.text}`}>
                          {isClient && (iconMap[program.icon] || <Zap className="w-8 sm:w-10 h-8 sm:h-10" />)}
                          {!isClient && <Zap className="w-8 sm:w-10 h-8 sm:h-10" />}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-6 sm:px-8 pb-6 sm:pb-8 flex flex-col flex-grow relative z-10">
                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-black text-white mb-3 group-hover:text-red-300 transition-colors duration-300 leading-tight">
                        {program.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 text-sm sm:text-base mb-6 flex-grow leading-relaxed group-hover:text-gray-300 transition-colors">
                        {program.shortDescription}
                      </p>

                      {/* Metadata - Compact row */}
                      {(program.duration || program.level) && (
                        <div className="flex gap-4 mb-6 text-xs sm:text-sm">
                          {program.duration && (
                            <div className="flex items-center gap-2">
                              <span className="text-red-400 font-bold">⏱</span>
                              <span className="text-gray-300">{program.duration}</span>
                            </div>
                          )}
                          {program.level && (
                            <div className="flex items-center gap-2">
                              <span className="text-red-400 font-bold">📊</span>
                              <span className="text-gray-300">{program.level}</span>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Actions */}
                      <div className="flex flex-col gap-3 pt-2 border-t border-purple-900/30">
                        <motion.button
                          onClick={() => handlePreviewClick(program)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full px-4 sm:px-6 py-3 bg-gradient-to-r from-purple-900/40 to-red-900/40 border border-purple-600/40 text-purple-200 font-bold rounded-xl hover:from-purple-800/60 hover:to-red-800/60 hover:border-red-600/60 transition-all duration-300 text-sm hover:shadow-lg hover:shadow-purple-600/20"
                        >
                          Quick Preview
                        </motion.button>
                        {program.status === 'available' && program.externalLink && (
                          <button
                            onClick={() => window.open(program.externalLink, '_blank')}
                            className="w-full px-4 sm:px-6 py-3 bg-gradient-to-r from-red-600 to-purple-600 text-white font-bold rounded-xl hover:from-red-700 hover:to-purple-700 transition-all duration-300 text-sm hover:shadow-lg hover:shadow-red-600/40 flex items-center justify-center gap-2"
                          >
                            <span>Access Course</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </button>
                        )}
                        {program.status === 'available' && program.internalPath && !program.externalLink && (
                          <motion.a
                            href={program.internalPath}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full block px-4 sm:px-6 py-3 bg-gradient-to-r from-red-600 to-purple-600 text-white font-bold rounded-xl hover:from-red-700 hover:to-purple-700 transition-all duration-300 text-sm text-center hover:shadow-lg hover:shadow-red-600/40"
                          >
                            Access Course
                          </motion.a>
                        )}
                        {program.status !== 'available' && (
                          <button
                            className="w-full px-4 sm:px-6 py-3 border-2 border-gray-700 text-gray-500 font-bold rounded-xl bg-gray-900/30 text-sm cursor-not-allowed"
                            disabled
                          >
                            Coming Soon
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coming Soon Section - Optimized Grid with View More */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-gradient-to-b from-red-600 to-black rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">
                Coming Soon
              </h2>
            </div>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg mt-3">Exciting new programs launching soon. Secure your spot with early access.</p>
          </motion.div>

          {/* Grid - Shows 3 cards on first row, rest hidden until expanded */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10">
            {visibleComingSoonPrograms.map((program, idx) => (
              <ComingSoonCard 
                key={program.id}
                program={program} 
                onPreview={handlePreviewClick}
                isVisible={true}
                isClient={isClient}
              />
            ))}
          </div>

          {/* View More / View Less Button */}
          {programs.comingSoon.length > 3 && (
            <motion.div
              className="flex justify-center"
              layout
            >
              <motion.button
                onClick={() => setShowAllComingSoon(!showAllComingSoon)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="px-8 sm:px-12 py-3 sm:py-4 border-2 border-red-600/60 text-red-300 hover:text-red-200 font-black rounded-xl hover:bg-red-600/20 hover:border-red-400 transition-all text-sm sm:text-base flex items-center gap-2"
              >
                <span>
                  {showAllComingSoon 
                    ? `Show Less (${programs.comingSoon.length - 3} hidden)` 
                    : `View More Programs (+${programs.comingSoon.length - 3})`}
                </span>
                <motion.span
                  animate={{ rotate: showAllComingSoon ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                  ▼
                </motion.span>
              </motion.button>
            </motion.div>
          )}

          {/* All remaining cards - animated reveal */}
          <motion.div
            layout
            initial={false}
            animate={{ height: showAllComingSoon ? "auto" : 0, opacity: showAllComingSoon ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10">
              {programs.comingSoon.slice(3).map((program, idx) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <ComingSoonCard 
                    program={program} 
                    onPreview={handlePreviewClick}
                    isVisible={showAllComingSoon}
                    isClient={isClient}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section - Premium */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-gray-950 via-black to-gray-950 text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-red-600/5 to-purple-600/5 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-gradient-to-b from-red-500 to-purple-600 rounded-full"></div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
                How It Works
              </h2>
            </div>
            <p className="text-base sm:text-lg text-gray-400 mt-3 max-w-2xl">A simple 3-step process to accelerate your medical career</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {[
              {
                step: '01',
                title: 'Choose Your Path',
                description: 'Browse our comprehensive selection of programs designed specifically for healthcare professionals at every career stage.',
                icon: MessageSquare,
              },
              {
                step: '02',
                title: 'Learn at Your Pace',
                description: 'Access interactive content, expert instruction, and practical resources that fit your schedule and learning style.',
                icon: BookOpen,
              },
              {
                step: '03',
                title: 'Get Expert Support',
                description: 'Connect with experienced mentors, join our community, and get personalized guidance throughout your journey.',
                icon: Users,
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-purple-900/30 to-red-900/30 backdrop-blur-md border border-purple-700/30 rounded-2xl p-8 h-full hover:border-red-600/60 transition-all duration-400 hover:bg-gradient-to-br hover:from-purple-900/50 hover:to-red-900/50 hover:shadow-2xl hover:shadow-red-600/20 group-hover:-translate-y-2">
                  {/* Step Number */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: idx * 0.12 + 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-6xl font-black bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent mb-4 opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    {item.step}
                  </motion.div>

                  {/* Icon */}
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600/30 to-purple-600/30 flex items-center justify-center mb-6 group-hover:from-red-600/50 group-hover:to-purple-600/50 transition-all border border-red-600/20 group-hover:border-red-600/50"
                  >
                    <item.icon className="w-7 h-7 text-red-400 group-hover:text-red-300 transition-colors" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-black mb-4 text-white group-hover:text-red-300 transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed text-base group-hover:text-gray-300 transition-colors duration-300">
                    {item.description}
                  </p>

                  {/* Connector Line (hidden on mobile) */}
                  {idx < 2 && (
                    <motion.div 
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileInView={{ scaleX: 1, opacity: 1 }}
                      transition={{ delay: idx * 0.12 + 0.4, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-1 bg-gradient-to-r from-red-600 via-purple-600 to-transparent opacity-30 group-hover:opacity-70 transition-opacity origin-left"
                    ></motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section - Premium */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-black">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-gradient-to-b from-purple-600 to-red-600 rounded-full"></div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
                Frequently Asked Questions
              </h2>
            </div>
            <p className="text-gray-400 text-base sm:text-lg mt-3">Everything you need to know about our programs</p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: 'Who are these programs for?',
                a: 'Our programs are designed for healthcare professionals including doctors, nurses, and medical students looking to advance their skills and career. Whether you\'re early in your career or seeking specialization, we have a path for you.',
              },
              {
                q: 'Do I need prior experience?',
                a: 'Different programs cater to different levels. We offer beginner-friendly programs for those just starting out, as well as advanced programs for experienced professionals. Check each program details for specific prerequisites.',
              },
              {
                q: 'What if I need to pause or cancel?',
                a: 'We understand life happens. Most of our programs offer flexible access and pause options. Contact our support team for specific details about your program.',
              },
              {
                q: 'How do you provide support?',
                a: 'We provide support through live Q&A sessions, community forums, email support, and 1-on-1 mentorship for select programs. Our goal is your success.',
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-r from-gray-900 to-gray-950 rounded-2xl p-6 sm:p-8 border border-purple-700/20 hover:border-red-600/40 hover:shadow-lg hover:shadow-red-600/20 transition-all duration-300 group-hover:-translate-y-1">
                  <div className="flex gap-4">
                    <motion.div 
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      className="flex-shrink-0 pt-1"
                    >
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-red-600 to-purple-600 flex items-center justify-center">
                        <HelpCircle className="w-4 h-4 text-white" />
                      </div>
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-black text-white text-lg sm:text-xl mb-3 group-hover:text-red-300 transition-colors duration-300">
                        {faq.q}
                      </h3>
                      <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/CTA Section - Premium */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-black via-black to-purple-950 text-white relative overflow-hidden">
        {/* Decorative Gradients */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-red-600/5 to-purple-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              Ready to Transform Your <span className="bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">Medical Career?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
              Join thousands of healthcare professionals already accelerating their growth with our programs. Secure your spot today and start your journey to success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center">
              <motion.a
                href="#"
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-purple-600 text-white font-black rounded-xl hover:shadow-2xl hover:shadow-red-600/50 transition-all text-base sm:text-lg border border-red-500/50 hover:border-red-400"
              >
                Explore All Programs
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-red-600/60 text-red-300 font-black rounded-xl hover:bg-red-600/20 transition-all text-base sm:text-lg flex items-center justify-center gap-2 hover:border-red-400 hover:text-red-200"
              >
                <Mail className="w-5 h-5" />
                Get Updates
              </motion.a>
            </div>

            {/* Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-16 pt-12 border-t border-purple-700/30"
            >
              <p className="text-gray-400 text-sm font-semibold mb-6">Trusted by healthcare professionals worldwide</p>
              <div className="flex flex-wrap justify-center gap-8 sm:gap-12 text-center">
                {[
                  { stat: '10K+', label: 'Active Learners' },
                  { stat: '50+', label: 'Expert Instructors' },
                  { stat: '98%', label: 'Satisfaction Rate' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className="group"
                  >
                    <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent group-hover:from-red-400 group-hover:to-purple-400 transition-all">
                      {item.stat}
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm mt-2 group-hover:text-gray-300 transition-colors">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Program Modal */}
      <ProgramModal 
        program={selectedProgram} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
      />
    </main>
  );
}
