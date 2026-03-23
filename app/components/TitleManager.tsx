'use client';

import { useScrollSpy } from '@/app/hooks/useScrollSpy';

const TitleManager = () => {
  const sections = [
    { id: 'hero', title: 'CreatorMD' },
    { id: 'about', title: 'About' },
    { id: 'programs', title: 'Programs' },
    { id: 'community', title: 'Community' },
    { id: 'resources', title: 'Resources' },
    { id: 'partnerships', title: 'Partnerships' },
    { id: 'contact', title: 'Contact' }
  ];

  useScrollSpy(sections);

  return null; // This component doesn't render anything
};

export default TitleManager;