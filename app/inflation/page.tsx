'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import SimpleHeader from '@/components/quiz/SimpleHeader';
import ContinueButton from '@/components/quiz/ContinueButton';

export default function InflationPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/quiz/6');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SimpleHeader />

      <main className="flex-1 flex flex-col mx-4 pt-5">
        {/* Contenu */}
        <div className="w-full max-w-md mx-auto p-2.5 bg-white rounded-3xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.04)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 inline-flex flex-col justify-start items-start gap-5 mb-8">
          {/* Titre */}
          <div className="self-stretch h-20 inline-flex flex-col justify-center items-center gap-1.5">
            <div className="self-stretch text-center justify-center text-gray-900 text-[28px] font-semibold font-['Bricolage_Grotesque'] leading-[100%] tracking-[-0.28px]">
              Pendant qu&apos;on prépare tes résultats, petit rappel économique...
            </div>
          </div>

          {/* Comparaison Big Mac */}
          <div className="self-stretch inline-flex justify-start items-start gap-2">
            {/* Menu complet 2015 */}
            <div className="w-[calc(50%-4px)] p-2.5 bg-white rounded-2xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.10)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 inline-flex flex-col justify-center items-center gap-2.5">
              <div className="self-stretch p-3 bg-white rounded-lg shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.10)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/10 flex flex-col justify-center items-center gap-2.5">
                <div className="relative w-24 h-24">
                  <Image
                    src="/images/Meal.svg"
                    alt="Menu complet"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col justify-start items-center gap-0.5">
                  <div className="text-center justify-center text-gray-900/60 text-sm font-medium font-['Satoshi'] leading-4">2015</div>
                  <div className="text-center justify-center">
                    <span className="text-gray-900 text-base font-medium font-['Satoshi'] leading-4">10</span>
                    <span className="text-gray-900 text-base font-bold font-['Satoshi_Variable'] leading-4">€</span>
                  </div>
                  <div className="text-center justify-center text-gray-900/60 text-sm font-medium font-['Satoshi'] leading-4">Menu complet</div>
                </div>
              </div>
            </div>

            {/* Big Mac 2025 */}
            <div className="w-[calc(50%-4px)] p-2.5 bg-white rounded-2xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.10)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 inline-flex flex-col justify-center items-center gap-2.5">
              <div className="self-stretch p-3 bg-white rounded-lg shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.10)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/10 flex flex-col justify-center items-center gap-2.5">
                <div className="relative w-24 h-24">
                  <Image
                    src="/images/Burger.svg"
                    alt="Burger"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col justify-start items-center gap-0.5">
                  <div className="text-center justify-center text-gray-900/60 text-sm font-medium font-['Satoshi'] leading-4">2025</div>
                  <div className="text-center justify-center">
                    <span className="text-orange-700 text-base font-medium font-['Satoshi'] leading-4">10</span>
                    <span className="text-orange-700 text-base font-bold font-['Satoshi_Variable'] leading-4">€</span>
                  </div>
                  <div className="text-center justify-center text-gray-900/60 text-sm font-medium font-['Satoshi'] leading-4">Juste le Big Mac</div>
                </div>
              </div>
            </div>
          </div>

          {/* Texte explicatif */}
          <div className="self-stretch text-center justify-center text-gray-900 text-base font-normal font-['Satoshi'] leading-5">
            Même billet. Moins de burger.
          </div>

          <div className="self-stretch text-center justify-center">
            <span className="text-gray-900 text-base font-normal font-['Satoshi'] leading-5">C&apos;est ça, </span>
            <span className="text-gray-900 text-base font-bold font-['Satoshi'] leading-5">l&apos;inflation.</span>
          </div>

          {/* Question */}
          <div className="self-stretch text-center justify-center text-gray-900 text-base font-normal font-['Satoshi'] leading-5">
            Mais devine quoi ?
          </div>

          {/* Cartes Locataire vs Propriétaire */}
          <div className="self-stretch inline-flex justify-start items-start gap-2">
            {/* Locataire */}
            <div className="w-[calc(50%-4px)] p-1 bg-red-300 rounded-2xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.10)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 inline-flex flex-col justify-center items-center gap-2.5">
              <div className="self-stretch p-3 bg-red-50 rounded-2xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.10)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/10 flex flex-col justify-center items-center gap-2.5">
              <div className="w-24 h-24 relative mb-2">
                <Image
                  src="/images/Locataire.svg"
                  alt="Locataire"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center justify-center text-gray-900 text-base font-bold font-['Satoshi_Variable'] leading-4">Locataire</div>

              <div className="self-stretch flex flex-col justify-start items-center gap-0.5">
                <div className="w-full p-2 bg-white rounded-lg flex flex-col justify-start items-start gap-0.5">
                  <div className="w-full text-left text-gray-900/60 text-xs font-medium font-['Satoshi'] leading-3">2015</div>
                  <div className="w-full text-left">
                    <span className="text-gray-900 text-sm font-bold font-['Satoshi_Variable'] leading-4">815€</span>
                    <span className="text-gray-900 text-xs font-medium font-['Satoshi'] leading-3">/mois</span>
                  </div>
                </div>
                <div className="w-6 h-6 relative flex items-center justify-center">
                  <Image
                    src="/images/CaretDown.svg"
                    alt="Augmentation"
                    width={24}
                    height={24}
                    className="text-orange-400"
                    style={{ filter: 'invert(60%) sepia(85%) saturate(1500%) hue-rotate(340deg) brightness(100%) contrast(100%)' }}
                  />
                </div>
                <div className="w-full p-2 bg-white rounded-lg outline outline-2 outline-offset-[-2px] outline-orange-400 flex flex-col justify-start items-start gap-0.5">
                  <div className="w-full text-left text-gray-900/60 text-xs font-medium font-['Satoshi'] leading-3">2025</div>
                  <div className="w-full text-left">
                    <span className="text-orange-800 text-sm font-bold font-['Satoshi_Variable'] leading-4">915€</span>
                    <span className="text-orange-800 text-xs font-medium font-['Satoshi'] leading-3">/mois</span>
                  </div>
                </div>
              </div>
              </div>
            </div>

            {/* Propriétaire */}
            <div className="w-[calc(50%-4px)] p-1 bg-emerald-200 rounded-2xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.10)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 inline-flex flex-col justify-center items-center gap-2.5">
              <div className="self-stretch p-3 bg-teal-50 rounded-2xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.10)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/10 flex flex-col justify-center items-center gap-2.5">
              <div className="w-24 h-24 relative mb-2">
                <Image
                  src="/images/Proprietaire.svg"
                  alt="Propriétaire"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center justify-center text-gray-900 text-base font-bold font-['Satoshi_Variable'] leading-4">Propriétaire</div>

              <div className="self-stretch flex flex-col justify-start items-center gap-0.5">
                <div className="w-full p-2 bg-white rounded-lg flex flex-col justify-start items-start gap-0.5">
                  <div className="w-full text-left text-gray-900/60 text-xs font-medium font-['Satoshi'] leading-3">2015</div>
                  <div className="w-full text-left">
                    <span className="text-gray-900 text-sm font-bold font-['Satoshi_Variable'] leading-4">815€</span>
                    <span className="text-gray-900 text-xs font-medium font-['Satoshi'] leading-3">/mois</span>
                  </div>
                </div>
                <div className="w-6 h-6 relative flex items-center justify-center">
                  <Image
                    src="/images/CaretDown.svg"
                    alt="Stable"
                    width={24}
                    height={24}
                    className="text-emerald-500"
                    style={{ filter: 'invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%)' }}
                  />
                </div>
                <div className="w-full p-2 bg-white rounded-lg outline outline-2 outline-offset-[-2px] outline-emerald-500 flex flex-col justify-start items-start gap-0.5">
                  <div className="w-full text-left text-gray-900/60 text-xs font-medium font-['Satoshi'] leading-3">2015</div>
                  <div className="w-full text-left">
                    <span className="text-emerald-900 text-sm font-bold font-['Satoshi_Variable'] leading-4">815€</span>
                    <span className="text-emerald-900 text-xs font-medium font-['Satoshi'] leading-3">/mois</span>
                  </div>
                </div>
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
