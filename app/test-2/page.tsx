'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Choice {
  id: string;
  label: string;
  sublabel?: string;
  icon: string;
}

interface Question {
  id: number;
  title: string;
  subtitle?: string;
  type: 'choice' | 'text';
  choices?: Choice[];
  placeholder?: string;
}

const questions: Question[] = [
  {
    id: 1,
    title: "Tu habites où actuellement ?",
    type: 'choice',
    choices: [
      { id: 'tours', label: 'Tours', icon: '🏙️' },
      { id: 'bourg', label: 'Bourg-en-Bresse', icon: '🏘️' },
      { id: 'autre', label: 'Autre ville', icon: '📍' },
    ]
  },
  {
    id: 2,
    title: "Tu paies combien de loyer par mois ?",
    type: 'text',
    placeholder: 'Ex: 650'
  },
  {
    id: 3,
    title: "Tu es en couple ou célibataire ?",
    subtitle: "Ça change les calculs de capacité d'emprunt",
    type: 'choice',
    choices: [
      { id: 'couple', label: 'En couple', icon: '💑' },
      { id: 'celibataire', label: 'Célibataire', icon: '🙋' },
    ]
  },
  {
    id: 4,
    title: "Quel est ton revenu net mensuel ?",
    subtitle: "Le total du foyer si tu es en couple",
    type: 'text',
    placeholder: 'Ex: 2500'
  },
  {
    id: 5,
    title: "Ton type de contrat de travail ?",
    type: 'choice',
    choices: [
      { id: 'cdi', label: 'CDI', sublabel: 'Contrat à durée indéterminée', icon: '✅' },
      { id: 'cdd', label: 'CDD', sublabel: 'Contrat à durée déterminée', icon: '📄' },
      { id: 'autre', label: 'Autre', sublabel: 'Freelance, intérim...', icon: '🔄' },
    ]
  },
];

function QuizContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const questionId = parseInt(searchParams.get('q') || '1', 10);

  const [answer, setAnswer] = useState('');
  const [textValue, setTextValue] = useState('');

  const question = questions.find(q => q.id === questionId);
  const totalQuestions = questions.length;

  if (!question) {
    return <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center">Question non trouvée</div>;
  }

  const handleChoiceSelect = (choiceId: string) => {
    setAnswer(choiceId);
  };

  const handleContinue = () => {
    if (questionId < totalQuestions) {
      router.push(`/test-2?q=${questionId + 1}`);
      setAnswer('');
      setTextValue('');
    } else {
      router.push('/test-3');
    }
  };

  const isValid = question.type === 'text' ? textValue.trim().length > 0 : answer.length > 0;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={questionId}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-[#F5F5F5] px-6 py-8 lg:py-16 flex flex-col"
      >
        <div className="max-w-[500px] mx-auto w-full flex-1 flex flex-col">
          {/* Progress */}
          <div className="flex items-center gap-2 mb-8">
            <button onClick={() => router.back()} className="p-1">
              <Image src="/images/CaretLeft.svg" alt="Retour" width={24} height={24} />
            </button>
            <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#1F2937] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(questionId / totalQuestions) * 100}%` }}
              />
            </div>
            <span className="text-sm text-gray-400" style={{ fontFamily: 'var(--font-inter-tight)' }}>
              {questionId}/{totalQuestions}
            </span>
          </div>

          {/* Question */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h1
              className="text-[28px] lg:text-[36px] font-semibold leading-[1.2] mb-2"
              style={{ fontFamily: 'var(--font-inter-display)', letterSpacing: '-0.06em', color: '#1F2937' }}
            >
              {question.title}
            </h1>
            {question.subtitle && (
              <p className="text-[#10B981] text-base mb-6" style={{ fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.03em' }}>
                {question.subtitle}
              </p>
            )}
          </motion.div>

          {/* Choices ou Input */}
          <div className="mt-6 flex-1">
            {question.type === 'choice' && question.choices && (
              <div className="flex flex-col gap-3">
                {question.choices.map((choice, index) => (
                  <motion.button
                    key={choice.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + index * 0.05 }}
                    onClick={() => handleChoiceSelect(choice.id)}
                    className={`w-full bg-white rounded-2xl p-5 flex items-center gap-4 text-left transition-all ${
                      answer === choice.id
                        ? 'ring-2 ring-[#1F2937] shadow-md'
                        : 'shadow-sm hover:shadow-md'
                    }`}
                  >
                    <div className="w-12 h-12 flex items-center justify-center text-2xl flex-shrink-0">
                      {choice.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-[17px] font-medium text-[#1F2937]" style={{ fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.03em' }}>
                        {choice.label}
                      </p>
                      {choice.sublabel && (
                        <p className="text-sm text-gray-500 mt-0.5" style={{ fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.03em' }}>
                          {choice.sublabel}
                        </p>
                      )}
                    </div>
                    {answer === choice.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-6 h-6 bg-[#1F2937] rounded-full flex items-center justify-center"
                      >
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
            )}

            {question.type === 'text' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <div className="bg-white rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <input
                      type="number"
                      value={textValue}
                      onChange={(e) => setTextValue(e.target.value)}
                      placeholder={question.placeholder}
                      className="flex-1 text-2xl font-semibold text-[#1F2937] bg-transparent outline-none placeholder:text-gray-300"
                      style={{ fontFamily: 'var(--font-inter-display)', letterSpacing: '-0.06em' }}
                    />
                    <span className="text-2xl text-gray-400" style={{ fontFamily: 'var(--font-inter-display)' }}>€</span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Bouton Continue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 pb-6"
          >
            <button
              onClick={handleContinue}
              disabled={!isValid}
              className={`w-full h-14 rounded-full text-white font-semibold text-lg flex items-center justify-center transition-all ${
                isValid ? 'opacity-100' : 'opacity-40'
              }`}
              style={{
                fontFamily: 'var(--font-inter-display)',
                letterSpacing: '-0.06em',
                background: 'linear-gradient(135deg, #1F2937 0%, #374151 100%)',
                boxShadow: isValid ? '0 4px 20px 0 rgba(0,0,0,0.15)' : 'none',
              }}
            >
              Continuer
            </button>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Test2QuizPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center"><p className="text-gray-400">Chargement...</p></div>}>
      <QuizContent />
    </Suspense>
  );
}
