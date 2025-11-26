'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { checkmarkVariants } from '@/lib/animations';

interface ChoiceCardProps {
  id: string;
  label: string;
  subtitle?: string;
  image: string;
  selected: boolean;
  onClick: () => void;
<<<<<<< Updated upstream
  fullSize?: boolean;
  compactImage?: boolean;
  largeCompactImage?: boolean;
  fitContent?: boolean;
  labelClassName?: string;
  subtitleClassName?: string;
=======
  index?: number;
>>>>>>> Stashed changes
}

export default function ChoiceCard({
  id,
  label,
  subtitle,
  image,
  selected,
  onClick,
<<<<<<< Updated upstream
  fullSize = false,
  compactImage = false,
  largeCompactImage = false,
  fitContent = false,
  labelClassName,
  subtitleClassName,
=======
  index = 0,
>>>>>>> Stashed changes
}: ChoiceCardProps) {
  return (
    <motion.button
      onClick={onClick}
<<<<<<< Updated upstream
      className={`
        relative
        cursor-pointer
        transition-all duration-200
        ${selected ? 'scale-[1.03]' : 'scale-100 hover:scale-[1.03]'}
        ${fullSize ? 'w-full h-full' : ''}
      `}
    >
      <div
        className="h-full flex flex-col justify-center items-center p-[10px] bg-[#FDFEFF] rounded-[18px]"
=======
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 25,
        delay: index * 0.08 + 0.2,
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="relative"
    >
      <motion.div
        animate={{
          scale: selected ? 1.08 : 1,
          boxShadow: selected
            ? '0px 0px 30px rgba(155, 123, 248, 0.25)'
            : '0px 0px 27.5px rgba(104, 137, 228, 0.1)',
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 25,
        }}
        className="flex flex-col justify-center items-center p-[10px] bg-[#FDFEFF] rounded-[18px]"
>>>>>>> Stashed changes
        style={{
          border: selected
            ? '2px solid rgba(155, 123, 248, 0.5)'
            : '0.8px solid rgba(0, 0, 0, 0.04)',
        }}
      >
        <div
          className={`w-full bg-[#FDFEFF] rounded-lg flex flex-col items-center justify-center gap-[10px] ${
            fitContent ? 'py-[10px]' : (compactImage || largeCompactImage) ? 'aspect-square' : 'aspect-square lg:aspect-auto lg:h-full'
          }`}
          style={{
            border: '0.8px solid rgba(0, 0, 0, 0.08)',
            boxShadow: '0px 0px 27.5px rgba(104, 137, 228, 0.1)',
          }}
        >
          {/* Image */}
          <div
            className={`relative flex-shrink-0 flex justify-center items-center overflow-hidden ${
              largeCompactImage
                ? 'w-[120px] h-[80px] lg:w-[172px] lg:h-[115px]'
                : compactImage
                ? 'w-[120px] h-[80px]'
                : 'w-[92px] h-[92px] lg:w-[140px] lg:h-[140px]'
            }`}
            style={{
              background: '#FFFFFF',
              ...((compactImage || largeCompactImage) && { padding: '6.5px 26.5px' }),
              ...(!compactImage && !largeCompactImage && { aspectRatio: '1/1' }),
            }}
          >
            <Image
              src={image}
              alt={label}
              fill
              className="object-contain"
              sizes={largeCompactImage ? "(min-width: 1024px) 172px, 120px" : compactImage ? "120px" : "(min-width: 1024px) 140px, 92px"}
              style={{
                borderRadius: '28px 28px 4px 4px'
              }}
            />
          </div>

          {/* Label + Subtitle */}
          <div className="inline-flex flex-col justify-start items-center gap-0.5">
            <div className={labelClassName || "text-center justify-center text-gray-900 lg:text-[#111827] text-base lg:text-[22px] font-medium lg:font-medium font-['Satoshi'] leading-4 lg:leading-[110%]"}>
              {label}
            </div>
            {subtitle && (
              <div className={subtitleClassName || "text-center justify-center text-[rgba(17,24,39,0.60)] text-sm font-medium font-['Satoshi'] leading-[110%]"}>
                {subtitle}
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Indicateur de sélection */}
      <AnimatePresence>
        {selected && (
          <motion.div
            variants={checkmarkVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center"
          >
            <motion.svg
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </motion.svg>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
