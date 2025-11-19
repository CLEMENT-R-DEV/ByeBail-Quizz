'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ContinueButton from '@/components/quiz/ContinueButton';

export default function VideoPausePage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/change-avis');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white">
        <div className="px-4 pt-4 pb-3 flex items-center">
          <button
            onClick={() => router.back()}
            className="p-2 -ml-2 hover:bg-gray-100 rounded-lg transition-colors"
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
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="flex-1 text-center text-xl font-bold pr-10">Quiz ByeBail</h1>
        </div>
      </header>

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
