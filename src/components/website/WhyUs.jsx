import React from 'react';
import { Card } from '../ui/Card';

export const WhyUs = () => {
  return (
    <section className="section container" style={{ background: 'var(--glass-bg)', backdropFilter: 'var(--glass-blur)', borderRadius: '32px', padding: '80px 40px', marginTop: 100 }}>
      <div className="section-header">
        <h2 className="section-title serif">Why Choose CimplyTax?</h2>
        <p className="section-subtitle">We blend AI-powered efficiency with expert CA precision.</p>
      </div>

      <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        <Card delay={0.1} style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>🤖</div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: 8, color: 'var(--text-primary)' }}>AI-First Technology</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Our platform auto-reads Form 16 and 26AS, reducing manual entry and eliminating human errors.</p>
        </Card>
        
        <Card delay={0.2} style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>🧑‍💼</div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: 8, color: 'var(--text-primary)' }}>Expert CA Review</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Every return is vetted by a seasoned Chartered Accountant before filing to ensure maximum tax savings.</p>
        </Card>

        <Card delay={0.3} style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>⏱️</div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: 8, color: 'var(--text-primary)' }}>Zero Missed Deadlines</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>We proactively track every due date so you never pay a penalty or late fee — guaranteed, every time.</p>
        </Card>

        <Card delay={0.4} style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>🔒</div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: 8, color: 'var(--text-primary)' }}>Bank-Grade Security</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Your financial data is encrypted and stored securely. We never share your data with third parties.</p>
        </Card>

        <Card delay={0.5} style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>📊</div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: 8, color: 'var(--text-primary)' }}>Real-Time Tracking</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Track your return status and refund progress instantly via our secure client dashboard.</p>
        </Card>

        <Card delay={0.6} style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>💬</div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: 8, color: 'var(--text-primary)' }}>Priority Support</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Dedicated CA support via WhatsApp and email throughout the year, not just during tax season.</p>
        </Card>
      </div>
    </section>
  );
};
