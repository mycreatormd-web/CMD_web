'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ChevronLeft, Search, ChevronDown } from 'lucide-react';
import { useCommunityForm } from '@/app/context/CommunityFormContext';
import { Country, State, ICountry, IState } from 'country-state-city';

interface FormData {
  // Section 2
  fullName: string;
  email: string;
  phone: string;
  country: string;
  state: string;
  socialHandle: string;
  
  // Section 3
  role: string;
  specialty: string;
  practicing: string;
  
  // Section 4
  contentExperience: string;
  contentPlatforms: string[];
  socialLinks: string;
  contentTypes: string[];
  
  // Section 5
  topGoals: string;
  biggestStruggle: string;
  creatorMDHelp: string;
  
  // Section 6
  heardAbout: string;
  whatsappInterest: string;
  whatsappNumber: string;
  
  // Section 7
  premiumInterest: string[];
  additionalInfo: string;
  
  // Section 8
  consent: string;
}

const CommunityJoinForm = () => {
  const { isOpen, closeForm } = useCommunityForm();
  const [currentSection, setCurrentSection] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const countryDropdownRef = useRef<HTMLDivElement>(null);
  const [stateSearch, setStateSearch] = useState('');
  const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);
  const stateDropdownRef = useRef<HTMLDivElement>(null);
  const [selectedCountryCode, setSelectedCountryCode] = useState('');
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    state: '',
    socialHandle: '',
    role: '',
    specialty: '',
    practicing: '',
    contentExperience: '',
    contentPlatforms: [],
    socialLinks: '',
    contentTypes: [],
    topGoals: '',
    biggestStruggle: '',
    creatorMDHelp: '',
    heardAbout: '',
    whatsappInterest: '',
    whatsappNumber: '',
    premiumInterest: [],
    additionalInfo: '',
    consent: '',
  });

  // Get all countries from library
  const allCountries = Country.getAllCountries();
  
  // Filter countries based on search
  const filteredCountries = allCountries.filter(country =>
    country.name.toLowerCase().includes(countrySearch.toLowerCase())
  );

  // Get states for selected country
  const availableStates = selectedCountryCode 
    ? State.getStatesOfCountry(selectedCountryCode)
    : [];
  
  // Filter states based on search
  const filteredStates = availableStates.filter(state =>
    state.name.toLowerCase().includes(stateSearch.toLowerCase())
  );

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target as Node)) {
        setIsCountryDropdownOpen(false);
      }
      if (stateDropdownRef.current && !stateDropdownRef.current.contains(event.target as Node)) {
        setIsStateDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle country selection
  const handleCountrySelect = (country: ICountry) => {
    handleInputChange('country', country.name);
    setSelectedCountryCode(country.isoCode);
    // Reset state when country changes
    handleInputChange('state', '');
    setCountrySearch('');
    setIsCountryDropdownOpen(false);
  };

  // Handle state selection
  const handleStateSelect = (state: IState) => {
    handleInputChange('state', state.name);
    setStateSearch('');
    setIsStateDropdownOpen(false);
  };

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCheckboxChange = (field: keyof FormData, value: string) => {
    const currentArray = Array.isArray(formData[field]) ? formData[field] as string[] : [];
    const newArray = currentArray.includes(value)
      ? currentArray.filter(item => item !== value)
      : [...currentArray, value];
    handleInputChange(field, newArray);
  };

  // Check if form has any data filled in
  const hasFormData = () => {
    return Object.values(formData).some(value => {
      if (Array.isArray(value)) {
        return value.length > 0;
      }
      return value !== '';
    }) || currentSection > 1;
  };

  // Handle close with confirmation
  const handleClose = () => {
    console.log('handleClose called, isSubmitted:', isSubmitted);
    // Show confirmation unless form was just submitted
    if (!isSubmitted) {
      console.log('Showing confirmation dialog');
      setShowCancelConfirm(true);
    } else {
      closeForm();
    }
  };

  const confirmCancel = () => {
    closeForm();
    setShowCancelConfirm(false);
    setCurrentSection(1);
    setCountrySearch('');
    setIsCountryDropdownOpen(false);
    setStateSearch('');
    setIsStateDropdownOpen(false);
    setSelectedCountryCode('');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      country: '',
      state: '',
      socialHandle: '',
      role: '',
      specialty: '',
      practicing: '',
      contentExperience: '',
      contentPlatforms: [],
      socialLinks: '',
      contentTypes: [],
      topGoals: '',
      biggestStruggle: '',
      creatorMDHelp: '',
      heardAbout: '',
      whatsappInterest: '',
      whatsappNumber: '',
      premiumInterest: [],
      additionalInfo: '',
      consent: '',
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.fullName || !formData.consent) {
      alert('Please fill in all required fields');
      return;
    }
    
    setIsSubmitting(true);
    
    // Google Sheets Integration
    const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycby_e3qsAAwUCjR6bpqyFB8aE6Izg1DSXchxAv928uCh1CFV1Dt0Lu0xEg4d5oeXcAtNmw/exec';
    
    const googleSheetData = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      country: formData.country,
      state: formData.state,
      socialHandle: formData.socialHandle,
      role: formData.role,
      specialty: formData.specialty,
      practicing: formData.practicing,
      contentExperience: formData.contentExperience,
      contentPlatforms: formData.contentPlatforms.join(', '),
      socialLinks: formData.socialLinks,
      contentTypes: formData.contentTypes.join(', '),
      topGoals: formData.topGoals,
      biggestStruggle: formData.biggestStruggle,
      creatorMDHelp: formData.creatorMDHelp,
      heardAbout: formData.heardAbout,
      whatsappInterest: formData.whatsappInterest,
      whatsappNumber: formData.whatsappNumber,
      premiumInterest: formData.premiumInterest.join(', '),
      additionalInfo: formData.additionalInfo,
      consent: formData.consent,
    };
    
    try {
      // Use fetch with redirect:follow to handle Google's redirect
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify(googleSheetData),
      });
      
      console.log('Form submitted to Google Sheets');
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Don't auto-close - let user close manually
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      alert('Error submitting form. Please try again.');
    }
  };

  const sections = [
    {
      id: 1,
      title: 'Welcome to CreatorMD Community!',
      description: "You're one step away from joining a community built to help medics become confident creators — making impact, influence, and income while keeping the heart for health.\nPlease fill out the details below so we can understand you better and support your creator journey.",
      content: null // Welcome section
    },
    {
      id: 2,
      title: 'Personal Information',
      fields: [
        { label: 'Full Name', key: 'fullName', type: 'text', required: true },
        { label: 'Email Address', key: 'email', type: 'email', required: true },
        { label: 'Phone Number', key: 'phone', type: 'tel' },
        { label: 'Country', key: 'country', type: 'country-search' },
        { label: 'State / Region', key: 'state', type: 'state-search' },
        { label: 'Preferred Social Media Handle', key: 'socialHandle', type: 'text' },
      ]
    },
    {
      id: 3,
      title: 'Medical Background',
      fields: [
        {
          label: 'Which of these best describes you?',
          key: 'role',
          type: 'select',
          options: ['Medical Student', 'House Officer', 'Resident Doctor', 'Consultant', 'Nurse', 'Pharmacist', 'Other Allied Health Professional', 'Not a medic but passionate about health content']
        },
        { label: 'Field / Specialty (Optional)', key: 'specialty', type: 'text' },
        {
          label: 'Are you currently practicing?',
          key: 'practicing',
          type: 'select',
          options: ['Yes', 'No', 'Part-time']
        },
      ]
    },
    {
      id: 4,
      title: 'Content Creation Status',
      fields: [
        {
          label: 'How would you rate your content creation experience?',
          key: 'contentExperience',
          type: 'select',
          options: ["I'm a complete beginner", "I'm creating but not consistent", "I'm consistent but not getting results", "I'm growing and want to scale", "I already create content professionally"]
        },
        {
          label: 'Where do you currently create content?',
          key: 'contentPlatforms',
          type: 'checkbox',
          options: ['Instagram', 'TikTok', 'YouTube', 'X (Twitter)', 'LinkedIn', 'Facebook', 'I don\'t create yet']
        },
        { label: 'Drop links to your top social media pages', key: 'socialLinks', type: 'textarea' },
        {
          label: 'What type of content do you create or want to create?',
          key: 'contentTypes',
          type: 'checkbox',
          options: ['Medical Education', 'Lifestyle as a Medic', 'Public Health', 'Personal Branding', 'Fitness / Wellness', 'Career + Mentorship', 'Faith-Based', 'Other']
        },
      ]
    },
    {
      id: 5,
      title: 'Your Goals',
      fields: [
        { label: 'What are your top 3 creator goals for 2025?', key: 'topGoals', type: 'textarea' },
        { label: 'What is your biggest struggle with content creation?', key: 'biggestStruggle', type: 'textarea' },
        { label: 'What do you hope CreatorMD will help you achieve?', key: 'creatorMDHelp', type: 'textarea' },
      ]
    },
    {
      id: 6,
      title: 'Community Experience',
      fields: [
        {
          label: 'How did you hear about CreatorMD?',
          key: 'heardAbout',
          type: 'select',
          options: ['Instagram', 'TikTok', 'X (Twitter)', 'WhatsApp', 'Friend/Colleague', 'Valerie directly', 'Other']
        },
        {
          label: 'Would you like to join our WhatsApp Community Hub?',
          key: 'whatsappInterest',
          type: 'select',
          options: ['Yes', 'No']
        },
        { label: 'If yes, drop your WhatsApp number', key: 'whatsappNumber', type: 'tel' },
      ]
    },
    {
      id: 7,
      title: 'Optional Add-ons',
      fields: [
        {
          label: 'Would you be interested in CreatorMD premium programs?',
          key: 'premiumInterest',
          type: 'checkbox',
          options: ['CreatorMD Accelerator', '1:1 Coaching', 'Digital Product Building', 'Content Strategy Templates', 'Not now']
        },
        { label: 'Anything else you would like us to know?', key: 'additionalInfo', type: 'textarea' },
      ]
    },
    {
      id: 8,
      title: 'Consent',
      fields: [
        {
          label: 'Do you give permission for us to send updates, creator tips, and community opportunities to your email or WhatsApp?',
          key: 'consent',
          type: 'select',
          options: ['Yes, I agree', 'No'],
          required: true
        },
      ]
    },
  ];

  const currentSectionData = sections[currentSection - 1];
  const totalSections = sections.length;
  const progress = (currentSection / totalSections) * 100;

  return (
    <>
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            {/* Blurred Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => {
              e.preventDefault();
              handleClose();
            }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Form Modal */}
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -30 }}
            transition={{ type: 'spring', stiffness: 350, damping: 35, mass: 1 }}
            className="fixed inset-0 z-50 flex items-start sm:items-center justify-center px-4 sm:px-6 py-4 sm:py-8 overflow-y-auto"
          >
            <div className="w-full max-w-2xl my-4 sm:my-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-gray-950/95 rounded-2xl border border-red-500/30 shadow-2xl shadow-red-500/20 backdrop-blur-xl max-h-[90vh] sm:max-h-[85vh] flex flex-col overflow-hidden">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col h-full overflow-hidden">
                  {/* Header - Sticky */}
                  <motion.div 
                    className="relative p-4 sm:p-6 border-b border-gray-800/50 flex-shrink-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-gray-950/95"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    {/* Close Button */}
                    <motion.button
                      type="button"
                      onClick={handleClose}
                      whileHover={{ rotate: 90, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-200 transition-colors z-10"
                    >
                      <X className="w-6 h-6" />
                    </motion.button>

                    {/* Progress Bar */}
                    <motion.div 
                      className="mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.12, duration: 0.3 }}
                    >
                      <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-red-600 to-purple-600"
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 0.6, ease: 'easeOut' }}
                        />
                      </div>
                      <motion.p 
                        className="text-xs text-gray-400 mt-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                      >
                        Section {currentSection} of {totalSections}
                      </motion.p>
                    </motion.div>

                    {/* Title */}
                    <motion.h2 
                      className="text-xl sm:text-2xl font-black text-white pr-8"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.13, duration: 0.3 }}
                    >
                      {currentSectionData.title}
                    </motion.h2>

                    {/* Description */}
                    {currentSectionData.description && (
                      <motion.p 
                        className="text-gray-400 text-xs sm:text-sm mt-2 whitespace-pre-line"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.14, duration: 0.3 }}
                      >
                        {currentSectionData.description}
                      </motion.p>
                    )}
                  </motion.div>

                  {/* Content - Scrollable */}
                  <motion.div 
                    className="p-4 sm:p-6 space-y-4 overflow-y-auto flex-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.4 }}
                  >
                    {currentSectionData.id > 1 && currentSectionData.fields && currentSectionData.fields.map((field: any, index: number) => (
                      <motion.div 
                        key={field.key}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 + index * 0.05, duration: 0.3 }}
                      >
                        <label className="block text-sm font-semibold text-white mb-3">
                          {field.label}
                          {field.required && <span className="text-red-400 ml-1">*</span>}
                        </label>

                        {field.type === 'text' || field.type === 'email' || field.type === 'tel' ? (
                          <input
                            type={field.type}
                            value={formData[field.key as keyof FormData] as string}
                            onChange={(e) => handleInputChange(field.key, e.target.value)}
                            placeholder={`Enter ${field.label.toLowerCase()}`}
                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/30 transition-all duration-300"
                          />
                        ) : field.type === 'textarea' ? (
                          <textarea
                            value={formData[field.key as keyof FormData] as string}
                            onChange={(e) => handleInputChange(field.key, e.target.value)}
                            placeholder={`Enter ${field.label.toLowerCase()}`}
                            rows={4}
                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/30 transition-all duration-300 resize-none"
                          />
                        ) : field.type === 'select' ? (
                          <select
                            value={formData[field.key as keyof FormData] as string}
                            onChange={(e) => handleInputChange(field.key, e.target.value)}
                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/30 transition-all duration-300"
                          >
                            <option value="">Select an option</option>
                            {field.options.map((opt: string) => (
                              <option key={opt} value={opt} className="bg-gray-900">
                                {opt}
                              </option>
                            ))}
                          </select>
                        ) : field.type === 'checkbox' ? (
                          <div className="space-y-3">
                            {field.options.map((opt: string) => (
                              <label key={opt} className="flex items-center cursor-pointer group">
                                <input
                                  type="checkbox"
                                  checked={(formData[field.key as keyof FormData] as string[]).includes(opt)}
                                  onChange={() => handleCheckboxChange(field.key, opt)}
                                  className="w-4 h-4 rounded border-gray-600 text-red-600 focus:ring-red-500 cursor-pointer"
                                />
                                <span className="ml-3 text-gray-300 group-hover:text-white transition-colors">
                                  {opt}
                                </span>
                              </label>
                            ))}
                          </div>
                        ) : field.type === 'country-search' ? (
                          <div className="relative" ref={countryDropdownRef}>
                            {/* Selected country display / trigger */}
                            <div
                              onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white cursor-pointer flex items-center justify-between hover:border-gray-600/50 transition-all duration-300"
                            >
                              <span className={formData.country ? 'text-white' : 'text-gray-500'}>
                                {formData.country || 'Select a country'}
                              </span>
                              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isCountryDropdownOpen ? 'rotate-180' : ''}`} />
                            </div>

                            {/* Dropdown */}
                            <AnimatePresence>
                              {isCountryDropdownOpen && (
                                <motion.div
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  transition={{ duration: 0.2 }}
                                  className="absolute z-50 w-full mt-2 bg-gray-900 border border-gray-700/50 rounded-lg shadow-xl overflow-hidden"
                                >
                                  {/* Search input */}
                                  <div className="p-3 border-b border-gray-700/50">
                                    <div className="relative">
                                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                      <input
                                        type="text"
                                        value={countrySearch}
                                        onChange={(e) => setCountrySearch(e.target.value)}
                                        placeholder="Search countries..."
                                        className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 text-sm"
                                        autoFocus
                                      />
                                    </div>
                                  </div>

                                  {/* Countries list */}
                                  <div className="max-h-48 overflow-y-auto">
                                    {filteredCountries.length > 0 ? (
                                      filteredCountries.map((country) => (
                                        <div
                                          key={country.isoCode}
                                          onClick={() => handleCountrySelect(country)}
                                          className={`px-4 py-2.5 cursor-pointer transition-colors text-sm ${
                                            formData.country === country.name
                                              ? 'bg-red-600/20 text-red-400'
                                              : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                                          }`}
                                        >
                                          {country.flag} {country.name}
                                        </div>
                                      ))
                                    ) : (
                                      <div className="px-4 py-3 text-gray-500 text-sm text-center">
                                        No countries found
                                      </div>
                                    )}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : field.type === 'state-search' ? (
                          <div className="relative" ref={stateDropdownRef}>
                            {/* Selected state display / trigger */}
                            <div
                              onClick={() => {
                                if (!formData.country) {
                                  alert('Please select a country first');
                                  return;
                                }
                                setIsStateDropdownOpen(!isStateDropdownOpen);
                              }}
                              className={`w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white flex items-center justify-between transition-all duration-300 ${
                                formData.country ? 'cursor-pointer hover:border-gray-600/50' : 'cursor-not-allowed opacity-60'
                              }`}
                            >
                              <span className={formData.state ? 'text-white' : 'text-gray-500'}>
                                {formData.state || (formData.country ? 'Select a state/region' : 'Select a country first')}
                              </span>
                              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isStateDropdownOpen ? 'rotate-180' : ''}`} />
                            </div>

                            {/* Dropdown */}
                            <AnimatePresence>
                              {isStateDropdownOpen && formData.country && (
                                <motion.div
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  transition={{ duration: 0.2 }}
                                  className="absolute z-50 w-full mt-2 bg-gray-900 border border-gray-700/50 rounded-lg shadow-xl overflow-hidden"
                                >
                                  {/* Search input */}
                                  <div className="p-3 border-b border-gray-700/50">
                                    <div className="relative">
                                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                      <input
                                        type="text"
                                        value={stateSearch}
                                        onChange={(e) => setStateSearch(e.target.value)}
                                        placeholder="Search states/regions..."
                                        className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 text-sm"
                                        autoFocus
                                      />
                                    </div>
                                  </div>

                                  {/* States list */}
                                  <div className="max-h-48 overflow-y-auto">
                                    {availableStates.length === 0 ? (
                                      <div className="px-4 py-3 text-gray-500 text-sm text-center">
                                        No states/regions available for this country
                                      </div>
                                    ) : filteredStates.length > 0 ? (
                                      filteredStates.map((state) => (
                                        <div
                                          key={state.isoCode}
                                          onClick={() => handleStateSelect(state)}
                                          className={`px-4 py-2.5 cursor-pointer transition-colors text-sm ${
                                            formData.state === state.name
                                              ? 'bg-red-600/20 text-red-400'
                                              : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                                          }`}
                                        >
                                          {state.name}
                                        </div>
                                      ))
                                    ) : (
                                      <div className="px-4 py-3 text-gray-500 text-sm text-center">
                                        No states/regions found
                                      </div>
                                    )}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : null}
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Footer Navigation - Sticky */}
                  <motion.div 
                    className="p-4 sm:p-6 border-t border-gray-800/50 flex gap-3 sm:gap-4 flex-shrink-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-gray-950/95"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                  >
                    {currentSection > 1 && (
                      <motion.button
                        type="button"
                        onClick={() => setCurrentSection(prev => Math.max(1, prev - 1))}
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(55, 65, 81, 0.9)' }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 sm:px-6 py-3 bg-gray-800/50 hover:bg-gray-800/80 text-gray-300 font-bold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span className="hidden sm:inline">Back</span>
                      </motion.button>
                    )}

                    {currentSection < totalSections ? (
                      <motion.button
                        type="button"
                        onClick={() => setCurrentSection(prev => Math.min(totalSections, prev + 1))}
                        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(239, 68, 68, 0.5)' }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-500 hover:to-purple-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-red-500/20"
                      >
                        Next
                        <ChevronRight className="w-4 h-4" />
                      </motion.button>
                    ) : (
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: isSubmitting ? 1 : 1.05, boxShadow: isSubmitting ? 'none' : '0 0 20px rgba(34, 197, 94, 0.5)' }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-500 hover:to-purple-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-red-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Submitting...</span>
                          </>
                        ) : (
                          'Submit & Join the Movement'
                        )}
                      </motion.button>
                    )}
                  </motion.div>
                </form>
              ) : (
                // Success Screen
                <motion.div 
                  className="p-6 sm:p-10 text-center relative"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Close Button */}
                  <motion.button
                    type="button"
                    onClick={() => {
                      closeForm();
                      setCurrentSection(1);
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        country: '',
                        state: '',
                        socialHandle: '',
                        role: '',
                        specialty: '',
                        practicing: '',
                        contentExperience: '',
                        contentPlatforms: [],
                        socialLinks: '',
                        contentTypes: [],
                        topGoals: '',
                        biggestStruggle: '',
                        creatorMDHelp: '',
                        heardAbout: '',
                        whatsappInterest: '',
                        whatsappNumber: '',
                        premiumInterest: [],
                        additionalInfo: '',
                        consent: '',
                      });
                      setSelectedCountryCode('');
                    }}
                    whileHover={{ rotate: 90, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-200 transition-colors z-10"
                  >
                    <X className="w-6 h-6" />
                  </motion.button>

                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.1 }}
                    className="mb-6"
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/50 flex items-center justify-center">
                      <motion.svg
                        className="w-8 h-8 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.2 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </motion.svg>
                    </div>
                  </motion.div>

                  <motion.h3 
                    className="text-2xl sm:text-3xl font-black text-white mb-3"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                  >
                    Welcome to CreatorMD!
                  </motion.h3>
                  <motion.p 
                    className="text-gray-400 text-sm sm:text-base mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.3 }}
                  >
                    Your journey to building impact, influence, and income starts now. Check your email for next steps and exclusive community access!
                  </motion.p>

                  <motion.div 
                    className="space-y-2 text-left bg-gray-800/30 rounded-lg p-4 border border-gray-700/50 mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                  >
                    {[
                      'Access to exclusive community resources',
                      'Creator tips and strategies',
                      'Networking with other medic creators',
                      'Early access to CreatorMD programs'
                    ].map((benefit, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.35 + idx * 0.08 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-green-500/30 border border-green-500/50 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs text-green-400">✓</span>
                        </div>
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Close Button at bottom */}
                  <motion.button
                    onClick={() => {
                      closeForm();
                      setCurrentSection(1);
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        country: '',
                        state: '',
                        socialHandle: '',
                        role: '',
                        specialty: '',
                        practicing: '',
                        contentExperience: '',
                        contentPlatforms: [],
                        socialLinks: '',
                        contentTypes: [],
                        topGoals: '',
                        biggestStruggle: '',
                        creatorMDHelp: '',
                        heardAbout: '',
                        whatsappInterest: '',
                        whatsappNumber: '',
                        premiumInterest: [],
                        additionalInfo: '',
                        consent: '',
                      });
                      setSelectedCountryCode('');
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold rounded-lg transition-all shadow-lg"
                  >
                    Done
                  </motion.button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>

    {/* Cancel Confirmation Dialog - Outside main AnimatePresence */}
    <AnimatePresence>
      {showCancelConfirm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] flex items-center justify-center px-4"
          onClick={() => setShowCancelConfirm(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-gray-950/95 rounded-2xl border border-red-500/30 shadow-2xl max-w-md w-full p-6 sm:p-8"
          >
            <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-3">
              Leave without finishing?
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-6 leading-relaxed">
              You have not completed the form. Are you sure you want to cancel? Your progress will not be saved.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <motion.button
                onClick={() => setShowCancelConfirm(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-3 py-2 sm:px-4 sm:py-3 bg-gray-800/50 hover:bg-gray-800/80 text-xs sm:text-sm md:text-base text-gray-300 font-bold rounded-lg transition-all"
              >
                Continue Filling
              </motion.button>
              <motion.button
                onClick={confirmCancel}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-3 py-2 sm:px-4 sm:py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-xs sm:text-sm md:text-base text-white font-bold rounded-lg transition-all"
              >
                Yes, Cancel
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};

export default CommunityJoinForm;
