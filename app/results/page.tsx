'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ContinueButton from '@/components/quiz/ContinueButton';
import ResponsiveContainer from '@/components/layout/ResponsiveContainer';
import { storage } from '@/lib/storage';
import { Property, fetchProperties, filterByType, formatPrice } from '@/lib/properties';

export default function ResultsPage() {
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [leadData, setLeadData] = useState<{ prenom: string; ville: string; loyer: number; type: string }>({
    prenom: '',
    ville: '',
    loyer: 0,
    type: ''
  });

  useEffect(() => {
    async function loadProperty() {
      try {
        // Récupérer les données du lead depuis sessionStorage
        const answer1 = storage.getAnswer(1);
        const answer3 = storage.getAnswer(3);
        const answer5 = storage.getAnswer(5);

        let prenom = '';
        let ville = '';
        let loyer = 0;
        let typeSouhaite = '';

        // Parser Q1 (nom, prenom, email)
        if (answer1) {
          try {
            const data = JSON.parse(answer1);
            prenom = data.prenom || '';
          } catch {
            console.error('Erreur parsing Q1');
          }
        }

        // Parser Q3 (ville + loyer)
        if (answer3) {
          try {
            const data = JSON.parse(answer3);
            ville = data.ville || '';
            loyer = parseFloat(data.loyer) || 0;
          } catch {
            console.error('Erreur parsing Q3');
          }
        }

        // Q5 = type souhaité (studio, t2, t3, t4+)
        if (answer5) {
          typeSouhaite = answer5;
        }

        setLeadData({ prenom, ville, loyer, type: typeSouhaite });

        // Fetch tous les biens depuis l'API
        const allProperties = await fetchProperties();

        // Filtrer par type souhaité
        let filtered = typeSouhaite ? filterByType(allProperties, typeSouhaite) : allProperties;

        // Filtrer par ville (insensible à la casse, recherche partielle)
        if (ville) {
          const villeNormalized = ville.toLowerCase().trim();
          const filteredByCity = filtered.filter(p =>
            p.city.toLowerCase().includes(villeNormalized) ||
            villeNormalized.includes(p.city.toLowerCase())
          );

          // Si on a des résultats avec la ville, on les utilise
          if (filteredByCity.length > 0) {
            filtered = filteredByCity;
          }
          // Sinon on garde les résultats filtrés par type uniquement
        }

        // Si on a un loyer, trier par prix le plus proche du budget
        // Budget estimé = loyer mensuel → mensualité crédit similaire
        if (loyer > 0 && filtered.length > 1) {
          // Trier par mensualité la plus proche du loyer actuel
          filtered.sort((a, b) => {
            const mensualiteA = parseFloat(a.monthlyPayment.replace(/[^\d]/g, '')) || 0;
            const mensualiteB = parseFloat(b.monthlyPayment.replace(/[^\d]/g, '')) || 0;
            return Math.abs(mensualiteA - loyer) - Math.abs(mensualiteB - loyer);
          });
        }

        // Prendre le premier bien qui correspond
        if (filtered.length > 0) {
          setProperty(filtered[0]);
        } else {
          // Si aucun bien trouvé, prendre le premier de la liste complète
          setProperty(allProperties[0] || null);
        }
      } catch (error) {
        console.error('Erreur lors du chargement des biens:', error);
      } finally {
        setLoading(false);
      }
    }

    loadProperty();
  }, []);

  const handleReserve = () => {
    window.open('https://calendly.com/byebail', '_blank');
  };

  // Affichage loading
  if (loading) {
    return (
      <ResponsiveContainer className="items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-8 h-8 border-3 border-[#D0805B] border-t-transparent rounded-full"
        />
      </ResponsiveContainer>
    );
  }

  // Si aucun bien trouvé
  if (!property) {
    return (
      <ResponsiveContainer className="items-center justify-center px-4">
        <Image
          src="/images/byebail-icon-orange.svg"
          alt="ByeBail"
          width={36}
          height={40}
          className="mb-6"
        />
        <h1
          style={{
            fontFamily: 'var(--font-inter-tight)',
            fontSize: '24px',
            fontWeight: 600,
            color: '#2D2A26',
            textAlign: 'center',
          }}
        >
          Aucun bien trouvé pour le moment
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-inter-tight)',
            fontSize: '16px',
            color: '#666',
            textAlign: 'center',
            marginTop: '12px',
          }}
        >
          Nos conseillers peuvent t&apos;aider à trouver ton futur appartement.
        </p>
        <div className="mt-8 w-full max-w-[320px]">
          <ContinueButton
            onClick={handleReserve}
            label="Réserver ma visio"
          />
        </div>
      </ResponsiveContainer>
    );
  }

  // Générer le sous-titre dynamique
  const generateSubtitle = () => {
    const parts = [];
    parts.push(property.type);
    if (property.surface > 0) {
      parts.push(`${property.surface} m²`);
    }
    if (leadData.loyer > 0) {
      parts.push('pour le prix de ton loyer actuel');
    }
    return parts.join(', ') + '.';
  };

  return (
    <ResponsiveContainer>
      {/* Contenu principal */}
      <div className="flex-1 flex flex-col px-4 py-6 relative">
        {/* Logo ByeBail */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col items-start mb-10 relative z-10"
        >
          <Image
            src="/images/byebail-icon-orange.svg"
            alt="ByeBail"
            width={36}
            height={40}
          />
        </motion.div>

        {/* Titre principal */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-2 relative z-10"
        >
          <h1
            style={{
              fontFamily: 'var(--font-inter-tight)',
              fontSize: '28px',
              fontWeight: 600,
              lineHeight: '110%',
              letterSpacing: '-0.84px',
              color: '#2D2A26',
            }}
          >
            Bonne nouvelle {leadData.prenom ? leadData.prenom : ''} : on a trouvé ton appart{leadData.ville ? ` à ${leadData.ville}` : ''}.
          </h1>
        </motion.div>

        {/* Sous-titre dynamique */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-3 relative z-10"
        >
          <p
            style={{
              fontFamily: 'var(--font-inter-tight)',
              fontSize: '24px',
              fontWeight: 400,
              lineHeight: '110%',
              letterSpacing: '-0.72px',
              color: '#2D2A26',
            }}
          >
            {generateSubtitle()}
          </p>
        </motion.div>

        {/* Badge "Tu veux le voir ?" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-4 relative z-10"
        >
          <div
            className="inline-flex px-4 py-2 rounded-full"
            style={{
              background: 'linear-gradient(173deg, #F6B292 -0.82%, #D0805B 52.13%)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-inter-tight)',
                fontSize: '12px',
                fontWeight: 500,
                lineHeight: '100%',
                letterSpacing: '-0.24px',
                color: '#FFE6DA',
              }}
            >
              Tu veux le voir ?
            </span>
          </div>
        </motion.div>

        {/* Texte visio */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-4 relative z-10"
        >
          <p
            style={{
              fontFamily: 'var(--font-inter-tight)',
              fontSize: '24px',
              fontWeight: 400,
              lineHeight: '110%',
              letterSpacing: '-0.72px',
              color: '#2D2A26',
            }}
          >
            Réserve ta visio gratuite avec un conseiller Byebail.
          </p>
        </motion.div>

        {/* Image de l'appartement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, type: 'spring', stiffness: 300, damping: 25 }}
          className="absolute inset-x-4 bottom-26 top-85 rounded-2xl overflow-hidden z-0"
        >
          {property.mainImage ? (
            <img
              src={property.mainImage}
              alt={`${property.type} - ${property.surface}m²`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <Image
              src="/images/appart2.svg"
              alt="Appartement"
              fill
              className="object-cover"
              priority
            />
          )}

          {/* Badges d'informations en bas de l'image */}
          <div className="absolute bottom-3 left-4 right-4 flex gap-2">
            {/* Badge Type */}
            <div
              className="flex-1 px-2 py-2.5 rounded-2xl inline-flex flex-col justify-start items-start gap-1 overflow-hidden backdrop-blur-md"
              style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.8)',
                borderLeft: '1px solid rgba(255, 255, 255, 0.6)',
                borderRight: '1px solid rgba(200, 200, 200, 0.3)',
                borderBottom: '1px solid rgba(200, 200, 200, 0.3)',
              }}
            >
              <div className="text-white text-base font-normal leading-5" style={{ fontFamily: 'var(--font-inter-tight)' }}>
                Type
              </div>
              <div className="text-white text-sm font-light leading-4" style={{ fontFamily: 'var(--font-inter-tight)' }}>
                {property.type}
              </div>
            </div>

            {/* Badge Surface */}
            <div
              className="flex-1 px-2 py-2.5 rounded-2xl inline-flex flex-col justify-start items-start gap-1 overflow-hidden backdrop-blur-md"
              style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.8)',
                borderLeft: '1px solid rgba(255, 255, 255, 0.6)',
                borderRight: '1px solid rgba(200, 200, 200, 0.3)',
                borderBottom: '1px solid rgba(200, 200, 200, 0.3)',
              }}
            >
              <div className="text-white text-base font-normal leading-5" style={{ fontFamily: 'var(--font-inter-tight)' }}>
                M²
              </div>
              <div className="text-white text-sm font-light leading-4" style={{ fontFamily: 'var(--font-inter-tight)' }}>
                {property.surface > 0 ? property.surface : '—'}
              </div>
            </div>

            {/* Badge Prix */}
            <div
              className="flex-1 px-2 py-2.5 rounded-2xl inline-flex flex-col justify-start items-start gap-1 overflow-hidden backdrop-blur-md"
              style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.8)',
                borderLeft: '1px solid rgba(255, 255, 255, 0.6)',
                borderRight: '1px solid rgba(200, 200, 200, 0.3)',
                borderBottom: '1px solid rgba(200, 200, 200, 0.3)',
              }}
            >
              <div className="text-white text-base font-normal leading-5" style={{ fontFamily: 'var(--font-inter-tight)' }}>
                Prix
              </div>
              <div className="text-white text-sm font-light leading-4" style={{ fontFamily: 'var(--font-inter-tight)' }}>
                {formatPrice(property.price)}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Bouton Réserver */}
        <ContinueButton
          onClick={handleReserve}
          label="Réserver ma visio"
        />
      </div>
    </ResponsiveContainer>
  );
}
