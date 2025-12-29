// app/page.tsx (Main page using the hero)
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import About from './components/About';
import ProgramsSection from './components/ProgramsSection';
import Community from './components/Community';
import Partnerships from './components/Partnerships';
import ValueProps from './components/ValueProps';
import SocialProof from './components/SocialProof';

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <About />
      <ProgramsSection />
      <Community />
      <Partnerships />
      <ValueProps />
      <SocialProof />
      {/* Other sections will go here */}
    </main>
  );
}
