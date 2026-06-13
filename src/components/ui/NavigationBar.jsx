import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeSelector } from './ThemeSelector';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

export const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenSubMenu(null);
  }, [location.pathname]);

  const toggleSubMenu = (menuName) => {
    setOpenSubMenu(openSubMenu === menuName ? null : menuName);
  };

  return (
    <header className={`nav-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo" style={{ textDecoration: 'none' }}>
          <img src="/logo_ct.jpg" alt="CimplyTax Logo" style={{ height: 40, width: 'auto', borderRadius: 8, marginRight: 12 }} />
          <div className="nav-logo-text">Cimply<em style={{ color: 'var(--primary)' }}>Tax</em></div>
        </Link>

        {/* Mobile Menu Toggle - Only visible on mobile */}
        <div className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
        
        <div className={`nav-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li className={`nav-item ${openSubMenu === 'incomeTax' ? 'mobile-open' : ''}`}>
              <div className="nav-link" onClick={() => toggleSubMenu('incomeTax')}>
                Income Tax <span className="nav-arrow">{openSubMenu === 'incomeTax' ? <ChevronUp size={16}/> : <ChevronDown size={16}/>}</span>
              </div>
              <div className="mega-menu liquid-glass-heavy">
                <div className="mega-col">
                  <div className="mega-col-title">ITR Filing</div>
                  <Link to="/services" className="dropdown-item"><span className="d-icon">📄</span> ITR for Salaried</Link>
                  <Link to="/services" className="dropdown-item"><span className="d-icon">💼</span> ITR for Business</Link>
                  <Link to="/services" className="dropdown-item"><span className="d-icon">🏗️</span> ITR for Professionals</Link>
                  <Link to="/services" className="dropdown-item"><span className="d-icon">🌐</span> NRI Tax Return</Link>
                </div>
                <div className="mega-col">
                  <div className="mega-col-title">TDS & Advance Tax</div>
                  <Link to="/services" className="dropdown-item"><span className="d-icon">⏰</span> TDS Return Filing</Link>
                  <Link to="/services" className="dropdown-item"><span className="d-icon">💳</span> Advance Tax Payment</Link>
                  <Link to="/services" className="dropdown-item"><span className="d-icon">📋</span> Form 15CA / 15CB</Link>
                </div>
                <div className="mega-col">
                  <div className="mega-col-title">Notices & Planning</div>
                  <Link to="/services" className="dropdown-item"><span className="d-icon">⚖️</span> IT Notice Reply</Link>
                  <Link to="/services" className="dropdown-item"><span className="d-icon">🔍</span> Scrutiny Assessment</Link>
                  <Link to="/services" className="dropdown-item"><span className="d-icon">📊</span> Tax Planning</Link>
                  <Link to="/services" className="dropdown-item" style={{ borderTop: '1px solid var(--glass-border)', marginTop: 6, paddingTop: 10, color: 'var(--primary)', fontWeight: 600 }}><span className="d-icon">🧮</span> Income Tax Calculator</Link>
                </div>
              </div>
            </li>

            <li className={`nav-item ${openSubMenu === 'gst' ? 'mobile-open' : ''}`}>
              <div className="nav-link" onClick={() => toggleSubMenu('gst')}>
                GST <span className="nav-arrow">{openSubMenu === 'gst' ? <ChevronUp size={16}/> : <ChevronDown size={16}/>}</span>
              </div>
              <div className="mega-menu liquid-glass-heavy">
                <div className="mega-col">
                  <div className="mega-col-title">Registration</div>
                  <Link to="/services" className="dropdown-item"><span className="d-icon">🔖</span> GST Registration</Link>
                  <Link to="/services" className="dropdown-item"><span className="d-icon">✏️</span> GST Amendment</Link>
                  <Link to="/services" className="dropdown-item"><span className="d-icon">❌</span> GST Cancellation</Link>
                  <Link to="/services" className="dropdown-item"><span className="d-icon">🔄</span> GST Revocation</Link>
                </div>
                <div className="mega-col">
                  <div className="mega-col-title">Return Filing</div>
                  <Link to="/services" className="dropdown-item"><span className="d-icon">📅</span> GSTR-1 Filing</Link>
                  <Link to="/services" className="dropdown-item"><span className="d-icon">🗓️</span> GSTR-3B Filing</Link>
                  <Link to="/services" className="dropdown-item"><span className="d-icon">📆</span> GSTR-9 Annual</Link>
                  <Link to="/services" className="dropdown-item"><span className="d-icon">💰</span> ITC Reconciliation</Link>
                </div>
                <div className="mega-col">
                  <div className="mega-col-title">Audit & Support</div>
                  <Link to="/services" className="dropdown-item"><span className="d-icon">🔍</span> GST Audit</Link>
                  <Link to="/services" className="dropdown-item"><span className="d-icon">📩</span> GST Notice Reply</Link>
                  <Link to="/services" className="dropdown-item"><span className="d-icon">🚚</span> E-Way Bill</Link>
                  <Link to="/services" className="dropdown-item"><span className="d-icon">💸</span> GST Refund</Link>
                </div>
              </div>
            </li>

            <li className={`nav-item ${openSubMenu === 'corporate' ? 'mobile-open' : ''}`}>
              <div className="nav-link" onClick={() => toggleSubMenu('corporate')}>
                Corporate <span className="nav-arrow">{openSubMenu === 'corporate' ? <ChevronUp size={16}/> : <ChevronDown size={16}/>}</span>
              </div>
              <div className="mega-menu liquid-glass-heavy">
                <div className="mega-col">
                  <div className="mega-col-title">Company Formation</div>
                  <Link to="/services" className="dropdown-item"><span className="d-icon">🏢</span> Private Limited Co.</Link>
                  <Link to="/services" className="dropdown-item"><span className="d-icon">🤝</span> LLP Registration</Link>
                  <Link to="/services" className="dropdown-item"><span className="d-icon">👤</span> One Person Company</Link>
                  <Link to="/services" className="dropdown-item"><span className="d-icon">🌱</span> Startup India</Link>
                </div>
                <div className="mega-col">
                  <div className="mega-col-title">Compliance</div>
                  <Link to="/services" className="dropdown-item"><span className="d-icon">📑</span> Annual ROC Filing</Link>
                  <Link to="/services" className="dropdown-item"><span className="d-icon">🪪</span> Director KYC</Link>
                  <Link to="/services" className="dropdown-item"><span className="d-icon">📊</span> Accounting & Books</Link>
                  <Link to="/services" className="dropdown-item"><span className="d-icon">📋</span> MSME Registration</Link>
                </div>
                <div className="mega-col">
                  <div className="mega-col-title">Other Registrations</div>
                  <Link to="/services" className="dropdown-item"><span className="d-icon">🌍</span> Import Export Code</Link>
                  <Link to="/services" className="dropdown-item"><span className="d-icon">🏬</span> Trade Licence</Link>
                  <Link to="/services" className="dropdown-item"><span className="d-icon">™️</span> Trademark Filing</Link>
                </div>
              </div>
            </li>

            <li className={`nav-item ${openSubMenu === 'other' ? 'mobile-open' : ''}`}>
              <div className="nav-link" onClick={() => toggleSubMenu('other')}>
                Other Services <span className="nav-arrow">{openSubMenu === 'other' ? <ChevronUp size={16}/> : <ChevronDown size={16}/>}</span>
              </div>
              <div className="dropdown-menu liquid-glass-heavy">
                <Link to="/services" className="dropdown-item"><span className="d-icon">🏠</span> Property Tax Advisory</Link>
                <Link to="/services" className="dropdown-item"><span className="d-icon">📜</span> PAN / TAN Services</Link>
                <Link to="/services" className="dropdown-item"><span className="d-icon">🌐</span> NRI / FEMA Advisory</Link>
                <Link to="/services" className="dropdown-item"><span className="d-icon">🛡️</span> Investment Advisory</Link>
                <Link to="/services" className="dropdown-item"><span className="d-icon">📝</span> Loan Documentation</Link>
                <Link to="/services" className="dropdown-item"><span className="d-icon">📦</span> Payroll Services</Link>
              </div>
            </li>

            <li className="nav-item"><Link to="/pricing" className={`nav-link ${location.pathname === '/pricing' ? 'active' : ''}`}>Pricing</Link></li>
            <li className="nav-item"><Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link></li>
            
            {/* Mobile Actions inside menu */}
            <li className="nav-item mobile-only-actions" style={{ padding: '24px 0', borderTop: '1px solid var(--glass-border)', marginTop: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <ThemeSelector />
                <Link to="/portal" className="nav-cta liquid-glass" style={{ padding: '8px 16px', borderRadius: '8px', color: '#fff', fontWeight: 600, textDecoration: 'none' }}>
                  🚀 Client Portal
                </Link>
              </div>
            </li>
          </ul>
        </div>

        {/* Desktop Right Side */}
        <div className="nav-desktop-actions" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <ThemeSelector />
          <Link to="/portal" className="nav-cta liquid-glass" style={{ padding: '8px 16px', borderRadius: '8px', color: '#fff', fontWeight: 600, textDecoration: 'none' }}>
            🚀 Client Portal
          </Link>
        </div>
      </div>
    </header>
  );
};
