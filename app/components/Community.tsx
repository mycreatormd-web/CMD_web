// app/components/Community.tsx
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useCommunityForm } from '@/app/context/CommunityFormContext';
import CoreValuesSection from './CoreValuesSection';

// Unique icons from different libraries
import { HiOutlineAcademicCap, HiOutlineSparkles, HiOutlineLightningBolt, HiOutlineUserGroup } from 'react-icons/hi';
import { RiShieldStarLine, RiLightbulbFlashLine, RiTeamLine, RiAwardLine } from 'react-icons/ri';
import { TbTargetArrow, TbBrandCampaignmonitor, TbHeartHandshake, TbRocket } from 'react-icons/tb';
import { BsGraphUpArrow, BsStars } from 'react-icons/bs';
import { IoTrophyOutline, IoRocketOutline } from 'react-icons/io5';
import { FiTarget } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';

const Community = () => {
  const { openForm } = useCommunityForm();
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [hoveredPillar, setHoveredPillar] = useState<string | null>(null);

  const insideCommunity = [
    {
      id: 1,
      icon: HiOutlineAcademicCap,
      title: "Monthly Live Learning Sessions",
      description: "Learn directly from experienced creators",
      details: "Join our live workshops every week where we dive deep into content creation, health communication, personal branding, and monetization strategies. Interactive Q&A with industry experts included."
    },
    {
      id: 2,
      icon: IoTrophyOutline,
      title: "Quarterly Challenges & Giveaways",
      description: "Stay inspired with curated content ideas",
      details: "Get fresh, themed content prompts every month. Participate in challenges that stretch your creativity, get feedback from the community, and build your portfolio while having fun."
    },
    {
      id: 3,
      icon: TbRocket,
      title: "Practical Templates & Resources",
      description: "Scripts, captions, and ideas ready to use",
      details: "Access our library of ready-to-use content templates, email swipes, video scripts, carousel templates, and caption ideas. Save hours of planning and jump straight into creation."
    },
    {
      id: 4,
      icon: TbHeartHandshake,
      title: "Peer Support & Accountability",
      description: "Connect with fellow medics on the journey",
      details: "Find your accountability buddy, celebrate wins together, share struggles without judgment, and build real relationships with medics who understand your unique challenges."
    }
  ];

  const culturePoints = [
    { icon: RiShieldStarLine, text: "No comparison culture" },
    { icon: RiLightbulbFlashLine, text: "Execution-focused space" },
    { icon: RiTeamLine, text: "Supportive environment" },
    { icon: FiTarget, text: "Purpose-driven community" }
  ];

  const audience = [
    {
      title: "Medics",
      description: "Doctors, nurses, and healthcare professionals ready to extend their reach beyond the clinic",
      icon: "🩺"
    },
    {
      title: "Aspiring Medics",
      description: "Medical students and trainees building their personal brand early",
      icon: "📚"
    },
    {
      title: "Health Educators",
      description: "Those passionate about teaching and sharing medical knowledge with the world",
      icon: "🎓"
    }
  ];

  const pillars = [
    {
      word: "Impact",
      description: "Reach thousands with health education that actually changes lives",
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-50 to-pink-50",
      borderColor: "border-red-200"
    },
    {
      word: "Influence",
      description: "Build authority and become a trusted voice in your medical niche",
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50",
      borderColor: "border-purple-200"
    },
    {
      word: "Income",
      description: "Create sustainable revenue streams from your expertise online",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      borderColor: "border-emerald-200"
    }
  ];

  const testimonials = [
    {
      quote: "The community keeps me accountable and inspired.",
      author: "Dr. Amara",
      role: "Cardiologist & Health Creator"
    },
    {
      quote: "Finally, a space where I don't feel alone in this journey.",
      author: "Dr. James",
      role: "Family Medicine Resident"
    },
    {
      quote: "The templates alone saved me weeks of work.",
      author: "Dr. Sarah",
      role: "Health Educator & Content Creator"
    }
  ];

  return (
    <section id="community" className="relative py-10 sm:py-12 md:py-16 lg:py-20 xl:py-28 bg-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      {/* Background gradient elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-50/20 to-transparent pointer-events-none" />
      <div className="hidden sm:block absolute top-0 right-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-10 lg:mb-12 xl:mb-16"
        >
          {/* Subtitle Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-red-100 to-purple-100 rounded-full mb-2 md:mb-3 lg:mb-3.5"
          >
            <RiTeamLine className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-700" />
            <span className="text-xs sm:text-sm font-semibold text-red-700">COMMUNITY</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-bold text-gray-900 mb-2 md:mb-3 lg:mb-4 xl:mb-5"
          >
            You don't have to build{" "}
            <span className="bg-gradient-to-r from-red-600 to-purple-700 bg-clip-text text-transparent">
              alone.
            </span>
          </motion.h2>

          {/* Main Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm md:text-sm lg:text-base xl:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            CreatorMD is a supportive global community where medics learn to create, communicate, and grow online — without burnout or pressure.
          </motion.p>
        </motion.div>

        {/* Inside the Community Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 sm:mb-20 md:mb-28"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-lg sm:text-3xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-10 md:mb-12"
          >
            Inside the Community
          </motion.h3>

          {/* Features Grid with Expandable Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 md:gap-8">
            {insideCommunity.map((feature, idx) => {
              const Icon = feature.icon;
              const isExpanded = expandedId === feature.id;

              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                  onClick={() => setExpandedId(isExpanded ? null : feature.id)}
                  className="cursor-pointer"
                >
                  <motion.div
                    layout
                    className="group bg-white border-2 border-red-100/50 hover:border-red-300/50 rounded-2xl p-4 sm:p-7 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    {/* Hover background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-purple-50 opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none" />

                    {/* Icon */}
                    <motion.div
                      layout
                      className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-red-100 to-purple-100 flex items-center justify-center mb-3 md:mb-5 group-hover:scale-110 transition-transform duration-300"
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-red-700" />
                    </motion.div>

                    {/* Title */}
                    <h4 className="relative z-10 text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                      {feature.title}
                    </h4>

                    {/* Description */}
                    <p className="relative z-10 text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                      {feature.description}
                    </p>

                    {/* Expandable Details */}
                    <motion.div
                      initial={false}
                      animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10 overflow-hidden"
                    >
                      <p className="text-xs sm:text-sm text-gray-700 pt-2 sm:pt-3 border-t border-red-100 mt-2 sm:mt-3">
                        {feature.details}
                      </p>
                    </motion.div>

                    {/* Expand indicator */}
                    <motion.div
                      className="relative z-10 flex items-center justify-between mt-3 pt-3 border-t border-red-100/50"
                      animate={{ opacity: isExpanded ? 1 : 0.5 }}
                    >
                      <span className="text-xs sm:text-sm font-semibold text-red-600">
                        {isExpanded ? "Show less" : "Learn more"}
                      </span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* The Culture Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-16 sm:mb-20 md:mb-28"
        >
          <div className="bg-gradient-to-r from-red-600 via-purple-600 to-black rounded-3xl border-2 border-red-400/30 p-8 sm:p-10 md:p-12 lg:p-14 shadow-lg overflow-hidden relative">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="hidden sm:block absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            </div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="relative z-10 text-xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 md:mb-8"
            >
              The Culture
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="relative z-10 text-sm sm:text-lg md:text-xl text-white/95 leading-relaxed max-w-3xl mb-4 sm:mb-8 md:mb-10"
            >
              CreatorMD is a <span className="font-bold text-white">calm, focused space</span>. No noise. No hype. No comparison culture. Just medics supporting one another, sharing knowledge, and building with clarity and purpose.
            </motion.p>

            {/* Culture Points */}
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {culturePoints.map((point, idx) => {
                const Icon = point.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.45 + idx * 0.08, duration: 0.4 }}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 sm:p-4"
                  >
                    <Icon className="w-5 h-5 text-white flex-shrink-0" />
                    <span className="text-sm sm:text-base font-semibold text-white">{point.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Core Values Section Component */}
        <CoreValuesSection />

        {/* Divider Border */}
        <div className="my-8 sm:my-12 md:my-16 border-t border-gray-200" />

        {/* Who It's For Section 2.0 - Premium Design */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-16 sm:mb-20 md:mb-28 relative"
        >
          {/* Subtle Floating Particles - Optimized */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: `${4 + (i % 3) * 2}px`,
                  height: `${4 + (i % 3) * 2}px`,
                  background: i % 3 === 0 
                    ? 'radial-gradient(circle, rgba(239, 68, 68, 0.4) 0%, transparent 70%)' 
                    : i % 3 === 1 
                    ? 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)' 
                    : 'radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, transparent 70%)',
                  left: `${10 + (i * 7)}%`,
                  top: `${15 + (i * 6) % 70}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 4 + (i % 3),
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Section Header - Clean & Elegant */}
          <div className="text-center mb-12 sm:mb-16 relative">
            {/* Ambient Glow */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-40 rounded-full blur-3xl pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse, rgba(168, 85, 247, 0.15) 0%, transparent 70%)'
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-5 relative"
            >
              Who It's For
            </motion.h3>
            
            {/* Subtitle with Interactive Highlighted Words */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 0.2, 
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            >
              For medics and aspiring medics who want to make{' '}
              <motion.span 
                className={`font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 transition-all duration-300 ${hoveredPillar === 'Impact' ? 'scale-110' : ''}`}
                animate={{
                  scale: hoveredPillar === 'Impact' ? 1.15 : 1,
                  textShadow: hoveredPillar === 'Impact' ? '0 0 20px rgba(239, 68, 68, 0.5)' : '0 0 0px transparent'
                }}
                transition={{ duration: 0.3 }}
                style={{ display: 'inline-block' }}
              >
                impact
              </motion.span>,{' '}
              build{' '}
              <motion.span 
                className={`font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-300`}
                animate={{
                  scale: hoveredPillar === 'Influence' ? 1.15 : 1,
                  textShadow: hoveredPillar === 'Influence' ? '0 0 20px rgba(168, 85, 247, 0.5)' : '0 0 0px transparent'
                }}
                transition={{ duration: 0.3 }}
                style={{ display: 'inline-block' }}
              >
                influence
              </motion.span>,{' '}
              and generate{' '}
              <motion.span 
                className={`font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300`}
                animate={{
                  scale: hoveredPillar === 'Income' ? 1.15 : 1,
                  textShadow: hoveredPillar === 'Income' ? '0 0 20px rgba(16, 185, 129, 0.5)' : '0 0 0px transparent'
                }}
                transition={{ duration: 0.3 }}
                style={{ display: 'inline-block' }}
              >
                income
              </motion.span>{' '}
              online.
            </motion.p>
          </div>

          {/* Three Pillars 2.0 - Premium Glass Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-8 sm:mb-10">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: 0.3 + idx * 0.15, 
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.25, ease: "easeOut" }
                }}
                onMouseEnter={() => setHoveredPillar(pillar.word)}
                onMouseLeave={() => setHoveredPillar(null)}
                className="relative group cursor-pointer"
              >
                {/* Card Glow Effect */}
                <motion.div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${pillar.gradient} rounded-2xl blur-lg transition-all duration-500`}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: hoveredPillar === pillar.word ? 0.6 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Main Card */}
                <div className={`relative h-full bg-gradient-to-br ${pillar.bgGradient} backdrop-blur-sm border-2 ${pillar.borderColor} rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-opacity-80`}>
                  {/* Top Gradient Bar */}
                  <div className={`h-1.5 bg-gradient-to-r ${pillar.gradient}`} />
                  
                  {/* Content Container */}
                  <div className="p-5 sm:p-6 md:p-7">
                    {/* Icon & Title Row */}
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center shadow-lg`}
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      >
                        <span className="text-white font-black text-lg sm:text-xl">
                          {pillar.word[0]}
                        </span>
                      </motion.div>
                      <h4 className={`text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r ${pillar.gradient}`}>
                        {pillar.word}
                      </h4>
                    </div>
                    
                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Decorative Background Letter */}
                  <div 
                    className={`absolute -right-4 -bottom-6 text-[120px] font-black text-transparent bg-clip-text bg-gradient-to-br ${pillar.gradient} opacity-[0.07] select-none pointer-events-none leading-none`}
                  >
                    {pillar.word[0]}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Connection Flow Line (Desktop Only) - Red to Purple */}
          <div className="hidden md:block relative h-12 mb-6">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center">
              {/* Full Width Line - Red to Purple gradient */}
              <motion.div
                className="w-2/3 h-[3px] rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #ef4444 0%, #a855f7 100%)'
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              />
              
              {/* Traveling Orb - Changes color as it moves */}
              <motion.div
                className="absolute w-5 h-5 rounded-full shadow-lg"
                style={{
                  marginLeft: '-10px',
                }}
                animate={{
                  left: ['16.67%', '83.33%', '16.67%'],
                  background: [
                    'linear-gradient(135deg, #ef4444 0%, #f87171 100%)',
                    'linear-gradient(135deg, #a855f7 0%, #c084fc 100%)',
                    'linear-gradient(135deg, #ef4444 0%, #f87171 100%)'
                  ],
                  boxShadow: [
                    '0 0 20px rgba(239, 68, 68, 0.7)',
                    '0 0 20px rgba(168, 85, 247, 0.7)',
                    '0 0 20px rgba(239, 68, 68, 0.7)'
                  ],
                  scale: [1.2, 1.2, 1.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.5, 1]
                }}
              />
              
              {/* Endpoint Dots - Red on left, Purple on right */}
              <div className="absolute left-[16.67%] -translate-x-1/2 w-3 h-3 rounded-full bg-red-500" style={{ boxShadow: '0 0 12px rgba(239, 68, 68, 0.6)' }} />
              <div className="absolute right-[16.67%] translate-x-1/2 w-3 h-3 rounded-full bg-purple-500" style={{ boxShadow: '0 0 12px rgba(168, 85, 247, 0.6)' }} />
            </div>
          </div>

          {/* Audience Cards 2.0 - Refined Design */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {audience.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: 0.6 + idx * 0.1, 
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ 
                  y: -6, 
                  scale: 1.02,
                  transition: { duration: 0.25 }
                }}
                className="relative group"
              >
                {/* Card */}
                <div className="relative flex items-start gap-4 p-5 sm:p-6 bg-white border-2 border-gray-100 hover:border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-transparent to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Emoji Icon with Background */}
                  <motion.div 
                    className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 flex items-center justify-center shadow-sm"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-2xl sm:text-3xl">{item.icon}</span>
                  </motion.div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex-1">
                    <h5 className="font-bold text-gray-900 text-base sm:text-lg mb-1.5">
                      {item.title}
                    </h5>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Subtle Corner Accent */}
                  <div className={`absolute top-0 right-0 w-16 h-16 ${idx === 0 ? 'bg-red-500' : idx === 1 ? 'bg-purple-500' : 'bg-emerald-500'} opacity-[0.03] rounded-bl-[40px]`} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Accent Dots */}
          <motion.div
            className="flex justify-center mt-10 gap-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            {['bg-red-400', 'bg-purple-400', 'bg-emerald-400'].map((color, i) => (
              <motion.div
                key={i}
                className={`w-2 h-2 rounded-full ${color}`}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mb-16 sm:mb-20 md:mb-28"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-lg sm:text-3xl md:text-3xl font-bold text-gray-900 mb-8 sm:mb-10 md:mb-12 text-center"
          >
            What Members Say
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: 0.55 + idx * 0.1, duration: 0.5 }}
                className="bg-gradient-to-br from-gray-50 to-white border-2 border-red-100/50 rounded-2xl p-6 sm:p-7 md:p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <AiFillStar key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-base sm:text-lg text-gray-900 font-semibold mb-4 italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="border-t border-red-100/50 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-xs sm:text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center bg-gradient-to-r from-red-50 to-purple-50 rounded-3xl border-2 border-red-200/50 p-8 sm:p-10 md:p-12 lg:p-14"
        >
          {/* Main CTA Button */}
          <motion.button
            onClick={openForm}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 60px rgba(220, 38, 38, 0.3)",
              transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } 
            }}
            whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
            className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-purple-900 via-purple-700 to-red-600 text-white font-bold rounded-xl sm:rounded-2xl text-sm sm:text-lg shadow-2xl overflow-hidden ring-2 ring-red-400/20 hover:ring-red-400/40 transition-all mb-5 md:mb-6"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
              Join the Community
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-purple-900"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.button>

          {/* Micro-text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-sm sm:text-base text-gray-700 font-semibold"
          >
            Be part of a growing network of medics creating with intention.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;
