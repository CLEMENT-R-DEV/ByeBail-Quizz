'use client';

import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  delay?: number;
  style?: React.CSSProperties;
}

// Composant pour animer le texte lettre par lettre
export const AnimatedText = ({
  text,
  delay = 0,
  style
}: AnimatedTextProps) => {
  const letters = text.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.028, // Plus fluide
        delayChildren: delay
      }
    }
  };

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
