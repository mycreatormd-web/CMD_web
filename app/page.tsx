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

export default function Home() {
  return (
    <main className="relative w-full min-w-0 overflow-x-hidden">
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
    </main>
  );
}
