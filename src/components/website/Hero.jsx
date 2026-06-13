import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import { HeroAnimation } from './HeroAnimation';

export const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const deadline = new Date('2026-07-31T23:59:59+05:30').getTime();

    const tick = () => {
      const diff = deadline - Date.now();
      if (diff > 0) {
        setTimeLeft({
          days:    Math.floor(diff / 86400000),
          hours:   Math.floor((diff % 86400000) / 3600000),
          minutes: Math.floor((diff % 3600000) / 60000),
          seconds: Math.floor((diff % 60000) / 1000),
        });
      }
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero-section">
      <div className="container hero-grid">
        {/* Left Column: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <div className="hero-badge">
            <span style={{ marginRight: 6 }}>🚀</span> India's AI-Powered Tax Platform
          </div>
          <h1 className="hero-title serif">
            Get <span className="text-gradient">Maximum<br />Tax Refund</span>
          </h1>
          <p className="hero-subtitle">
            File ITR, manage GST, and register your company — all backed by AI assistance and expert CA support. FY 2025–26 filing season is now open.
          </p>

          <div className="hero-actions">
            <Button variant="primary" icon={<ArrowRight size={18} />} onClick={() => navigate('/contact')}>File ITR Now</Button>
            <Button variant="secondary" onClick={() => navigate('/pricing')}>View Pricing</Button>
          </div>

          {/* Filing Deadline Timer */}
          <div className="timer-card liquid-glass">
            <div className="timer-header">
              <span className="timer-live-dot" />
              <span className="timer-header-label">Filing Deadline</span>
              <span className="timer-header-date">31 Jul 2026</span>
            </div>

            <div className="timer-digits">
              {[
                { value: timeLeft.days,    unit: 'Days' },
                { value: timeLeft.hours,   unit: 'Hrs'  },
                { value: timeLeft.minutes, unit: 'Min'  },
                { value: timeLeft.seconds, unit: 'Sec'  },
              ].map(({ value, unit }, i) => (
                <React.Fragment key={unit}>
                  {i > 0 && <div className="timer-sep">:</div>}
                  <div className="timer-digit-block liquid-glass-heavy">
                    <div className="timer-digit serif">
                      <AnimatePresence mode="popLayout" initial={false}>
                        <motion.span
                          key={value}
                          initial={{ y: -16, opacity: 0 }}
                          animate={{ y: 0,   opacity: 1 }}
                          exit={{    y:  16, opacity: 0 }}
                          transition={{ duration: 0.18, ease: 'easeOut' }}
                          style={{ display: 'block' }}
                        >
                          {String(value).padStart(2, '0')}
                        </motion.span>
                      </AnimatePresence>
                    </div>
                    <div className="timer-digit-unit">{unit}</div>
                  </div>
                </React.Fragment>
              ))}
            </div>

            <div className="timer-warning">
              ⚠️ Late filing attracts a <strong>₹5,000 penalty</strong> under Section 234F
            </div>
          </div>

          <div className="stats-row">
            <div className="stat-item">
              <div className="stat-value serif">1,200+</div>
              <div className="stat-label">ITRs Filed</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="stat-value serif">12+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="stat-value serif">100%</div>
              <div className="stat-label">On-Time Filing</div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Animation */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-animation-wrapper"
        >
          <HeroAnimation />

          {/* Trust badges anchoring the card */}
          <div className="hero-trust-badges">
            <span className="hero-trust-badge">⭐ 4.9 / 5 on Google</span>
            <span className="hero-trust-badge">🔒 256-bit Secure</span>
            <span className="hero-trust-badge">🇮🇳 ICAI-certified CAs</span>
          </div>

          {/* Fills remaining desktop space and adds value */}
          <div className="hero-included-card liquid-glass">
            <div className="hero-included-header">
              <span className="hero-included-dot" />
              Included in every plan
            </div>
            <div className="hero-included-items">
              {[
                'CA-prepared & digitally signed return',
                'Maximum refund optimisation',
                'ITR-V & e-acknowledgement',
                'Refund status tracking dashboard',
              ].map(item => (
                <div key={item} className="hero-included-item">
                  <span style={{ color: '#10b981', fontWeight: 700 }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
