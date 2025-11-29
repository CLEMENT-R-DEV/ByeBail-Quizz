'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Property, formatPrice, formatDeliveryDate } from '@/lib/properties';

interface SwipeableCardsProps {
  properties: Property[];
}

function PropertyCard({ property, imageError, onImageError }: {
  property: Property;
  imageError: boolean;
  onImageError: () => void;
}) {
  return (
    <div className="w-full bg-white rounded-[18px] overflow-hidden shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5">
      {/* Image du bien */}
      <div className="relative w-full h-[200px] lg:h-[280px]">
        <Image
          src={imageError || !property.mainImage ? '/images/pasdimage.webp' : property.mainImage}
          alt={property.programmeName}
          fill
          className="object-cover"
          onError={onImageError}
        />
      </div>
      {/* Infos du bien */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-900 font-['Bricolage_Grotesque'] truncate">
          {property.programmeName}
        </h3>
        <p className="text-sm text-gray-600 font-['Satoshi']">
          {property.type} • {property.surface} m² • {property.city}
        </p>
        <div className="flex justify-between items-center mt-1">
          <span className="text-xl font-bold text-[#FE8253] font-['Bricolage_Grotesque']">
            {formatPrice(property.price)}
          </span>
          <span className="text-xs text-gray-500 font-['Satoshi']">
            Livraison {formatDeliveryDate(property.deliveryDate)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function SwipeableCards({ properties }: SwipeableCardsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const scrollRef = useRef<HTMLDivElement>(null);

  if (properties.length === 0) return null;

  // Si un seul bien, pas besoin de carousel
  if (properties.length === 1) {
    return (
      <div className="w-full mb-5">
        <PropertyCard
          property={properties[0]}
          imageError={imageErrors[properties[0].id] || false}
          onImageError={() => setImageErrors(prev => ({ ...prev, [properties[0].id]: true }))}
        />
      </div>
    );
  }

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const cardWidth = scrollRef.current.offsetWidth;
    const newIndex = Math.round(scrollLeft / cardWidth);
    if (newIndex !== currentIndex && newIndex >= 0 && newIndex < properties.length) {
      setCurrentIndex(newIndex);
    }
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.offsetWidth;
    scrollRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
  };

  return (
    <div className="w-full mb-5">
      {/* Carousel container avec scroll-snap natif */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {properties.map((property) => (
          <div
            key={property.id}
            className="flex-shrink-0 w-full snap-center px-1"
          >
            <PropertyCard
              property={property}
              imageError={imageErrors[property.id] || false}
              onImageError={() => setImageErrors(prev => ({ ...prev, [property.id]: true }))}
            />
          </div>
        ))}
      </div>

      {/* Indicateurs dots */}
      <div className="flex justify-center gap-2 mt-4">
        {properties.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? 'bg-[#FE8253] w-6'
                : 'bg-gray-300 w-2 hover:bg-gray-400'
            }`}
            aria-label={`Voir le bien ${idx + 1}`}
          />
        ))}
      </div>

      {/* Instruction */}
      <p className="text-center text-sm text-gray-400 mt-2 font-['Satoshi']">
        ← Swipe pour découvrir →
      </p>
    </div>
  );
}
