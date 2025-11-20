import { Question } from './types';

export const TOTAL_QUESTIONS = 10;

export const questions: Question[] = [
  {
    id: 1,
    type: 'text',
    text: "On t'a déjà dit que tu faisais plus jeune que ton âge ? D'ailleurs, t'as quel âge ?",
    placeholder: 'Ton age',
    validation: (value: string) => {
      const age = parseInt(value, 10);
      return !isNaN(age) && age > 0 && age < 150;
    },
  },
  {
    id: 2,
    type: 'choice',
    text: "Ne crois pas que je te drague, mais... t'es en couple ou pas ?",
    choices: [
      {
        id: 'couple',
        label: 'En couple',
        image: '/images/Group 21.svg',
      },
      {
        id: 'single',
        label: 'Célibataire',
        image: '/images/Group 17.svg',
      },
    ],
  },
  {
    id: 3,
    type: 'choice',
    text: "Et tu prévois d'acheter ensemble ou seul(e) ?",
    choices: [
      {
        id: 'ensemble',
        label: 'Ensemble',
        subtitle: 'On achète à deux',
        image: '/images/Frame_1707478958.svg',
      },
      {
        id: 'seul',
        label: 'Seul(e)',
        subtitle: 'Je garde mon indépendance',
        image: '/images/Frame_1707478954.svg',
      },
    ],
  },
  {
    id: 4,
    type: 'text',
    text: 'Actuellement, quelle somme verses-tu pour ton loyer ?',
    placeholder: 'Montant du loyer',
    validation: (value: string) => {
      const montant = parseFloat(value);
      return !isNaN(montant) && montant >= 0;
    },
  },
  {
    id: 5,
    type: 'choice',
    text: 'Combien de pièces veux-tu dans ton appartement ?',
    choiceStyle: 'image', // Afficher seulement les images sans carte
    choices: [
      {
        id: 'studio',
        label: 'Studio',
        image: '/images/Studio.svg',
      },
      {
        id: 't2',
        label: 'T2',
        image: '/images/T2.svg',
      },
      {
        id: 't3',
        label: 'T3',
        image: '/images/T3.svg',
      },
      {
        id: 't4',
        label: 'T4',
        image: '/images/T4.svg',
      },
    ],
  },
  {
    id: 6,
    type: 'text',
    text: 'Et niveau revenus, combien tu gagnes par mois ?',
    placeholder: 'Revenus mensuels',
    validation: (value: string) => {
      const montant = parseFloat(value);
      return !isNaN(montant) && montant >= 0;
    },
  },
  {
    id: 7,
    type: 'choice',
    text: 'Cote boulot, tu fais quoi ?',
    choices: [
      {
        id: 'cdi',
        label: 'CDI',
        image: '/images/CDI.svg',
      },
      {
        id: 'cdd',
        label: 'CDD',
        image: '/images/CDD.svg',
      },
      {
        id: 'independant',
        label: 'Indépendant',
        image: '/images/Independant.svg',
      },
      {
        id: 'autre',
        label: 'Autre',
        image: '/images/Autre.svg',
      },
    ],
  },
  {
    id: 8,
    type: 'text',
    titleText: 'OK, on rentre dans le vif du sujet.',
    text: "Pour te montrer tes appartements personnalisés, j'ai besoin de ton email.",
    placeholder: 'ton.email@example.fr',
    validation: (value: string) => {
      // Validation email basique
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
    },
  },
  {
    id: 9,
    type: 'choice',
    text: 'Dernières questions, promis. Tu as déjà des crédits en cours ?',
    choices: [
      {
        id: 'non',
        label: 'Non',
        image: '/images/non.svg',
      },
      {
        id: 'oui',
        label: 'Oui',
        image: '/images/oui.svg',
      },
    ],
  },
  {
    id: 10,
    type: 'choice',
    text: "Dernière question ! T'as un peu d'apport de côté, ou c'est plutôt \"pâtes au beurre\" en fin de mois ?",
    choices: [
      {
        id: 'apport',
        label: "J'ai de l'apport",
        image: '/images/apport.svg',
      },
      {
        id: 'rien',
        label: 'Rien du tout',
        image: '/images/rien.svg',
      },
      {
        id: 'sais_pas',
        label: 'Je sais pas',
        image: '/images/sais_pas.svg',
      },
    ],
  },
];
