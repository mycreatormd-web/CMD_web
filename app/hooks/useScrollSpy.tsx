'use client';

import { useState, useEffect } from 'react';

interface SectionData {
  id: string;
  title: string;
}

export const useScrollSpy = (sections: SectionData[]) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-20% 0px -60% 0px'
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    const currentSection = sections.find(section => section.id === activeSection);
    if (currentSection) {
      document.title = `${currentSection.title} | CreatorMD`;
    }
  }, [activeSection, sections]);

  return activeSection;
};