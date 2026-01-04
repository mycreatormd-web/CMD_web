// app/components/ValueProps.tsx
"use client";

import { motion } from 'framer-motion';
import { BookOpen, Video, Users, Trophy } from 'lucide-react';

const ValueProps = () => {
  const values = [
    {
      icon: BookOpen,
      title: "Expert Training",
      description: "Learn from industry-leading medical content creators"
    },
    {
      icon: Video,
      title: "Content Templates",
      description: "Ready-to-use frameworks for various medical topics"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with 500+ medical professionals worldwide"
    },
    {
      icon: Trophy,
      title: "Proven Results",
      description: "98% success rate in building medical authority"
    }
  ];

  return (
    <section className="relative py-10 md:py-14 lg:py-16 xl:py-18 bg-gray-50 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      {/* Decorative Blobs */}
      <div className="hidden sm:block absolute top-10 left-10 w-40 md:w-48 h-40 md:h-48 bg-red-100/20 rounded-full blur-3xl pointer-events-none" />
      <div className="hidden sm:block absolute bottom-10 right-10 w-44 md:w-56 h-44 md:h-56 bg-purple-100/20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl lg:text-2.5xl xl:text-3xl font-bold text-center mb-8 md:mb-10 lg:mb-12 xl:mb-14 text-gray-900"
        >
          Why Choose CreatorMD?
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-6 xl:gap-7 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-3 md:p-4 lg:p-4.5 xl:p-5 rounded-lg md:rounded-lg lg:rounded-lg xl:rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <value.icon className="w-9 md:w-10 lg:w-10 xl:w-11 h-9 md:h-10 lg:h-10 xl:h-11 text-blue-600 mb-2 md:mb-3 lg:mb-3 xl:mb-3.5" />
              <h3 className="text-sm md:text-base lg:text-base xl:text-lg font-bold mb-1.5 text-gray-900">{value.title}</h3>
              <p className="text-xs md:text-xs lg:text-xs xl:text-sm text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
