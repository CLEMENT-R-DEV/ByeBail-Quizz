'use client';

import Image from 'next/image';
import { TOTAL_QUESTIONS } from '@/lib/questions';

interface QuestionBubbleProps {
  questionNumber: number;
  text: string;
  infoText?: string;
  titleText?: string;
}

export default function QuestionBubble({ questionNumber, text, infoText, titleText }: QuestionBubbleProps) {
  return (
    <div className="self-stretch p-2.5 bg-white rounded-2xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.04)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 flex flex-col justify-start items-start gap-2.5">
      <div className="self-stretch flex justify-end items-start gap-3">
        <div className="flex-1 rounded-2xl flex flex-col justify-start items-end gap-2">
          {/* Badge Question X/9 */}
          <div className="flex flex-col justify-start items-center gap-1">
            <div className="text-center justify-center text-gray-900/60 text-sm font-medium font-['Satoshi'] leading-4">
              {questionNumber}/{TOTAL_QUESTIONS}
            </div>
          </div>

          {/* Avatar + Bulle */}
          <div className="self-stretch flex justify-start items-start gap-2">
            {/* Avatar */}
            <div className="w-[53px] h-[53px] bg-[#9B7BF8] rounded-[18px] flex justify-center items-center gap-2.5">
              <div className="relative w-[29px] h-[34px]">
                <Image
                  src="/images/B.svg"
                  alt="ByeBail"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Bulle de conversation */}
            <div className="flex-1 p-3.5 bg-white rounded-lg shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.10)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 flex flex-col justify-center items-center gap-2.5">
              {titleText && (
                <div className="self-stretch justify-center text-gray-900 text-xl font-semibold font-['Bricolage_Grotesque'] leading-5">
                  {titleText}
                </div>
              )}
              <div className="self-stretch justify-center text-gray-900 text-base font-normal font-['Satoshi'] leading-5">
                {text}
              </div>
              {infoText && (
                <div className="self-stretch justify-center text-emerald-500 text-sm font-normal font-['Satoshi'] leading-4">
                  {infoText}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
