import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { CheckCircle } from 'lucide-react';

const PLANS = {
  itr: [
    {
      id: 'basic', label: 'BASIC', name: 'Basic', desc: 'Ideal for salaried individuals with simple income from one employer.', price: '1,999', per: '/filing', popular: false,
      features: [
        'ITR-1 (Sahaj) Filing', 'Salary income up to 1 employer', 'Standard deduction & 80C', 'Form 26AS reconciliation', 'E-filing & acknowledgment', 'Email support'
      ]
    },
    {
      id: 'premium', label: 'PREMIUM', name: 'Premium', desc: 'For salaried professionals with multiple income sources or capital gains.', price: '2,999', per: '/filing', popular: true, badge: 'MOST POPULAR',
      features: [
        'ITR-1 / ITR-2 Filing', 'Multiple employers or Form 16s', 'Capital gains (equity & MF)', 'House property income', 'All deductions (80C–80U)', 'Phone & WhatsApp support'
      ]
    },
    {
      id: 'elite', label: 'ELITE', name: 'Elite', desc: 'For freelancers, consultants, and self-employed professionals with business income.', price: '5,999', per: '/filing', popular: false,
      features: [
        'ITR-3 / ITR-4 Filing', 'Business & professional income', 'Presumptive taxation (44AD/44ADA)', 'P&L & balance sheet preparation', 'Advance tax computation', 'Dedicated CA support'
      ]
    },
    {
      id: 'luxe', label: 'LUXE', name: 'Luxe', desc: 'Comprehensive ITR & tax planning for HNIs, business owners, and complex portfolios.', price: '19,999', per: '/filing', popular: false,
      features: [
        'All ITR forms including audit cases', 'Section 44AB tax audit support', 'Capital gains optimisation', 'Foreign income & DTAA advisory', 'Year-round tax planning', 'Priority relationship manager'
      ]
    }
  ],
  gst: [
    {
      id: 'starter', label: 'Starter', name: 'GST Registration', desc: 'New GST registration for businesses, shops, and professionals', price: '3,999', note: 'One-time · Government fee extra if any', popular: false,
      features: [
        'New GST registration', 'Document verification', 'Application filing', 'GSTIN in 7 working days', 'Post-registration guidance'
      ]
    },
    {
      id: 'monthly', label: 'Monthly', name: 'GST Return Filing', desc: 'Monthly GSTR-1 + GSTR-3B filing for regular businesses', price: '1,999', note: 'Per month · GSTR-9 at ₹2,999 extra', popular: true, badge: 'BEST VALUE',
      features: [
        'GSTR-1 filing (monthly)', 'GSTR-3B filing (monthly)', 'ITC reconciliation', 'Deadline tracking & reminders', 'WhatsApp support', 'Monthly compliance summary'
      ]
    },
    {
      id: 'custom', label: 'Custom', name: 'GST Audit & Notice', desc: 'Departmental audit support, notice replies, and refund claims', price: '9,999', note: 'Starting price · Based on complexity', popular: false,
      features: [
        'Notice / SCN reply drafting', 'Audit documentation support', 'GST refund application', 'CA representation', 'GSTR-9C preparation'
      ]
    }
  ],
  corp: [
    {
      id: 'basic-corp', label: 'Basic', name: 'LLP / OPC Setup', desc: 'For sole entrepreneurs and small professional firms', price: '9,999', note: 'All-inclusive · Govt. fee may vary', popular: false,
      features: [
        'Name reservation (RUN)', 'DSC for all partners/directors', 'LLP agreement / MOA drafting', 'Certificate of Incorporation', 'PAN + TAN application'
      ]
    },
    {
      id: 'standard', label: 'Standard', name: 'Private Limited Company', desc: 'Complete Pvt Ltd incorporation for serious businesses', price: '18,999', note: 'All-inclusive · Govt. fee included', popular: true, badge: 'MOST POPULAR',
      features: [
        'Name approval (SPICe+)', 'DSC for all directors', 'MOA & AOA drafting', 'Certificate of Incorporation', 'PAN, TAN, GST registration', 'Bank account opening support'
      ]
    },
    {
      id: 'annual', label: 'Annual', name: 'ROC Compliance', desc: 'Annual compliance filings for existing companies and LLPs', price: '19,999', note: 'Per year · Govt. fee extra', popular: false,
      features: [
        'MGT-7 Annual Return filing', 'AOC-4 Financials filing', 'Director KYC (DIR-3)', 'Board resolution drafting', 'MCA compliance calendar'
      ]
    }
  ]
};

