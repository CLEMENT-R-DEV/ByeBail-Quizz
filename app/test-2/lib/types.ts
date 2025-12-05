export type QuestionType = 'text' | 'choice' | 'select';

export interface Choice {
  id: string;
  label: string;
  subtitle?: string;
  image: string;
  desktopImage?: string;
  labelClassName?: string;
  subtitleClassName?: string;
}

export interface Question {
  id: number;
  type: QuestionType;
  text: string;
  titleText?: string;
  infoText?: string;
  placeholder?: string;
  choices?: Choice[];
  choiceStyle?: 'card' | 'image';
  validation?: (value: string) => boolean;
}

export interface QuizAnswer {
  questionId: number;
  answer: string;
}

export interface QuizState {
  currentQuestion: number;
  answers: Record<number | string, string>;
}
