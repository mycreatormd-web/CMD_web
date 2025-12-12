// app/components/About.tsx
"use client";

import { motion } from 'framer-motion';
import { Target, Users, Heart, Sparkles, CheckCircle, BookOpen, TrendingUp, Shield, Zap } from 'lucide-react';

const About = () => {

  const missionItems = [
    {
      icon: BookOpen,
      title: "Equip medics with the skills and clarity",
      description: "Craft engaging, trustworthy health content.",
      gradient: "from-blue-500 to-cyan-500"
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
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: Zap,
      title: "Build strong digital brands",
      description: "Produce educational content and unlock new opportunities.",
      gradient: "from-amber-500 to-orange-500"
    }
  ];

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
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Community Learning",
      description: "Grow with peers who share your passion.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: Shield,
      title: "Ethical Impact",
      description: "Influence public health responsibly.",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: Sparkles,
      title: "No Compromise",
      description: "Create without sacrificing time or authenticity.",
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <section id="about" className="relative py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      {/* Decorative Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-200/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
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
            <span className="px-6 py-2.5 bg-white/80 backdrop-blur-md rounded-full border border-blue-200 text-blue-600 text-sm font-semibold shadow-lg">
              Who We Are
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              About CreatorMD
            </span>
            <span className="text-blue-600">™</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
          >
            CreatorMD is a <span className="text-gray-900 font-bold">medical content acceleration brand</span> dedicated to helping healthcare professionals step into the digital world with <span className="text-emerald-600 font-bold">clarity, confidence, and purpose</span>. We simplify the content creation process by transforming complex medical knowledge into clear, meaningful communication that drives real impact and opens doors to new opportunities.
          </motion.p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto mb-16 md:mb-24"
        >
          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-2 border-blue-200 shadow-xl">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Our mission is to ease the <span className="text-rose-600 font-bold">overwhelm, overthinking, and burnout</span> many medics face when sharing their expertise online. Through straightforward frameworks, a supportive community, and practical guidance, CreatorMD empowers medics to express their knowledge authentically, build credibility, and contribute positively to public health conversations.
            </p>
          </div>
        </motion.div>

        {/* Vision & Mission - Side by Side */}
        <div className="max-w-7xl mx-auto mb-16 md:mb-24">
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
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
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
              className="bg-gradient-to-br from-blue-100 to-emerald-100 rounded-3xl p-8 md:p-10 border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl shadow-lg">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Our Mission</h3>
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
                      <p className="text-base font-semibold text-gray-900 mb-1">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* What Sets Us Apart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                What Sets CreatorMD Apart
              </span>
            </h3>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Created by medics for medics, our approach is simple, human, and relatable—free of jargon and overwhelm. We focus on practical clarity and genuine support.
            </p>
          </div>

          {/* Horizontal Scrolling Cards */}
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: 1,
                  transition: { duration: 0.2 }
                }}
                className="group flex-shrink-0 w-[280px] md:w-auto snap-center bg-white rounded-3xl p-6 md:p-8 border-2 border-gray-200 shadow-lg hover:shadow-2xl hover:border-blue-300 transition-all duration-300"
              >
                <div className={`p-4 bg-gradient-to-br ${item.gradient} rounded-2xl w-fit mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-16 md:mt-24"
        >
          <motion.a
            href="#join"
            whileHover={{ 
              scale: 1.08,
              boxShadow: "0 25px 70px rgba(59, 130, 246, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-600 text-white font-bold rounded-full text-xl shadow-2xl hover:shadow-blue-500/60 transition-all"
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
