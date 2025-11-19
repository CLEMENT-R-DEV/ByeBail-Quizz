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
        {/* Titre principal */}
        <h2 className="text-3xl font-bold text-center mb-3">Petite pause.</h2>

        {/* Sous-titre */}
        <p className="text-center text-base text-gray-700 mb-8">
          David, le fondateur, veut te dire<br />
          un truc important.
        </p>

        {/* Carte vidéo violette */}
        <div className="rounded-3xl mb-6 flex flex-col items-center">
          {/* Image vidéo (contient déjà le texte incrusté) */}
          <div className="relative w-full h-auto">
            <Image
              src="/images/Video.svg"
              alt="Vidéo de David Brauman"
              width={400}
              height={400}
              className="object-contain w-full"
            />
          </div>
        </div>

        {/* Bouton principal orange */}
        <button
          onClick={handleContinue}
          className="w-full bg-[#FE8253] text-white font-semibold py-4 rounded-full mb-4 hover:bg-[#FE7043] transition-colors"
          style={{
            fontFamily: 'var(--font-crimson-pro), serif',
            fontSize: '18px',
            lineHeight: '28px',
            fontWeight: 600,
          }}
        >
          J&apos;ai vu la vidéo, on continue
        </button>

        {/* Bouton Skip blanc */}
        <button
          onClick={handleContinue}
          className="w-full bg-white text-gray-800 font-semibold py-4 rounded-full mb-6 border-2 border-gray-200 hover:bg-gray-50 transition-colors"
          style={{
            fontFamily: 'var(--font-crimson-pro), serif',
            fontSize: '18px',
            lineHeight: '28px',
            fontWeight: 600,
          }}
        >
          Pas le temps ? Skip →
        </button>

        {/* Spacer pour pousser le bouton Continue vers le bas */}
        <div className="flex-1"></div>

        {/* Bouton Continue */}
        <ContinueButton onClick={handleContinue} disabled={false} />
      </main>
    </div>
  );
}
