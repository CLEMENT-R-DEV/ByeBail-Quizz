import Image from 'next/image';

export default function QuizBackgroundShapes() {
  return (
    <>
      <Image
        className="lg:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-74 pointer-events-none"
        src="/images/home/Shapes_physics_mobile.svg"
        alt=""
        width={1727.731}
        height={765.67}
      />
      <Image
        className="hidden lg:block absolute bottom-0 left-0 w-screen opacity-74 pointer-events-none"
        src="/images/home/Shapes_physics.svg"
        alt=""
        width={1727.731}
        height={765.67}
      />
    </>
  );
}
