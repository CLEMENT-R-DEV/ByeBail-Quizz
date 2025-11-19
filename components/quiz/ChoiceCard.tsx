'use client';

import Image from 'next/image';

interface ChoiceCardProps {
  id: string;
  label: string;
  subtitle?: string;
  image: string;
  selected: boolean;
  onClick: () => void;
}

export default function ChoiceCard({
  id,
  label,
  subtitle,
  image,
  selected,
  onClick,
}: ChoiceCardProps) {
  return (
    <button
      onClick={onClick}
      className={`
        relative
        transition-all duration-200
        ${selected ? 'scale-110' : 'scale-100 hover:scale-105'}
      `}
    >
      <div
        className="flex flex-col justify-center items-center p-[10px] bg-[#FDFEFF] rounded-[18px]"
        style={{
          border: '0.8px solid rgba(0, 0, 0, 0.04)',
          boxShadow: '0px 0px 27.5px rgba(104, 137, 228, 0.1)',
        }}
      >
        <div
          className="w-full aspect-square bg-[#FDFEFF] rounded-lg flex flex-col items-center justify-center gap-[10px]"
          style={{
            border: '0.8px solid rgba(0, 0, 0, 0.08)',
            boxShadow: '0px 0px 27.5px rgba(104, 137, 228, 0.1)',
          }}
        >
          {/* Image */}
          <div className="relative w-[120px] h-20 flex-shrink-0">
            <Image
              src={image}
              alt={label}
              fill
              className="object-contain"
              sizes="120px"
            />
          </div>

          {/* Label + Subtitle */}
          <div className="inline-flex flex-col justify-start items-center gap-0.5">
            <div className="text-center justify-center text-gray-900 text-base font-medium font-['Satoshi'] leading-4">
              {label}
            </div>
            {subtitle && (
              <div className="text-center justify-center text-gray-900/60 text-sm font-medium font-['Satoshi'] leading-4">
                {subtitle}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Indicateur de sélection */}
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
