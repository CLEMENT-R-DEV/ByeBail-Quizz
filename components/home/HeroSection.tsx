export default function HeroSection() {
  return (
    <div className="w-full lg:w-[573px] flex flex-col justify-start items-center gap-3.5 lg:gap-7">
      {/* Badge */}
      <div className="self-stretch px-6 py-3.5 lg:w-96 lg:h-12 lg:mx-auto bg-white rounded-full shadow-[0px_0px_8px_0px_rgba(109,91,152,0.04)] inline-flex justify-start lg:justify-center items-center gap-2.5">
        <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0px_2px_4px_0px_rgba(18,198,111,0.20)]" />
        <div className="text-center justify-center text-neutral-400 text-sm lg:text-base font-semibold font-['Crimson_Pro'] leading-4 lg:leading-6">
          127 personnes sont devenues proprio ce mois-ci
        </div>
      </div>

      {/* Titre principal */}
      <div
        className="self-stretch text-center justify-center text-4xl lg:text-6xl font-semibold font-['Bricolage_Grotesque'] leading-[38.4px] lg:leading-[61.44px] tracking-[-2px]"
        style={{
          background: 'linear-gradient(85deg, #1E3A8A 2.19%, #324E9E 179.74%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        Et si pour le prix de ton loyer, tu devenais propriétaire ?
      </div>

      {/* Sous-titre */}
      <div className="self-stretch text-center justify-center text-zinc-500 text-lg lg:text-xl font-medium font-['Satoshi'] leading-5 lg:leading-6">
        Brise tes chaînes. Deviens libre de choisir ton futur logement.
      </div>
    </div>
  );
}
