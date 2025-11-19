'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ContinueButton from '@/components/quiz/ContinueButton';
import { storage } from '@/lib/storage';

export default function CalculationPage() {
  const router = useRouter();
  const [loyer, setLoyer] = useState<number>(0);

  useEffect(() => {
    // Récupérer le loyer de la question 4
    const loyerValue = storage.getAnswer(4);
    if (loyerValue) {
      setLoyer(parseFloat(loyerValue));
    }
  }, []);

  const totalSur10Ans = loyer * 12 * 10;
  const pourcentageAppartement = 48; // Statique pour le moment

  const handleContinue = () => {
    router.push('/quiz/5');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header simple */}
      <header className="bg-white">
        <div className="px-4 pt-4 pb-3 flex items-center">
          <button
            onClick={() => router.back()}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Retour"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <h1 className="flex-1 text-center text-lg font-semibold pr-10">Quiz ByeBail</h1>
        </div>
      </header>

      <main className="flex-1 flex flex-col mx-4 pt-8">
        {/* Contenu */}
        <div className="bg-white rounded-3xl p-6 mb-8">
          {/* Titre */}
          <h2 className="text-3xl font-bold mb-4">Petite question rapide...</h2>

          {/* Sous-titre avec montant */}
          <p className="text-base mb-8">
            Ton loyer de <span className="font-semibold">{loyer} €/mois</span>, ça représente
            combien sur 10 ans ?
          </p>

          {/* Cercle de progression */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative w-64 h-64">
              {/* Cercle de fond (gris clair) */}
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="128"
                  cy="128"
                  r="100"
                  stroke="#E5E7EB"
                  strokeWidth="20"
                  fill="none"
                />
                {/* Cercle de progression (violet) */}
                <circle
                  cx="128"
                  cy="128"
                  r="100"
                  stroke="#A78BFA"
                  strokeWidth="20"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 100}`}
                  strokeDashoffset={`${2 * Math.PI * 100 * (1 - pourcentageAppartement / 100)}`}
                  strokeLinecap="round"
                />
              </svg>
              {/* Texte au centre */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-5xl font-bold">{pourcentageAppartement}%</p>
                <p className="text-gray-500">d'un appartement</p>
              </div>
            </div>
          </div>

          {/* Montant total */}
          <div className="text-center mb-6">
            <p className="text-5xl font-bold text-[#FE8253] mb-2">
              {totalSur10Ans.toLocaleString('fr-FR')} €
            </p>
            <p className="text-base">C'est ce que tu auras payé en 10 ans</p>
          </div>

          {/* Texte informatif */}
          <p className="text-base mb-4">
            Avec <span className="font-semibold text-[#FE8253]">{totalSur10Ans.toLocaleString('fr-FR')} €</span>,
            tu aurais déjà payé {pourcentageAppartement}% d'un appartement à Tours.
          </p>

          <p className="text-base text-gray-600">
            Sauf que là, cet argent... il est parti. Pour toujours.
          </p>
        </div>

        {/* Spacer */}
        <div className="flex-1"></div>

        {/* Bouton Continue */}
        <ContinueButton onClick={handleContinue} disabled={false} />
      </main>
    </div>
  );
}
