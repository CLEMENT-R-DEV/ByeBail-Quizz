'use client';

import { ReactNode, CSSProperties } from 'react';

interface ResponsiveContainerProps {
  children: ReactNode;
  className?: string;
  /** Style personnalisé pour le container */
  style?: CSSProperties;
}

/**
 * Container simple pour les pages avec fond solide.
 * Le wrapper global (layout.tsx) gère le gradient et le container 550px.
 * Ce composant ajoute juste le background beige et les styles de base.
 */
export default function ResponsiveContainer({
  children,
  className = '',
  style
}: ResponsiveContainerProps) {
  return (
    <div
      className={`h-[100dvh] flex flex-col overflow-hidden ${className}`}
      style={{ backgroundColor: '#F5EBE1', ...style }}
    >
      {children}
    </div>
  );
}
