import { Metadata } from 'next';
import ProgramsPageClient from './page-client';

export const metadata: Metadata = {
  title: 'Programs | CreatorMD - Learning Paths for Medical Professionals',
  description: 'Self-paced courses, live bootcamps, mentorship & hands-on support designed for medics at every stage.',
  metadataBase: new URL('https://creatormd.com'),
  openGraph: {
    title: 'Programs | CreatorMD',
    description: 'Self-paced courses, live bootcamps, mentorship & hands-on support for medical professionals',
    type: 'website',
    url: 'https://creatormd.com/programs',
  },
};

export default function ProgramsPage() {
  return <ProgramsPageClient />;
}
