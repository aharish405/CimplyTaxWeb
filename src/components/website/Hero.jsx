import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const deadline = new Date('2026-07-31T23:59:59+05:30').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = deadline - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section container">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-content"
      >
        <div className="hero-badge">
          <span style={{ marginRight: 6 }}>🚀</span> India's AI-Powered Tax Platform
        </div>
        <h1 className="hero-title serif">
          Get <span className="text-gradient">Maximum<br/>Tax Refund</span>
        </h1>
        <p className="hero-subtitle">
          CimplyTax is India's intelligent financial services platform — ITR filing, GST, company registration & compliance with real-time tracking, AI assistance, and expert CA support. FY 2025–26 season is now open.
        </p>
        
        <div className="hero-actions" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 32 }}>
          <Button variant="primary" icon={<ArrowRight size={18} />} onClick={() => navigate('/contact')}>File ITR Now</Button>
          <Button variant="secondary" onClick={() => navigate('/pricing')}>View Pricing</Button>
        </div>

        {/* Timer Box */}
        <div className="timer-box liquid-glass">
          <div className="timer-label">⏳ Filing Deadline</div>
          <div className="timer-display">
            <div className="timer-item liquid-glass-heavy">
              <div className="timer-val serif">{timeLeft.days}</div>
              <div className="timer-unit">Days</div>
            </div>
            <div className="timer-colon">:</div>
            <div className="timer-item liquid-glass-heavy">
              <div className="timer-val serif">{timeLeft.hours}</div>
              <div className="timer-unit">Hrs</div>
            </div>
            <div className="timer-colon">:</div>
            <div className="timer-item liquid-glass-heavy">
              <div className="timer-val serif">{timeLeft.minutes}</div>
              <div className="timer-unit">Min</div>
            </div>
          </div>
          <div className="timer-note">
            Until <strong style={{ color: 'var(--text-primary)' }}>31 July 2026</strong><br/>
            Late filing attracts ₹5,000 penalty
          </div>
        </div>

        <div className="stats-row" style={{ display: 'flex', justifyContent: 'center', gap: 48, marginTop: 48, flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)' }} className="serif">1,200+</div>
            <div style={{ fontSize: 12, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: 1 }}>ITRs Filed</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)' }} className="serif">12+</div>
            <div style={{ fontSize: 12, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: 1 }}>Years Experience</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)' }} className="serif">100%</div>
            <div style={{ fontSize: 12, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: 1 }}>On-Time Filing</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
