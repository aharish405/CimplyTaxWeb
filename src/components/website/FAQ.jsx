import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "What is the ITR filing deadline for FY 2025-26?",
    a: "The deadline for non-audit taxpayers (salaried individuals, freelancers, small businesses) is 31 July 2026. For audit cases and companies, it is 31 October 2026. Filing after 31 July attracts a penalty of ₹5,000 under Section 234F."
  },
  {
    q: "How long does it take to file my ITR?",
    a: "After you share all documents, our CA prepares and files your return within 24 to 48 hours. You receive the ITR-V acknowledgment immediately. Refunds are typically credited within 2-4 weeks for early filers."
  },
  {
    q: "I expect a tax refund this year. How long will it take to receive?",
    a: "For early filers (April to June), refunds typically come within 2 to 4 weeks after e-verification. For returns filed closer to the deadline in July-August, refund processing can take 6 to 8 weeks due to peak volume. Make sure your bank account is pre-validated and linked to your PAN on incometax.gov.in before filing."
  },
  {
    q: "What documents are required for ITR filing?",
    a: "For salaried individuals: PAN card, Aadhaar, Form 16, Form 26AS/AIS, bank statements, and investment proofs (80C, 80D). For business owners: additionally need GST returns, P&L statement, and balance sheet."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section container" style={{ marginTop: 100 }}>
      <div className="section-header">
        <h2 className="section-title serif">Frequently Asked Questions</h2>
        <p className="section-subtitle">Everything you need to know about tax filing and compliance.</p>
      </div>

      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        {faqs.map((faq, idx) => (
          <div key={idx} className="liquid-glass" style={{ marginBottom: 16, borderRadius: '16px', overflow: 'hidden' }}>
            <button 
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              style={{ width: '100%', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'transparent', border: 'none', color: 'var(--text-primary)', fontSize: 16, fontWeight: 600, cursor: 'pointer', textAlign: 'left' }}
            >
              {faq.q}
              <ChevronDown size={20} style={{ transform: openIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
            </button>
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div style={{ padding: '0 24px 20px', color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.6 }}>
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};
