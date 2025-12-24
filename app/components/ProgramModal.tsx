'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
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
          <div className="fixed inset-0 z-[60] hidden sm:flex items-end justify-center pointer-events-none">
            <motion.div
              key="modal"
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.985, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.985, y: 12 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 sm:p-8 pointer-events-auto mb-4 sm:mb-auto sm:my-auto mx-4"
              role="dialog"
              aria-modal="true"
              aria-labelledby={`modal-title-${program.id}`}
            >
              {/* Close Button */}
              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title */}
              <h2 id={`modal-title-${program.id}`} className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {program.title}
              </h2>

              {/* Status Badge */}
              {program.status === 'coming-soon' && (
                <span className="inline-block mb-4 px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                  Coming Soon
                </span>
              )}

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
                {program.fullDescription}
              </p>

              {/* Benefits */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">What's included:</h3>
                <ul className="space-y-2">
                  {program.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-blue-500 font-bold mt-0.5">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metadata */}
              <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-gray-200">
                {program.duration && (
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">Duration</span>
                    <p className="text-sm font-medium text-gray-900">{program.duration}</p>
                  </div>
                )}
                {program.level && (
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">Level</span>
                    <p className="text-sm font-medium text-gray-900">{program.level}</p>
                  </div>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                {program.status === 'available' && program.externalLink && (
                  <a
                    href={program.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleExternalLinkClick}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    Access Course
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {program.status === 'available' && program.internalPath && (
                  <a
                    href={program.internalPath}
                    className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    Access Course
                  </a>
                )}
                <button
                  onClick={handleWaitlistClick}
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors text-sm"
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
            transition={{ type: 'spring', damping: 40, stiffness: 300, mass: 1 }}
            className="fixed bottom-0 left-0 right-0 z-[60] sm:hidden bg-white rounded-t-3xl p-6 max-h-[90vh] overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`mobile-modal-title-${program.id}`}
          >
            {/* Mobile Close Button */}
            <div className="flex justify-between items-center mb-4">
              <h2 id={`mobile-modal-title-${program.id}`} className="text-xl font-bold text-gray-900">
                {program.title}
              </h2>
              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Status Badge */}
            {program.status === 'coming-soon' && (
              <span className="inline-block mb-4 px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                Coming Soon
              </span>
            )}

            {/* Mobile Description */}
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              {program.fullDescription}
            </p>

            {/* Mobile Benefits */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">What's included:</h3>
              <ul className="space-y-2">
                {program.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-blue-500 font-bold mt-0.5">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Metadata */}
            <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-gray-200">
              {program.duration && (
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Duration</span>
                  <p className="text-sm font-medium text-gray-900">{program.duration}</p>
                </div>
              )}
              {program.level && (
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Level</span>
                  <p className="text-sm font-medium text-gray-900">{program.level}</p>
                </div>
              )}
            </div>

            {/* Mobile CTA Buttons */}
            <div className="flex flex-col gap-3">
              {program.status === 'available' && program.externalLink && (
                <a
                  href={program.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleExternalLinkClick}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Access Course
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {program.status === 'available' && program.internalPath && (
                <a
                  href={program.internalPath}
                  className="w-full inline-flex items-center justify-center px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Access Course
                </a>
              )}
              <button
                onClick={handleWaitlistClick}
                className="w-full px-4 py-3 border border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                {program.status === 'coming-soon' ? 'Join Waitlist' : 'Request Info'}
              </button>
            </div>

            {/* Mobile External Link Label */}
            {program.externalLink && (
              <p className="text-xs text-gray-500 text-center mt-3">
                Hosted on our learning platform
              </p>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
