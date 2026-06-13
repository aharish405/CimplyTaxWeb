import React from 'react';

export const Process = () => {
  return (
    <section id="process" className="section container" style={{ marginTop: 100 }}>
      <div className="section-header">
        <h2 className="section-title serif">How It Works</h2>
        <p className="section-subtitle">A seamless 4-step process from document upload to refund tracking.</p>
      </div>

      <div className="process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 32, position: 'relative' }}>
        <div className="process-line" />
        
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--glass-bg)', border: '2px solid var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 24 }}>1</div>
          <h3 style={{ fontSize: 18, marginBottom: 8, color: 'var(--text-primary)' }}>Select Plan & Pay</h3>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>Choose your filing plan online and make a secure payment.</p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--glass-bg)', border: '2px solid var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 24 }}>2</div>
          <h3 style={{ fontSize: 18, marginBottom: 8, color: 'var(--text-primary)' }}>Upload Documents</h3>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>Upload Form 16, PAN, and other details securely to your dashboard.</p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--glass-bg)', border: '2px solid var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 24 }}>3</div>
          <h3 style={{ fontSize: 18, marginBottom: 8, color: 'var(--text-primary)' }}>CA Prepares Return</h3>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>Our expert CA optimises your return for maximum tax savings.</p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--glass-bg)', border: '2px solid var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 24 }}>4</div>
          <h3 style={{ fontSize: 18, marginBottom: 8, color: 'var(--text-primary)' }}>Filed & Refund Tracked</h3>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>You receive ITR-V instantly. We track your refund until credited.</p>
        </div>
      </div>
    </section>
  );
};
