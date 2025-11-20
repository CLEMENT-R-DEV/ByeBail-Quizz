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
      <main className="flex-1 flex flex-col px-4 pt-5 pb-6">
        {/* Carte principale */}
        <div className="rounded-3xl flex flex-col justify-center items-center gap-5 mb-2.5">
          <div className="w-28 h-20 relative rounded-lg overflow-hidden">
            <Image
              src="/images/search_2.svg"
              alt="Félicitations"
              fill
              className="object-contain"
            />
          </div>
          <div className="self-stretch flex flex-col justify-start items-center gap-2.5">
            <div className="self-stretch text-center justify-center text-gray-900 text-xl font-semibold font-['Bricolage_Grotesque'] leading-5">Name, félicitations !</div>
            <div className="self-stretch text-center justify-center text-gray-900 text-base font-normal font-['Satoshi'] leading-5">On t&apos;a trouvé la perle rare à Tours</div>
          </div>
        </div>

        {/* Cartes - Grille 2x2 */}
        <div className="mb-8 flex flex-col gap-2">
          {/* Première ligne - 2 cartes */}
          <div className="self-stretch flex justify-start items-start gap-2">
            {/* Carte Le Plan */}
            <div className="flex-1 p-2.5 bg-white rounded-2xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.10)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 flex flex-col justify-center items-center gap-2.5">
              <div className="self-stretch p-2.5 bg-white rounded-lg shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.10)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/10 flex flex-col justify-center items-center gap-2.5">
                <div className="w-28 h-20 relative bg-indigo-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/plan.svg"
                    alt="Le Plan"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col justify-start items-center gap-0.5">
                  <div className="text-center justify-center text-gray-900 text-base font-medium font-['Satoshi'] leading-4">Le Plan</div>
                </div>
                <div className="self-stretch text-center justify-center text-gray-900 text-sm font-normal font-['Satoshi'] leading-4">Découvre l&apos;agencement de ton futur chez-toi</div>
              </div>
            </div>

            {/* Carte La Situation */}
            <div className="flex-1 self-stretch p-2.5 bg-white rounded-2xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.10)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 flex flex-col justify-center items-center gap-2.5">
              <div className="self-stretch flex-1 p-2.5 bg-white rounded-lg shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.10)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/10 flex flex-col justify-center items-center gap-2.5">
                <div className="w-28 h-20 relative bg-indigo-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/situation.svg"
                    alt="La Situation"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="self-stretch flex flex-col justify-start items-center gap-0.5">
                  <div className="text-center justify-center text-gray-900 text-base font-medium font-['Satoshi'] leading-4">La Situation</div>
                </div>
                <div className="self-stretch text-center justify-center text-gray-900 text-sm font-normal font-['Satoshi'] leading-4">Vois où tu pourrais vivre demain</div>
              </div>
            </div>
          </div>

          {/* Deuxième ligne - 1 carte à gauche */}
          <div className="self-stretch flex justify-start items-start gap-2">
            {/* Carte Le Prix */}
            <div className="w-[calc(50%-4px)] p-2.5 bg-white rounded-2xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.10)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 flex flex-col justify-center items-center gap-2.5">
              <div className="self-stretch p-2.5 bg-white rounded-lg shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.10)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/10 flex flex-col justify-center items-center gap-2.5">
                <div className="w-28 h-20 relative bg-indigo-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/prix.svg"
                    alt="Le Prix"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col justify-start items-center gap-0.5">
                  <div className="text-center justify-center text-gray-900 text-base font-medium font-['Satoshi'] leading-4">Le Prix</div>
                </div>
                <div className="self-stretch text-center justify-center text-gray-900 text-sm font-normal font-['Satoshi'] leading-4">Combien ça coûte vraiment</div>
              </div>
            </div>
          </div>
        </div>

        {/* Carte Call-to-action */}
        <div className="bg-[#FFF3ED] rounded-[18px] p-6 mb-6 shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.04)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/[0.04]">
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
