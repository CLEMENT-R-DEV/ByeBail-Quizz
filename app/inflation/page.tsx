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

      <main className="flex-1 flex flex-col mx-4 pt-5 ">
        {/* Contenu */}
        <div className="w-full lg:mt-[100px] lg:mb-[69px] lg:w-[746px] mx-auto p-2.5 lg:p-5 bg-white rounded-3xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.04)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 inline-flex flex-col justify-start items-start gap-5 lg:gap-[18px] mb-8">
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
                  <div className="text-center justify-center text-gray-900/60 text-sm lg:text-[20px] font-medium lg:font-medium font-['Satoshi'] leading-4 lg:leading-[110%]">2015</div>
                  <div className="text-center justify-center" style={{ fontFamily: 'var(--font-satoshi)' }}>
                    <span className="text-gray-900 text-base lg:text-base font-medium lg:font-medium leading-4 lg:leading-[110%]">10</span>
                    <span className="text-gray-900 text-base lg:text-base font-bold lg:font-bold leading-4 lg:leading-[110%]">€</span>
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
                  <div className="text-center justify-center text-gray-900/60 text-sm lg:text-[20px] font-medium lg:font-medium font-['Satoshi'] leading-4 lg:leading-[110%]">2025</div>
                  <div className="text-center justify-center" style={{ fontFamily: 'var(--font-satoshi)' }}>
                    <span className="text-orange-700 lg:text-[#C72400] text-base lg:text-base font-medium lg:font-medium leading-4 lg:leading-[110%]">10</span>
                    <span className="text-orange-700 lg:text-[#C72400] text-base lg:text-base font-bold lg:font-bold leading-4 lg:leading-[110%]">€</span>
                  </div>
                  <div className="text-center justify-center text-gray-900/60 text-sm font-medium font-['Satoshi'] leading-4">Juste le Big Mac</div>
                </div>
              </div>
            </div>
          </div>

          {/* Texte explicatif */}
          <div className="self-stretch text-center justify-center text-gray-900 text-base lg:text-[20px] font-normal lg:font-normal leading-5 lg:leading-[120%] lg:tracking-[-0.2px]" style={{ fontFamily: 'var(--font-satoshi)' }}>
            Même billet. Moins de burger.
          </div>

          <div className="self-stretch text-center justify-center" style={{ fontFamily: 'var(--font-satoshi)' }}>
            <span className="text-gray-900 text-base lg:text-[20px] font-normal lg:font-normal leading-5 lg:leading-[120%] lg:tracking-[-0.2px]">C&apos;est ça, </span>
            <span className="text-gray-900 text-base lg:text-[20px] font-bold lg:font-bold leading-5 lg:leading-[120%] lg:tracking-[-0.2px]">l&apos;inflation.</span>
          </div>

          {/* Question */}
          <div className="self-stretch text-center justify-center text-gray-900 text-base lg:text-[20px] font-normal lg:font-normal leading-5 lg:leading-[120%] lg:tracking-[-0.2px]" style={{ fontFamily: 'var(--font-satoshi)' }}>
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
              <div className="text-center justify-center text-gray-900 text-base lg:text-[24px] font-bold lg:font-bold leading-4 lg:leading-[110%]" style={{ fontFamily: 'var(--font-satoshi)' }}>Locataire</div>

              <div className="self-stretch flex flex-col justify-start items-center gap-0.5">
                <div className="w-full p-2 bg-white rounded-lg flex flex-col justify-start items-start gap-0.5">
                  <div className="w-full text-left text-gray-900/60 text-xs lg:text-[16px] font-medium lg:font-medium leading-3 lg:leading-[110%]" style={{ fontFamily: 'var(--font-satoshi)' }}>2015</div>
                  <div className="w-full text-left" style={{ fontFamily: 'var(--font-satoshi)' }}>
                    <span className="text-gray-900 text-sm lg:text-[20px] font-bold lg:font-bold leading-4 lg:leading-[110%]">815€</span>
                    <span className="text-gray-900 text-xs lg:text-[16px] font-medium lg:font-medium leading-3 lg:leading-[110%]">/mois</span>
                  </div>
                </div>
                <div className="w-6 h-6 relative flex items-center justify-center">
                  <Image
                    src="/images/CaretDownOrange.svg"
                    alt="Augmentation"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="w-full p-2 bg-white rounded-lg outline outline-2 outline-offset-[-2px] outline-[#FE8253] flex flex-col justify-start items-start gap-0.5">
                  <div className="w-full text-left text-gray-900/60 text-xs lg:text-[16px] font-medium lg:font-medium leading-3 lg:leading-[110%]" style={{ fontFamily: 'var(--font-satoshi)' }}>2025</div>
                  <div className="w-full text-left" style={{ fontFamily: 'var(--font-satoshi)' }}>
                    <span className="text-orange-800 lg:text-[#9C2B00] text-sm lg:text-[20px] font-bold lg:font-bold leading-4 lg:leading-[110%]">915€</span>
                    <span className="text-orange-800 lg:text-[#9C2B00] text-xs lg:text-[16px] font-medium lg:font-medium leading-3 lg:leading-[110%]">/mois</span>
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
              <div className="text-center justify-center text-gray-900 text-base lg:text-[24px] font-bold lg:font-bold leading-4 lg:leading-[110%]" style={{ fontFamily: 'var(--font-satoshi)' }}>Propriétaire</div>

              <div className="self-stretch flex flex-col justify-start items-center gap-0.5">
                <div className="w-full p-2 bg-white rounded-lg flex flex-col justify-start items-start gap-0.5">
                  <div className="w-full text-left text-gray-900/60 text-xs lg:text-[16px] font-medium lg:font-medium leading-3 lg:leading-[110%]" style={{ fontFamily: 'var(--font-satoshi)' }}>2015</div>
                  <div className="w-full text-left" style={{ fontFamily: 'var(--font-satoshi)' }}>
                    <span className="text-gray-900 text-sm lg:text-[20px] font-bold lg:font-bold leading-4 lg:leading-[110%]">815€</span>
                    <span className="text-gray-900 text-xs lg:text-[16px] font-medium lg:font-medium leading-3 lg:leading-[110%]">/mois</span>
                  </div>
                </div>
                <div className="w-6 h-6 relative flex items-center justify-center">
                  <Image
                    src="/images/CaretDownGreen.svg"
                    alt="Stable"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="w-full p-2 bg-white rounded-lg outline outline-2 outline-offset-[-2px] outline-emerald-500 flex flex-col justify-start items-start gap-0.5">
                  <div className="w-full text-left text-gray-900/60 text-xs lg:text-[16px] font-medium lg:font-medium leading-3 lg:leading-[110%]" style={{ fontFamily: 'var(--font-satoshi)' }}>2015</div>
                  <div className="w-full text-left" style={{ fontFamily: 'var(--font-satoshi)' }}>
                    <span className="text-emerald-900 lg:text-[#004E28] text-sm lg:text-[20px] font-bold lg:font-bold leading-4 lg:leading-[110%]">815€</span>
                    <span className="text-emerald-900 lg:text-[#004E28] text-xs lg:text-[16px] font-medium lg:font-medium leading-3 lg:leading-[110%]">/mois</span>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>

          {/* Banner 25 ans - Desktop uniquement */}
          <div className="hidden lg:flex self-stretch p-3 bg-[#4ADE80] rounded-2xl flex-col items-center gap-[10px] relative overflow-hidden">
            {/* Images de fond polygones */}
            <Image
              src="/images/Polygon3.svg"
              alt=""
              width={100}
              height={100}
              className="absolute"
              style={{ top: '10px', left: '295px' }}
            />
            <Image
              src="/images/Polygon4.svg"
              alt=""
              width={100}
              height={100}
              className="absolute"
              style={{ bottom: '0px', right: '160px' }}
            />
            <Image
              src="/images/Polygon5.svg"
              alt=""
              width={90}
              height={90}
              className="absolute"
              style={{ top: '0px', left: '400px' }}
            />
            <Image
              src="/images/Polygon7.svg"
              alt=""
              width={120}
              height={120}
              className="absolute"
              style={{ bottom: '0px', left: '170px' }}
            />

            {/* Image 25-ans.svg */}
            <div className="flex-shrink-0 relative z-10">
              <Image
                src="/images/25-ans.svg"
                alt="25 ans"
                width={94.64}
                height={77.88}
                className="object-contain"
              />
            </div>

            {/* Texte */}
            <div className="flex flex-col gap-1 relative z-10" style={{ fontFamily: 'var(--font-satoshi)' }}>
              <div className="text-white text-center text-[20px] font-medium leading-[120%] tracking-[-0.2px]">
                Le crédit, c&apos;est le seul prix qui reste fixe pendant 25 ans.
              </div>
              <div className="text-white text-center text-[20px] font-bold leading-[120%] tracking-[-0.2px]">
                Pendant que ton loyer augmente, ton crédit ne bouge pas.
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
