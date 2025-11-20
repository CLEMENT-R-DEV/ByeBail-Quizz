'use client';

import Image from 'next/image';

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: 'text' | 'number';
}

export default function TextInput({
  value,
  onChange,
  placeholder = '',
  type = 'text'
}: TextInputProps) {
  return (
    <div className="w-full h-14 p-2.5 bg-white rounded-2xl outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 flex justify-center items-center gap-2.5">
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="flex-1 justify-center text-gray-900 text-sm font-normal font-['Satoshi'] leading-4 bg-transparent border-none focus:outline-none placeholder:text-gray-900/40"
      />

      {/* Icônes up/down */}
      <div className="h-6 px-1 inline-flex flex-col justify-start items-start gap-1">
        {/* Flèche haut */}
        <div className="self-stretch flex-1 flex flex-col justify-center items-center gap-2.5 overflow-hidden">
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
        <div className="self-stretch flex-1 flex flex-col justify-center items-center gap-2.5 overflow-hidden">
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
    </div>
  );
}
