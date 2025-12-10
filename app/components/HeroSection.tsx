// app/components/HeroSection.tsx
"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Sparkles, Target, Zap, ChevronRight, Brain } from 'lucide-react';

const HeroSection = () => {
  const [activeWord, setActiveWord] = useState(0);
  const [particles, setParticles] = useState<Array<{id: number; x: number; y: number; size: number}>>([]);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const heroWords = [
    { text: "Authority", color: "text-blue-500" },
    { text: "Opportunities", color: "text-emerald-500" },
    { text: "Impact", color: "text-purple-500" },
    { text: "Influence", color: "text-rose-500" }
  ];

  const rotatingTexts = [
    "without confusion",
    "without burnout",
    "with clarity",
    "with confidence"
  ];

  // Particle system
  useEffect(() => {
    const generateParticles = () => {
      if (!containerRef.current) return;
      
      const { width, height } = containerRef.current.getBoundingClientRect();
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3 + 1
      }));
      setParticles(newParticles);
    };

    generateParticles();
    window.addEventListener('resize', generateParticles);
    return () => window.removeEventListener('resize', generateParticles);
  }, []);

  // Word rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % heroWords.length);
    }, 2000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      if (containerRef.current) {
        canvas.width = containerRef.current.clientWidth;
        canvas.height = containerRef.current.clientHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let animationId: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw floating medical icons
      const icons = ['🫀', '🧠', '🦠', '💊', '📈', '🎯'];
      for (let i = 0; i < 15; i++) {
        const x = (Math.sin(time * 0.001 + i) * 0.5 + 0.5) * canvas.width;
        const y = (Math.cos(time * 0.001 + i * 0.7) * 0.5 + 0.5) * canvas.height;
        const size = 20 + Math.sin(time * 0.002 + i) * 5;
        
        ctx.font = `${size}px Arial`;
        ctx.fillText(icons[i % icons.length], x, y);
        ctx.globalAlpha = 0.1 + Math.sin(time * 0.002 + i) * 0.1;
      }
      
      ctx.globalAlpha = 1;
      
      // Draw connecting lines
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)';
      ctx.lineWidth = 1;
      
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      time += 16;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [particles]);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900"
    >
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-blue-400"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(particle.id) * 10, 0],
            }}
            transition={{
              duration: 2 + particle.id * 0.1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Animated Logo Intro */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Brain className="w-10 h-10 text-blue-400" />
            </motion.div>
            <div className="flex items-baseline">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Creator
              </h1>
              <span className="text-5xl font-bold text-white">MD</span>
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className="ml-2 text-xs font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 py-1 rounded-full"
              >
                ™️
              </motion.span>
            </div>
          </motion.div>

          {/* Hero Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-6"
          >
            <span className="inline-block px-4 py-2 bg-blue-900/50 backdrop-blur-sm rounded-full border border-blue-700/50 text-blue-300 text-sm font-medium mb-4">
              Medical Content Acceleration System
            </span>
          </motion.div>

          {/* Main Headline */}
          <div className="text-center mb-8">
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Turn medical knowledge into
              <br />
              <div className="relative inline-block h-28 md:h-32 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeWord}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute left-0 right-0 ${heroWords[activeWord].color}`}
                  >
                    {heroWords[activeWord].text}
                  </motion.span>
                </AnimatePresence>
              </div>
            </h2>

            {/* Animated Subheading */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-gray-300 mb-8"
            >
              <span className="font-medium">Create impactful content </span>
              <motion.span
                key={rotatingTexts[activeWord % rotatingTexts.length]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="inline-block font-bold text-emerald-400"
              >
                {rotatingTexts[activeWord % rotatingTexts.length]}
              </motion.span>
            </motion.div>
          </div>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto"
          >
            {[
              { label: "Trained Medics", value: "500+", icon: Sparkles },
              { label: "Countries", value: "25+", icon: Target },
              { label: "Content Hours", value: "10K+", icon: Zap },
              { label: "Success Rate", value: "98%", icon: Play },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <stat.icon className="w-5 h-5 text-blue-400" />
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                </div>
                <div className="text-sm text-gray-400 text-center">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold rounded-xl text-lg shadow-2xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Join Waitlist 
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setVideoPlaying(true)}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl text-lg border border-white/20 hover:bg-white/20 transition-colors flex items-center gap-3"
            >
              <Play className="w-5 h-5" />
              Watch Intro
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-blue-400 rounded-full mt-2" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {videoPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setVideoPlaying(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden">
                {/* Placeholder for video - replace with actual video component */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <Play className="w-20 h-20 text-blue-400 mx-auto mb-4" />
                    <p className="text-white text-xl">CreatorMD Introduction</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setVideoPlaying(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulse Effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
        <motion.div
          className="absolute inset-0 rounded-full border border-blue-400/20"
          animate={{ scale: [1, 1.5, 2], opacity: [0.5, 0.2, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 rounded-full border border-emerald-400/20"
          animate={{ scale: [1, 1.8, 2.3], opacity: [0.5, 0.2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
