'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ContinueButton from '@/components/quiz/ContinueButton';

export default function ApportPage() {
  const router = useRouter();
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    // Après 2 secondes, afficher l'overlay avec le texte
    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleBack = () => {
    router.back();
  };

  const handleContinue = () => {
    router.push('/quiz/5');
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: '#F5EBE1' }}
    >
      {/* Éléments décoratifs */}
      <div
        className="w-72 h-96 absolute left-[49px] top-[225px] bg-stone-300/10"
        style={{ boxShadow: 'inset 0px 0px 12px 0px rgba(0,0,0,0.02)' }}
      />
      <div className="w-96 h-80 absolute left-[-127px] top-[301px] bg-white/25 rounded-full blur-3xl" />

      {/* Contenu principal avec layout similaire aux questions */}
      <div className="relative px-4 pt-10 pb-24 lg:pb-10 min-h-screen flex flex-col gap-10">
        {/* Header simple avec bouton retour */}
        <motion.button
          onClick={handleBack}
          className="self-start px-5 py-3 bg-white rounded-lg cursor-pointer"
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

        {/* Contenu central - carte avec image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 300, damping: 25 }}
          className="flex-1 flex flex-col items-center p-5 gap-5"
          style={{
            borderRadius: '32px',
            border: '1px solid rgba(255, 255, 255, 0.10)',
            background: 'rgba(250, 245, 241, 0.50)',
          }}
        >
          {/* Carte avec image */}
          <div
            className="w-full flex-1 min-h-[300px] sm:min-h-[400px] relative rounded-2xl overflow-hidden flex justify-center items-center"
          >
            {/* Image de fond avec blur animé */}
            <motion.div
              className="absolute inset-0"
              animate={{ filter: showOverlay ? 'blur(8px)' : 'blur(0px)' }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/apport.png"
                alt="Apport : la peur n°1 des français"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Overlay sombre quand le texte apparaît */}
            <AnimatePresence>
              {showOverlay && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-black/40"
                />
              )}
            </AnimatePresence>

            {/* Texte superposé - centré verticalement */}
            <AnimatePresence>
              {showOverlay && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6"
                >
                  <div style={{ fontFamily: 'var(--font-inter-tight)' }}>
                    <span className="text-white text-3xl font-bold">On t&apos;a toujours dit qu&apos;il fallait des </span>
                    <span className="text-orange-200 text-3xl font-bold">dizaines de milliers d&apos;euros d&apos;apport.</span>
                    <br /><br />
                    <span className="text-white text-3xl font-bold">Ce mythe s&apos;arrête aujourd&apos;hui.<br />Avec ByeBail, environ </span>
                    <span className="text-orange-200 text-3xl font-bold">2 ou 3 mois de loyer suffisent.</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Bouton Continuer - toujours présent mais invisible au départ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showOverlay ? 1 : 0 }}
          transition={{ duration: 0.5, delay: showOverlay ? 0.4 : 0 }}
          style={{ pointerEvents: showOverlay ? 'auto' : 'none' }}
        >
          <ContinueButton onClick={handleContinue} disabled={false} />
        </motion.div>
      </div>
    </div>
  );
}
