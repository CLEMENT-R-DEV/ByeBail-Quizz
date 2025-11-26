import Image from 'next/image';

export default function GuaranteesSection() {
  const guarantees = [
    { label: "15 ans d'expérience" },
    { label: 'Plus de 2000 clients devenus propriétaires' },
    { label: 'Sans engagement' },
    { label: '50 experts à tes côtés' },
    { label: 'Partenaires bancaires certifiés' },
  ];

  return (
    <div className="hidden lg:flex self-stretch justify-start items-center">
      {guarantees.map((guarantee, index) => (
        <div
          key={index}
          className="flex-1 pl-3.5 border-l border-gray-600/20 inline-flex flex-col justify-start items-start gap-3"
        >
          {/* Icône */}
          <div className="w-[61px] h-[61px] bg-white rounded-[20px] shadow-[0px_0px_6px_0px_rgba(90,164,255,0.10)] inline-flex justify-center items-center gap-2.5">
            <div className="w-8 h-8 relative">
              <Image
                src="/images/home/SVG.svg"
                alt="Icône garantie"
                width={32}
                height={32}
                className=""
              />
            </div>
          </div>

          {/* Label */}
          <div className="self-stretch justify-center text-gray-700 text-base font-normal font-['Satoshi'] leading-5">
            {guarantee.label}
          </div>
        </div>
      ))}
    </div>
  );
}
