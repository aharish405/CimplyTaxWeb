import React from 'react';
import { Card } from '../ui/Card';

export const Testimonials = () => {
  return (
    <section id="reviews" className="section container" style={{ marginTop: 100 }}>
      <div className="section-header">
        <h2 className="section-title serif">Client Stories</h2>
        <p className="section-subtitle">Trusted by over 1,200 individuals and businesses across India.</p>
      </div>

      <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        <Card delay={0.1} className="liquid-glass">
          <div style={{ color: 'var(--primary)', fontSize: 14, letterSpacing: 2, marginBottom: 16 }}>★★★★★</div>
          <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: 24, fontSize: 15, lineHeight: 1.6 }}>
            "Excellent service! Filed my ITR with capital gains in 24 hours. The CA explained old vs new regime clearly — saved ₹1.8L in tax. Got my refund within 3 weeks. Highly recommend!"
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, borderTop: '1px solid var(--glass-border)', paddingTop: 16 }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700 }}>RK</div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text-primary)' }}>Ramesh Kumar</div>
              <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>IT Professional, Hyderabad</div>
            </div>
          </div>
        </Card>

        <Card delay={0.2} className="liquid-glass">
          <div style={{ color: 'var(--primary)', fontSize: 14, letterSpacing: 2, marginBottom: 16 }}>★★★★★</div>
          <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: 24, fontSize: 15, lineHeight: 1.6 }}>
            "Cimply Tax has been handling our GST filings for 3 years. Never a missed deadline, never a penalty. Their team is always reachable and incredibly professional."
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, borderTop: '1px solid var(--glass-border)', paddingTop: 16 }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700 }}>KT</div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text-primary)' }}>Kurnool Traders</div>
              <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Small Business Owner</div>
            </div>
          </div>
        </Card>

        <Card delay={0.3} className="liquid-glass">
          <div style={{ color: 'var(--primary)', fontSize: 14, letterSpacing: 2, marginBottom: 16 }}>★★★★★</div>
          <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: 24, fontSize: 15, lineHeight: 1.6 }}>
            "As an NRI, filing taxes in India was always stressful. The CimplyTax team handled my DTAA benefits perfectly and secured a TDS refund I didn't even know I was eligible for."
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, borderTop: '1px solid var(--glass-border)', paddingTop: 16 }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700 }}>PS</div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text-primary)' }}>Priya Sharma</div>
              <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>NRI, USA</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
