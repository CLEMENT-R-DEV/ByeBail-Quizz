'use client';

import { motion } from 'framer-motion';

interface ContinueButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export default function ContinueButton({ onClick, disabled = false }: ContinueButtonProps) {
  return (
<<<<<<< Updated upstream
    <div className="pb-[60px] pt-[32px] lg:w-full lg:h-[172px] lg:px-[140px] lg:py-[40px] lg:border lg:border-black/10 lg:bg-white lg:shadow-[0_-10px_27.5px_0_rgba(104,137,228,0.04)] lg:flex lg:flex-col lg:items-center lg:gap-[10px]">
      <div className="lg:w-[750px] lg:flex lg:flex-col lg:items-end lg:gap-[10px]">
        <button
          onClick={onClick}
          disabled={disabled}
          className={`
            w-full lg:w-[358px] h-14 rounded-[105px] text-white font-semibold text-lg
            transition-all duration-200 flex items-center justify-center
            ${
              disabled
                ? 'bg-orange-300 cursor-not-allowed opacity-50'
                : 'bg-[#FE8253] hover:bg-[#e67349] active:scale-98 cursor-pointer'
            }
          `}
          style={{
            fontFamily: 'var(--font-crimson-pro), serif',
            fontSize: '18px',
            lineHeight: '1',
            padding: '0 18px',
            ...(
              !disabled
                ? {
                    boxShadow: '0 0 8.8px 0 #DEE3E7 inset, 0 -21px 20.8px 0 rgba(236, 72, 9, 0.37) inset, 0 0 80.5px 0 rgba(236, 72, 9, 0.28)',
                  }
                : {}
            ),
          }}
        >
          Continue
        </button>
      </div>
    </div>
=======
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className="pb-[60px] pt-[32px]"
    >
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
          w-full h-14 rounded-[105px] text-white font-semibold text-lg
          flex items-center justify-center
          ${
            disabled
              ? 'bg-orange-300 cursor-not-allowed'
              : 'bg-[#FE8253] hover:bg-[#e67349]'
          }
        `}
        style={{
          fontFamily: 'var(--font-crimson-pro), serif',
          fontSize: '18px',
          lineHeight: '1',
          padding: '0 18px',
          ...(
            !disabled
              ? {
                  boxShadow: '0 0 8.8px 0 #DEE3E7 inset, 0 -21px 20.8px 0 rgba(236, 72, 9, 0.37) inset, 0 0 80.5px 0 rgba(236, 72, 9, 0.28)',
                }
              : {}
          ),
        }}
      >
        Continue
      </motion.button>
    </motion.div>
>>>>>>> Stashed changes
  );
}
