import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { Button } from '../ui/Button';

export const CHECKLISTS = {
  "ITR Filing – Salaried Individuals": { tag:"Income Tax", intro:"Keep the following documents ready for hassle-free ITR filing. Tick each item as you gather it — we'll handle the rest.", sections:[{title:"Identity & Bank",items:[{t:"PAN Card",o:false},{t:"Aadhaar Card",o:false},{t:"Bank account details (IFSC + account number)",o:false}]},{title:"Income Documents",items:[{t:"Form 16 (Part A & B) from employer(s)",o:false},{t:"Form 26AS / AIS / TIS from IT portal",o:false},{t:"Salary slips for the financial year",o:true},{t:"Interest certificate from bank (savings/FD)",o:true}]},{title:"Deduction Proofs",items:[{t:"80C — LIC, PPF, ELSS, EPF, school fees",o:true},{t:"80D — Health insurance premium receipts",o:true},{t:"Home loan interest certificate (Section 24)",o:true},{t:"HRA rent receipts (if claiming HRA)",o:true},{t:"80E — Education loan interest",o:true}]}], note:"💡 Not sure which apply to you? Share what you have — our CA will find the best deductions for your case."},
  "ITR Filing – Business & Firms": { tag:"Income Tax", intro:"For business and firm ITR filing, we need these documents to compute taxable income and handle tax audit if applicable.", sections:[{title:"Identity & Registration",items:[{t:"PAN Card of proprietor/partners/company",o:false},{t:"Aadhaar of all partners/directors",o:false},{t:"GST registration certificate",o:true}]},{title:"Financial Statements",items:[{t:"Profit & Loss statement for the year",o:false},{t:"Balance Sheet as on 31st March",o:false},{t:"Bank statements (all business accounts)",o:false},{t:"Trial balance / ledger extracts",o:true}]},{title:"Tax Records",items:[{t:"Form 26AS / AIS from IT portal",o:false},{t:"TDS certificates received (Form 16A)",o:true},{t:"Advance tax payment challans",o:true},{t:"Previous year ITR acknowledgement",o:true}]}], note:"📋 Turnover > ₹1 crore requires a tax audit under Section 44AB. We handle it end-to-end."},
  "TDS Return Filing": { tag:"Income Tax", intro:"For quarterly TDS return filing (24Q/26Q), please have these ready. We prepare, validate and file on time — every quarter.", sections:[{title:"Deductor Details",items:[{t:"TAN (Tax Deduction Account Number)",o:false},{t:"PAN of the deductor (company/firm)",o:false},{t:"Authorised signatory details",o:false}]},{title:"Deductee Details",items:[{t:"PAN of all deductees (employees/vendors)",o:false},{t:"Nature and amount of each payment",o:false},{t:"TDS deducted per deductee",o:false}]},{title:"Payment Records",items:[{t:"TDS challan details (BSR code, date, serial no.)",o:false},{t:"Bank statement showing TDS payments to govt",o:false},{t:"Previous quarter TDS return (for revision)",o:true}]}], note:"⚠️ TDS returns due quarterly: 31 Jul, 31 Oct, 31 Jan, 31 May. Late filing: ₹200/day penalty."},
  "Advance Tax Planning": { tag:"Income Tax", intro:"Advance tax is paid in 4 instalments. We'll compute your liability and ensure timely payment to avoid Section 234B/234C interest.", sections:[{title:"Income Details",items:[{t:"Expected total income (salary + business + other)",o:false},{t:"Form 26AS showing TDS already deducted",o:false},{t:"Last year's ITR (for reference)",o:true}]},{title:"Other Income Sources",items:[{t:"Capital gains from shares/MFs/property",o:true},{t:"Rental income details",o:true},{t:"FD / savings interest income",o:true},{t:"Business/professional income estimates",o:true}]}], note:"📅 Due dates: 15 Jun (15%), 15 Sep (45%), 15 Dec (75%), 15 Mar (100%)."},
  "Income Tax Notices & Appeals": { tag:"Income Tax", intro:"Received an IT notice? Don't panic. Share these with us and we'll draft a comprehensive expert reply to protect your interests.", sections:[{title:"Notice Details",items:[{t:"Copy of the IT notice (PDF/physical)",o:false},{t:"Notice section number (e.g. 139(9), 143(1), 148)",o:false},{t:"Assessment year mentioned in the notice",o:false},{t:"Response deadline date",o:false}]},{title:"Supporting Documents",items:[{t:"Filed ITR for the relevant assessment year",o:false},{t:"Form 26AS / AIS for the relevant year",o:false},{t:"Bank statements for the scrutiny period",o:true},{t:"Investment/transaction proofs being questioned",o:true}]}], note:"🛡️ Never ignore IT notices. We handle all types: defective return, scrutiny, high-value transactions, demands & ITAT appeals."},
  "NRI Tax Return Filing": { tag:"Income Tax", intro:"NRI tax filing needs special care around residential status, DTAA benefits, and FEMA compliance. Share these with us.", sections:[{title:"Identity & Status",items:[{t:"PAN Card (or NRI PAN application)",o:false},{t:"Passport copy",o:false},{t:"Days spent in India in the FY",o:false},{t:"Country of residence and tax residency details",o:false}]},{title:"India Income Sources",items:[{t:"Rental income from Indian property",o:true},{t:"NRO / NRE / FCNR account interest",o:true},{t:"Capital gains from Indian shares/MFs",o:true},{t:"Any Indian salary or professional income",o:true}]},{title:"DTAA & Remittance",items:[{t:"Tax Residency Certificate (TRC)",o:true},{t:"Foreign income details (for DTAA claim)",o:true},{t:"15CA/15CB — foreign remittance details",o:true}]}], note:"🌐 We ensure full DTAA benefits, correct 15CA/15CB filing, and FEMA compliance."},
  "GST Registration": { tag:"GST Services", intro:"We'll get your GST registration done quickly and correctly. Keep these documents ready.", sections:[{title:"Business & Owner Details",items:[{t:"PAN Card of business/proprietor/partners/directors",o:false},{t:"Aadhaar of all proprietors/partners/directors",o:false},{t:"Photograph of all applicants",o:false},{t:"Mobile number linked to Aadhaar (for OTP)",o:false}]},{title:"Business Address Proof",items:[{t:"Electricity bill of business premises (latest)",o:false},{t:"Rent agreement + NOC from owner (if rented)",o:true},{t:"Property tax receipt (if self-owned)",o:true}]},{title:"Bank & Business",items:[{t:"Cancelled cheque or bank statement with IFSC",o:false},{t:"Nature of business and HSN/SAC codes",o:false},{t:"Partnership deed / incorporation certificate",o:true}]}], note:"⚡ GST registration issued within 7 working days."},
  "GSTR-1 & GSTR-3B Filing": { tag:"GST Services", intro:"For accurate GSTR-1 and GSTR-3B filing, we need the following data every month or quarter.", sections:[{title:"Sales Data",items:[{t:"Sales invoices for the period (B2B, B2C, exports)",o:false},{t:"HSN/SAC-wise summary of supplies",o:false},{t:"Credit/debit notes issued",o:true},{t:"Nil-rated, exempt, non-GST supply details",o:true}]},{title:"Purchase & ITC Data",items:[{t:"Purchase invoices with GSTIN of suppliers",o:false},{t:"GSTR-2B from GST portal",o:false},{t:"ITC reversal details (Rule 42/43)",o:true}]},{title:"Payment Details",items:[{t:"GST liability paid via challan",o:true},{t:"Closing balance in Electronic Credit Ledger",o:true}]}], note:"📆 GSTR-1: 11th | GSTR-3B: 20th of next month. We track and remind proactively."},
  "GST Annual Return (GSTR-9)": { tag:"GST Services", intro:"GSTR-9 is due by 31st December. Here's what you need to compile for an accurate annual return.", sections:[{title:"Return Summary",items:[{t:"All filed GSTR-1 and GSTR-3B returns for the year",o:false},{t:"GSTR-2A / GSTR-2B for the full year",o:false},{t:"Final audited financial statements",o:false}]},{title:"Reconciliation Data",items:[{t:"Books of accounts (ledger-wise)",o:false},{t:"ITC claimed vs ITC available analysis",o:false},{t:"Amendments made in subsequent returns",o:true},{t:"Debit/credit notes summary",o:true}]}], note:"📋 Turnover > ₹5 crore: GSTR-9C (CA reconciliation) also mandatory. We handle both."},
  "Input Tax Credit (ITC)": { tag:"GST Services", intro:"ITC reconciliation ensures your books match GSTR-2B and you claim every eligible credit.", sections:[{title:"Data Required",items:[{t:"Purchase register / purchase invoices",o:false},{t:"GSTR-2B from GST portal",o:false},{t:"GSTR-3B filed for the period",o:false},{t:"Blocked credit items (if any)",o:true}]}], note:"⚠️ ITC mismatch triggers GST notices. Regular reconciliation prevents penalties."},
  "GST Audit & Assessment": { tag:"GST Services", intro:"Received a GST audit notice? Prompt action is critical. Share these documents immediately.", sections:[{title:"Audit Notice & Returns",items:[{t:"GST audit / assessment notice (copy)",o:false},{t:"All GSTR-1, 3B, and 9 for the relevant period",o:false},{t:"GSTR-2A and GSTR-2B for the period",o:false}]},{title:"Financial Records",items:[{t:"Books of accounts / ledgers for audit period",o:false},{t:"Bank statements",o:false},{t:"E-way bills (if goods supply involved)",o:true},{t:"Stock / inventory records",o:true}]}], note:"🛡️ Complete audit support — document compilation to GST officer representation."},
  "GST Notice Reply & Refund": { tag:"GST Services", intro:"For GST notices or refund claims, timely and accurate response is critical. Share these with us right away.", sections:[{title:"Notice Details",items:[{t:"Copy of GST show cause notice / demand order",o:false},{t:"Reference number and response deadline",o:false},{t:"Relevant returns for the disputed period",o:false}]},{title:"For Refund Claims",items:[{t:"Reason for refund (exports, inverted duty, excess)",o:false},{t:"Export invoices and shipping bills",o:true},{t:"GSTR-2B mismatch report (for ITC refund)",o:true},{t:"Bank account details for refund credit",o:false}]}], note:"💡 GST refund must be claimed within 2 years. Act promptly."},
  "Private Limited Company": { tag:"Corporate Services", intro:"Incorporating a Pvt Ltd company is a multi-step process. Keep these ready for a smooth, fast incorporation.", sections:[{title:"All Directors / Shareholders",items:[{t:"PAN Card",o:false},{t:"Aadhaar Card",o:false},{t:"Passport-size photograph",o:false},{t:"Email ID and mobile number",o:false},{t:"DIN — we'll apply if not existing",o:false}]},{title:"Registered Office",items:[{t:"Electricity bill (latest) of registered office",o:false},{t:"Rent agreement + NOC from owner (if rented)",o:true},{t:"Property ownership proof (if self-owned)",o:true}]},{title:"Company Details",items:[{t:"Proposed company name (2–3 options)",o:false},{t:"Main objects / nature of business",o:false},{t:"Proposed share capital and shareholding ratio",o:false}]}], note:"🏢 Incorporation takes 7–10 working days. We handle DSC, DIN, name reservation, MOA/AOA & COI."},
  "LLP & OPC Registration": { tag:"Corporate Services", intro:"LLP and OPC registration is similar to Pvt Ltd with some differences. Here's what you'll need.", sections:[{title:"Partner / Director Details",items:[{t:"PAN Card of all partners/directors",o:false},{t:"Aadhaar Card of all partners/directors",o:false},{t:"Passport-size photographs",o:false},{t:"DSC — we apply if needed",o:false}]},{title:"Address Proof",items:[{t:"Electricity bill of registered office",o:false},{t:"Rent agreement + NOC (if rented)",o:true}]},{title:"Business Details",items:[{t:"Proposed LLP/OPC name (2–3 preferences)",o:false},{t:"Nature of business / main objects",o:false},{t:"Capital contribution per partner (for LLP)",o:false},{t:"Nominee director details (for OPC)",o:false}]}], note:"💼 LLP for professionals, OPC for solo entrepreneurs. We'll recommend the best structure."},
  "Annual ROC Compliance": { tag:"Corporate Services", intro:"Every company and LLP must file annual returns with the MCA. Missing deadlines attracts heavy penalties.", sections:[{title:"Company Details",items:[{t:"CIN (Company Identification Number)",o:false},{t:"List of current directors with DIN",o:false},{t:"Shareholder details and shareholding pattern",o:false}]},{title:"Financial Statements",items:[{t:"Audited financial statements (Balance Sheet, P&L)",o:false},{t:"Auditor's report",o:false},{t:"Board's report / Directors' report",o:false}]}], note:"📅 MGT-7: 60 days from AGM | AOC-4: 30 days from AGM. We maintain your MCA compliance calendar."},
  "Accounting & Bookkeeping": { tag:"Corporate Services", intro:"Monthly professional bookkeeping and MIS reports. Share these to get us set up for your business.", sections:[{title:"Records & Access",items:[{t:"Bank statements (all accounts) — monthly",o:false},{t:"Sales invoices and purchase bills",o:false},{t:"Existing accounting software access",o:true},{t:"Previous year's financial statements",o:true}]},{title:"Additional Info",items:[{t:"Payroll data (if applicable)",o:true},{t:"Loan / EMI schedules",o:true},{t:"Fixed asset register (if available)",o:true}]}], note:"📊 Monthly P&L, Balance Sheet, and cash flow statements delivered. Full tax-readiness guaranteed."},
  "MSME & Startup India": { tag:"Corporate Services", intro:"Udyam / MSME and Startup India recognition unlock powerful government benefits. Keep these ready.", sections:[{title:"For Udyam (MSME)",items:[{t:"Aadhaar of proprietor / managing partner / director",o:false},{t:"PAN of the business entity",o:false},{t:"GSTIN (if registered)",o:true},{t:"Bank account number and IFSC",o:false},{t:"NIC code / nature of business activity",o:false}]},{title:"For Startup India",items:[{t:"Certificate of Incorporation / LLP agreement",o:false},{t:"Brief business description / pitch deck",o:false},{t:"Website or product/service details",o:true}]}], note:"🌱 Udyam registration is free — unlocks government loans and subsidies."},
  "IEC & Trade Registrations": { tag:"Corporate Services", intro:"For Import Export Code (IEC) and trade registrations, keep these documents ready for a quick turnaround.", sections:[{title:"For IEC",items:[{t:"PAN Card of the business entity",o:false},{t:"Bank certificate or cancelled cheque",o:false},{t:"Passport-size photograph of applicant",o:false},{t:"Address proof of business",o:false}]},{title:"For Trade Licence / Shop Act",items:[{t:"PAN and Aadhaar of proprietor/partners",o:false},{t:"Business address proof",o:false},{t:"Property ownership / rent agreement",o:false}]}], note:"🌍 IEC is mandatory for any business importing or exporting. We liaise with DGFT for quick issuance."},
  "Property & Rental Compliance": { tag:"Other Services", intro:"Property-related tax compliance varies by transaction type. Here's a comprehensive checklist.", sections:[{title:"Rental Income",items:[{t:"Rent agreement with tenant",o:false},{t:"Rental income receipts / bank credits",o:false},{t:"Property tax receipts",o:true},{t:"Home loan interest certificate",o:true}]},{title:"Capital Gains (Property Sale)",items:[{t:"Sale deed of the property sold",o:false},{t:"Original purchase deed and cost details",o:false},{t:"Improvement/renovation cost records",o:true},{t:"New property purchase details (Section 54)",o:true}]},{title:"TDS on Property (Form 26QB)",items:[{t:"PAN of both buyer and seller",o:false},{t:"Sale agreement / sale deed",o:false},{t:"Property details and transaction value",o:false}]}], note:"🏠 TDS @ 1% mandatory via Form 26QB if property value exceeds ₹50 lakhs."},
  "PAN & TAN Services": { tag:"Other Services", intro:"PAN and TAN applications are straightforward when you have the right documents.", sections:[{title:"New PAN (Individual)",items:[{t:"Aadhaar Card (for instant PAN via OTP)",o:false},{t:"Passport-size photograph",o:false},{t:"Date of birth proof (if not using Aadhaar)",o:true}]},{title:"New PAN (Company/Firm)",items:[{t:"Certificate of Incorporation / Registration",o:false},{t:"Address proof of entity",o:false},{t:"PAN of authorised signatory",o:false}]},{title:"TAN Registration",items:[{t:"PAN of entity",o:false},{t:"Address proof of entity",o:false},{t:"Nature of business / deduction type",o:false}]}], note:"⚡ Instant PAN via Aadhaar OTP for individuals. Corporate PAN/TAN: 5–7 working days."},
  "NRI & FEMA Advisory": { tag:"Other Services", intro:"FEMA compliance for NRIs requires careful documentation. Share these for accurate advisory and filings.", sections:[{title:"Identity & Residence",items:[{t:"PAN Card (NRI PAN)",o:false},{t:"Passport and valid visa / OCI card",o:false},{t:"Days in India (residential status determination)",o:false},{t:"Tax Residency Certificate (TRC)",o:true}]},{title:"Financial Details",items:[{t:"NRO / NRE / FCNR account statements",o:false},{t:"Details of Indian income and investments",o:false},{t:"Foreign remittance details (for 15CA/15CB)",o:true},{t:"Property or investment transaction details",o:true}]}], note:"🌐 FEMA violations attract significant penalties. Our advisory ensures full RBI compliance."},
  "Payroll Services": { tag:"Other Services", intro:"For monthly payroll processing, share these to set up our payroll engine for your business.", sections:[{title:"Company & Setup",items:[{t:"List of employees with PAN and Aadhaar",o:false},{t:"Bank account details of each employee",o:false},{t:"Salary structure / CTC breakup per employee",o:false},{t:"PF and ESI registration numbers",o:true}]},{title:"Monthly Data",items:[{t:"Attendance / leave records for the month",o:false},{t:"Variable pay / bonus / reimbursement details",o:true},{t:"New joinee or exit details",o:true}]}], note:"💼 Payslips, PF/ESI returns, and Form 16 at year-end — fully compliant, every month."},
  "Investment & Tax Planning": { tag:"Other Services", intro:"Personalised tax-saving planning requires understanding your income, tax bracket, and financial goals.", sections:[{title:"Income & Tax Details",items:[{t:"Current salary / business income details",o:false},{t:"Existing tax-saving investments (80C, 80D, etc.)",o:false},{t:"Last year's ITR",o:true}]},{title:"Goals & Preferences",items:[{t:"Investment horizon (short / medium / long term)",o:false},{t:"Risk appetite (conservative / moderate / aggressive)",o:false},{t:"Liquidity requirements",o:true},{t:"Existing insurance coverage details",o:true}]}], note:"🛡️ We align ELSS, PPF, NPS, insurance to your bracket — maximising savings without locking liquidity."},
  "Loan & Project Reports": { tag:"Other Services", intro:"Bank loans and government schemes require well-structured project reports and CMA data.", sections:[{title:"Business Information",items:[{t:"Business profile and promoter details",o:false},{t:"Nature of project / expansion plan",o:false},{t:"Existing business financials (last 3 years)",o:false},{t:"Projected income and expenditure",o:false}]},{title:"For Bank Loan / CMA Data",items:[{t:"Loan amount required and end-use details",o:false},{t:"Bank statements (last 12 months)",o:false},{t:"IT returns (last 3 years)",o:false},{t:"Security / collateral offered",o:true}]}], note:"📝 A well-prepared project report significantly increases loan approval chances."}
};

