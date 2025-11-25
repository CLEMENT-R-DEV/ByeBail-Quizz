'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function SimpleHeader() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <header className="w-full lg:max-w-none mx-auto px-4 pt-10 pb-3 lg:w-full lg:px-[140px] lg:pt-[40px] lg:pb-[12px] bg-white rounded-2xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.04)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 flex flex-col justify-start items-start gap-5">
      <div className="w-full flex flex-col justify-start items-start gap-5">
        <div className="self-stretch h-8 relative inline-flex justify-between items-center">
          <button
            onClick={handleBack}
            className="w-6 h-6 relative"
            aria-label="Retour"
          >
            <Image
              src="/images/CaretLeft.svg"
              alt="Retour"
              width={24}
              height={24}
            />
          </button>
          <div className="absolute left-1/2 -translate-x-1/2 inline-flex flex-col justify-start items-center gap-1">
            <div className="text-center justify-center text-[#111827] text-base lg:text-[28px] font-bold lg:font-[700] leading-4 lg:leading-[100%]" style={{ fontFamily: 'var(--font-bricolage-grotesque)' }}>
              Quiz ByeBail
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
