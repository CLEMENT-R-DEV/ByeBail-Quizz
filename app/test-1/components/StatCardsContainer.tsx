import StatCard from './StatCard';

export default function StatCardsContainer() {
  return (
    <>
      {/* Mobile: 3 cartes glass en ligne */}
      <div className="lg:hidden absolute inset-x-0 bottom-[180px] z-20 pointer-events-none flex justify-center gap-3 px-5">
        {/* Carte 1 - Apport */}
        <div className="p-[1px] bg-gradient-to-b from-white/20 to-white/5 rotate-[-5deg] rounded-[20px]">
          <div className="w-[100px] p-3 relative bg-white/10 backdrop-blur-xl rounded-[19px] border border-white/10 inline-flex justify-center items-start overflow-hidden">
            <div className="self-stretch inline-flex flex-col justify-start items-center gap-1 z-10">
              <div className="text-indigo-400 text-xs font-bold leading-4" style={{ fontFamily: 'var(--font-inter-display)', letterSpacing: '-0.04em' }}>
                Apport
              </div>
              <div className="w-[85px] text-center text-slate-300 text-[9px] font-normal leading-[12px]" style={{ fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.02em' }}>
                l&apos;équivalent de 3 mois de loyer
              </div>
            </div>
          </div>
        </div>

        {/* Carte 2 - Mensualités */}
        <div className="p-[1px] bg-gradient-to-b from-white/20 to-white/5 rotate-[3deg] rounded-[20px]">
          <div className="w-[100px] p-3 relative bg-white/10 backdrop-blur-xl rounded-[19px] border border-white/10 inline-flex justify-center items-start overflow-hidden">
            <div className="self-stretch inline-flex flex-col justify-start items-center gap-1 z-10">
              <div className="text-indigo-400 text-xs font-bold leading-4" style={{ fontFamily: 'var(--font-inter-display)', letterSpacing: '-0.04em' }}>
                Mensualités
              </div>
              <div className="w-[85px] text-center text-slate-300 text-[9px] font-normal leading-[12px]" style={{ fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.02em' }}>
                = ton loyer actuel
              </div>
            </div>
          </div>
        </div>

        {/* Carte 3 - Résultat */}
        <div className="p-[1px] bg-gradient-to-b from-white/20 to-white/5 rotate-[-3deg] rounded-[20px]">
          <div className="w-[100px] p-3 relative bg-white/10 backdrop-blur-xl rounded-[19px] border border-white/10 inline-flex justify-center items-start overflow-hidden">
            <div className="self-stretch inline-flex flex-col justify-start items-center gap-1 z-10">
              <div className="text-indigo-400 text-xs font-bold leading-4" style={{ fontFamily: 'var(--font-inter-display)', letterSpacing: '-0.04em' }}>
                Résultat
              </div>
              <div className="w-[85px] text-center text-slate-300 text-[9px] font-normal leading-[12px]" style={{ fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.02em' }}>
                ton appartement
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: 3 cartes glass empilées verticalement */}
      <div className="hidden lg:flex flex-col items-end gap-4">
        <StatCard value="Apport" label="l'équivalent de 3 mois de loyer. Pas 30 000 €." />
        <StatCard value="Mensualités" label="identiques à ton loyer actuel." />
        <StatCard value="Résultat" label="ton appartement." />
      </div>
    </>
  );
}
