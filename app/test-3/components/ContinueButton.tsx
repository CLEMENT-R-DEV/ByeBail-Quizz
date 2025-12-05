'use client';

import { motion } from 'framer-motion';

interface ContinueButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export default function ContinueButton({ onClick, disabled = false }: ContinueButtonProps) {
  return (
    <div className="fixed bottom-5 left-4 right-4 z-50 lg:static lg:left-auto lg:right-auto lg:bottom-auto lg:z-auto lg:pb-[60px] lg:pt-[32px] lg:w-full lg:h-[172px] lg:px-[140px] lg:py-[40px] lg:border lg:border-black/10 lg:bg-white lg:shadow-[0_-10px_27.5px_0_rgba(104,137,228,0.04)] lg:flex lg:flex-col lg:items-center lg:gap-[10px]">
      <div className="lg:w-[750px] lg:flex lg:flex-col lg:items-end lg:gap-[10px]">
        <motion.button
          onClick={onClick}
          disabled={disabled}
          whileHover={!disabled ? { scale: 1.02 } : {}}
          whileTap={!disabled ? { scale: 0.98 } : {}}
          animate={{ opacity: disabled ? 0.5 : 1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className={`w-full lg:w-[358px] h-14 rounded-[105px] text-white font-semibold text-lg flex items-center justify-center ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
          style={{
            fontFamily: 'var(--font-inter-display)',
            letterSpacing: '-0.06em',
            fontSize: '18px',
            lineHeight: '1',
            padding: '0 18px',
            background: disabled ? '#9CA3AF' : 'linear-gradient(135deg, #1F2937 0%, #374151 100%)',
            ...(!disabled ? { boxShadow: '0 0 8.8px 0 rgba(255,255,255,0.08) inset, 0 -21px 20.8px 0 rgba(0,0,0,0.25) inset, 0 4px 20px 0 rgba(0,0,0,0.15)' } : {}),
          }}
        >
          Continue
        </motion.button>
      </div>
    </div>
  );
}
