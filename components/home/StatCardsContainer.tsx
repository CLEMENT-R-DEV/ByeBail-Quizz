import StatCard from './StatCard';

export default function StatCardsContainer() {
  return (
    <>
      {/* Mobile: 3 petites cartes en ligne, en dessous du contenu */}
      <div className="lg:hidden absolute inset-x-0 bottom-[180px] z-20 pointer-events-none flex justify-center gap-2 px-4">
        {/* Carte 1 - Orange - Apport */}
        <div className="p-1 bg-[#FCFEFF] rotate-[-5deg] rounded-[20px] shadow-[-5px_4px_15px_0px_rgba(174,185,193,0.10)]">
          <div className="w-24 p-2 relative bg-white rounded-2xl shadow-[-5px_4px_15px_0px_rgba(174,185,193,0.10)] inline-flex justify-center items-start overflow-hidden">
            <div className="w-48 h-32 absolute left-[-50px] top-[-15px] bg-white/60 rounded-[50px] blur-2xl" />
            <div className="self-stretch inline-flex flex-col justify-start items-center gap-0.5 z-10">
              <div className="justify-center text-orange-500 text-xs font-semibold font-['Bricolage_Grotesque'] leading-3">
                Apport
              </div>
              <div className="w-[80px] text-center justify-center text-gray-600 text-[9px] font-normal font-['Satoshi'] leading-[11px]">
                l&apos;équivalent de 3 mois de loyer
              </div>
            </div>
          </div>
        </div>

        {/* Carte 2 - Blue - Mensualités */}
        <div className="p-1 bg-[#FCFEFF] rotate-[3deg] rounded-[20px] shadow-[-5px_4px_15px_0px_rgba(174,185,193,0.10)]">
          <div className="w-24 p-2 relative bg-white rounded-2xl shadow-[-5px_4px_15px_0px_rgba(174,185,193,0.10)] inline-flex justify-center items-start overflow-hidden">
            <div className="w-48 h-32 absolute left-[-50px] top-[-15px] bg-white/60 rounded-[50px] blur-2xl" />
            <div className="self-stretch inline-flex flex-col justify-start items-center gap-0.5 z-10">
              <div className="justify-center text-blue-900 text-xs font-semibold font-['Bricolage_Grotesque'] leading-3">
                Mensualités
              </div>
              <div className="w-[80px] text-center justify-center text-gray-600 text-[9px] font-normal font-['Satoshi'] leading-[11px]">
                = ton loyer actuel
              </div>
            </div>
          </div>
        </div>

        {/* Carte 3 - Emerald - Résultat */}
        <div className="p-1 bg-[#FCFEFF] rotate-[-3deg] rounded-[20px] shadow-[-5px_4px_15px_0px_rgba(174,185,193,0.10)]">
          <div className="w-24 p-2 relative bg-white rounded-2xl shadow-[-5px_4px_15px_0px_rgba(174,185,193,0.10)] inline-flex justify-center items-start overflow-hidden">
            <div className="w-48 h-32 absolute left-[-50px] top-[-15px] bg-white/60 rounded-[50px] blur-2xl" />
            <div className="self-stretch inline-flex flex-col justify-start items-center gap-0.5 z-10">
              <div className="justify-center text-emerald-500 text-xs font-semibold font-['Bricolage_Grotesque'] leading-3">
                Résultat
              </div>
              <div className="w-[80px] text-center justify-center text-gray-600 text-[9px] font-normal font-['Satoshi'] leading-[11px]">
                ton appartement
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: 3 grandes cartes côte à côte SANS rotation */}
      <div className="hidden lg:flex self-stretch h-48 justify-center items-center gap-3.5">
        <StatCard value="Apport" label="l'équivalent de 3 mois de loyer. Pas 30 000 €." color="orange" />
        <StatCard value="Mensualités" label="identiques à ton loyer actuel." color="blue" />
        <StatCard value="Résultat" label="ton appartement." color="emerald" />
      </div>
    </>
  );
}
