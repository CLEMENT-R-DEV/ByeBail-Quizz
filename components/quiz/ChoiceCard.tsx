'use client';

import Image from 'next/image';

interface ChoiceCardProps {
  id: string;
  label: string;
  subtitle?: string;
  image: string;
  selected: boolean;
  onClick: () => void;
  fullSize?: boolean;
  compactImage?: boolean;
  labelClassName?: string;
  subtitleClassName?: string;
}

export default function ChoiceCard({
  id,
  label,
  subtitle,
  image,
  selected,
  onClick,
  fullSize = false,
  compactImage = false,
  labelClassName,
  subtitleClassName,
}: ChoiceCardProps) {
  return (
    <button
      onClick={onClick}
      className={`
        relative
        transition-all duration-200
        ${selected ? 'scale-[1.03]' : 'scale-100 hover:scale-[1.03]'}
        ${fullSize ? 'w-full h-full' : ''}
      `}
    >
      <div
        className="h-full flex flex-col justify-center items-center p-[10px] bg-[#FDFEFF] rounded-[18px]"
        style={{
          border: '0.8px solid rgba(0, 0, 0, 0.04)',
          boxShadow: '0px 0px 27.5px rgba(104, 137, 228, 0.1)',
        }}
      >
        <div
          className={`w-full bg-[#FDFEFF] rounded-lg flex flex-col items-center justify-center gap-[10px] ${
            compactImage ? 'aspect-square' : 'aspect-square lg:aspect-auto lg:h-full'
          }`}
          style={{
            border: '0.8px solid rgba(0, 0, 0, 0.08)',
            boxShadow: '0px 0px 27.5px rgba(104, 137, 228, 0.1)',
          }}
        >
          {/* Image */}
          <div
            className={`relative flex-shrink-0 flex justify-center items-center overflow-hidden ${
              compactImage
                ? 'w-[120px] h-[80px]'
                : 'w-[92px] h-[92px] lg:w-[140px] lg:h-[140px]'
            }`}
            style={{
              background: '#FFFFFF',
              ...(compactImage && { padding: '6.5px 26.5px' }),
              ...(!compactImage && { aspectRatio: '1/1' }),
            }}
          >
            <Image
              src={image}
              alt={label}
              fill
              className="object-contain"
              sizes={compactImage ? "120px" : "(min-width: 1024px) 140px, 92px"}
              style={{
                borderRadius: '28px 28px 4px 4px'
              }}
            />
          </div>

          {/* Label + Subtitle */}
          <div className="inline-flex flex-col justify-start items-center gap-0.5">
            <div className={labelClassName || "text-center justify-center text-gray-900 lg:text-[#111827] text-base lg:text-[22px] font-medium lg:font-medium font-['Satoshi'] leading-4 lg:leading-[110%]"}>
              {label}
            </div>
            {subtitle && (
              <div className={subtitleClassName || "text-center justify-center text-[rgba(17,24,39,0.60)] text-sm font-medium font-['Satoshi'] leading-[110%]"}>
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
