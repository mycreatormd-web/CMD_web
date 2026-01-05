// app/components/Partnerships.tsx
"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Target, ChevronRight, Check, AlertCircle, Briefcase, Zap, Download, BookOpen, Calendar, CheckCircle2 } from 'lucide-react';
import CurvedProcessFlow from './CurvedProcessFlow';

interface FormDataType {
  organization: string;
  contactName: string;
  role: string;
  email: string;
  phone: string;
  region: string;
  partnershipType: string[];
  otherPartnership: string;
  goals: string;
  timeline: string;
  budget: string;
  fileUrl: null | string;
  consent: boolean;
}

interface FormErrorsType {
  [key: string]: string;
  organization?: string;
  contactName?: string;
  role?: string;
  email?: string;
  region?: string;
  partnershipType?: string;
  goals?: string;
  timeline?: string;
  consent?: string;
}

const Partnerships = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState<FormDataType>({
    organization: '',
    contactName: '',
    role: '',
    email: '',
    phone: '',
    region: '',
    partnershipType: [],
    otherPartnership: '',
    goals: '',
    timeline: '',
    budget: '',
    fileUrl: null,
    consent: false
  });

  const [formErrors, setFormErrors] = useState<FormErrorsType>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const whyPartner = [
    {
      icon: Heart,
      title: "Clinically informed content",
      description: "Built by medics, guided by accuracy and patient-first ethics."
    },
    {
      icon: Zap,
      title: "Practical training",
      description: "Staff-ready workshops that translate medical expertise into clear public messaging."
    },
    {
      icon: Target,
      title: "Scalable campaigns",
      description: "From awareness drives to long-form educational series, tailored to your goals."
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Tell us about your goals",
      description: "Submit a short brief using the form."
    },
    {
      step: 2,
      title: "We design a focused proposal",
      description: "We'll propose practical options and timelines."
    },
    {
      step: 3,
      title: "We pilot & scale",
      description: "Start with a focused pilot, then expand based on results."
    }
  ];

  const regions = ["Nigeria", "Kenya", "UK", "US", "Other"];
  const timelines = ["Immediate (0–3 months)", "Short-term (3–6 months)", "6–12 months", "Flexible"];
  const budgets = ["Undisclosed", "< $5k", "$5k–$20k", "$20k+"];

  const partnershipTypes = [
    "Training for hospital staff on digital communication",
    "Health content campaign (awareness/education)",
    "Hospital visibility & digital strategy",
    "Workplace wellness content / program",
    "Other (please specify)"
  ];

  const validateForm = (): FormErrorsType => {
    const errors: FormErrorsType = {};

    if (!formData.organization.trim()) errors.organization = "Organization name is required";
    if (!formData.contactName.trim()) errors.contactName = "Contact name is required";
    if (!formData.role.trim()) errors.role = "Role/job title is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email";
    }
    if (!formData.region) errors.region = "Region is required";
    if (formData.partnershipType.length === 0) errors.partnershipType = "Please select at least one partnership type";
    if (!formData.goals.trim()) {
      errors.goals = "Please describe your goals";
    } else if (formData.goals.trim().length < 20) {
      errors.goals = "Goals description must be at least 20 characters";
    }
    if (!formData.timeline) errors.timeline = "Please select a timeline";
    if (!formData.consent) errors.consent = "You must consent to be contacted";

    return errors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    if (type === "checkbox" && name === "partnershipType") {
      setFormData(prev => ({
        ...prev,
        partnershipType: checked
          ? [...prev.partnershipType, value]
          : prev.partnershipType.filter(item => item !== value)
      }));
    } else if (type === "checkbox") {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // Clear error for this field
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setFormErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <>
      <section id="partnerships" className="relative py-9 sm:py-11 md:py-14 lg:py-17 xl:py-19 bg-gradient-to-b from-slate-900 via-red-950/30 to-slate-900">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.05)_1px,transparent_1px)] bg-[size:80px_80px]" />
        
        {/* Background Elements - Dark Red & Purple Theme */}
        <div className="hidden sm:block absolute top-0 left-0 w-96 h-96 bg-red-900/30 rounded-full blur-3xl pointer-events-none" />
        <div className="hidden sm:block absolute bottom-0 right-0 w-96 h-96 bg-purple-900/25 rounded-full blur-3xl pointer-events-none" />
        <div className="hidden sm:block absolute top-1/3 right-1/3 w-80 h-80 bg-red-800/20 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5 md:mb-8 lg:mb-10 xl:mb-12"
          >
            {/* Subtitle Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-full mb-2 sm:mb-2.5 lg:mb-3 xl:mb-3.5 border border-red-400/40"
            >
              <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-300" />
              <span className="text-xs sm:text-sm font-semibold text-red-300">PARTNERSHIPS</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2 sm:mb-2.5 lg:mb-3 xl:mb-4"
            >
              Partner with CreatorMD to{" "}
              <span className="bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
                amplify medical education.
              </span>
            </motion.h2>

            {/* Sub-heading */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xs sm:text-base md:text-sm lg:text-base xl:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed"
            >
              We work with hospitals, global health organizations, and digital platforms to create ethical, high-impact health communication — training staff, running content campaigns, and building workplace wellness programs.
            </motion.p>
          </motion.div>

          {/* Why Partner With Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-10 md:mb-12 xl:mb-16"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="text-2xl sm:text-4xl font-bold text-white mb-6 relative inline-block"
            >
              <span className="bg-gradient-to-r from-red-400 via-purple-400 to-red-300 bg-clip-text text-transparent">
                Why partner with us
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-400 via-purple-400 to-red-300 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              />
            </motion.h3>

            {/* Benefits Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-7xl mx-auto mt-10">
              {whyPartner.map((benefit, idx) => {
                const Icon = benefit.icon;
                const gradients = [
                  "from-red-500/20 to-pink-500/20",
                  "from-purple-500/20 to-pink-500/20",
                  "from-red-500/20 to-purple-500/20"
                ];
                const borderColors = [
                  "border-red-500/50",
                  "border-purple-500/50",
                  "border-red-500/50"
                ];
                const iconGradients = [
                  "from-red-500 to-pink-500",
                  "from-purple-500 to-pink-500",
                  "from-red-500 to-purple-500"
                ];

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                  <div className={`relative h-full bg-slate-800/50 rounded-xl md:rounded-2xl border-2 ${borderColors[idx]} shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer group`}>
                    {/* Animated Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradients[idx]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                    {/* Content Container */}
                    <div className="relative z-10">
                      {/* Card Header */}
                      <div className="p-3 sm:p-4 md:p-6 lg:p-8">
                        {/* Icon */}
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 + 0.15, duration: 0.4 }}
                          className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${iconGradients[idx]} flex items-center justify-center mb-2 sm:mb-3 md:mb-4 shadow-sm`}
                        >
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                        </motion.div>

                        {/* Title */}
                        <motion.h4
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 + 0.1, duration: 0.4 }}
                          className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-1.5 sm:mb-2 md:mb-3 leading-snug"
                        >
                          {benefit.title}
                        </motion.h4>

                        {/* Description */}
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 + 0.15, duration: 0.4 }}
                          className="text-xs sm:text-base md:text-base text-gray-300 leading-relaxed"
                        >
                          {benefit.description}
                        </motion.p>
                      </div>
                    </div>
                  </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* How It Works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-0 mt-0"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="text-2xl sm:text-4xl font-bold text-white mb-0 relative inline-block leading-none"
            >
              <span className="bg-gradient-to-r from-red-400 via-purple-400 to-red-300 bg-clip-text text-transparent">
                How it works
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-400 via-purple-400 to-red-300 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              />
            </motion.h3>

            {/* Steps - Curved Flow Design */}
            <div className="-mt-20 sm:-mt-20 md:-mt-20">
              <CurvedProcessFlow steps={howItWorks} compact={true} spacing="tight" />
            </div>
          </motion.div>

          {/* Trust Line Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mb-8 sm:mb-9 md:mb-10 mt-16 sm:mt-20 md:mt-24"
          >
            <div className="bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 rounded-3xl p-10 sm:p-12 md:p-16 text-center shadow-2xl relative overflow-hidden border border-red-700/30">
              {/* Accent elements */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-600/10 rounded-full blur-3xl" />
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-lg sm:text-2xl md:text-3xl font-bold text-white italic relative z-10 leading-relaxed max-w-3xl mx-auto"
              >
                No fluff. No shortcuts. Just medically accurate, audience-first communication.
              </motion.p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-center"
          >
            <motion.button
              onClick={() => setIsFormOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-8 py-4 bg-gradient-to-r from-purple-900 via-purple-700 to-red-600 text-white font-bold rounded-2xl text-sm sm:text-lg shadow-2xl overflow-hidden ring-2 ring-red-400/20 hover:ring-red-400/40 transition-all inline-flex items-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get a Partnership Proposal
                <ChevronRight className="w-5 h-5" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-purple-900"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Form Modal Overlay */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsFormOpen(false)}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-2xl w-full my-8 shadow-2xl"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 sm:p-10 md:p-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center"
                  >
                    <Check className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-700 mb-6">
                    We've received your inquiry. We'll get back to you within 3 business days.
                  </p>
                  <button
                    onClick={() => {
                      setIsFormOpen(false);
                      setSubmitted(false);
                      setFormData({
                        organization: '',
                        contactName: '',
                        role: '',
                        email: '',
                        phone: '',
                        region: '',
                        partnershipType: [],
                        otherPartnership: '',
                        goals: '',
                        timeline: '',
                        budget: '',
                        fileUrl: null,
                        consent: false
                      });
                    }}
                    className="px-6 py-2 bg-gradient-to-r from-red-600 to-purple-700 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow"
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <div>
                  {/* Modal Header */}
                  <div className="p-6 sm:p-8 border-b border-gray-200 flex justify-between items-center">
                    <div>
                      <h3 className="text-lg sm:text-2xl font-bold text-gray-900">Partner Interest Form</h3>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">Tell us about your organization and goals</p>
                    </div>
                    <button
                      onClick={() => setIsFormOpen(false)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Modal Form */}
                  <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4 max-h-[70vh] overflow-y-auto">
                    {/* Organization Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                        Organization Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="organization"
                        placeholder="e.g., Lagos University Teaching Hospital"
                        value={formData.organization}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 border-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-all ${
                          formErrors.organization ? 'border-red-500 bg-red-50' : 'border-gray-200'
                        }`}
                      />
                      {formErrors.organization && (
                        <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {formErrors.organization}
                        </p>
                      )}
                    </div>

                    {/* Contact Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                        Contact Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="contactName"
                        placeholder="e.g., Dr. Valerie Okorie"
                        value={formData.contactName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 border-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-all ${
                          formErrors.contactName ? 'border-red-500 bg-red-50' : 'border-gray-200'
                        }`}
                      />
                      {formErrors.contactName && (
                        <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {formErrors.contactName}
                        </p>
                      )}
                    </div>

                    {/* Role */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                        Role / Job Title <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="role"
                        placeholder="e.g., Head of Communications"
                        value={formData.role}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 border-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-all ${
                          formErrors.role ? 'border-red-500 bg-red-50' : 'border-gray-200'
                        }`}
                      />
                      {formErrors.role && (
                        <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {formErrors.role}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                        Work Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="name@organization.org"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 border-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-all ${
                          formErrors.email ? 'border-red-500 bg-red-50' : 'border-gray-200'
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {formErrors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone (Optional) */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                        Phone <span className="text-gray-500 text-xs">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+234 800 000 0000"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                      />
                    </div>

                    {/* Region */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                        Region / Country <span className="text-red-600">*</span>
                      </label>
                      <select
                        name="region"
                        value={formData.region}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 border-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-all ${
                          formErrors.region ? 'border-red-500 bg-red-50' : 'border-gray-200'
                        }`}
                      >
                        <option value="">Select a region...</option>
                        {regions.map(region => (
                          <option key={region} value={region}>{region}</option>
                        ))}
                      </select>
                      {formErrors.region && (
                        <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {formErrors.region}
                        </p>
                      )}
                    </div>

                    {/* Partnership Type */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Partnership Type <span className="text-red-600">*</span>
                      </label>
                      <div className="space-y-1.5">
                        {partnershipTypes.map((type, idx) => (
                          <label key={idx} className="flex items-center gap-2 cursor-pointer p-2 rounded hover:bg-red-50 transition-colors">
                            <input
                              type="checkbox"
                              name="partnershipType"
                              value={type}
                              checked={formData.partnershipType.includes(type)}
                              onChange={handleInputChange}
                              className="w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                            />
                            <span className="text-sm text-gray-700">{type}</span>
                          </label>
                        ))}
                      </div>
                      {formErrors.partnershipType && (
                        <p className="text-red-600 text-xs mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {formErrors.partnershipType}
                        </p>
                      )}
                    </div>

                    {/* Other Partnership Specification */}
                    {formData.partnershipType.includes("Other (please specify)") && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                          Please specify
                        </label>
                        <input
                          type="text"
                          name="otherPartnership"
                          placeholder="Tell us what you're interested in..."
                          value={formData.otherPartnership}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                        />
                      </motion.div>
                    )}

                    {/* Goals */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                        Your Goals <span className="text-red-600">*</span>
                      </label>
                      <textarea
                        name="goals"
                        placeholder="What would success look like? What's your timeline?"
                        value={formData.goals}
                        onChange={handleInputChange}
                        rows={4}
                        className={`w-full px-4 py-2.5 border-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-all resize-none ${
                          formErrors.goals ? 'border-red-500 bg-red-50' : 'border-gray-200'
                        }`}
                      />
                      <div className="flex justify-between mt-1.5">
                        <p className="text-xs text-gray-500">Min 20 chars</p>
                        <p className="text-xs text-gray-500">{formData.goals.length} / 500</p>
                      </div>
                      {formErrors.goals && (
                        <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {formErrors.goals}
                        </p>
                      )}
                    </div>

                    {/* Timeline */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                        Estimated Timeline <span className="text-red-600">*</span>
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 border-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-all ${
                          formErrors.timeline ? 'border-red-500 bg-red-50' : 'border-gray-200'
                        }`}
                      >
                        <option value="">Select a timeline...</option>
                        {timelines.map(timeline => (
                          <option key={timeline} value={timeline}>{timeline}</option>
                        ))}
                      </select>
                      {formErrors.timeline && (
                        <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {formErrors.timeline}
                        </p>
                      )}
                    </div>

                    {/* Budget */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                        Estimated Budget <span className="text-gray-500 text-xs">(optional)</span>
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                      >
                        <option value="">Select a budget range...</option>
                        {budgets.map(budget => (
                          <option key={budget} value={budget}>{budget}</option>
                        ))}
                      </select>
                    </div>

                    {/* Consent */}
                    <div>
                      <label className="flex items-start gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          name="consent"
                          checked={formData.consent}
                          onChange={handleInputChange}
                          className="w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-500 mt-0.5"
                        />
                        <span className="text-sm sm:text-base text-gray-700">
                          I consent to CreatorMD storing and using this information to contact me about partnerships. See our{" "}
                          <a href="/privacy" className="text-red-600 font-semibold hover:underline">
                            Privacy Policy
                          </a>
                          . <span className="text-red-600">*</span>
                        </span>
                      </label>
                      {formErrors.consent && (
                        <p className="text-red-600 text-xs mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {formErrors.consent}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                        className="w-full px-4 py-3 bg-gradient-to-r from-purple-900 via-purple-700 to-red-600 text-white font-bold rounded-lg text-base sm:text-lg shadow-lg overflow-hidden ring-2 ring-red-400/20 hover:ring-red-400/40 transition-all disabled:opacity-75"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          {isSubmitting ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                              />
                              Submitting...
                            </>
                          ) : (
                            <>
                              Submit Request
                              <ChevronRight className="w-4 h-4" />
                            </>
                          )}
                        </span>
                      </motion.button>
                      <p className="text-xs text-gray-600 text-center mt-2">We typically reply within 3 business days.</p>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Partnerships;
