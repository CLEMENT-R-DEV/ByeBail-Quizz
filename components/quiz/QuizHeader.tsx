'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { TOTAL_QUESTIONS } from '@/lib/questions';

interface QuizHeaderProps {
  currentQuestion: number;
}

export default function QuizHeader({ currentQuestion }: QuizHeaderProps) {
  const router = useRouter();

  const handleBack = () => {
    if (currentQuestion > 1) {
      router.push(`/quiz/${currentQuestion - 1}`);
    } else {
      router.push('/');
    }
  };

  const progressPercentage = (currentQuestion / TOTAL_QUESTIONS) * 100;

  return (
    <header className="w-full max-w-md lg:max-w-none mx-auto px-4 pt-10 pb-3 lg:w-full lg:px-[140px] lg:pt-[40px] lg:pb-[12px] bg-white rounded-2xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.04)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 flex flex-col justify-start items-start gap-5">
      <div className="w-full flex flex-col justify-start items-start gap-5">
        {/* Top section avec chevron, question count et titre */}
        <div className="self-stretch h-8 relative inline-flex justify-between lg:justify-center items-center">
          {/* Bouton retour */}
          <button
            onClick={handleBack}
            className="w-6 h-6 relative overflow-hidden lg:absolute lg:left-0"
            aria-label="Retour"
          >
            <Image
              src="/images/CaretLeft.svg"
              alt="Retour"
              width={24}
              height={24}
              className="absolute left-[6.37px] top-[3.37px]"
            />
          </button>

          {/* Section centrale avec Question count et titre */}
          <div className="left-[133px] top-0 absolute lg:static lg:mx-auto inline-flex flex-col justify-start items-center gap-1">
            <div className="inline-flex justify-start items-center gap-1">
              <div className="text-center justify-center text-gray-900/60 lg:text-[rgba(17,24,39,0.60)] text-xs lg:text-base font-medium lg:font-medium font-['Satoshi'] leading-4 lg:leading-[120%] lg:tracking-[-0.16px]">
                Question{' '}
              </div>
              <div className="text-center justify-center text-gray-900/60 lg:text-[rgba(17,24,39,0.60)] text-xs lg:text-base font-medium lg:font-medium font-['Satoshi'] leading-4 lg:leading-[120%] lg:tracking-[-0.16px]">
                {currentQuestion}/{TOTAL_QUESTIONS}
              </div>
            </div>
            <div className="text-center justify-center text-[#111827] text-base lg:text-[28px] font-bold lg:font-[700] leading-4 lg:leading-[100%]" style={{ fontFamily: 'var(--font-bricolage-grotesque)' }}>
              Quiz ByeBail
            </div>
          </div>
        </div>

        {/* Barre de progression */}
        <div className="self-stretch p-0.5 bg-zinc-100 rounded-[43px] flex flex-col justify-start items-start gap-2.5">
          <div
            className="h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-[226px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.10)] shadow-[inset_0px_-1px_4px_0px_rgba(4,120,87,0.50)] transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>
    </header>
  );
}
