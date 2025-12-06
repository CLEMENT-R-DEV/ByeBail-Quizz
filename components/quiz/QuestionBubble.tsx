'use client';

import { motion } from 'framer-motion';
import { TYPOGRAPHY } from '@/lib/typography';

interface QuestionBubbleProps {
  questionNumber: number;
  text: string;
  infoText?: string;
  titleText?: string;
}

export default function QuestionBubble({ text, infoText, titleText }: QuestionBubbleProps) {
  // Parser le texte avec séparateur | pour la dernière partie en gras
  const textParts = text.split('|');

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="self-stretch flex flex-col justify-start items-start gap-2"
    >
      <div className="self-stretch flex flex-col gap-1" style={{ fontFamily: 'var(--font-inter-tight)' }}>
        {titleText && (
          <span
            className="whitespace-pre-line"
            style={TYPOGRAPHY.heading}
          >
            {titleText}
          </span>
        )}
        {textParts[0] && (
          <span style={TYPOGRAPHY.body}>
            {textParts[0]}
          </span>
        )}
        {textParts[1] && (
          <span style={TYPOGRAPHY.heading}>
            {textParts[1]}
          </span>
        )}
      </div>

      {infoText && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="self-stretch text-neutral-500 text-sm font-normal leading-5"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          {infoText}
        </motion.div>
      )}
    </motion.div>
  );
}
