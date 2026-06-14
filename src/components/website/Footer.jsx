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
          <a href="tel:+919000292492" style={{ display: 'block', fontSize: 14, color: 'var(--text-primary)', fontWeight: 600, marginBottom: 8, textDecoration: 'none' }}>📞 +91-9000292492</a>
          <a href="mailto:itr@cimplytax.com" style={{ display: 'block', fontSize: 14, color: 'var(--text-primary)', fontWeight: 600, marginBottom: 8, textDecoration: 'none' }}>✉️ itr@cimplytax.com</a>
          <div style={{ fontSize: 14, color: 'var(--text-primary)', fontWeight: 600 }}>📍 Krishe Emerald, Kondapur,<br />Hyderabad, Telangana 500081, India</div>
        </div>

        <div>
          <h4 style={{ fontSize: 16, marginBottom: 20, color: 'var(--text-primary)' }}>Services</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <li><Link to="/services#itr-salaried" style={{ color: 'var(--text-secondary)', fontSize: 14, textDecoration: 'none' }}>ITR Filing</Link></li>
            <li><Link to="/services#gst-registration" style={{ color: 'var(--text-secondary)', fontSize: 14, textDecoration: 'none' }}>GST Registration</Link></li>
            <li><Link to="/services#pvt-ltd" style={{ color: 'var(--text-secondary)', fontSize: 14, textDecoration: 'none' }}>Company Registration</Link></li>
            <li><Link to="/services#nri-itr" style={{ color: 'var(--text-secondary)', fontSize: 14, textDecoration: 'none' }}>NRI Returns</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: 16, marginBottom: 20, color: 'var(--text-primary)' }}>Company</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <li><Link to="/about" style={{ color: 'var(--text-secondary)', fontSize: 14, textDecoration: 'none' }}>About Us</Link></li>
            <li><Link to="/contact" style={{ color: 'var(--text-secondary)', fontSize: 14, textDecoration: 'none' }}>Contact</Link></li>
            <li><Link to="/pricing" style={{ color: 'var(--text-secondary)', fontSize: 14, textDecoration: 'none' }}>Pricing</Link></li>
            <li><Link to="/faq" style={{ color: 'var(--text-secondary)', fontSize: 14, textDecoration: 'none' }}>FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: 16, marginBottom: 20, color: 'var(--text-primary)' }}>Legal</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <li><a href="mailto:itr@cimplytax.com?subject=Privacy%20Policy%20Enquiry" style={{ color: 'var(--text-secondary)', fontSize: 14, textDecoration: 'none' }}>Privacy Policy</a></li>
            <li><a href="mailto:itr@cimplytax.com?subject=Terms%20of%20Service%20Enquiry" style={{ color: 'var(--text-secondary)', fontSize: 14, textDecoration: 'none' }}>Terms of Service</a></li>
            <li><a href="mailto:itr@cimplytax.com?subject=Refund%20Policy%20Enquiry" style={{ color: 'var(--text-secondary)', fontSize: 14, textDecoration: 'none' }}>Refund Policy</a></li>
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
