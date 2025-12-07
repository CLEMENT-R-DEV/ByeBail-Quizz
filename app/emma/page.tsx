'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ContinueButton from '@/components/quiz/ContinueButton';
import { AnimatedText } from '@/components/ui/AnimatedText';

export default function EmmaPage() {
  const router = useRouter();

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

        {/* Texte centré avec animation lettre par lettre */}
        <div className="flex-1 flex justify-center items-center overflow-visible">
          <div
            className="text-center px-4 overflow-visible"
            style={{ fontFamily: 'var(--font-inter-tight)', overflow: 'visible' }}
          >
            <div style={{
              color: '#FFF',
              fontSize: '28px',
              fontWeight: 600,
              lineHeight: '1.3',
              letterSpacing: '-0.84px',
              overflow: 'visible',
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
              overflow: 'visible',
            }}>
              <AnimatedText text="Trois ans après avoir" delay={0.7} />
              <br />
              <AnimatedText text="emménagé, elle souhaite" delay={1.1} />
              <br />
              <AnimatedText text="changer d'appart :" delay={1.5} />
            </div>
          </div>
        </div>

        {/* Bouton Continuer */}
        <ContinueButton onClick={handleContinue} disabled={false} />
      </div>
    </div>
  );
}
