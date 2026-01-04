// app/components/CurvedProcessFlow.tsx - UPDATED with spacing props
'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface CurvedProcessFlowProps {
  steps: ProcessStep[];
  compact?: boolean; // New prop for compact mode
  spacing?: 'tight' | 'normal' | 'loose'; // New prop for spacing control
}

const CurvedProcessFlow = ({ 
  steps, 
  compact = false,
  spacing = 'normal' 
}: CurvedProcessFlowProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isManuallyChanged, setIsManuallyChanged] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Spacing configuration
  const spacingConfig = {
    tight: {
      containerHeight: 'h-[240px] sm:h-[280px] md:h-[320px]',
      svgViewBox: '0 0 1000 400',
      curveAmplitude: 30,
      detailSpacing: 'mt-0',
      navSpacing: 'mt-2'
    },
    normal: {
      containerHeight: 'h-[300px] sm:h-[350px] md:h-[400px]',
      svgViewBox: '0 0 1000 500',
      curveAmplitude: 40,
      detailSpacing: 'mt-2 sm:mt-3 md:mt-4',
      navSpacing: 'mt-2 sm:mt-3 md:mt-4'
    },
    loose: {
      containerHeight: 'h-[360px] sm:h-[420px] md:h-[480px]',
      svgViewBox: '0 0 1000 600',
      curveAmplitude: 50,
      detailSpacing: 'mt-4 sm:mt-6 md:mt-8',
      navSpacing: 'mt-4 sm:mt-5 md:mt-6'
    }
  };

  const config = spacingConfig[spacing];

  // Color definitions for circles
  const colors = [
    { rgb: '239, 68, 68', name: 'red' },
    { rgb: '168, 85, 247', name: 'purple' },
    { rgb: '59, 130, 246', name: 'blue' }
  ];

  // Gradient definitions for step buttons and icons
  const stepGradients = [
    'from-red-500 to-red-600',
    'from-purple-500 to-purple-600',
    'from-purple-500 via-pink-500 to-red-500'
  ];

  // Calculate positions for each step along a smooth curve
  const calculateStepPosition = (index: number) => {
    const totalSteps = steps.length;
    const t = totalSteps > 1 ? index / (totalSteps - 1) : 0.5;
    
    // Using percentage-based coordinates
    const startX = 8;
    const endX = 92;
    const x = startX + (endX - startX) * t;
    
    // Create an arc with configurable amplitude
    const y = 50 + config.curveAmplitude * Math.sin(t * Math.PI);
    
    return { x, y };
  };

  // Generate SVG path connecting all steps
  const generateCurvedPath = () => {
    const positions = steps.map((_, i) => calculateStepPosition(i));
    
    // Convert percentage to SVG coordinates
    const viewBoxHeight = parseInt(config.svgViewBox.split(' ')[3]);
    const toSVG = (pos: {x: number, y: number}) => ({
      x: (pos.x / 100) * 1000,
      y: (pos.y / 100) * viewBoxHeight
    });
    
    const svgPositions = positions.map(toSVG);
    let path = `M ${svgPositions[0].x} ${svgPositions[0].y}`;
    
    for (let i = 1; i < svgPositions.length; i++) {
      const prev = svgPositions[i - 1];
      const curr = svgPositions[i];
      
      // Cubic bezier control points for smooth curve
      const cp1x = prev.x + (curr.x - prev.x) * 0.5;
      const cp1y = prev.y - 80;
      const cp2x = curr.x - (curr.x - prev.x) * 0.5;
      const cp2y = curr.y - 80;
      
      path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
    }
    
    return path;
  };

  // Auto-rotate through steps with reset capability
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    if (!isManuallyChanged) {
      intervalRef.current = setInterval(() => {
        setActiveStep(prev => (prev + 1) % steps.length);
      }, 4000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [steps.length, isManuallyChanged]);

  const getActiveSvgPosition = () => {
    const pos = calculateStepPosition(activeStep);
    const viewBoxHeight = parseInt(config.svgViewBox.split(' ')[3]);
    return {
      x: (pos.x / 100) * 1000,
      y: (pos.y / 100) * viewBoxHeight
    };
  };

  // ... (keep color arrays the same)

  return (
    <div 
      ref={containerRef}
      className="relative w-full py-0 overflow-visible"
    >
      {/* Background Grid */}
      {!compact && (
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(239,68,68,0.1) 1px, transparent 1px),
                linear-gradient(rgba(239,68,68,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px'
            }}
          />
        </div>
      )}

      {/* Main Container */}
      <div className="relative z-10 mx-auto px-4">
        {/* Interactive Process Visualization */}
        <div className={`relative ${config.containerHeight} mb-0`}>
          {/* SVG Container */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox={config.svgViewBox}
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Glow filter */}
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Path gradient - white/light */}
              <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#e5e7eb" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.5" />
              </linearGradient>

              {/* Progress gradient - purple to red */}
              <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#ec4899" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ef4444" stopOpacity="0.8" />
              </linearGradient>

              {/* Radial gradients for each step circle */}
              {colors.map((color, idx) => (
                <radialGradient key={`grad-${idx}`} id={`grad-${idx}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={color.rgb} stopOpacity="1" />
                  <stop offset="100%" stopColor={color.rgb} stopOpacity="0.7" />
                </radialGradient>
              ))}
            </defs>

            {/* Main curved path */}
            <motion.path
              d={generateCurvedPath()}
              fill="none"
              stroke="url(#path-gradient)"
              strokeWidth="3"
              strokeLinecap="round"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />

            {/* Animated progress indicator */}
            <motion.path
              d={generateCurvedPath()}
              fill="none"
              stroke="url(#progress-gradient)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: activeStep === 0 ? 0 : activeStep / (steps.length - 1) }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              opacity="0.8"
            />

            {/* SVG Step Circles */}
            {steps.map((step, index) => {
              const position = calculateStepPosition(index);
              const isActive = activeStep === index;
              const viewBoxHeight = parseInt(config.svgViewBox.split(' ')[3]);
              const svgPos = {
                x: (position.x / 100) * 1000,
                y: (position.y / 100) * viewBoxHeight
              };
              const color = colors[index];

              return (
                <g key={step.step}>
                  {/* Outer glow for active step */}
                  {isActive && (
                    <motion.circle
                      cx={svgPos.x}
                      cy={svgPos.y}
                      r="45"
                      fill="none"
                      stroke={`rgb(${color.rgb})`}
                      strokeWidth="1"
                      opacity="0.2"
                      animate={{
                        r: [45, 72, 45],
                        opacity: [0.4, 0.05, 0.4]
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}

                  {/* Main circle with clickable area */}
                  <motion.circle
                    cx={svgPos.x}
                    cy={svgPos.y}
                    r="30"
                    fill={`url(#grad-${index})`}
                    stroke="rgba(255, 255, 255, 0.2)"
                    strokeWidth="3"
                    style={{ cursor: 'pointer' }}
                    animate={{
                      r: isActive ? 35 : 30
                    }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ r: 35 }}
                    onMouseEnter={() => {
                      setActiveStep(index);
                      setIsManuallyChanged(true);
                      setTimeout(() => setIsManuallyChanged(false), 4000);
                    }}
                    onClick={() => {
                      setActiveStep(index);
                      setIsManuallyChanged(true);
                      setTimeout(() => setIsManuallyChanged(false), 4000);
                    }}
                  />

                  {/* Step number text */}
                  <motion.text
                    x={svgPos.x}
                    y={svgPos.y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="28"
                    fontWeight="bold"
                    fill="white"
                    pointerEvents="none"
                    animate={{
                      fontSize: isActive ? 32 : 28
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.step}
                  </motion.text>

                  {/* Inner pulse ring for active step */}
                  {isActive && (
                    <motion.circle
                      cx={svgPos.x}
                      cy={svgPos.y}
                      r="20"
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.5)"
                      strokeWidth="1.5"
                      animate={{
                        r: [20, 40, 20],
                        opacity: [0.7, 0.05, 0.7]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                </g>
              );
            })}

            {/* Animated center dot at active step */}
            <motion.circle
              cx={getActiveSvgPosition().x}
              cy={getActiveSvgPosition().y}
              r="6"
              fill="white"
              animate={{
                r: [6, 12, 6],
                opacity: [1, 0.6, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Large pulse ring at active step */}
            <motion.circle
              cx={getActiveSvgPosition().x}
              cy={getActiveSvgPosition().y}
              r="12"
              fill="none"
              stroke="white"
              strokeWidth="2"
              animate={{
                r: [12, 40, 12],
                opacity: [0.8, 0, 0.8]
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </svg>
        </div>

        {/* Step Details Panel */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`max-w-3xl mx-auto p-2 sm:p-4 md:p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-md border border-red-500/30 ${config.detailSpacing}`}
        >
          <div className="flex items-start gap-6">
            {/* Step Icon/Number */}
            <div
              className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${stepGradients[activeStep]} flex items-center justify-center`}
            >
              <span className="text-2xl font-bold text-white">
                {steps[activeStep].step}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="text-sm font-semibold text-red-300 uppercase tracking-wider mb-2">
                Step {steps[activeStep].step}
              </div>
              <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-white mb-2 sm:mb-3">
                {steps[activeStep].title}
              </h3>
              <p className="text-sm sm:text-base md:text-base text-gray-300 leading-relaxed mb-3 sm:mb-4">
                {steps[activeStep].description}
              </p>

              {/* Progress bar */}
              <div className="mt-6">
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-red-500 to-purple-500"
                    initial={{ width: '0%' }}
                    animate={{ width: `${activeStep === 0 ? 0 : (activeStep / (steps.length - 1)) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="text-sm text-gray-400 mt-2">
                  Step {activeStep + 1} of {steps.length}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Step Navigation Buttons */}
        <div className={`flex justify-center gap-3 ${config.navSpacing}`}>
          {steps.map((step, idx) => (
            <motion.button
              key={step.step}
              onClick={() => {
                setActiveStep(idx);
                setIsManuallyChanged(true);
                setTimeout(() => setIsManuallyChanged(false), 4000);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeStep === idx
                  ? `bg-gradient-to-r ${stepGradients[idx]} text-white shadow-lg`
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700/80'
              }`}
            >
              Step {step.step}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Floating particles (only if not compact) */}
      {!compact && (
        <div className="absolute inset-0 pointer-events-none overflow-visible">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0, 0.8, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.1
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CurvedProcessFlow;