'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ContinueButton from '@/components/quiz/ContinueButton';

export default function InflationPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/quiz/6');
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
          <h2 className="text-2xl font-bold mb-6 text-center leading-tight">
            Pendant qu&apos;on prépare tes résultats, petit rappel économique...
          </h2>

          {/* Comparaison Big Mac */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Menu complet 2015 */}
            <div className="bg-white rounded-2xl p-4 flex flex-col items-center border-2 border-gray-200">
              <div className="mb-3 relative w-24 h-24">
                <Image
                  src="/images/Meal.svg"
                  alt="Menu complet"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm font-semibold mb-1">2015</p>
              <p className="text-xl font-bold mb-1">10€</p>
              <p className="text-sm text-gray-600">Menu complet</p>
            </div>

            {/* Big Mac 2025 */}
            <div className="bg-white rounded-2xl p-4 flex flex-col items-center border-2 border-gray-200">
              <div className="mb-3 relative w-24 h-24">
                <Image
                  src="/images/Burger.svg"
                  alt="Burger"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm font-semibold mb-1">2025</p>
              <p className="text-xl font-bold mb-1 text-[#FE8253]">10€</p>
              <p className="text-sm text-gray-600">Juste le Big Mac</p>
            </div>
          </div>

          {/* Texte explicatif */}
          <p className="text-center text-base mb-2">
            Même billet. Moins de burger.
          </p>
          <p className="text-center text-base font-semibold mb-6">
            C&apos;est ça, <span className="text-[#FE8253]">l&apos;inflation.</span>
          </p>

          {/* Question */}
          <p className="text-center text-base mb-6">Mais devine quoi ?</p>

          {/* Cartes Locataire vs Propriétaire */}
          <div className="grid grid-cols-2 gap-4">
            {/* Locataire */}
            <div className="rounded-2xl p-4 border-4 border-red-300 bg-red-50">
              <div className="flex flex-col items-center mb-4">
                <div className="w-20 h-20 relative mb-2">
                  <Image
                    src="/images/Locataire.svg"
                    alt="Locataire"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="font-bold text-lg">Locataire</p>
              </div>

              <div className="space-y-2">
                <div className="text-center">
                  <p className="text-xs text-gray-600">2015</p>
                  <p className="font-bold">815€<span className="text-xs">/mois</span></p>
                </div>
                <div className="flex justify-center">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className="text-center border-2 border-red-400 rounded-lg p-2 bg-white">
                  <p className="text-xs text-gray-600">2025</p>
                  <p className="font-bold text-red-600">915€<span className="text-xs">/mois</span></p>
                </div>
              </div>
            </div>

            {/* Propriétaire */}
            <div className="rounded-2xl p-4 border-4 border-green-300 bg-green-50">
              <div className="flex flex-col items-center mb-4">
                <div className="w-20 h-20 relative mb-2">
                  <Image
                    src="/images/Proprietaire.svg"
                    alt="Propriétaire"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="font-bold text-lg">Propriétaire</p>
              </div>

              <div className="space-y-2">
                <div className="text-center">
                  <p className="text-xs text-gray-600">2015</p>
                  <p className="font-bold">815€<span className="text-xs">/mois</span></p>
                </div>
                <div className="flex justify-center">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-center border-2 border-green-400 rounded-lg p-2 bg-white">
                  <p className="text-xs text-gray-600">2015</p>
                  <p className="font-bold text-green-600">815€<span className="text-xs">/mois</span></p>
                </div>
              </div>
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
