// app/components/About.tsx
"use client";

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Target, Users, Heart, Sparkles, CheckCircle, BookOpen, TrendingUp, Shield, Zap, ChevronDown, User } from 'lucide-react';
import FounderDropdown from './FounderDropdown';
// Founder Story Content Component
const FounderStoryContent = () => (
  <div className="p-6 md:p-10 space-y-6 md:space-y-8">
    {/* Opening */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="text-center space-y-3"
    >
      <p className="text-2xl md:text-3xl font-bold text-gray-900">
        Hi, I'm Dr. Valerie Okorie —
      </p>
      <p className="text-xl md:text-2xl text-gray-700 font-semibold">
        doctor, content creator, and founder of CreatorMD.
      </p>
    </motion.div>

    {/* The Beginning */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="space-y-4"
    >
      <p className="text-xl font-bold text-red-600">
        CreatorMD didn't start as a brand.
      </p>
      <p className="text-xl font-bold text-gray-900">
        It started as a quiet struggle.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed text-justify">
        I was a doctor who loved creating content, but behind the scenes, I was confused, inconsistent, and overwhelmed. I knew I had something to say. I knew I was meant to teach, share, and build online.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed text-justify">
        But I didn't know who I was speaking to, what to post, or how to turn my knowledge into real impact — or income.
      </p>
    </motion.div>

    {/* The Struggle */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="space-y-4 bg-gradient-to-br from-red-50 to-purple-50 rounded-2xl p-6 md:p-8 border-l-4 border-red-500"
    >
      <p className="text-lg text-gray-700 leading-relaxed text-justify">
        I watched other creators grow while I kept starting… then stopping.
      </p>
      <div className="space-y-2">
        <p className="text-lg font-semibold text-red-600">
          Burnt out from medicine, yet afraid to step into something new.
        </p>
        <p className="text-lg font-semibold text-purple-600">
          Called to create, but unsure how to do it well and with purpose.
        </p>
      </div>
    </motion.div>

    {/* The Question */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="space-y-4 text-center"
    >
      <p className="text-lg text-gray-700">
        One night, I remember asking God a simple question:
      </p>
      <p className="text-2xl md:text-3xl font-bold italic text-red-600">
        "I know I'm meant to create — but where do I even start?"
      </p>
      <p className="text-xl font-bold text-gray-900">
        That question changed everything.
      </p>
    </motion.div>

    {/* The Solution */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="space-y-4"
    >
      <p className="text-lg text-gray-700 leading-relaxed text-justify">
        Instead of waiting for clarity, I decided to build it — step by step, in real time. I learned how to find my voice, show up consistently, and create content that served people and opened doors. Slowly, what once felt confusing became clear. What felt impossible became doable.
      </p>
    </motion.div>

    {/* The Realization */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="space-y-4 text-center"
    >
      <p className="text-lg text-gray-700">
        And I realized something powerful:
      </p>
      <p className="text-2xl md:text-3xl font-bold text-gray-900">
        So many medics are exactly where I was.
      </p>
      <div className="pt-4 space-y-2">
        <div className="flex flex-wrap gap-3 justify-center">
          <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full font-bold">Brilliant.</span>
          <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-bold">Passionate.</span>
          <span className="px-4 py-2 bg-black/10 text-black rounded-full font-bold">Underpaid.</span>
          <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full font-bold">Burnt out.</span>
        </div>
        <p className="text-lg text-gray-700 pt-2">
          With stories, skills, and expertise the world needs — but no roadmap.
        </p>
      </div>
    </motion.div>

    {/* Why CreatorMD */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="space-y-4 bg-gradient-to-br from-red-600 via-purple-600 to-black rounded-2xl p-8 md:p-10 text-center text-white shadow-lg"
    >
      <p className="text-2xl md:text-3xl font-bold">
        That's why I built CreatorMD.
      </p>
      <p className="text-lg md:text-xl leading-relaxed">
        CreatorMD exists to help medical professionals turn their knowledge into <span className="font-bold">impact, influence, and income</span> online — without losing their integrity, identity, or love for medicine.
      </p>
    </motion.div>

    {/* The Philosophy */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="space-y-4 text-center"
    >
      <p className="text-xl text-gray-900">
        This isn't about chasing clout.
      </p>
      <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-600 via-purple-600 to-black bg-clip-text text-transparent">
        It's about clarity. Confidence. Community.
      </p>
      <p className="text-lg text-gray-700">
        And building something meaningful with the degree you already worked so hard for.
      </p>
    </motion.div>

    {/* The Call */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="space-y-4 bg-gradient-to-br from-red-50 to-purple-50 rounded-2xl p-8 md:p-10 border-2 border-red-200 text-center"
    >
      <p className="text-lg md:text-xl text-gray-900">
        If you're a medic who feels called to create, teach, and build beyond the hospital walls —
      </p>
      <div className="pt-4 space-y-2">
        <p className="text-2xl font-bold text-gray-900">
          you're not late.
        </p>
        <p className="text-2xl font-bold text-gray-900">
          You're not confused.
        </p>
        <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 via-purple-600 to-black bg-clip-text text-transparent">
          You're just early.
        </p>
      </div>
    </motion.div>

    {/* Closing */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="space-y-4 text-center pb-4"
    >
      <p className="text-2xl md:text-3xl font-bold text-gray-900">
        Welcome to CreatorMD.
      </p>
      <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-600 via-purple-600 to-black bg-clip-text text-transparent">
        Let's build this together.
      </p>
    </motion.div>
  </div>
);

const About = () => {
  const [founderOpen, setFounderOpen] = useState(false);
  const [founderModalOpen, setFounderModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setScrollProgress(latest);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);
  
  // Parallax effect for blobs
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  // Micro-parallax for founder portrait
  const portraitParallax = useTransform(scrollYProgress, [0, 1], [0, 20]);

  const missionItems = [
    {
      icon: BookOpen,
      title: "Equip medics with the skills and clarity",
      description: "Craft engaging, trustworthy health content.",
      gradient: "from-red-500 to-purple-500"
    },
    {
      icon: TrendingUp,
      title: "Bridge clinical expertise & digital communication",
      description: "Connect your medical knowledge with effective storytelling.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Sparkles,
      title: "Inspire ethical, influential creators",
      description: "Nurture a new generation of medical content leaders.",
      gradient: "from-purple-500 to-red-500"
    },
    {
      icon: Zap,
      title: "Build strong digital brands",
      description: "Produce educational content and unlock new opportunities.",
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  /* COMMENTED OUT - Differentiators Section (Keep for future use)
  const differentiators = [
    {
      icon: Heart,
      title: "Medical Accuracy",
      description: "Authentic, evidence-based narratives that resonate.",
      gradient: "from-rose-500 to-pink-500"
    },
    {
      icon: CheckCircle,
      title: "Practical Frameworks",
      description: "Tools you can apply immediately from day one.",
      gradient: "from-red-500 to-purple-500"
    },
    {
      icon: Users,
      title: "Community Learning",
      description: "Grow with peers who share your passion.",
      gradient: "from-purple-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Ethical Impact",
      description: "Influence public health responsibly.",
      gradient: "from-purple-500 to-red-500"
    },
    {
      icon: Sparkles,
      title: "No Compromise",
      description: "Create without sacrificing time or authenticity.",
      gradient: "from-amber-500 to-orange-500"
    }
  ];
  */

  return (
    <section id="about" className="relative py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-red-50 overflow-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-purple-600 to-black origin-left z-50"
        style={{ scaleX: scrollProgress }}
      />

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      {/* Decorative Blobs with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-red-200/30 rounded-full blur-3xl" 
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-purple-200/30 rounded-full blur-3xl" 
      />
      <motion.div 
        style={{ y: y3 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-purple-200/20 rounded-full blur-3xl" 
      />
      
      <div className="relative z-10">
        {/* Desktop Header */}
        <div className="hidden md:block container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12 sm:mb-16 md:mb-24"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-6"
            >
              <span className="px-4 sm:px-6 py-2 sm:py-2.5 bg-white/80 backdrop-blur-md rounded-full border border-red-200 text-red-600 text-xs sm:text-sm font-semibold shadow-lg">
                About CreatorMD
              </span>
            </motion.div>
            
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-6 relative inline-block">
              <span className="bg-gradient-to-r from-red-600 via-purple-600 to-black bg-clip-text text-transparent">
                Who We Are
              </span>
              {/* Shimmer underline */}
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-400 via-purple-400 to-black rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-white via-white to-transparent rounded-full opacity-60"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
              />
            </h2>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-5 max-w-4xl mx-auto"
            >
              <motion.p
                className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                CreatorMD is a <span className="text-gray-900 font-bold">focused space where medics turn medical knowledge into impact, influence, and income</span> — without sacrificing integrity, identity, or the love of medicine.
              </motion.p>
              <motion.p
                className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                We break content and personal-brand work into <span className="text-purple-600 font-bold">practical, bite-size steps that fit the realities of clinical life</span>.
              </motion.p>
              <motion.p
                className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                More than a platform: <span className="bg-gradient-to-r from-red-600 via-purple-600 to-black bg-clip-text text-transparent">build with us, and you become a CreatorMD</span>.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>



        {/* Mobile: Who We Are Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="md:hidden mb-4 bg-gradient-to-br from-red-100 to-purple-100 rounded-2xl border-2 border-red-200 shadow-lg mx-0"
        >
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-600 via-purple-600 to-black bg-clip-text text-transparent">
              Who We Are
            </h2>
            <div className="space-y-4">
              <p className="text-base text-gray-700 leading-relaxed">
                CreatorMD is a <span className="text-gray-900 font-bold">focused space where medics turn medical knowledge into impact, influence, and income</span> — without sacrificing integrity, identity, or the love of medicine.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                We break content and personal-brand work into <span className="text-purple-600 font-bold">practical, bite-size steps that fit the realities of clinical life</span>.
              </p>
              <p className="text-base text-gray-700 leading-relaxed font-semibold">
                More than a platform: <span className="bg-gradient-to-r from-red-600 via-purple-600 to-black bg-clip-text text-transparent">build with us, and you become a CreatorMD</span>.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Vision & Mission - Horizontal Scroll on Mobile Only */}
        <div className="md:hidden mb-4">
          <div className="overflow-x-auto -mx-4 px-4 pb-2">
            <div className="flex gap-4 w-max">
              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="flex-shrink-0 w-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 border-2 border-purple-200 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-lg flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-base text-gray-700 leading-relaxed">
                  We aim to create the <span className="text-purple-600 font-bold">world's largest community</span> of medics who confidently share their voice through compelling content—<span className="text-pink-600 font-bold">shaping public health narratives</span> and leading the digital evolution of medicine.
                </p>
              </motion.div>

              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="flex-shrink-0 w-80 bg-gradient-to-br from-red-100 to-purple-100 rounded-2xl p-6 border-2 border-red-200 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-red-500 to-purple-500 rounded-lg shadow-lg flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <div className="space-y-3">
                  {missionItems.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-2"
                    >
                      <div className={`p-2 bg-gradient-to-br ${item.gradient} rounded-lg shadow-md flex-shrink-0 mt-0.5`}>
                        <item.icon className="w-3 h-3 text-white" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-gray-900">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Desktop: Vision & Mission - Side by Side */}
        <div className="hidden md:block container mx-auto px-6">
          <div id="vision" className="max-w-7xl mx-auto mb-16 md:mb-24">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 md:p-10 border-2 border-purple-200 shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 relative inline-block">
                    Our Vision
                    <motion.span
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    />
                  </h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  We aim to create the <span className="text-purple-600 font-bold">world's largest community</span> of medics who confidently share their voice through compelling content—<span className="text-pink-600 font-bold">shaping public health narratives</span> and leading the digital evolution of medicine.
                </p>
              </motion.div>

              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-gradient-to-br from-red-100 to-purple-100 rounded-3xl p-8 md:p-10 border-2 border-red-200 shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-red-500 to-purple-500 rounded-2xl shadow-lg">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 relative inline-block">
                    Our Mission
                    <motion.span
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-red-400 to-purple-400 rounded-full"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    />
                  </h3>
                </div>
                <div className="space-y-4">
                  {missionItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15, duration: 0.5 }}
                      className="flex items-start gap-3"
                    >
                      <div className={`p-2 bg-gradient-to-br ${item.gradient} rounded-lg shadow-md flex-shrink-0 mt-1`}>
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-base font-semibold text-gray-900 mb-1 text-justify">
                          {item.title}
                        </p>
                        <p className="text-sm text-gray-600 text-justify">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* What Drives Us - Card on Mobile */}
        <motion.div
          id="drives"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="md:hidden mb-4 bg-gradient-to-br from-purple-100 to-red-100 rounded-2xl border-2 border-purple-200 shadow-lg mx-0"
        >
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-red-600 to-black bg-clip-text text-transparent">
              What Drives Us
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              CreatorMD was created by medics, for medics. This insider perspective fuels every framework, course, and service we offer. Rather than overwhelming you with needless jargon or complicated strategies, we focus on simplicity, clarity, and real-world results. Our approach revolves around strengthening your storytelling and authority, backed by ongoing community support and practical modules that get you creating content from day one.
            </p>
          </div>
        </motion.div>

        {/* Desktop: What Drives Us */}
        <div className="hidden md:block container mx-auto px-6">
          <motion.div
            id="drives"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative inline-block">
              <span className="bg-gradient-to-r from-purple-600 via-red-600 to-black bg-clip-text text-transparent">
                What Drives Us
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-red-400 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.7 }}
              />
            </h3>
            <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto text-justify">
              CreatorMD was created by medics, for medics. This insider perspective fuels every framework, course, and service we offer. Rather than overwhelming you with needless jargon or complicated strategies, we focus on simplicity, clarity, and real-world results. Our approach revolves around strengthening your storytelling and authority, backed by ongoing community support and practical modules that get you creating content from day one.
            </p>
          </div>
        </motion.div>

        {/* Our Commitment - Card on Mobile */}
        <motion.div
          id="commitment"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="md:hidden mb-4 bg-gradient-to-br from-red-100 to-purple-100 rounded-2xl border-2 border-red-200 shadow-lg mx-0"
        >
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-red-600 to-black bg-clip-text text-transparent">
              Our Commitment
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              We promise to help you show up online with confidence, communicate your expertise with clarity, and build a digital presence that not only changes lives but also advances your career. With CreatorMD, your knowledge becomes your greatest asset, and your influence grows naturally and sustainably.
            </p>
          </div>
        </motion.div>
        </div>

        {/* Desktop: Our Commitment */}
        <div className="hidden md:block container mx-auto px-6">
          <motion.div
            id="commitment"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto mt-8 md:mt-12">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative inline-block">
              <span className="bg-gradient-to-r from-purple-600 via-red-600 to-black bg-clip-text text-transparent">
                Our Commitment
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-red-400 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.7 }}
              />
            </h3>
            <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto text-justify">
              We promise to help you show up online with confidence, communicate your expertise with clarity, and build a digital presence that not only changes lives but also advances your career. With CreatorMD, your knowledge becomes your greatest asset, and your influence grows naturally and sustainably.
            </p>
          </div>
        </motion.div>
        </div>

        {/* Meet The Founder - Redesigned Dropdown */}
        <div id="founder" className="relative py-4 mt-8 px-4 md:px-0 md:container md:mx-auto md:px-6">
          <FounderDropdown />
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-16 md:mt-24 px-4 md:px-0"
        >
          <motion.a
            href="#join"
            whileHover={{ 
              scale: 1.08,
              boxShadow: "0 25px 70px rgba(59, 130, 246, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-red-600 via-red-500 to-purple-600 text-white font-bold rounded-full text-xl shadow-2xl hover:shadow-red-500/60 transition-all"
          >
            <Sparkles className="w-6 h-6" />
            Join Our Community
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