export const ServiceModal = ({ isOpen, onClose, serviceKey }) => {
  const [checkedItems, setCheckedItems] = React.useState(new Set());
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCheckedItems(new Set());
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen, serviceKey]);

  if (!isOpen || !serviceKey) return null;

  const data = CHECKLISTS[serviceKey];
  if (!data) return null;

  let totalItemsCount = 0;
  data.sections.forEach(sec => totalItemsCount += sec.items.length);

  const toggleCheck = (idx) => {
    const newSet = new Set(checkedItems);
    if (newSet.has(idx)) {
      newSet.delete(idx);
    } else {
      newSet.add(idx);
    }
    setCheckedItems(newSet);
  };

  const pct = totalItemsCount > 0 ? Math.round((checkedItems.size / totalItemsCount) * 100) : 0;

  return (
    <AnimatePresence>
      <div style={{ position: 'fixed', inset: 0, zIndex: 9000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{ position: 'absolute', inset: 0, background: 'rgba(12,27,46,0.6)', backdropFilter: 'blur(8px)' }}
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          style={{ position: 'relative', width: '100%', maxWidth: 600, maxHeight: '85vh', background: 'var(--glass-bg)', backdropFilter: 'var(--glass-blur)', border: '1px solid var(--glass-border)', borderRadius: 24, display: 'flex', flexDirection: 'column', overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,0.3)' }}
        >
          {/* Header */}
          <div style={{ padding: '24px 32px', borderBottom: '1px solid var(--glass-border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: 8 }}>{data.tag}</div>
                <h2 className="serif" style={{ fontSize: '1.6rem', color: 'var(--text-primary)', margin: 0 }}>{serviceKey}</h2>
              </div>
              <button onClick={onClose} style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(255,255,255,0.1)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-secondary)' }}>
                <X size={20} />
              </button>
            </div>
            
            <div style={{ marginTop: 20 }}>
              <div style={{ height: 6, background: 'rgba(255,255,255,0.1)', borderRadius: 3, overflow: 'hidden', marginBottom: 8 }}>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${pct}%` }}
                  style={{ height: '100%', background: 'var(--primary)' }}
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--text-secondary)' }}>
                <span>{checkedItems.size} of {totalItemsCount} items ready</span>
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{pct}%</span>
              </div>
            </div>
          </div>

          {/* Body */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '24px 32px' }}>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 24 }}>{data.intro}</p>
            
            {data.sections.map((sec, secIdx) => {
              // Calculate global index offset for this section to maintain unique IDs
              const prevItemsCount = data.sections.slice(0, secIdx).reduce((acc, s) => acc + s.items.length, 0);
              
              return (
                <div key={secIdx} style={{ marginBottom: 24 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--primary)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
                    {sec.title}
                    <div style={{ flex: 1, height: 1, background: 'var(--glass-border)' }} />
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {sec.items.map((item, itemIdx) => {
                      const globalIdx = prevItemsCount + itemIdx;
                      const checked = checkedItems.has(globalIdx);
                      return (
                        <div 
                          key={globalIdx} 
                          onClick={() => toggleCheck(globalIdx)}
                          style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '12px 16px', background: checked ? 'rgba(var(--primary-rgb), 0.1)' : 'rgba(255,255,255,0.03)', border: `1px solid ${checked ? 'var(--primary)' : 'var(--glass-border)'}`, borderRadius: 12, cursor: 'pointer', transition: 'all 0.2s' }}
                        >
                          <div style={{ width: 22, height: 22, borderRadius: 6, border: `2px solid ${checked ? 'var(--primary)' : 'var(--text-secondary)'}`, background: checked ? 'var(--primary)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                            {checked && <Check size={14} color="#fff" />}
                          </div>
                          <div>
                            <div style={{ fontSize: 14, color: checked ? 'var(--text-primary)' : 'var(--text-secondary)', fontWeight: checked ? 500 : 400 }}>{item.t}</div>
                            {item.o && <div style={{ fontSize: 11, color: 'var(--primary)', marginTop: 4 }}>Optional</div>}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            
            {data.note && (
              <div style={{ padding: 16, background: 'var(--primary-transparent)', border: '1px solid var(--primary)', borderRadius: 12, fontSize: 13, color: 'var(--text-primary)', lineHeight: 1.6 }}>
                {data.note}
              </div>
            )}
          </div>

          {/* Footer */}
          <div style={{ padding: '20px 32px', borderTop: '1px solid var(--glass-border)', display: 'flex', gap: 16 }}>
            <Button 
              variant="primary" 
              style={{ flex: 1 }} 
              onClick={() => {
                let itemsText = [];
                let idx = 0;
                data.sections.forEach(sec => {
                  sec.items.forEach(item => {
                    if (checkedItems.has(idx)) {
                      itemsText.push(`- ${item.t}`);
                    }
                    idx++;
                  });
                });
                const text = `*Get Started: ${serviceKey}*\n\nI have the following documents ready:\n${itemsText.join('\n')}\n\nPlease advise on next steps.`;
                window.open(`https://wa.me/919000292492?text=${encodeURIComponent(text)}`, '_blank');
              }}
            >
              Get Started via WhatsApp
            </Button>
            <Button variant="secondary" onClick={() => window.open('tel:+919000292492')}>Call Us</Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
