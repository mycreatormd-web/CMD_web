// app/page.tsx (Main page using the hero)
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import About from './components/About';
import ValueProps from './components/ValueProps';
import SocialProof from './components/SocialProof';

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <About />
      <ValueProps />
      <SocialProof />
      {/* Other sections will go here */}
    </main>
  );
}
