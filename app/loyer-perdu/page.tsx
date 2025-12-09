'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ContinueButton from '@/components/quiz/ContinueButton';
import { AnimatedText } from '@/components/ui/AnimatedText';
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
    <div className="h-[100dvh] w-full relative overflow-hidden flex flex-col">
      {/* Vidéo de fond */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/compressed/billets_compressed.mp4" type="video/mp4" />
      </video>

      {/* Overlay sombre avec gradient radial */}
      <div
        className="absolute inset-0 z-[5]"
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 70%)'
        }}
      />

      {/* Contenu superposé */}
      <div className="relative z-10 flex-1 w-full flex flex-col px-4 pt-10 pb-5 overflow-hidden">
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
          <div
            className="text-center px-4 overflow-visible"
            style={{ fontFamily: 'var(--font-inter-tight)', overflow: 'visible' }}
          >
            <div style={{
              color: '#F0F0F0',
              fontSize: '24px',
              fontWeight: 400,
              lineHeight: '1.5',
              letterSpacing: '-0.72px',
              overflow: 'visible',
            }}>
              <AnimatedText text="12 mois de ton loyer" delay={0.3} />
              <br />
              <AnimatedText text="actuel représentent :" delay={0.8} />
            </div>
            <div style={{
              color: '#FFF',
              fontSize: '28px',
              fontWeight: 600,
              lineHeight: '1.4',
              letterSpacing: '-0.84px',
              marginTop: '16px',
              overflow: 'visible',
              maxWidth: '100%',
            }}>
              <AnimatedText
                text={`${loyerAnnuel > 0 ? loyerAnnuel.toLocaleString('fr-FR') : '9 600'}€`}
                delay={1.4}
              />
              <br />
              <AnimatedText
                text="partis à jamais !"
                delay={1.8}
              />
            </div>
          </div>
        </div>

        {/* Bouton Continuer */}
        <ContinueButton onClick={handleContinue} disabled={false} />
      </div>
    </div>
  );
}
