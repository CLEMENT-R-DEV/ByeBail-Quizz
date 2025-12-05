'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { checkmarkVariants } from '@/lib/animations';

interface ChoiceCardProps {
  id: string;
  label: string;
  subtitle?: string;
  image?: string;
  desktopImage?: string;
  selected: boolean;
  onClick: () => void;
  fullSize?: boolean;
  compactImage?: boolean;
  largeCompactImage?: boolean;
  fitContent?: boolean;
  labelClassName?: string;
  subtitleClassName?: string;
  index?: number;
  verticalPadding?: number; // padding vertical personnalisé pour les cartes sans image (en px)
  hideCheckmark?: boolean; // cacher l'icône de validation (pour les petites cartes)
}

export default function ChoiceCard({
  id,
  label,
  subtitle,
  image,
  desktopImage,
  selected,
  onClick,
  fullSize = false,
  compactImage = false,
  largeCompactImage = false,
  fitContent = false,
  labelClassName,
  subtitleClassName,
  index = 0,
  verticalPadding,
  hideCheckmark = false,
}: ChoiceCardProps) {
  // Style simplifié pour les cartes sans image
  if (!image) {
    return (
      <motion.button
        onClick={onClick}
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
        className="relative cursor-pointer w-full h-full"
      >
        <motion.div
          animate={{
            scale: selected ? 1.03 : 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 25,
          }}
          className="w-full h-full rounded-[18px] flex justify-center items-center gap-[10px]"
          style={{
            padding: verticalPadding ? `${verticalPadding}px 16px` : '16px',
            background: selected
              ? 'linear-gradient(180deg, rgba(210, 182, 143, 0.75) 0%, rgba(170, 131, 95, 0.75) 100%), rgba(250, 245, 241, 0.50)'
              : 'rgba(250, 245, 241, 0.50)',
            border: '1px solid rgba(255, 255, 255, 0.27)',
            boxShadow: '0px 0px 17.1px rgba(210, 182, 143, 0.24)',
          }}
        >
          <motion.div
            layout
            className="text-center whitespace-nowrap"
            animate={{
              color: selected ? '#FFFFFF' : '#7A7572',
            }}
            transition={{
              layout: { type: 'spring', stiffness: 300, damping: 25 },
              color: { duration: 0.2 },
            }}
            style={{
              fontFamily: 'var(--font-inter-tight)',
              fontSize: '16px',
              fontWeight: 500,
              lineHeight: '110%',
            }}
          >
            {label}
          </motion.div>

          {/* Icône de validation */}
          {!hideCheckmark && (
            <AnimatePresence mode="popLayout">
              {selected && (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.5, width: 0 }}
                  animate={{ opacity: 1, scale: 1, width: 'auto' }}
                  exit={{ opacity: 0, scale: 0.5, width: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 25,
                  }}
                >
                  <Image
                    src="/images/SVG_valide.svg"
                    alt="Validé"
                    width={24}
                    height={24}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </motion.div>
      </motion.button>
    );
  }

  // Style avec image (existant)
  return (
    <motion.button
      onClick={onClick}
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
      className={`
        relative
        cursor-pointer
        ${fullSize ? 'w-full h-full' : ''}
      `}
    >
      <motion.div
        animate={{
          scale: selected ? 1.03 : 1,
          boxShadow: selected
            ? '0px 0px 30px rgba(155, 123, 248, 0.25)'
            : '0px 0px 27.5px rgba(104, 137, 228, 0.1)',
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 25,
        }}
        className="h-full flex flex-col justify-center items-center p-[10px] bg-[#FDFEFF] rounded-[18px]"
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
