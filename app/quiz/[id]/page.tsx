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

    if (question.type === 'composite') {
      // Question 9 : crédits en cours - validation spéciale
      if (questionId === 9) {
        try {
          const answerObj = answer ? JSON.parse(answer) : {};
          const selectedCredits = Array.isArray(answerObj.credit_type) ? answerObj.credit_type : [];

          // Si aucun crédit sélectionné, c'est valide (pas de crédit)
          if (selectedCredits.length === 0) {
            setIsValid(true);
          } else {
            // Si crédit sélectionné, le montant doit être renseigné
            const montant = answerObj.montant_credit || '';
            setIsValid(montant.trim().length > 0);
          }
        } catch {
          setIsValid(true); // Par défaut valide si pas de réponse (pas de crédit)
        }
      } else if (question.validation) {
        // Autres questions composites : valider via la fonction validation
        setIsValid(question.validation(answer));
      } else {
        setIsValid(false);
      }
    } else if (question.type === 'text') {
      // Si la question a des subQuestions, vérifier que toutes sont remplies
      if (question.subQuestions && question.subQuestions.length > 0) {
        try {
          const answerObj = answer ? JSON.parse(answer) : {};
          // Vérifier le champ principal (revenu)
          const mainValue = answerObj.main || '';
          const mainValid = question.validation ? question.validation(mainValue) : mainValue.trim().length > 0;

          // Vérifier toutes les subQuestions
          const subQuestionsValid = question.subQuestions.every(subQ => {
            const subValue = answerObj[subQ.key] || '';
            return subValue.trim().length > 0;
          });

          setIsValid(mainValid && subQuestionsValid);
        } catch {
          setIsValid(false);
        }
      } else if (question.validation) {
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
    if (questionId === 2) {
      // Après la question 2 (composite: âge + source), aller à la question 3 (ville + loyer)
      router.push('/quiz/3');
    } else if (questionId === 3) {
      // Après la question 3 (ville + loyer), aller à la page loyer-perdu
      router.push('/loyer-perdu');
    } else if (questionId === 4) {
      // Après la question 4, aller à l'écran "apport"
      router.push('/apport');
    } else if (questionId === 5) {
      // Après la question 5 (type de logement), aller à la question 6
      router.push('/quiz/6');
    } else if (questionId === 6) {
      // Après la question 6 (seul ou à deux), aller à l'écran "emma"
      router.push('/emma');
    } else if (questionId === 7) {
      // Après la question 7 (revenu + statut), aller à l'écran inflation
      router.push('/inflation');
    } else if (questionId === 8) {
      // Après la question 8 (fin du mois), aller à la question 9
      router.push('/quiz/9');
    } else if (questionId === 9) {
      // Après la question 9 (crédits), aller à l'écran magic-moment
      router.push('/magic-moment');
    } else if (questionId < TOTAL_QUESTIONS) {
      router.push(`/quiz/${questionId + 1}`);
    } else {
      router.push('/searching');
    }
  };

  const renderInput = () => {
    switch (question.type) {
      case 'composite':
        // Questions composites (plusieurs questions sur même écran)
        if (question.compositeQuestions && question.compositeQuestions.length > 0) {
          let answerObj: Record<string, string> = {};
          try {
            answerObj = answer ? JSON.parse(answer) : {};
          } catch {
            answerObj = {};
          }

          return (
            <div className="flex flex-col gap-6">
              {question.compositeQuestions.map((subQ, index) => {
                // Parser le texte avec séparateur | pour la dernière partie en gras
                const textParts = subQ.text.split('|');

                return (
                  <div key={subQ.key} className="flex flex-col gap-4">
                    {/* Titre de la sous-question */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex flex-col gap-1"
                      style={{ fontFamily: 'var(--font-inter-tight)' }}
                    >
                      {subQ.titleText && (
                        <span
                          style={{
                            color: '#4A4543',
                            fontSize: '22px',
                            fontWeight: 400,
                            lineHeight: '110%',
                            letterSpacing: '-0.66px',
                          }}
                        >
                          {subQ.titleText}
                        </span>
                      )}
                      {textParts[1] && (
                        <span
                          style={{
                            color: '#2D2A26',
                            fontSize: '28px',
                            fontWeight: 600,
                            lineHeight: '110%',
                            letterSpacing: '-0.84px',
                          }}
                        >
                          {textParts[1]}
                        </span>
                      )}
                      {textParts[0] && (
                        <span
                          className="whitespace-pre-line"
                          style={{
                            color: '#4A4543',
                            fontSize: '22px',
                            fontWeight: 400,
                            lineHeight: '110%',
                            letterSpacing: '-0.66px',
                          }}
                        >
                          {textParts[0]}
                        </span>
                      )}
                    </motion.div>

                    {/* Input selon le type */}
                    {subQ.inputType === 'text' && (
                      <TextInput
                        value={answerObj[subQ.key] || ''}
                        onChange={(val) => {
                          const newAnswer = { ...answerObj, [subQ.key]: val };
                          setAnswer(JSON.stringify(newAnswer));
                        }}
                        placeholder={subQ.placeholder || ''}
                        type="text"
                      />
                    )}
                    {subQ.inputType === 'select' && subQ.choices && (
                      <SelectInput
                        value={answerObj[subQ.key] || ''}
                        onChange={(val) => {
                          const newAnswer = { ...answerObj, [subQ.key]: val };
                          setAnswer(JSON.stringify(newAnswer));
                        }}
                        placeholder={subQ.placeholder || 'Sélectionner'}
                        options={subQ.choices.map(c => ({ id: c.id, label: c.label }))}
                      />
                    )}

                    {/* Badge orange */}
                    {subQ.infoBadge && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="inline-flex justify-center items-center self-center"
                        style={{
                          padding: '8px 16px',
                          borderRadius: '50px',
                          border: '1px solid #AC6F53',
                          background: 'linear-gradient(173deg, #F6B292 -0.82%, #D0805B 52.13%)',
                        }}
                      >
                        <span style={{
                          color: '#FFE6DA',
                          fontFamily: 'var(--font-inter-tight)',
                          fontSize: '14px',
                          fontWeight: 500,
                          lineHeight: '100%',
                          letterSpacing: '-0.28px',
                        }}>
                          {subQ.infoBadge}
                        </span>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        }

        // Question 9 : crédits en cours (pills 2x2 + input montant)
        if (questionId === 9 && question.subQuestions && question.subQuestions.length > 0) {
          let answerObj: Record<string, string | string[]> = {};
          try {
            answerObj = answer ? JSON.parse(answer) : {};
          } catch {
            answerObj = {};
          }

          // Convertir le credit_type en array si c'est une string
          const selectedCredits: string[] = Array.isArray(answerObj.credit_type)
            ? answerObj.credit_type
            : (answerObj.credit_type ? [answerObj.credit_type as string] : []);

          return (
            <div className="flex flex-col gap-6">
              {/* Titre principal */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                style={{ fontFamily: 'var(--font-inter-tight)' }}
              >
                <span
                  style={{
                    color: '#2D2A26',
                    fontSize: '28px',
                    fontWeight: 600,
                    lineHeight: '110%',
                    letterSpacing: '-0.84px',
                  }}
                >
                  {question.titleText}
                </span>
              </motion.div>

              {/* Pills en grille 2x2 */}
              <div className="grid grid-cols-2 gap-2">
                {question.subQuestions[0]?.choices?.map((choice, choiceIndex) => {
                  const isSelected = selectedCredits.includes(choice.id);
                  return (
                    <motion.div
                      key={choice.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: choiceIndex * 0.05 }}
                      onClick={() => {
                        let newSelected: string[];
                        if (isSelected) {
                          newSelected = selectedCredits.filter(id => id !== choice.id);
                        } else {
                          newSelected = [...selectedCredits, choice.id];
                        }
                        const newAnswer = { ...answerObj, credit_type: newSelected };
                        setAnswer(JSON.stringify(newAnswer));
                      }}
                      className="cursor-pointer flex items-center justify-center"
                      style={{
                        height: '72px',
                        borderRadius: '16px',
                        background: isSelected ? '#C9B89D' : 'rgba(254, 242, 242, 0.5)',
                        outline: isSelected ? 'none' : '1px solid rgba(255, 255, 255, 0.10)',
                        outlineOffset: '-1px',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-inter-tight)',
                          fontSize: '18px',
                          fontWeight: 500,
                          lineHeight: '20px',
                          color: isSelected ? '#FFFFFF' : '#737373',
                        }}
                      >
                        {choice.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Titre "Combien par mois ?" */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                style={{ fontFamily: 'var(--font-inter-tight)' }}
              >
                <span
                  style={{
                    color: '#2D2A26',
                    fontSize: '28px',
                    fontWeight: 600,
                    lineHeight: '110%',
                    letterSpacing: '-0.84px',
                  }}
                >
                  {question.subQuestions[1]?.titleText}
                </span>
              </motion.div>

              {/* Input montant */}
              <TextInput
                value={(answerObj.montant_credit as string) || ''}
                onChange={(val) => {
                  const newAnswer = { ...answerObj, montant_credit: val };
                  setAnswer(JSON.stringify(newAnswer));
                }}
                placeholder={question.subQuestions[1]?.placeholder}
                type="number"
              />
            </div>
          );
        }

        return null;

      case 'text':
        // Si la question a plusieurs inputs (multi-inputs)
        if (question.inputs && question.inputs.length > 0) {
          let answerObj: Record<string, string> = {};
          try {
            answerObj = answer ? JSON.parse(answer) : {};
          } catch {
            answerObj = {};
          }

          // Parser le texte avec séparateur | pour la dernière partie en gras
          const textParts = question.text.split('|');

          return (
            <div className="flex flex-col gap-6">
              {/* Titre stylisé pour question 1 */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-1"
                style={{ fontFamily: 'var(--font-inter-tight)' }}
              >
                {question.titleText && (
                  <span
                    style={{
                      color: '#4A4543',
                      fontSize: '22px',
                      fontWeight: 400,
                      lineHeight: '110%',
                      letterSpacing: '-0.66px',
                    }}
                  >
                    {question.titleText}
                  </span>
                )}
                {textParts[0] && (
                  <span
                    style={{
                      color: '#4A4543',
                      fontSize: '22px',
                      fontWeight: 400,
                      lineHeight: '110%',
                      letterSpacing: '-0.66px',
                    }}
                  >
                    {textParts[0]}
                  </span>
                )}
                {textParts[1] && (
                  <span
                    style={{
                      color: '#2D2A26',
                      fontSize: '28px',
                      fontWeight: 600,
                      lineHeight: '110%',
                      letterSpacing: '-0.84px',
                    }}
                  >
                    {textParts[1]}
                  </span>
                )}
              </motion.div>

              {/* Inputs */}
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

              {/* Info text */}
              {question.infoText && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  style={{
                    fontFamily: 'var(--font-inter-tight)',
                    color: '#7A7572',
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '140%',
                    letterSpacing: '-0.42px',
                  }}
                >
                  {question.infoText.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < question.infoText!.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </motion.div>
              )}
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
            <div className="flex flex-col gap-6">
              {/* Titre de la question principale */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-1"
                style={{ fontFamily: 'var(--font-inter-tight)' }}
              >
                <span
                  style={{
                    color: '#2D2A26',
                    fontSize: '28px',
                    fontWeight: 600,
                    lineHeight: '110%',
                    letterSpacing: '-0.84px',
                  }}
                >
                  {question.text}
                </span>
              </motion.div>

              {/* Input principal (revenu) */}
              <TextInput
                value={answerObj.main || ''}
                onChange={(val) => {
                  const newAnswer = { ...answerObj, main: val };
                  setAnswer(JSON.stringify(newAnswer));
                }}
                placeholder={question.placeholder}
                type="number"
              />

              {/* Sous-questions */}
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
                  {subQ.inputType === 'pills' && subQ.choices && (
                    <div className="grid grid-cols-3 gap-2">
                      {subQ.choices.map((choice, choiceIndex) => (
                        <ChoiceCard
                          key={choice.id}
                          id={choice.id}
                          label={choice.label}
                          selected={answerObj[subQ.key] === choice.id}
                          onClick={() => {
                            const newAnswer = { ...answerObj, [subQ.key]: choice.id };
                            setAnswer(JSON.stringify(newAnswer));
                          }}
                          index={choiceIndex}
                          verticalPadding={29}
                          hideCheckmark
                        />
                      ))}
                    </div>
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

              {/* Info text en bas */}
              {question.infoText && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-neutral-500 text-sm font-normal leading-5"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {question.infoText}
                </motion.div>
              )}
            </div>
          );
        }

        // Déterminer le type d'input basé sur le placeholder ou l'id de la question
        const inputType = questionId === 2 || question.placeholder?.includes('email') || question.placeholder?.includes('@') ? 'text' : 'number';

        return (
          <div className={questionId === 8 ? 'lg:flex lg:flex-col lg:gap-5' : ''}>
            {/* Input sur mobile uniquement pour question 8 (email) */}
            {questionId === 8 && (
              <div className="lg:hidden">
                <TextInput
                  value={answer}
                  onChange={setAnswer}
                  placeholder={question.placeholder}
                  type={inputType}
                />
              </div>
            )}

            {/* Input pour question 8 sur desktop */}
            {questionId === 8 && (
              <div className="hidden lg:flex lg:justify-end">
                <TextInput
                  value={answer}
                  onChange={setAnswer}
                  placeholder={question.placeholder}
                  type={inputType}
                />
              </div>
            )}

            {/* Texte informatif pour la question 8 (email) (desktop uniquement) - après l'input */}
            {questionId === 8 && (
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

            {/* Texte informatif pour la question 8 sur mobile */}
            {questionId === 8 && (
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
            {questionId !== 8 && (
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

        // Pour la question 5 (type de logement), disposition 2x2 avec image de fond
        if (questionId === 5) {
          return (
            <div className="w-full grid grid-cols-2 gap-2">
              {question.choices?.map((choice, index) => {
                const isSelected = answer === choice.id;
                return (
                  <motion.div
                    key={choice.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => setAnswer(choice.id)}
                    className="cursor-pointer flex items-center justify-center"
                    style={{
                      height: '78px',
                      borderRadius: '16px',
                      background: isSelected ? '#C9B89D' : 'rgba(254, 242, 242, 0.5)',
                      boxShadow: '0px 0px 17.1px 0px rgba(210, 182, 143, 0.24)',
                      outline: isSelected ? 'none' : '1px solid rgba(255, 255, 255, 0.25)',
                      outlineOffset: '-1px',
                    }}
                  >
                    <motion.div
                      className="flex items-center justify-center"
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                    >
                      <motion.span
                        style={{
                          fontFamily: 'var(--font-inter-tight)',
                          fontSize: '18px',
                          fontWeight: 500,
                          lineHeight: '20px',
                          color: isSelected ? '#FFFFFF' : '#737373',
                        }}
                      >
                        {choice.label}
                      </motion.span>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5, width: 0, marginLeft: 0 }}
                        animate={{
                          opacity: isSelected ? 1 : 0,
                          scale: isSelected ? 1 : 0.5,
                          width: isSelected ? 24 : 0,
                          marginLeft: isSelected ? 10 : 0,
                        }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                      >
                        <Image
                          src="/images/SVG_valide.svg"
                          alt=""
                          width={24}
                          height={24}
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          );
        }

        // Pour la question 8 (fin du mois), cartes pleine largeur avec 16px d'écart
        if (questionId === 8) {
          return (
            <div className="w-full flex flex-col gap-4">
              {question.choices?.map((choice, index) => {
                const isSelected = answer === choice.id;
                return (
                  <motion.div
                    key={choice.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => setAnswer(choice.id)}
                    className="cursor-pointer p-4 flex items-center justify-between"
                    style={{
                      height: '72px',
                      borderRadius: '16px',
                      background: isSelected ? '#C9B89D' : 'rgba(254, 242, 242, 0.5)',
                      outline: isSelected ? 'none' : '1px solid rgba(255, 255, 255, 0.10)',
                      outlineOffset: '-1px',
                    }}
                  >
                    <motion.div
                      className="flex items-center"
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                    >
                      <motion.span
                        style={{
                          fontFamily: 'var(--font-inter-tight)',
                          fontSize: '18px',
                          fontWeight: 500,
                          lineHeight: '20px',
                          color: isSelected ? '#FFFFFF' : '#737373',
                        }}
                      >
                        {choice.label}
                      </motion.span>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5, width: 0, marginLeft: 0 }}
                        animate={{
                          opacity: isSelected ? 1 : 0,
                          scale: isSelected ? 1 : 0.5,
                          width: isSelected ? 24 : 0,
                          marginLeft: isSelected ? 10 : 0,
                        }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                      >
                        <Image
                          src="/images/SVG_valide.svg"
                          alt=""
                          width={24}
                          height={24}
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          );
        }

        // Pour la question 6 (seul ou à deux), disposition 1x2 (2 cartes sur une ligne)
        if (questionId === 6) {
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
          /* Question 5 (type logement) : appart.svg positionné en bas, pleine largeur */
          <div
            className="absolute pointer-events-none z-0 w-full overflow-hidden"
            style={{
              height: '431px',
              left: '0',
              top: '225px',
              background: 'transparent',
            }}
          >
            <Image
              src={question.backgroundImage}
              alt=""
              fill
              className="object-cover object-top"
              style={{ background: 'transparent' }}
            />
          </div>
        ) : question.backgroundImage && questionId === 6 ? (
          /* Question 6 (seul/à deux) : rings.svg positionné en haut à droite */
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
            {/* Question bubble - masqué pour les questions avec subQuestions, inputs ou compositeQuestions (elles ont leur propre titre) */}
            {!(question.subQuestions && question.subQuestions.length > 0) &&
             !(question.inputs && question.inputs.length > 0) &&
             !(question.compositeQuestions && question.compositeQuestions.length > 0) && (
              <QuestionBubble
                questionNumber={questionId}
                text={question.text}
                titleText={question.titleText}
                infoText={question.infoText}
              />
            )}

            {/* Input field */}
            <div className="w-full">{renderInput()}</div>

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