export const Pricing = () => {
  const [activeTab, setActiveTab] = useState('itr');

  const tabs = [
    { id: 'itr', label: 'ITR Filing' },
    { id: 'gst', label: 'GST Services' },
    { id: 'corp', label: 'Corporate' }
  ];

  return (
    <section id="pricing" className="section container">
      <div className="section-header">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', background: 'var(--primary-transparent)', border: '1px solid var(--primary)', borderRadius: 20, color: 'var(--primary)', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>
          Simple, Transparent Pricing
        </div>
        <h2 className="section-title serif">Choose the Plan That Fits Your Profile</h2>
        <p className="section-subtitle">All plans include expert review and timely filing. No hidden fees. FY 2025–26 deadline: <strong>31 July 2026</strong>.</p>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 48, flexWrap: 'wrap' }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '12px 24px',
              borderRadius: '24px',
              fontSize: '14px',
              fontWeight: 600,
              background: activeTab === tab.id ? 'var(--primary)' : 'var(--glass-bg)',
              color: activeTab === tab.id ? '#fff' : 'var(--text-primary)',
              border: `1px solid ${activeTab === tab.id ? 'var(--primary)' : 'var(--glass-border)'}`,
              cursor: 'pointer',
              transition: 'all 0.2s',
              boxShadow: activeTab === tab.id ? '0 8px 24px rgba(var(--primary-rgb), 0.3)' : 'none'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Plans Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          style={{ display: 'grid', gridTemplateColumns: `repeat(${PLANS[activeTab].length}, 1fr)`, gap: '20px', alignItems: 'start' }}
        >
          {PLANS[activeTab].map((plan, idx) => (
            <Card key={plan.id} delay={idx * 0.1} className={plan.popular ? 'liquid-glass-heavy' : 'liquid-glass'} style={{ position: 'relative', border: plan.popular ? '1px solid var(--primary)' : '1px solid var(--glass-border)', transform: plan.popular ? 'scale(1.02)' : 'none', zIndex: plan.popular ? 2 : 1, padding: PLANS[activeTab].length === 4 ? '24px 18px' : '32px 24px' }}>
              {plan.badge && (
                <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: 'var(--primary)', color: '#fff', fontSize: 11, fontWeight: 800, padding: '6px 16px', borderRadius: 20, letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap', boxShadow: '0 4px 12px rgba(var(--primary-rgb), 0.3)' }}>
                  {plan.badge}
                </div>
              )}
              
              <div className="pricing-card-header" style={{ textAlign: 'left', borderBottom: '1px solid var(--glass-border)', paddingBottom: 24, marginBottom: 24 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>{plan.label}</div>
                <h3 className="serif" style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: 8, lineHeight: 1.2 }}>{plan.name}</h3>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.5, minHeight: 42 }}>{plan.desc}</p>
                
                <div style={{ marginTop: 20, display: 'flex', alignItems: 'baseline', gap: 6 }}>
                  <span style={{ fontSize: '1.2rem', color: 'var(--primary)', fontWeight: 600 }}>₹</span>
                  <span className="serif" style={{ fontSize: PLANS[activeTab].length === 4 ? '2.4rem' : '3rem', color: 'var(--text-primary)', lineHeight: 1 }}>{plan.price}</span>
                  {plan.per && <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{plan.per}</span>}
                </div>
                {plan.note && <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 8 }}>{plan.note}</div>}
              </div>

              <ul className="pricing-features" style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 14, color: 'var(--text-primary)' }}>
                    <CheckCircle size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ lineHeight: 1.4 }}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant={plan.popular ? 'primary' : 'secondary'} style={{ width: '100%' }}>
                Get Started
              </Button>
            </Card>
          ))}
        </motion.div>
      </AnimatePresence>

      <div style={{ textAlign: 'center', marginTop: 40 }}>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
          Not sure which plan suits you? All prices are exclusive of GST. <Link to="/contact" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>Talk to our experts for a free consultation. →</Link>
        </p>
      </div>
    </section>
  );
};
