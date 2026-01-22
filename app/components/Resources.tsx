// app/components/Resources.tsx
"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Calendar, BookOpen, Briefcase, Download, Zap, Sparkles, ChevronDown } from 'lucide-react';

const Resources = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const resources = [
    {
      id: 1,
      title: "The Growth Checklist",
      description: "A simple, step-by-step checklist to help medics build consistency, clarity, and momentum online — without burnout.",
      icon: CheckCircle2,
      color: "from-red-500 to-red-600",
      bgColor: "from-red-100 to-red-50",
      borderColor: "border-red-200",
      url: "https://d1yei2z3i6k35z.cloudfront.net/3107135/65cbe03bbcebd_ValsViewYouTubeChecklist.pdf",
      type: "PDF Guide",
      cta: "Download checklist",
      badge: "Most Popular"
    },
    {
      id: 2,
      title: "14-Day Free Content Calendar",
      description: "A ready-to-use content calendar designed specifically for busy medics. Know exactly what to post, when to post, and why it works.",
      icon: Calendar,
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-100 to-purple-50",
      borderColor: "border-purple-200",
      url: "https://docs.google.com/document/d/1my_zGBTwxOf4iINEti3fpTntf6DlNBHCzRxh8OQjaNQ/edit",
      type: "Interactive",
      cta: "Get the calendar",
      badge: "New"
    },
    {
      id: 3,
      title: "LinkedIn: From Zero to Influence (E-book)",
      description: "A practical guide to building authority, visibility, and professional opportunities on LinkedIn as a medic — even if you're starting from scratch.",
      icon: BookOpen,
      color: "from-red-500 via-purple-500 to-red-600",
      bgColor: "from-pink-100 to-red-50",
      borderColor: "border-red-200",
      url: "https://d1yei2z3i6k35z.cloudfront.net/3107135/65cc29f7049f2_FromZerotoInfluencerLinkedInE-book.pdf",
      type: "E-book",
      cta: "Download the e-book",
      badge: "Essential"
    },
    {
      id: 4,
      title: "The Online Business Boss Playbook",
      description: "A beginner-friendly playbook for medics who want to explore ethical digital income, personal branding, and online business foundations.",
      icon: Briefcase,
      color: "from-purple-600 to-red-600",
      bgColor: "from-purple-50 to-red-50",
      borderColor: "border-purple-200",
      url: "https://d1yei2z3i6k35z.cloudfront.net/3107135/65cbdca3d9468_Onlinebusinessbossplaybook1.pdf",
      type: "Playbook",
      cta: "Get the playbook",
      badge: "Complete Guide"
    }
  ];

  return (
    <section id="resources" className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white via-green-50/15 to-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      {/* Background elements - Green & Blue Theme */}
      <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-green-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-blue-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 md:w-72 md:h-72 bg-cyan-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12 lg:mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-100 to-purple-100 rounded-full mb-4 md:mb-6"
          >
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-red-700" />
            <span className="text-xs sm:text-sm font-semibold text-red-700">FREE RESOURCES</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6"
          >
            Start creating with clarity{" "}
            <span className="bg-gradient-to-r from-red-600 to-purple-700 bg-clip-text text-transparent">
              — for free.
            </span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xs sm:text-sm md:text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            CreatorMD resources are practical tools built to help medics create, grow, and show up online with confidence. No overwhelm. No guesswork. Just systems that work.
          </motion.p>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto mb-12 md:mb-16 lg:mb-20 items-start">
          {resources.map((resource, idx) => {
            const Icon = resource.icon;
            const isExpanded = expandedId === resource.id;
            return (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  delay: idx * 0.1,
                  duration: 0.5,
                  ease: "easeOut"
                }}
              >
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.3 } }}
                  className="block"
                >
                  <div className={`relative bg-white rounded-xl border-2 ${resource.borderColor} shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group min-h-[280px] sm:min-h-[300px]`}>
                    {/* Animated Background - BEHIND content */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${resource.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                    {/* Content Container - ABOVE background */}
                    <div className="relative z-20 p-6 flex flex-col h-full">
                      {/* Badge */}
                      {resource.badge && (
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 + 0.2 }}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-3 w-fit"
                          style={{
                            background: resource.id === 1 ? 'linear-gradient(135deg, #fee2e2, #fecaca)' :
                                       resource.id === 2 ? 'linear-gradient(135deg, #f3e8ff, #e9d5ff)' :
                                       resource.id === 3 ? 'linear-gradient(135deg, #fce7f3, #fbcfe8)' :
                                       'linear-gradient(135deg, #f3e8ff, #e9d5ff)'
                          }}
                        >
                          <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3" 
                            style={{
                              color: resource.id === 1 ? '#dc2626' : 
                                     resource.id === 2 ? '#a855f7' : 
                                     resource.id === 3 ? '#ec4899' : '#a855f7'
                            }}
                          />
                          <span className="text-[10px] sm:text-xs font-bold tracking-wide uppercase"
                            style={{
                              color: resource.id === 1 ? '#991b1b' : 
                                     resource.id === 2 ? '#6b21a8' : 
                                     resource.id === 3 ? '#831843' : '#6b21a8'
                            }}
                          >
                            {resource.badge}
                          </span>
                        </motion.div>
                      )}

                      {/* Icon with glow */}
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl mb-4 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 relative z-30 shadow-lg bg-white border-2"
                        style={{
                          borderColor: resource.id === 1 ? '#dc2626' : resource.id === 2 ? '#a855f7' : resource.id === 3 ? '#db2777' : '#9333ea'
                        }}
                      >
                        <Icon 
                          className="w-5 h-5 sm:w-6 sm:h-6 relative z-30" 
                          style={{
                            color: resource.id === 1 ? '#dc2626' : resource.id === 2 ? '#a855f7' : resource.id === 3 ? '#db2777' : '#9333ea'
                          }}
                        />
                        {/* Glow effect */}
                        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{
                            background: `radial-gradient(circle at center, ${
                              resource.id === 1 ? '#f43f5e22' : 
                              resource.id === 2 ? '#a855f722' : 
                              resource.id === 3 ? '#ec489922' : '#a855f722'
                            }, transparent 70%)`
                          }}
                        />
                      </div>

                      {/* Type Badge */}
                      <div className={`inline-flex items-center gap-1 px-2.5 py-0.5 bg-gradient-to-r ${resource.color} rounded-full mb-3 w-fit`}>
                        <span className="text-white text-[10px] sm:text-xs font-semibold">{resource.type}</span>
                      </div>

                      {/* Title with gradient - Clickable for dropdown */}
                      <motion.button
                        onClick={() => toggleExpand(resource.id)}
                        className="w-full text-left flex items-center justify-between gap-2 cursor-pointer"
                      >
                        <h3
                          className="text-base sm:text-lg font-bold leading-tight"
                          style={{
                            background: resource.id === 1 ? 'linear-gradient(135deg, #dc2626, #b91c1c)' :
                                       resource.id === 2 ? 'linear-gradient(135deg, #a855f7, #7c3aed)' :
                                       resource.id === 3 ? 'linear-gradient(135deg, #ec4899, #be185d)' :
                                       'linear-gradient(135deg, #a855f7, #7c3aed)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                          }}
                        >
                          {resource.title}
                        </h3>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="flex-shrink-0"
                        >
                          <ChevronDown 
                            className="w-4 h-4 sm:w-5 sm:h-5"
                            style={{
                              color: resource.id === 1 ? '#dc2626' : resource.id === 2 ? '#a855f7' : resource.id === 3 ? '#db2777' : '#9333ea'
                            }}
                          />
                        </motion.div>
                      </motion.button>

                      {/* Animated Dropdown Description */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ 
                              height: "auto", 
                              opacity: 1,
                              transition: {
                                height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                                opacity: { duration: 0.3, delay: 0.1 }
                              }
                            }}
                            exit={{ 
                              height: 0, 
                              opacity: 0,
                              transition: {
                                height: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                                opacity: { duration: 0.2 }
                              }
                            }}
                            className="overflow-hidden"
                          >
                            <motion.p
                              initial={{ y: -10 }}
                              animate={{ y: 0 }}
                              exit={{ y: -10 }}
                              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                              className="text-xs sm:text-sm text-gray-700 leading-relaxed pt-3 pb-2"
                            >
                              {resource.description}
                            </motion.p>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Spacer to push CTA to bottom */}
                      <div className="flex-grow" />

                      {/* CTA Button */}
                      <motion.a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-2 text-sm font-semibold text-gray-900 group/link mt-4 cursor-pointer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>{resource.cta}</span>
                        <Download className="w-3 h-3 sm:w-4 sm:h-4 group-hover/link:translate-y-0.5 transition-transform" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bonus Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-red-50 via-purple-50 to-red-50 rounded-xl md:rounded-2xl border-2 border-red-200/50 p-6 md:p-8 lg:p-10 text-center max-w-3xl mx-auto"
        >
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4"
          >
            Bonus Access
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed"
          >
            More templates, tools, and guides are added regularly to support medics at every stage of their creator journey. Everything here is free and always will be.
          </motion.p>
          <motion.a
            href="/programs"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 via-purple-600 to-red-600 text-white font-bold rounded-lg md:rounded-xl text-base shadow-lg hover:shadow-xl transition-all"
          >
            Explore all our resources
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resources;