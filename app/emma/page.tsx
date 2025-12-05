'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ContinueButton from '@/components/quiz/ContinueButton';

export default function EmmaPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleContinue = () => {
    router.push('/quiz/7');
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

      {/* Contenu principal */}
      <div className="relative px-4 pt-10 pb-24 lg:pb-10 min-h-screen flex flex-col">
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

        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="flex flex-col gap-1 mt-6"
          style={{ fontFamily: 'var(--font-inter-tight)' }}
        >
          <span
            style={{
              color: '#2D2A26',
              fontSize: '28px',
              fontWeight: 600,
              lineHeight: '110%',
              letterSpacing: '-0.84px',
            }}
          >
            Imagine Emma :
          </span>
          <span
            style={{
              color: '#4A4543',
              fontSize: '24px',
              fontWeight: 400,
              lineHeight: '110%',
              letterSpacing: '-0.72px',
            }}
          >
            Trois ans après avoir emménagé, elle souhaite changer d&apos;appart :
          </span>
        </motion.div>

        {/* Carte avec image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 300, damping: 25 }}
          className="h-[450px] flex flex-col items-center p-5 gap-5 mt-6"
          style={{
            borderRadius: '32px',
            border: '1px solid rgba(255, 255, 255, 0.10)',
            background: 'rgba(250, 245, 241, 0.50)',
          }}
        >
          {/* Image demenagement.svg avec textes superposés */}
          <div className="w-full flex-1 relative rounded-2xl overflow-hidden">
            <Image
              src="/images/demenagement.svg"
              alt="Emma locataire vs Emma propriétaire"
              fill
              className="object-cover"
              priority
            />

            {/* Texte côté gauche - Emma locataire */}
            <div
              className="absolute top-4 left-3 z-10"
              style={{
                fontFamily: 'var(--font-inter-display)',
                fontSize: '18px',
                fontWeight: 600,
                lineHeight: 'normal',
                letterSpacing: '-1.08px',
              }}
            >
              <span style={{ color: '#F0F0F0' }}>Emma locataire</span>
              <br />
              <span style={{ color: '#F0F0F0' }}>depuis 3 ans -</span>
              <br />
              <span style={{ color: '#D0805B' }}>19 800€ perdus</span>
            </div>

            {/* Texte côté droit - Emma propriétaire */}
            <div
              className="absolute top-4 right-2 z-10 text-left"
              style={{
                fontFamily: 'var(--font-inter-display)',
                fontSize: '18px',
                fontWeight: 600,
                lineHeight: 'normal',
                letterSpacing: '-1.08px',
              }}
            >
              <span style={{ color: '#F0F0F0' }}>Emma propriétaire</span>
              <br />
              <span style={{ color: '#F0F0F0' }}>depuis 3 ans -</span>
              <br />
              <span style={{ color: '#D0805B' }}>+19 800€ de capital</span>
            </div>
          </div>
        </motion.div>

        {/* Bouton Continuer - collé en bas */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-auto"
        >
          <ContinueButton onClick={handleContinue} disabled={false} />
        </motion.div>
      </div>
    </div>
  );
}
