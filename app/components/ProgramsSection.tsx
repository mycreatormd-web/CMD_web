// app/components/ProgramsSection.tsx
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, Target, Wrench, Trophy, Users, ArrowRight, ChevronDown, Zap, Heart, Briefcase
} from 'lucide-react';

const programs = [
  {
    id: 1,
    icon: BookOpen,
    title: "Learning & Skill-Building",
    microcopy: "Learn at your pace, build skills that translate directly into real content.",
    includes: [
      "Digital courses",
      "Workshops & bootcamps",
      "Health communication training"
    ],
    color: "from-black to-red-700",
    bgColor: "from-black/5 to-red-50",
    borderColor: "border-red-300",
    lightColor: "bg-red-50",
    accentColor: "text-red-700"
  },
  {
    id: 2,
    icon: Target,
    title: "Coaching & Mentorship",
    microcopy: "Personalized support to help you move from clarity to execution.",
    includes: [
      "30-day transformation programs",
      "Mentorship tracks",
      "Product-building support"
    ],
    color: "from-red-600 to-purple-700",
    bgColor: "from-red-50 to-purple-50",
    borderColor: "border-purple-300",
    lightColor: "bg-purple-50",
    accentColor: "text-purple-700"
  },
  {
    id: 3,
    icon: Wrench,
    title: "Done-With-You Programs",
    microcopy: "We guide. You create. Together, we refine.",
    includes: [
      "Content strategy buildouts",
      "Video reviews & feedback",
      "Brand and messaging clarity sessions"
    ],
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-50 to-pink-50",
    borderColor: "border-purple-200",
    lightColor: "bg-purple-50",
    accentColor: "text-purple-600"
  },
  {
    id: 4,
    icon: Trophy,
    title: "Premium & Corporate Programs",
    microcopy: "High-impact solutions for medics, teams, and organizations.",
    includes: [
      "Done-For-You personal branding",
      "Hospital & corporate training",
      "Health content campaigns"
    ],
    color: "from-amber-500 to-orange-500",
    bgColor: "from-amber-50 to-orange-50",
    borderColor: "border-amber-200",
    lightColor: "bg-amber-50",
    accentColor: "text-amber-600"
  },
  {
    id: 5,
    icon: Users,
    title: "Community & Ongoing Support",
    microcopy: "Stay consistent, supported, and connected globally.",
    includes: [
      "CreatorMD community",
      "Weekly classes & challenges",
      "Templates & shared resources"
    ],
    color: "from-purple-600 to-black",
    bgColor: "from-purple-50 to-black/5",
    borderColor: "border-purple-300",
    lightColor: "bg-purple-50",
    accentColor: "text-purple-700"
  }
];

const ProgramCard = ({ program, idx, expandedId, setExpandedId }) => {
  const Icon = program.icon;
  const isExpanded = expandedId === program.id;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ 
        delay: idx * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }}
      className="h-full"
    >
      <motion.div
        layout
        layoutId={`card-${program.id}`}
        onClick={() => setExpandedId(isExpanded ? null : program.id)}
        className={`relative h-full bg-white rounded-lg md:rounded-lg lg:rounded-lg xl:rounded-lg border-2 ${program.borderColor} shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer group`}
      >
        {/* Animated Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${program.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

        {/* Content Container */}
        <div className="relative z-10">
          {/* Card Header - Always Visible */}
          <div className="p-2 sm:p-2.5 md:p-3 lg:p-4 xl:p-6">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 + 0.15, duration: 0.4 }}
              className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12 rounded-lg sm:rounded-lg md:rounded-lg lg:rounded-lg xl:rounded-lg bg-gradient-to-br ${program.color} flex items-center justify-center mb-1.5 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-3 shadow-sm`}
            >
              <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5.5 lg:h-5.5 xl:w-6 xl:h-6 text-white" />
            </motion.div>

            {/* Title */}
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 + 0.1, duration: 0.4 }}
              className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-gray-900 mb-1 sm:mb-1.5 md:mb-1.5 lg:mb-1.5 xl:mb-2 leading-snug"
            >
              {program.title}
            </motion.h3>

            {/* Microcopy */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 + 0.15, duration: 0.4 }}
              className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base text-gray-700 mb-1.5 sm:mb-2 md:mb-2 lg:mb-2.5 xl:mb-4 leading-relaxed"
            >
              {program.microcopy}
            </motion.p>

            {/* Learn More Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 + 0.2, duration: 0.4 }}
              className={`flex items-center gap-1.5 text-xs sm:text-sm font-semibold ${program.accentColor} group/btn`}
            >
              <span className="group-hover/btn:translate-x-0.5 transition-transform">{isExpanded ? "Show Less" : "Show More"}</span>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0, y: isExpanded ? 2 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.div>
            </motion.div>
          </div>

          {/* Expanded Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <motion.div
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className={`px-3 sm:px-4 md:px-6 lg:px-8 pb-3 sm:pb-4 md:pb-6 lg:pb-8 border-t-2 ${program.borderColor} bg-gradient-to-br ${program.bgColor}`}
                >
                  <p className="text-xs sm:text-sm font-bold text-gray-800 mb-2.5 sm:mb-3 uppercase tracking-wide">What's Included:</p>
                  <ul className="space-y-1.5 sm:space-y-2 md:space-y-2.5">
                    {program.includes.map((item, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + i * 0.07, duration: 0.3 }}
                        className="text-xs sm:text-sm md:text-base text-gray-700 flex items-start gap-2 group/item"
                      >
                        <span className={`bg-gradient-to-r ${program.color} bg-clip-text text-transparent font-black flex-shrink-0 mt-0.5 text-sm sm:text-base md:text-lg`}>
                          •
                        </span>
                        <span className="leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProgramsSection = () => {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section id="programs" className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.06, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="hidden sm:block absolute top-0 right-0 w-96 md:w-full h-96 md:h-full bg-gradient-to-l from-blue-200 to-emerald-200 rounded-full blur-3xl -z-10"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.05, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="hidden sm:block absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-cyan-200 to-blue-200 rounded-full blur-3xl -z-10"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          {/* Subtitle Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-red-100 to-purple-100 rounded-full mb-3 sm:mb-4"
          >
            <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-700" />
            <span className="text-xs sm:text-sm font-semibold text-red-700">PROGRAMS & PATHWAYS</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-white to-black bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-5"
          >
            Programs That Fit{" "}
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-purple-700 bg-clip-text text-transparent">
              Your Goals
            </span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            Self-paced learning, live workshops, coaching, community support, and premium services — whatever level you're at, we have a clear path forward.
          </motion.p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          {programs.map((program, idx) => (
            <ProgramCard 
              key={program.id}
              program={program}
              idx={idx}
              expandedId={expandedId}
              setExpandedId={setExpandedId}
            />
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="bg-gradient-to-r from-red-50 to-purple-50 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-8 md:p-10 lg:p-12 border-2 border-purple-200/50 text-center"
        >
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3"
          >
            Ready to explore all programs?
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="text-xs sm:text-base text-gray-700 max-w-2xl mx-auto mb-4 sm:mb-8"
          >
            Check out our complete programs hub with detailed descriptions, pricing, and everything you need to choose your path.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
          >
            {/* Primary CTA */}
            <motion.a
              href="/programs"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(220, 38, 38, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-red-600 via-red-500 to-purple-700 text-white font-bold rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <span>Explore All Programs</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>

            {/* Secondary CTA */}
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#f3f4f6"
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-gray-900 font-bold rounded-lg md:rounded-xl border-2 border-gray-300 hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <Users className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Join Community</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsSection;
