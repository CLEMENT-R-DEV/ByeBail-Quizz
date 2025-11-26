'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { checkmarkVariants } from '@/lib/animations';

interface ImageChoiceProps {
  id: string;
  label: string;
  image: string;
  desktopImage?: string;
  selected: boolean;
  onClick: () => void;
  index?: number;
}

export default function ImageChoice({
  id,
  label,
  image,
  desktopImage,
  selected,
  onClick,
  index = 0,
}: ImageChoiceProps) {
  return (
    <motion.button
      onClick={onClick}
<<<<<<< Updated upstream
      className={`
        w-full h-full
        relative
        cursor-pointer
        transition-all duration-200
        ${selected ? 'scale-[1.03]' : 'scale-100 hover:scale-[1.03]'}
      `}
    >
      {/* Image avec bordure blanche de 8px */}
      <div className="relative w-full aspect-square lg:aspect-auto lg:h-full border-8 border-white rounded-2xl overflow-hidden">
        {/* Image mobile */}
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
      {/* Image avec bordure blanche de 8px */}
      <motion.div
        animate={{
          scale: selected ? 1.08 : 1,
          boxShadow: selected
            ? '0px 0px 30px rgba(155, 123, 248, 0.3)'
            : '0px 0px 0px rgba(155, 123, 248, 0)',
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 25,
        }}
        className="relative w-full aspect-square rounded-2xl overflow-hidden"
        style={{
          border: selected
            ? '8px solid rgba(155, 123, 248, 0.3)'
            : '8px solid white',
        }}
      >
>>>>>>> Stashed changes
        <Image
          src={image}
          alt={label}
          fill
          className={`object-fill ${desktopImage ? 'lg:hidden' : ''}`}
          sizes="(max-width: 768px) 50vw, 25vw"
        />
<<<<<<< Updated upstream
        {/* Image desktop */}
        {desktopImage && (
          <Image
            src={desktopImage}
            alt={label}
            fill
            className="object-fill hidden lg:block"
            sizes="25vw"
          />
        )}
      </div>
=======
      </motion.div>
>>>>>>> Stashed changes

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
