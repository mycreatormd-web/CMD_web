// app/components/CoreValuesSection.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';
import { 
  Eye, 
  Shield, 
  Compass, 
  Star,
  Sparkles,
  Zap,
  ChevronRight
} from 'lucide-react';

const CoreValuesSection = () => {
  const [animationStep, setAnimationStep] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const values = [
    {
      id: 'clarity',
      letter: 'C',
      word: 'Clarity',
      description: 'Simple, precise messaging that lands.',
      icon: Eye,
      color: 'from-red-500 to-pink-500',
      border: 'border-red-500/30',
      hover: 'hover:border-red-500/60'
    },
    {
      id: 'authority',
      letter: 'A',
      word: 'Authority',
      description: 'Trusted expertise that earns confidence.',
      icon: Shield,
      color: 'from-purple-500 to-indigo-500',
      border: 'border-purple-500/30',
      hover: 'hover:border-purple-500/60'
    },
    {
      id: 'relevance',
      letter: 'R',
      word: 'Relevance',
      description: 'Content that meets people where they are.',
      icon: Compass,
      color: 'from-blue-500 to-cyan-500',
      border: 'border-blue-500/30',
      hover: 'hover:border-blue-500/60'
    },
    {
      id: 'excellence',
      letter: 'E',
      word: 'Excellence',
      description: 'Thoughtful quality, every single time.',
      icon: Star,
      color: 'from-emerald-500 to-green-500',
      border: 'border-emerald-500/30',
      hover: 'hover:border-emerald-500/60'
    }
  ];

  // Surgical animation sequence
  useEffect(() => {
    if (!isInView) return;

    const sequence = async () => {
      setAnimationStep(1);
      await controls.start({
        scale: [0.9, 1],
        opacity: [0, 1],
        transition: { duration: 0.5, ease: 'easeOut' }
      });

      setTimeout(() => setAnimationStep(2), 500);
      setTimeout(() => setAnimationStep(3), 1100);
      setTimeout(() => setAnimationStep(4), 1700);
      setTimeout(() => setAnimationStep(5), 2300);
      setTimeout(() => setAnimationStep(6), 2800);
    };

    sequence();
  }, [isInView, controls]);

  return (
    <section className="relative py-12 sm:py-16 md:py-24 overflow-hidden">
      {/* Medical Theater Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-gray-950 to-purple-950/20" />
        
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: animationStep >= 1 ? 0.2 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-full blur-3xl" />
        </motion.div>
      </div>

      <div 
        ref={containerRef}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-8 sm:mb-10 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full border border-blue-500/20 mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
            <span className="text-xs sm:text-sm font-semibold text-blue-300">Core Values</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-2 sm:mb-3">
            C.A.R.E.
          </h2>
          <motion.p
            className="text-xs sm:text-base md:text-xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: animationStep >= 2 ? 1 : 0 }}
            transition={{ delay: 0.5 }}
          >
            Because we care about your voice.
          </motion.p>
        </motion.div>

        {/* Surgical Instrument Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            const isLetterVisible = animationStep >= 2;
            const isWordVisible = animationStep >= 3;
            const isDescVisible = animationStep >= 4;
            const isIntegrated = animationStep >= 5;
            const isActive = hoveredCard === value.id;

            return (
              <motion.div
                key={value.id}
                className="relative group"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{
                  opacity: isLetterVisible ? 1 : 0,
                  y: isLetterVisible ? 0 : 30,
                  scale: isLetterVisible ? 1 : 0.9,
                  transition: { 
                    delay: index * 0.1,
                    duration: 0.4,
                    type: "spring",
                    stiffness: 200
                  }
                }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                onMouseEnter={() => setHoveredCard(value.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Surgical Instrument Glow */}
                <motion.div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${value.color} rounded-xl sm:rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                  animate={{
                    scale: isActive ? [1, 1.05, 1] : 1
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />

                {/* Main Surgical Card */}
                <div className={`relative bg-gradient-to-br from-gray-900/90 to-gray-950/90 rounded-xl border ${value.border} ${value.hover} backdrop-blur-sm overflow-hidden transition-all duration-300`}>
                  <div className="relative p-4 sm:p-5 md:p-6">
                    {/* Letter Container */}
                    <motion.div
                      className="relative mb-3 sm:mb-4"
                      animate={{
                        scale: isLetterVisible ? 1 : 0.8,
                        opacity: isLetterVisible ? 1 : 0
                      }}
                      transition={{ delay: index * 0.12, duration: 0.35 }}
                    >
                      {/* Scalpel Trace Effect */}
                      <motion.div
                        className={`absolute inset-0 rounded-lg bg-gradient-to-br ${value.color} opacity-20 blur-sm`}
                        initial={{ scale: 0 }}
                        animate={{ 
                          scale: isLetterVisible ? [0, 1.2, 1] : 0,
                          opacity: isLetterVisible ? [0, 0.5, 0.2] : 0
                        }}
                        transition={{ 
                          duration: 0.8,
                          delay: index * 0.15
                        }}
                      />

                      {/* Medical Instrument Icon */}
                      <motion.div
                        className={`absolute -top-2 -right-2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg bg-gradient-to-br ${value.color} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                        whileHover={{ rotate: 15 }}
                      >
                        <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </motion.div>

                      {/* Letter */}
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto relative`}>
                        <motion.span
                          className="text-xl sm:text-2xl md:text-3xl font-black text-white"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ 
                            opacity: isLetterVisible ? 1 : 0,
                            scale: isLetterVisible ? 1 : 0
                          }}
                          transition={{ 
                            delay: index * 0.15,
                            duration: 0.25,
                            type: "spring",
                            stiffness: 400
                          }}
                        >
                          {value.letter}
                        </motion.span>

                        {/* Active Pulse Ring */}
                        {isActive && (
                          <motion.div
                            className="absolute inset-0 rounded-lg border-2 border-white/30"
                            initial={{ scale: 1 }}
                            animate={{ 
                              scale: [1, 1.1, 1],
                              opacity: [0.5, 0, 0.5]
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity 
                            }}
                          />
                        )}
                      </div>
                    </motion.div>

                    {/* Word Expansion (Mitosis Effect) */}
                    <AnimatePresence>
                      {isWordVisible && (
                        <motion.div
                          key={`word-${value.id}`}
                          initial={{ opacity: 0, y: 20, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: 'auto' }}
                          exit={{ opacity: 0, y: -20, height: 0 }}
                          transition={{ delay: 0.1, duration: 0.5 }}
                          className="overflow-hidden"
                        >
                          <motion.h3
                            className="text-base sm:text-lg md:text-xl font-bold text-white text-center mb-2 sm:mb-3"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.3 }}
                          >
                            {value.word}
                          </motion.h3>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Description Suture Animation */}
                    <AnimatePresence>
                      {isDescVisible && (
                        <motion.div
                          key={`desc-${value.id}`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                          className="overflow-hidden"
                        >
                          <motion.div
                            className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-2 sm:mb-3"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.35, duration: 0.4 }}
                          />
                          
                          <motion.p
                            className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.3 }}
                          >
                            {value.description}
                          </motion.p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Medical Vital Sign (Integration Indicator) */}
                  <motion.div
                    className="h-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ 
                      scaleX: isIntegrated ? 1 : 0,
                    }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  />
                </div>

                {/* Surgical Connection Lines (Integration Phase) */}
                {isIntegrated && index < values.length - 1 && (
                  <motion.div
                    className="absolute -right-12 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block w-12"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <div className="w-6 h-0.5 bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600" />
                    <motion.div
                      className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-blue-400"                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 0.3, 0.7]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Prescription Pad CTA */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: animationStep >= 6 ? 1 : 0,
            y: animationStep >= 6 ? 0 : 20
          }}
          transition={{ duration: 0.6 }}
        >
          {/* Prescription Divider */}
          <motion.div
            className="relative mb-4 sm:mb-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-red-600 to-purple-600 flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              </div>
            </div>
          </motion.div>

          {/* CTA Text */}
          <div className="text-center">
            <motion.p
              className="text-xs sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="font-bold text-white">Build with clarity.</span>{' '}
              <span className="text-gray-1000">Become a CreatorMD.</span>
            </motion.p>


          </div>
        </motion.div>

        {/* Surgical Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-red-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
