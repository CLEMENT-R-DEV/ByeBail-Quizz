'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import SimpleHeader from '@/components/quiz/SimpleHeader';
import ContinueButton from '@/components/quiz/ContinueButton';
import { progressBarVariants, stepCheckVariants } from '@/lib/animations';

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
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

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
      // Toutes les étapes sont terminées, activer le bouton Continue
      setIsAnimationComplete(true);
    }
  }, [currentStep, steps.length]);

  const handleContinue = () => {
    router.push('/congratulations');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen flex flex-col"
    >
      <SimpleHeader />

      {/* Main content */}
      <main className="flex-1 flex flex-col mx-4 lg:mx-0">
        {/* Carte principale blanche */}
<<<<<<< Updated upstream
        <div className="w-full lg:w-[750px] lg:mt-[100px] mt-[20px] lg:mb-[62px] mx-auto p-5 bg-white rounded-3xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.04)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 flex flex-col justify-center items-center gap-5 mb-8">
          {/* Titre et image */}
          <div className="self-stretch flex flex-col justify-start items-center gap-2.5">
            {/* Image recherche avec ellipse */}
            <div className="w-28 h-20 relative flex items-center justify-center">
              {/* Ellipse de fond - parfaitement ronde avec position ajustable */}
              <div
                className="absolute w-10 h-10 lg:w-10 lg:h-10 top-2 left-7 lg:top-2 lg:left-7 rounded-full"
                style={{ backgroundColor: '#D9D9D9' }}
              />
              {/* Image au-dessus */}
              <div className="w-28 h-20 relative z-10">
                <Image
                  src="/images/image146.svg"
                  alt="Recherche"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
=======
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 300, damping: 25 }}
          className="p-5 bg-white rounded-3xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.04)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 flex flex-col justify-center items-center gap-5"
        >
          {/* Titre et image */}
          <div className="self-stretch flex flex-col justify-start items-center gap-2.5">
            {/* Image recherche */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 400, damping: 20 }}
              className="w-28 h-20 relative rounded-lg overflow-hidden"
            >
              <Image
                src="/images/search_1.svg"
                alt="Recherche"
                fill
                className="object-contain"
              />
            </motion.div>
>>>>>>> Stashed changes

            {/* Titre */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="self-stretch text-center justify-center text-gray-900 text-xl font-semibold font-['Bricolage_Grotesque'] leading-5"
            >
              Recherche en cours…
            </motion.div>

            {/* Sous-titre */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="self-stretch text-center justify-center text-gray-900 text-base font-normal font-['Satoshi'] leading-5"
            >
              On analyse les meilleures options pour toi
            </motion.div>
          </div>

          {/* Section étapes */}
          <div className="self-stretch flex flex-col justify-start items-start gap-5">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1, type: 'spring', stiffness: 300, damping: 25 }}
                className="self-stretch p-2.5 bg-white rounded-2xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.10)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/10 flex flex-col justify-center items-center gap-2.5"
              >
                <div className="self-stretch flex justify-start items-center gap-2.5">
                  <div className="flex-1 flex justify-start items-center gap-4">
                    <motion.div
                      animate={{
                        backgroundColor: step.completed ? 'rgba(167, 139, 250, 0.2)' : 'rgba(224, 231, 255, 1)',
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-14 h-14 relative rounded-lg overflow-hidden"
                    >
                      <Image
                        src={step.icon}
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </motion.div>
                    <motion.div
                      animate={{
                        color: step.completed ? 'rgb(17, 24, 39)' : 'rgb(107, 114, 128)',
                      }}
                      className="flex-1 justify-center text-base font-normal font-['Satoshi'] leading-5"
                    >
                      {step.text}
                    </motion.div>
                  </div>
                  <AnimatePresence>
                    {step.completed && (
                      <motion.div
                        variants={stepCheckVariants}
                        initial="initial"
                        animate="animate"
                        exit={{ scale: 0, opacity: 0 }}
                        className="w-6 h-6 relative overflow-hidden"
                      >
                        <Image
                          src="/images/checkmark.svg"
                          alt="Complété"
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Barre de progression */}
          <div className="self-stretch p-0.5 bg-zinc-100 rounded-[43px] flex flex-col justify-start items-start gap-2.5">
            <motion.div
              className="h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-[226px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.10)] shadow-[inset_0px_-1px_4px_0px_rgba(4,120,87,0.50)]"
              variants={progressBarVariants}
              initial="initial"
              animate="animate"
              custom={(currentStep / steps.length) * 100}
            />
          </div>

<<<<<<< Updated upstream
          {/* Texte de progression (disparaît quand l'animation est terminée) */}
          {!isAnimationComplete && (
            <div className="self-stretch text-center justify-center text-gray-900 text-sm font-normal font-['Satoshi'] leading-4">Encore quelques secondes…</div>
          )}
        </div>
=======
          {/* Texte de progression */}
          <motion.div
            animate={{
              opacity: showContinue ? 0 : 1,
            }}
            className="self-stretch text-center justify-center text-gray-900 text-sm font-normal font-['Satoshi'] leading-4"
          >
            Encore quelques secondes…
          </motion.div>
        </motion.div>
>>>>>>> Stashed changes

        {/* Spacer */}
        <div className="flex-1"></div>

<<<<<<< Updated upstream
        {/* Bouton Continue (toujours visible mais désactivé pendant l'animation) */}
        <ContinueButton onClick={handleContinue} disabled={!isAnimationComplete} />
=======
        {/* Bouton Continue (visible uniquement quand toutes les étapes sont terminées) */}
        <AnimatePresence>
          {showContinue && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <ContinueButton onClick={handleContinue} disabled={false} />
            </motion.div>
          )}
        </AnimatePresence>
>>>>>>> Stashed changes
      </main>
    </motion.div>
  );
}
