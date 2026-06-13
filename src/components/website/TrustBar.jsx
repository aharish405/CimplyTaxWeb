import React from 'react';

export const TrustBar = () => {
  return (
    <div className="trust-bar" style={{ padding: '24px 5%', borderBottom: '1px solid var(--glass-border)', background: 'var(--glass-bg)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <a href="#pricing" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>🧾 ITR Filing — Open Now</a>
          <a href="#pricing" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>📄 Salaried ITR</a>
          <a href="#pricing" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>💼 Business ITR</a>
          <a href="#pricing" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>📈 Capital Gains</a>
          <a href="#pricing" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>🌐 NRI Returns</a>
        </div>
        <div>
          <a href="#contact" className="liquid-glass" style={{ padding: '8px 16px', borderRadius: '8px', color: 'var(--text-primary)', fontWeight: 600, textDecoration: 'none' }}>
            📞 Free Expert Call
          </a>
        </div>
      </div>
    </div>
  );
};
