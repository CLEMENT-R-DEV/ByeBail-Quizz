import HomeHeader from '@/components/home/HomeHeader';
import HeroSection from '@/components/home/HeroSection';
import StatCardsContainer from '@/components/home/StatCardsContainer';
import GuaranteesSection from '@/components/home/GuaranteesSection';
import BackgroundElements from '@/components/home/BackgroundElements';
import CTAButton from '@/components/home/CTAButton';

export default function HomePage() {
  return (
    <div
      className="w-full lg:mx-auto min-h-screen relative overflow-hidden"
      style={{
        background: 'linear-gradient(181deg, rgba(255, 255, 255, 0.00) 1.2%, rgba(165, 180, 253, 0.34) 156.28%), linear-gradient(68deg, rgba(149, 167, 187, 0.15) -152.78%, rgba(255, 255, 255, 0.15) 98.17%), #FFF'
      }}
    >
      {/* Éléments de fond décoratifs */}
      <BackgroundElements />

      <main className="relative px-4 lg:px-[0px] lg:w-[1160px] flex flex-col lg:mx-auto lg:gap-10 mb-10 lg:mb-15">
        {/* Header */}
        <HomeHeader />

        {/* Contenu principal */}
        <div className="w-full inline-flex flex-col  justify-start items-center gap-5 lg:gap-10">
          {/* Section Hero */}
          <HeroSection />

          {/* Cartes statistiques */}
          <StatCardsContainer />

          {/* Section Garanties (desktop uniquement) */}
          <GuaranteesSection />

          {/* Bouton CTA */}
          <CTAButton />
        </div>
      </main>
    </div>
  );
}
