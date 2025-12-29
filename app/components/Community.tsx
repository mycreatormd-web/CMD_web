// app/components/Community.tsx
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Trophy, Heart, MessageCircle, Zap, ChevronRight, CheckCircle, Star, Lightbulb, Shield } from 'lucide-react';

const Community = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const insideCommunity = [
    {
      id: 1,
      icon: BookOpen,
      title: "Weekly Live Learning Sessions",
      description: "Learn directly from experienced creators",
      details: "Join our live workshops every week where we dive deep into content creation, health communication, personal branding, and monetization strategies. Interactive Q&A with industry experts included."
    },
    {
      id: 2,
      icon: Trophy,
      title: "Monthly Challenges & Prompts",
      description: "Stay inspired with curated content ideas",
      details: "Get fresh, themed content prompts every month. Participate in challenges that stretch your creativity, get feedback from the community, and build your portfolio while having fun."
    },
    {
      id: 3,
      icon: Zap,
      title: "Practical Templates & Resources",
      description: "Scripts, captions, and ideas ready to use",
      details: "Access our library of ready-to-use content templates, email swipes, video scripts, carousel templates, and caption ideas. Save hours of planning and jump straight into creation."
    },
    {
      id: 4,
      icon: Heart,
      title: "Peer Support & Accountability",
      description: "Connect with fellow medics on the journey",
      details: "Find your accountability buddy, celebrate wins together, share struggles without judgment, and build real relationships with medics who understand your unique challenges."
    }
  ];

  const culturePoints = [
    { icon: Shield, text: "No comparison culture" },
    { icon: Lightbulb, text: "Clarity-focused space" },
    { icon: Users, text: "Supportive environment" },
    { icon: Star, text: "Purpose-driven community" }
  ];

  const audience = [
    "Medical students",
    "Practicing medics",
    "Health creators",
    "Digital health educators"
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
    <section id="community" className="relative py-16 sm:py-20 md:py-28 lg:py-32 bg-white overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-50/20 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          {/* Subtitle Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-red-100 to-purple-100 rounded-full mb-4 sm:mb-5"
          >
            <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-700" />
            <span className="text-xs sm:text-sm font-semibold text-red-700">COMMUNITY</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6"
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
            className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
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
            className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-8 sm:mb-10 md:mb-12"
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
                    className="group bg-white border-2 border-red-100/50 hover:border-red-300/50 rounded-2xl p-6 sm:p-7 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    {/* Hover background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-purple-50 opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none" />

                    {/* Icon */}
                    <motion.div
                      layout
                      className="relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-red-100 to-purple-100 flex items-center justify-center mb-4 md:mb-5 group-hover:scale-110 transition-transform duration-300"
                    >
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-red-700" />
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
                      <p className="text-sm text-gray-700 pt-3 border-t border-red-100 mt-3">
                        {feature.details}
                      </p>
                    </motion.div>

                    {/* Expand indicator */}
                    <motion.div
                      className="relative z-10 flex items-center justify-between mt-4 pt-4 border-t border-red-100/50"
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
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            </div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8"
            >
              The Culture
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="relative z-10 text-base sm:text-lg md:text-xl text-white/95 leading-relaxed max-w-3xl mb-8 md:mb-10"
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

        {/* Who It's For Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-16 sm:mb-20 md:mb-28"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-7 md:mb-8"
          >
            Who It's For
          </motion.h3>

          {/* Audience Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap gap-3 sm:gap-4"
          >
            {audience.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + idx * 0.08, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-red-100/80 to-purple-100/80 border-2 border-red-200/60 hover:border-red-400 rounded-full transition-all duration-300"
              >
                <span className="text-sm sm:text-base font-semibold text-gray-900">{item}</span>
              </motion.div>
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
            className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-8 sm:mb-10 md:mb-12 text-center"
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
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-base sm:text-lg text-gray-900 font-semibold mb-4 italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="border-t border-red-100/50 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
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
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 60px rgba(220, 38, 38, 0.3)",
              transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } 
            }}
            whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
            className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-purple-900 via-purple-700 to-red-600 text-white font-bold rounded-xl sm:rounded-2xl text-base sm:text-lg shadow-2xl overflow-hidden ring-2 ring-red-400/20 hover:ring-red-400/40 transition-all mb-5 md:mb-6"
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
            className="text-xs sm:text-sm text-gray-700 font-semibold"
          >
            Be part of a growing network of medics creating with intention.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;
