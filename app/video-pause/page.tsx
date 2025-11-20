'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import SimpleHeader from '@/components/quiz/SimpleHeader';
import ContinueButton from '@/components/quiz/ContinueButton';

export default function VideoPausePage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/change-avis');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SimpleHeader />

      {/* Main content */}
      <main className="flex-1 flex flex-col mx-4 pt-8 pb-6">
        {/* Carte principale */}
        <div className="px-2.5 py-5 bg-white rounded-2xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.04)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 flex flex-col justify-start items-start gap-6">
          {/* Titre et sous-titre */}
          <div className="self-stretch flex flex-col justify-start items-center gap-2.5">
            <div className="self-stretch text-center justify-center text-gray-900 text-xl font-semibold font-['Bricolage_Grotesque'] leading-5">Petite pause.</div>
            <div className="text-center justify-center text-gray-900 text-base font-normal font-['Satoshi'] leading-5">David, le fondateur, veut te dire un truc important.</div>
          </div>

          {/* Carte vidéo violette */}
          <div className="self-stretch relative rounded-[20px] overflow-hidden">
            <Image
              src="/images/Video.svg"
              alt="Vidéo de David Brauman"
              width={400}
              height={400}
              className="object-contain w-full"
            />
          </div>

          {/* Boutons */}
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            {/* Bouton principal orange */}
            <button
              onClick={handleContinue}
              className="w-full h-14 rounded-[105px] bg-[#FE8253] hover:bg-[#e67349] active:scale-98 text-white font-semibold transition-all duration-200 flex items-center justify-center"
              style={{
                fontFamily: 'var(--font-crimson-pro), serif',
                fontSize: '18px',
                lineHeight: '1',
                padding: '0 18px',
                boxShadow: 'inset 0 2px 4px #EC48095E, 0 4px 8px #EC480947',
              }}
            >
              J&apos;ai vu la vidéo, on continue
            </button>

            {/* Bouton Skip blanc */}
            <button
              onClick={handleContinue}
              className="w-full h-14 rounded-[105px] bg-white hover:bg-gray-50 active:scale-98 text-gray-900 font-semibold transition-all duration-200 flex items-center justify-center border-2 border-gray-200"
              style={{
                fontFamily: 'var(--font-crimson-pro), serif',
                fontSize: '18px',
                lineHeight: '1',
                padding: '0 18px',
              }}
            >
              Pas le temps ? Skip →
            </button>
          </div>
        </div>

        {/* Spacer pour pousser le bouton Continue vers le bas */}
        <div className="flex-1"></div>

        {/* Bouton Continue */}
        <ContinueButton onClick={handleContinue} disabled={false} />
      </main>
    </div>
  );
}
