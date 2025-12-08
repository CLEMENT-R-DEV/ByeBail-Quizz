'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ContinueButton from '@/components/quiz/ContinueButton';
import { AnimatedText } from '@/components/ui/AnimatedText';

// Ease curves professionnelles
const easeOutExpo = [0.16, 1, 0.3, 1] as const;
const easeOutBack = [0.34, 1.56, 0.64, 1] as const;
const easeInOutCubic = [0.65, 0, 0.35, 1] as const;
const easeOutQuart = [0.25, 1, 0.5, 1] as const;

export default function EmmaPage() {
  const router = useRouter();
  const [phase, setPhase] = useState(0);
  // phase 0: texte intro
  // phase 1: labels comparaison
  // phase 2: texte conclusion

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase(1), 2800);
    const timer2 = setTimeout(() => setPhase(2), 6000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleBack = () => {
    router.back();
  };

  const handleContinue = () => {
    router.push('/quiz/7');
  };

  return (
    <div className="h-[100dvh] w-full relative overflow-hidden flex flex-col">
      {/* Background */}
      <Image
        src="/images/demenagement.svg"
        alt="Emma locataire vs Emma propriétaire"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay radial gradient */}
      <div
        className="absolute inset-0 z-[5]"
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 70%)'
        }}
      />

      {/* Contenu superposé */}
      <div className="relative z-10 flex-1 w-full flex flex-col px-4 pt-6 pb-4 overflow-hidden">
        {/* Bouton retour */}
        <motion.button
          onClick={handleBack}
          className="self-start px-5 py-3 bg-white rounded-lg cursor-pointer"
          style={{ boxShadow: 'inset 0px 0px 4px 0px rgba(0,0,0,0.10)' }}
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

        {/* Zone centrale */}
        <div className="flex-1 flex flex-col justify-center items-center overflow-visible">
          <AnimatePresence mode="wait">
            {/* Phase 0: Texte intro */}
            {phase === 0 && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  y: -40,
                  scale: 0.92,
                  filter: 'blur(8px)'
                }}
                transition={{
                  duration: 0.8,
                  ease: easeOutQuart
                }}
                className="text-center px-4 overflow-visible"
                style={{ fontFamily: 'var(--font-inter-tight)' }}
              >
                <div style={{
                  color: '#FFF',
                  fontSize: '28px',
                  fontWeight: 600,
                  lineHeight: '1.3',
                  letterSpacing: '-0.84px',
                }}>
                  <AnimatedText text="Imagine Emma :" delay={0.3} />
                </div>
                <div style={{
                  color: '#F0F0F0',
                  fontSize: '24px',
                  fontWeight: 400,
                  lineHeight: '1.4',
                  letterSpacing: '-0.72px',
                  marginTop: '16px',
                }}>
                  <AnimatedText text="Trois ans après avoir" delay={0.7} />
                  <br />
                  <AnimatedText text="emménagé, elle souhaite" delay={1.1} />
                  <br />
                  <AnimatedText text="changer d'appart :" delay={1.5} />
                </div>
              </motion.div>
            )}

            {/* Phase 1: Labels comparaison */}
            {phase === 1 && (
              <motion.div
                key="labels"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{
                  opacity: 0,
                  y: -30,
                  scale: 0.9,
                  filter: 'blur(6px)'
                }}
                transition={{
                  duration: 0.7,
                  ease: easeOutQuart
                }}
                className="w-full flex justify-between items-stretch gap-3 px-2"
              >
                {/* Label Locataire - gauche */}
                <motion.div
                  initial={{ opacity: 0, x: -50, scale: 0.85 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{
                    delay: 0.1,
                    duration: 0.8,
                    ease: easeOutBack
                  }}
                  className="flex-1 text-center p-4 rounded-xl"
                  style={{
                    background: 'rgba(239, 68, 68, 0.15)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.5, ease: easeOutExpo }}
                    className="text-red-400 font-semibold text-sm"
                    style={{ fontFamily: 'var(--font-inter-tight)' }}
                  >
                    Emma locataire
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.4, ease: easeOutExpo }}
                    className="text-white text-xs mt-2"
                    style={{ fontFamily: 'var(--font-inter-tight)' }}
                  >
                    550 €/mois × 3 ans
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.65, duration: 0.6, ease: easeOutBack }}
                    className="text-red-300 font-bold text-base mt-2"
                    style={{ fontFamily: 'var(--font-inter-tight)' }}
                  >
                    → 19 800 € perdus
                  </motion.div>
                </motion.div>

                {/* Label Propriétaire - droite */}
                <motion.div
                  initial={{ opacity: 0, x: 50, scale: 0.85 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{
                    delay: 0.35,
                    duration: 0.8,
                    ease: easeOutBack
                  }}
                  className="flex-1 text-center p-4 rounded-xl"
                  style={{
                    background: 'rgba(34, 197, 94, 0.15)',
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5, ease: easeOutExpo }}
                    className="text-green-400 font-semibold text-sm"
                    style={{ fontFamily: 'var(--font-inter-tight)' }}
                  >
                    Emma propriétaire
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.75, duration: 0.4, ease: easeOutExpo }}
                    className="text-white text-xs mt-2"
                    style={{ fontFamily: 'var(--font-inter-tight)' }}
                  >
                    550 €/mois × 3 ans
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9, duration: 0.6, ease: easeOutBack }}
                    className="text-green-300 font-bold text-base mt-2"
                    style={{ fontFamily: 'var(--font-inter-tight)' }}
                  >
                    → 19 800 € gagnés
                  </motion.div>
                </motion.div>
              </motion.div>
            )}

            {/* Phase 2: Texte conclusion */}
            {phase === 2 && (
              <motion.div
                key="conclusion"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.7,
                  ease: easeOutQuart
                }}
                className="text-center px-4"
                style={{ fontFamily: 'var(--font-inter-tight)' }}
              >
                <div style={{
                  color: '#F0F0F0',
                  fontSize: '20px',
                  fontWeight: 400,
                  lineHeight: '1.4',
                  letterSpacing: '-0.6px',
                }}>
                  <AnimatedText text="Après 3 ans, elle revend," delay={0.1} />
                  <br />
                  <AnimatedText text="stoppe son crédit et récupère" delay={0.5} />
                  <br />
                  <span style={{ color: '#86EFAC', fontWeight: 600 }}>
                    <AnimatedText text="19 800 € de capital" delay={0.9} />
                  </span>
                  <AnimatedText text="," delay={1.2} />
                  <br />
                  <AnimatedText text="plus la valeur de son appart" delay={1.3} />
                  <br />
                  <AnimatedText text="qui a grimpé entre-temps." delay={1.7} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bouton Continuer */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{
            opacity: phase === 2 ? 1 : 0,
            y: phase === 2 ? 0 : 20,
            scale: phase === 2 ? 1 : 0.9
          }}
          transition={{
            duration: 0.6,
            delay: phase === 2 ? 2.3 : 0,
            ease: easeOutExpo
          }}
          style={{ pointerEvents: phase === 2 ? 'auto' : 'none' }}
        >
          <ContinueButton onClick={handleContinue} disabled={false} />
        </motion.div>
      </div>
    </div>
  );
}
