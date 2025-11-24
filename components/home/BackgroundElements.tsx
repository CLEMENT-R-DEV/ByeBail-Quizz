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
        style={{ backgroundColor: 'rgba(217, 217, 217, 0.2)' }}
      />

      {/* Formes physiques décoratives - Desktop */}
      <Image
        className="hidden lg:block absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-74"
        src="/images/home/Shapes_physics.svg"
        alt="Formes décoratives"
        width={1727.731}
        height={765.67}
        style={{ backgroundColor: 'rgba(217, 217, 217, 0.2)' }}
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

      {/* Main gauche avec personnage orange */}
      <Image
        className="lg:hidden absolute right-[0] top-[220px] z-10"
        src="/images/home/byebail1.svg"
        alt="Main gauche"
        width={381.924}
        height={401.87}
      />
      <Image
        className="lg:hidden absolute right-[130px] top-[440px] z-10"
        src="/images/home/Green.svg"
        alt="Personnage orange"
        width={127.478}
        height={231.79}
      />


      {/* Illustrations - Desktop */}
      
      {/* Main droite */}
      <Image
        className="hidden lg:block absolute right-[-20px] top-[0px] origin-top-left"
        src="/images/home/byebail1.svg"
        alt="Main droite"
        width={499}
        height={325}
      />

      {/* Personnage vert qui se balance */}
      <Image
        className="hidden lg:block absolute right-[150px] top-[275px]"
        src="/images/home/Green.svg"
        alt="Personnage vert"
        width={202.399}
        height={371}
      />

      {/* main gauche */}
      <Image
        className="hidden lg:block absolute left-[0px] top-[175px]"
        src="/images/home/image3.svg"
        alt="Main gauche"
        width={428.034}
        height={480.402}
      />

      {/* Personnage orange */}
      <Image
        className="hidden lg:block absolute left-[200px] top-[190px]"
        src="/images/home/Orange1.svg"
        alt="Personnage orange"
        width={202.399}
        height={371}
      />
    </>
  );
}
