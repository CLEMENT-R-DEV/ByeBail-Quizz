'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ContinueButton from '@/components/quiz/ContinueButton';
import { AnimatedText } from '@/components/ui/AnimatedText';

export default function ApportPage() {
  const router = useRouter();
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Après 1.5 secondes, afficher le texte
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleBack = () => {
    router.back();
  };

  const handleContinue = () => {
    router.push('/quiz/5');
  };

  return (
    <div className="h-[100dvh] w-full relative overflow-hidden flex flex-col">
      {/* Background avec blur animé */}
      <motion.div
        className="absolute inset-0"
        animate={{ filter: showText ? 'blur(4px)' : 'blur(0px)' }}
        transition={{ duration: 0.8 }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/compressed/BFMplateau_compressed.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Overlay radial gradient */}
      <div
        className="absolute inset-0 z-[5]"
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.2) 70%)'
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

        {/* Texte centré avec animation lettre par lettre */}
        <div className="flex-1 flex justify-center items-center overflow-visible">
          <AnimatePresence>
            {showText && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center px-4 overflow-visible"
                style={{ fontFamily: 'var(--font-inter-tight)', overflow: 'visible' }}
              >
                <div style={{
                  color: '#FFF',
                  fontSize: '26px',
                  fontWeight: 600,
                  lineHeight: '1.3',
                  letterSpacing: '-0.78px',
                  overflow: 'visible',
                }}>
                  <AnimatedText text="On t'a toujours dit qu'il" delay={0} />
                  <br />
                  <AnimatedText text="fallait des " delay={0.4} />
                  <span style={{ color: '#F6B292' }}>
                    <AnimatedText text="dizaines de" delay={0.6} />
                  </span>
                  <br />
                  <span style={{ color: '#F6B292' }}>
                    <AnimatedText text="milliers d'euros" delay={0.9} />
                  </span>
                  <AnimatedText text=" d'apport." delay={1.2} />
                </div>
                <div style={{
                  color: '#FFF',
                  fontSize: '26px',
                  fontWeight: 600,
                  lineHeight: '1.3',
                  letterSpacing: '-0.78px',
                  marginTop: '24px',
                  overflow: 'visible',
                }}>
                  <AnimatedText text="Ce mythe s'arrête" delay={1.6} />
                  <br />
                  <AnimatedText text="aujourd'hui." delay={2.0} />
                </div>
                <div style={{
                  color: '#F0F0F0',
                  fontSize: '22px',
                  fontWeight: 400,
                  lineHeight: '1.4',
                  letterSpacing: '-0.66px',
                  marginTop: '16px',
                  overflow: 'visible',
                }}>
                  <AnimatedText text="Avec ByeBail, environ" delay={2.4} />
                  <br />
                  <span style={{ color: '#F6B292' }}>
                    <AnimatedText text="2 ou 3 mois de loyer" delay={2.7} />
                  </span>
                  <AnimatedText text=" suffisent." delay={3.0} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bouton Continuer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showText ? 1 : 0 }}
          transition={{ duration: 0.5, delay: showText ? 0.5 : 0 }}
          style={{ pointerEvents: showText ? 'auto' : 'none' }}
        >
          <ContinueButton onClick={handleContinue} disabled={false} />
        </motion.div>
      </div>
    </div>
  );
}
