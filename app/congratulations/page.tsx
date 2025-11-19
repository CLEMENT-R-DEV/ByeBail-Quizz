'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import SimpleHeader from '@/components/quiz/SimpleHeader';

export default function CongratulationsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col">
      <SimpleHeader />

      {/* Main content */}
      <main className="flex-1 flex flex-col px-4 pt-8 pb-6">
        {/* Icône et titre */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-32 h-32 mb-6">
            <Image
              src="/images/search_1.svg"
              alt="Félicitations"
              fill
              className="object-contain"
            />
          </div>
          <h2 className="text-2xl font-bold text-center mb-2">Name, félicitations !</h2>
          <p className="text-center text-base text-gray-700">
            On t&apos;a trouvé la perle rare à Tours
          </p>
        </div>

        {/* Cartes - Grille 2x2 */}
        <div className="mb-8">
          {/* Première ligne - 2 cartes */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Carte Le Plan */}
            <div
              className="bg-white rounded-2xl p-4 flex flex-col items-center text-center"
              style={{
                border: '1px solid rgba(0, 0, 0, 0.08)',
                boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.06)',
              }}
            >
              <div className="relative w-24 h-24 mb-3">
                <Image
                  src="/images/plan.svg"
                  alt="Le Plan"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold mb-1">Le Plan</h3>
              <p className="text-xs text-gray-600 leading-tight">
                Découvre l&apos;agencement de ton futur chez-toi
              </p>
            </div>

            {/* Carte La Situation */}
            <div
              className="bg-white rounded-2xl p-4 flex flex-col items-center text-center"
              style={{
                border: '1px solid rgba(0, 0, 0, 0.08)',
                boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.06)',
              }}
            >
              <div className="relative w-24 h-24 mb-3">
                <Image
                  src="/images/situation.svg"
                  alt="La Situation"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold mb-1">La Situation</h3>
              <p className="text-xs text-gray-600 leading-tight">
                Vois où tu pourrais vivre demain
              </p>
            </div>
          </div>

          {/* Deuxième ligne - 1 carte à gauche */}
          <div className="grid grid-cols-2 gap-4">
            {/* Carte Le Prix */}
            <div
              className="bg-white rounded-2xl p-4 flex flex-col items-center text-center"
              style={{
                border: '1px solid rgba(0, 0, 0, 0.08)',
                boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.06)',
              }}
            >
              <div className="relative w-24 h-24 mb-3">
                <Image
                  src="/images/prix.svg"
                  alt="Le Prix"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold mb-1">Le Prix</h3>
              <p className="text-xs text-gray-600 leading-tight">
                Combien ça coûte vraiment
              </p>
            </div>
            {/* Espace vide à droite */}
            <div></div>
          </div>
        </div>

        {/* Carte Call-to-action */}
        <div className="bg-orange-50 rounded-2xl p-6 mb-6">
          <h3
            className="text-center mb-2"
            style={{
              fontFamily: 'var(--font-bricolage-grotesque), sans-serif',
              fontWeight: 600,
              fontSize: '20px',
              lineHeight: '100%',
              letterSpacing: '-0.01em',
            }}
          >
            Tu kiffes ? On t&apos;en montre plus en visio.
          </h3>
          <p className="text-center text-sm text-gray-600 mb-6">
            Réserve un créneau gratuit de 30 min avec nos experts
          </p>
          <button
            className="w-full bg-[#FE8253] text-white font-semibold py-4 rounded-full hover:bg-[#FE7043] transition-colors flex items-center justify-center gap-2"
            style={{
              fontFamily: 'var(--font-crimson-pro), serif',
              fontSize: '18px',
              lineHeight: '28px',
              fontWeight: 600,
            }}
          >
            Je réserve mon créneau gratuit
            <span className="text-xl">🎯</span>
          </button>
        </div>
      </main>
    </div>
  );
}
