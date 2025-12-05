'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { TOTAL_QUESTIONS } from '../lib/questions';
import { bubbleVariants, avatarVariants } from '../lib/animations';

interface QuestionBubbleProps {
  questionNumber: number;
  text: string;
  infoText?: string;
  titleText?: string;
}

export default function QuestionBubble({ questionNumber, text, infoText, titleText }: QuestionBubbleProps) {
  return (
    <motion.div variants={bubbleVariants} initial="initial" animate="animate" className="self-stretch p-2.5 bg-white rounded-2xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.04)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 flex flex-col justify-start items-start gap-2.5">
      <div className="self-stretch flex justify-end items-start gap-3">
        <div className="flex-1 rounded-2xl flex flex-col justify-start items-end gap-2">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="hidden flex flex-col justify-start items-center gap-1">
            <div className="text-center justify-center text-gray-900/60 text-sm font-medium leading-4" style={{ fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.03em' }}>{questionNumber}/{TOTAL_QUESTIONS}</div>
          </motion.div>
          <div className="self-stretch flex justify-start items-start gap-2">
            <motion.div variants={avatarVariants} initial="initial" animate="animate" className="w-[53px] h-[53px] lg:w-[80px] lg:h-[80px] bg-[#9B7BF8] rounded-[18px] flex justify-center items-center gap-2.5">
              <div className="relative w-[29px] h-[34px]">
                <Image src="/images/B.svg" alt="ByeBail" fill className="object-contain" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ type: 'spring', stiffness: 400, damping: 25, delay: 0.15 }} className="flex-1 p-3.5 bg-white rounded-lg shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.10)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 flex flex-col justify-center items-center gap-2.5">
              {titleText && (
                <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="self-stretch justify-center text-gray-900 text-xl font-semibold leading-5" style={{ fontFamily: 'var(--font-inter-display)', letterSpacing: '-0.06em' }}>{titleText}</motion.div>
              )}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="self-stretch justify-center text-[#111827] text-base lg:text-2xl font-normal leading-5 lg:leading-[110%]" style={{ fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.03em' }}>
                {text.includes('|') ? (
                  <>
                    <span className="lg:font-medium">{text.split('|')[0]}</span>
                    <br className="hidden lg:block" />
                    <span className="lg:font-normal">{text.split('|')[1]}</span>
                  </>
                ) : text}
              </motion.div>
              {infoText && (
                <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="self-stretch justify-center text-[#12C66F] text-sm lg:text-lg font-normal leading-[120%]" style={{ fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.03em' }}>{infoText}</motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
