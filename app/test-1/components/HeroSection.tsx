export default function HeroSection() {
  return (
    <div className="w-full lg:w-[700px] flex flex-col justify-start items-start gap-4 lg:gap-6">
      {/* Badge glass */}
      <div className="px-4 lg:px-5 py-2 lg:py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 inline-flex justify-center items-center gap-2">
        <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 bg-emerald-400 rounded-full shadow-[0px_0px_8px_0px_rgba(52,211,153,0.5)]" />
        <div className="text-slate-300 text-[11px] lg:text-sm font-medium leading-4 lg:leading-5" style={{ fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.02em' }}>
          Des centaines de personnes deviennent proprio chaque mois
        </div>
      </div>

      {/* Titre principal */}
      <h1
        className="w-full text-left text-[56px] lg:text-[80px] font-bold leading-[0.95] text-white"
        style={{
          fontFamily: 'var(--font-inter-display)',
          letterSpacing: '-0.08em',
        }}
      >
        Deviens propriétaire pour le prix de ton loyer.
      </h1>

      {/* Sous-titre */}
      <div className="text-left text-slate-400 text-[17px] lg:text-xl font-medium leading-6 lg:leading-7" style={{ fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.02em' }}>
        Tout ce qui t&apos;en empêchait ? N&apos;existe plus.
      </div>
    </div>
  );
}
