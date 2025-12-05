'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ResultsPage() {
  const handleReserve = () => {
    // Rediriger vers le calendly ou la page de réservation
    window.open('https://calendly.com/byebail', '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: '#F5EBE1' }}
    >
      {/* Contenu principal */}
      <div className="flex-1 flex flex-col px-4 py-6 relative">
        {/* Logo ByeBail */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col items-start mb-10 relative z-10"
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
          className="mb-2 relative z-10"
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
            Bonne nouvelle : on a trouvé ton appart.
          </h1>
        </motion.div>

        {/* Sous-titre */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-3 relative z-10"
        >
          <p
            style={{
              fontFamily: 'var(--font-inter-tight)',
              fontSize: '24px',
              fontWeight: 400,
              lineHeight: '110%',
              letterSpacing: '-0.72px',
              color: '#2D2A26',
            }}
          >
            T2, 34 m², balcon, parking, pour le prix de ton loyer actuel .
          </p>
        </motion.div>

        {/* Badge "Tu veux le voir ?" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-4 relative z-10"
        >
          <div
            className="inline-flex px-4 py-2 rounded-full"
            style={{
              background: 'linear-gradient(173deg, #F6B292 -0.82%, #D0805B 52.13%)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-inter-tight)',
                fontSize: '12px',
                fontWeight: 500,
                lineHeight: '100%',
                letterSpacing: '-0.24px',
                color: '#FFE6DA',
              }}
            >
              Tu veux le voir ?
            </span>
          </div>
        </motion.div>

        {/* Texte visio */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-4 relative z-10"
        >
          <p
            style={{
              fontFamily: 'var(--font-inter-tight)',
              fontSize: '24px',
              fontWeight: 400,
              lineHeight: '110%',
              letterSpacing: '-0.72px',
              color: '#2D2A26',
            }}
          >
            Réserve ta visio gratuite avec un conseiller Byebail.
          </p>
        </motion.div>

        {/* Image de l'appartement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, type: 'spring', stiffness: 300, damping: 25 }}
          className="absolute inset-x-4 bottom-26 top-85 rounded-2xl overflow-hidden z-0"
        >
          <Image
            src="/images/appart2.svg"
            alt="Appartement 3D"
            fill
            className="object-cover"
            priority
          />

          {/* Badges d'informations en bas de l'image */}
          <div className="absolute bottom-26 left-4 right-4 flex gap-2">
            <div
              className="flex-1 px-2 py-2.5 rounded-2xl inline-flex flex-col justify-start items-start gap-1 overflow-hidden backdrop-blur-md"
              style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.8)',
                borderLeft: '1px solid rgba(255, 255, 255, 0.6)',
                borderRight: '1px solid rgba(200, 200, 200, 0.3)',
                borderBottom: '1px solid rgba(200, 200, 200, 0.3)',
              }}
            >
              <div className="text-neutral-500 text-sm font-normal font-['Inter_Display'] leading-4">
                Type
              </div>
              <div className="text-neutral-500 text-[10px] font-light font-['Inter_Tight'] leading-3">
                Appartement
              </div>
            </div>
            <div
              className="flex-1 px-2 py-2.5 rounded-2xl inline-flex flex-col justify-start items-start gap-1 overflow-hidden backdrop-blur-md"
              style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.8)',
                borderLeft: '1px solid rgba(255, 255, 255, 0.6)',
                borderRight: '1px solid rgba(200, 200, 200, 0.3)',
                borderBottom: '1px solid rgba(200, 200, 200, 0.3)',
              }}
            >
              <div className="text-neutral-500 text-sm font-normal font-['Inter_Display'] leading-4">
                M2
              </div>
              <div className="text-neutral-500 text-[10px] font-light font-['Inter_Tight'] leading-3">
                ...
              </div>
            </div>
            <div
              className="flex-1 px-2 py-2.5 rounded-2xl inline-flex flex-col justify-start items-start gap-1 overflow-hidden backdrop-blur-md"
              style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.8)',
                borderLeft: '1px solid rgba(255, 255, 255, 0.6)',
                borderRight: '1px solid rgba(200, 200, 200, 0.3)',
                borderBottom: '1px solid rgba(200, 200, 200, 0.3)',
              }}
            >
              <div className="text-neutral-500 text-sm font-normal font-['Inter_Display'] leading-4">
                Parking
              </div>
              <div className="text-neutral-500 text-[10px] font-light font-['Inter_Tight'] leading-3">
                oui
              </div>
            </div>
            <div
              className="flex-1 px-2 py-2.5 rounded-2xl inline-flex flex-col justify-start items-start gap-1 overflow-hidden backdrop-blur-md"
              style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.8)',
                borderLeft: '1px solid rgba(255, 255, 255, 0.6)',
                borderRight: '1px solid rgba(200, 200, 200, 0.3)',
                borderBottom: '1px solid rgba(200, 200, 200, 0.3)',
              }}
            >
              <div className="text-neutral-500 text-sm font-normal font-['Inter_Display'] leading-4">
                Extérieurs
              </div>
              <div className="text-neutral-500 text-[10px] font-light font-['Inter_Tight'] leading-3">
                Balcon
              </div>
            </div>
          </div>
        </motion.div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Bouton Réserver */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          onClick={handleReserve}
          className="w-full py-4 rounded-2xl cursor-pointer relative z-10"
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
            Réserver ma visio
          </span>
        </motion.button>
      </div>
    </motion.div>
  );
}
