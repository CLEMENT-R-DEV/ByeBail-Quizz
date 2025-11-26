'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: 'text' | 'number';
  hideArrows?: boolean;
}

export default function TextInput({
  value,
  onChange,
  placeholder = '',
  type = 'text',
  hideArrows = false
}: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleIncrement = () => {
    if (type === 'number') {
      const currentValue = parseInt(value) || 0;
      onChange(String(currentValue + 1));
    }
  };

  const handleDecrement = () => {
    if (type === 'number') {
      const currentValue = parseInt(value) || 0;
      if (currentValue > 0) {
        onChange(String(currentValue - 1));
      }
    }
  };

  return (
<<<<<<< Updated upstream
    <div className="w-full lg:w-[388px] h-14 lg:h-[77px] p-2.5 lg:px[18px] bg-white rounded-2xl outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 flex justify-center items-center gap-2.5">
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="flex-1 justify-center text-gray-900 text-sm lg:text-lg font-normal font-['Satoshi'] leading-4 lg:leading-[110%] bg-transparent border-none focus:outline-none placeholder:text-gray-900/40 lg:placeholder:text-[rgba(17,24,39,0.40)] lg:placeholder:text-lg lg:placeholder:leading-[110%] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&[type=number]]:[-moz-appearance:textfield]"
      />

      {/* Icônes up/down */}
      {!hideArrows && (
        <div className="h-6 px-1 inline-flex flex-col justify-start items-start gap-1">
          {/* Flèche haut */}
          <div
            onClick={handleIncrement}
=======
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <motion.div
        animate={{
          scale: isFocused ? 1.02 : 1,
          boxShadow: isFocused
            ? '0px 0px 20px rgba(155, 123, 248, 0.15)'
            : '0px 0px 0px rgba(155, 123, 248, 0)',
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 25,
        }}
        className="w-full h-14 p-2.5 bg-white rounded-2xl outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 flex justify-center items-center gap-2.5"
      >
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="flex-1 justify-center text-gray-900 text-sm font-normal font-['Satoshi'] leading-4 bg-transparent border-none focus:outline-none placeholder:text-gray-900/40"
        />

        {/* Icônes up/down */}
        <div className="h-6 px-1 inline-flex flex-col justify-start items-start gap-1">
          {/* Flèche haut */}
          <motion.div
            onClick={handleIncrement}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8, y: -2 }}
>>>>>>> Stashed changes
            className="self-stretch flex-1 flex flex-col justify-center items-center gap-2.5 overflow-hidden cursor-pointer"
          >
            <div className="relative w-2 h-[5px]">
              <Image
                src="/images/CaretUp.svg"
                alt="Augmenter"
                fill
                className="object-contain"
              />
            </div>
<<<<<<< Updated upstream
          </div>
          {/* Flèche bas */}
          <div
            onClick={handleDecrement}
=======
          </motion.div>
          {/* Flèche bas */}
          <motion.div
            onClick={handleDecrement}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8, y: 2 }}
>>>>>>> Stashed changes
            className="self-stretch flex-1 flex flex-col justify-center items-center gap-2.5 overflow-hidden cursor-pointer"
          >
            <div className="relative w-2 h-[5px]">
              <Image
                src="/images/CaretDown.svg"
                alt="Diminuer"
                fill
                className="object-contain"
              />
            </div>
<<<<<<< Updated upstream
          </div>
        </div>
      )}
    </div>
=======
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
>>>>>>> Stashed changes
  );
}
