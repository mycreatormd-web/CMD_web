'use client';

import { motion } from 'framer-motion';
import { 
  Instagram, 
  X, 
  Linkedin, 
  Youtube, 
  Mail, 
  MapPin,
  Heart,
  ArrowUpRight
} from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Community', href: '/#community' },
    { name: 'Resources', href: '/#resources' },
    { name: 'Contact', href: '/#contact' },
  ];

  const programLinks = [
    { name: 'CreatorMD Bootcamp', href: '/programs/creatormd-bootcamp' },
    { name: 'Core Course', href: '/programs' },
    { name: 'How to Become a CreatorMD', href: 'https://selar.com/73395y7252', external: true },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/thecreatormd', color: 'hover:text-pink-400' },
    { name: 'X', icon: X, href: 'https://x.com/thecreatormd', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/thecreatormd', color: 'hover:text-blue-500' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@thecreatormd', color: 'hover:text-red-500' },
  ];

  return (
    <footer className="relative bg-black border-t border-gray-800/50 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-red-900/10 via-purple-900/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-purple-900/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12">
        {/* Main Footer Content */}
        <div className="py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xs:gap-10 sm:gap-12 lg:gap-8">
            
            {/* Brand Column */}
            <div className="sm:col-span-2 lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {/* Logo */}
                <Link href="/" className="inline-block mb-4 xs:mb-5 sm:mb-6">
                  <h2 className="text-lg xs:text-xl sm:text-2xl font-black">
                    <span className="text-white">Creator</span>
                    <span className="bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">MD</span>
                  </h2>
                </Link>
                
                <p className="text-gray-400 text-xs xs:text-sm sm:text-base leading-relaxed mb-5 xs:mb-6 max-w-sm">
                  Empowering medical professionals to build income, influence, and impact through content creation.
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-3 xs:gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-9 h-9 xs:w-10 xs:h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:border-gray-700`}
                      aria-label={social.name}
                    >
                      <social.icon className="w-4 h-4 xs:w-5 xs:h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-white font-bold text-sm xs:text-base mb-4 xs:mb-5 sm:mb-6">Quick Links</h3>
              <ul className="space-y-2 xs:space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-red-400 text-xs xs:text-sm sm:text-base transition-colors duration-300 inline-flex items-center gap-1 group"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Programs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-white font-bold text-sm xs:text-base mb-4 xs:mb-5 sm:mb-6">Programs</h3>
              <ul className="space-y-2 xs:space-y-3">
                {programLinks.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-purple-400 text-xs xs:text-sm sm:text-base transition-colors duration-300 inline-flex items-center gap-1 group"
                      >
                        <span>{link.name}</span>
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-purple-400 text-xs xs:text-sm sm:text-base transition-colors duration-300 inline-flex items-center gap-1 group"
                      >
                        <span>{link.name}</span>
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-white font-bold text-sm xs:text-base mb-4 xs:mb-5 sm:mb-6">Contact</h3>
              <ul className="space-y-3 xs:space-y-4">
                <li>
                  <a
                    href="mailto:mycreatormd@gmail.com"
                    className="text-gray-400 hover:text-red-400 text-xs xs:text-sm sm:text-base transition-colors duration-300 inline-flex items-start gap-2 xs:gap-3 group"
                  >
                    <Mail className="w-4 h-4 xs:w-5 xs:h-5 flex-shrink-0 mt-0.5" />
                    <span>mycreatormd@gmail.com</span>
                  </a>
                </li>
                <li className="text-gray-400 text-xs xs:text-sm sm:text-base inline-flex items-start gap-2 xs:gap-3">
                  <MapPin className="w-4 h-4 xs:w-5 xs:h-5 flex-shrink-0 mt-0.5" />
                  <span>Global Community</span>
                </li>
              </ul>

              {/* Newsletter Mini CTA */}
              <div className="mt-5 xs:mt-6 sm:mt-8 p-3 xs:p-4 bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-xl">
                <p className="text-white font-semibold text-xs xs:text-sm mb-2">Join Our Community</p>
                <p className="text-gray-500 text-[10px] xs:text-xs mb-3">Get updates on new programs and resources.</p>
                <Link
                  href="/#community"
                  className="inline-flex items-center gap-1.5 text-xs xs:text-sm font-semibold text-red-400 hover:text-red-300 transition-colors"
                >
                  <span>Sign Up</span>
                  <ArrowUpRight className="w-3 h-3 xs:w-4 xs:h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-5 xs:py-6 border-t border-gray-800/50">
          <div className="flex flex-col xs:flex-row items-center justify-between gap-3 xs:gap-4">
            <p className="text-gray-500 text-[10px] xs:text-xs sm:text-sm text-center xs:text-left">
              © {currentYear} CreatorMD. All rights reserved.
            </p>
            <p className="text-gray-600 text-[10px] xs:text-xs sm:text-sm flex items-center gap-1.5">
              Built with <Heart className="w-3 h-3 xs:w-4 xs:h-4 text-red-500 fill-red-500" /> for medics
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
