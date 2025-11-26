'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SimpleHeader from '@/components/quiz/SimpleHeader';
import { storage } from '@/lib/storage';
import { fetchProperties, filterByType, formatPrice, formatDeliveryDate, Property } from '@/lib/properties';

const ITEMS_PER_PAGE = 10;

// Composant carte de bien avec gestion d'erreur d'image
function PropertyCard({ property, index }: { property: Property; index: number }) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, type: 'spring', stiffness: 300, damping: 25 }}
      className="w-full bg-white rounded-[18px] overflow-hidden shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.04)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5"
    >
      {/* Image du bien */}
      <div className="relative w-full h-[180px] lg:h-[200px]">
        <Image
          src={imageError || !property.mainImage ? '/images/pasdimage.webp' : property.mainImage}
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
  );
}

export default function ResultsPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [propertyType, setPropertyType] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const loadProperties = async () => {
      try {
        const type = storage.getAnswer(7); // Type de logement choisi
        if (type) {
          setPropertyType(type);
        }
        const allProperties = await fetchProperties();

        if (type) {
          const filtered = filterByType(allProperties, type);
          setProperties(filtered);
        } else {
          setProperties(allProperties);
        }
      } catch (error) {
        console.error('Erreur lors du chargement des biens:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProperties();
  }, []);

  // Pagination
  const totalPages = Math.ceil(properties.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProperties = properties.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
          {/* Titre */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 300, damping: 25 }}
            className="mb-6"
          >
            <h1 className="text-2xl font-semibold text-gray-900 font-['Bricolage_Grotesque'] text-center">
              Tous les résultats
            </h1>
            {propertyType && (
              <p className="text-center text-gray-600 font-['Satoshi'] mt-2">
                {properties.length} bien{properties.length > 1 ? 's' : ''} trouvé{properties.length > 1 ? 's' : ''} en {propertyType.toUpperCase()}
              </p>
            )}
          </motion.div>

          {/* Grille de biens */}
          {!loading && properties.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
              {paginatedProperties.map((property, index) => (
                <PropertyCard key={property.id} property={property} index={index} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {!loading && properties.length > ITEMS_PER_PAGE && (
            <div className="flex justify-center items-center gap-4 mb-8">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 cursor-pointer font-['Satoshi']"
              >
                ← Précédent
              </button>
              <span className="text-gray-600 font-['Satoshi']">
                Page {currentPage} sur {totalPages}
              </span>
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 cursor-pointer font-['Satoshi']"
              >
                Suivant →
              </button>
            </div>
          )}

          {/* Message si aucun bien trouvé */}
          {!loading && properties.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="w-full bg-gray-50 rounded-[18px] p-6 mb-5 text-center"
            >
              <p className="text-gray-600 font-['Satoshi']">
                Aucun bien ne correspond actuellement à ta recherche.
              </p>
            </motion.div>
          )}

          {/* Loading */}
          {loading && (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#FE8253]"></div>
            </div>
          )}
        </div>
      </main>
    </motion.div>
  );
}
