'use client';

import Image from 'next/image';

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: 'text' | 'number';
  hideArrows?: boolean;
}

export default function TextInput({
  value,
  onChange,
  placeholder = '',
  type = 'text',
  hideArrows = false
}: TextInputProps) {
  const handleIncrement = () => {
    if (type === 'number') {
      const currentValue = parseInt(value) || 0;
      onChange(String(currentValue + 1));
    }
  };

  const handleDecrement = () => {
    if (type === 'number') {
      const currentValue = parseInt(value) || 0;
      if (currentValue > 0) {
        onChange(String(currentValue - 1));
      }
    }
  };

  return (
    <div className="w-full lg:w-[388px] h-14 lg:h-[77px] p-2.5 lg:px[18px] bg-white rounded-2xl outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 flex justify-center items-center gap-2.5">
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="flex-1 justify-center text-gray-900 text-sm lg:text-lg font-normal font-['Satoshi'] leading-4 lg:leading-[110%] bg-transparent border-none focus:outline-none placeholder:text-gray-900/40 lg:placeholder:text-[rgba(17,24,39,0.40)] lg:placeholder:text-lg lg:placeholder:leading-[110%] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&[type=number]]:[-moz-appearance:textfield]"
      />

      {/* Icônes up/down */}
      {!hideArrows && (
        <div className="h-6 px-1 inline-flex flex-col justify-start items-start gap-1">
          {/* Flèche haut */}
          <div
            onClick={handleIncrement}
            className="self-stretch flex-1 flex flex-col justify-center items-center gap-2.5 overflow-hidden cursor-pointer"
          >
            <div className="relative w-2 h-[5px]">
              <Image
                src="/images/CaretUp.svg"
                alt="Augmenter"
                fill
                className="object-contain"
              />
            </div>
          </div>
          {/* Flèche bas */}
          <div
            onClick={handleDecrement}
            className="self-stretch flex-1 flex flex-col justify-center items-center gap-2.5 overflow-hidden cursor-pointer"
          >
            <div className="relative w-2 h-[5px]">
              <Image
                src="/images/CaretDown.svg"
                alt="Diminuer"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
