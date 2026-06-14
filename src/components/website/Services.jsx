import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ServiceModal } from './ServiceModal';
import { useLocation } from 'react-router-dom';

export const Services = () => {
  const [activeModal, setActiveModal] = useState(null);
  const { hash } = useLocation();
  const highlightId = hash.replace('#', '');

  const ServiceCard = ({ icon, title, desc, delay, id }) => {
    const isHighlighted = !!(id && highlightId === id);
    return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className={`liquid-glass svc-card${isHighlighted ? ' svc-card-highlight' : ''}`}
      style={{ padding: '32px', display: 'flex', flexDirection: 'column', height: '100%', borderRadius: 16 }}
    >
      <div className="svg-icon-box" style={{ marginBottom: 24, fontSize: 24 }}>
        {icon}
      </div>
      <h3 style={{ fontSize: '1.2rem', marginBottom: 12 }}>{title}</h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.6, marginBottom: 24, flex: 1 }}>{desc}</p>
      <button 
        onClick={() => setActiveModal(title)}
        style={{ background: 'none', border: 'none', color: 'var(--primary)', fontWeight: 600, fontSize: 13, display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer', padding: 0 }}
      >
        View Checklist & Get Started <ArrowRight size={14} />
      </button>
    </motion.div>
    );
  };

  return (
    <section id="services" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Income Tax Section */}
        <div id="income-tax" style={{ marginBottom: 80 }}>
          <div style={{ textAlign: 'center', marginBottom: 50 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', background: 'var(--primary-transparent)', border: '1px solid var(--primary)', borderRadius: 20, color: 'var(--primary)', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>
              Income Tax Services
            </div>
            <h2 className="serif" style={{ fontSize: '2.4rem' }}>Filing & Compliance</h2>
          </div>

          <div className="grid-3">
            <ServiceCard
              id="itr-salaried"
              icon="📄"
              title="ITR Filing – Salaried Individuals"
              desc="CA-assisted filing for Form 16, capital gains, and multiple incomes. Maximum refund guaranteed."
              delay={0}
            />
            <ServiceCard
              id="itr-business"
              icon="💼"
              title="ITR Filing – Business & Firms"
              desc="Comprehensive ITR-3/ITR-4 filing including P&L, balance sheet and tax audit support."
              delay={0.1}
            />
            <ServiceCard
              id="tds-filing"
              icon="⏰"
              title="TDS Return Filing"
              desc="Accurate 24Q and 26Q quarterly returns with timely payment and challan generation."
              delay={0.2}
            />
            <ServiceCard
              id="advance-tax"
              icon="💳"
              title="Advance Tax Planning"
              desc="Avoid 234B/C interest with accurate quarterly advance tax computation and reminders."
              delay={0.3}
            />
            <ServiceCard
              id="it-notices"
              icon="⚖️"
              title="Income Tax Notices & Appeals"
              desc="Expert drafting of replies for defective returns, scrutiny notices, and ITAT appeals."
              delay={0.4}
            />
            <ServiceCard
              id="nri-itr"
              icon="🌐"
              title="NRI Tax Return Filing"
              desc="FEMA-compliant ITR filing with DTAA relief, Form 67, and foreign asset disclosure."
              delay={0.5}
            />
          </div>
        </div>

        {/* GST Section */}
        <div id="gst" style={{ marginBottom: 80 }}>
          <div style={{ textAlign: 'center', marginBottom: 50 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', background: 'var(--primary-transparent)', border: '1px solid var(--primary)', borderRadius: 20, color: 'var(--primary)', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>
              Indirect Tax
            </div>
            <h2 className="serif" style={{ fontSize: '2.4rem' }}>GST Services</h2>
          </div>

          <div className="grid-3">
            <ServiceCard
              id="gst-registration"
              icon="🔖"
              title="GST Registration"
              desc="End-to-end GSTIN acquisition within 7 working days, including address verification support."
              delay={0}
            />
            <ServiceCard
              id="gst-returns"
              icon="📅"
              title="GSTR-1 & GSTR-3B Filing"
              desc="Monthly/quarterly automated filing with zero errors and real-time ledger updates."
              delay={0.1}
            />
            <ServiceCard
              id="gst-annual"
              icon="📆"
              title="GST Annual Return (GSTR-9)"
              desc="Comprehensive year-end reconciliation and GSTR-9C audit certification."
              delay={0.2}
            />
            <ServiceCard
              id="gst-itc"
              icon="💰"
              title="Input Tax Credit (ITC)"
              desc="GSTR-2B matching and vendor reconciliation to ensure you never lose legitimate ITC."
              delay={0.3}
            />
            <ServiceCard
              id="gst-audit"
              icon="🔍"
              title="GST Audit & Assessment"
              desc="Professional representation before GST officers during departmental audits."
              delay={0.4}
            />
            <ServiceCard
              id="gst-notice"
              icon="📩"
              title="GST Notice Reply & Refund"
              desc="Claim processing for inverted duty structure and expert handling of ASMT-10 notices."
              delay={0.5}
            />
          </div>
        </div>

        {/* Corporate Section */}
        <div id="corporate" style={{ marginBottom: 80 }}>
          <div style={{ textAlign: 'center', marginBottom: 50 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', background: 'var(--primary-transparent)', border: '1px solid var(--primary)', borderRadius: 20, color: 'var(--primary)', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>
              Business & Legal
            </div>
            <h2 className="serif" style={{ fontSize: '2.4rem' }}>Corporate Services</h2>
          </div>

          <div className="grid-3">
            <ServiceCard
              id="pvt-ltd"
              icon="🏢"
              title="Private Limited Company"
              desc="Complete incorporation package including DIN, DSC, MOA/AOA, and PAN/TAN."
              delay={0}
            />
            <ServiceCard
              id="llp-opc"
              icon="🤝"
              title="LLP & OPC Registration"
              desc="Structuring advisory and fast-track registration for Limited Liability Partnerships."
              delay={0.1}
            />
            <ServiceCard
              id="roc-compliance"
              icon="📑"
              title="Annual ROC Compliance"
              desc="Filing of AOC-4, MGT-7, and Director KYC to keep your company fully MCA compliant."
              delay={0.2}
            />
            <ServiceCard
              id="accounting"
              icon="📊"
              title="Accounting & Bookkeeping"
              desc="Cloud-based monthly bookkeeping, payroll, and MIS reporting for your business."
              delay={0.3}
            />
            <ServiceCard
              id="msme-startup"
              icon="📋"
              title="MSME & Startup India"
              desc="Udyam registration and DPIIT recognition to unlock government subsidies and tax holidays."
              delay={0.4}
            />
            <ServiceCard
              id="iec-trade"
              icon="🌍"
              title="IEC & Trade Registrations"
              desc="Import Export Code (IEC), Trade Licences, and Shop Act registrations."
              delay={0.5}
            />
          </div>
        </div>

        {/* Other Services */}
        <div id="other">
          <div style={{ textAlign: 'center', marginBottom: 50 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', background: 'var(--primary-transparent)', border: '1px solid var(--primary)', borderRadius: 20, color: 'var(--primary)', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>
              Advisory
            </div>
            <h2 className="serif" style={{ fontSize: '2.4rem' }}>Other Services</h2>
          </div>

          <div className="grid-3">
            <ServiceCard
              id="property-tax"
              icon="🏠"
              title="Property & Rental Compliance"
              desc="Form 26QB filing, rental income structuring, and capital gains advisory."
              delay={0}
            />
            <ServiceCard
              id="pan-tan"
              icon="📜"
              title="PAN & TAN Services"
              desc="New applications, corrections, and duplicate card issuance for individuals and entities."
              delay={0.1}
            />
            <ServiceCard
              id="nri-fema"
              icon="🌐"
              title="NRI & FEMA Advisory"
              desc="Remittance advisory, 15CA/CB issuance, and RBI compliance for NRIs."
              delay={0.2}
            />
            <ServiceCard
              id="payroll"
              icon="📦"
              title="Payroll Services"
              desc="Complete HR compliance including PF, ESI, PT, and monthly payslip generation."
              delay={0.3}
            />
            <ServiceCard
              id="investment"
              icon="🛡️"
              title="Investment & Tax Planning"
              desc="Personalized advisory to maximize 80C/80D/NPS benefits tailored to your tax bracket."
              delay={0.4}
            />
            <ServiceCard
              id="loan-report"
              icon="📝"
              title="Loan & Project Reports"
              desc="CMA data preparation and detailed project reports for bank loans and funding."
              delay={0.5}
            />
          </div>
        </div>

      </div>

      <ServiceModal 
        isOpen={!!activeModal} 
        onClose={() => setActiveModal(null)} 
        serviceKey={activeModal} 
      />
    </section>
  );
};
