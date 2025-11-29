'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import QuizHeader from '@/components/quiz/QuizHeader';
import QuestionBubble from '@/components/quiz/QuestionBubble';
import TextInput from '@/components/quiz/TextInput';
import SelectInput from '@/components/quiz/SelectInput';
import ChoiceCard from '@/components/quiz/ChoiceCard';
import ImageChoice from '@/components/quiz/ImageChoice';
import ContinueButton from '@/components/quiz/ContinueButton';
import QuizBackgroundShapes from '@/components/quiz/QuizBackgroundShapes';
import { questions, TOTAL_QUESTIONS } from '@/lib/questions';
import { storage } from '@/lib/storage';
import { pageVariants } from '@/lib/animations';

export default function QuizQuestionPage() {
  const router = useRouter();
  const params = useParams();
  const questionId = parseInt(params.id as string, 10);

  const [answer, setAnswer] = useState('');
  const [customCity, setCustomCity] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [cardWidth, setCardWidth] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const question = questions.find((q) => q.id === questionId);

  // Charger la réponse sauvegardée si elle existe
  useEffect(() => {
    const savedAnswer = storage.getAnswer(questionId);
    if (savedAnswer) {
      setAnswer(savedAnswer);
    }
    // Charger la ville personnalisée pour la question 4
    if (questionId === 4) {
      const savedCustomCity = storage.getAnswer('customCity');
      if (savedCustomCity) {
        setCustomCity(savedCustomCity);
      }
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
    } else if (questionId === 4 && answer === 'autre') {
      // Pour la question 4, si "autre" est sélectionné, vérifier que la ville est renseignée
      setIsValid(customCity.trim().length > 0);
    } else {
      setIsValid(answer.trim().length > 0);
    }
  }, [answer, customCity, question, questionId]);

  // Mesurer la largeur de la carte pour la question 8 (type logement)
  useEffect(() => {
    if (questionId === 8) {
      const updateCardWidth = () => {
        const screenWidth = window.innerWidth;
        const padding = 16 * 2; // mx-4 = 16px de chaque côté
        const gap = 8; // gap-2 = 8px entre les cartes
        const availableWidth = screenWidth - padding;
        const cardWidth = (availableWidth - gap) / 2;
        setCardWidth(cardWidth);
      };

      // Initial measurement
      const timer = setTimeout(updateCardWidth, 0);

      window.addEventListener('resize', updateCardWidth);
      return () => {
        clearTimeout(timer);
        window.removeEventListener('resize', updateCardWidth);
      };
    }
  }, [questionId]);

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

    // Sauvegarder la ville personnalisée si question 4 avec "autre"
    if (questionId === 4 && answer === 'autre') {
      storage.saveAnswer('customCity', customCity);
    }

    // Navigation
    if (questionId === 3) {
      // Après la question 3 (source), aller à l'écran apport
      router.push('/apport');
    } else if (questionId === 7) {
      // Après la question 7 (loyer), aller à l'écran de calcul
      router.push('/calculation');
    } else if (questionId === 8) {
      // Après la question 8 (type logement), aller à l'écran d'inflation
      router.push('/inflation');
    } else if (questionId === 11) {
      // Après la question 11 (email), aller à l'écran de pause vidéo
      router.push('/video-pause');
    } else if (questionId === 12) {
      // Après la question 12 (crédits), navigation conditionnelle selon la réponse
      if (answer === 'oui') {
        router.push('/quiz/13');
      } else {
        router.push('/quiz/14');
      }
    } else if (questionId === 13) {
      // Après la question 13 (type crédit), aller à la question 14
      router.push('/quiz/14');
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
        const inputType = questionId === 2 || question.placeholder?.includes('email') || question.placeholder?.includes('@') ? 'text' : 'number';

        return (
          <div className={(questionId === 9 || questionId === 11) ? 'lg:flex lg:flex-col lg:gap-5' : ''}>
            {/* Input sur mobile uniquement pour questions 9 (revenus) et 11 (email) */}
            {(questionId === 9 || questionId === 11) && (
              <div className="lg:hidden">
                <TextInput
                  value={answer}
                  onChange={setAnswer}
                  placeholder={question.placeholder}
                  type={inputType}
                />
              </div>
            )}

            {/* Input pour questions 9 et 11 sur desktop */}
            {(questionId === 9 || questionId === 11) && (
              <div className="hidden lg:flex lg:justify-end">
                <TextInput
                  value={answer}
                  onChange={setAnswer}
                  placeholder={question.placeholder}
                  type={inputType}
                />
              </div>
            )}

            {/* Texte informatif pour la question 9 (revenus, desktop uniquement) - après l'input */}
            {questionId === 9 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="hidden lg:flex lg:flex-col lg:gap-1 lg:items-end"
                style={{ fontFamily: 'var(--font-satoshi)' }}
              >
                <div className="text-gray-900/60 text-[18px] font-normal leading-[110%] tracking-[-0.18px] text-right">
                  Revenus nets mensuels en euros
                </div>
                <div className="text-gray-900/60 text-[18px] font-normal leading-[110%] tracking-[-0.18px] text-right">
                  Ces infos restent 100% confidentielles. Promis, on n&apos;est pas des boulets.
                </div>
              </motion.div>
            )}

            {/* Texte informatif pour la question 11 (email, desktop uniquement) - après l'input */}
            {questionId === 11 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="hidden lg:flex lg:flex-col lg:gap-1 lg:items-end"
                style={{ fontFamily: 'var(--font-satoshi)' }}
              >
                <div className="text-gray-900/60 text-[18px] font-normal leading-[110%] tracking-[-0.18px] text-right">
                  Aucun spam. Aucune pub.
                </div>
                <div className="text-gray-900/60 text-[18px] font-normal leading-[110%] tracking-[-0.18px] text-right">
                  On n&apos;est pas là pour te saouler, juste pour t&apos;aider.
                </div>
              </motion.div>
            )}

            {/* Texte informatif pour la question 11 (email) sur mobile */}
            {questionId === 11 && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="lg:hidden text-center text-[14px] font-normal leading-[110%] mt-4 text-[#111827]"
                style={{ fontFamily: 'var(--font-satoshi)' }}
              >
                Aucun spam. Aucune pub.<br />
                On n&apos;est pas là pour te saouler, juste pour t&apos;aider.
              </motion.p>
            )}

            {/* Input pour les autres questions */}
            {questionId !== 9 && questionId !== 11 && (
              <TextInput
                value={answer}
                onChange={setAnswer}
                placeholder={question.placeholder}
                type={inputType}
                hideArrows={questionId === 2}
              />
            )}
          </div>
        );

      case 'select':
        return (
          <SelectInput
            value={answer}
            onChange={setAnswer}
            placeholder={question.placeholder}
            options={question.choices?.map(choice => ({ id: choice.id, label: choice.label })) || []}
          />
        );

      case 'choice':
        // Choisir le composant selon le choiceStyle
        const ChoiceComponent = question.choiceStyle === 'image' ? ImageChoice : ChoiceCard;

        // Question 4 (localisation) : 3 cartes + champ texte si "autre"
        if (questionId === 4) {
          return (
            <div className="w-full lg:w-[750px] flex flex-col gap-4">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-[18px]">
                {question.choices?.map((choice, index) => (
                  <ChoiceComponent
                    key={choice.id}
                    id={choice.id}
                    label={choice.label}
                    subtitle={choice.subtitle}
                    image={choice.image}
                    desktopImage={choice.desktopImage}
                    selected={answer === choice.id}
                    onClick={() => {
                      setAnswer(choice.id);
                      if (choice.id !== 'autre') {
                        setCustomCity('');
                      }
                    }}
                    fillImage={true}
                    labelClassName={choice.labelClassName}
                    subtitleClassName={choice.subtitleClassName}
                    index={index}
                  />
                ))}
              </div>
              {/* Champ texte si "Autre ville" est sélectionné */}
              {answer === 'autre' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <TextInput
                    value={customCity}
                    onChange={setCustomCity}
                    placeholder="Quelle ville ?"
                    type="text"
                  />
                </motion.div>
              )}
            </div>
          );
        }

        // Pour la question 8 (type logement), disposition spéciale avec 5 cartes
        if (questionId === 8) {
          return (
            <div className="w-full lg:w-[750px] lg:mb-10">
              {/* Mobile: grid 2 colonnes, 5ème carte centrée sur 3ème ligne */}
              <div ref={gridRef} className="lg:hidden grid grid-cols-2 gap-2">
                {question.choices?.slice(0, 4).map((choice, index) => (
                  <ChoiceComponent
                    key={choice.id}
                    id={choice.id}
                    label={choice.label}
                    subtitle={choice.subtitle}
                    image={choice.image}
                    desktopImage={choice.desktopImage}
                    selected={answer === choice.id}
                    onClick={() => setAnswer(choice.id)}
                    labelClassName={choice.labelClassName}
                    subtitleClassName={choice.subtitleClassName}
                    index={index}
                  />
                ))}
                {/* 5ème carte centrée - utilise la largeur mesurée */}
                {question.choices && question.choices[4] && (
                  <div className="col-span-2 flex justify-center">
                    <div className="aspect-square" style={{ width: cardWidth ? `${cardWidth}px` : 'auto' }}>
                      <ChoiceComponent
                        key={question.choices[4].id}
                        id={question.choices[4].id}
                        label={question.choices[4].label}
                        subtitle={question.choices[4].subtitle}
                        image={question.choices[4].image}
                        desktopImage={question.choices[4].desktopImage}
                        selected={answer === question.choices[4].id}
                        onClick={() => setAnswer(question.choices?.[4]?.id || '')}
                        fullSize={true}
                        labelClassName={question.choices[4].labelClassName}
                        subtitleClassName={question.choices[4].subtitleClassName}
                        index={4}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Desktop: 3 cartes sur ligne 1, 2 cartes sur ligne 2 */}
              <div className="hidden lg:grid lg:grid-cols-6 lg:gap-[12px] lg:auto-rows-[269px]">
                {/* Ligne 1: 3 premières cartes - chacune occupe 2 colonnes */}
                {question.choices?.slice(0, 3).map((choice, index) => (
                  <div key={choice.id} className="col-span-2">
                    <ChoiceComponent
                      id={choice.id}
                      label={choice.label}
                      subtitle={choice.subtitle}
                      image={choice.image}
                      desktopImage={choice.desktopImage}
                      selected={answer === choice.id}
                      onClick={() => setAnswer(choice.id)}
                      fullSize={true}
                      labelClassName={choice.labelClassName}
                      subtitleClassName={choice.subtitleClassName}
                      index={index}
                    />
                  </div>
                ))}
                {/* Ligne 2: 2 dernières cartes - chacune occupe 3 colonnes */}
                {question.choices?.slice(3, 5).map((choice, index) => (
                  <div key={choice.id} className="col-span-3">
                    <ChoiceComponent
                      id={choice.id}
                      label={choice.label}
                      subtitle={choice.subtitle}
                      image={choice.image}
                      desktopImage={choice.desktopImage}
                      selected={answer === choice.id}
                      onClick={() => setAnswer(choice.id)}
                      fullSize={true}
                      labelClassName={choice.labelClassName}
                      subtitleClassName={choice.subtitleClassName}
                      index={index + 3}
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        }

        // Pour les autres questions
        // Question 10 (boulot) : 4 cartes sur une seule ligne en desktop
        if (questionId === 10) {
          return (
            <div className={`w-full lg:w-[750px] grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-[18px]`}>
              {question.choices?.map((choice, index) => (
                <ChoiceComponent
                  key={choice.id}
                  id={choice.id}
                  label={choice.label}
                  subtitle={choice.subtitle}
                  image={choice.image}
                  desktopImage={choice.desktopImage}
                  selected={answer === choice.id}
                  onClick={() => setAnswer(choice.id)}
                  compactImage={true}
                  labelClassName={choice.labelClassName}
                  subtitleClassName={choice.subtitleClassName}
                  index={index}
                />
              ))}
            </div>
          );
        }

        // Question 12 (crédits) : 2 cartes avec largeCompactImage
        if (questionId === 12) {
          return (
            <div className={`w-full lg:w-[750px] grid grid-cols-2 gap-2 lg:gap-[18px]`}>
              {question.choices?.map((choice, index) => (
                <ChoiceComponent
                  key={choice.id}
                  id={choice.id}
                  label={choice.label}
                  subtitle={choice.subtitle}
                  image={choice.image}
                  desktopImage={choice.desktopImage}
                  selected={answer === choice.id}
                  onClick={() => setAnswer(choice.id)}
                  largeCompactImage={true}
                  labelClassName={choice.labelClassName}
                  subtitleClassName={choice.subtitleClassName}
                  index={index}
                />
              ))}
            </div>
          );
        }

        // Question 13 (type crédit) : 4 cartes avec compactImage
        if (questionId === 13) {
          return (
            <div className={`w-full lg:w-[750px] grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-[18px]`}>
              {question.choices?.map((choice, index) => (
                <ChoiceComponent
                  key={choice.id}
                  id={choice.id}
                  label={choice.label}
                  subtitle={choice.subtitle}
                  image={choice.image}
                  desktopImage={choice.desktopImage}
                  selected={answer === choice.id}
                  onClick={() => setAnswer(choice.id)}
                  compactImage={true}
                  labelClassName={choice.labelClassName}
                  subtitleClassName={choice.subtitleClassName}
                  index={index}
                />
              ))}
            </div>
          );
        }

        // Question 14 (apport) : 3 cartes avec compactImage
        if (questionId === 14) {
          return (
            <div className={`w-full lg:w-[750px] grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-[18px]`}>
              {question.choices?.map((choice, index) => (
                <ChoiceComponent
                  key={choice.id}
                  id={choice.id}
                  label={choice.label}
                  subtitle={choice.subtitle}
                  image={choice.image}
                  desktopImage={choice.desktopImage}
                  selected={answer === choice.id}
                  onClick={() => setAnswer(choice.id)}
                  compactImage={true}
                  labelClassName={choice.labelClassName}
                  subtitleClassName={choice.subtitleClassName}
                  index={index}
                />
              ))}
            </div>
          );
        }

        return (
          <motion.div
            className="w-full lg:w-[750px] lg:h-[269px] grid grid-cols-2 gap-2 lg:gap-[18px]"
            initial="initial"
            animate="animate"
          >
            {question.choices?.map((choice, index) => (
              <ChoiceComponent
                key={choice.id}
                id={choice.id}
                label={choice.label}
                subtitle={choice.subtitle}
                image={choice.image}
                desktopImage={choice.desktopImage}
                selected={answer === choice.id}
                onClick={() => setAnswer(choice.id)}
                index={index}
              />
            ))}
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={questionId}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="min-h-screen flex flex-col relative overflow-hidden"
      >
        {/* Background shapes */}
        <QuizBackgroundShapes />

        <QuizHeader currentQuestion={questionId} />

        <main className="flex-1 flex flex-col mx-4 lg:mx-0 pt-5 lg:items-center lg:pt-[100px] min-h-0 relative z-10">
          {/* Conteneur question + input */}
          <div className="lg:w-[750px] lg:flex lg:flex-col lg:items-end lg:gap-[50px]">
            {/* Question bubble */}
            <div className="w-full mb-5 lg:mb-0">
              <QuestionBubble
                questionNumber={questionId}
                text={question.text}
                titleText={question.titleText}
                infoText={questionId === 5 ? "Ça change les calculs de capacité d'emprunt " : question.infoText}
              />
            </div>

            {/* Input field */}
            <div className="mb-8 lg:mb-0">{renderInput()}</div>
          </div>

          {/* Spacer pour pousser le bouton vers le bas */}
          <div className="flex-1"></div>

          {/* Spacer pour le bouton fixe mobile */}
          <div className="h-20 lg:hidden" />

          {/* Continue button */}
          <ContinueButton onClick={handleContinue} disabled={!isValid} />
        </main>
      </motion.div>
    </AnimatePresence>
  );
}
