// app/components/ProgramsSection.tsx
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, Target, Wrench, Trophy, Users, ArrowRight, ChevronDown
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
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
    borderColor: "border-blue-200",
    lightColor: "bg-blue-50"
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
    color: "from-emerald-500 to-teal-500",
    bgColor: "from-emerald-50 to-teal-50",
    borderColor: "border-emerald-200",
    lightColor: "bg-emerald-50"
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
    lightColor: "bg-purple-50"
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
    lightColor: "bg-amber-50"
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
    color: "from-cyan-500 to-blue-500",
    bgColor: "from-cyan-50 to-blue-50",
    borderColor: "border-cyan-200",
    lightColor: "bg-cyan-50"
  }
];

const ProgramCard = ({ program, idx, expandedId, setExpandedId }) => {
  const Icon = program.icon;
  const isExpanded = expandedId === program.id;

  return (
    <motion.div
      key={program.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        delay: idx * 0.12,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="group col-span-full md:col-span-1"
    >
      <motion.div
        layout
        className={`relative bg-gradient-to-br ${program.bgColor} rounded-2xl border-2 ${program.borderColor} shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden`}
      >
        {/* Card Button/Header */}
        <motion.button
          onClick={() => setExpandedId(isExpanded ? null : program.id)}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3 }}
          className={`w-full p-4 sm:p-6 md:p-8 flex flex-col items-start text-left cursor-pointer`}
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.12 + 0.2, duration: 0.5 }}
            className={`w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-3 sm:mb-4 shadow-md`}
          >
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
          </motion.div>

          {/* Title */}
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.12 + 0.1, duration: 0.5 }}
            className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 leading-snug"
          >
            {program.title}
          </motion.h3>

          {/* Microcopy */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.12 + 0.15, duration: 0.5 }}
            className="text-xs sm:text-sm md:text-base text-gray-700 mb-3 sm:mb-4 flex-1 leading-relaxed"
          >
            {program.microcopy}
          </motion.p>

          {/* Learn More Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.12 + 0.25, duration: 0.5 }}
            className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-gray-900 group/btn"
          >
            <span>{isExpanded ? "See Less" : "Learn More"}</span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </motion.div>
          </motion.div>
        </motion.button>

        {/* Expanded Content - Inside the same card div */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden px-4 sm:px-5 md:px-8 pb-4 sm:pb-5 md:pb-8"
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className={`pt-6 border-t-2 ${program.borderColor}`}
              >
                <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3">What's Included:</p>
                <ul className="space-y-2">
                  {program.includes.map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + i * 0.08, duration: 0.3 }}
                      className="text-xs sm:text-sm text-gray-700 flex items-start gap-2"
                    >
                      <span className={`bg-gradient-to-r ${program.color} bg-clip-text text-transparent font-bold flex-shrink-0 mt-0.5`}>
                        ✓
                      </span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const ProgramsSection = () => {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section id="programs" className="relative py-12 sm:py-16 md:py-24 px-4 md:px-6">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.04, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute top-1/3 -right-1/4 w-full h-full bg-gradient-to-l from-blue-400 to-emerald-400 rounded-full blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.03, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute -bottom-1/4 -left-1/4 w-full h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Intro */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16 px-2"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 relative inline-block"
          >
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Our Programs
            </span>
            <motion.span
              className="absolute -bottom-1.5 sm:-bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
            />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 max-w-3xl mx-auto mt-4 sm:mt-5 md:mt-6 leading-relaxed"
          >
            A clear path from knowledge to digital impact. Self-paced learning, live training, coaching, and community — all built for busy medics.
          </motion.p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="inline-flex flex-col md:flex-row gap-4 md:gap-6 mb-6"
          >
            {/* Primary CTA */}
            <motion.button
              whileHover={{ 
                scale: 1.06,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.35)"
              }}
              whileTap={{ scale: 0.94 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 via-emerald-600 to-cyan-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>Explore CreatorMD Programs</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              whileHover={{ 
                scale: 1.06,
                backgroundColor: "#e5e7eb"
              }}
              whileTap={{ scale: 0.94 }}
              className="px-8 py-3 bg-gray-100 text-gray-900 font-bold rounded-xl hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Users className="w-5 h-5" />
              <span>Join the Community</span>
            </motion.button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-base text-gray-700 font-semibold"
          >
            However you want to grow as a medical creator, there's a clear path.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsSection;
