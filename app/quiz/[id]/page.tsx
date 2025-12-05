'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import QuizHeader from '@/components/quiz/QuizHeader';
import QuestionBubble from '@/components/quiz/QuestionBubble';
import TextInput from '@/components/quiz/TextInput';
import SelectInput from '@/components/quiz/SelectInput';
import ChoiceCard from '@/components/quiz/ChoiceCard';
import ImageChoice from '@/components/quiz/ImageChoice';
import ContinueButton from '@/components/quiz/ContinueButton';
import { questions, TOTAL_QUESTIONS } from '@/lib/questions';
import { storage } from '@/lib/storage';
import { pageVariants } from '@/lib/animations';

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
    if (questionId === 3) {
      // Après la question 3, aller à l'écran "loyer perdu"
      router.push('/loyer-perdu');
    } else if (questionId === 4) {
      // Après la question 4, aller à l'écran "apport"
      router.push('/apport');
    } else if (questionId === 5) {
      // Après la question 5, aller à l'écran "emma"
      router.push('/emma');
    } else if (questionId === 6) {
      // Après la question 6, aller à l'écran de calcul
      router.push('/calculation');
    } else if (questionId === 7) {
      // Après la question 7, aller à l'écran d'inflation
      router.push('/inflation');
    } else if (questionId === 10) {
      // Après la question 10, aller à l'écran de pause vidéo
      router.push('/video-pause');
    } else if (questionId === 11) {
      // Après la question 11, navigation conditionnelle selon la réponse
      if (answer === 'oui') {
        router.push('/quiz/12');
      } else {
        router.push('/quiz/13');
      }
    } else if (questionId === 12) {
      // Après la question 12, aller à la question 13
      router.push('/quiz/13');
    } else if (questionId < TOTAL_QUESTIONS) {
      router.push(`/quiz/${questionId + 1}`);
    } else {
      router.push('/searching');
    }
  };

  const renderInput = () => {
    switch (question.type) {
      case 'text':
        // Si la question a plusieurs inputs (multi-inputs)
        if (question.inputs && question.inputs.length > 0) {
          let answerObj: Record<string, string> = {};
          try {
            answerObj = answer ? JSON.parse(answer) : {};
          } catch {
            answerObj = {};
          }

          return (
            <div className="flex flex-col gap-4">
              {question.inputs.map((input) => (
                <TextInput
                  key={input.key}
                  value={answerObj[input.key] || ''}
                  onChange={(val) => {
                    const newAnswer = { ...answerObj, [input.key]: val };
                    setAnswer(JSON.stringify(newAnswer));
                  }}
                  placeholder={input.placeholder}
                  type={input.type || 'text'}
                />
              ))}
            </div>
          );
        }

        // Si la question a des sous-questions (subQuestions)
        if (question.subQuestions && question.subQuestions.length > 0) {
          let answerObj: Record<string, string> = {};
          try {
            answerObj = answer ? JSON.parse(answer) : {};
          } catch {
            answerObj = {};
          }

          return (
            <div className="flex flex-col gap-8">
              {question.subQuestions.map((subQ, index) => (
                <motion.div
                  key={subQ.key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex flex-col gap-4"
                >
                  {/* Titre et texte de la sous-question */}
                  <div className="self-stretch" style={{ fontFamily: 'var(--font-inter-tight)' }}>
                    {subQ.titleText && (
                      <span
                        className="block whitespace-pre-line"
                        style={{
                          color: '#2D2A26',
                          fontSize: '28px',
                          fontWeight: 600,
                          lineHeight: '110%',
                          letterSpacing: '-0.84px',
                        }}
                      >
                        {subQ.titleText}
                      </span>
                    )}
                    <span
                      style={subQ.titleText ? {
                        color: '#4A4543',
                        fontSize: '24px',
                        fontWeight: 400,
                        lineHeight: '110%',
                        letterSpacing: '-0.72px',
                      } : {
                        color: '#2D2A26',
                        fontSize: '28px',
                        fontWeight: 600,
                        lineHeight: '110%',
                        letterSpacing: '-0.84px',
                      }}
                    >
                      {subQ.text}
                    </span>
                  </div>

                  {/* Input approprié selon le type */}
                  {subQ.inputType === 'text' && (
                    <TextInput
                      value={answerObj[subQ.key] || ''}
                      onChange={(val) => {
                        const newAnswer = { ...answerObj, [subQ.key]: val };
                        setAnswer(JSON.stringify(newAnswer));
                      }}
                      placeholder={subQ.placeholder}
                      type={subQ.textInputType || 'text'}
                    />
                  )}
                  {subQ.inputType === 'select' && subQ.choices && (
                    <SelectInput
                      value={answerObj[subQ.key] || ''}
                      onChange={(val) => {
                        const newAnswer = { ...answerObj, [subQ.key]: val };
                        setAnswer(JSON.stringify(newAnswer));
                      }}
                      placeholder={subQ.placeholder}
                      options={subQ.choices}
                    />
                  )}

                  {/* Badge info orange */}
                  {subQ.infoBadge && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                      className="inline-flex justify-center items-center self-start"
                      style={{
                        padding: '8px 16px',
                        borderRadius: '50px',
                        border: '1px solid #AC6F53',
                        background: 'linear-gradient(173deg, #F6B292 -0.82%, #D0805B 52.13%)',
                        transform: 'rotate(0.248deg)',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-inter-tight)',
                          color: '#FFE6DA',
                          fontSize: '12px',
                          fontWeight: 500,
                          lineHeight: '100%',
                          letterSpacing: '-0.24px',
                        }}
                      >
                        {subQ.infoBadge}
                      </span>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          );
        }

        // Déterminer le type d'input basé sur le placeholder ou l'id de la question
        const inputType = questionId === 2 || question.placeholder?.includes('email') || question.placeholder?.includes('@') ? 'text' : 'number';

        return (
          <div className={(questionId === 8 || questionId === 10) ? 'lg:flex lg:flex-col lg:gap-5' : ''}>
            {/* Input sur mobile uniquement pour questions 8 et 10 */}
            {(questionId === 8 || questionId === 10) && (
              <div className="lg:hidden">
                <TextInput
                  value={answer}
                  onChange={setAnswer}
                  placeholder={question.placeholder}
                  type={inputType}
                />
              </div>
            )}

            {/* Input pour questions 8 et 10 sur desktop */}
            {(questionId === 8 || questionId === 10) && (
              <div className="hidden lg:flex lg:justify-end">
                <TextInput
                  value={answer}
                  onChange={setAnswer}
                  placeholder={question.placeholder}
                  type={inputType}
                />
              </div>
            )}

            {/* Texte informatif pour la question 8 (desktop uniquement) - après l'input */}
            {questionId === 8 && (
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

            {/* Texte informatif pour la question 10 (desktop uniquement) - après l'input */}
            {questionId === 10 && (
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

            {/* Texte informatif pour la question 10 sur mobile */}
            {questionId === 10 && (
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
            {questionId !== 8 && questionId !== 10 && (
              <TextInput
                value={answer}
                onChange={setAnswer}
                placeholder={question.placeholder}
                type={inputType}
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

        // Pour la question 5, disposition 1x2 (2 cartes sans images sur une ligne)
        if (questionId === 5) {
          return (
            <div
              className="w-full grid grid-cols-2 gap-[8px]"
              style={{
                gridTemplateRows: '78px',
              }}
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
                  labelClassName={choice.labelClassName}
                  subtitleClassName={choice.subtitleClassName}
                  index={index}
                />
              ))}
            </div>
          );
        }

        // Pour les autres questions
        // Question 9 : 4 cartes sur une seule ligne en desktop
        if (questionId === 9) {
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

        // Question 11 : 2 cartes avec largeCompactImage
        if (questionId === 11) {
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

        // Question 12 : 4 cartes avec compactImage
        if (questionId === 12) {
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

        // Question 13 : 3 cartes avec compactImage
        if (questionId === 13) {
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
        className="min-h-screen relative overflow-hidden"
        style={{ backgroundColor: '#F5EBE1' }}
      >
        {/* Éléments décoratifs */}
        <div
          className="w-72 h-96 absolute left-[49px] top-[225px]"
        />
        <div className="w-96 h-80 absolute left-[-127px] top-[301px] bg-white/25 rounded-full blur-3xl" />

        {/* Logo en fond */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] pointer-events-none">
          <Image
            src="/images/new_logo.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        {/* Image de fond par-dessus le logo (si définie) */}
        {question.backgroundImage && questionId === 5 ? (
          /* Question 5 : rings.svg positionné en haut à droite, visible sous les cartes */
          <div
            className="absolute pointer-events-none z-10"
            style={{
              width: '168px',
              height: '145px',
              right: '20px',
              top: '225px',
            }}
          >
            <Image
              src={question.backgroundImage}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        ) : question.backgroundImage ? (
          /* Autres questions : image centrée pleine largeur */
          <div className="absolute left-1/2 top-[35%] -translate-x-1/2 w-screen h-[75%] pointer-events-none">
            <Image
              src={question.backgroundImage}
              alt=""
              fill
              className="object-contain object-top"
            />
          </div>
        ) : null}

        {/* Contenu principal */}
        <div className="relative px-4 py-10 min-h-screen flex flex-col gap-10">
          <QuizHeader currentQuestion={questionId} />

          {/* Contenu central - flex-1 pour prendre l'espace disponible */}
          <div className="flex-1 flex flex-col justify-start items-start gap-4">
            {/* Question bubble - masqué pour les questions avec subQuestions (chaque sous-question a son propre titre) */}
            {!(question.subQuestions && question.subQuestions.length > 0) && (
              <QuestionBubble
                questionNumber={questionId}
                text={question.text}
                titleText={question.titleText}
                infoText={question.inputs && question.inputs.length > 0 ? undefined : question.infoText}
              />
            )}

            {/* Input field */}
            <div className="w-full">{renderInput()}</div>

            {/* InfoText après les inputs pour les questions multi-inputs */}
            {question.inputs && question.inputs.length > 0 && question.infoText && (
              <div
                className="self-stretch text-neutral-500 text-sm font-normal leading-5 whitespace-pre-line"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                {question.infoText}
              </div>
            )}
          </div>

          {/* Continue button - caché pour les questions choice tant qu'aucune sélection */}
          {(question.type !== 'choice' || isValid) && (
            <ContinueButton onClick={handleContinue} disabled={!isValid} />
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
