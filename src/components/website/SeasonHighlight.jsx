import React from 'react';
import { Card } from '../ui/Card';

export const SeasonHighlight = () => {
  return (
    <section className="section container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="section-header">
        <div style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '30px', background: 'var(--primary-transparent)', color: 'var(--primary)', fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 16 }}>
          🔥 Filing Season 2025–26
        </div>
        <h2 className="section-title serif">
          Why File <em className="text-gradient" style={{ fontStyle: 'italic' }}>Early</em> This Season?
        </h2>
        <p className="section-subtitle">
          Avoid congestion on the portal, penalty interest, and last-minute errors. Early filers get faster refunds.
        </p>
      </div>

      <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
        <Card delay={0.1} style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>⚡</div>
          <h3 style={{ fontSize: '1.1rem', marginBottom: 8, color: 'var(--text-primary)' }}>Faster Refunds</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Early filers receive refunds weeks ahead of deadline filers</p>
        </Card>
        
        <Card delay={0.2} style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>🛡️</div>
          <h3 style={{ fontSize: '1.1rem', marginBottom: 8, color: 'var(--text-primary)' }}>Avoid ₹5,000 Penalty</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Late filing after 31 July attracts penalty u/s 234F + interest</p>
        </Card>

        <Card delay={0.3} style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>✅</div>
          <h3 style={{ fontSize: '1.1rem', marginBottom: 8, color: 'var(--text-primary)' }}>Carry Forward Losses</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Capital loss carry-forward is only allowed if ITR filed on time</p>
        </Card>

        <Card delay={0.4} style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>🏦</div>
          <h3 style={{ fontSize: '1.1rem', marginBottom: 8, color: 'var(--text-primary)' }}>Loan-Ready ITR</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Banks require ITR for home, business & personal loan approvals</p>
        </Card>
      </div>
    </section>
  );
};
