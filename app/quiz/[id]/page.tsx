'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import QuizHeader from '@/components/quiz/QuizHeader';
import QuestionBubble from '@/components/quiz/QuestionBubble';
import TextInput from '@/components/quiz/TextInput';
import ChoiceCard from '@/components/quiz/ChoiceCard';
import ImageChoice from '@/components/quiz/ImageChoice';
import ContinueButton from '@/components/quiz/ContinueButton';
import { questions, TOTAL_QUESTIONS } from '@/lib/questions';
import { storage } from '@/lib/storage';

export default function QuizQuestionPage() {
  const router = useRouter();
  const params = useParams();
  const questionId = parseInt(params.id as string, 10);

  const [answer, setAnswer] = useState('');
  const [isValid, setIsValid] = useState(false);

  const question = questions.find((q) => q.id === questionId);

  // Charger la réponse sauvegardée si elle existe
  useEffect(() => {
    const savedAnswer = storage.getAnswer(questionId);
    if (savedAnswer) {
      setAnswer(savedAnswer);
    }
  }, [questionId]);

  // Vérifier la validité de la réponse
  useEffect(() => {
    if (!question) {
      setIsValid(false);
      return;
    }

    if (question.type === 'text') {
      if (question.validation) {
        setIsValid(question.validation(answer));
      } else {
        setIsValid(answer.trim().length > 0);
      }
    } else {
      setIsValid(answer.trim().length > 0);
    }
  }, [answer, question]);

  if (!question) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Question non trouvée</p>
      </div>
    );
  }

  const handleContinue = () => {
    if (!isValid) return;

    // Sauvegarder la réponse
    storage.saveAnswer(questionId, answer);

    // Navigation
    if (questionId === 4) {
      // Après la question 4, aller à l'écran de calcul
      router.push('/calculation');
    } else if (questionId === 5) {
      // Après la question 5, aller à l'écran d'inflation
      router.push('/inflation');
    } else if (questionId === 8) {
      // Après la question 8, aller à l'écran de pause vidéo
      router.push('/video-pause');
    } else if (questionId < TOTAL_QUESTIONS) {
      router.push(`/quiz/${questionId + 1}`);
    } else {
      router.push('/searching');
    }
  };

  const renderInput = () => {
    switch (question.type) {
      case 'text':
        // Déterminer le type d'input basé sur le placeholder ou l'id de la question
        const inputType = question.placeholder?.includes('email') || question.placeholder?.includes('@') ? 'text' : 'number';

        return (
          <div className={questionId === 6 ? 'hidden lg:flex lg:flex-col lg:gap-5' : ''}>
            {/* Input sur mobile uniquement pour question 6 */}
            {questionId === 6 && (
              <div className="lg:hidden">
                <TextInput
                  value={answer}
                  onChange={setAnswer}
                  placeholder={question.placeholder}
                  type={inputType}
                />
              </div>
            )}

            {/* Input pour question 6 sur desktop */}
            {questionId === 6 && (
              <div className="hidden lg:flex lg:justify-end">
                <TextInput
                  value={answer}
                  onChange={setAnswer}
                  placeholder={question.placeholder}
                  type={inputType}
                />
              </div>
            )}

            {/* Texte informatif pour la question 6 (desktop uniquement) - après l'input */}
            {questionId === 6 && (
              <div className="hidden lg:flex lg:flex-col lg:gap-1 lg:items-end" style={{ fontFamily: 'var(--font-satoshi)' }}>
                <div className="text-gray-900/60 text-[18px] font-normal leading-[110%] tracking-[-0.18px] text-right">
                  Revenus nets mensuels en euros
                </div>
                <div className="text-gray-900/60 text-[18px] font-normal leading-[110%] tracking-[-0.18px] text-right">
                  Ces infos restent 100% confidentielles. Promis, on n&apos;est pas des boulets.
                </div>
              </div>
            )}

            {/* Input pour les autres questions */}
            {questionId !== 6 && (
              <TextInput
                value={answer}
                onChange={setAnswer}
                placeholder={question.placeholder}
                type={inputType}
              />
            )}

            {/* Texte informatif pour la question 8 (email) */}
            {questionId === 8 && (
              <p className="text-center text-sm font-normal leading-[110%] mt-4 text-gray-600">
                Aucun spam. Aucune pub.<br />
                On n&apos;est pas là pour te saouler, juste pour t&apos;aider.
              </p>
            )}
          </div>
        );

      case 'choice':
        // Choisir le composant selon le choiceStyle
        const ChoiceComponent = question.choiceStyle === 'image' ? ImageChoice : ChoiceCard;

        return (
          <div className={`w-full lg:w-[750px] ${questionId === 5 ? 'lg:h-[366px]' : 'lg:h-[269px]'} grid grid-cols-2 gap-2 ${questionId === 5 ? 'lg:gap-[12px]' : 'lg:gap-[18px]'}`}>
            {question.choices?.map((choice) => (
              <ChoiceComponent
                key={choice.id}
                id={choice.id}
                label={choice.label}
                subtitle={choice.subtitle}
                image={choice.image}
                desktopImage={choice.desktopImage}
                selected={answer === choice.id}
                onClick={() => setAnswer(choice.id)}
              />
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <QuizHeader currentQuestion={questionId} />

      <main className="flex-1 flex flex-col mx-4 lg:mx-0 pt-5 lg:items-center lg:pt-[100px]">
        {/* Conteneur question + input */}
        <div className="lg:w-[750px] lg:flex lg:flex-col lg:items-end lg:gap-[50px]">
          {/* Question bubble */}
          <div className="w-full mb-5 lg:mb-0">
            <QuestionBubble
              questionNumber={questionId}
              text={question.text}
              titleText={question.titleText}
              infoText={questionId === 3 ? "Ça change les calculs de capacité d'emprunt " : undefined}
            />
          </div>

          {/* Input field */}
          <div className="mb-8 lg:mb-0">{renderInput()}</div>
        </div>

        {/* Spacer pour pousser le bouton vers le bas */}
        <div className="flex-1"></div>

        {/* Continue button */}
        <ContinueButton onClick={handleContinue} disabled={!isValid} />
      </main>
    </div>
  );
}
