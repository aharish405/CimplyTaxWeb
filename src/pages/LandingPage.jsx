import React from 'react';
import { NavigationBar } from '../components/ui/NavigationBar';
import { TrustBar } from '../components/website/TrustBar';
import { Hero } from '../components/website/Hero';
import { SeasonHighlight } from '../components/website/SeasonHighlight';
import { Services } from '../components/website/Services';
import { Pricing } from '../components/website/Pricing';
import { WhyUs } from '../components/website/WhyUs';
import { Process } from '../components/website/Process';
import { Testimonials } from '../components/website/Testimonials';
import { FAQ } from '../components/website/FAQ';
import { Footer } from '../components/website/Footer';

export const LandingPage = () => {
  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <div className="bg-blob" style={{ top: '10%', left: '20%', width: '400px', height: '400px' }} />
      <div className="bg-blob" style={{ top: '40%', right: '10%', width: '500px', height: '500px', animationDelay: '-5s' }} />
      <div className="bg-blob" style={{ bottom: '10%', left: '30%', width: '300px', height: '300px', animationDelay: '-10s' }} />

      <NavigationBar />
      
      <main>
        <Hero />
        <TrustBar />
        <SeasonHighlight />
        <Services />
        <Pricing />
        <WhyUs />
        <Process />
        <Testimonials />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
};
