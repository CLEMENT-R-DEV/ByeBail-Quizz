import { Question } from './types';

export const TOTAL_QUESTIONS = 12;

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
    type: 'text',
    text: 'Nous c\'est Byebail, et toi c\'est comment ?',
    placeholder: 'Ton prénom',
    validation: (value: string) => {
      return value.trim().length > 0;
    },
  },
  {
    id: 3,
    type: 'select',
    text: 'On est content de te faire ta connaissance, et au fait tu nous a connu comment ?',
    placeholder: 'Select',
    choices: [
      { id: 'insta', label: 'Insta', image: '' },
      { id: 'tiktok', label: 'Tiktok', image: '' },
      { id: 'facebook', label: 'Facebook', image: '' },
      { id: 'affichage', label: 'Affichage', image: '' },
      { id: 'tele', label: 'Télé', image: '' },
      { id: 'youtube', label: 'Youtube', image: '' },
      { id: 'bouche_a_oreille', label: 'Bouche à oreille', image: '' },
      { id: 'autres', label: 'Autres', image: '' },
    ],
    validation: (value: string) => {
      return value.trim().length > 0;
    },
  },
  {
    id: 4,
    type: 'choice',
    text: "Ne crois pas que je te drague, mais...|t'es en couple ou pas ?",
    choices: [
      {
        id: 'couple',
        label: 'En couple',
        image: '/images/image110.svg',
      },
      {
        id: 'single',
        label: 'Célibataire',
        image: '/images/image123.svg',
      },
    ],
  },
  {
    id: 5,
    type: 'choice',
    text: "Et c'est pour acheter avec ta moitié, ou en solo ?",
    choices: [
      {
        id: 'ensemble',
        label: 'Ensemble',
        subtitle: 'On achète à deux',
        image: '/images/couple.svg',
      },
      {
        id: 'seul',
        label: 'Seul(e)',
        subtitle: 'Je garde mon indépendance',
        image: '/images/seul.svg',
      },
    ],
  },
  {
    id: 6,
    type: 'text',
    text: 'On rentre dans le vif du sujet : tu payes combien de loyer ? (ou tu vis encore chez maman 😅)',
    placeholder: 'Montant du loyer',
    validation: (value: string) => {
      const montant = parseFloat(value);
      return !isNaN(montant) && montant >= 0;
    },
  },
  {
    id: 7,
    type: 'choice',
    text: 'Tu cherches quel type de logement ?',
    choices: [
      {
        id: 'studio',
        label: 'Studio',
        image: '/images/studio.svg',
      },
      {
        id: 't1',
        label: 'T1',
        subtitle: 'Cuisine séparée',
        image: '/images/t1.svg',
      },
      {
        id: 't2',
        label: 'T2',
        subtitle: '1 chambre + 1 salon',
        image: '/images/t2.svg',
      },
      {
        id: 't3',
        label: 'T3',
        subtitle: '2 chambres + 1 salon',
        image: '/images/t3.svg',
      },
      {
        id: 't4+',
        label: 'T4+',
        subtitle: '3 chambres + 1 salon',
        image: '/images/t4+.svg',
      },
    ],
  },
  {
    id: 8,
    type: 'text',
    text: 'Et niveau revenus, combien tu gagnes par mois ?',
    placeholder: 'Revenus mensuels',
    validation: (value: string) => {
      const montant = parseFloat(value);
      return !isNaN(montant) && montant >= 0;
    },
  },
  {
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
