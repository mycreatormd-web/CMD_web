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
    <section className="relative py-10 md:py-14 lg:py-16 xl:py-18 bg-gradient-to-br from-blue-900 to-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      {/* Decorative Blobs */}
      <div className="hidden sm:block absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="hidden sm:block absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl lg:text-2.5xl xl:text-3xl font-bold text-center mb-2 md:mb-3 lg:mb-3.5 text-white"
        >
          Trusted by Medical Professionals
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-300 mb-8 md:mb-10 lg:mb-12 xl:mb-14 text-xs md:text-sm lg:text-base xl:text-base"
        >
          Join 500+ doctors building their authority online
        </motion.p>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5 lg:gap-6 xl:gap-6.5 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-3.5 md:p-4 lg:p-4.5 xl:p-5 rounded-lg md:rounded-lg lg:rounded-lg xl:rounded-lg border border-white/20"
            >
              <Quote className="w-5 h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6 text-blue-400 mb-2.5 md:mb-3 lg:mb-3.5" />
              
              <div className="flex mb-2.5 md:mb-3 lg:mb-3.5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-4.5 lg:h-4.5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-2.5 md:mb-3 lg:mb-3.5 text-xs md:text-xs lg:text-sm xl:text-sm">{testimonial.content}</p>
              
              <div>
                <p className="font-bold text-white text-xs md:text-sm lg:text-sm xl:text-base">{testimonial.name}</p>
                <p className="text-xs md:text-xs lg:text-xs xl:text-xs text-gray-400">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
