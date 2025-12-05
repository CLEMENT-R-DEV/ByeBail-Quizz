'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ContinueButton from '@/components/quiz/ContinueButton';
import { storage } from '@/lib/storage';

export default function LoyerPerduPage() {
  const router = useRouter();
  const [loyerAnnuel, setLoyerAnnuel] = useState<number>(0);

  useEffect(() => {
    // Récupérer le loyer de la question 3 (stocké en JSON)
    const answer = storage.getAnswer(3);
    if (answer) {
      try {
        const data = JSON.parse(answer);
        const loyer = parseFloat(data.loyer) || 0;
        setLoyerAnnuel(loyer * 12);
      } catch {
        setLoyerAnnuel(0);
      }
    }
  }, []);

  const handleBack = () => {
    router.back();
  };

  const handleContinue = () => {
    router.push('/quiz/4');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
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
      <div className="relative px-4 py-10 min-h-screen flex flex-col gap-10">
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
          {/* Carte avec image et texte */}
          <div
            className="w-full flex-1 relative rounded-2xl overflow-hidden flex justify-center items-center"
            style={{
              boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0)',
            }}
          >
            {/* Image de fond */}
            <Image
              src="/images/2_48.png"
              alt="Argent qui s'envole"
              fill
              className="object-cover"
              priority
            />

            {/* Overlay sombre léger */}


            {/* Texte superposé */}
            <div className="relative z-10 flex-1 flex justify-center items-center px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="self-stretch text-center justify-start"
                style={{ fontFamily: 'var(--font-inter-tight)' }}
              >
                <span
                  style={{
                    color: '#F0F0F0',
                    textAlign: 'center',
                    fontFamily: 'var(--font-inter-tight)',
                    fontSize: '24px',
                    fontWeight: 400,
                    lineHeight: 'normal',
                    letterSpacing: '-0.72px',
                  }}
                >
                  12 mois de ton loyer <br/>actuel représentent :<br/>
                </span>
                <span
                  className="whitespace-nowrap"
                  style={{
                    color: '#FFF',
                    fontFamily: 'var(--font-inter-tight)',
                    fontSize: '28px',
                    fontWeight: 600,
                    lineHeight: 'normal',
                    letterSpacing: '-0.84px',
                  }}
                >
                  {loyerAnnuel.toLocaleString('fr-FR')}€ partis à jamais !
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bouton Continuer */}
        <ContinueButton onClick={handleContinue} disabled={false} />
      </div>
    </motion.div>
  );
}
