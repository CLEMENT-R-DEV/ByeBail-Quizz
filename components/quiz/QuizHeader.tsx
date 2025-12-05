'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TOTAL_QUESTIONS } from '@/lib/questions';

interface QuizHeaderProps {
  currentQuestion: number;
  showProgress?: boolean;
}

export default function QuizHeader({ currentQuestion, showProgress = true }: QuizHeaderProps) {
  const router = useRouter();

  const handleBack = () => {
    if (currentQuestion > 1) {
      router.push(`/quiz/${currentQuestion - 1}`);
    } else {
      router.push('/');
    }
  };

  const progressPercentage = Math.round((currentQuestion / TOTAL_QUESTIONS) * 100);
  const completedSegments = Math.ceil((currentQuestion / TOTAL_QUESTIONS) * 9);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="w-full flex justify-start items-center gap-1"
      style={{
        boxShadow: '0px 4px 9px 0px rgba(0,0,0,0.01), 0px 17px 17px 0px rgba(0,0,0,0.01), 0px 37px 22px 0px rgba(0,0,0,0.01), 0px 66px 27px 0px rgba(0,0,0,0.00), 0px 104px 29px 0px rgba(0,0,0,0.00)'
      }}
    >
      {/* Bouton retour */}
      <motion.button
        onClick={handleBack}
        className="self-stretch px-5 py-3 bg-white rounded-lg flex justify-start items-center gap-2.5 cursor-pointer"
        style={{
          boxShadow: 'inset 0px 0px 4px 0px rgba(0,0,0,0.10)'
        }}
        aria-label="Retour"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="relative w-2.5 h-4">
          <Image
            src="/images/Vector.svg"
            alt="Retour"
            fill
            className="object-contain"
          />
        </div>
      </motion.button>

      {/* Barre de progression */}
      {showProgress && (
        <div
          className="flex-1 px-3.5 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-black/5 flex flex-col justify-center items-start gap-2"
          style={{
            boxShadow: 'inset 0px 0px 11px 0px rgba(0,0,0,0.10)'
          }}
        >
          {/* Texte de progression */}
          <div
            className="self-stretch text-center text-xs font-normal"
            style={{
              fontFamily: 'var(--font-inter-tight)',
              color: 'rgba(74, 69, 67, 0.70)',
              lineHeight: '100%',
              letterSpacing: '-0.12px',
            }}
          >
            Bravo, t&apos;es à {progressPercentage}% de ton futur appartement
          </div>

          {/* Segments de progression */}
          <div className="self-stretch flex justify-start items-start gap-1">
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="flex-1 h-1.5 rounded-[226px]"
                style={{
                  backgroundColor: index < completedSegments ? '#D2B68F' : '#F5EBE1',
                  boxShadow: index < completedSegments
                    ? 'inset 0px -1px 2px 0px rgba(255,255,255,0.25), inset 0px 1px 2px 0px rgba(255,255,255,0.25)'
                    : 'inset 0px 0px 1px 0px rgba(0,0,0,0.09)'
                }}
              />
            ))}
          </div>
        </div>
      )}
    </motion.header>
  );
}
