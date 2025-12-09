'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ContinueButton from '@/components/quiz/ContinueButton';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="w-full h-[100dvh] relative overflow-hidden flex flex-col">
      {/* Image de fond */}
      <Image
        src="/images/bgHome.jpg"
        alt="Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay gradient noir */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />

      {/* Contenu principal */}
      <main className="relative w-full flex-1 px-5 pt-10 pb-5 flex flex-col items-center overflow-hidden">
        {/* Logo ByeBail */}
        <div className="w-full flex justify-center">
          <Image
            src="/images/byebail-icon.svg"
            alt="ByeBail"
            width={40}
            height={40}
            className="brightness-0 invert"
          />
        </div>

        {/* Section texte - centrée verticalement */}
        <div className="w-full flex-1 flex flex-col justify-center items-center">
          <h1 className="flex flex-col gap-0 text-center">
            <span
              className="text-white font-bold leading-[1.1]"
              style={{ fontFamily: 'var(--font-inter)', fontSize: '52px' }}
            >
              Deviens propriétaire
              <br />
              pour le prix
            </span>
            <span
              style={{
                fontFamily: 'var(--font-permanent-marker)',
                color: '#22C55E',
                fontSize: '58px',
                lineHeight: 1,
                transform: 'rotate(-5deg)',
                display: 'inline-block',
              }}
            >
              DE TON LOYER
            </span>
          </h1>
        </div>

        {/* Bouton CTA */}
        <div className="w-full">
          <ContinueButton
            onClick={() => router.push('/quiz/1')}
            label="Je découvre mon éligibilité"
          />
        </div>
      </main>
    </div>
  );
}
