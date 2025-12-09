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
        <div className="flex-1 flex flex-col justify-center items-center overflow-visible relative">
          {/* Phase 0: Texte intro - Position absolute pour ne pas affecter le layout */}
          <AnimatePresence>
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
                className="absolute inset-0 flex items-center justify-center px-4"
              >
                <div
                  className="px-6 py-8 rounded-3xl"
                  style={{
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%)',
                    borderTop: '1px solid rgba(255, 255, 255, 0.4)',
                    borderLeft: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                    willChange: 'opacity, transform, backdrop-filter',
                  }}
                >
                  <div
                    className="text-center overflow-visible"
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
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Phase 1+: Labels comparaison (persistent, slide up in phase 2) */}
          <div
            className="w-full flex justify-between items-stretch gap-3 px-2"
            style={{
              transform: phase === 2 ? 'translateY(-80px) scale(0.85)' : 'translateY(0)',
              opacity: phase >= 1 ? 1 : 0,
              transition: phase >= 1 ? 'transform 1s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.8s ease-out' : 'opacity 0.8s ease-out',
              pointerEvents: phase >= 1 ? 'auto' : 'none',
            }}
          >
              {/* Label Locataire - gauche */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={phase >= 1 ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: easeOutQuart
                }}
                className="flex-1 text-center p-4 rounded-xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.25) 0%, rgba(239, 68, 68, 0.15) 100%)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  willChange: 'opacity, backdrop-filter',
                }}
              >
                <div
                  className="text-red-400 font-semibold text-sm"
                  style={{ fontFamily: 'var(--font-inter-tight)' }}
                >
                  Emma locataire
                </div>
                <div
                  className="text-white text-xs mt-2"
                  style={{ fontFamily: 'var(--font-inter-tight)' }}
                >
                  550 €/mois × 3 ans
                </div>
                <div
                  className="text-red-300 font-bold text-base mt-2"
                  style={{ fontFamily: 'var(--font-inter-tight)' }}
                >
                  → 19 800 € perdus
                </div>
              </motion.div>

              {/* Label Propriétaire - droite */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={phase >= 1 ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.8,
                  ease: easeOutQuart
                }}
                className="flex-1 text-center p-4 rounded-xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.25) 0%, rgba(34, 197, 94, 0.15) 100%)',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  willChange: 'opacity, backdrop-filter',
                }}
              >
                <div
                  className="text-green-400 font-semibold text-sm"
                  style={{ fontFamily: 'var(--font-inter-tight)' }}
                >
                  Emma propriétaire
                </div>
                <div
                  className="text-white text-xs mt-2"
                  style={{ fontFamily: 'var(--font-inter-tight)' }}
                >
                  550 €/mois × 3 ans
                </div>
                <div
                  className="text-green-300 font-bold text-base mt-2"
                  style={{ fontFamily: 'var(--font-inter-tight)' }}
                >
                  → 19 800 € gagnés
                </div>
              </motion.div>
            </div>

          {/* Phase 2: Texte conclusion (below labels) */}
          {phase === 2 && (
            <motion.div
              key="conclusion"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                ease: easeOutQuart
              }}
              className="px-6 py-6 rounded-3xl mt-4"
              style={{
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%)',
                borderTop: '1px solid rgba(255, 255, 255, 0.4)',
                borderLeft: '1px solid rgba(255, 255, 255, 0.3)',
                borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                willChange: 'opacity, transform, backdrop-filter',
              }}
            >
              <div
                className="text-center"
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
              </div>
            </motion.div>
          )}
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
