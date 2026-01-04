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
    { text: "Influence", color: "from-red-400 via-purple-400 to-red-300" },
    { text: "Impact", color: "from-purple-400 via-pink-400 to-rose-400" },
    { text: "Opportunity", color: "from-purple-400 via-red-400 to-purple-300" },
    { text: "Presence", color: "from-red-400 via-purple-600 to-black" },
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
            className="absolute rounded-full bg-gradient-to-br from-red-400 to-purple-400 blur-[1px]"
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
      <div className="relative z-10 container mx-auto px-4 py-6 md:py-10 lg:py-14 xl:py-28 h-full flex flex-col justify-center items-center w-full">
        <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
          {/* Hero Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-4 md:mb-6 lg:mb-8 px-4 mt-4 sm:mt-8 md:mt-6 lg:mt-10 xl:mt-16"
          >
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 md:px-4 md:py-2 lg:px-5 lg:py-2 xl:px-6 xl:py-2.5 bg-gradient-to-r from-red-600/20 via-purple-600/20 to-red-600/20 backdrop-blur-lg rounded-full border-2 border-red-500/40 text-white text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base font-bold shadow-lg hover:shadow-red-600/20 transition-all duration-300">
              Built by medics, for medics.
            </span>
          </motion.div>

          {/* Main Headline */}
          <div className="text-center mb-4 md:mb-8 lg:mb-10 xl:mb-16 px-3 sm:px-4 mt-2 sm:mt-1 lg:mt-2 xl:mt-4">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-6xl font-bold leading-[1.1] sm:leading-[1.2]"
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
              className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-lg mb-2 md:mb-3 lg:mb-4 xl:mb-6 max-w-3xl mx-auto leading-relaxed px-3 sm:px-4 md:px-6 mt-2 sm:mt-1 lg:mt-2 xl:mt-0"
            >
              <span className="text-gray-300">
                CreatorMD helps medics build <span className="font-semibold text-white">income</span>, <span className="font-semibold text-red-300">influence</span>, and <span className="font-semibold text-purple-300">impact</span> online.
              </span>
            </motion.div>
          </div>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 md:grid-cols-4 gap-1.5 sm:gap-2 md:gap-2 lg:gap-3 xl:gap-4 mb-4 md:mb-6 lg:mb-8 xl:mb-12 max-w-3xl mx-auto px-4 mt-3 sm:mt-1 md:mt-1 lg:mt-2 xl:-mt-2"
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
                className="group bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-md rounded-lg md:rounded-lg lg:rounded-lg xl:rounded-xl p-1 sm:p-1.5 md:p-2 lg:p-2.5 xl:p-4 border border-white/5 hover:border-red-500/30 transition-all duration-300 shadow-xl hover:shadow-red-500/10"
              >
                <div className="flex items-center justify-center gap-0.5 sm:gap-1 md:gap-0.5 lg:gap-1 xl:gap-1.5 mb-0.5 sm:mb-0.5 md:mb-0.5 lg:mb-0.5 xl:mb-1.5">
                  <stat.icon className="w-2 h-2 sm:w-3 sm:h-3 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 xl:w-4 xl:h-4 text-red-400 group-hover:text-red-300 transition-colors" />
                  <div className="text-base sm:text-lg md:text-base lg:text-lg xl:text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                </div>
                <div className="text-[8px] sm:text-[9px] md:text-[8px] lg:text-[9px] xl:text-xs text-gray-500 group-hover:text-gray-400 text-center transition-colors">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-2 sm:gap-2 md:gap-3 lg:gap-3 xl:gap-5 justify-center items-stretch sm:items-center px-3 sm:px-4 mt-2 sm:mt-1 lg:mt-2 xl:mt-0"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 60px rgba(59, 130, 246, 0.4)",
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } 
              }}
              whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
              className="group relative px-6 sm:px-6 md:px-5 lg:px-7 xl:py-3 py-3 sm:py-3 md:py-2 lg:py-2.5 xl:py-3 bg-gradient-to-r from-purple-900 via-purple-700 to-red-600 text-white font-bold rounded-lg sm:rounded-lg lg:rounded-lg xl:rounded-xl text-sm sm:text-base md:text-sm lg:text-base xl:text-lg shadow-2xl overflow-hidden ring-2 ring-red-400/20 hover:ring-red-400/40 transition-all w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-1 sm:gap-1.5">
                Join Waitlist 
                <ChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-purple-900"
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
              className="group px-6 sm:px-6 md:px-5 lg:px-7 xl:px-8 py-3 sm:py-3 md:py-2 lg:py-2.5 xl:py-3 bg-white/5 backdrop-blur-md text-white font-bold rounded-lg sm:rounded-lg lg:rounded-lg xl:rounded-xl text-sm sm:text-base md:text-sm lg:text-base xl:text-lg border border-white/10 transition-all flex items-center justify-center gap-1 sm:gap-1.5 lg:gap-2 xl:gap-2.5 shadow-lg hover:shadow-white/10 w-full sm:w-auto"
            >
              <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 group-hover:scale-110 transition-transform duration-300" />
              Watch Intro
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="mt-4 md:mt-6 lg:mt-8 xl:mt-12 flex justify-center"
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center hover:border-white/50 transition-colors">
              <motion.div 
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-2 bg-gradient-to-b from-red-400 to-red-500 rounded-full mt-1.5" 
              />
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
              <div className="aspect-video bg-black rounded-3xl overflow-hidden border-8 border-gray-800 shadow-2xl shadow-black">
                <video
                  src="/creatormd.mov"
                  autoPlay
                  controls
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                onClick={() => setVideoPlaying(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors text-lg font-semibold"
              >
                ✕ Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulse Effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden sm:block w-[800px] h-[800px] pointer-events-none">
        <motion.div
          className="absolute inset-0 rounded-full border border-red-500/10"
          animate={{ scale: [1, 1.5, 2], opacity: [0.3, 0.15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-0 rounded-full border border-purple-500/10"
          animate={{ scale: [1, 1.8, 2.3], opacity: [0.3, 0.15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
