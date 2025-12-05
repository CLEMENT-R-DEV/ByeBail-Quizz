export type QuestionType = 'text' | 'choice' | 'select' | 'composite';

export interface InputField {
  key: string;
  placeholder: string;
  type?: 'text' | 'email' | 'number';
}

export interface SubQuestion {
  key: string;
  titleText?: string;
  text: string;
  inputType: 'text' | 'select' | 'pills';
  placeholder?: string;
  textInputType?: 'text' | 'email' | 'number';
  choices?: { id: string; label: string }[];
  infoBadge?: string; // Badge orange affiché après l'input
}

export interface CompositeQuestion {
  key: string;
  titleText?: string;
  text: string;
  inputType: 'text' | 'select' | 'city-search';
  placeholder?: string;
  choices?: { id: string; label: string }[];
  infoBadge?: string; // Badge orange affiché après l'input
}

export interface Choice {
  id: string;
  label: string;
  subtitle?: string; // sous-titre optionnel
  image?: string; // path vers l'image (optionnel)
  desktopImage?: string; // path vers l'image desktop (optionnel)
  labelClassName?: string; // classes CSS personnalisées pour le label
  subtitleClassName?: string; // classes CSS personnalisées pour le sous-titre
}

export interface Question {
  id: number;
  type: QuestionType;
  text: string;
  titleText?: string; // titre optionnel pour la question (style différent)
  infoText?: string; // texte d'information en vert sous la question
  placeholder?: string; // pour input text
  inputs?: InputField[]; // pour questions avec plusieurs champs
  subQuestions?: SubQuestion[]; // pour questions avec plusieurs sous-questions
  compositeQuestions?: CompositeQuestion[]; // pour questions composites (plusieurs questions sur même écran)
  choices?: Choice[]; // pour choix multiples
  choiceStyle?: 'card' | 'image'; // style des choix: card (avec bordure) ou image (seulement l'image)
  backgroundImage?: string; // image de fond pour la question (par-dessus le logo)
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
