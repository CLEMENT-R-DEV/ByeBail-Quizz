# Guide d'utilisation - Quiz ByeBail

## 🚀 Démarrage

L'application est déjà lancée sur [http://localhost:3000](http://localhost:3000)

```bash
npm run dev
```

## 📁 Structure du projet

```
byebail-quizz/
├── app/
│   ├── layout.tsx              # Layout global (fond #EDF3FD)
│   ├── page.tsx                # Page d'accueil (redirige vers /quiz/1)
│   ├── quiz/[id]/page.tsx      # Page dynamique des questions
│   ├── searching/page.tsx      # Page "Recherche en cours"
│   └── congratulations/page.tsx # Page de félicitations
├── components/quiz/
│   ├── QuizHeader.tsx          # Header avec chevron, titre, progression
│   ├── QuestionBubble.tsx      # Bulle de conversation avec avatar
│   ├── TextInput.tsx           # Champ de saisie texte
│   ├── ChoiceCard.tsx          # Carte de choix avec image
│   └── ContinueButton.tsx      # Bouton orange "Continue"
├── lib/
│   ├── types.ts                # Types TypeScript
│   ├── questions.ts            # Données des questions
│   └── storage.ts              # Gestion localStorage
└── public/images/              # Vos images pour les choix
```

## 🖼️ Ajouter vos images

Pour la Question 2 (et les futures questions avec choix), placez vos images dans le dossier `public/images/` :

1. **Question 2 - Situation amoureuse :**
   - `public/images/puzzle-couple.png` (icône puzzle pour "En couple")
   - `public/images/tree-single.png` (icône arbre pour "Célibataire")

2. Mettez à jour les chemins dans `lib/questions.ts` si besoin.

## ✏️ Ajouter de nouvelles questions

### 1. Modifier `lib/questions.ts`

Changez d'abord le nombre total de questions :
```typescript
export const TOTAL_QUESTIONS = 9; // Mettre à jour selon vos besoins
```

Puis ajoutez vos questions dans le tableau :

**Exemple - Question texte :**
```typescript
{
  id: 3,
  type: 'text',
  text: "Quel est votre nom ?",
  placeholder: 'Votre nom',
  validation: (value: string) => value.trim().length > 0,
}
```

**Exemple - Question choix multiples :**
```typescript
{
  id: 4,
  type: 'choice',
  text: "Quelle est votre couleur préférée ?",
  choices: [
    {
      id: 'blue',
      label: 'Bleu',
      image: '/images/color-blue.png',
    },
    {
      id: 'red',
      label: 'Rouge',
      image: '/images/color-red.png',
    },
  ],
}
```

### 2. Types de questions supportés

- ✅ `text` : Champ de saisie texte
- ✅ `choice` : Choix multiples avec cartes
- ⏳ `select` : Dropdown (à implémenter si besoin)

## 🎨 Personnalisation des couleurs

Les couleurs sont définies dans le code :

- **Fond de l'app** : `#EDF3FD` (dans `app/globals.css`)
- **Bouton Continue** : `#EC4809` (dans `components/quiz/ContinueButton.tsx`)
- **Avatar** : `bg-purple-400` (dans `components/quiz/QuestionBubble.tsx`)
- **Barre de progression** : `bg-green-500` (dans `components/quiz/QuizHeader.tsx`)

## 📱 Navigation

- **Home** (`/`) → Redirige vers `/quiz/1`
- **Questions** (`/quiz/1`, `/quiz/2`, etc.) → Questions du quiz
- **Après la dernière question** → `/searching` → `/congratulations`
- **Chevron retour** → Question précédente ou home si question 1

## 💾 Sauvegarde des réponses

Les réponses sont sauvegardées automatiquement dans le localStorage du navigateur après chaque question. Pour réinitialiser :

1. Cliquer sur "Recommencer le quiz" dans la page de félicitations
2. Ou ouvrir les DevTools → Application → Local Storage → Supprimer `byebail-quiz-state`

## 🛠️ Prochaines étapes

1. **Remplacer les images placeholder** dans `public/images/`
2. **Ajouter les questions 3-9** dans `lib/questions.ts`
3. **Tester chaque question** en naviguant dans le quiz
4. **Personnaliser les pages** searching et congratulations si besoin

## 📝 Notes importantes

- Les images doivent être au format PNG ou JPG
- Taille recommandée : 256x256px minimum
- Le bouton "Continue" est désactivé tant qu'aucune réponse n'est donnée
- La validation de l'âge accepte uniquement les nombres entre 1 et 149

## 🐛 Débogage

Si vous rencontrez des problèmes :

1. Vérifier la console du navigateur (F12)
2. Vérifier le terminal où `npm run dev` tourne
3. Vérifier que les images existent dans `public/images/`
4. Vérifier que `TOTAL_QUESTIONS` correspond au nombre de questions dans le tableau
