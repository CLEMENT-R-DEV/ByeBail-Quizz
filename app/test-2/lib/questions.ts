import { Question } from './types';

export const TOTAL_QUESTIONS = 14;

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
    validation: (value: string) => value.trim().length > 0,
  },
  {
    id: 3,
    type: 'select',
    text: 'On est content de te faire ta connaissance, et au fait tu nous a connu comment ?',
    placeholder: 'Sélectionnez un média',
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
    validation: (value: string) => value.trim().length > 0,
  },
  {
    id: 4,
    type: 'choice',
    text: 'Où cherches-tu ton futur chez-toi ?',
    choices: [
      { id: 'tours', label: 'Tours', image: '/images/Tours.png', labelClassName: "text-center text-[#111827] text-base font-medium leading-[110%] font-['Satoshi']" },
      { id: 'bourg-en-bresse', label: 'Bourg-en-Bresse', image: '/images/bourg-en-bresse.png', labelClassName: "text-center text-[#111827] text-base font-medium leading-[110%] font-['Satoshi']" },
      { id: 'autre', label: 'Autre ville', image: '/images/interrogation.png', labelClassName: "text-center text-[#111827] text-base font-medium leading-[110%] font-['Satoshi']" },
    ],
  },
  {
    id: 5,
    type: 'choice',
    text: "Ne crois pas que je te drague, mais...|t'es en couple ou pas ?",
    choices: [
      { id: 'couple', label: 'En couple', image: '/images/image110.svg' },
      { id: 'single', label: 'Célibataire', image: '/images/image123.svg' },
    ],
  },
  {
    id: 6,
    type: 'choice',
    text: "Et c'est pour acheter avec ta moitié, ou en solo ?",
    choices: [
      { id: 'ensemble', label: 'Ensemble', subtitle: 'On achète à deux', image: '/images/couple.svg' },
      { id: 'seul', label: 'Seul(e)', subtitle: 'Je garde mon indépendance', image: '/images/seul.svg' },
    ],
  },
  {
    id: 7,
    type: 'text',
    text: 'On rentre dans le vif du sujet : tu payes combien de loyer ? (ou tu vis encore chez maman 😅)',
    placeholder: 'Montant du loyer',
    validation: (value: string) => {
      const montant = parseFloat(value);
      return !isNaN(montant) && montant >= 0;
    },
  },
  {
    id: 8,
    type: 'choice',
    text: 'Tu cherches quel type de logement ?',
    choices: [
      { id: 'studio', label: 'Studio', image: '/images/studio.svg', labelClassName: "text-center text-[#111827] text-base font-medium leading-[110%] font-['Satoshi']" },
      { id: 't1', label: 'T1', subtitle: 'Cuisine séparée', image: '/images/t1.svg', labelClassName: "text-center text-[#111827] text-base font-medium leading-[110%] font-['Satoshi']", subtitleClassName: "text-center text-[rgba(17,24,39,0.60)] text-sm font-medium leading-[110%] font-['Satoshi']" },
      { id: 't2', label: 'T2', subtitle: '1 chambre + 1 salon', image: '/images/t2.svg', labelClassName: "text-center text-[#111827] text-base font-medium leading-[110%] font-['Satoshi']", subtitleClassName: "text-center text-[rgba(17,24,39,0.60)] text-sm font-medium leading-[110%] font-['Satoshi']" },
      { id: 't3', label: 'T3', subtitle: '2 chambres + 1 salon', image: '/images/t3.svg', labelClassName: "text-center text-[#111827] text-base font-medium leading-[110%] font-['Satoshi']", subtitleClassName: "text-center text-[rgba(17,24,39,0.60)] text-sm font-medium leading-[110%] font-['Satoshi']" },
      { id: 't4+', label: 'T4+', subtitle: '3 chambres + 1 salon', image: '/images/t4+.svg', labelClassName: "text-center text-[#111827] text-base font-medium leading-[110%] font-['Satoshi']", subtitleClassName: "text-center text-[rgba(17,24,39,0.60)] text-sm font-medium leading-[110%] font-['Satoshi']" },
    ],
  },
  {
    id: 9,
    type: 'text',
    text: 'Et niveau revenus, combien tu gagnes par mois ?',
    infoText: '(Si t\'es en couple, compte vos deux revenus)',
    placeholder: 'Ex: 850',
    validation: (value: string) => {
      const montant = parseFloat(value);
      return !isNaN(montant) && montant >= 0;
    },
  },
  {
    id: 10,
    type: 'choice',
    text: 'Côté boulot, tu fais quoi ?',
    choices: [
      { id: 'cdi', label: 'CDI', image: '/images/image125.svg', labelClassName: "text-center text-[#111827] text-base font-medium leading-[110%] font-['Satoshi']" },
      { id: 'cdd', label: 'CDD', image: '/images/image126.svg', labelClassName: "text-center text-[#111827] text-base font-medium leading-[110%] font-['Satoshi']" },
      { id: 'independant', label: 'Indépendant', image: '/images/image127.svg', labelClassName: "text-center text-[#111827] text-base font-medium leading-[110%] font-['Satoshi']" },
      { id: 'autre', label: 'Autre', image: '/images/image128.svg', labelClassName: "text-center text-[#111827] text-base font-medium leading-[110%] font-['Satoshi']" },
    ],
  },
  {
    id: 11,
    type: 'text',
    titleText: 'OK, on rentre dans le vif du sujet.',
    text: "Pour te montrer tes appartements personnalisés, j'ai besoin de ton email.",
    placeholder: 'ton.email@example.fr',
    validation: (value: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
    },
  },
  {
    id: 12,
    type: 'choice',
    titleText: 'Dernières questions, promis.',
    text: 'Tu as déjà des crédits en cours ?',
    choices: [
      { id: 'non', label: 'Non', image: '/images/icon.svg' },
      { id: 'oui', label: 'Oui', image: '/images/image138.svg' },
    ],
  },
  {
    id: 13,
    type: 'choice',
    titleText: 'OK, et c\'est quoi exactement ?',
    text: 'Auto, conso, étudiant, immo ?',
    choices: [
      { id: 'auto', label: 'Auto', image: '/images/image1250.svg', labelClassName: "text-center text-[#111827] text-base font-medium leading-[110%] font-['Satoshi']" },
      { id: 'conso', label: 'Conso', image: '/images/image1260.svg', labelClassName: "text-center text-[#111827] text-base font-medium leading-[110%] font-['Satoshi']" },
      { id: 'etudiant', label: 'Etudiant', image: '/images/image1270.svg', labelClassName: "text-center text-[#111827] text-base font-medium leading-[110%] font-['Satoshi']" },
      { id: 'immo', label: 'Immo', image: '/images/image1280.svg', labelClassName: "text-center text-[#111827] text-base font-medium leading-[110%] font-['Satoshi']" },
    ],
  },
  {
    id: 14,
    type: 'choice',
    titleText: 'Dernière question !',
    text: "T'as un peu d'apport de côté, ou c'est plutôt \"pâtes au beurre\" en fin de mois ?",
    choices: [
      { id: 'apport', label: "J'ai de l'apport", image: '/images/image143.svg', labelClassName: "text-center text-[#111827] text-base font-medium leading-[110%] font-['Satoshi']" },
      { id: 'rien', label: 'Rien du tout', image: '/images/image144.svg', labelClassName: "text-center text-[#111827] text-base font-medium leading-[110%] font-['Satoshi']" },
      { id: 'sais_pas', label: 'Je sais pas', image: '/images/image145.svg', labelClassName: "text-center text-[#111827] text-base font-medium leading-[110%] font-['Satoshi']" },
    ],
  },
];
