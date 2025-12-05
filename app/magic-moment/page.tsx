'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';

const messages = [
  "On transforme ton loyer en vrais mètres carrés.",
  "On analyse les meilleures opportunités pour toi.",
  "On prépare ta simulation personnalisée.",
];

export default function MagicMomentPage() {
  const router = useRouter();
  const [currentMessage, setCurrentMessage] = useState(0);

  // Rotation des messages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Auto-navigation après 6 secondes
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/results');
    }, 6000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div
      className="min-h-screen w-full relative"
    >
      {/* Image de fond plein écran */}
      <Image
        src="/images/immeubles.png"
        alt="Immeubles"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Contenu centré */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-4">
        {/* Icône ByeBail */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
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

        {/* Titre principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full rounded-2xl flex flex-col justify-start items-center gap-7 overflow-hidden mb-10"
        >
          <div className="w-full flex flex-col justify-start items-center gap-3.5">
            <div
              className="w-full text-center text-white text-3xl font-semibold leading-7"
              style={{ fontFamily: 'var(--font-inter-tight)' }}
            >
              On prépare ton passage de locataire à propriétaire.
            </div>
          </div>
        </motion.div>

        {/* Messages rotatifs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-full flex justify-center items-center gap-1.5 mb-10"
        >
          <div className="w-full max-w-[320px] h-14 flex justify-start items-center gap-1.5">
            <motion.div
              key={currentMessage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1 self-stretch p-3 bg-red-50/20 rounded-2xl flex justify-center items-center overflow-hidden"
            >
              <div
                className="flex-1 text-center text-white text-sm font-light leading-4"
                style={{ fontFamily: 'var(--font-inter-tight)' }}
              >
                {messages[currentMessage]}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Barre Magic Moment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="w-full h-11 px-3.5 py-2.5 bg-white/10 rounded-lg flex flex-col justify-center items-start gap-2"
          style={{
            boxShadow: 'inset 0px 0px 11px 0px rgba(0,0,0,0.10)',
          }}
        >
          <div
            className="w-full text-center text-white text-xs font-normal leading-3"
            style={{ fontFamily: 'var(--font-inter-tight)' }}
          >
            Magic Moment
          </div>
          <div className="w-full flex justify-start items-start gap-1">
            {Array.from({ length: 9 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex-1 h-1.5 rounded-[226px]"
                style={{
                  backgroundColor: index < 6 ? '#A8A29E' : '#FEF2F2',
                  boxShadow: index < 6
                    ? 'inset 0px -1px 2px 0px rgba(255,255,255,0.25), inset 0px 1px 2px 0px rgba(255,255,255,0.25)'
                    : 'inset 0px 0px 1px 0px rgba(0,0,0,0.09)',
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
