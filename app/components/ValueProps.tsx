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

  // Commented out - "Why Choose CreatorMD" section
  return null;
};

export default ValueProps;
