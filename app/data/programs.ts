import { Program, ProgramsData } from '@/app/types/program';

export const programs: ProgramsData = {
  availableNow: [
    {
      id: 'bootcamp',
      slug: 'creatormd-bootcamp',
      title: 'CreatorMD Bootcamp',
      shortDescription: 'An intensive live program designed to help medical professionals launch their content authority in 7 days.',
      fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      benefits: [
        'Lorem ipsum dolor sit amet',
        'Consectetur adipiscing elit',
        'Sed do eiusmod tempor incididunt',
        'Ut labore et dolore magna aliqua'
      ],
      icon: 'Zap',
      color: 'from-red-500 to-purple-500',
      status: 'available',
      duration: '7 days',
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
      color: 'from-purple-500 to-red-500',
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
      title: 'Digital Courses (Self-paced)',
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
      id: 'coaching-programs',
      slug: 'coaching-programs',
      title: 'CreatorMD Coaching Programs',
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
      id: 'summit',
      slug: 'summit',
      title: 'CreatorMD Summit',
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
      id: 'hangout',
      slug: 'hangout',
      title: 'Creator MD Hangout',
      shortDescription: 'Casual, interactive meetups for medical creators to connect, share, and collaborate.',
      fullDescription: 'Informal community hangouts designed for medical creators to connect, share experiences, and collaborate on content ideas.',
      benefits: [
        'Casual networking with other medical creators',
        'Share your creator journey and learnings',
        'Collaborate on content ideas and projects',
        'Get feedback from peers',
        'Build genuine relationships in the community',
        'Regular virtual and in-person meetups'
      ],
      icon: 'Users',
      color: 'from-orange-500 to-yellow-500',
      status: 'coming-soon',
      level: 'All levels'
    },
    {
      id: 'usmle',
      slug: 'usmle',
      title: 'USMLE Programs',
      shortDescription: 'Specialized programs designed to help medical students prepare for USMLE exams while building their creator platform.',
      fullDescription: 'Comprehensive USMLE preparation programs combined with content creation training to help medical students study smarter and build authority.',
      benefits: [
        'USMLE exam preparation strategies',
        'High-yield study techniques for Step 1, Step 2, Step 3',
        'Content creation while preparing for exams',
        'Build your medical authority during prep',
        'Monetize your study journey',
        'Join a community of ambitious medical students'
      ],
      icon: 'BookOpen',
      color: 'from-green-500 to-emerald-500',
      status: 'coming-soon',
      level: 'Beginner to Advanced'
    },
    {
      id: 'corporate',
      slug: 'corporate',
      title: 'Corporate & Hospital Partnerships',
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
      title: 'CreatorMD Agency (Future)',
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
