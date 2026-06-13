import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ShieldCheck, Banknote, CheckCircle2 } from 'lucide-react';

const STEPS = [
  {
    id: 1,
    title: "Submit Details",
    desc: "Form 16, Aadhaar, PAN",
    icon: <FileText size={24} color="#3b82f6" />
  },
  {
    id: 2,
    title: "CA Validation",
    desc: "Maximising refunds",
    icon: <ShieldCheck size={24} color="#f59e0b" />
  },
  {
    id: 3,
    title: "ITR Filed & Refund",
    desc: "Direct to bank account",
    icon: <Banknote size={24} color="#10b981" />
  }
];

export const HeroAnimation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress interval for the current step (simulating loading)
    const progInterval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) return 100;
        return p + 2; // fills up in 50 ticks * 50ms = 2.5 seconds
      });
    }, 50);

    // Step change interval
    const stepInterval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % 3);
      setProgress(0);
    }, 3000);

    return () => {
      clearInterval(progInterval);
      clearInterval(stepInterval);
    };
  }, []);

  return (
    <div className="hero-animation-container" style={{ position: 'relative', width: '100%', maxWidth: 450, margin: '0 auto', perspective: 1000 }}>
      {/* Background Decorative Elements */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{ position: 'absolute', top: -50, right: -50, width: 300, height: 300, background: 'radial-gradient(circle, rgba(var(--primary-rgb),0.2) 0%, transparent 70%)', zIndex: -1 }}
      />
      
      <div className="liquid-glass-heavy" style={{ padding: '32px 24px', borderRadius: 24, border: '1px solid var(--glass-border)', boxShadow: '0 32px 64px rgba(0,0,0,0.2)' }}>
        
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: 8 }}>Automated Process</div>
          <h3 className="serif" style={{ fontSize: '1.4rem', color: 'var(--text-primary)', margin: 0 }}>File ITR in 3 Steps</h3>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {STEPS.map((step, idx) => {
            const isActive = currentStep === idx;
            const isCompleted = currentStep > idx;
            
            return (
              <div 
                key={step.id}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 16,
                  padding: 16,
                  borderRadius: 16,
                  background: isActive ? 'rgba(255,255,255,0.05)' : 'transparent',
                  border: `1px solid ${isActive ? 'var(--primary)' : 'transparent'}`,
                  transition: 'all 0.3s ease',
                  opacity: isActive || isCompleted ? 1 : 0.5
                }}
              >
                {/* Icon Circle */}
                <div style={{ 
                  width: 48, 
                  height: 48, 
                  borderRadius: 12, 
                  background: isActive ? 'var(--bg-color)' : 'rgba(255,255,255,0.05)',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  boxShadow: isActive ? '0 8px 16px rgba(0,0,0,0.2)' : 'none',
                  position: 'relative'
                }}>
                  {isCompleted ? <CheckCircle2 size={24} color="#10b981" /> : step.icon}
                  
                  {/* Active Pulse Ring */}
                  {isActive && (
                    <motion.div 
                      animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      style={{ position: 'absolute', inset: -2, border: '2px solid var(--primary)', borderRadius: 14 }}
                    />
                  )}
                </div>

                {/* Text & Progress */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                    <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)' }}>{step.title}</div>
                    {isActive && <div style={{ fontSize: 12, color: 'var(--primary)', fontWeight: 600 }}>{Math.floor(progress)}%</div>}
                    {isCompleted && <div style={{ fontSize: 12, color: '#10b981', fontWeight: 600 }}>Done</div>}
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{step.desc}</div>
                  
                  {/* Progress Bar */}
                  <div style={{ height: 4, background: 'rgba(255,255,255,0.1)', borderRadius: 2, marginTop: 10, overflow: 'hidden' }}>
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: isCompleted ? '100%' : (isActive ? `${progress}%` : '0%') }}
                      style={{ height: '100%', background: isCompleted ? '#10b981' : 'var(--primary)' }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
