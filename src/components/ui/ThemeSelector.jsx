import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Moon, Sun, Palette } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ThemeSelector = () => {
  const { mode, toggleMode, colorTheme, setColorTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const themes = [
    { id: 'amber', color: '#B8873A' },
    { id: 'sapphire', color: '#3B82F6' },
    { id: 'emerald', color: '#10B981' },
    { id: 'amethyst', color: '#8B5CF6' }
  ];

  return (
    <div className="theme-selector-wrap" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="theme-toggle-btn liquid-glass"
      >
        <Palette size={20} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="theme-dropdown liquid-glass-heavy"
          >
            <div className="theme-dropdown-row" style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '8px' }}>
              <span className="theme-dropdown-label">Mode</span>
              <button
                onClick={toggleMode}
                className="theme-mode-btn"
              >
                {mode === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
              </button>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span className="theme-dropdown-label">Accent</span>
              <div className="color-swatch-list">
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setColorTheme(t.id)}
                    className={`color-swatch ${colorTheme === t.id ? 'active' : ''}`}
                    style={{ backgroundColor: t.color }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
