import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer style={{ padding: '80px 0 40px', borderTop: '1px solid var(--glass-border)', marginTop: 120, background: 'var(--glass-bg)' }}>
      <div className="container footer-grid">
        <div>
          <Link to="/" className="nav-logo" style={{ marginBottom: 24, textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img src="/logo_ct.jpg" alt="CimplyTax Logo" style={{ height: 40, width: 'auto', borderRadius: 8, marginRight: 12 }} />
            <div className="nav-logo-text">Cimply<em>Tax</em></div>
          </Link>
          <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.6, maxWidth: 300, marginBottom: 24 }}>
            India's AI-powered digital tax & compliance platform. Expert CA team, real-time tracking, serving Hyderabad & Pan-India.
          </p>
          <div style={{ fontSize: 14, color: 'var(--text-primary)', fontWeight: 600, marginBottom: 8 }}>📞 +91-9000292492</div>
          <div style={{ fontSize: 14, color: 'var(--text-primary)', fontWeight: 600, marginBottom: 8 }}>✉️ itr@cimplytax.com</div>
          <div style={{ fontSize: 14, color: 'var(--text-primary)', fontWeight: 600 }}>📍 Krishe Emerald, Kondapur,<br />Hyderabad, Telangana 500081, India</div>
        </div>

        <div>
          <h4 style={{ fontSize: 16, marginBottom: 20, color: 'var(--text-primary)' }}>Services</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <li><Link to="/services" style={{ color: 'var(--text-secondary)', fontSize: 14, textDecoration: 'none' }}>ITR Filing</Link></li>
            <li><Link to="/services" style={{ color: 'var(--text-secondary)', fontSize: 14, textDecoration: 'none' }}>GST Registration</Link></li>
            <li><Link to="/services" style={{ color: 'var(--text-secondary)', fontSize: 14, textDecoration: 'none' }}>Company Registration</Link></li>
            <li><Link to="/services" style={{ color: 'var(--text-secondary)', fontSize: 14, textDecoration: 'none' }}>NRI Returns</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: 16, marginBottom: 20, color: 'var(--text-primary)' }}>Company</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <li><Link to="/about" style={{ color: 'var(--text-secondary)', fontSize: 14, textDecoration: 'none' }}>About Us</Link></li>
            <li><Link to="/contact" style={{ color: 'var(--text-secondary)', fontSize: 14, textDecoration: 'none' }}>Contact</Link></li>
            <li><Link to="/careers" style={{ color: 'var(--text-secondary)', fontSize: 14, textDecoration: 'none' }}>Careers</Link></li>
            <li><Link to="/blog" style={{ color: 'var(--text-secondary)', fontSize: 14, textDecoration: 'none' }}>Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: 16, marginBottom: 20, color: 'var(--text-primary)' }}>Legal</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <li><Link to="/privacy" style={{ color: 'var(--text-secondary)', fontSize: 14, textDecoration: 'none' }}>Privacy Policy</Link></li>
            <li><Link to="/terms" style={{ color: 'var(--text-secondary)', fontSize: 14, textDecoration: 'none' }}>Terms of Service</Link></li>
            <li><Link to="/refund" style={{ color: 'var(--text-secondary)', fontSize: 14, textDecoration: 'none' }}>Refund Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="container" style={{ textAlign: 'center', paddingTop: 32, borderTop: '1px solid var(--glass-border)' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>
          © {new Date().getFullYear()} CimplyTax. All rights reserved. Made with ❤️ in India.
        </p>
      </div>
    </footer>
  );
};
