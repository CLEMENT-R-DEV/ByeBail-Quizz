'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import SimpleHeader from '@/components/quiz/SimpleHeader';
import ContinueButton from '@/components/quiz/ContinueButton';

interface Step {
  id: number;
  text: string;
  icon: string;
  completed: boolean;
}

export default function SearchingPage() {
  const router = useRouter();
  const [steps, setSteps] = useState<Step[]>([
    {
      id: 1,
      text: 'Analyse de 1 247 logements à Tours...',
      icon: '/images/maison.svg',
      completed: false,
    },
    {
      id: 2,
      text: 'Comparaison avec ton loyer actuel de 900€...',
      icon: '/images/calculatrice.svg',
      completed: false,
    },
    {
      id: 3,
      text: 'Vérification des financements bancaires disponibles...',
      icon: '/images/search.svg',
      completed: false,
    },
    {
      id: 4,
      text: 'Calcul des avantages fiscaux du neuf...',
      icon: '/images/calcule.svg',
      completed: false,
    },
    {
      id: 5,
      text: 'Sélection des 3 meilleures opportunités pour toi...',
      icon: '/images/carnet.svg',
      completed: false,
    },
  ]);

  const [currentStep, setCurrentStep] = useState(0);
  const [showContinue, setShowContinue] = useState(false);

  useEffect(() => {
    // Animer les étapes une par une
    if (currentStep < steps.length) {
      const timer = setTimeout(() => {
        setSteps((prevSteps) =>
          prevSteps.map((step, index) =>
            index === currentStep ? { ...step, completed: true } : step
          )
        );
        setCurrentStep((prev) => prev + 1);
      }, 800); // Chaque étape prend 800ms

      return () => clearTimeout(timer);
    } else {
      // Toutes les étapes sont terminées, montrer le bouton Continue
      setShowContinue(true);
    }
  }, [currentStep, steps.length]);

  const handleContinue = () => {
    router.push('/congratulations');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SimpleHeader />

      {/* Main content */}
      <main className="flex-1 flex flex-col px-4 pt-8 pb-6">
        <div className="bg-white rounded-2xl p-6 flex flex-col flex-1 mb-6">
          {/* Icône de recherche et titre */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative w-24 h-24 mb-6">
              <Image
                src="/images/search_1.svg"
                alt="Recherche"
                fill
                className="object-contain"
              />
            </div>
            <h2
              className="text-center mb-2"
              style={{
                fontFamily: 'var(--font-bricolage-grotesque), sans-serif',
                fontWeight: 600,
                fontSize: '20px',
                lineHeight: '100%',
                letterSpacing: '-0.01em',
              }}
            >
              Recherche en cours...
            </h2>
            <p className="text-center text-base text-gray-700">
              On analyse les meilleures options pour toi
            </p>
          </div>

          {/* Liste des étapes */}
          <div className="space-y-4 mb-6">
            {steps.map((step) => (
              <div
                key={step.id}
                className="bg-gray-50 rounded-2xl p-4 flex items-center gap-4"
                style={{
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.06)',
                }}
              >
                {/* Icône de l'étape */}
                <div className="relative w-[60px] h-[60px] flex-shrink-0 bg-purple-50 rounded-lg flex items-center justify-center">
                  <div className="relative w-[60px] h-[60px]">
                    <Image
                      src={step.icon}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Texte de l'étape */}
                <p className="flex-1 text-base font-normal text-gray-800">
                  {step.text}
                </p>

                {/* Checkmark */}
                {step.completed && (
                  <div className="w-6 h-6 flex-shrink-0">
                    <Image
                      src="/images/checkmark.svg"
                      alt="Complété"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Barre de progression */}
          <div className="mb-4">
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-500 transition-all duration-300 ease-out"
                style={{
                  width: `${(currentStep / steps.length) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Texte de progression */}
          <p className="text-center text-sm text-gray-600">
            Encore quelques secondes...
          </p>

          {/* Spacer */}
          <div className="flex-1"></div>
        </div>

        {/* Bouton Continue (visible uniquement quand toutes les étapes sont terminées) */}
        {showContinue && (
          <ContinueButton onClick={handleContinue} disabled={false} />
        )}
      </main>
    </div>
  );
}
