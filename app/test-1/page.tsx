import HeroSection from './components/HeroSection';
import StatCardsContainer from './components/StatCardsContainer';
import CTAButton from './components/CTAButton';

export default function Test1Page() {
  return (
    <div className="w-full lg:mx-auto min-h-screen relative overflow-hidden bg-gradient-to-b from-[#0F172A] to-[#1E293B]">
      <main className="relative px-5 lg:px-[80px] lg:max-w-[1400px] min-h-screen flex flex-col lg:mx-auto">
        {/* Header simplifié - Logo à gauche */}
        <div className="w-full pt-[24px] pb-[13px] flex justify-start items-center">
          <img
            src="/ByeBailTypo.svg"
            alt="ByeBail"
            className="h-8 w-auto brightness-0 invert"
          />
        </div>

        {/* Contenu principal - 2 colonnes sur desktop */}
        <div className="flex-1 w-full flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          {/* Colonne gauche : Hero + CTA */}
          <div className="flex-1 flex flex-col justify-center items-start gap-8 lg:gap-10 lg:max-w-[600px]">
            <HeroSection />
            <CTAButton />
          </div>

          {/* Colonne droite : Cards - Desktop uniquement */}
          <div className="hidden lg:flex">
            <StatCardsContainer />
          </div>
        </div>

        {/* Mobile : Cards en position absolue */}
        <div className="lg:hidden">
          <StatCardsContainer />
        </div>

        {/* Spacer pour le bouton fixe mobile */}
        <div className="h-40 lg:hidden" />
      </main>
    </div>
  );
}
