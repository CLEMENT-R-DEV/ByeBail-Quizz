'use client';

interface ContinueButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export default function ContinueButton({ onClick, disabled = false }: ContinueButtonProps) {
  return (
    <div className="pb-[60px] pt-[32px]">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`
          w-full h-14 rounded-[105px] text-white font-semibold text-lg
          transition-all duration-200 flex items-center justify-center
          ${
            disabled
              ? 'bg-orange-300 cursor-not-allowed opacity-50'
              : 'bg-[#FE8253] hover:bg-[#e67349] active:scale-98'
          }
        `}
        style={{
          fontFamily: 'var(--font-crimson-pro), serif',
          fontSize: '18px',
          lineHeight: '1',
          padding: '0 18px',
          ...(
            !disabled
              ? {
                  boxShadow: 'inset 0 2px 4px #EC48095E, 0 4px 8px #EC480947',
                }
              : {}
          ),
        }}
      >
        Continue
      </button>
    </div>
  );
}
