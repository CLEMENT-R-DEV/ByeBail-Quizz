'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ContinueButton from '@/components/quiz/ContinueButton';

export default function ChangeAvisPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/quiz/9');
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
        <h2
          className="text-center mb-6"
          style={{
            fontFamily: 'var(--font-bricolage-grotesque), sans-serif',
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '100%',
            letterSpacing: '-0.01em',
          }}
        >
          &quot;Mais... et si je change d&apos;avis ?&quot;
        </h2>

        {/* Image jeu */}
        <div className="flex justify-center mb-6">
          <div className="relative w-32 h-32">
            <Image
              src="/images/jeu.svg"
              alt="Jeu vidéo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Texte explicatif */}
        <p className="text-center text-base mb-4">
          Dans un jeu, tu sauvegardes ta partie pour<br />
          pas tout perdre.
        </p>
        <p className="text-center text-base mb-6">
          Dans la vraie vie, c&apos;est pareil.
        </p>

        {/* Carte rouge - Locataire */}
        <div className="bg-red-50 border-[2px] border-[#FF9191] rounded-2xl p-4 mb-4">
          <div className="flex items-start gap-3 mb-3">
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image
                src="/images/valise.svg"
                alt="Valise"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-base mb-2">
                Quand tu es locataire et que<br />
                tu déménages
              </h3>
              <p className="text-sm mb-1">
                → Tu perds <span className="font-bold text-[#E43030]">tout ce que tu as payé.</span>
              </p>
              <p className="text-sm text-gray-600">
                Game over, tu recommences de zéro.
              </p>
            </div>
          </div>
        </div>

        {/* Carte verte - Propriétaire */}
        <div className="bg-green-50 border-[2px] border-[#AAFFC3] rounded-2xl p-4 mb-4">
          <div className="flex items-start gap-3 mb-3">
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image
                src="/images/carton.svg"
                alt="Carton"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-base mb-2">
                Quand tu es proprio et que<br />
                tu revends
              </h3>
              <p className="text-sm mb-1">
                → Tu récupères <span className="font-bold text-[#16A34A]">ce que tu as déjà<br />remboursé.</span>
              </p>
              <p className="text-sm text-gray-600">
                Ta progression est sauvegardée.
              </p>
            </div>
          </div>
        </div>

        {/* Carte violette - Crédit */}
        <div className="mb-4">
          <Image
            src="/images/credit.svg"
            alt="Le crédit, c'est la seule partie que tu peux quitter en gardant tes points"
            width={500}
            height={150}
            className="w-full h-auto"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        {/* Carte jaune - Bonus */}
        <div className="bg-yellow-50 border-[2px] border-[#FFDC4F] rounded-2xl p-4 mb-6">
          <div className="flex items-start gap-3">
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image
                src="/images/piece.svg"
                alt="Pièce"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-base mb-2">Bonus</h3>
              <p className="text-sm">
                Et nous, on a même une <span className="font-bold">garantie<br />
                revente jusqu&apos;à 10 ans</span>. Si le marché baisse<br />
                (spoiler : c&apos;est rare), on compense.
              </p>
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
