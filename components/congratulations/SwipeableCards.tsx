'use client';

import { useState } from 'react';
import { motion, PanInfo, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Property, formatPrice, formatDeliveryDate } from '@/lib/properties';

const SWIPE_THRESHOLD = 100;

interface SwipeableCardsProps {
  properties: Property[];
}

function PropertyCard({ property, imageError, onImageError }: {
  property: Property;
  imageError: boolean;
  onImageError: () => void;
}) {
  return (
    <div className="w-full bg-white rounded-[18px] overflow-hidden shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.04)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5">
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
        <h3 className="text-lg font-semibold text-gray-900 font-['Bricolage_Grotesque']">
          {property.programmeName}
        </h3>
        <p className="text-sm text-gray-600 font-['Satoshi']">
          {property.type} • {property.surface} m² • {property.city}
        </p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-xl font-bold text-[#FE8253] font-['Bricolage_Grotesque']">
            {formatPrice(property.price)}
          </span>
          <span className="text-sm text-gray-500 font-['Satoshi']">
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
  const [isDragging, setIsDragging] = useState(false);

  // Si moins de 1 bien, ne rien afficher
  if (properties.length === 0) return null;

  // Si un seul bien, afficher sans swipe
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

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);

    if (Math.abs(info.offset.x) > SWIPE_THRESHOLD) {
      // Swipe détecté - direction détermine le sens
      if (info.offset.x > 0) {
        // Swipe droite - carte précédente
        setCurrentIndex((prev) => (prev - 1 + properties.length) % properties.length);
      } else {
        // Swipe gauche - carte suivante
        setCurrentIndex((prev) => (prev + 1) % properties.length);
      }
    }
  };

  // Obtenir les cartes visibles (jusqu'à 3)
  const getVisibleCards = () => {
    const cards = [];
    const numCards = Math.min(3, properties.length);

    for (let i = 0; i < numCards; i++) {
      cards.push({
        property: properties[(currentIndex + i) % properties.length],
        index: i
      });
    }
    return cards;
  };

  const cardStyles = [
    { rotate: 0, scale: 1, y: 0, zIndex: 30 },        // Devant
    { rotate: -3, scale: 0.95, y: 15, zIndex: 20 },   // Milieu
    { rotate: 3, scale: 0.90, y: 30, zIndex: 10 },    // Arrière
  ];

  const visibleCards = getVisibleCards();

  return (
    <div className="w-full mb-5">
      {/* Container des cartes stackées */}
      <div className="relative w-full h-[340px] lg:h-[420px]">
        {/* Rendre les cartes de l'arrière vers l'avant */}
        {[...visibleCards].reverse().map(({ property, index }) => {
          const style = cardStyles[index] || cardStyles[2];
          const isTopCard = index === 0;

          return (
            <motion.div
              key={`${property.id}-${currentIndex}-${index}`}
              className="absolute inset-0 cursor-grab active:cursor-grabbing"
              initial={false}
              animate={{
                rotate: style.rotate,
                scale: style.scale,
                y: style.y,
                zIndex: style.zIndex,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 25
              }}
              drag={isTopCard ? 'x' : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.7}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={handleDragEnd}
              whileDrag={{ scale: 1.02, rotate: 0 }}
              style={{
                transformOrigin: 'center bottom',
              }}
            >
              <PropertyCard
                property={property}
                imageError={imageErrors[property.id] || false}
                onImageError={() => setImageErrors(prev => ({ ...prev, [property.id]: true }))}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Indicateurs de pagination */}
      <div className="flex justify-center gap-2 mt-4">
        {properties.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? 'bg-[#FE8253] w-4'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Voir le bien ${idx + 1}`}
          />
        ))}
      </div>

      {/* Instruction de swipe */}
      <p className="text-center text-sm text-gray-400 mt-2 font-['Satoshi']">
        Swipe pour voir les autres biens
      </p>
    </div>
  );
}
