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

  const influenceWords = [
    { text: "Influence", color: "from-blue-400 via-emerald-400 to-cyan-400" },
    { text: "Impact", color: "from-purple-400 via-pink-400 to-rose-400" },
    { text: "Opportunity", color: "from-emerald-400 via-teal-400 to-cyan-400" },
    { text: "Presence", color: "from-blue-400 via-indigo-400 to-purple-400" },
    { text: "Leadership", color: "from-amber-400 via-orange-400 to-red-400" }
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
      setActiveWord((prev) => (prev + 1) % influenceWords.length);
    }, 3000);
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
      className="relative h-screen overflow-hidden bg-gradient-to-br from-black via-gray-950 to-black"
    >
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 opacity-30">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 blur-[1px]"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(particle.id) * 15, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + particle.id * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "mirror",
            }}
          />
        ))}
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12 h-full flex flex-col justify-center">
        <div className="max-w-7xl mx-auto">
          {/* Animated Logo Intro */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6 px-4"
          >
            <motion.div
              animate={{ 
                rotate: 360,
              }}
              transition={{ 
                duration: 25, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              <Brain className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
            </motion.div>
            <div className="flex items-baseline gap-0.5 md:gap-1">
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-blue-300 to-emerald-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                Creator
              </motion.h1>
              <motion.span 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                MD
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="ml-1 md:ml-2 text-[10px] sm:text-xs font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white px-1.5 py-0.5 md:px-2 md:py-1 rounded-full shadow-lg"
              >
                ™️
              </motion.span>
            </div>
          </motion.div>

          {/* Hero Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-4 md:mb-6 px-4"
          >
            <span className="inline-block px-4 py-2 md:px-6 md:py-2.5 bg-gradient-to-r from-blue-950/50 to-emerald-950/50 backdrop-blur-md rounded-full border border-blue-800/20 text-blue-300 text-xs sm:text-sm font-medium shadow-lg">
              Built by medics, for medics.
            </span>
          </motion.div>

          {/* Main Headline */}
          <div className="text-center mb-6 md:mb-8 px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.2]"
            >
              {/* Mobile: 3 lines */}
              <span className="block md:hidden text-white">Turn Your Medical</span>
              <span className="block md:hidden text-white">Knowledge Into</span>
              
              {/* Desktop: 2 lines */}
              <span className="hidden md:block text-white">Turn Your Medical Knowledge</span>
              
              {/* Changing word line */}
              <span className="flex items-center justify-center gap-2 md:gap-3">
                <span className="hidden md:inline text-white">Into</span>
                <span className="relative inline-block min-h-[1.2em] flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={activeWord}
                      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                      transition={{ 
                        duration: 0.7, 
                        ease: [0.22, 1, 0.36, 1] 
                      }}
                      className={`whitespace-nowrap bg-gradient-to-r ${influenceWords[activeWord].color} bg-clip-text text-transparent`}
                    >
                      {influenceWords[activeWord].text}
                    </motion.span>
                  </AnimatePresence>
                </span>
                <span className="text-white ml-1">.</span>
              </span>
            </motion.h2>

            {/* Animated Subheading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 md:mb-6 max-w-3xl mx-auto leading-relaxed px-4 md:px-6"
            >
              <span className="text-gray-300">
                CreatorMD helps medics create <span className="font-semibold text-white">clear, credible health content</span>, build <span className="font-semibold text-blue-300">digital authority</span>, and open <span className="font-semibold text-emerald-300">new opportunities</span> — without burnout or confusion.
              </span>
            </motion.div>
          </div>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 md:mb-8 max-w-3xl mx-auto px-4"
          >
            {[
              { label: "Trained Medics", value: "600+", icon: Sparkles },
              { label: "Countries", value: "25+", icon: Target },
              { label: "Content Hours", value: "10K+", icon: Zap },
              { label: "Success Rate", value: "98%", icon: Play },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 1.1 + index * 0.1, 
                  duration: 0.8, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } 
                }}
                className="group bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-md rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 border border-white/5 hover:border-blue-500/30 transition-all duration-300 shadow-xl hover:shadow-blue-500/10"
              >
                <div className="flex items-center justify-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                  <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  <div className="text-2xl sm:text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                </div>
                <div className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-400 text-center transition-colors">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center px-4"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 60px rgba(59, 130, 246, 0.4)",
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } 
              }}
              whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
              className="group relative px-8 sm:px-10 py-3.5 sm:py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-600 text-white font-bold rounded-xl sm:rounded-2xl text-base sm:text-lg shadow-2xl overflow-hidden ring-2 ring-blue-400/20 hover:ring-blue-400/40 transition-all w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Join Waitlist 
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-emerald-500 to-blue-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgba(255, 255, 255, 0.3)",
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } 
              }}
              whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
              onClick={() => setVideoPlaying(true)}
              className="group px-8 sm:px-10 py-3.5 sm:py-4 bg-white/5 backdrop-blur-md text-white font-bold rounded-xl sm:rounded-2xl text-base sm:text-lg border border-white/10 transition-all flex items-center justify-center gap-2 sm:gap-3 shadow-lg hover:shadow-white/10 w-full sm:w-auto"
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
              Watch Intro
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
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
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
            onClick={() => setVideoPlaying(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-4xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-black rounded-xl overflow-hidden border border-white/10">
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
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulse Effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none">
        <motion.div
          className="absolute inset-0 rounded-full border border-blue-500/10"
          animate={{ scale: [1, 1.5, 2], opacity: [0.3, 0.15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-0 rounded-full border border-emerald-500/10"
          animate={{ scale: [1, 1.8, 2.3], opacity: [0.3, 0.15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
