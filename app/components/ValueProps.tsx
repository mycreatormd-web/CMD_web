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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-gray-900"
        >
          Why Choose CreatorMD?
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <value.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
