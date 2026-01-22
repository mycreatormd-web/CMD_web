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

  // Commented out - "Trusted by Medical Professionals" section
  return null;
};

export default SocialProof;
