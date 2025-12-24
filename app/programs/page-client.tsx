'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/app/components/Navigation';
import { programs } from '@/app/data/programs';
import ProgramModal from '@/app/components/ProgramModal';
import { Program } from '@/app/types/program';
import { 
  Zap, 
  BookOpen, 
  Users, 
  Heart, 
  Briefcase,
  Mail,
  MessageSquare,
  HelpCircle
} from 'lucide-react';

// Icon mapping
const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap className="w-12 h-12" />,
  BookOpen: <BookOpen className="w-12 h-12" />,
  Users: <Users className="w-12 h-12" />,
  Heart: <Heart className="w-12 h-12" />,
  Briefcase: <Briefcase className="w-12 h-12" />,
};

const getColorClasses = (color: string) => {
  const colorMap: Record<string, string> = {
    'from-blue-500 to-cyan-500': 'text-blue-500 bg-blue-50',
    'from-emerald-500 to-teal-500': 'text-emerald-500 bg-emerald-50',
    'from-purple-500 to-pink-500': 'text-purple-500 bg-purple-50',
    'from-cyan-500 to-blue-500': 'text-cyan-500 bg-cyan-50',
    'from-amber-500 to-orange-500': 'text-amber-500 bg-amber-50',
  };
  return colorMap[color] || 'text-gray-500 bg-gray-50';
};

const ProgramCard = ({ 
  program, 
  onPreview 
}: { 
  program: Program; 
  onPreview: (program: Program) => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const colorClasses = getColorClasses(program.color);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
    >
      {/* Icon Section */}
      <div className={`${colorClasses} p-6 flex items-center justify-center`}>
        {iconMap[program.icon] || <Zap className="w-12 h-12" />}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col h-full">
        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
          {program.title}
        </h3>

        {/* Status Badge */}
        {program.status === 'coming-soon' && (
          <span className="inline-block w-fit mb-3 px-2.5 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
            Coming Soon
          </span>
        )}

        {/* Description */}
        <p className="text-gray-600 text-sm sm:text-base mb-6 flex-grow">
          {program.shortDescription}
        </p>

        {/* Metadata */}
        {(program.duration || program.level) && (
          <div className="flex flex-wrap gap-3 mb-6 pb-6 border-b border-gray-100">
            {program.duration && (
              <div className="text-xs">
                <span className="text-gray-500">Duration:</span>
                <p className="font-semibold text-gray-900">{program.duration}</p>
              </div>
            )}
            {program.level && (
              <div className="text-xs">
                <span className="text-gray-500">Level:</span>
                <p className="font-semibold text-gray-900">{program.level}</p>
              </div>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-2">
          <button
            onClick={() => onPreview(program)}
            className="flex-1 px-4 py-2.5 bg-blue-50 text-blue-600 font-semibold rounded-lg hover:bg-blue-100 transition-colors text-sm"
          >
            Preview
          </button>
          {program.status === 'available' ? (
            program.externalLink ? (
              <a
                href={program.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm text-center"
              >
                Learn
              </a>
            ) : (
              <a
                href={program.internalPath || '#'}
                className="flex-1 px-4 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm text-center"
              >
                Learn
              </a>
            )
          ) : (
            <button
              className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors text-sm"
              disabled
            >
              Coming Soon
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function ProgramsPageClient() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePreviewClick = (program: Program) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProgram(null), 300);
  };

  return (
    <main className="relative">
      <Navigation />

      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Programs designed for medics at every stage
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Self-paced courses, live bootcamps, mentorship & hands-on support — practical learning, no pressure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Available Now Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Available Now
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {programs.availableNow.map((program, idx) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                viewport={{ once: true }}
              >
                <ProgramCard 
                  program={program} 
                  onPreview={handlePreviewClick}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Coming Soon
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {programs.comingSoon.map((program, idx) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                viewport={{ once: true }}
              >
                <ProgramCard 
                  program={program} 
                  onPreview={handlePreviewClick}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              How It Works
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'Choose Your Path',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
                icon: MessageSquare,
              },
              {
                title: 'Learn at Your Pace',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
                icon: BookOpen,
              },
              {
                title: 'Get Support',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
                icon: Users,
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-blue-50 rounded-full text-blue-600">
                    <item.icon className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: 'Who are these programs for?',
                a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              },
              {
                q: 'Do I need prior experience?',
                a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              },
              {
                q: 'What if I need to pause or cancel?',
                a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              },
              {
                q: 'How do you provide support?',
                a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 hover:border-blue-300 transition-colors"
              >
                <div className="flex gap-4">
                  <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-2">
                      {faq.q}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Not sure where to start?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8">
              Join our community or get program updates delivered to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="#"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
              >
                Join Community
              </a>
              <a
                href="#"
                className="px-6 py-3 border border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get Updates
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Modal */}
      <ProgramModal 
        program={selectedProgram} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
      />
    </main>
  );
}
