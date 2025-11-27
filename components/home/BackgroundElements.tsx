import Image from 'next/image';

export default function BackgroundElements() {
  return (
    <>
      {/* Formes physiques décoratives - Mobile */}
      <Image
        className="lg:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-74"
        src="/images/home/Shapes_physics_mobile.svg"
        alt="Formes décoratives"
        width={1727.731}
        height={765.67}
      />

      {/* Formes physiques décoratives - Desktop */}
      <Image
        className="hidden lg:block absolute bottom-0 left-0 w-screen opacity-74"
        src="/images/home/Shapes_physics.svg"
        alt="Formes décoratives"
        width={1727.731}
        height={765.67}
      />

      {/* Illustrations - Mobile */}

      {/* Images décoratives mobiles supplémentaires */}
      <Image
        className="lg:hidden absolute left-[55px] top-[440px]"
        src="/images/home/Rectangle4710.svg"
        alt="Rectangle décoratif"
        width={150}
        height={150}
        style={{
          borderRadius: '12px',
          backgroundColor: 'rgba(217, 217, 217, 0.20)',
          boxShadow: '0 0 15.4px 0 rgba(189, 212, 246, 0.25)'
        }}
      />

      <Image
        className="lg:hidden absolute right-[0px] top-[400px]"
        src="/images/home/Polygon14.svg"
        alt="Polygon 14"
        width={100.74}
        height={100.74}
        style={{
          filter: 'drop-shadow(0 0 15.4px rgba(189, 212, 246, 0.25))'
        }}
      />

      <Image
        className="lg:hidden absolute left-[245px] top-[520px]"
        src="/images/home/Polygon15.svg"
        alt="Polygon 15"
        width={150.74}
        height={150.74}
        style={{
          filter: 'drop-shadow(0 0 15.4px rgba(189, 212, 246, 0.25))'
        }}
      />

      {/* Image ByeBail - Mobile */}
      <Image
        className="lg:hidden absolute right-[0] top-[220px] z-10"
        src="/images/home/byebail 1.png"
        alt="ByeBail illustration"
        width={300}
        height={350}
      />


      {/* Illustrations - Desktop */}

      {/* Image ByeBail droite */}
      <Image
        className="hidden lg:block absolute right-[0px] top-[0px] origin-top-right"
        src="/images/home/byebail 1.png"
        alt="ByeBail illustration"
        width={600}
        height={500}
      />

      {/* Main gauche */}
      <Image
        className="hidden lg:block absolute left-[0px] top-[175px]"
        src="/images/home/image3.svg"
        alt="Main gauche"
        width={428.034}
        height={480.402}
      />
    </>
  );
}
