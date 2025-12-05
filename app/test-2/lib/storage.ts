import { QuizState } from './types';

const STORAGE_KEY = 'byebail-quiz-state-test2';

export const storage = {
  saveState: (state: QuizState): void => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }
  },

  getState: (): QuizState | null => {
    if (typeof window !== 'undefined') {
      const data = sessionStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : null;
    }
    return null;
  },

  saveAnswer: (questionId: number | string, answer: string): void => {
    const state = storage.getState() || { currentQuestion: 1, answers: {} };
    state.answers[questionId] = answer;
    if (typeof questionId === 'number') {
      state.currentQuestion = questionId;
    }
    storage.saveState(state);
  },

  getAnswer: (questionId: number | string): string | undefined => {
    const state = storage.getState();
    return state?.answers[questionId];
  },

  clear: (): void => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem(STORAGE_KEY);
    }
  },
};
