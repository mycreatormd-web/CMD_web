import { Program, ProgramsData } from '@/app/types/program';

export const programs: ProgramsData = {
  availableNow: [
    {
      id: 'bootcamp',
      slug: 'creatormd-bootcamp',
      title: 'CreatorMD Bootcamp',
      shortDescription: 'An intensive live program designed to help medical professionals launch their content authority in 8 weeks.',
      fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      benefits: [
        'Lorem ipsum dolor sit amet',
        'Consectetur adipiscing elit',
        'Sed do eiusmod tempor incididunt',
        'Ut labore et dolore magna aliqua'
      ],
      icon: 'Zap',
      color: 'from-blue-500 to-cyan-500',
      status: 'available',
      duration: '8 weeks',
      level: 'Intermediate',
      internalPath: '/programs/creatormd-bootcamp'
    },
    {
      id: 'core-course',
      slug: 'creatormd-core-course',
      title: 'CreatorMD Core Course',
      shortDescription: 'Self-paced foundational course covering content strategy, personal branding, and audience building fundamentals.',
      fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      benefits: [
        'Lorem ipsum dolor sit amet',
        'Consectetur adipiscing elit',
        'Sed do eiusmod tempor incididunt',
        'Ut labore et dolore magna aliqua'
      ],
      icon: 'BookOpen',
      color: 'from-emerald-500 to-teal-500',
      status: 'available',
      duration: 'Self-paced',
      level: 'Beginner',
      externalLink: 'https://app.gohighlevel.com/v2/preview/XIxNxbeFj0B5mVXJyglB?notrack=true'
    }
  ],
  comingSoon: [
    {
      id: 'digital-courses',
      slug: 'digital-courses',
      title: '1️⃣ Digital Courses (Self-paced)',
      shortDescription: 'Self-paced learning designed for medics who want to master content creation, branding, and monetization.',
      fullDescription: 'Comprehensive self-paced courses covering everything from content creation to monetization. Includes CreatorMD Accelerator, Content Creation for Busy Medics, Branding for Medics 101, Monetization for Medics, Health Communication Mastery, and Smartphone Video Mastery for Medics.',
      benefits: [
        'CreatorMD Accelerator - Turn confused medics into confident creators in 7–30 days',
        'Content Creation for Busy Medics - Short-form videos, carousels, scripts, batching',
        'Branding for Medics 101 - Niche clarity, positioning, messaging',
        'Monetization for Medics - Clients, partnerships & digital income',
        'Health Communication Mastery - Break down complex health concepts simply',
        'Smartphone Video Mastery - Mobile shooting, angles, transitions, editing'
      ],
      icon: 'BookOpen',
      color: 'from-blue-500 to-cyan-500',
      status: 'coming-soon',
      level: 'Beginner to Advanced'
    },
    {
      id: 'live-training',
      slug: 'live-training',
      title: '2️⃣ Live Training & Workshops',
      shortDescription: 'Short, powerful, and interactive training sessions tailored for healthcare professionals.',
      fullDescription: 'Dynamic live workshops ranging from 3-hour sessions to full weekend bootcamps. Available as public workshops or custom corporate requests for hospitals and healthcare organizations.',
      benefits: [
        'Content Creation Bootcamp for Medics',
        'Instagram Growth for Healthcare Professionals',
        'TikTok for Doctors',
        'LinkedIn Authority Training for Medics',
        'Personal Branding Workshop',
        'Camera Confidence for Medics',
        '3-hour, 6-hour, weekend, or corporate custom requests'
      ],
      icon: 'Users',
      color: 'from-emerald-500 to-teal-500',
      status: 'coming-soon',
      level: 'All levels'
    },
    {
      id: 'coaching-programs',
      slug: 'coaching-programs',
      title: '3️⃣ CreatorMD Coaching Programs',
      shortDescription: 'Transformational, step-by-step coaching with personalized guidance and accountability.',
      fullDescription: 'Transformational coaching programs designed to accelerate your creator journey. Get daily guidance, templates, assignments, and personalized mentorship from CreatorMD experts.',
      benefits: [
        'CreatorMD 30-Day Transformation - Daily guidance, templates, assignments',
        'CreatorMD Mentorship (8–12 Weeks) - Personalized strategy & accountability',
        'Build Your First Digital Product - Launch your e-book, course, or workshop',
        'Step-by-step framework with proven results',
        'Access to CreatorMD team and community'
      ],
      icon: 'Target',
      color: 'from-purple-500 to-pink-500',
      status: 'coming-soon',
      level: 'Intermediate'
    },
    {
      id: 'done-with-you',
      slug: 'done-with-you',
      title: '4️⃣ Done-With-You Services (CreatorMD Challenge)',
      shortDescription: 'You guide them, they execute with your supervision and expert feedback.',
      fullDescription: 'Done-With-You services where CreatorMD guides you through the process and you execute with professional supervision and ongoing feedback.',
      benefits: [
        'Content Strategy Buildout - Map your next 30/60/90 days',
        'Video Review + Feedback Sessions - Professional critique and improvement',
        'Branding & Messaging Clarity Sessions - Define your unique positioning',
        'Hands-on guidance with expert supervision',
        'Complete your creator journey with expert oversight'
      ],
      icon: 'Wrench',
      color: 'from-orange-500 to-red-500',
      status: 'coming-soon',
      level: 'Intermediate'
    },
    {
      id: 'done-for-you',
      slug: 'done-for-you',
      title: '5️⃣ Done-For-You Services (Premium)',
      shortDescription: 'CreatorMD becomes your content arm with high-ticket premium solutions.',
      fullDescription: 'Premium done-for-you services where CreatorMD handles everything. We become your content creation and strategy partner.',
      benefits: [
        'DFY Personal Branding Package - Bio, niche clarity, pillars, profile setup',
        'DFY Content Creation - Scripts, editing, captions, thumbnails',
        'DFY Content Strategy + Monthly Calendar - Fully planned and executed',
        'DFY LinkedIn Personal Branding for Medics - Complete personal brand setup',
        'High-ticket premium solutions',
        'Complete white-glove service'
      ],
      icon: 'Trophy',
      color: 'from-amber-500 to-yellow-500',
      status: 'coming-soon',
      level: 'Premium'
    },
    {
      id: 'community',
      slug: 'community',
      title: '6️⃣ CreatorMD Community (Membership)',
      shortDescription: 'A subscription-based support hub with weekly classes, challenges, and global accountability.',
      fullDescription: 'Join a thriving global community of medical professionals committed to building their content authority. Get ongoing support, resources, and accountability.',
      benefits: [
        'Weekly live classes with CreatorMD team',
        'Monthly challenges to push your creativity',
        'Templates - captions, scripts, hooks, and more',
        'Accountability group for consistency',
        'Weekly Q&A sessions',
        'Access to creators & medics worldwide'
      ],
      icon: 'Heart',
      color: 'from-cyan-500 to-blue-500',
      status: 'coming-soon',
      level: 'All levels'
    },
    {
      id: 'digital-products',
      slug: 'digital-products',
      title: '7️⃣ CreatorMD Templates & Digital Products',
      shortDescription: 'Fast, affordable digital downloads for immediate implementation.',
      fullDescription: 'Affordable digital products designed to accelerate your content creation. Ready-to-use templates, frameworks, and resource packs.',
      benefits: [
        'Content calendar for medics',
        '100 hooks for doctors',
        '50 content ideas for medics',
        'Health carousel templates',
        'Video script packs',
        'LinkedIn bio templates',
        'Brand kit for medical creators'
      ],
      icon: 'Zap',
      color: 'from-pink-500 to-red-500',
      status: 'coming-soon',
      level: 'Beginner'
    },
    {
      id: 'events',
      slug: 'events',
      title: '8️⃣ CreatorMD Events',
      shortDescription: 'Building a brand that brings medical creators together for learning and networking.',
      fullDescription: 'In-person and virtual events designed to bring the CreatorMD community together and accelerate connections.',
      benefits: [
        'CreatorMD Annual Summit - Major event bringing medics together',
        'Live meetups & workshops in multiple cities',
        'CreatorMD Bootcamps (physical + virtual options)',
        'Networking opportunities with other medical creators',
        'Exclusive event-only content and training'
      ],
      icon: 'Users',
      color: 'from-indigo-500 to-purple-500',
      status: 'coming-soon',
      level: 'All levels'
    },
    {
      id: 'corporate',
      slug: 'corporate',
      title: '9️⃣ Corporate & Hospital Partnerships',
      shortDescription: 'Where the real impact happens - training hospitals and healthcare organizations.',
      fullDescription: 'Specialized solutions for hospitals, clinics, and healthcare organizations looking to improve their digital communication and content strategy.',
      benefits: [
        'Training for hospital staff on digital communication',
        'Health content campaigns for organizations',
        'Hospital visibility strategy development',
        'Workplace wellness content packages',
        'Custom solutions for healthcare institutions',
        'Scalable training programs for teams'
      ],
      icon: 'Briefcase',
      color: 'from-teal-500 to-emerald-500',
      status: 'coming-soon',
      level: 'Enterprise'
    },
    {
      id: 'agency',
      slug: 'agency',
      title: '🔟 CreatorMD Agency (Future)',
      shortDescription: 'Full-service done-for-you agency for hospitals, clinics, startups, and health brands.',
      fullDescription: 'A complete creative agency dedicated to healthcare. We handle everything from content creation to strategy to execution.',
      benefits: [
        'Full service done-for-you agency model',
        'Services for hospitals, clinics, health startups',
        'Health brand content creation and strategy',
        'Social media management and growth',
        'Video storytelling and production',
        'Complete content campaigns and execution'
      ],
      icon: 'Briefcase',
      color: 'from-green-500 to-teal-500',
      status: 'coming-soon',
      level: 'Enterprise'
    }
  ]
};

export const getProgramBySlug = (slug: string): Program | undefined => {
  const allPrograms = [...programs.availableNow, ...programs.comingSoon];
  return allPrograms.find(p => p.slug === slug);
};

export const getAllProgramSlugs = (): string[] => {
  const allPrograms = [...programs.availableNow, ...programs.comingSoon];
  return allPrograms.map(p => p.slug);
};
