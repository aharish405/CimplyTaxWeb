import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Services } from '../components/website/Services';

export const ServicesPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    // Small delay lets the page render before scrolling
    const id = setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) {
        const offset = 80; // clear the fixed navbar
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 100);
    return () => clearTimeout(id);
  }, [hash]);

  return (
    <div style={{ paddingTop: 100 }}>
      <Services />
    </div>
  );
};
