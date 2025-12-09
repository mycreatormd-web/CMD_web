// app/page.tsx (Main page using the hero)
import HeroSection from './components/HeroSection';
import ValueProps from './components/ValueProps';
import SocialProof from './components/SocialProof';

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <ValueProps />
      <SocialProof />
      {/* Other sections will go here */}
    </main>
  );
}
