import { LucideIcon } from 'lucide-react';

export interface Program {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  externalLink?: string;
  internalPath?: string;
  icon: string; // Icon name from lucide-react
  color: string; // Tailwind color class
  status: 'available' | 'coming-soon';
  image?: string; // Path to image
  duration?: string;
  level?: string;
}

export interface ProgramsData {
  availableNow: Program[];
  comingSoon: Program[];
}
