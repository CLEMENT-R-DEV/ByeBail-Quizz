'use client';

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

interface MoneyInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  suffix?: string; // "€", "€/mois", "ans"
}

export default function MoneyInput({
  value,
  onChange,
  placeholder = '',
  suffix = '€',
}: MoneyInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);
  const [inputWidth, setInputWidth] = useState(60);

  // Mesurer la largeur du texte pour ajuster l'input
  useEffect(() => {
    if (measureRef.current) {
      const textToMeasure = value || placeholder;
      measureRef.current.textContent = textToMeasure;
      const width = measureRef.current.offsetWidth;
      setInputWidth(Math.max(width + 4, 30)); // Min 30px
    }
  }, [value, placeholder]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Permettre uniquement les chiffres et le point décimal
    const newValue = e.target.value.replace(/[^0-9.]/g, '');
    onChange(newValue);
  };

  // Clic sur le container = focus sur l'input
  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className="w-full lg:w-[388px]"
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
        onClick={handleContainerClick}
        className="w-full h-[72px] px-4 rounded-[18px] border border-white/10 flex items-center backdrop-blur-md cursor-text"
        style={{ background: 'rgba(250, 245, 241, 0.85)' }}
      >
        {/* Wrapper inline pour input + suffix */}
        <div className="inline-flex items-center">
          <input
            ref={inputRef}
            type="text"
            inputMode="decimal"
            value={value}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            className="bg-transparent border-none focus:outline-none text-stone-800"
            style={{
              fontFamily: 'var(--font-inter-tight)',
              fontSize: '18px',
              fontWeight: 500,
              lineHeight: '110%',
              width: `${inputWidth}px`,
              minWidth: '30px',
            }}
          />

          {/* Suffix qui suit le texte */}
          <span
            className="text-stone-500 font-medium ml-1"
            style={{
              fontFamily: 'var(--font-inter-tight)',
              fontSize: '18px',
              fontWeight: 500,
              lineHeight: '110%',
            }}
          >
            {suffix}
          </span>
        </div>

        {/* Span invisible pour mesurer la largeur du texte */}
        <span
          ref={measureRef}
          className="absolute invisible whitespace-pre"
          style={{
            fontFamily: 'var(--font-inter-tight)',
            fontSize: '18px',
            fontWeight: 500,
          }}
        />

        <style jsx>{`
          input::placeholder {
            color: #7A7572;
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
