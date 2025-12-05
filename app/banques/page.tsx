'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ContinueButton from '@/components/quiz/ContinueButton';

export default function BanquesPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleContinue = () => {
    router.push('/quiz/8');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: '#F5EBE1' }}
    >
      {/* Élément décoratif */}
      <div className="w-96 h-80 absolute left-[-127px] top-[301px] bg-white/25 rounded-full blur-3xl" />

      {/* Contenu principal */}
      <div className="relative px-4 py-10 min-h-screen flex flex-col">
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
          className="flex flex-col gap-1 mt-4"
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
            Les banques préfèrent ceux qui gèrent.
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
            Pas ceux qui gagnent plus mais dépensent tout.
          </span>
        </motion.div>

        {/* Carte avec image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 300, damping: 25 }}
          className="flex-1 flex flex-col items-center p-5 gap-5 mt-4"
          style={{
            borderRadius: '32px',
            border: '1px solid rgba(255, 255, 255, 0.10)',
            background: 'rgba(250, 245, 241, 0.50)',
          }}
        >
          {/* Image courbes_2.svg */}
          <div className="w-full flex-1 relative rounded-2xl overflow-hidden">
            <Image
              src="/images/courbes_2.svg"
              alt="Comparaison gestion financière"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Bouton Continuer - collé en bas */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-auto pt-4"
        >
          <ContinueButton onClick={handleContinue} disabled={false} />
        </motion.div>
      </div>
    </motion.div>
  );
}
