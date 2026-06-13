import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ShieldCheck, Banknote, CheckCircle2 } from 'lucide-react';

const STEPS = [
  {
    id: 0,
    title: 'Submit Details',
    desc: 'Upload Form 16, Aadhaar & PAN securely to your client portal.',
    icon: FileText,
    color: '#3b82f6',
    bg: 'rgba(59,130,246,0.10)',
    border: 'rgba(59,130,246,0.25)',
    metric: '2 min',
    metricLabel: 'to upload',
  },
  {
    id: 1,
    title: 'CA Reviews & Files',
    desc: 'Expert CA optimises deductions, checks for errors, and files on the ITR portal.',
    icon: ShieldCheck,
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.10)',
    border: 'rgba(245,158,11,0.25)',
    metric: '24 hrs',
    metricLabel: 'turnaround',
  },
  {
    id: 2,
    title: 'Refund Tracked',
    desc: 'ITR-V delivered instantly. We monitor your refund until it hits your bank.',
    icon: Banknote,
    color: '#10b981',
    bg: 'rgba(16,185,129,0.10)',
    border: 'rgba(16,185,129,0.25)',
    metric: '₹1,40,000',
    metricLabel: 'avg. refund',
  },
];

const STEP_DURATION = 3200;
const TICK = 50;

export const HeroAnimation = () => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);

  useEffect(() => {
    progressRef.current = 0;
    setProgress(0);

    const fill = setInterval(() => {
      progressRef.current = Math.min(progressRef.current + (100 / (STEP_DURATION / TICK)), 100);
      setProgress(progressRef.current);
    }, TICK);

    const advance = setInterval(() => {
      progressRef.current = 0;
      setProgress(0);
      setCurrent(prev => (prev + 1) % STEPS.length);
    }, STEP_DURATION);

    return () => {
      clearInterval(fill);
      clearInterval(advance);
    };
  }, [current]);

  const step = STEPS[current];
  const Icon = step.icon;

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 440, margin: '0 auto' }}>

      {/* Ambient colour glow that shifts per step */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`glow-${current}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            position: 'absolute',
            inset: -60,
            background: `radial-gradient(ellipse at 60% 40%, ${step.color}28 0%, transparent 70%)`,
            zIndex: -1,
            filter: 'blur(24px)',
            pointerEvents: 'none',
          }}
        />
      </AnimatePresence>

      <div
        className="liquid-glass-heavy"
        style={{
          padding: '28px 24px 24px',
          borderRadius: 24,
          border: '1px solid var(--glass-border)',
          boxShadow: '0 24px 56px rgba(0,0,0,0.18)',
          overflow: 'hidden',
        }}
      >

        {/* ── Header ── */}
        <div style={{ marginBottom: 20 }}>
          <div style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--primary)', marginBottom: 5,
          }}>
            Automated Process
          </div>
          <h3 className="serif" style={{ fontSize: '1.35rem', color: 'var(--text-primary)', margin: 0 }}>
            File ITR in 3 Steps
          </h3>
        </div>

        {/* ── Segmented progress track ── */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 22 }}>
          {STEPS.map((s, idx) => (
            <div
              key={s.id}
              style={{
                flex: 1, height: 4, borderRadius: 4,
                background: 'rgba(255,255,255,0.08)',
                overflow: 'hidden',
              }}
            >
              <motion.div
                animate={{
                  width: idx < current ? '100%' : idx === current ? `${progress}%` : '0%',
                  background: idx < current ? '#10b981' : s.color,
                }}
                transition={{ ease: 'linear', duration: idx === current ? 0 : 0.3 }}
                style={{ height: '100%', borderRadius: 4 }}
              />
            </div>
          ))}
        </div>

        {/* ── Active step card (animated) ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`card-${current}`}
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -14, scale: 0.97 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: step.bg,
              border: `1px solid ${step.border}`,
              borderRadius: 16,
              padding: '18px 16px',
              marginBottom: 14,
            }}
          >
            {/* Icon + meta row */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
              <motion.div
                initial={{ scale: 0.6, rotate: -12, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ delay: 0.1, type: 'spring', stiffness: 300, damping: 18 }}
                style={{
                  width: 46, height: 46, borderRadius: 13, flexShrink: 0,
                  background: `${step.color}1A`,
                  border: `1px solid ${step.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <Icon size={22} color={step.color} strokeWidth={1.8} />
              </motion.div>

              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: 10.5, fontWeight: 700, color: step.color,
                  textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: 3,
                }}>
                  Step {current + 1} of {STEPS.length}
                </div>
                <div style={{ fontSize: 15.5, fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.2 }}>
                  {step.title}
                </div>
              </div>

              {/* Metric badge */}
              <div style={{
                flexShrink: 0, textAlign: 'center',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                borderRadius: 10, padding: '5px 10px',
              }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: step.color, lineHeight: 1 }}>
                  {step.metric}
                </div>
                <div style={{ fontSize: 9.5, color: 'var(--text-secondary)', marginTop: 2 }}>
                  {step.metricLabel}
                </div>
              </div>
            </div>

            <p style={{
              fontSize: 13, color: 'var(--text-secondary)',
              lineHeight: 1.6, margin: 0,
            }}>
              {step.desc}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* ── Other steps (completed / upcoming) ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
          {STEPS.map((s, idx) => {
            if (idx === current) return null;
            const done = idx < current;
            const S = s.icon;
            return (
              <motion.div
                key={s.id}
                animate={{ opacity: done ? 1 : 0.38 }}
                transition={{ duration: 0.3 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '9px 12px', borderRadius: 10,
                  background: 'var(--glass-bg)',
                  border: `1px solid ${done ? 'rgba(16,185,129,0.25)' : 'var(--glass-border)'}`,
                }}
              >
                {done
                  ? <CheckCircle2 size={15} color="#10b981" strokeWidth={2.5} />
                  : <S size={15} color="var(--text-secondary)" strokeWidth={1.8} />
                }
                <span style={{
                  fontSize: 13, fontWeight: done ? 600 : 500,
                  color: done ? 'var(--text-primary)' : 'var(--text-secondary)',
                  flex: 1,
                }}>
                  {s.title}
                </span>
                {done && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    style={{
                      fontSize: 10, fontWeight: 700, color: '#10b981',
                      background: 'rgba(16,185,129,0.12)',
                      border: '1px solid rgba(16,185,129,0.25)',
                      borderRadius: 6, padding: '2px 7px',
                    }}
                  >
                    Done
                  </motion.span>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
