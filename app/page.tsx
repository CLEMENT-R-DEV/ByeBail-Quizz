'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ContinueButton from '@/components/quiz/ContinueButton';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      {/* Image de fond */}
      <Image
        src="/images/bg-home.png"
        alt="Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay gradient noir */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/80" />

      {/* Contenu principal */}
      <main className="relative min-h-screen px-5 pt-10 pb-10 flex flex-col items-start">
        {/* Logo ByeBail */}
        <div className="w-full">
          <Image
            src="/images/byebail-icon.svg"
            alt="ByeBail"
            width={40}
            height={40}
            className="brightness-0 invert"
          />
        </div>

        {/* Section texte et cartes - avec gap-10 (40px) du logo et flex-grow pour pousser le bouton en bas */}
        <div className="w-full flex flex-col gap-1.5 mt-10 flex-grow">
          {/* Titre et sous-titre */}
          <div
            className="px-2.5 py-[30px] flex flex-col gap-4 backdrop-blur-sm bg-white/5 rounded-2xl"
            style={{
              borderTop: '1px solid rgba(255, 255, 255, 0.8)',
              borderLeft: '1px solid rgba(255, 255, 255, 0.6)',
              borderRight: '1px solid rgba(200, 200, 200, 0.3)',
              borderBottom: '1px solid rgba(200, 200, 200, 0.3)',
            }}
          >
            <h1
              className="text-white text-5xl lg:text-6xl font-semibold leading-[1.1]"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Devient propriétaire<br/>pour le prix de ton loyer
            </h1>
            <p
              className="text-neutral-100 text-xl lg:text-2xl font-medium leading-8"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Tout ce qui t&apos;en empêchait ?<br/>N&apos;existe plus.
            </p>
          </div>

          {/* 3 cartes info */}
          <div className="w-full flex gap-1.5">
            {/* Carte Apport */}
            <div
              className="flex-1 p-3 rounded-2xl backdrop-blur-sm bg-white/5"
              style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.8)',
                borderLeft: '1px solid rgba(255, 255, 255, 0.6)',
                borderRight: '1px solid rgba(200, 200, 200, 0.3)',
                borderBottom: '1px solid rgba(200, 200, 200, 0.3)',
              }}
            >
              <div className="flex flex-col gap-2">
                <span
                  className="text-white text-base font-normal leading-4"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  Apport
                </span>
                <span
                  className="text-white text-sm font-light leading-4"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  L&apos;équivalent de 3 mois de loyer.
                </span>
              </div>
            </div>

            {/* Carte Mensualités */}
            <div
              className="flex-1 p-3 rounded-2xl backdrop-blur-sm bg-white/5"
              style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.8)',
                borderLeft: '1px solid rgba(255, 255, 255, 0.6)',
                borderRight: '1px solid rgba(200, 200, 200, 0.3)',
                borderBottom: '1px solid rgba(200, 200, 200, 0.3)',
              }}
            >
              <div className="flex flex-col gap-2">
                <span
                  className="text-white text-base font-normal leading-4"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  Mensualités
                </span>
                <span
                  className="text-white text-sm font-light leading-4"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  Identiques à ton loyer
                </span>
              </div>
            </div>

            {/* Carte Résultat */}
            <div
              className="flex-1 p-3 rounded-2xl backdrop-blur-sm bg-white/5"
              style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.8)',
                borderLeft: '1px solid rgba(255, 255, 255, 0.6)',
                borderRight: '1px solid rgba(200, 200, 200, 0.3)',
                borderBottom: '1px solid rgba(200, 200, 200, 0.3)',
              }}
            >
              <div className="flex flex-col gap-2">
                <span
                  className="text-white text-base font-normal leading-4"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  Résultat
                </span>
                <span
                  className="text-white text-sm font-light leading-4"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  Tu deviens propriétaire
                </span>
              </div>
            </div>
          </div>
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
