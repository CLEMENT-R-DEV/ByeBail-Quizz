'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CTAButton() {
  return (
    <div className="w-full lg:w-[573px] flex flex-col justify-start items-center gap-7">
      {/* Texte au-dessus du bouton */}
      <div className="self-stretch text-center justify-center">
        <span className="text-zinc-500 text-base font-medium font-['Satoshi'] leading-5">
          On a trouvé les meilleurs plans
        </span>
        <br className="hidden lg:inline" />
        <span className="text-zinc-500 text-base font-medium font-['Satoshi'] leading-5">
          pour que ton loyer devienne ton appartement.
        </span>
      </div>

      {/* Bouton CTA avec pulse */}
      <div className="flex flex-col items-center gap-3">
        <motion.div
          animate={{
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
          className="w-full lg:w-[358px]"
        >
          <Link
            href="/quiz/1"
            className="w-full h-14 rounded-[105px] bg-[#FE8253] hover:bg-[#e67349] text-white font-semibold text-lg flex items-center justify-center cursor-pointer"
            style={{
              fontFamily: 'var(--font-crimson-pro), serif',
              fontSize: '18px',
              lineHeight: '1',
              padding: '0 18px',
              boxShadow: '0 0 8.8px 0 #DEE3E7 inset, 0 -21px 20.8px 0 rgba(236, 72, 9, 0.37) inset, 0 0 80.5px 0 rgba(236, 72, 9, 0.28)',
            }}
          >
            Je dis Bye à mon Bail
          </Link>
        </motion.div>
        <p className="text-zinc-400 text-xs font-normal font-['Satoshi']">
          Quiz rapide · 2 min · Sans engagement
        </p>
      </div>
    </div>
  );
}
