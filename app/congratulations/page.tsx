'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SimpleHeader from '@/components/quiz/SimpleHeader';
import ChoiceCard from '@/components/quiz/ChoiceCard';
import { storage } from '@/lib/storage';
import { fetchProperties, filterByType, formatPrice, formatDeliveryDate, Property } from '@/lib/properties';

export default function CongratulationsPage() {
  const [firstName, setFirstName] = useState('');
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const name = storage.getAnswer(2);
    if (name) {
      setFirstName(name);
    }

    // Récupérer et filtrer les biens
    const loadProperty = async () => {
      try {
        const propertyType = storage.getAnswer(7); // Type de logement choisi
        const allProperties = await fetchProperties();

        if (propertyType) {
          const filtered = filterByType(allProperties, propertyType);
          if (filtered.length > 0) {
            setProperty(filtered[0]); // Premier bien correspondant
            setImageError(false); // Reset l'erreur d'image pour le nouveau bien
          }
        }
      } catch (error) {
        console.error('Erreur lors du chargement des biens:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProperty();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen flex flex-col"
    >
      <SimpleHeader />

      {/* Main content */}
      <main className="flex-1 flex flex-col mx-4 lg:mx-0">
        {/* Conteneur 750px sur desktop */}
        <div className="w-full lg:w-[750px] lg:mt-[100px] mt-[20px] mx-auto flex flex-col">
          {/* Carte principale */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 300, damping: 25 }}
            className="rounded-3xl flex flex-col justify-center items-center gap-5 mb-2.5"
          >
            {/* Image avec ellipse */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 400, damping: 15 }}
              className="w-28 h-20 relative flex items-center justify-center"
            >
              {/* Ellipse de fond - parfaitement ronde avec position ajustable */}
              <div
                className="absolute w-10 h-10 lg:w-10 lg:h-10 top-2 left-7 lg:top-2 lg:left-7 rounded-full"
                style={{ backgroundColor: '#D9D9D9' }}
              />
              {/* Image au-dessus */}
              <div className="w-28 h-20 relative z-10">
                <Image
                  src="/images/image146.svg"
                  alt="Félicitations"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
            <div className="self-stretch flex flex-col justify-start items-center gap-2.5">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="self-stretch text-center justify-center text-gray-900 text-xl font-semibold font-['Bricolage_Grotesque'] leading-5"
              >
                {firstName}, félicitations !
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="self-stretch text-center justify-center text-gray-900 text-base font-normal font-['Satoshi'] leading-5"
              >
                On t&apos;a trouvé la perle rare à Tours
              </motion.div>
            </div>
          </motion.div>

          {/* Skeleton pendant le chargement */}
          {loading && (
            <div className="w-full bg-white rounded-[18px] mb-5 overflow-hidden shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.04)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 animate-pulse">
              {/* Image skeleton */}
              <div className="w-full h-[200px] lg:h-[280px] bg-gray-200" />
              {/* Contenu skeleton */}
              <div className="p-4 flex flex-col gap-3">
                <div className="h-5 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
                <div className="flex justify-between items-center mt-2">
                  <div className="h-6 bg-gray-200 rounded w-24" />
                  <div className="h-4 bg-gray-200 rounded w-28" />
                </div>
              </div>
            </div>
          )}

          {/* Carte du bien immobilier */}
          {!loading && property && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 300, damping: 25 }}
              className="w-full bg-white rounded-[18px] mb-5 overflow-hidden shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.04)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5"
            >
              {/* Image du bien */}
              <div className="relative w-full h-[200px] lg:h-[280px]">
                <Image
                  src={imageError || !property.mainImage ? '/images/a_vendre.png' : property.mainImage}
                  alt={property.programmeName}
                  fill
                  className="object-cover"
                  onError={() => setImageError(true)}
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
            </motion.div>
          )}

          {/* Bouton Voir tous les résultats */}
          {!loading && property && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex justify-center mb-5"
            >
              <Link
                href="/results"
                className="text-[#FE8253] font-medium font-['Satoshi'] hover:underline cursor-pointer"
              >
                Voir tous les résultats →
              </Link>
            </motion.div>
          )}

          {/* Message si aucun bien trouvé */}
          {!loading && !property && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="w-full bg-gray-50 rounded-[18px] p-6 mb-5 text-center"
            >
              <p className="text-gray-600 font-['Satoshi']">
                Aucun bien ne correspond actuellement à ta recherche.
              </p>
            </motion.div>
          )}

          {/* Cartes - exactement comme la page 13 : sans wrapper motion.div */}
          <div className="w-full lg:w-[750px] mb-8 grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-[18px]">
            <ChoiceCard
              id="plan"
              label="Le Plan"
              subtitle="Découvre l'agencement de ton futur chez-toi"
              image="/images/icon158.svg"
              selected={false}
              onClick={() => {}}
              compactImage={true}
              labelClassName="text-center text-[#111827] text-base font-medium leading-[110%] font-['Satoshi']"
              subtitleClassName="text-center text-[#111827] text-[12px] font-normal font-['Satoshi'] leading-[110%]"
              index={0}
            />
            <ChoiceCard
              id="situation"
              label="La Situation"
              subtitle="Vois où tu pourrais vivre demain"
              image="/images/icon157.svg"
              selected={false}
              onClick={() => {}}
              compactImage={true}
              labelClassName="text-center text-[#111827] text-base font-medium leading-[110%] font-['Satoshi']"
              subtitleClassName="text-center text-[#111827] text-[12px] font-normal font-['Satoshi'] leading-[110%]"
              index={1}
            />
            <ChoiceCard
              id="prix"
              label="Le Prix"
              subtitle="Combien ça coûte vraiment"
              image="/images/icon156.svg"
              selected={false}
              onClick={() => {}}
              compactImage={true}
              labelClassName="text-center text-[#111827] text-base font-medium leading-[110%] font-['Satoshi']"
              subtitleClassName="text-center text-[#111827] text-[12px] font-normal font-['Satoshi'] leading-[110%]"
              index={2}
            />
          </div>

          {/* Carte Call-to-action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, type: 'spring', stiffness: 300, damping: 25 }}
            className="bg-[#FFF3ED] rounded-[18px] p-6 mb-6 shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.04)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/[0.04]"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="w-[262px] mx-auto mb-2"
            >
              <h3
                className="text-center"
                style={{
                  fontFamily: 'var(--font-bricolage-grotesque), sans-serif',
                  fontWeight: 600,
                  fontSize: '20px',
                  lineHeight: '100%',
                  letterSpacing: '-0.01em',
                }}
              >
                Tu kiffes ? On t&apos;en montre plus en visio.
              </h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="w-[222px] mx-auto mb-6"
            >
              <p className="text-center text-sm text-gray-600">
                Réserve un créneau gratuit de 30 min avec nos experts
              </p>
            </motion.div>
            <motion.button
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: 'spring', stiffness: 400, damping: 25 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full lg:w-[358px] h-14 rounded-[105px] bg-[#FE8253] hover:bg-[#e67349] text-white font-semibold text-lg flex items-center justify-center cursor-pointer"
              style={{
                fontFamily: 'var(--font-crimson-pro), serif',
                fontSize: '18px',
                lineHeight: '1',
                padding: '0 18px',
                boxShadow: '0 0 8.8px 0 #DEE3E7 inset, 0 -21px 20.8px 0 rgba(236, 72, 9, 0.37) inset, 0 0 80.5px 0 rgba(236, 72, 9, 0.28)',
              }}
            >
              Je réserve mon créneau gratuit
            </motion.button>
          </motion.div>
        </div>
      </main>
    </motion.div>
  );
}
