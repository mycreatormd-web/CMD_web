// app/components/FounderDropdown.tsx - COMPLETE REPLACEMENT
"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  User, ChevronDown, Heart, Sparkles, 
  X, BookOpen, Zap, GraduationCap, Award,
  Activity, MessageSquare, Globe, Clock, TrendingUp, CheckCircle
} from 'lucide-react';

const chapters = [
  {
    id: 1,
    title: "The Struggle",
    color: "from-blue-500 to-cyan-500",
    icon: "📖"
  },
  {
    id: 2,
    title: "The Awakening",
    color: "from-emerald-500 to-teal-500",
    icon: "💡"
  },
  {
    id: 3,
    title: "The Invitation",
    color: "from-blue-600 to-emerald-600",
    icon: "🚀"
  }
];

const FounderDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeChapter, setActiveChapter] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    // Lock/unlock body scroll when modal opens/closes
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const scrollHeight = contentRef.current.scrollHeight - contentRef.current.clientHeight;
        const scrolled = contentRef.current.scrollTop;
        const progress = scrollHeight > 0 ? (scrolled / scrollHeight) * 100 : 0;
        setScrollProgress(progress);
        
        // Determine active chapter based on scroll position (more precise thresholds)
        if (progress < 33.33) {
          setActiveChapter(0);
        } else if (progress < 66.66) {
          setActiveChapter(1);
        } else {
          setActiveChapter(2);
        }
      }
    };

    const contentElement = contentRef.current;
    if (contentElement) {
      // Use passive listener for better scroll performance
      contentElement.addEventListener('scroll', handleScroll, { passive: true });
      // Call once to set initial state
      handleScroll();
    }

    return () => {
      if (contentElement) {
        contentElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Reset scroll when opening
      setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.scrollTop = 0;
          setScrollProgress(0);
          setActiveChapter(0);
        }
      }, 100);
    }
  };

  // Parallax values
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div ref={containerRef} className="relative my-2">
      {/* Top Section - Always Visible */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 rounded-4xl overflow-hidden">
          <motion.div 
            style={{ y: y1 }}
            className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-emerald-400/20 rounded-full blur-3xl"
          />
          <motion.div 
            style={{ y: y2 }}
            className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/50 to-emerald-50/30 rounded-4xl" />
          <div className="absolute inset-0 border-2 border-white/50 rounded-4xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 p-12 rounded-4xl">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mb-6"
            >
              <div className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-full">
                <User className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-bold tracking-wide">MEET THE FOUNDER</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-blue-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                Dr. Valerie Okorie
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Doctor • Content Creator • Founder
            </motion.p>
          </div>

          {/* Founder Card with Journey */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring" }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl md:rounded-3xl border-2 border-gray-200 shadow-2xl overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                  {/* Left - Portrait */}
                  <div className="relative">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 20, repeat: Infinity }}
                      className="relative"
                    >
                      {/* Outer Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-3xl blur-2xl opacity-30" />
                      
                      {/* Portrait Container */}
                      <div className="relative bg-white rounded-2xl p-3 shadow-2xl">
                        <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-emerald-50">

                          {/* Portrait - Image or Placeholder */}
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="relative">
                              <motion.div
                                animate={{ scale: [1, 1.02, 1] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-100 to-emerald-100 border-6 border-white shadow-2xl flex items-center justify-center overflow-hidden"
                              >
                                {/* 
                                  TO ADD YOUR PICTURE:
                                  Replace the <User /> icon below with an <img /> tag.
                                  Place your image file in: public/founder-image.jpg
                                  Then uncomment and use the img tag below:
                                */}
                                {/* <img src="/founder-image.jpg" alt="Dr. Valerie Okorie" className="w-full h-full object-cover" /> */}
                                <img src="/founder-image.jpg" alt="Dr. Valerie Okorie" className="w-full h-full object-cover" />
                              </motion.div>
                              
                              {/* Animated Ring */}
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-400 border-r-emerald-400"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Badges */}
                    <div className="flex justify-center gap-3 mt-4">
                      {[
                        { text: "MD", color: "bg-blue-500" },
                        { text: "Creator", color: "bg-emerald-500" },
                        { text: "Founder", color: "bg-purple-500" },
                      ].map((badge, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 + idx * 0.1 }}
                          className={`${badge.color} text-white px-3 py-1 text-sm rounded-full font-bold shadow-lg`}
                        >
                          {badge.text}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Right - Bio */}
                  <div className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                    >
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        The CreatorMD Journey
                      </h3>
                      <p className="text-base text-gray-600 font-semibold mb-3">
                        From quiet struggle to building CreatorMD
                      </p>
                      
                      <div className="space-y-3">
                        <p className="text-sm text-gray-700 leading-relaxed">
                          Every great movement starts with a personal story. Mine began at the intersection of medicine and creativity — a space filled with both passion and confusion.
                        </p>
                        
                        <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-lg p-3 border-l-4 border-blue-500">
                          <p className="text-sm text-gray-900 font-semibold">
                            "I was confused, inconsistent, and overwhelmed—but I knew I was meant to create."
                          </p>
                        </div>
                        
                        <p className="text-gray-700 leading-relaxed">
                          This journey from struggle to clarity is what inspired CreatorMD — a system designed to help medics like you avoid the same pitfalls and build with confidence.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Toggle Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="flex justify-center mt-6"
                >
                  <motion.button
                    onClick={handleToggle}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 60px rgba(59, 130, 246, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative px-8 py-3 rounded-xl font-bold text-base flex items-center gap-3 transition-all ${
                      isOpen 
                        ? 'bg-gradient-to-r from-gray-900 to-gray-700 text-white shadow-2xl' 
                        : 'bg-gradient-to-r from-blue-600 via-emerald-600 to-cyan-600 text-white shadow-2xl hover:shadow-3xl'
                    }`}
                  >
                    {isOpen ? (
                      <>
                        <X className="w-5 h-5" />
                        <span>Close</span>
                      </>
                    ) : (
                      <>
                        <BookOpen className="w-5 h-5" />
                        <span>Read Journey</span>
                        <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                    
                    {/* Pulsing Effect */}
                    {!isOpen && (
                      <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-2xl border-2 border-white/30"
                      />
                    )}
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Dropdown Content with Blur Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Full-screen Blur Overlay Background - clickable to close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 backdrop-blur-md bg-black/40 z-[60] cursor-pointer"
              transition={{ duration: 0.3 }}
            />
            
            {/* Modal Content - Centered Box */}
            <motion.div
              initial={{ 
                opacity: 0,
                scale: 0.85,
                y: 40
              }}
              animate={{ 
                opacity: 1,
                scale: 1,
                y: 0
              }}
              exit={{ 
                opacity: 0,
                scale: 0.85,
                y: 40
              }}
              transition={{ 
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
              }}
              onClick={(e) => e.stopPropagation()}
              className="fixed inset-0 z-[70] flex items-center justify-center p-4"
            >
              {/* Centered Modal Box with Enhanced Styling */}
              <motion.div 
                className="w-full max-w-3xl md:max-w-3xl sm:max-w-lg max-h-[85vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
              >
                {/* Progress Indicator with Chapter Titles */}
                <div className="flex-shrink-0 bg-gradient-to-r from-white via-blue-50/30 to-white border-b border-gray-200 px-6 py-5">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <motion.h3 
                        key={`chapter-${activeChapter}`}
                        className="text-sm font-bold text-transparent bg-gradient-to-r from-blue-600 via-emerald-600 to-cyan-600 bg-clip-text"
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 15 }}
                        transition={{ duration: 0.3 }}
                      >
                        {chapters[activeChapter].title}
                      </motion.h3>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="p-2.5 hover:bg-gray-100 rounded-lg text-gray-500 hover:text-gray-700 transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    
                    {/* Chapter Dots Progress */}
                    <div className="flex gap-2">
                        {chapters.map((chapter, idx) => (
                          <motion.div
                            key={idx}
                            className={`h-2.5 flex-1 rounded-full transition-colors ${
                              idx <= activeChapter 
                                ? `bg-gradient-to-r ${chapter.color} shadow-md` 
                                : 'bg-gray-300'
                            }`}
                            animate={{
                              scaleY: idx === activeChapter ? 1.3 : 1,
                              boxShadow: idx === activeChapter ? '0 2px 8px rgba(0,0,0,0.15)' : '0 0 0 rgba(0,0,0,0)'
                            }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                          />
                        ))}
                      </div>
                  </div>
                </div>

                {/* Story Content - Three Chapters */}
                <div ref={contentRef} className="flex-1 overflow-y-auto">
                  <div className="px-6 md:px-8 py-8 space-y-12">
                    {/* Chapter 1: The Struggle */}
                    <motion.section
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: 0.6 }}
                      className="max-w-2xl mx-auto space-y-5"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl">📖</span>
                        <h3 className="text-2xl font-bold text-gray-900">The Struggle</h3>
                      </div>
                      <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                      
                      <p className="text-lg text-gray-700 leading-relaxed text-justify">
                        Hi, I'm Dr. Valerie Okorie — doctor, content creator, and founder of CreatorMD.
                      </p>

                      <p className="text-lg text-gray-700 leading-relaxed text-justify">
                        CreatorMD didn't start as a brand. It started as a <span className="font-bold text-blue-600">quiet struggle.</span>
                      </p>

                      <p className="text-lg text-gray-700 leading-relaxed text-justify">
                        I was a doctor who loved creating content, but behind the scenes, I was <span className="font-semibold">confused, inconsistent, and overwhelmed.</span> I knew I had something to say. I knew I was meant to teach, share, and build online. But I didn't know who I was speaking to, what to post, or how to turn my knowledge into real impact — or income.
                      </p>

                      <p className="text-lg text-gray-700 leading-relaxed text-justify">
                        I watched other creators grow while I kept starting… then stopping. <span className="font-semibold">Burnt out from medicine,</span> yet afraid to step into something new. <span className="font-semibold">Called to create,</span> but unsure how to do it well and with purpose.
                      </p>
                    </motion.section>

                    {/* Chapter 2: The Awakening */}
                    <motion.section
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: 0.6 }}
                      className="max-w-2xl mx-auto space-y-5"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl">💡</span>
                        <h3 className="text-2xl font-bold text-gray-900">The Awakening</h3>
                      </div>
                      <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />

                      <p className="text-lg text-gray-700 leading-relaxed text-justify">
                        One night, I remember asking God a simple question: <span className="italic font-semibold text-blue-600">"I know I'm meant to create — but where do I even start?"</span> That question changed everything.
                      </p>

                      <p className="text-lg text-gray-700 leading-relaxed text-justify">
                        Instead of waiting for clarity, I decided to build it — step by step, in real time. I learned how to find my voice, show up consistently, and create content that served people and opened doors. Slowly, what once felt confusing became clear. What felt impossible became doable.
                      </p>

                      <p className="text-lg text-gray-700 leading-relaxed text-justify">
                        And I realized something powerful: <span className="font-bold">so many medics are exactly where I was.</span>
                      </p>

                      <div className="bg-gradient-to-br from-blue-50 via-emerald-50 to-cyan-50 rounded-2xl p-6 border border-blue-200/50 my-6">
                        <p className="text-base text-gray-800 leading-relaxed">
                          <span className="font-bold text-emerald-700">Brilliant. Passionate.</span> <span className="font-bold text-red-600">Underpaid. Burnt out.</span> With stories, skills, and expertise the world needs — but no roadmap.
                        </p>
                      </div>
                    </motion.section>

                    {/* Chapter 3: The Invitation */}
                    <motion.section
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: 0.6 }}
                      className="max-w-2xl mx-auto space-y-5 pb-4"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl">🚀</span>
                        <h3 className="text-2xl font-bold text-gray-900">The Invitation</h3>
                      </div>
                      <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full" />

                      <p className="text-lg text-gray-700 leading-relaxed text-justify">
                        That's why I built CreatorMD. CreatorMD exists to help medical professionals turn their knowledge into <span className="font-bold">impact, influence, and income</span> online — without losing their integrity, identity, or love for medicine.
                      </p>

                      <p className="text-lg text-gray-700 leading-relaxed text-justify">
                        This isn't about chasing clout. It's about <span className="font-bold bg-gradient-to-r from-blue-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent">clarity. Confidence. Community.</span> And building something meaningful with the degree you already worked so hard for.
                      </p>

                      <p className="text-lg text-gray-700 leading-relaxed text-justify">
                        If you're a medic who feels called to create, teach, and build beyond the hospital walls — you're not late. You're not confused. <span className="font-bold bg-gradient-to-r from-blue-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent">You're just early.</span>
                      </p>

                      <div className="bg-gradient-to-br from-blue-500 via-emerald-500 to-cyan-600 rounded-2xl p-8 text-white text-center mt-8">
                        <p className="text-2xl md:text-3xl font-bold">
                          Welcome to CreatorMD.
                        </p>
                        <p className="text-lg mt-2 text-blue-50">
                          Let's build this together.
                        </p>
                      </div>
                    </motion.section>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FounderDropdown;