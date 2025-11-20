'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import SimpleHeader from '@/components/quiz/SimpleHeader';
import ContinueButton from '@/components/quiz/ContinueButton';

export default function ChangeAvisPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/quiz/9');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SimpleHeader />

      {/* Main content */}
      <main className="flex-1 flex flex-col mx-4 pt-8 pb-6">
        {/* Carte principale blanche */}
        <div className="p-5 bg-white rounded-3xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.04)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 flex flex-col justify-center items-center gap-5">
          {/* Titre et image */}
          <div className="self-stretch flex flex-col justify-start items-center gap-2.5">
            <div className="self-stretch text-center justify-center text-gray-900 text-xl font-semibold font-['Bricolage_Grotesque'] leading-5">&quot;Mais... et si je change d&apos;avis ?&quot;</div>

            {/* Image jeu */}
            <div className="w-28 h-28 relative overflow-hidden">
              <Image
                src="/images/jeu.svg"
                alt="Jeu vidéo"
                fill
                className="object-contain"
              />
            </div>

            {/* Texte explicatif */}
            <div className="self-stretch text-center justify-center text-gray-900 text-base font-normal font-['Satoshi'] leading-5">Dans un jeu, tu sauvegardes ta partie pour pas tout perdre.</div>
            <div className="self-stretch text-center justify-center text-gray-900 text-base font-normal font-['Satoshi'] leading-5">Dans la vraie vie, c&apos;est pareil.</div>
          </div>

          {/* Section cartes comparatives */}
          <div className="self-stretch flex flex-col justify-start items-start gap-5">
            {/* Carte rouge - Locataire */}
            <div className="self-stretch p-4 bg-white rounded-2xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.04)] outline outline-4 outline-offset-[-4px] outline-[#FF9191] flex flex-col justify-start items-start gap-2.5">
              <div className="self-stretch flex justify-start items-start gap-2.5">
                <div className="w-14 h-14 relative rounded-lg overflow-hidden">
                  <Image
                    src="/images/valise.svg"
                    alt="Valise"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 rounded-lg shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.10)] flex flex-col justify-center items-center gap-2.5">
                  <div className="self-stretch justify-center text-gray-900 text-base font-semibold font-['Bricolage_Grotesque'] leading-4">Quand tu es locataire et que tu déménages</div>
                  <div className="self-stretch justify-center">
                    <span className="text-gray-900 text-sm font-normal font-['Satoshi'] leading-4">→ Tu perds </span>
                    <span className="text-[#E43030] text-sm font-bold font-['Satoshi_Variable'] leading-4">tout ce que tu as payé.</span>
                  </div>
                  <div className="self-stretch justify-center text-gray-900/60 text-sm font-normal font-['Satoshi'] leading-4">Game over, tu recommences de zéro.</div>
                </div>
              </div>
            </div>

            {/* Carte verte - Propriétaire */}
            <div className="self-stretch p-4 bg-white rounded-2xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.04)] outline outline-4 outline-offset-[-4px] outline-[#AAFFC3] flex flex-col justify-start items-start gap-2.5">
              <div className="self-stretch flex justify-start items-start gap-2.5">
                <div className="w-14 h-14 relative bg-indigo-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/carton.svg"
                    alt="Carton"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 rounded-lg shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.10)] flex flex-col justify-center items-center gap-2.5">
                  <div className="self-stretch justify-center text-gray-900 text-base font-semibold font-['Bricolage_Grotesque'] leading-4">Quand tu es proprio et que tu revends</div>
                  <div className="self-stretch justify-center">
                    <span className="text-gray-900 text-sm font-normal font-['Satoshi'] leading-4">→ Tu récupères </span>
                    <span className="text-[#16A34A] text-sm font-bold font-['Satoshi_Variable'] leading-4">ce que tu as déjà remboursé.</span>
                  </div>
                  <div className="self-stretch justify-center text-gray-900/60 text-sm font-normal font-['Satoshi'] leading-4">Ta progression est sauvegardée.</div>
                </div>
              </div>
            </div>

            {/* Carte violette - Crédit */}
            <div className="self-stretch relative rounded-2xl overflow-hidden">
              <Image
                src="/images/credit.svg"
                alt="Le crédit, c'est la seule partie que tu peux quitter en gardant tes points"
                width={400}
                height={200}
                className="object-contain w-full"
              />
              <div className="absolute inset-0 flex items-end justify-center pb-4 px-4">
                <div className="text-center justify-center text-white text-base font-medium font-['Satoshi'] leading-5">
                  Le crédit, c&apos;est la seule partie que tu peux quitter en gardant tes points.
                </div>
              </div>
            </div>

            {/* Carte jaune - Bonus */}
            <div className="self-stretch p-4 bg-yellow-50 rounded-2xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.04)] outline outline-2 outline-offset-[-2px] outline-[#FFDC4F] flex flex-col justify-start items-start gap-2.5">
              <div className="self-stretch flex justify-start items-start gap-2.5">
                <div className="w-14 h-14 relative rounded-lg overflow-hidden">
                  <Image
                    src="/images/piece.svg"
                    alt="Pièce"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 rounded-lg shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.10)] flex flex-col justify-center items-center gap-2.5">
                  <div className="self-stretch justify-center text-gray-900 text-base font-semibold font-['Bricolage_Grotesque'] leading-4">Bonus</div>
                  <div className="self-stretch justify-center">
                    <span className="text-gray-900 text-sm font-normal font-['Satoshi'] leading-4">Et nous, on a même une </span>
                    <span className="text-gray-900 text-sm font-bold font-['Satoshi_Variable'] leading-4">garantie revente jusqu&apos;à 10 ans.</span>
                    <span className="text-gray-900 text-sm font-normal font-['Satoshi'] leading-4"> Si le marché baisse (spoiler : c&apos;est rare), on compense.</span>
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
