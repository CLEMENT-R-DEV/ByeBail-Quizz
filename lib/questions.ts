import { Question } from './types';

export const TOTAL_QUESTIONS = 11;

export const questions: Question[] = [
  {
    id: 1,
    type: 'text',
    titleText: "Bonjour, nous c'est ByeBail.",
    text: "On t'aide à devenir propriétaire pour le même prix que ton loyer.|Et toi c'est comment ?",
    inputs: [
      { key: 'nom', placeholder: 'Nom...', type: 'text' },
      { key: 'prenom', placeholder: 'Prénom...', type: 'text' },
      { key: 'email', placeholder: 'Email...', type: 'email' },
    ],
    infoText: "Promis on ne te spam pas, on ne rend pas t'es infos.\nC'est juste pour t'envoyer tes propositions ?",
    validation: (value: string) => {
      try {
        const obj = JSON.parse(value);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return obj.nom?.trim().length > 0 &&
               obj.prenom?.trim().length > 0 &&
               emailRegex.test(obj.email || '');
      } catch {
        return false;
      }
    },
  },
  {
    id: 2,
    type: 'composite',
    text: '',
    compositeQuestions: [
      {
        key: 'age',
        titleText: "On t'a déjà dit que",
        text: "tu faisais plus jeune que ton âge ?|D'ailleurs, t'as quel âge ?",
        inputType: 'text',
        placeholder: "J'ai ... ans",
      },
      {
        key: 'source',
        titleText: "On est content de faire ta connaissance !",
        text: "|Et au fait, tu nous as connu comment ?",
        inputType: 'select',
        placeholder: 'TikTok',
        choices: [
          { id: 'insta', label: 'Insta' },
          { id: 'tiktok', label: 'Tiktok' },
          { id: 'facebook', label: 'Facebook' },
          { id: 'affichage', label: 'Affichage' },
          { id: 'tele', label: 'Télé' },
          { id: 'youtube', label: 'Youtube' },
          { id: 'bouche_a_oreille', label: 'Bouche à oreille' },
          { id: 'autres', label: 'Autres' },
        ],
      },
    ],
    validation: (value: string) => {
      try {
        const obj = JSON.parse(value);
        const age = parseInt(obj.age, 10);
        return !isNaN(age) && age > 0 && age < 150 && obj.source?.trim().length > 0;
      } catch {
        return false;
      }
    },
  },
  {
    id: 3,
    type: 'composite',
    text: '',
    compositeQuestions: [
      {
        key: 'ville',
        text: "|Tu vis où ?",
        inputType: 'text',
        placeholder: "J'habite à...",
      },
      {
        key: 'loyer',
        text: "ou combien tu pourrais\nmettre par mois ?|Et tu payes combien de loyer ?",
        inputType: 'text',
        placeholder: "...€ par mois",
        infoBadge: "Bonne nouvelle on a XXX biens autour de XXX ville !",
      },
    ],
    validation: (value: string) => {
      try {
        const obj = JSON.parse(value);
        const loyer = parseFloat(obj.loyer);
        return obj.ville?.trim().length > 0 && !isNaN(loyer) && loyer >= 0;
      } catch {
        return false;
      }
    },
  },
  {
    id: 4,
    type: 'text',
    titleText: "Quel budget peux-tu mettre\npour l'apport ?",
    text: "Cela nous permet de te proposer plus\nde possibilités.",
    placeholder: '...€ par mois',
    validation: (value: string) => {
      const montant = parseFloat(value);
      return !isNaN(montant) && montant >= 0;
    },
  },
  {
    id: 5,
    type: 'choice',
    text: 'Tu cherches quel type de logement ?',
    backgroundImage: '/images/appart.svg',
    choices: [
      {
        id: 'studio',
        label: 'Studio',
      },
      {
        id: 't2',
        label: 'T2',
      },
      {
        id: 't3',
        label: 'T3',
      },
      {
        id: 't4',
        label: 'T4',
      },
    ],
  },
  {
    id: 6,
    type: 'choice',
    text: "Tu achète seul ou à deux ?",
    backgroundImage: '/images/rings.svg',
    choices: [
      {
        id: 'seul',
        label: 'Seul',
      },
      {
        id: 'a_deux',
        label: 'À deux',
      },
    ],
  },
  {
    id: 7,
    type: 'text',
    text: 'Quel est le revenu net mensuel de ton foyer ?',
    placeholder: '...€',
    subQuestions: [
      {
        key: 'statut',
        text: 'Quel est ton statut ?',
        inputType: 'pills',
        choices: [
          { id: 'cdi', label: 'CDI' },
          { id: 'cdd', label: 'CDD' },
          { id: 'independant', label: 'Indépendant' },
          { id: 'etudiant', label: 'Étudiant' },
          { id: 'sans_emploi', label: 'Sans emploi' },
          { id: 'autres', label: 'Autres' },
        ],
      },
    ],
    infoText: "Ces infos restent 100% confidentielles.\nPromis, on est pas des boulets.",
    validation: (value: string) => {
      const montant = parseFloat(value);
      return !isNaN(montant) && montant >= 0;
    },
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
    titleText: 'Dernières questions, promis.',
    text: 'Tu as déjà des crédits en cours ?',
    choices: [
      {
        id: 'non',
        label: 'Non',
        image: '/images/icon.svg',
      },
      {
        id: 'oui',
        label: 'Oui',
        image: '/images/image138.svg',
      },
    ],
  },
  {
    id: 10,
    type: 'choice',
    titleText: 'OK, et c\'est quoi exactement ?',
    text: 'Auto, conso, étudiant, immo ?',
    choices: [
      {
        id: 'auto',
        label: 'Auto',
        image: '/images/image1250.svg',
        labelClassName: "text-center text-[#111827] text-base font-medium leading-[110%] font-['Satoshi']",
      },
      {
        id: 'conso',
        label: 'Conso',
        image: '/images/image1260.svg',
        labelClassName: "text-center text-[#111827] text-base font-medium leading-[110%] font-['Satoshi']",
      },
      {
        id: 'etudiant',
        label: 'Etudiant',
        image: '/images/image1270.svg',
        labelClassName: "text-center text-[#111827] text-base font-medium leading-[110%] font-['Satoshi']",
      },
      {
        id: 'immo',
        label: 'Immo',
        image: '/images/image1280.svg',
        labelClassName: "text-center text-[#111827] text-base font-medium leading-[110%] font-['Satoshi']",
      },
    ],
  },
  {
    id: 11,
    type: 'choice',
    titleText: 'Dernière question !',
    text: "T'as un peu d'apport de côté, ou c'est plutôt \"pâtes au beurre\" en fin de mois ?",
    choices: [
      {
        id: 'apport',
        label: "J'ai de l'apport",
        image: '/images/image143.svg',
        labelClassName: "text-center text-[#111827] text-base font-medium leading-[110%] font-['Satoshi']",
      },
      {
        id: 'rien',
        label: 'Rien du tout',
        image: '/images/image144.svg',
        labelClassName: "text-center text-[#111827] text-base font-medium leading-[110%] font-['Satoshi']",
      },
      {
        id: 'sais_pas',
        label: 'Je sais pas',
        image: '/images/image145.svg',
        labelClassName: "text-center text-[#111827] text-base font-medium leading-[110%] font-['Satoshi']",
      },
    ],
  },
];
