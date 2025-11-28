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


      {/* Image ByeBail - Mobile */}
      <Image
        className="lg:hidden absolute right-0 top-[30px] opacity-90"
        src="/images/home/byebail 1.png"
        alt="ByeBail illustration"
        width={250}
        height={290}
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
