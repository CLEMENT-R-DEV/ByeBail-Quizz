'use client';

import Image from 'next/image';

interface ImageChoiceProps {
  id: string;
  label: string;
  image: string;
  selected: boolean;
  onClick: () => void;
}

export default function ImageChoice({
  id,
  label,
  image,
  selected,
  onClick,
}: ImageChoiceProps) {
  return (
    <button
      onClick={onClick}
      className={`
        relative
        transition-all duration-200
        ${selected ? 'scale-110' : 'scale-100 hover:scale-105'}
      `}
    >
      {/* Image avec bordure blanche de 8px */}
      <div className="relative w-full aspect-square border-8 border-white rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt={label}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>

      {/* Indicateur de sélection (optionnel) */}
      {selected && (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}
    </button>
  );
}
