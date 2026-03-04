import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/landing/Hero';
import { ServicesGrid } from '../components/landing/ServicesGrid';
import { StorySection } from '../components/landing/StorySection';
import { CtaBanner } from '../components/landing/CtaBanner';

export function LandingPage() {
  return (
    <>
      <Navbar variant="landing" />
      <div className="bento-page">
        <div className="bento-content">
          <Hero />
          <ServicesGrid />
          <StorySection />
          <CtaBanner />
          <Footer />
        </div>
      </div>
    </>
  );
}
