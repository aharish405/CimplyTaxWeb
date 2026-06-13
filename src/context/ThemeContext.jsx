import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem('app-mode') || 'light';
  });
  
  const [colorTheme, setColorTheme] = useState(() => {
    return localStorage.getItem('app-color-theme') || 'amber';
  });

  useEffect(() => {
    const html = document.documentElement;
    if (mode === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    localStorage.setItem('app-mode', mode);
  }, [mode]);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('data-theme', colorTheme);
    localStorage.setItem('app-color-theme', colorTheme);
  }, [colorTheme]);

  const toggleMode = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ mode, toggleMode, colorTheme, setColorTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
