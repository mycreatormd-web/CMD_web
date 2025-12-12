// app/components/About.tsx
"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Target, Users, Heart, Sparkles, CheckCircle, BookOpen, TrendingUp, Shield } from 'lucide-react';

const About = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const missionItems = [
    {
      icon: BookOpen,
      title: "Equip medics with the skills and clarity to craft engaging, trustworthy health content.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Bridge the gap between clinical expertise and effective digital communication",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Sparkles,
      title: "Inspire and nurture a new generation of ethical, influential medical creators",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: Target,
      title: "Support medics in building strong digital brands, producing educational content, and unlocking exciting opportunities",
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  const differentiators = [
    {
      icon: Heart,
      title: "Storytelling rooted in medical accuracy",
      description: "Delivering authentic, evidence-based narratives that resonate.",
      color: "text-rose-400"
    },
    {
      icon: CheckCircle,
      title: "Practical frameworks from Day One",
      description: "Tools and methods you can apply immediately to ease content creation.",
      color: "text-blue-400"
    },
    {
      icon: Users,
      title: "Community-driven learning",
      description: "Grow alongside peers who share your passion and challenges.",
      color: "text-emerald-400"
    },
    {
      icon: Shield,
      title: "Ethical, purposeful impact",
      description: "Helping medics influence public health discussions responsibly.",
      color: "text-purple-400"
    },
    {
      icon: Sparkles,
      title: "Creating without compromise",
      description: "Empowering medics to share their voice without sacrificing time or authenticity.",
      color: "text-amber-400"
    }
  ];

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <section id="about" className="relative py-20 md:py-32 bg-gradient-to-br from-black via-gray-950 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="px-6 py-2.5 bg-gradient-to-r from-blue-950/50 to-emerald-950/50 backdrop-blur-md rounded-full border border-blue-800/20 text-blue-300 text-sm font-medium shadow-lg">
              Who We Are
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              About CreatorMD
            </span>
            <span className="text-blue-400">™</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            CreatorMD is a <span className="text-white font-semibold">medical content acceleration brand</span> dedicated to helping healthcare professionals step into the digital world with <span className="text-emerald-400 font-semibold">clarity, confidence, and purpose</span>. We simplify the content creation process by transforming complex medical knowledge into clear, meaningful communication that drives real impact and opens doors to new opportunities.
          </motion.p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto mb-16 md:mb-24"
        >
          <div className="bg-gradient-to-br from-blue-950/30 to-emerald-950/30 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Our mission is to ease the <span className="text-rose-400 font-semibold">overwhelm, overthinking, and burnout</span> many medics face when sharing their expertise online. Through straightforward frameworks, a supportive community, and practical guidance, CreatorMD empowers medics to express their knowledge authentically, build credibility, and contribute positively to public health conversations.
            </p>
          </div>
        </motion.div>

        {/* Vision & Mission Dropdowns */}
        <div className="max-w-4xl mx-auto mb-16 md:mb-24 space-y-6">
          {/* Vision Dropdown */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-purple-950/20 to-blue-950/20 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden"
          >
            <button
              onClick={() => toggleSection('vision')}
              className="w-full px-6 md:px-8 py-6 flex items-center justify-between group hover:bg-white/5 transition-colors duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-200">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Our Vision</h3>
              </div>
              <motion.div
                animate={{ rotate: openSection === 'vision' ? 180 : 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <ChevronDown className="w-6 h-6 text-blue-400" />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {openSection === 'vision' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 md:px-8 pb-6 pt-2">
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                      We aim to create the <span className="text-purple-400 font-semibold">world's largest community</span> of medics who confidently share their voice through compelling content—<span className="text-pink-400 font-semibold">shaping public health narratives</span> and leading the digital evolution of medicine.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Mission Dropdown */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-950/20 to-emerald-950/20 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden"
          >
            <button
              onClick={() => toggleSection('mission')}
              className="w-full px-6 md:px-8 py-6 flex items-center justify-between group hover:bg-white/5 transition-colors duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-200">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Our Mission</h3>
              </div>
              <motion.div
                animate={{ rotate: openSection === 'mission' ? 180 : 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <ChevronDown className="w-6 h-6 text-emerald-400" />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {openSection === 'mission' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 md:px-8 pb-6 pt-2">
                    <div className="grid gap-4 md:gap-6">
                      {missionItems.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.4 }}
                          className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-200 group"
                        >
                          <div className={`p-2 bg-gradient-to-br ${item.gradient} rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-200 flex-shrink-0`}>
                            <item.icon className="w-5 h-5 text-white" />
                          </div>
                          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                            {item.title}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* What Sets Us Apart */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                What Sets CreatorMD Apart
              </span>
            </h3>
            <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto">
              Created by medics for medics, our approach is simple, human, and relatable—free of jargon and overwhelm. We focus on practical clarity and genuine support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className="group bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className={`p-4 bg-gradient-to-br from-white/10 to-white/5 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-emerald-400 group-hover:bg-clip-text transition-all duration-300">
                  {item.title}
                </h4>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-16 md:mt-24"
        >
          <motion.a
            href="#join"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 60px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-600 text-white font-bold rounded-2xl text-lg shadow-2xl hover:shadow-blue-500/50 transition-shadow"
          >
            <Sparkles className="w-5 h-5" />
            Join Our Community
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
