// app/components/Resources.tsx
"use client";

import { motion } from 'framer-motion';
import { CheckCircle2, Calendar, BookOpen, Briefcase, Download, Zap } from 'lucide-react';

const Resources = () => {
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
      type: "PDF",
      cta: "Download checklist"
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
      type: "Google Doc",
      cta: "Get the calendar"
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
      type: "PDF",
      cta: "Download the e-book"
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
      type: "PDF",
      cta: "Get the playbook"
    }
  ];

  return (
    <section id="resources" className="relative py-9 sm:py-11 md:py-14 lg:py-17 xl:py-19 bg-gradient-to-b from-white via-green-50/15 to-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      {/* Background elements - Green & Blue Theme */}
      <div className="hidden sm:block absolute top-0 left-0 w-96 h-96 bg-green-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="hidden sm:block absolute bottom-0 right-0 w-96 h-96 bg-blue-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="hidden sm:block absolute top-1/2 left-1/4 w-72 h-72 bg-cyan-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5 sm:mb-6 md:mb-10 lg:mb-12 xl:mb-14"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-red-100 to-purple-100 rounded-full mb-2 sm:mb-3 xl:mb-4"
          >
            <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-700" />
            <span className="text-xs sm:text-sm font-semibold text-red-700">FREE RESOURCES</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2 sm:mb-2.5 lg:mb-3 xl:mb-4"
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
            className="text-xs sm:text-base md:text-base lg:text-base xl:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            CreatorMD resources are practical tools built to help medics create, grow, and show up online with confidence. No overwhelm. No guesswork. Just systems that work.
          </motion.p>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-5.5 max-w-7xl mx-auto mb-9 md:mb-11 lg:mb-13 xl:mb-15">
          {resources.map((resource, idx) => {
            const Icon = resource.icon;
            return (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  delay: idx * 0.08,
                  duration: 0.5,
                  ease: "easeOut"
                }}
                className="h-full"
              >
                <motion.a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="block h-full"
                >
                  <div className={`relative h-full bg-white rounded-lg md:rounded-lg lg:rounded-lg xl:rounded-lg border-2 ${resource.borderColor} shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer group`}>
                    {/* Animated Background - BEHIND content */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${resource.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                    {/* Content Container - ABOVE background */}
                    <div className="relative z-20 p-2 sm:p-2.5 md:p-3 lg:p-4 xl:p-6 h-full flex flex-col">
                      {/* Icon - Brand colors immediately visible */}
                      <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-lg sm:rounded-lg md:rounded-lg mb-2 sm:mb-2 md:mb-2 lg:mb-2.5 xl:mb-3 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 relative z-30 shadow-lg bg-white border-2"
                        style={{
                          borderColor: resource.id === 1 ? '#dc2626' : resource.id === 2 ? '#a855f7' : resource.id === 3 ? '#db2777' : '#9333ea'
                        }}
                      >
                        <Icon 
                          className="w-4.5 h-4.5 sm:w-5 sm:h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6 relative z-30" 
                          style={{
                            color: resource.id === 1 ? '#dc2626' : resource.id === 2 ? '#a855f7' : resource.id === 3 ? '#db2777' : '#9333ea'
                          }}
                        />
                      </div>

                      {/* Type Badge */}
                      <div className={`inline-flex items-center gap-1 px-1.5 sm:px-2 md:px-2 py-0.5 bg-gradient-to-r ${resource.color} rounded-full mb-1.5 sm:mb-1.5 md:mb-1.5 lg:mb-2 xl:mb-2.5 w-fit`}>
                        <span className="text-white text-xs font-semibold">{resource.type}</span>
                      </div>

                      {/* Title */}
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.08 + 0.1, duration: 0.4 }}
                        className="text-xs md:text-base lg:text-base xl:text-lg font-bold text-gray-900 mb-1.5 sm:mb-1.5 md:mb-1.5 lg:mb-1.5 xl:mb-2 leading-snug"
                      >
                        {resource.title}
                      </motion.h3>

                      {/* Description */}
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.08 + 0.15, duration: 0.4 }}
                        className="text-xs sm:text-xs md:text-xs lg:text-xs xl:text-sm text-gray-700 leading-relaxed flex-grow mb-2 sm:mb-2 md:mb-3 lg:mb-3.5 xl:mb-4"
                      >
                        {resource.description}
                      </motion.p>

                      {/* CTA Button */}
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-900 group/link"
                      >
                        <span>{resource.cta} </span>
                        <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover/link:translate-y-0.5 transition-transform" />
                      </motion.div>
                    </div>
                  </div>
                </motion.a>
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
          className="bg-gradient-to-r from-red-50 via-purple-50 to-red-50 rounded-xl md:rounded-2xl border-2 border-red-200/50 p-6 sm:p-8 md:p-10 lg:p-12 text-center max-w-3xl mx-auto"
        >
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="text-lg sm:text-3xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4"
          >
            Bonus Access
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xs sm:text-lg text-gray-700 mb-6 leading-relaxed"
          >
            More templates, tools, and guides are added regularly to support medics at every stage of their creator journey. Everything here is free and always will be.
          </motion.p>
          <motion.a
            href="/programs"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 via-purple-600 to-red-600 text-white font-bold rounded-lg sm:rounded-xl text-sm sm:text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Explore all our resources
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resources;
