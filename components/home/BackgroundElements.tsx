import Image from 'next/image';

export default function BackgroundElements() {
  return (
    <>
      {/* Formes physiques décoratives - Shapes_physics.svg */}
      <Image
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-74"
        src="/images/home/Shapes_physics.svg"
        alt="Formes décoratives"
        width={1727.731}
        height={765.67}
        style={{ backgroundColor: '#D9D9D933' }}
      />

      {/* Maisons illustrées - Mobile */}
      {/* Main gauche avec personnage orange */}
      <Image
        className="lg:hidden absolute left-[180px] top-[450px]"
        src="/images/home/image3.svg"
        alt="Main gauche"
        width={200}
        height={200}
      />
      <Image
        className="lg:hidden absolute left-[190px] top-[420px]"
        src="/images/home/Orange1.svg"
        alt="Personnage orange"
        width={80}
        height={80}
      />

      {/* Maison + éléments décoratifs - Mobile */}

      {/* Maisons illustrées - Desktop */}
      
      {/* Main droite */}
      <Image
        className="hidden lg:block absolute right-[0px] top-[90px] origin-top-left"
        src="/images/home/byebail1.svg"
        alt="Main droite"
        width={499}
        height={325}
      />

      {/* Personnage vert qui se balance */}
      <Image
        className="hidden lg:block absolute right-[170px] top-[365px]"
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

      {/* Maison + éléments décoratifs - Desktop */}


      {/* Autre maison - Desktop */}

    </>
  );
}
