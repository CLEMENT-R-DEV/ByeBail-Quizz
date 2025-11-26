export default function HeroSection() {
  return (
    <div className="w-full lg:w-[573px] flex flex-col justify-start items-center gap-3.5 lg:gap-7">
      {/* Badge */}
      <div className="px-4 lg:px-6 py-2.5 lg:py-3.5 bg-white rounded-full shadow-[0px_0px_8px_0px_rgba(109,91,152,0.04)] inline-flex justify-center items-center gap-2">
        <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 bg-emerald-500 rounded-full shadow-[0px_2px_4px_0px_rgba(18,198,111,0.20)] shrink-0" />
        <div className="text-center text-neutral-400 text-[11px] lg:text-base font-semibold font-['Crimson_Pro'] leading-4 lg:leading-6 whitespace-nowrap">
          Des centaines de personnes deviennent proprio chaque mois
        </div>
      </div>

      {/* Titre principal - forme entonnoir sur 2 lignes */}
      <h1
        className="text-center text-[26px] lg:text-6xl font-semibold font-['Bricolage_Grotesque'] leading-[1.15] tracking-[-1px] lg:tracking-[-2px]"
        style={{
          background: 'linear-gradient(85deg, #1E3A8A 2.19%, #324E9E 179.74%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        <span className="whitespace-nowrap">Et si pour le prix de ton loyer,</span><br />
        <span className="whitespace-nowrap">tu devenais propriétaire ?</span>
      </h1>

      {/* Sous-titre - continue l'entonnoir */}
      <div className="text-center text-zinc-500 text-[15px] lg:text-xl font-medium font-['Satoshi'] leading-5 lg:leading-6 whitespace-nowrap">
        Tu dis "plus tard" depuis combien de loyers ?
      </div>
    </div>
  );
}
