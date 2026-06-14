import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';

const CAI_KB = [
  { id: 'pricing-all', keywords: ['pricing','plan','plans','cost','price','fee','fees','charge','how much','rate'],
    a: `💰 **Our ITR plans (FY 2025-26):**\n- **Basic — ₹1,999** · Salaried with single Form 16\n- **Premium — ₹2,999** · Most popular · Capital gains, multiple Form 16s, rental income\n- **Elite — ₹5,999** · Freelancers, business owners, P&L preparation\n- **Luxe — ₹19,999** · NRI / HNI / complex DTAA cases\n\nAll plans are CA-assisted with ITR-V acknowledgement included. Want me to recommend a plan for your profile?`,
    next: ['Which plan suits salaried?','I have capital gains','I have business income','NRI plan details'] },
  { id: 'pricing-basic', keywords: ['basic','salaried plan','salaried itr','single form 16','simple itr'],
    a: `**ITR Basic — ₹1,999** is ideal if you're salaried with a single Form 16 and simple deductions (80C, 80D, HRA).\n\nIncluded:\n• Form 16 analysis\n• Old vs New regime comparison\n• Investment proof optimisation\n• ITR-V acknowledgement\n\nFiled in 24–48 hours after you share documents.`,
    next: ['Documents for salaried ITR','Old vs New regime','Get started now'] },
  { id: 'pricing-premium', keywords: ['premium','capital gain','capital gains','stocks','mutual fund','mutual funds','crypto','multiple form 16','rental income'],
    a: `**ITR Premium — ₹2,999** — our most popular plan.\n\nFor you if you have **capital gains** from stocks / MFs / property, multiple Form 16s, rental income or foreign assets to declare.\n\nIncluded:\n• Capital gains computation (LTCG + STCG)\n• Multiple Form 16 consolidation\n• House property income\n• Dedicated CA review`,
    next: ['LTCG vs STCG rates','Documents needed','Buy Premium plan'] },
  { id: 'pricing-elite', keywords: ['elite','business','freelancer','professional','presumptive','consultant','p&l'],
    a: `**ITR Elite — ₹5,999** — for freelancers, professionals & small business owners (presumptive or regular).\n\nIncluded:\n• P&L statement preparation\n• Advance tax computation\n• GST reconciliation\n• Books-of-accounts review\n• Dedicated CA + tax-audit support if turnover > ₹1Cr`,
    next: ['Documents for business ITR','Advance tax dates','Buy Elite plan'] },
  { id: 'pricing-luxe', keywords: ['luxe','nri','hni','foreign income','dtaa','15ca','15cb','complex','high net'],
    a: `**ITR Luxe — ₹19,999** — for NRIs, HNIs and complex cases.\n\nIncluded:\n• DTAA relief computation\n• Foreign asset disclosure (FA Schedule)\n• Form 67 filing\n• 15CA/15CB certificates for remittance\n• Senior CA review`,
    next: ['Do NRIs need to file in India?','DTAA explained','Buy Luxe plan'] },
  { id: 'docs-itr-salaried', keywords: ['document','documents','doc','docs','required','need','file 16','form 16','itr documents','for itr'],
    a: `📄 **Documents for ITR filing (salaried):**\n- PAN card & Aadhaar\n- Form 16 (Part A & B) from employer(s)\n- Form 26AS / AIS / TIS (download from IT portal)\n- Bank account details (IFSC + account no.)\n- Investment proofs — 80C (LIC, PPF, ELSS), 80D (health insurance)\n- Home-loan interest certificate (if applicable)\n- HRA rent receipts (if claiming HRA)\n\nDon't have all of it? Just share what you have — our CA fills the gaps.`,
    next: ['What is Form 26AS?','Documents for business ITR','Start uploading now'] },
  { id: 'deadline-itr', keywords: ['deadline','last date','due date','itr due','when to file','filing date'],
    a: `🗓️ **ITR deadline for FY 2025-26 (AY 2026-27):**\n- **31 July 2026** — Non-audit cases (most individuals)\n- **31 October 2026** — Audit cases (business, turnover > ₹1Cr)\n- **30 November 2026** — Transfer-pricing cases\n\n**Belated return:** Up to 31 December 2026 with ₹5,000 penalty (₹1,000 if income < ₹5L).\n\nFile early to avoid portal congestion and faster refunds.`,
    next: ['Penalty for late filing','How long does filing take?','File now'] },
  { id: 'tax-save', keywords: ['save tax','tax saving','reduce tax','how much save','deduction','deductions','save money'],
    a: `💸 **Top ways to save tax (FY 2025-26 / Old regime):**\n- **80C** — up to ₹1.5L (PPF, ELSS, LIC, EPF, home-loan principal, school fees)\n- **80D** — health insurance ₹25K (self) + ₹50K (parents)\n- **80E** — full education-loan interest\n- **24(b)** — home-loan interest up to ₹2L\n- **HRA** — house rent exemption if salaried\n- **80CCD(1B)** — NPS extra ₹50K\n\nOur clients typically save **₹50K–₹3L+** per year. Get our free tax-saving calculator? 🧮`,
    next: ['Old vs New regime','HRA explained','Get tax-saving consult'] },
  { id: 'gst-reg', keywords: ['gst registration','register gst','gstin','new gst','gst start'],
    a: `**GST Registration — ₹1,999** (all-inclusive, free 30-min CA consult)\n\nIssued in **7 working days**. We handle ARN tracking, GSTIN issuance and certificate delivery.\n\n**Documents:** PAN, Aadhaar of proprietor/partners; business address proof (electricity bill / rent agreement + NOC); cancelled cheque; HSN/SAC codes; passport-size photos.\n\nMandatory if turnover > ₹40L goods / ₹20L services (₹20L / ₹10L in special-category states) or for inter-state supply / e-commerce.`,
    next: ['GST documents','GST return cost','Buy GST registration'] },
  { id: 'contact', keywords: ['talk','human','ca','call','phone','contact','whatsapp','speak','agent'],
    a: `👋 **Talk to a real CA** — happy to help!\n- **WhatsApp:** [+91 90002 92492](https://wa.me/919000292492) (instant)\n- **Phone:** +91 90002 92492 (Mon–Sat, 9 AM – 7 PM IST)\n- **Email:** itr@cimplytax.com\n- **Office:** Krishe Emerald, Kondapur Main Road, Hitec City, Hyderabad — 500081\n\nResponse within **30 minutes** during working hours.`,
    next: ['Open client portal','ITR pricing','Office address'] }
];

