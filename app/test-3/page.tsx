'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Test3Page() {
  const router = useRouter();
  const [loyer] = useState(650);
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  const totalSur10Ans = loyer * 12 * 10;
  const pourcentageAppartement = 48;

  useEffect(() => {
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimatedPercentage(eased * pourcentageAppartement);
      if (progress < 1) requestAnimationFrame(animate);
    };

    animate();
  }, [pourcentageAppartement]);

  return (
    <div className="min-h-screen bg-[#F5F5F5] px-6 py-8 lg:py-16 flex flex-col">
      <div className="max-w-[500px] mx-auto w-full flex-1 flex flex-col">
        {/* Back button */}
        <button onClick={() => router.back()} className="p-1 mb-6 self-start">
          <Image src="/images/CaretLeft.svg" alt="Retour" width={24} height={24} />
        </button>

        {/* Grande typo */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[28px] lg:text-[36px] font-semibold leading-[1.2] mb-8"
          style={{ fontFamily: 'var(--font-inter-display)', letterSpacing: '-0.06em', color: '#1F2937' }}
        >
          Ton loyer de {loyer}€/mois,<br />
          ça représente quoi sur 10 ans ?
        </motion.h1>

        {/* Card principale avec le cercle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl p-8 shadow-sm flex flex-col items-center"
        >
          {/* Cercle animé */}
          <div className="relative w-40 h-40 mb-6">
            <svg className="w-full h-full -rotate-90">
              <circle cx="80" cy="80" r="70" stroke="#E5E7EB" strokeWidth="12" fill="none" />
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="#1F2937"
                strokeWidth="12"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 70}`}
                strokeDashoffset={`${2 * Math.PI * 70 * (1 - animatedPercentage / 100)}`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span
                className="text-4xl font-bold text-[#1F2937]"
                style={{ fontFamily: 'var(--font-inter-display)', letterSpacing: '-0.06em' }}
              >
                {Math.round(animatedPercentage)}%
              </span>
              <span className="text-sm text-gray-500" style={{ fontFamily: 'var(--font-inter-tight)' }}>
                d'un appartement
              </span>
            </div>
          </div>

          {/* Montant total */}
          <div className="text-center">
            <p
              className="text-3xl font-bold text-[#1F2937]"
              style={{ fontFamily: 'var(--font-inter-display)', letterSpacing: '-0.06em' }}
            >
              {totalSur10Ans.toLocaleString('fr-FR')} €
            </p>
            <p className="text-gray-500 mt-1" style={{ fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.03em' }}>
              payés en loyers sur 10 ans
            </p>
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 bg-white rounded-2xl p-5 shadow-sm"
        >
          <p className="text-[17px] text-[#1F2937]" style={{ fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.03em' }}>
            Avec <span className="font-semibold">{totalSur10Ans.toLocaleString('fr-FR')}€</span>, tu aurais déjà payé <span className="font-semibold">{pourcentageAppartement}%</span> d'un appartement à Tours.
          </p>
          <p className="text-gray-500 mt-2" style={{ fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.03em' }}>
            Sauf que là, cet argent... il est parti. Pour toujours.
          </p>
        </motion.div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Bouton */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 pb-6"
        >
          <button
            onClick={() => alert('Continuer vers les résultats')}
            className="w-full h-14 rounded-full text-white font-semibold text-lg flex items-center justify-center"
            style={{
              fontFamily: 'var(--font-inter-display)',
              letterSpacing: '-0.06em',
              background: 'linear-gradient(135deg, #1F2937 0%, #374151 100%)',
              boxShadow: '0 4px 20px 0 rgba(0,0,0,0.15)',
            }}
          >
            Voir mes solutions
          </button>
        </motion.div>
      </div>
    </div>
  );
}
