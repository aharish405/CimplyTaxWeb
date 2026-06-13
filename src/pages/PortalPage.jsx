import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const PortalPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: 120, minHeight: '80vh', position: 'relative' }}>
      {/* Background blobs for aesthetics */}
      <div className="bg-blob" style={{ top: '10%', left: '10%', width: '300px', height: '300px' }} />
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 480, margin: '0 auto', textAlign: 'center' }}>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="liquid-glass-heavy"
            style={{ padding: 40, borderRadius: 24, position: 'relative', overflow: 'hidden' }}
          >
            {/* The form area */}
            <div style={{ filter: 'blur(4px)', opacity: 0.6, pointerEvents: 'none' }}>
              <div style={{ marginBottom: 32 }}>
                <img src="/logo_ct.jpg" alt="Logo" style={{ height: 48, borderRadius: 8, marginBottom: 16 }} />
                <h2 className="serif" style={{ fontSize: 24, color: 'var(--text-primary)' }}>
                  {isLogin ? 'Welcome Back' : 'Create Account'}
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: 14, marginTop: 8 }}>
                  {isLogin ? 'Sign in to access your tax portal' : 'Start your hassle-free tax filing journey'}
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, textAlign: 'left' }}>
                {!isLogin && (
                  <div>
                    <label style={{ display: 'block', fontSize: 13, marginBottom: 8, color: 'var(--text-secondary)' }}>Full Name</label>
                    <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid var(--glass-border)', background: 'var(--glass-bg)', color: 'var(--text-primary)' }} />
                  </div>
                )}
                <div>
                  <label style={{ display: 'block', fontSize: 13, marginBottom: 8, color: 'var(--text-secondary)' }}>Email Address</label>
                  <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid var(--glass-border)', background: 'var(--glass-bg)', color: 'var(--text-primary)' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 13, marginBottom: 8, color: 'var(--text-secondary)' }}>Password</label>
                  <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid var(--glass-border)', background: 'var(--glass-bg)', color: 'var(--text-primary)' }} />
                </div>
                
                <button style={{ width: '100%', padding: 14, marginTop: 8, borderRadius: 8, background: 'var(--primary)', color: '#fff', border: 'none', fontWeight: 600, cursor: 'pointer' }}>
                  {isLogin ? 'Sign In' : 'Register'}
                </button>
              </div>

              <div style={{ marginTop: 24, fontSize: 14, color: 'var(--text-secondary)' }}>
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <span style={{ color: 'var(--primary)', fontWeight: 600 }}>
                  {isLogin ? 'Register' : 'Sign in'}
                </span>
              </div>
            </div>

            {/* Under Development Overlay */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(var(--bg-color-rgb), 0.5)',
              zIndex: 10
            }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>🚧</div>
              <h3 style={{ fontSize: 20, color: 'var(--text-primary)', marginBottom: 8 }}>Under Development</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: 14, maxWidth: 260, margin: '0 auto', lineHeight: 1.5 }}>
                Our intelligent client portal is currently being built. Check back soon for a seamless tax filing experience.
              </p>
            </div>
            
          </motion.div>
        </div>
      </div>
    </div>
  );
};
