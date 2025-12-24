'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ChevronDown } from 'lucide-react';
import { Program } from '@/app/types/program';
import { trackPreviewOpen, trackExternalLinkClick, trackJoinWaitlist } from '@/app/utils/analytics';

interface ProgramModalProps {
  program: Program | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProgramModal({ program, isOpen, onClose }: ProgramModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [expandedBenefits, setExpandedBenefits] = useState(false);

  // Track analytics on modal open
  useEffect(() => {
    if (isOpen && program) {
      trackPreviewOpen(program.id, program.title);
    }
  }, [isOpen, program]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      // Focus close button for accessibility
      closeButtonRef.current?.focus();
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen, onClose]);

  // Handle external link click
  const handleExternalLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (program) {
      trackExternalLinkClick(program.id, program.title, (e.target as HTMLAnchorElement).href);
    }
  };

  // Handle waitlist/CTA click
  const handleWaitlistClick = () => {
    if (program) {
      trackJoinWaitlist(program.id, program.title);
      // In a real app, this would open a form or contact modal
      alert(`Join waitlist for ${program.title}`);
    }
  };

  if (!program) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - Desktop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.16 }}
            className="fixed inset-0 bg-black/40 z-[50] hidden sm:block"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal Container - Desktop */}
          <div className="fixed inset-0 z-[60] hidden sm:flex items-center justify-center pointer-events-none">
            <motion.div
              key="modal"
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.32, ease: 'easeOut' }}
              className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl pointer-events-auto mx-4 overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-labelledby={`modal-title-${program.id}`}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Left Side - Gradient Accent */}
                <div className="hidden lg:flex lg:w-1/4 bg-gradient-to-b from-purple-900 via-red-900 to-black flex-col justify-between p-8 relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-red-600/20 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl"></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500 to-red-700 mb-6"></div>
                    <h3 className="text-white font-bold text-sm uppercase tracking-widest">Program</h3>
                    <p className="text-red-200 text-xs mt-1">Professional Development</p>
                  </div>

                  {/* Bottom accent */}
                  <div className="relative z-10 space-y-2">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Main Content */}
                <div className="flex-1 p-8 lg:p-10">
                  {/* Header with Close Button */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex-1 pr-4">
                      <h2 id={`modal-title-${program.id}`} className="text-3xl font-black text-gray-900 leading-tight mb-2">
                        {program.title}
                      </h2>
                      {program.status === 'coming-soon' && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 text-red-700 text-xs font-bold rounded-full border border-red-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                          Coming Soon
                        </span>
                      )}
                    </div>
                    <button
                      ref={closeButtonRef}
                      onClick={onClose}
                      className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                      aria-label="Close modal"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {program.fullDescription}
                  </p>

                  {/* Benefits Section with Expandable */}
                  <div className="mb-6">
                    {program.status === 'coming-soon' ? (
                      <>
                        <button
                          onClick={() => setExpandedBenefits(!expandedBenefits)}
                          className="flex items-center justify-between w-full text-left group"
                        >
                          <div>
                            <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide">What's Included</h3>
                            <p className="text-xs text-gray-500 mt-0.5">Expand to see program highlights</p>
                          </div>
                          <motion.div
                            animate={{ rotate: expandedBenefits ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex-shrink-0 ml-4"
                          >
                            <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                              <ChevronDown className="w-4 h-4 text-purple-700" />
                            </div>
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {expandedBenefits && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-4"
                            >
                              <ul className="space-y-3">
                                {program.benefits.slice(0, 5).map((benefit, idx) => (
                                  <li key={idx} className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-red-600 mt-2 flex-shrink-0"></div>
                                    <span className="text-sm text-gray-700">{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <>
                        <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-4">What's Included</h3>
                        <ul className="space-y-3">
                          {program.benefits.slice(0, 5).map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-red-600 mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>

                  {/* Metadata - Styled Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8 p-4 bg-gradient-to-br from-purple-50 to-red-50 rounded-2xl border border-purple-100">
                    {program.duration && (
                      <div>
                        <span className="text-xs font-bold text-purple-900 uppercase tracking-widest block">Duration</span>
                        <p className="text-sm font-semibold text-gray-900 mt-1">{program.duration}</p>
                      </div>
                    )}
                    {program.level && (
                      <div>
                        <span className="text-xs font-bold text-purple-900 uppercase tracking-widest block">Level</span>
                        <p className="text-sm font-semibold text-gray-900 mt-1">{program.level}</p>
                      </div>
                    )}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col gap-3">
                    {program.status === 'available' && program.externalLink && (
                      <a
                        href={program.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleExternalLinkClick}
                        className="flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-purple-600 to-red-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-purple-300/50 transition-all transform hover:scale-105 text-sm uppercase tracking-wide"
                      >
                        Access Course
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {program.status === 'available' && program.internalPath && (
                      <a
                        href={program.internalPath}
                        className="flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-purple-600 to-red-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-purple-300/50 transition-all transform hover:scale-105 text-sm uppercase tracking-wide"
                      >
                        Access Course
                      </a>
                    )}
                    <button
                      onClick={handleWaitlistClick}
                      className="px-6 py-3.5 border-2 border-gray-300 text-gray-900 font-bold rounded-xl hover:border-purple-500 hover:bg-purple-50 transition-all text-sm uppercase tracking-wide"
                    >
                      {program.status === 'coming-soon' ? 'Join Waitlist' : 'Request Info'}
                    </button>
                  </div>

                  {/* External Link Label */}
                  {program.externalLink && (
                    <p className="text-xs text-gray-500 text-center mt-3">
                      Hosted on our learning platform
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile Full-Screen Sheet */}
          <motion.div
            key="mobile-sheet"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.16 }}
            className="fixed inset-0 bg-black/40 z-[50] sm:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            key="mobile-content"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 38, stiffness: 300, mass: 1 }}
            className="fixed bottom-0 left-0 right-0 z-[60] sm:hidden bg-white rounded-t-3xl max-h-[92vh] overflow-y-auto shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`mobile-modal-title-${program.id}`}
          >
            {/* Mobile Handle Indicator */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
            </div>

            {/* Mobile Gradient Header */}
            <div className="bg-gradient-to-br from-purple-50 via-white to-red-50 px-4 pt-2 pb-6 border-b border-purple-100">
              <div className="flex justify-between items-start gap-3 mb-4">
                <div className="flex-1">
                  <h2 id={`mobile-modal-title-${program.id}`} className="text-2xl font-black text-gray-900 leading-tight">
                    {program.title}
                  </h2>
                  {program.status === 'coming-soon' && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 text-red-700 text-xs font-bold rounded-full border border-red-200 mt-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                      Coming Soon
                    </span>
                  )}
                </div>
                <button
                  ref={closeButtonRef}
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all rounded-lg flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Mobile Content */}
            <div className="p-4 space-y-5">
              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {program.fullDescription}
              </p>

              {/* Benefits Section */}
              <div>
                {program.status === 'coming-soon' ? (
                  <>
                    <button
                      onClick={() => setExpandedBenefits(!expandedBenefits)}
                      className="flex items-center justify-between w-full text-left group mb-3"
                    >
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide">What's Included</h3>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedBenefits ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <div className="w-7 h-7 rounded-lg bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                          <ChevronDown className="w-4 h-4 text-purple-700" />
                        </div>
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {expandedBenefits && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ul className="space-y-3">
                            {program.benefits.slice(0, 5).map((benefit, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-red-600 mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-gray-700">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <>
                    <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-3">What's Included</h3>
                    <ul className="space-y-3">
                      {program.benefits.slice(0, 5).map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-red-600 mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              {/* Metadata */}
              <div className="grid grid-cols-2 gap-3 p-4 bg-gradient-to-br from-purple-50 to-red-50 rounded-2xl border border-purple-100">
                {program.duration && (
                  <div>
                    <span className="text-xs font-bold text-purple-900 uppercase tracking-widest block">Duration</span>
                    <p className="text-sm font-semibold text-gray-900 mt-1">{program.duration}</p>
                  </div>
                )}
                {program.level && (
                  <div>
                    <span className="text-xs font-bold text-purple-900 uppercase tracking-widest block">Level</span>
                    <p className="text-sm font-semibold text-gray-900 mt-1">{program.level}</p>
                  </div>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 pt-2">
                {program.status === 'available' && program.externalLink && (
                  <a
                    href={program.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleExternalLinkClick}
                    className="flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-purple-600 to-red-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-purple-300/50 transition-all text-sm uppercase tracking-wide"
                  >
                    Access Course
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {program.status === 'available' && program.internalPath && (
                  <a
                    href={program.internalPath}
                    className="flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-purple-600 to-red-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-purple-300/50 transition-all text-sm uppercase tracking-wide"
                  >
                    Access Course
                  </a>
                )}
                <button
                  onClick={handleWaitlistClick}
                  className="px-6 py-3.5 border-2 border-gray-300 text-gray-900 font-bold rounded-xl hover:border-purple-500 hover:bg-purple-50 transition-all text-sm uppercase tracking-wide"
                >
                  {program.status === 'coming-soon' ? 'Join Waitlist' : 'Request Info'}
                </button>
              </div>

              {/* External Link Label */}
              {program.externalLink && (
                <p className="text-xs text-gray-500 text-center pt-2">
                  Hosted on our learning platform
                </p>
              )}

              {/* Bottom Spacing */}
              <div className="h-4"></div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