export const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          role: 'bot',
          content: "👋 Hi! I'm **Cimply AI**, your tax assistant.\n\nI can answer instantly on ITR, GST, registrations, deadlines, pricing and more. Tap a topic below or type your question.",
          suggestions: [
            'Which ITR plan suits me?',
            'ITR pricing & plans',
            'Documents I need for ITR',
            'ITR filing deadline',
            'How much tax can I save?',
            'GST registration cost',
            'Talk to a human CA'
          ],
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleSend = (text) => {
    if (!text.trim() || isTyping) return;

    const newMessages = [...messages, {
      role: 'user',
      content: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const answer = getAnswer(text);
      setMessages([...newMessages, {
        role: 'bot',
        content: answer.a,
        suggestions: answer.next,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setIsTyping(false);
    }, 600 + Math.random() * 400);
  };

  const getAnswer = (text) => {
    const t = text.toLowerCase().replace(/[?!.,]/g, ' ');
    let best = null, bestScore = 0;
    
    for (const kb of CAI_KB) {
      let score = 0;
      for (const kw of kb.keywords) {
        if (t.includes(kw)) {
          score += Math.max(1, Math.min(5, kw.split(' ').length * 2));
        }
      }
      if (score > bestScore) { bestScore = score; best = kb; }
    }
    
    if (best && bestScore >= 1) {
      return { a: best.a, next: best.next };
    }
    
    return {
      a: "I want to make sure I answer correctly — could you rephrase? You can also pick a topic below, or WhatsApp us at **+91 80150 98385** for instant human help.",
      next: ['ITR pricing & plans', 'Documents I need', 'ITR filing deadline', 'Talk to a human CA']
    };
  };

  // Very basic markdown formatting for bold and lists
  const formatText = (text) => {
    let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    formatted = formatted.replace(/\n/g, '<br/>');
    return formatted;
  };

  const WA_URL = 'https://wa.me/919000292492?text=' + encodeURIComponent('Hi CimplyTax! I need help with my taxes. Can you assist me?');

  return (
    <div style={{ position: 'fixed', bottom: 30, right: 30, zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            style={{ 
              position: 'absolute', 
              bottom: 80, 
              right: 0, 
              width: 380, 
              height: 550, 
              background: 'var(--glass-bg)', 
              backdropFilter: 'var(--glass-blur)', 
              border: '1px solid var(--glass-border)', 
              borderRadius: 24, 
              boxShadow: '0 24px 80px rgba(0,0,0,0.3)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden'
            }}
          >
            {/* Header */}
            <div style={{ padding: '16px 20px', background: 'var(--primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 32, height: 32, background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontWeight: 'bold' }}>C</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15 }}>Cimply AI</div>
                  <div style={{ fontSize: 12, opacity: 0.8 }}>Online · Replies instantly</div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', padding: 4 }}>
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div style={{ flex: 1, padding: 20, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {messages.map((msg, idx) => (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
                  <div style={{ 
                    maxWidth: '85%', 
                    padding: '12px 16px', 
                    borderRadius: 16, 
                    borderBottomRightRadius: msg.role === 'user' ? 4 : 16,
                    borderBottomLeftRadius: msg.role === 'bot' ? 4 : 16,
                    background: msg.role === 'user' ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                    color: msg.role === 'user' ? '#fff' : 'var(--text-primary)',
                    border: msg.role === 'bot' ? '1px solid var(--glass-border)' : 'none',
                    fontSize: 14,
                    lineHeight: 1.5
                  }} dangerouslySetInnerHTML={{ __html: formatText(msg.content) }} />
                  
                  {msg.suggestions && msg.suggestions.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
                      {msg.suggestions.map((sug, sIdx) => (
                        <button 
                          key={sIdx}
                          onClick={() => handleSend(sug)}
                          style={{ padding: '6px 12px', background: 'var(--primary-transparent)', border: '1px solid var(--primary)', borderRadius: 20, color: 'var(--primary)', fontSize: 12, cursor: 'pointer' }}
                        >
                          {sug}
                        </button>
                      ))}
                    </div>
                  )}
                  
                  <div style={{ fontSize: 10, color: 'var(--text-secondary)', marginTop: 6, padding: '0 4px' }}>{msg.time}</div>
                </div>
              ))}
              
              {isTyping && (
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <div style={{ padding: '12px 16px', borderRadius: 16, borderBottomLeftRadius: 4, background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', display: 'flex', gap: 4 }}>
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--text-secondary)' }} />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--text-secondary)' }} />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--text-secondary)' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div style={{ padding: 16, borderTop: '1px solid var(--glass-border)', display: 'flex', gap: 12, alignItems: 'center' }}>
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend(input)}
                placeholder="Ask me anything..."
                style={{ flex: 1, background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: 24, padding: '12px 20px', color: 'var(--text-primary)', outline: 'none' }}
              />
              <button 
                onClick={() => handleSend(input)}
                disabled={!input.trim()}
                style={{ width: 42, height: 42, borderRadius: '50%', background: input.trim() ? 'var(--primary)' : 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: input.trim() ? 'pointer' : 'default', transition: 'all 0.2s' }}
              >
                <Send size={18} style={{ marginLeft: 2 }} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <motion.a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on WhatsApp"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          style={{
            width: 52,
            height: 52,
            borderRadius: '50%',
            background: '#25D366',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 6px 24px rgba(37,211,102,0.45)',
            textDecoration: 'none',
            color: '#fff'
          }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </motion.a>
      )}

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          background: 'var(--primary)',
          border: 'none',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 8px 32px rgba(var(--primary-rgb), 0.4)'
        }}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </motion.button>
    </div>
  );
};
