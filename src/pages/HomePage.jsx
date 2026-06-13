import React from 'react';
import { Hero } from '../components/website/Hero';
import { TrustBar } from '../components/website/TrustBar';
import { SeasonHighlight } from '../components/website/SeasonHighlight';
import { Process } from '../components/website/Process';
import { Testimonials } from '../components/website/Testimonials';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <TrustBar />
      <SeasonHighlight />
      <Process />
      <Testimonials />
    </>
  );
};
