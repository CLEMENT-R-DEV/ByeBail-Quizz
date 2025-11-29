'use client';

import { useState, useCallback } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence, PanInfo } from 'framer-motion';
import Image from 'next/image';
import { Property, formatPrice, formatDeliveryDate } from '@/lib/properties';

const SWIPE_THRESHOLD = 50;
const VELOCITY_THRESHOLD = 500;

interface SwipeableCardsProps {
  properties: Property[];
}

function PropertyCard({ property, imageError, onImageError }: {
  property: Property;
  imageError: boolean;
  onImageError: () => void;
}) {
  return (
    <div className="w-full h-full bg-white rounded-[18px] overflow-hidden shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5">
      {/* Image du bien */}
      <div className="relative w-full h-[180px] lg:h-[260px]">
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
  const [exitDirection, setExitDirection] = useState<number>(0);

  // Motion values pour le drag
  const x = useMotionValue(0);

  // Transformations basées sur la position x
  const rotate = useTransform(x, [-300, 0, 300], [-25, 0, 25]);
  const cardOpacity = useTransform(x, [-300, -150, 0, 150, 300], [0.5, 0.8, 1, 0.8, 0.5]);

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
    const swipeThresholdMet = Math.abs(info.offset.x) > SWIPE_THRESHOLD;
    const velocityThresholdMet = Math.abs(info.velocity.x) > VELOCITY_THRESHOLD;

    if (swipeThresholdMet || velocityThresholdMet) {
      const direction = info.offset.x > 0 ? 1 : -1;
      setExitDirection(direction);

      // Changer de carte après l'animation
      setTimeout(() => {
        if (direction > 0) {
          setCurrentIndex((prev) => (prev - 1 + properties.length) % properties.length);
        } else {
          setCurrentIndex((prev) => (prev + 1) % properties.length);
        }
        x.set(0);
        setExitDirection(0);
      }, 200);
    }
  };

  // Obtenir les cartes visibles (jusqu'à 3)
  const getVisibleCards = () => {
    const cards = [];
    const numCards = Math.min(3, properties.length);

    for (let i = 0; i < numCards; i++) {
      cards.push({
        property: properties[(currentIndex + i) % properties.length],
        stackIndex: i
      });
    }
    return cards;
  };

  const visibleCards = getVisibleCards();

  return (
    <div className="w-full mb-5">
      {/* Container des cartes stackées */}
      <div className="relative w-full h-[320px] lg:h-[400px]" style={{ perspective: '1000px' }}>
        <AnimatePresence mode="popLayout">
          {/* Rendre les cartes de l'arrière vers l'avant */}
          {[...visibleCards].reverse().map(({ property, stackIndex }) => {
            const isTopCard = stackIndex === 0;

            // Styles pour chaque position dans la stack
            const stackStyles = {
              0: { scale: 1, y: 0, rotate: 0, zIndex: 30 },
              1: { scale: 0.95, y: 20, rotate: -3, zIndex: 20 },
              2: { scale: 0.90, y: 40, rotate: 3, zIndex: 10 },
            };

            const style = stackStyles[stackIndex as keyof typeof stackStyles] || stackStyles[2];

            return (
              <motion.div
                key={`${property.id}-${currentIndex}`}
                className="absolute inset-0 touch-none"
                initial={{ scale: 0.9, opacity: 0, y: 50 }}
                animate={{
                  scale: style.scale,
                  y: style.y,
                  rotate: isTopCard ? 0 : style.rotate,
                  zIndex: style.zIndex,
                  opacity: 1,
                }}
                exit={{
                  x: exitDirection * 400,
                  opacity: 0,
                  rotate: exitDirection * 30,
                  transition: { duration: 0.25, ease: 'easeOut' }
                }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 30,
                  mass: 0.8,
                }}
                style={{
                  x: isTopCard ? x : 0,
                  rotate: isTopCard ? rotate : style.rotate,
                  opacity: isTopCard ? cardOpacity : 1 - (stackIndex * 0.15),
                  transformOrigin: 'center bottom',
                  cursor: isTopCard ? 'grab' : 'default',
                }}
                drag={isTopCard ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.9}
                onDragEnd={isTopCard ? handleDragEnd : undefined}
                whileDrag={{ cursor: 'grabbing', scale: 1.02 }}
              >
                <PropertyCard
                  property={property}
                  imageError={imageErrors[property.id] || false}
                  onImageError={() => setImageErrors(prev => ({ ...prev, [property.id]: true }))}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Indicateurs de pagination */}
      <div className="flex justify-center gap-2 mt-6">
        {properties.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? 'bg-[#FE8253] w-6'
                : 'bg-gray-300 w-2 hover:bg-gray-400'
            }`}
            aria-label={`Voir le bien ${idx + 1}`}
          />
        ))}
      </div>

      {/* Instruction de swipe */}
      <p className="text-center text-sm text-gray-400 mt-3 font-['Satoshi']">
        ← Swipe pour découvrir →
      </p>
    </div>
  );
}
