// app/components/SocialProof.tsx
"use client";

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const SocialProof = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Cardiologist",
      content: "CreatorMD transformed how I share medical knowledge. My audience grew 10x in 6 months!",
      rating: 5
    },
    {
      name: "Dr. Michael Chen",
      role: "Emergency Medicine",
      content: "The templates and community support are incredible. I wish I had found this years ago.",
      rating: 5
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Pediatrician",
      content: "Finally, a system that understands the unique challenges of medical content creation.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-4 text-white"
        >
          Trusted by Medical Professionals
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-300 mb-16 text-lg"
        >
          Join 500+ doctors building their authority online
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
            >
              <Quote className="w-8 h-8 text-blue-400 mb-4" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-4">{testimonial.content}</p>
              
              <div>
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
