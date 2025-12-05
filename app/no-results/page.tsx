'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function NoResultsPage() {
  const router = useRouter();

  const handleRetour = () => {
    router.back();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen flex flex-col relative"
      style={{ backgroundColor: '#F5EBE1' }}
    >
      {/* Logo ByeBail watermark en arrière-plan */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] pointer-events-none">
        <Image
          src="/images/new_logo.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Contenu principal */}
      <div className="flex-1 flex flex-col px-5 py-6 relative z-10">
        {/* Contenu centré (logo + titre) */}
        <div className="flex-1 flex flex-col items-center justify-center">
          {/* Logo ByeBail */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6"
          >
            <Image
              src="/images/byebail-icon-orange.svg"
              alt="ByeBail"
              width={36}
              height={40}
            />
          </motion.div>

          {/* Titre principal */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1
              style={{
                fontFamily: 'var(--font-inter-tight)',
                fontSize: '28px',
                fontWeight: 600,
                lineHeight: '110%',
                letterSpacing: '-0.84px',
                color: '#2D2A26',
              }}
            >
              ByeBail n'a pas encore de biens à te proposer dans cette ville.
            </h1>
          </motion.div>
        </div>

        {/* Bouton Retour */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          onClick={handleRetour}
          className="w-full py-4 rounded-2xl cursor-pointer"
          style={{
            background: 'linear-gradient(180deg, #34D399 0%, #10B981 100%)',
            boxShadow: '0px 4px 14px 0px rgba(16, 185, 129, 0.40)',
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span
            style={{
              fontFamily: 'var(--font-inter-tight)',
              fontSize: '18px',
              fontWeight: 600,
              color: '#FFFFFF',
            }}
          >
            Retour
          </span>
        </motion.button>
      </div>
    </motion.div>
  );
}
