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
      icon: '/images/image148.svg',
      completed: false,
    },
    {
      id: 2,
      text: 'Comparaison avec ton loyer actuel de 900€...',
      icon: '/images/image149.svg',
      completed: false,
    },
    {
      id: 3,
      text: 'Vérification des financements bancaires disponibles...',
      icon: '/images/image150.svg',
      completed: false,
    },
    {
      id: 4,
      text: 'Calcul des avantages fiscaux du neuf...',
      icon: '/images/image151.svg',
      completed: false,
    },
    {
      id: 5,
      text: 'Sélection des 3 meilleures opportunités pour toi...',
      icon: '/images/image152.svg',
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
      <main className="flex-1 flex flex-col mx-4 lg:mx-0">
        {/* Carte principale blanche */}
        <div className="w-full lg:w-[750px] lg:mt-[100px] mt-[20px] lg:mb-[62px] mx-auto p-5 bg-white rounded-3xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.04)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 flex flex-col justify-center items-center gap-5 mb-8">
          {/* Titre et image */}
          <div className="self-stretch flex flex-col justify-start items-center gap-2.5">
            {/* Image recherche */}
            <div className="w-28 h-20 relative rounded-lg overflow-hidden">
              <Image
                src="/images/search_1.svg"
                alt="Recherche"
                fill
                className="object-contain"
              />
            </div>

            {/* Titre */}
            <div className="self-stretch text-center justify-center text-gray-900 text-xl font-semibold font-['Bricolage_Grotesque'] leading-5">Recherche en cours…</div>

            {/* Sous-titre */}
            <div className="self-stretch text-center justify-center text-gray-900 text-base font-normal font-['Satoshi'] leading-5">On analyse les meilleures options pour toi</div>
          </div>

          {/* Section étapes */}
          <div className="self-stretch flex flex-col justify-start items-start gap-5">
            {steps.map((step) => (
              <div
                key={step.id}
                className="self-stretch p-2.5 bg-white rounded-2xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.10)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/10 flex flex-col justify-center items-center gap-2.5"
              >
                <div className="self-stretch flex justify-start items-center gap-2.5">
                  <div className="flex-1 flex justify-start items-center gap-4">
                    <div className="w-14 h-14 relative bg-indigo-100 rounded-lg overflow-hidden">
                      <Image
                        src={step.icon}
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1 justify-center text-gray-900 text-base font-normal font-['Satoshi'] leading-5">
                      {step.text}
                    </div>
                  </div>
                  {step.completed && (
                    <div className="w-6 h-6 relative overflow-hidden">
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
              </div>
            ))}
          </div>

          {/* Barre de progression */}
          <div className="self-stretch p-0.5 bg-zinc-100 rounded-[43px] flex flex-col justify-start items-start gap-2.5">
            <div
              className="h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-[226px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.10)] shadow-[inset_0px_-1px_4px_0px_rgba(4,120,87,0.50)] transition-all duration-300 ease-out"
              style={{
                width: `${(currentStep / steps.length) * 100}%`,
              }}
            />
          </div>

          {/* Texte de progression */}
          <div className="self-stretch text-center justify-center text-gray-900 text-sm font-normal font-['Satoshi'] leading-4">Encore quelques secondes…</div>
        </div>

        {/* Spacer */}
        <div className="flex-1"></div>

        {/* Bouton Continue (visible uniquement quand toutes les étapes sont terminées) */}
        {showContinue && (
          <ContinueButton onClick={handleContinue} disabled={false} />
        )}
      </main>
    </div>
  );
}
