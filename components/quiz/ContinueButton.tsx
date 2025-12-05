'use client';

import { motion } from 'framer-motion';

interface ContinueButtonProps {
  onClick: () => void;
  disabled?: boolean;
  label?: string;
}

export default function ContinueButton({ onClick, disabled = false, label = "Continuer" }: ContinueButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className="pb-[0px] pt-[0px] lg:w-full lg:h-[172px] lg:px-[140px] lg:py-[40px] lg:border lg:border-black/10 lg:bg-white lg:shadow-[0_-10px_27.5px_0_rgba(104,137,228,0.04)] lg:flex lg:flex-col lg:items-center lg:gap-[10px]"
    >
      <div className="lg:w-[750px] lg:flex lg:flex-col lg:items-end lg:gap-[10px]">
        <motion.button
          onClick={onClick}
          disabled={disabled}
          whileHover={!disabled ? { scale: 1.02 } : {}}
          whileTap={!disabled ? { scale: 0.98 } : {}}
          animate={{
            opacity: disabled ? 0.5 : 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 25,
          }}
          className={`
            w-full lg:w-[358px] h-14 px-8 py-4 rounded-xl text-white font-semibold text-base
            flex items-center justify-center relative overflow-hidden
            ${
              disabled
                ? 'bg-green-300 cursor-not-allowed'
                : 'bg-gradient-to-b from-green-400 to-green-600 cursor-pointer'
            }
          `}
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '16px',
            lineHeight: '1.25',
            textShadow: !disabled ? '0px 1px 4px rgba(0, 0, 0, 0.25)' : 'none',
            ...(
              !disabled
                ? {
                    boxShadow: '0px 6px 17.6px 0px rgba(84, 212, 105, 0.40)',
                    outline: '1px solid rgb(22 101 52)',
                  }
                : {}
            ),
          }}
        >
          {/* Effets lumineux internes */}
          {!disabled && (
            <>
              <div className="absolute w-9 h-9 left-[200px] top-[-9px] bg-orange-50 rounded-full blur-xl" />
              <div className="absolute w-9 h-9 left-[131px] top-[29px] bg-green-200 rounded-full blur-xl" />
              <div className="absolute w-16 h-16 left-[44px] top-[29px] bg-green-700 rounded-full blur-2xl" />
              <div className="absolute w-10 h-10 left-[275px] top-[-11px] bg-green-700 rounded-full blur-2xl" />
            </>
          )}
          <span className="relative z-10">{label}</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
