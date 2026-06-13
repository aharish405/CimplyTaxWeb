import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `*New Enquiry*\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\nMessage: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919000292492?text=${encodedText}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section className="section container" style={{ marginTop: 100 }}>
      <div className="section-header">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', background: 'var(--primary-transparent)', border: '1px solid var(--primary)', borderRadius: 20, color: 'var(--primary)', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>
          Contact Us
        </div>
        <h2 className="section-title serif">Get in touch with an Expert Today</h2>
        <p className="section-subtitle">Get a free 15-minute call with our CA. We'll assess your profile and recommend the right plan.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start' }}>
        
        {/* Contact Info & Map */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          
          <Card className="liquid-glass">
            <h3 style={{ fontSize: '1.2rem', marginBottom: 16 }}>Our Office in Kondapur, Hyderabad</h3>
            <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid var(--glass-border)', marginBottom: 16 }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.736!2d78.3675!3d17.4612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93d78f24ca2d%3A0x0!2sKrishe+Emerald%2C+Kondapur%2C+Hyderabad!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                width="100%" 
                height="280" 
                style={{ border: 0, display: 'block' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                title="Cimply Tax Office Location — Kondapur Hyderabad"
              ></iframe>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', gap: 12 }}>
                <span style={{ fontSize: 20 }}>📍</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>Address</div>
                  <div style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.5 }}>Krishe Emerald, Kondapur Main Road, <br/>Laxmi Cyber City, Hitec City, <br/>Hyderabad, TS 500081</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <span style={{ fontSize: 20 }}>📞</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>Phone & WhatsApp</div>
                  <div style={{ fontSize: 14, color: 'var(--text-secondary)' }}>+91 9000292492</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <span style={{ fontSize: 20 }}>✉️</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>Email</div>
                  <div style={{ fontSize: 14, color: 'var(--text-secondary)' }}>itr@cimplytax.com</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <span style={{ fontSize: 20 }}>🕐</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>Working Hours</div>
                  <div style={{ fontSize: 14, color: 'var(--text-secondary)' }}>Monday – Saturday: 9:00 AM – 7:00 PM</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="liquid-glass-heavy" style={{ borderTop: '4px solid var(--primary)' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
              <h3 className="serif" style={{ fontSize: '1.8rem', marginBottom: 12 }}>Enquiry Received!</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 24 }}>
                Thank you! We'll reach out to you within <strong>24 hours</strong> via phone or WhatsApp. You can also reach us directly at <strong>+91 9000292492</strong>.
              </p>
              <a href="https://wa.me/919000292492?text=Hi%2C%20I%20just%20submitted%20an%20enquiry%20on%20your%20website." target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#25D366', color: '#fff', textDecoration: 'none', padding: '10px 20px', borderRadius: 8, fontWeight: 600, fontSize: 14 }}>
                💬 Chat on WhatsApp
              </a>
            </div>
          ) : (
            <>
              <h3 className="serif" style={{ fontSize: '1.5rem', marginBottom: 24 }}>Send Us an Enquiry</h3>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Your full name" 
                    style={{ width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid var(--glass-border)', background: 'var(--bg-color)', color: 'var(--text-primary)', outline: 'none', fontSize: 14 }} 
                  />
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Phone Number *</label>
                    <input 
                      type="tel" 
                      required 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+91 XXXXX XXXXX" 
                      style={{ width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid var(--glass-border)', background: 'var(--bg-color)', color: 'var(--text-primary)', outline: 'none', fontSize: 14 }} 
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Email Address *</label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="yourname@email.com" 
                      style={{ width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid var(--glass-border)', background: 'var(--bg-color)', color: 'var(--text-primary)', outline: 'none', fontSize: 14 }} 
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Service Required *</label>
                  <select 
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid var(--glass-border)', background: 'var(--bg-color)', color: 'var(--text-primary)', outline: 'none', fontSize: 14, WebkitAppearance: 'none' }}
                  >
                    <option value="">Select a service</option>
                    <option value="itr">ITR Filing</option>
                    <option value="gst">GST Registration / Filing</option>
                    <option value="corp">Company Registration</option>
                    <option value="other">Other Service</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Message</label>
                  <textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your requirements..." 
                    style={{ width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid var(--glass-border)', background: 'var(--bg-color)', color: 'var(--text-primary)', outline: 'none', fontSize: 14, minHeight: 100, resize: 'vertical' }} 
                  ></textarea>
                </div>

                <Button variant="primary" style={{ width: '100%', marginTop: 8 }} type="submit">
                  Send Enquiry →
                </Button>
              </form>
            </>
          )}
        </Card>

      </div>
    </section>
  );
};
