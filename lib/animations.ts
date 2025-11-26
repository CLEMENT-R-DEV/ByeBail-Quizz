import { Variants, Transition } from 'framer-motion';

// Transition spring fluide pour les éléments interactifs
export const springTransition: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 25,
};

// Transition douce pour les fade
export const easeTransition: Transition = {
  duration: 0.3,
  ease: [0.25, 0.1, 0.25, 1],
};

// === PAGE TRANSITIONS ===
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
    },
  },
};

// === QUESTION BUBBLE ===
export const bubbleVariants: Variants = {
  initial: {
    opacity: 0,
    y: -20,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 25,
    },
  },
};

export const avatarVariants: Variants = {
  initial: {
    scale: 0,
    rotate: -10,
  },
  animate: {
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 20,
      delay: 0.1,
    },
  },
};

// === CHOICE CARDS ===
export const cardContainerVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

export const cardVariants: Variants = {
  initial: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 25,
    },
  },
};

export const cardHoverVariants: Variants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: springTransition,
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
  selected: {
    scale: 1.08,
    transition: springTransition,
  },
};

// === CHECKMARK ANIMATION ===
export const checkmarkVariants: Variants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 15,
    },
  },
  exit: {
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0.15,
    },
  },
};

// === TEXT INPUT ===
export const inputVariants: Variants = {
  initial: {
    opacity: 0,
    x: -20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: easeTransition,
  },
};

export const inputFocusVariants: Variants = {
  rest: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(155, 123, 248, 0)',
  },
  focus: {
    scale: 1.02,
    boxShadow: '0px 0px 20px rgba(155, 123, 248, 0.15)',
    transition: springTransition,
  },
};

// === CONTINUE BUTTON ===
export const buttonVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      ...easeTransition,
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
  disabled: {
    opacity: 0.5,
    scale: 1,
  },
};

// === PROGRESS BAR ===
export const progressBarVariants: Variants = {
  initial: {
    width: 0,
  },
  animate: (percentage: number) => ({
    width: `${percentage}%`,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  }),
};

// === STAGGER CHILDREN (générique) ===
export const staggerContainerVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const fadeInUpVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: easeTransition,
  },
};

// === SEARCHING PAGE ===
export const stepVariants: Variants = {
  initial: {
    opacity: 0.5,
  },
  active: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  completed: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export const stepCheckVariants: Variants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 15,
      delay: 0.1,
    },
  },
};

// === CONGRATULATIONS PAGE ===
export const celebrationVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
      staggerChildren: 0.15,
    },
  },
};

export const confettiVariants: Variants = {
  initial: {
    y: -100,
    opacity: 0,
    rotate: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    rotate: 360,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};
