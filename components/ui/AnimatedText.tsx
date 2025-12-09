'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  delay?: number;
  style?: React.CSSProperties;
}

// Variants statiques pour éviter les re-créations
const child = {
  hidden: {
    opacity: 0,
    y: 12,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'tween' as const,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // easeOutExpo
      duration: 0.5,
    }
  }
};

// Composant pour animer le texte lettre par lettre
export const AnimatedText = ({
  text,
  delay = 0,
  style
}: AnimatedTextProps) => {
  // Mémoïser le split pour éviter les recréations
  const letters = useMemo(() => text.split(''), [text]);

  // Mémoïser le container car il dépend du delay
  const container = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.028,
        delayChildren: delay
      }
    }
  }), [delay]);

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      style={{ ...style, display: 'inline', overflow: 'visible' }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: 'inline-block', overflow: 'visible' }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
