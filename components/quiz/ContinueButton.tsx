'use client';

interface ContinueButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export default function ContinueButton({ onClick, disabled = false }: ContinueButtonProps) {
  return (
    <div className="pb-[60px] pt-[32px] lg:w-full lg:h-[172px] lg:px-[140px] lg:py-[40px] lg:border lg:border-black/10 lg:bg-white lg:shadow-[0_-10px_27.5px_0_rgba(104,137,228,0.04)] lg:flex lg:flex-col lg:items-center lg:gap-[10px]">
      <div className="lg:w-[750px] lg:flex lg:flex-col lg:items-end lg:gap-[10px]">
        <button
          onClick={onClick}
          disabled={disabled}
          className={`
            w-full lg:w-[358px] h-14 rounded-[105px] text-white font-semibold text-lg
            transition-all duration-200 flex items-center justify-center
            ${
              disabled
                ? 'bg-orange-300 cursor-not-allowed opacity-50'
                : 'bg-[#FE8253] hover:bg-[#e67349] active:scale-98 cursor-pointer'
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
                    boxShadow: '0 0 8.8px 0 #DEE3E7 inset, 0 -21px 20.8px 0 rgba(236, 72, 9, 0.37) inset, 0 0 80.5px 0 rgba(236, 72, 9, 0.28)',
                  }
                : {}
            ),
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}