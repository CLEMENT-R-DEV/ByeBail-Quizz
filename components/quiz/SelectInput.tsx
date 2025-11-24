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
        className="w-full h-14 lg:h-[77px] p-2.5 lg:px-[18px] bg-white rounded-2xl outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 flex justify-center items-center gap-2.5 cursor-pointer"
      >
        <div
          className="flex-1 justify-center text-sm lg:text-lg font-normal font-['Satoshi'] leading-4 lg:leading-[110%]"
          style={{
            color: value ? '#111827' : 'rgba(17, 24, 39, 0.40)'
          }}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </div>

        {/* Icône chevron vers le bas */}
        <div className="h-full px-1 flex items-center">
          <div
            className="relative w-2 h-[5px] transition-transform"
            style={{
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
            }}
          >
            <Image
              src="/images/CaretDown.svg"
              alt="Ouvrir"
              fill
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
