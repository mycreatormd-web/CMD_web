'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  HelpCircle,
  X
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
  const [isHovered, setIsHovered] = useState(false);
  const colorClasses = getColorClasses(program.color);

  const getLevelColor = (level?: string) => {
    if (!level) return { text: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/20' };
    const lowerLevel = level.toLowerCase();
    if (lowerLevel.includes('beginner')) return { text: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/20' };
    if (lowerLevel.includes('intermediate')) return { text: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-400/20' };
    if (lowerLevel.includes('advanced')) return { text: 'text-red-400', bg: 'bg-red-400/10', border: 'border-red-400/20' };
    return { text: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/20' };
  };

  const levelColor = getLevelColor(program.level);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
      exit={{ opacity: 0, y: 30, scale: 0.95 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Glow Effect */}
      <motion.div
        className="absolute -inset-0.5 bg-gradient-to-r from-red-600/20 via-purple-600/20 to-red-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{
          scale: isHovered ? [1, 1.02, 1] : 1,
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Main Card */}
      <div
        className="group relative bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-gray-950/90 rounded-2xl border border-gray-800/50 overflow-hidden backdrop-blur-sm flex flex-col h-auto hover:border-red-500/40 transition-all duration-300"
      >
        {/* Medical Instrument Top Bar */}
        <div className="px-5 sm:px-6 pt-5 sm:pt-6 pb-4 border-b border-gray-800/50">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                {program.level && (
                  <div className={`px-2.5 py-1 rounded-full text-xs font-semibold ${levelColor.bg} ${levelColor.text} ${levelColor.border} border`}>
                    {program.level}
                  </div>
                )}
                {program.duration && (
                  <div className="flex items-center gap-1 text-xs text-gray-500 bg-gray-800/30 px-2 py-1 rounded-full">
                    <Zap className="w-3 h-3" />
                    {program.duration}
                  </div>
                )}
              </div>
            </div>

            {/* Coming Soon Badge */}
            <div className="relative">
              <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-red-600/20 to-purple-600/20 border border-red-500/30 backdrop-blur-sm">
                <span className="text-xs font-bold text-red-300 flex items-center gap-1.5 whitespace-nowrap">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
                  Coming Soon
                </span>
              </div>
            </div>
          </div>

          {/* Program Title */}
          <h3 className="text-lg sm:text-xl font-bold text-white mb-3 leading-tight line-clamp-2">
            {program.title}
          </h3>

          {/* Description */}
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? "auto" : "2.5rem" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="overflow-hidden"
          >
            <p className={`text-gray-400 text-sm leading-relaxed ${!isExpanded ? 'line-clamp-1' : ''}`}>
              {program.shortDescription}
            </p>
          </motion.div>
        </div>

        {/* Metadata - Medical Style */}
          <motion.div
            initial={false}
            animate={{ 
              opacity: isExpanded ? 1 : 0,
              height: isExpanded ? "auto" : 0,
              marginBottom: isExpanded ? 12 : 0
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="overflow-hidden"
          >
          </motion.div>

        {/* Card Footer */}
        <div className="px-5 sm:px-6 py-4 sm:py-5 bg-gray-900/50 border-t border-gray-800/50 flex-grow flex flex-col">
          {/* Waitlist & Button */}
          <div className="flex items-center justify-between gap-3">
            {/* Join Waitlist Button */}
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex-1 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                isExpanded
                  ? 'bg-gray-800/50 text-gray-300 hover:bg-gray-800/80'
                  : 'bg-gradient-to-r from-red-600 to-purple-600 text-white hover:from-red-500 hover:to-purple-500 shadow-lg shadow-red-500/20'
              }`}
            >
              {isExpanded ? 'Show Less' : 'Show Details'}
              <motion.span
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="text-xs"
              >
                ▼
              </motion.span>
            </motion.button>
          </div>

          {/* Actions - Premium Buttons */}
          <motion.div
            initial={false}
            animate={{ 
              opacity: isExpanded ? 1 : 0,
              height: isExpanded ? "auto" : 0,
              marginTop: isExpanded ? 12 : 0
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="overflow-hidden flex flex-col gap-3"
          >
            <motion.button
              onClick={() => onPreview(program)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-4 py-2.5 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-500 hover:via-pink-500 hover:to-red-500 text-white font-bold rounded-lg border border-purple-400/50 hover:border-purple-300/80 transition-all duration-300 text-sm shadow-lg"
            >
              Preview Program
            </motion.button>
            
            <motion.button
              onClick={() => onPreview(program)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-4 py-2.5 border-2 border-red-500/70 hover:border-red-400 text-red-300 hover:text-red-200 font-bold rounded-lg bg-gradient-to-r from-red-600/10 via-red-600/5 to-transparent hover:from-red-600/20 hover:via-red-600/10 transition-all duration-300 text-sm"
            >
              Join Waitlist
            </motion.button>
          </motion.div>
        </div>

        {/* Interactive Hover Elements */}
        <AnimatePresence>
          {isHovered && (
            <>
              {/* Scan Line Effect */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: '100%' }}
                transition={{ duration: 0.8, ease: 'linear' }}
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent pointer-events-none"
              />
              
              {/* Corner Accents */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute top-3 right-3 w-2 h-2 border-t-2 border-r-2 border-red-400/50 pointer-events-none"
              />
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="absolute top-3 left-3 w-2 h-2 border-t-2 border-l-2 border-purple-400/50 pointer-events-none"
              />
            </>
          )}
        </AnimatePresence>

        {/* Particle Effect on Hover */}
        {isHovered && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-red-400 rounded-full"
                initial={{ 
                  x: Math.random() * 100 + '%',
                  y: Math.random() * 100 + '%',
                  scale: 0,
                  opacity: 0
                }}
                animate={{ 
                  x: Math.random() * 100 + '%',
                  y: Math.random() * 100 + '%',
                  scale: [0, 1, 0],
                  opacity: [0, 0.8, 0]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default function ProgramsPageClient() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAllComingSoon, setShowAllComingSoon] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
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

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setEmailSubmitted(true);
      // TODO: Connect to Google Sheets API here
      setTimeout(() => {
        setIsEmailModalOpen(false);
        setEmail('');
        setEmailSubmitted(false);
      }, 2000);
    }
  };

  const handleCloseEmailModal = () => {
    setIsEmailModalOpen(false);
    setEmail('');
    setEmailSubmitted(false);
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-900/30 to-purple-900/30 rounded-full mb-6 mt-6 sm:mt-0 border border-red-700/50 backdrop-blur-sm"
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
      <section className="py-2 sm:py-4 md:py-6 lg:py-10 px-2 sm:px-6 md:px-8 bg-gradient-to-b from-black via-purple-950/20 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4 sm:mb-6 md:mb-8"
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
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.12, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="w-full relative group"
                  onMouseEnter={() => {}}
                  onMouseLeave={() => {}}
                >
                  {/* Card Glow Effect */}
                  <motion.div
                    className="absolute -inset-0.5 bg-gradient-to-r from-red-600/20 via-purple-600/20 to-red-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  {/* Main Card */}
                  <div className="group relative bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-gray-950/90 rounded-2xl border border-gray-800/50 overflow-hidden backdrop-blur-sm flex flex-col h-auto hover:border-red-500/40 transition-all duration-300">
                    {/* Top gradient accent bar */}
                    <div className={`h-1 bg-gradient-to-r ${program.color}`}></div>

                    {/* Content */}
                    <div className="px-5 sm:px-6 pt-5 sm:pt-6 pb-6 sm:pb-8 flex flex-col flex-grow relative z-10">
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
                      <div className="flex flex-col gap-3 pt-4 border-t border-gray-800/50">
                        {program.status === 'available' && program.externalLink && (
                          <motion.button
                            onClick={() => window.open(program.externalLink, '_blank')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full px-4 py-2.5 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-500 hover:via-pink-500 hover:to-red-500 text-white font-bold rounded-lg border border-purple-400/50 hover:border-purple-300/80 transition-all duration-300 text-sm shadow-lg"
                          >
                            Access Now ✨
                          </motion.button>
                        )}
                        {program.status === 'available' && program.internalPath && !program.externalLink && (
                          <motion.a
                            href={program.internalPath}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full block px-4 py-2.5 text-center bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-500 hover:via-pink-500 hover:to-red-500 text-white font-bold rounded-lg border border-purple-400/50 hover:border-purple-300/80 transition-all duration-300 text-sm shadow-lg"
                          >
                            Access Now ✨
                          </motion.a>
                        )}
                        <motion.button
                          onClick={() => handlePreviewClick(program)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full px-4 py-2.5 border-2 border-red-500/70 hover:border-red-400 text-red-300 hover:text-red-200 font-bold rounded-lg bg-gradient-to-r from-red-600/10 via-red-600/5 to-transparent hover:from-red-600/20 hover:via-red-600/10 transition-all duration-300 text-sm"
                        >
                          Preview 🎬
                        </motion.button>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 auto-rows-max">
            {programs.comingSoon.slice(0, 3).map((program, idx) => (
              <ComingSoonCard 
                key={program.id}
                program={program} 
                onPreview={handlePreviewClick}
                isVisible={true}
                isClient={isClient}
              />
            ))}
          </div>

          {/* All remaining cards - animated reveal */}
          <AnimatePresence>
            {showAllComingSoon && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 auto-rows-max">
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
                        isVisible={true}
                        isClient={isClient}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* View Less Button - Inside expanded section */}
                <motion.div
                  className="flex justify-center mt-8 sm:mt-10"
                >
                  <motion.button
                    onClick={() => setShowAllComingSoon(false)}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 sm:px-12 py-3 sm:py-4 border-2 border-red-600/60 text-red-300 hover:text-red-200 font-black rounded-xl hover:bg-red-600/20 hover:border-red-400 transition-all text-sm sm:text-base flex items-center gap-2"
                  >
                    <span>Show Less ({programs.comingSoon.length - 3} hidden)</span>
                    <motion.span animate={{ rotate: 180 }}>▼</motion.span>
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* View More Button - Only shown when not expanded */}
          {programs.comingSoon.length > 3 && !showAllComingSoon && (
            <motion.div
              className="flex justify-center mt-8 sm:mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={() => setShowAllComingSoon(true)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 sm:px-12 py-3 sm:py-4 border-2 border-red-600/60 text-red-300 hover:text-red-200 font-black rounded-xl hover:bg-red-600/20 hover:border-red-400 transition-all text-sm sm:text-base flex items-center gap-2"
              >
                <span>View More Programs (+{programs.comingSoon.length - 3})</span>
                <motion.span animate={{ rotate: 0 }}>▼</motion.span>
              </motion.button>
            </motion.div>
          )}
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
              <motion.button
                onClick={() => setIsEmailModalOpen(true)}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-red-600/60 text-red-300 font-black rounded-xl hover:bg-red-600/20 transition-all text-base sm:text-lg flex items-center justify-center gap-2 hover:border-red-400 hover:text-red-200"
              >
                <Mail className="w-5 h-5" />
                Get Updates
              </motion.button>
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

      {/* Email Newsletter Modal */}
      <AnimatePresence>
        {isEmailModalOpen && (
          <>
            {/* Blurred Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseEmailModal}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6"
            >
              <div className="w-full max-w-md bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-gray-950/95 rounded-2xl border border-red-500/30 shadow-2xl shadow-red-500/20 backdrop-blur-xl overflow-hidden">
                {/* Close Button */}
                <button
                  onClick={handleCloseEmailModal}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {!emailSubmitted ? (
                  <div className="p-8 sm:p-10">
                    {/* Decorative Top Bar */}
                    <div className="h-1 bg-gradient-to-r from-red-600 to-purple-600 rounded-full mb-6"></div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                      Stay Updated
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base mb-8">
                      Get notified about new programs, exclusive offers, and medical career insights delivered to your inbox.
                    </p>

                    {/* Email Form */}
                    <form onSubmit={handleEmailSubmit} className="space-y-4">
                      <div className="relative">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your@email.com"
                          required
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/30 transition-all duration-300"
                        />
                        <Mail className="absolute right-3 top-3.5 w-5 h-5 text-red-400/60" />
                      </div>

                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full px-4 py-3 bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-500 hover:to-purple-500 text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-red-500/20"
                      >
                        Join Newsletter
                      </motion.button>
                    </form>

                    {/* Privacy Notice */}
                    <p className="text-xs text-gray-500 mt-6 text-center">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </div>
                ) : (
                  <div className="p-8 sm:p-10 flex flex-col items-center justify-center text-center">
                    {/* Success Animation */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="mb-6"
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/50 flex items-center justify-center">
                        <motion.svg
                          className="w-8 h-8 text-green-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </motion.svg>
                      </div>
                    </motion.div>

                    {/* Success Message */}
                    <h4 className="text-xl sm:text-2xl font-black text-white mb-2">
                      Success!
                    </h4>
                    <p className="text-gray-400 text-sm sm:text-base">
                      Thank you for subscribing! Check your inbox for exclusive updates and program launches.
                    </p>

                    {/* Success Checkmarks */}
                    <div className="mt-6 space-y-3 text-left w-full">
                      {[
                        'Exclusive program previews',
                        'Early bird access to new courses',
                        'Medical career tips & resources'
                      ].map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-5 h-5 rounded-full bg-green-500/30 border border-green-500/50 flex items-center justify-center flex-shrink-0">
                            <span className="text-xs text-green-400">✓</span>
                          </div>
                          <span className="text-gray-300 text-sm">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Program Modal */}
      <ProgramModal 
        program={selectedProgram} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
      />
    </main>
  );
}
