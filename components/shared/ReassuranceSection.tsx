import Image from 'next/image';

export default function ReassuranceSection() {
  const guarantees = [
    { label: "15 ans d'expérience" },
    { label: 'Plus de 2000 clients devenus propriétaires' },
    { label: 'Sans engagement' },
    { label: '50 experts à tes côtés' },
    { label: 'Partenaires bancaires certifiés' },
  ];

  return (
    <>
      {/* Mobile: grille 2 colonnes */}
      <div className="lg:hidden grid grid-cols-2 gap-4 px-4">
        {guarantees.map((guarantee, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 p-3 bg-white rounded-xl shadow-[0px_0px_6px_0px_rgba(90,164,255,0.10)]"
          >
            <div className="w-10 h-10 bg-white rounded-xl shadow-[0px_0px_6px_0px_rgba(90,164,255,0.10)] flex justify-center items-center">
              <Image
                src="/images/home/SVG.svg"
                alt="Icône garantie"
                width={24}
                height={24}
              />
            </div>
            <div className="text-center text-gray-700 text-sm font-normal font-['Satoshi'] leading-4">
              {guarantee.label}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: ligne horizontale */}
      <div className="hidden lg:flex w-full max-w-[1160px] justify-start items-center">
        {guarantees.map((guarantee, index) => (
          <div
            key={index}
            className="flex-1 pl-3.5 border-l border-gray-600/20 inline-flex flex-col justify-start items-start gap-3"
          >
            <div className="w-[61px] h-[61px] bg-white rounded-[20px] shadow-[0px_0px_6px_0px_rgba(90,164,255,0.10)] inline-flex justify-center items-center gap-2.5">
              <div className="w-8 h-8 relative">
                <Image
                  src="/images/home/SVG.svg"
                  alt="Icône garantie"
                  width={32}
                  height={32}
                />
              </div>
            </div>
            <div className="self-stretch justify-center text-gray-700 text-base font-normal font-['Satoshi'] leading-5">
              {guarantee.label}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
