// app/page.tsx (Main page using the hero)
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import About from './components/About';
import ProgramsSection from './components/ProgramsSection';
import Community from './components/Community';
import Partnerships from './components/Partnerships';
import ValueProps from './components/ValueProps';
import SocialProof from './components/SocialProof';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TitleManager from './components/TitleManager';

export const metadata = {
  title: 'CreatorMD - Medical Content Acceleration System',
  description: 'Turn medical knowledge into authority, opportunities, impact, and influence. Join 500+ medical professionals building their authority online.',
};

export default function Home() {
  return (
    <main className="relative w-full min-w-0 overflow-x-hidden">
      <TitleManager />
      <Navigation />
      <HeroSection />
      <About />
      <ProgramsSection />
      <Community />
      <Resources />
      <Partnerships />
      <ValueProps />
      <SocialProof />
      <Contact />
      <Footer />
    </main>
  );
}
