'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import SimpleHeader from '@/components/quiz/SimpleHeader';
import ContinueButton from '@/components/quiz/ContinueButton';
import { storage } from '@/lib/storage';

export default function CalculationPage() {
  const router = useRouter();
  const [loyer, setLoyer] = useState<number>(0);
  const [animatedPercentage, setAnimatedPercentage] = useState<number>(0);

  useEffect(() => {
    // Récupérer le loyer de la question 4
    const loyerValue = storage.getAnswer(4);
    if (loyerValue) {
      setLoyer(parseFloat(loyerValue));
    }
  }, []);

  const totalSur10Ans = loyer * 12 * 10;
  const pourcentageAppartement = 48; // Statique pour le moment

  // Animation du pourcentage de 0 à 48
  useEffect(() => {
    const duration = 2500; // 2.5 secondes
    const startTime = Date.now();
    const targetPercentage = pourcentageAppartement;

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (easeOutCubic) pour une animation fluide
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
      const easedProgress = easeOutCubic(progress);

      setAnimatedPercentage(easedProgress * targetPercentage);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [pourcentageAppartement]);

  const handleContinue = () => {
    router.push('/quiz/5');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SimpleHeader />

      <main className="flex-1 flex flex-col mx-4 pt-5">
        {/* Contenu principal */}
        <div className="w-full max-w-md mx-auto p-5 bg-white rounded-3xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.04)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 flex flex-col justify-start items-start gap-5 mb-8">

          {/* Section 1 - Titre et question */}
          <div className="self-stretch flex flex-col justify-start items-center gap-1.5">
            <div className="self-stretch text-center justify-center text-gray-900 text-3xl font-semibold font-['Bricolage_Grotesque'] leading-8">
              Petite question rapide...
            </div>
            <div className="self-stretch text-center justify-center">
              <span className="text-gray-900 text-base font-normal font-['Satoshi'] leading-5">Ton loyer de </span>
              <span className="text-gray-900 text-base font-bold font-['Satoshi'] leading-5">{loyer} €/mois</span>
              <span className="text-gray-900 text-base font-normal font-['Satoshi'] leading-5">, ça représente combien sur 10 ans ?</span>
            </div>
          </div>

          {/* Section 2 - Carte avec cercle et résultats */}
          <div className="self-stretch p-5 bg-white rounded-2xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.10)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 flex flex-col justify-start items-center gap-9">

            {/* Cercle de progression */}
            <div className="relative w-44 h-44">
              <svg className="w-full h-full transform -rotate-205">
                <circle
                  cx="88"
                  cy="88"
                  r="75"
                  stroke="#E0E7FF"
                  strokeWidth="16"
                  fill="none"
                />
                <circle
                  cx="88"
                  cy="88"
                  r="75"
                  stroke="#9A7BF8"
                  strokeWidth="16"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 75}`}
                  strokeDashoffset={`${2 * Math.PI * 75 * (1 - animatedPercentage / 100)}`}
                  strokeLinecap="round"
                />
              </svg>
              {/* Overlay 3D effet */}
              <div className="absolute top-[4%] left-[18%] w-[30%] h-[20%]">
                <Image
                  src="/images/Ellipse 10.svg"
                  alt=""
                  fill
                  className="pointer-events-none object-contain"
                />
              </div>
              {/* Texte au centre du cercle */}
              <div className="absolute inset-0 flex flex-col justify-center items-center gap-1">
                <div className="text-center justify-center text-gray-900 text-4xl font-semibold font-['Bricolage_Grotesque'] leading-9">
                  {Math.round(animatedPercentage)}%
                </div>
                <div className="text-center justify-center text-gray-900/60 text-sm font-normal font-['Satoshi'] leading-4">
                  d&apos;un appartement
                </div>
              </div>
            </div>

            {/* Montant total */}
            <div className="self-stretch flex flex-col justify-start items-center">
              <div className="self-stretch text-center justify-center text-orange-500 text-3xl font-semibold font-['Bricolage_Grotesque'] leading-7">
                {totalSur10Ans.toLocaleString('fr-FR')} €
              </div>
              <div className="self-stretch text-center justify-center text-gray-900 text-base font-normal font-['Satoshi'] leading-5">
                C&apos;est ce que tu auras payé en 10 ans
              </div>
            </div>
          </div>

          {/* Section 3 - Textes explicatifs */}
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="self-stretch text-center justify-center">
              <span className="text-gray-900 text-base font-normal font-['Satoshi'] leading-5">Avec </span>
              <span className="text-orange-500 text-base font-bold font-['Satoshi'] leading-5">{totalSur10Ans.toLocaleString('fr-FR')} €</span>
              <span className="text-gray-900 text-base font-normal font-['Satoshi'] leading-5">, tu aurais déjà payé {pourcentageAppartement}% d&apos;un appartement à Tours.</span>
            </div>
            <div className="self-stretch text-center justify-center text-gray-900 text-base font-normal font-['Satoshi'] leading-5">
              Sauf que là, cet argent... il est parti. Pour toujours.
            </div>
          </div>

        </div>

        {/* Spacer */}
        <div className="flex-1"></div>

        {/* Bouton Continue */}
        <ContinueButton onClick={handleContinue} disabled={false} />
      </main>
    </div>
  );
}
