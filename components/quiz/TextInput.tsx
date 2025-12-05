'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: 'text' | 'number' | 'email';
}

export default function TextInput({
  value,
  onChange,
  placeholder = '',
  type = 'text',
}: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <motion.div
        animate={{
          scale: isFocused ? 1.01 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 25,
        }}
        className="w-full h-[72px] p-4 rounded-[18px] border border-white/10 flex justify-center items-center gap-2.5 backdrop-blur-md"
        style={{ background: 'rgba(250, 245, 241, 0.85)' }}
      >
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="flex-1 text-lg font-medium bg-transparent border-none focus:outline-none text-stone-800 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&[type=number]]:[-moz-appearance:textfield]"
          style={{
            fontFamily: 'var(--font-inter-tight)',
            fontSize: '18px',
            fontWeight: 500,
            lineHeight: '110%',
          }}
        />
        <style jsx>{`
          input::placeholder {
            color: #7A7572;
            text-align: left;
            font-family: var(--font-inter-tight);
            font-size: 18px;
            font-weight: 500;
            line-height: 110%;
          }
        `}</style>
      </motion.div>
    </motion.div>
  );
}
