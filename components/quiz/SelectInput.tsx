'use client';

import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

interface SelectInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  options: Array<{ id: string; label: string }>;
}

export default function SelectInput({
  value,
  onChange,
  placeholder = 'Select',
  options
}: SelectInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Fermer le dropdown si on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (optionId: string) => {
    onChange(optionId);
    setIsOpen(false);
  };

  const selectedOption = options.find(opt => opt.id === value);

  return (
    <div ref={containerRef} className="relative w-full lg:w-[388px]">
      <div
        onClick={handleToggle}
        className="w-full h-[72px] p-4 rounded-[18px] border border-white/10 flex justify-center items-center gap-2.5 cursor-pointer backdrop-blur-md"
        style={{ background: 'rgba(250, 245, 241, 0.85)' }}
      >
        <div
          className="flex-1 justify-center font-medium"
          style={{
            fontFamily: 'var(--font-inter-tight)',
            fontSize: '18px',
            fontWeight: 500,
            lineHeight: '110%',
            color: value ? '#1C1917' : '#7A7572'
          }}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </div>

        {/* Icônes up/down */}
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="p-1">
            <Image
              src="/images/VectorUp.svg"
              alt=""
              width={8}
              height={5}
              className="object-contain"
            />
          </div>
          <div className="p-1">
            <Image
              src="/images/VectorDown.svg"
              alt=""
              width={8}
              height={5}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white rounded-2xl outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 shadow-lg max-h-[300px] overflow-y-auto">
          {options.map((option) => (
            <div
              key={option.id}
              onClick={() => handleSelect(option.id)}
              className="p-3 lg:p-4 cursor-pointer hover:bg-gray-50 text-sm lg:text-lg font-normal font-['Satoshi'] text-gray-900 first:rounded-t-2xl last:rounded-b-2xl"
              style={{
                backgroundColor: value === option.id ? 'rgba(0, 0, 0, 0.05)' : undefined
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
