# 📝 Quiz ByeBail

Application de questionnaire interactive construite avec Next.js 14, TypeScript et Tailwind CSS v4.

## 🚀 Démarrage rapide

```bash
# Installation des dépendances
npm install

# Lancement du serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## ✨ Fonctionnalités

- ✅ Questions avec différents types de champs (texte, choix multiples)
- ✅ Barre de progression visuelle
- ✅ Navigation entre les questions avec historique
- ✅ Sauvegarde automatique des réponses (localStorage)
- ✅ Validation des réponses
- ✅ Design responsive mobile-first
- ✅ Animation de recherche et page de félicitations

## 📐 Architecture

### Stack technique

- **Framework** : Next.js 14 (App Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS v4
- **Navigation** : Routing dynamique (`/quiz/[id]`)
- **Stockage** : localStorage (pour les réponses)

### Structure des dossiers

```
app/
├── quiz/[id]/page.tsx    # Pages dynamiques des questions
├── searching/page.tsx    # Écran de recherche
├── congratulations/      # Écran de fin
components/quiz/          # Composants réutilisables
lib/                      # Logique métier et données
public/images/           # Images des choix
```

## 🎨 Design

### Couleurs principales

- Fond : `#EDF3FD`
- Bouton Continue : `#EC4809`
- Barre de progression : Vert (`bg-green-500`)
- Avatar : Violet (`bg-purple-400`)

### Layout

- Header blanc fixe avec chevron, titre et progression
- Content zone : marges horizontales de 64px (`mx-16`)
- Bouton Continue : padding bas 60px, padding haut 32px

## 📝 Ajouter des questions

Modifier le fichier [lib/questions.ts](lib/questions.ts) :

```typescript
export const TOTAL_QUESTIONS = 9; // Nombre total

export const questions: Question[] = [
  {
    id: 3,
    type: 'text',
    text: "Votre question ici ?",
    placeholder: 'Réponse attendue',
    validation: (value) => value.trim().length > 0,
  },
  // ... autres questions
];
```

Consultez [GUIDE.md](GUIDE.md) pour plus de détails.

## 🖼️ Images

Placez vos images dans `public/images/` et référencez-les dans `lib/questions.ts` :

```typescript
{
  id: 'choice1',
  label: 'Option 1',
  image: '/images/votre-image.png',
}
```

## 🧪 Tests en développement

L'application est actuellement configurée avec 2 questions :

1. **Question 1** : Saisie de l'âge (validation numérique)
2. **Question 2** : Statut relationnel (choix multiples)

Pour tester le flow complet, vous pouvez temporairement mettre `TOTAL_QUESTIONS = 2` dans `lib/questions.ts`.

## 📱 Navigation

- `/` → Redirige vers `/quiz/1`
- `/quiz/1` → Question 1
- `/quiz/2` → Question 2
- Après la dernière question → `/searching` → `/congratulations`

## 💾 Stockage

Les réponses sont sauvegardées dans `localStorage` sous la clé `byebail-quiz-state`.

Pour réinitialiser :
- Cliquez sur "Recommencer le quiz"
- Ou effacez le localStorage manuellement

## 🛠️ Scripts disponibles

```bash
npm run dev      # Mode développement
npm run build    # Build de production
npm run start    # Serveur de production
npm run lint     # Linter ESLint
```

## 📚 Documentation

Consultez [GUIDE.md](GUIDE.md) pour :
- Guide d'utilisation détaillé
- Ajout de nouvelles questions
- Personnalisation des styles
- Débogage

## 🏗️ Prochaines étapes

- [ ] Ajouter vos vraies images pour la Question 2
- [ ] Créer les questions 3 à 9
- [ ] Personnaliser les pages searching et congratulations
- [ ] Ajouter des animations supplémentaires
- [ ] Implémenter le type `select` si nécessaire

## 📄 Licence

Ce projet a été créé pour ByeBail.
