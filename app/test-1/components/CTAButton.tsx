'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CTAButton() {
  return (
    <>
      {/* Desktop : Texte + Bouton alignés à gauche */}
      <div className="hidden lg:flex w-full lg:w-[700px] flex-col justify-start items-start gap-6">
        {/* Texte au-dessus du bouton */}
        <div className="text-left">
          <span className="text-slate-400 text-base font-medium leading-6" style={{ fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.02em' }}>
            On a trouvé les meilleurs plans pour que ton loyer devienne ton appartement.
          </span>
        </div>

        {/* Bouton CTA avec pulse */}
        <div className="flex flex-col items-start gap-3">
          <motion.div
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2.5,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
            className="w-[320px]"
          >
            <Link
              href="/quiz/1"
              className="w-full h-14 rounded-full text-white font-semibold text-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:brightness-110"
              style={{
                fontFamily: 'var(--font-inter-display)',
                letterSpacing: '-0.04em',
                fontSize: '17px',
                lineHeight: '1',
                background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
                boxShadow: '0 0 30px 0 rgba(99, 102, 241, 0.4), 0 4px 20px 0 rgba(0,0,0,0.2)',
              }}
            >
              Voir mes options
            </Link>
          </motion.div>
          <p className="text-slate-500 text-xs font-normal" style={{ fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.02em' }}>
            Quiz rapide · 2 min · Sans engagement
          </p>
        </div>
      </div>

      {/* Mobile : Texte + Bouton fixés en bas avec fond glass */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0F172A]/90 backdrop-blur-xl border-t border-white/10 px-5 py-4 flex flex-col items-center gap-3">
        {/* Texte au-dessus du bouton */}
        <div className="text-center">
          <span className="text-slate-400 text-sm font-medium leading-5" style={{ fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.02em' }}>
            On a trouvé les meilleurs plans pour que ton loyer devienne ton appartement.
          </span>
        </div>

        <motion.div
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 2.5,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
          className="w-full"
        >
          <Link
            href="/quiz/1"
            className="w-full h-14 rounded-full text-white font-semibold text-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:brightness-110"
            style={{
              fontFamily: 'var(--font-inter-display)',
              letterSpacing: '-0.04em',
              fontSize: '17px',
              lineHeight: '1',
              background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
              boxShadow: '0 0 30px 0 rgba(99, 102, 241, 0.4), 0 4px 20px 0 rgba(0,0,0,0.2)',
            }}
          >
            Voir mes options
          </Link>
        </motion.div>
      </div>
    </>
  );
}
