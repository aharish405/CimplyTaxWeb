import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon,
  ...props 
}) => {
  return (
    <motion.button 
      whileTap={{ scale: 0.97 }}
      className={`btn btn-${variant} ${className}`}
      {...props}
    >
      {children}
      {icon && <span style={{ marginLeft: 4, opacity: 0.8 }}>{icon}</span>}
    </motion.button>
  );
};
