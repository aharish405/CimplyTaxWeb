import React from 'react';
import { Link } from 'react-router-dom';

export const TrustBar = () => {
  return (
    <div style={{ padding: '16px 0', borderBottom: '1px solid var(--glass-border)', background: 'var(--bg-color)', zIndex: 10 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13, gap: 16 }}>
        <div className="hide-scrollbar" style={{ display: 'flex', gap: 24, alignItems: 'center', overflowX: 'auto', whiteSpace: 'nowrap', paddingBottom: 4 }}>
          <Link to="/pricing" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>🧾 ITR Filing — Open Now</Link>
          <Link to="/services#itr-salaried" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>📄 Salaried ITR</Link>
          <Link to="/services#itr-business" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>💼 Business ITR</Link>
          <Link to="/services#itr-salaried" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>📈 Capital Gains</Link>
          <Link to="/services#nri-itr" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>🌐 NRI Returns</Link>
        </div>
        <div>
          <Link to="/contact" className="liquid-glass" style={{ padding: '8px 16px', borderRadius: '8px', color: 'var(--text-primary)', fontWeight: 600, textDecoration: 'none' }}>
            💬 Chat with CA
          </Link>
        </div>
      </div>
    </div>
  );
};
