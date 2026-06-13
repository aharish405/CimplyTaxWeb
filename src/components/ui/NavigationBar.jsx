import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeSelector } from './ThemeSelector';
import { Menu, X, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';

export const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [activePanel, setActivePanel] = useState(null); // Mobile redesigned panel selector
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
    setActivePanel(null);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  // Reset overlay scroll position when switching mobile panels
  useEffect(() => {
    const overlay = document.querySelector('.nav-overlay');
    if (overlay) {
      overlay.scrollTop = 0;
    }
  }, [activePanel, isMobileMenuOpen]);

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
          
          {/* DESKTOP NAVIGATION (Hidden on mobile) */}
          <ul className="nav-links desktop-only-nav">
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
            <li className="nav-item mobile-only-actions">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <ThemeSelector />
                <Link to="/portal" className="nav-cta liquid-glass">
                  🚀 Client Portal
                </Link>
              </div>
            </li>
          </ul>

          {/* MOBILE NAVIGATION (Hidden on desktop) */}
          <div className="mobile-only-nav">
            <div className={`nav-slider-wrapper ${activePanel ? 'slide-active' : ''}`}>
              
              {/* PANEL 1: Main Panel */}
              <div className="nav-main-panel">
                <div className="category-grid">
                  
                  {/* Category Card: Income Tax */}
                  <div className="category-card" onClick={() => setActivePanel('incomeTax')}>
                    <div className="category-badge badge-purple">💵</div>
                    <div className="category-title">Income Tax</div>
                    <div className="category-subtitle">ITR, TDS, Notices & Tax Planning</div>
                  </div>

                  {/* Category Card: GST */}
                  <div className="category-card" onClick={() => setActivePanel('gst')}>
                    <div className="category-badge badge-blue">📊</div>
                    <div className="category-title">GST Services</div>
                    <div className="category-subtitle">Registration, Returns & Reconciliation</div>
                  </div>

                  {/* Category Card: Corporate */}
                  <div className="category-card" onClick={() => setActivePanel('corporate')}>
                    <div className="category-badge badge-green">🏢</div>
                    <div className="category-title">Corporate</div>
                    <div className="category-subtitle">Company/LLP Incorporation & Compliance</div>
                  </div>

                  {/* Category Card: Other Services */}
                  <div className="category-card" onClick={() => setActivePanel('other')}>
                    <div className="category-badge badge-amber">🛠️</div>
                    <div className="category-title">Other Services</div>
                    <div className="category-subtitle">Property, PAN, NRI & Advisory</div>
                  </div>

                </div>

                {/* Regular Menu Links */}
                <div className="nav-links-simple">
                  <Link to="/pricing" className="nav-link-simple-item">
                    <span>Pricing Plans</span>
                    <span className="mobile-service-item-arrow">→</span>
                  </Link>
                  <Link to="/contact" className="nav-link-simple-item">
                    <span>Contact Us</span>
                    <span className="mobile-service-item-arrow">→</span>
                  </Link>
                </div>

                {/* Bottom Actions Bar */}
                <div className="mobile-bottom-bar">
                  <ThemeSelector />
                  <Link to="/portal" className="nav-cta liquid-glass" style={{ margin: 0 }}>
                    🚀 Client Portal
                  </Link>
                </div>
              </div>

              {/* PANEL 2: Sub-category Panel */}
              <div className="nav-sub-panel">
                <button className="sub-panel-back-btn" onClick={() => setActivePanel(null)}>
                  <ArrowLeft size={16} /> Back to Menu
                </button>

                {activePanel === 'incomeTax' && (
                  <div>
                    <div className="sub-panel-title">Income Tax Services</div>
                    
                    <div className="mobile-service-group">
                      <div className="mobile-service-group-title">ITR Filing</div>
                      <div className="mobile-service-list">
                        <Link to="/services" className="mobile-service-item"><div className="mobile-service-item-left"><span className="mobile-service-item-icon">📄</span><span className="mobile-service-item-name">ITR for Salaried</span></div><span className="mobile-service-item-arrow">→</span></Link>
                        <Link to="/services" className="mobile-service-item"><div className="mobile-service-item-left"><span className="mobile-service-item-icon">💼</span><span className="mobile-service-item-name">ITR for Business</span></div><span className="mobile-service-item-arrow">→</span></Link>
                        <Link to="/services" className="mobile-service-item"><div className="mobile-service-item-left"><span className="mobile-service-item-icon">🏗️</span><span className="mobile-service-item-name">ITR for Professionals</span></div><span className="mobile-service-item-arrow">→</span></Link>
                        <Link to="/services" className="mobile-service-item"><div className="mobile-service-item-left"><span className="mobile-service-item-icon">🌐</span><span className="mobile-service-item-name">NRI Tax Return</span></div><span className="mobile-service-item-arrow">→</span></Link>
                      </div>
                    </div>

                    <div className="mobile-service-group">
                      <div className="mobile-service-group-title">TDS & Advance Tax</div>
                      <div className="mobile-service-list">
                        <Link to="/services" className="mobile-service-item"><div className="mobile-service-item-left"><span className="mobile-service-item-icon">⏰</span><span className="mobile-service-item-name">TDS Return Filing</span></div><span className="mobile-service-item-arrow">→</span></Link>
                        <Link to="/services" className="mobile-service-item"><div className="mobile-service-item-left"><span className="mobile-service-item-icon">💳</span><span className="mobile-service-item-name">Advance Tax Payment</span></div><span className="mobile-service-item-arrow">→</span></Link>
                        <Link to="/services" className="mobile-service-item"><div className="mobile-service-item-left"><span className="mobile-service-item-icon">📋</span><span className="mobile-service-item-name">Form 15CA / 15CB</span></div><span className="mobile-service-item-arrow">→</span></Link>
                      </div>
                    </div>

                    <div className="mobile-service-group">
                      <div className="mobile-service-group-title">Notices & Planning</div>
                      <div className="mobile-service-list">
                        <Link to="/services" className="mobile-service-item"><div className="mobile-service-item-left"><span className="mobile-service-item-icon">⚖️</span><span className="mobile-service-item-name">IT Notice Reply</span></div><span className="mobile-service-item-arrow">→</span></Link>
                        <Link to="/services" className="mobile-service-item"><div className="mobile-service-item-left"><span className="mobile-service-item-icon">🔍</span><span className="mobile-service-item-name">Scrutiny Assessment</span></div><span className="mobile-service-item-arrow">→</span></Link>
                        <Link to="/services" className="mobile-service-item"><div className="mobile-service-item-left"><span className="mobile-service-item-icon">📊</span><span className="mobile-service-item-name">Tax Planning</span></div><span className="mobile-service-item-arrow">→</span></Link>
                        <Link to="/services" className="mobile-service-item" style={{ borderLeft: '3px solid var(--primary)' }}><div className="mobile-service-item-left"><span className="mobile-service-item-icon">🧮</span><span className="mobile-service-item-name" style={{ color: 'var(--primary)', fontWeight: 600 }}>Income Tax Calculator</span></div><span className="mobile-service-item-arrow">→</span></Link>
                      </div>
                    </div>
                  </div>
                )}

                {activePanel === 'gst' && (
                  <div>
                    <div className="sub-panel-title">GST Services</div>
                    
                    <div className="mobile-service-group">
                      <div className="mobile-service-group-title">Registration & Mod</div>
                      <div className="mobile-service-list">
                        <Link to="/services" className="mobile-service-item"><div className="mobile-service-item-left"><span className="mobile-service-item-icon">🔖</span><span className="mobile-service-item-name">GST Registration</span></div><span className="mobile-service-item-arrow">→</span></Link>
                        <Link to="/services" className="mobile-service-item"><div className="mobile-service-item-left"><span className="mobile-service-item-icon">✏️</span><span className="mobile-service-item-name">GST Amendment</span></div><span className="mobile-service-item-arrow">→</span></Link>
                        <Link to="/services" className="mobile-service-item"><div className="mobile-service-item-left"><span className="mobile-service-item-icon">❌</span><span className="mobile-service-item-name">GST Cancellation</span></div><span className="mobile-service-item-arrow">→</span></Link>
                        <Link to="/services" className="mobile-service-item"><div className="mobile-service-item-left"><span className="mobile-service-item-icon">🔄</span><span className="mobile-service-item-name">GST Revocation</span></div><span className="mobile-service-item-arrow">→</span></Link>
                      </div>
                    </div>

                    <div className="mobile-service-group">
                      <div className="mobile-service-group-title">Return Filing</div>
                      <div className="mobile-service-list">
                        <Link to="/services" className="mobile-service-item"><div className="mobile-service-item-left"><span className="mobile-service-item-icon">📅</span><span className="mobile-service-item-name">GSTR-1 Filing</span></div><span className="mobile-service-item-arrow">→</span></Link>
                        <Link to="/services" className="mobile-service-item"><div className="mobile-service-item-left"><span className="mobile-service-item-icon">🗓️</span><span className="mobile-service-item-name">GSTR-3B Filing</span></div><span className="mobile-service-item-arrow">→</span></Link>
                        <Link to="/services" className="mobile-service-item"><div className="mobile-service-item-left"><span className="mobile-service-item-icon">📆</span><span className="mobile-service-item-name">GSTR-9 Annual</span></div><span className="mobile-service-item-arrow">→</span></Link>
                        <Link to="/services" className="mobile-service-item"><div className="mobile-service-item-left"><span className="mobile-service-item-icon">💰</span><span className="mobile-service-item-name">ITC Reconciliation</span></div><span className="mobile-service-item-arrow">→</span></Link>
                      </div>
                    </div>

                    <div className="mobile-service-group">
                      <div className="mobile-service-group-title">Audit & Claims</div>
                      <div className="mobile-service-list">
                        <Link to="/services" className="mobile-service-item"><div className="mobile-service-item-left"><span className="mobile-service-item-icon">🔍</span><span className="mobile-service-item-name">GST Audit</span></div><span className="mobile-service-item-arrow">→</span></Link>
                        <Link to="/services" className="mobile-service-item"><div className="mobile-service-item-left"><span className="mobile-service-item-icon">📩</span><span className="mobile-service-item-name">GST Notice Reply</span></div><span className="mobile-service-item-arrow">→</span></Link>
                        <Link to="/services" className="mobile-service-item"><div className="mobile-service-item-left"><span className="mobile-service-item-icon">🚚</span><span className="mobile-service-item-name">E-Way Bill</span></div><span className="mobile-service-item-arrow">→</span></Link>
                        <Link to="/services" className="mobile-service-item"><div className="mobile-service-item-left"><span className="mobile-service-item-icon">💸</span><span className="mobile-service-item-name">GST Refund</span></div><span className="mobile-service-item-arrow">→</span></Link>
                      </div>
                    </div>
                  </div>
                )}

                {activePanel === 'corporate' && (
                  <div>
                    <div className="sub-panel-title">Corporate Services</div>
                    
                    <div className="mobile-service-group">
                      <div className="mobile-service-group-title">Incorporation</div>
                      <div className="mobile-service-list">
                        <Link to="/services" className="mobile-service-item"><div className="mobile-service-item-left"><span className="mobile-service-item-icon">🏢</span><span className="mobile-service-item-name">Private Limited Co.</span></div><span className="mobile-service-item-arrow">→</span></Link>
                        <Link to="/services" className="mobile-service-item"><div className="mobile-service-item-left"><span className="mobile-service-item-icon">🤝</span><span className="mobile-service-item-name">LLP Registration</span></div><span className="mobile-service-item-arrow">→</span></Link>
                        <Link to="/services" className="mobile-service-item"><div className="mobile-service-item-left"><span className="mobile-service-item-icon">👤</span><span className="mobile-service-item-name">One Person Company</span></div><span className="mobile-service-item-arrow">→</span></Link>
                        <Link to="/services" className="mobile-service-item"><div className="mobile-service-item-left"><span className="mobile-service-item-icon">🌱</span><span className="mobile-service-item-name">Startup India</span></div><span className="mobile-service-item-arrow">→</span></Link>
                      </div>
                    </div>

                    <div className="mobile-service-group">
                      <div className="mobile-service-group-title">ROC & Compliance</div>
                      <div className="mobile-service-list">
                        <Link to="/services" className="mobile-service-item"><div className="mobile-service-item-left"><span className="mobile-service-item-icon">📑</span><span className="mobile-service-item-name">Annual ROC Filing</span></div><span className="mobile-service-item-arrow">→</span></Link>
                        <Link to="/services" className="mobile-service-item"><div className="mobile-service-item-left"><span className="mobile-service-item-icon">🪪</span><span className="mobile-service-item-name">Director KYC</span></div><span className="mobile-service-item-arrow">→</span></Link>
                        <Link to="/services" className="mobile-service-item"><div className="mobile-service-item-left"><span className="mobile-service-item-icon">📊</span><span className="mobile-service-item-name">Accounting & Books</span></div><span className="mobile-service-item-arrow">→</span></Link>
                        <Link to="/services" className="mobile-service-item"><div className="mobile-service-item-left"><span className="mobile-service-item-icon">📋</span><span className="mobile-service-item-name">MSME Registration</span></div><span className="mobile-service-item-arrow">→</span></Link>
                      </div>
                    </div>

                    <div className="mobile-service-group">
                      <div className="mobile-service-group-title">Licenses & IP</div>
                      <div className="mobile-service-list">
                        <Link to="/services" className="mobile-service-item"><div className="mobile-service-item-left"><span className="mobile-service-item-icon">🌍</span><span className="mobile-service-item-name">Import Export Code</span></div><span className="mobile-service-item-arrow">→</span></Link>
                        <Link to="/services" className="mobile-service-item"><div className="mobile-service-item-left"><span className="mobile-service-item-icon">🏬</span><span className="mobile-service-item-name">Trade Licence</span></div><span className="mobile-service-item-arrow">→</span></Link>
                        <Link to="/services" className="mobile-service-item"><div className="mobile-service-item-left"><span className="mobile-service-item-icon">™️</span><span className="mobile-service-item-name">Trademark Filing</span></div><span className="mobile-service-item-arrow">→</span></Link>
                      </div>
                    </div>
                  </div>
                )}

                {activePanel === 'other' && (
                  <div>
                    <div className="sub-panel-title">Other Services</div>
                    
                    <div className="mobile-service-group">
                      <div className="mobile-service-group-title">All Services</div>
                      <div className="mobile-service-list">
                        <Link to="/services" className="mobile-service-item"><div className="mobile-service-item-left"><span className="mobile-service-item-icon">🏠</span><span className="mobile-service-item-name">Property Tax Advisory</span></div><span className="mobile-service-item-arrow">→</span></Link>
                        <Link to="/services" className="mobile-service-item"><div className="mobile-service-item-left"><span className="mobile-service-item-icon">📜</span><span className="mobile-service-item-name">PAN / TAN Services</span></div><span className="mobile-service-item-arrow">→</span></Link>
                        <Link to="/services" className="mobile-service-item"><div className="mobile-service-item-left"><span className="mobile-service-item-icon">🌐</span><span className="mobile-service-item-name">NRI / FEMA Advisory</span></div><span className="mobile-service-item-arrow">→</span></Link>
                        <Link to="/services" className="mobile-service-item"><div className="mobile-service-item-left"><span className="mobile-service-item-icon">🛡️</span><span className="mobile-service-item-name">Investment Advisory</span></div><span className="mobile-service-item-arrow">→</span></Link>
                        <Link to="/services" className="mobile-service-item"><div className="mobile-service-item-left"><span className="mobile-service-item-icon">📝</span><span className="mobile-service-item-name">Loan Documentation</span></div><span className="mobile-service-item-arrow">→</span></Link>
                        <Link to="/services" className="mobile-service-item"><div className="mobile-service-item-left"><span className="mobile-service-item-icon">📦</span><span className="mobile-service-item-name">Payroll Services</span></div><span className="mobile-service-item-arrow">→</span></Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>

        {/* Desktop Right Side */}
        <div className="nav-desktop-actions">
          <ThemeSelector />
          <Link to="/portal" className="nav-cta liquid-glass">
            🚀 Client Portal
          </Link>
        </div>
      </div>
    </header>
  );
};
