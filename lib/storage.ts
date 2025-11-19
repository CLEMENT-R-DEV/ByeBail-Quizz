import { QuizState } from './types';

const STORAGE_KEY = 'byebail-quiz-state';

export const storage = {
  // Sauvegarder l'état complet du quiz
  saveState: (state: QuizState): void => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }
  },

  // Récupérer l'état du quiz
  getState: (): QuizState | null => {
    if (typeof window !== 'undefined') {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : null;
    }
    return null;
  },

  // Sauvegarder une réponse spécifique
  saveAnswer: (questionId: number, answer: string): void => {
    const state = storage.getState() || { currentQuestion: 1, answers: {} };
    state.answers[questionId] = answer;
    state.currentQuestion = questionId;
    storage.saveState(state);
  },

  // Récupérer une réponse spécifique
  getAnswer: (questionId: number): string | undefined => {
    const state = storage.getState();
    return state?.answers[questionId];
  },

  // Effacer toutes les données
  clear: (): void => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
  },
};
