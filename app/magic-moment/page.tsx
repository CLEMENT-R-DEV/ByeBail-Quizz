'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedText } from '@/components/ui/AnimatedText';

const messages = [
  "On transforme ton loyer en vrais mètres carrés.",
  "On analyse les meilleures opportunités pour toi.",
  "On prépare ta simulation personnalisée.",
];

export default function MagicMomentPage() {
  const router = useRouter();
  const [currentMessage, setCurrentMessage] = useState(0);
  const [startProgress, setStartProgress] = useState(false);

  // Démarrer la progress bar après un délai
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartProgress(true);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Rotation des messages (3 messages sur 10s = ~3.3s par message)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 3300);

    return () => clearInterval(interval);
  }, []);

  // Auto-navigation après 10 secondes
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/results');
    }, 10000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="h-[100dvh] w-full relative overflow-hidden flex flex-col">
      {/* Background vidéo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/compressed/building_compressed.mp4" type="video/mp4" />
      </video>

      {/* Overlay radial gradient */}
      <div
        className="absolute inset-0 z-[5]"
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.3) 70%)'
        }}
      />

      {/* Contenu superposé */}
      <div className="relative z-10 flex-1 w-full flex flex-col justify-center items-center px-4 overflow-hidden">
        {/* Icône ByeBail */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-10"
        >
          <Image
            src="/images/byebail-icon.svg"
            alt="ByeBail"
            width={36}
            height={40}
            style={{ aspectRatio: '35.72/40.00' }}
          />
        </motion.div>

        {/* Titre principal avec animation lettre par lettre */}
        <div
          className="w-full text-center mb-10 overflow-visible"
          style={{ fontFamily: 'var(--font-inter-tight)', overflow: 'visible' }}
        >
          <div style={{
            color: '#FFF',
            fontSize: '28px',
            fontWeight: 600,
            lineHeight: '1.2',
            letterSpacing: '-0.84px',
            overflow: 'visible',
          }}>
            <AnimatedText text="On prépare ton passage" delay={0.3} />
            <br />
            <AnimatedText text="de locataire à" delay={0.8} />
            <br />
            <AnimatedText text="propriétaire." delay={1.2} />
          </div>
        </div>

        {/* Messages rotatifs avec transitions smooth */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="w-full flex justify-center items-center gap-1.5 mb-10"
        >
          <div className="w-full max-w-[320px] h-16 flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMessage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="w-full p-4 bg-white/10 backdrop-blur-sm rounded-2xl flex justify-center items-center"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div
                  className="text-center text-white text-sm font-light leading-5"
                  style={{ fontFamily: 'var(--font-inter-tight)' }}
                >
                  {messages[currentMessage]}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Progress bar Magic Moment améliorée */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full max-w-[320px]"
        >
          <div
            className="text-center text-white/80 text-xs font-medium leading-3 mb-3"
            style={{ fontFamily: 'var(--font-inter-tight)', letterSpacing: '0.5px' }}
          >
            MAGIC MOMENT
          </div>

          {/* Container de la progress bar */}
          <div
            className="w-full h-2 rounded-full overflow-hidden"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              boxShadow: 'inset 0px 1px 3px rgba(0, 0, 0, 0.2)',
            }}
          >
            {/* Barre de progression animée */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: startProgress ? 1 : 0 }}
              transition={{
                duration: 8.2, // 10s total - 1.8s delay
                ease: "linear"
              }}
              className="h-full rounded-full origin-left"
              style={{
                background: 'linear-gradient(90deg, #D0805B 0%, #F6B292 50%, #FFD4C2 100%)',
                boxShadow: '0 0 12px rgba(208, 128, 91, 0.6), 0 0 4px rgba(246, 178, 146, 0.8)',
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
