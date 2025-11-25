export type QuestionType = 'text' | 'choice' | 'select';

export interface Choice {
  id: string;
  label: string;
  subtitle?: string; // sous-titre optionnel
  image: string; // path vers l'image
  desktopImage?: string; // path vers l'image desktop (optionnel)
}

export interface Question {
  id: number;
  type: QuestionType;
  text: string;
  titleText?: string; // titre optionnel pour la question (style différent)
  infoText?: string; // texte d'information en vert sous la question
  placeholder?: string; // pour input text
  choices?: Choice[]; // pour choix multiples
  choiceStyle?: 'card' | 'image'; // style des choix: card (avec bordure) ou image (seulement l'image)
  validation?: (value: string) => boolean;
}

export interface QuizAnswer {
  questionId: number;
  answer: string;
}

export interface QuizState {
  currentQuestion: number;
  answers: Record<number, string>;
}
