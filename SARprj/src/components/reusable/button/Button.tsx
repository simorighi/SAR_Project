import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  // Cambia da string a React.ReactNode per la massima flessibilità
  text: React.ReactNode; 
  textColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  textColor = "#000000",
  backgroundColor = "#ffffff",
  borderColor = "#000000",
  onClick
}) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '12px 28px',
        backgroundColor: backgroundColor,
        color: textColor,
        border: `1px solid ${borderColor}`,
        textTransform: 'uppercase',
        letterSpacing: '2px',
        fontSize: '0.75rem',
        fontWeight: '600',
        cursor: 'pointer'
      }}
    >
      {/* Usando ReactNode, qui dentro può finire qualsiasi cosa */}
      {text}
    </motion.button>
  );
};

export default Button;