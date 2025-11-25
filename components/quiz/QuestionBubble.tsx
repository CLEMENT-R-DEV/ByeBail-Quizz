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
          <div className="hidden flex flex-col justify-start items-center gap-1">
            <div className="text-center justify-center text-gray-900/60 text-sm font-medium font-['Satoshi'] leading-4">
              {questionNumber}/{TOTAL_QUESTIONS}
            </div>
          </div>

          {/* Avatar + Bulle */}
          <div className="self-stretch flex justify-start items-start gap-2">
            {/* Avatar */}
            <div className="w-[53px] h-[53px] lg:w-[80px] lg:h-[80px] bg-[#9B7BF8] rounded-[18px] flex justify-center items-center gap-2.5">
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
              {questionNumber === 11 ? (
                <>
                  {/* Question 11 : Mobile une ligne, Desktop deux lignes */}
                  <div className="lg:hidden self-stretch justify-center text-[#111827] text-[16px] font-normal font-['Satoshi_Variable'] leading-[120%] tracking-[-0.16px]">
                    {titleText} {text}
                  </div>
                  <div className="hidden lg:block self-stretch justify-center text-[#111827] text-[24px] font-bold font-['Satoshi_Variable'] leading-[110%] tracking-[-0.24px]">
                    {titleText}
                  </div>
                  <div className="hidden lg:block self-stretch justify-center text-[#111827] text-[24px] font-normal font-['Satoshi_Variable'] leading-[110%] tracking-[-0.24px]">
                    {text}
                  </div>
                </>
              ) : questionNumber === 12 ? (
                <>
                  {/* Question 12 : Mobile une ligne, Desktop deux lignes */}
                  <div className="lg:hidden self-stretch justify-center text-[#111827] text-[16px] font-normal font-['Satoshi_Variable'] leading-[120%] tracking-[-0.16px]">
                    {titleText} {text}
                  </div>
                  <div className="hidden lg:block self-stretch justify-center text-[#111827] text-[24px] font-bold font-['Satoshi_Variable'] leading-[110%] tracking-[-0.24px]">
                    {titleText}
                  </div>
                  <div className="hidden lg:block self-stretch justify-center text-[#111827] text-[24px] font-normal font-['Satoshi_Variable'] leading-[110%] tracking-[-0.24px]">
                    {text}
                  </div>
                </>
              ) : questionNumber === 13 ? (
                <>
                  {/* Question 13 : Mobile une ligne, Desktop deux lignes */}
                  <div className="lg:hidden self-stretch justify-center text-[#111827] text-[16px] font-normal font-['Satoshi_Variable'] leading-[120%] tracking-[-0.16px]">
                    {titleText} {text}
                  </div>
                  <div className="hidden lg:block self-stretch justify-center text-[#111827] text-[24px] font-bold font-['Satoshi_Variable'] leading-[110%] tracking-[-0.24px]">
                    {titleText}
                  </div>
                  <div className="hidden lg:block self-stretch justify-center text-[#111827] text-[24px] font-normal font-['Satoshi_Variable'] leading-[110%] tracking-[-0.24px]">
                    {text}
                  </div>
                </>
              ) : (
                <>
                  {titleText && (
                    <div className="self-stretch justify-center text-gray-900 text-xl font-semibold font-['Bricolage_Grotesque'] leading-5">
                      {titleText}
                    </div>
                  )}
                  <div className={`self-stretch justify-center text-[#111827] text-base lg:text-2xl font-normal font-['Satoshi'] leading-5 lg:leading-[110%] lg:tracking-[-0.24px] ${questionNumber === 3 || questionNumber === 4 ? 'lg:font-medium' : ''}`}>
                    {text.includes('|') ? (
                      <>
                        <span className="lg:font-medium">{text.split('|')[0]}</span>
                        <br className="hidden lg:block" />
                        <span className="lg:font-normal">{text.split('|')[1]}</span>
                      </>
                    ) : (
                      text
                    )}
                  </div>
                </>
              )}
              {infoText && (
                <div className="self-stretch justify-center text-[#12C66F] text-sm lg:text-lg font-normal font-['Satoshi'] leading-[120%] tracking-[-0.14px] lg:tracking-[-0.18px]">
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
