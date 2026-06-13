import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

const INPUT = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: 8,
  border: '1px solid var(--glass-border)',
  background: 'var(--bg-color)',
  color: 'var(--text-primary)',
  outline: 'none',
  fontSize: 14,
  boxSizing: 'border-box',
};

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) => setFormData({ ...formData, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `*New Enquiry*\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/919000292492?text=${encodeURIComponent(text)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section className="section container contact-section">
      <div className="section-header">
        <div className="contact-section-badge">Contact Us</div>
        <h2 className="section-title serif">Get in Touch with an Expert</h2>
        <p className="section-subtitle">Free 15-minute CA consultation — we'll assess your profile and recommend the right plan.</p>
      </div>

      <div className="contact-grid">

        {/* ── Left: Info & Map ── */}
        <div className="contact-info-col">
          <Card className="liquid-glass contact-info-card">
            <h3 className="contact-card-title">Our Office — Kondapur, Hyderabad</h3>

            <div className="contact-map-wrap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.736!2d78.3675!3d17.4612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93d78f24ca2d%3A0x0!2sKrishe+Emerald%2C+Kondapur%2C+Hyderabad!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%" height="220"
                style={{ border: 0, display: 'block' }}
                allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cimply Tax Office — Kondapur Hyderabad"
              />
            </div>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <span className="contact-info-icon">📍</span>
                <div>
                  <div className="contact-info-label">Address</div>
                  <div className="contact-info-value">Krishe Emerald, Kondapur Main Road,<br />Laxmi Cyber City, Hitec City,<br />Hyderabad, TS 500081</div>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-icon">📞</span>
                <div>
                  <div className="contact-info-label">Phone & WhatsApp</div>
                  <a href="tel:+919000292492" className="contact-info-value contact-info-link">+91 9000292492</a>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-icon">✉️</span>
                <div>
                  <div className="contact-info-label">Email</div>
                  <a href="mailto:itr@cimplytax.com" className="contact-info-value contact-info-link">itr@cimplytax.com</a>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-icon">🕐</span>
                <div>
                  <div className="contact-info-label">Working Hours</div>
                  <div className="contact-info-value">Mon – Sat: 9:00 AM – 7:00 PM</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Mobile quick-action row — hidden on desktop */}
          <div className="contact-quick-actions">
            <a href="tel:+919000292492" className="contact-quick-btn contact-quick-call">📞 Call Now</a>
            <a href="https://wa.me/919000292492" target="_blank" rel="noreferrer" className="contact-quick-btn contact-quick-wa">💬 WhatsApp</a>
          </div>
        </div>

        {/* ── Right: Form ── */}
        <Card className="liquid-glass-heavy contact-form-card">
          {submitted ? (
            <div className="contact-success">
              <div className="contact-success-icon">✅</div>
              <h3 className="serif contact-success-title">Enquiry Received!</h3>
              <p className="contact-success-desc">
                We'll reach out within <strong>24 hours</strong> via phone or WhatsApp. Or connect directly:
              </p>
              <a
                href="https://wa.me/919000292492?text=Hi%2C%20I%20just%20submitted%20an%20enquiry%20on%20your%20website."
                target="_blank" rel="noreferrer"
                className="contact-wa-btn"
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          ) : (
            <>
              <h3 className="serif contact-form-title">Send Us an Enquiry</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-field">
                  <label className="contact-label">Full Name *</label>
                  <input type="text" required value={formData.name} onChange={update('name')} placeholder="Your full name" style={INPUT} />
                </div>

                <div className="contact-field-row">
                  <div className="contact-field">
                    <label className="contact-label">Phone Number *</label>
                    <input type="tel" required value={formData.phone} onChange={update('phone')} placeholder="+91 XXXXX XXXXX" style={INPUT} />
                  </div>
                  <div className="contact-field">
                    <label className="contact-label">Email Address *</label>
                    <input type="email" required value={formData.email} onChange={update('email')} placeholder="yourname@email.com" style={INPUT} />
                  </div>
                </div>

                <div className="contact-field">
                  <label className="contact-label">Service Required *</label>
                  <select required value={formData.service} onChange={update('service')} style={{ ...INPUT, WebkitAppearance: 'none' }}>
                    <option value="">Select a service</option>
                    <option value="itr">ITR Filing</option>
                    <option value="gst">GST Registration / Filing</option>
                    <option value="corp">Company Registration</option>
                    <option value="other">Other Service</option>
                  </select>
                </div>

                <div className="contact-field">
                  <label className="contact-label">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={update('message')}
                    placeholder="Tell us about your requirements..."
                    style={{ ...INPUT, minHeight: 100, resize: 'vertical' }}
                  />
                </div>

                <Button variant="primary" style={{ width: '100%', marginTop: 4 }} type="submit">
                  Send Enquiry →
                </Button>

                <p className="contact-form-note">
                  🔒 Your details are secure and never shared with third parties.
                </p>
              </form>
            </>
          )}
        </Card>

      </div>
    </section>
  );
};
