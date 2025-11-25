'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import SimpleHeader from '@/components/quiz/SimpleHeader';
import ChoiceCard from '@/components/quiz/ChoiceCard';

export default function CongratulationsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col">
      <SimpleHeader />

      {/* Main content */}
      <main className="flex-1 flex flex-col mx-4 lg:mx-0">
        {/* Conteneur 750px sur desktop */}
        <div className="w-full lg:w-[750px] lg:mt-[100px] mt-[20px] mx-auto flex flex-col">
          {/* Carte principale */}
          <div className="rounded-3xl flex flex-col justify-center items-center gap-5 mb-2.5">
          <div className="w-28 h-20 relative rounded-lg overflow-hidden">
            <Image
              src="/images/image146.svg"
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

        {/* Cartes - 3 cartes sur une ligne en desktop, grille 2x2 sur mobile */}
        <div className="mb-8 flex flex-col gap-2">
          {/* Mobile: Première ligne - 2 cartes */}
          <div className="lg:hidden self-stretch grid grid-cols-2 gap-2">
            <ChoiceCard
              id="plan"
              label="Le Plan"
              subtitle="Découvre l'agencement de ton futur chez-toi"
              image="/images/icon158.svg"
              selected={false}
              onClick={() => {}}
              compactImage={true}
              fullSize={true}
              labelClassName="text-center text-[#111827] text-[20px] font-semibold font-['Bricolage_Grotesque'] leading-[100%] tracking-[-0.2px]"
              subtitleClassName="text-center text-[#111827] text-[14px] font-normal font-['Satoshi_Variable'] leading-[110%]"
            />
            <ChoiceCard
              id="situation"
              label="La Situation"
              subtitle="Vois où tu pourrais vivre demain"
              image="/images/icon157.svg"
              selected={false}
              onClick={() => {}}
              compactImage={true}
              fullSize={true}
              labelClassName="text-center text-[#111827] text-[20px] font-semibold font-['Bricolage_Grotesque'] leading-[100%] tracking-[-0.2px]"
              subtitleClassName="text-center text-[#111827] text-[14px] font-normal font-['Satoshi_Variable'] leading-[110%]"
            />
          </div>

          {/* Mobile: Deuxième ligne - 1 carte à gauche */}
          <div className="lg:hidden self-stretch flex justify-start items-start gap-2">
            <div className="w-[calc(50%-4px)]">
              <ChoiceCard
                id="prix"
                label="Le Prix"
                subtitle="Combien ça coûte vraiment"
                image="/images/icon156.svg"
                selected={false}
                onClick={() => {}}
                compactImage={true}
                fullSize={true}
                labelClassName="text-center text-[#111827] text-[20px] font-semibold font-['Bricolage_Grotesque'] leading-[100%] tracking-[-0.2px]"
                subtitleClassName="text-center text-[#111827] text-[14px] font-normal font-['Satoshi_Variable'] leading-[110%]"
              />
            </div>
          </div>

          {/* Desktop: 3 cartes sur une seule ligne */}
          <div className="hidden lg:flex self-stretch justify-start items-start gap-2">
            <div className="flex-1">
              <ChoiceCard
                id="plan"
                label="Le Plan"
                subtitle="Découvre l'agencement de ton futur chez-toi"
                image="/images/icon158.svg"
                selected={false}
                onClick={() => {}}
                compactImage={true}
                fullSize={true}
                labelClassName="text-center text-[#111827] text-[20px] font-semibold font-['Bricolage_Grotesque'] leading-[100%] tracking-[-0.2px]"
                subtitleClassName="text-center text-[#111827] text-[14px] font-normal font-['Satoshi_Variable'] leading-[110%]"
              />
            </div>
            <div className="flex-1">
              <ChoiceCard
                id="situation"
                label="La Situation"
                subtitle="Vois où tu pourrais vivre demain"
                image="/images/icon157.svg"
                selected={false}
                onClick={() => {}}
                compactImage={true}
                fullSize={true}
                labelClassName="text-center text-[#111827] text-[20px] font-semibold font-['Bricolage_Grotesque'] leading-[100%] tracking-[-0.2px]"
                subtitleClassName="text-center text-[#111827] text-[14px] font-normal font-['Satoshi_Variable'] leading-[110%]"
              />
            </div>
            <div className="flex-1">
              <ChoiceCard
                id="prix"
                label="Le Prix"
                subtitle="Combien ça coûte vraiment"
                image="/images/icon156.svg"
                selected={false}
                onClick={() => {}}
                compactImage={true}
                fullSize={true}
                labelClassName="text-center text-[#111827] text-[20px] font-semibold font-['Bricolage_Grotesque'] leading-[100%] tracking-[-0.2px]"
                subtitleClassName="text-center text-[#111827] text-[14px] font-normal font-['Satoshi_Variable'] leading-[110%]"
              />
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
        </div>
      </main>
    </div>
  );
}
