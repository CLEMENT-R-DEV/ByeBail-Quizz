'use client';

import { useRef, useState, useEffect, useCallback } from 'react';

interface CitySearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

// Villes recommandées (toujours affichées en premier)
const FEATURED_CITIES = [
  { id: 'tours', label: 'Tours', featured: true },
  { id: 'bourg-en-bresse', label: 'Bourg-en-Bresse', featured: true },
];

interface City {
  nom: string;
  code?: string;
}

export default function CitySearchInput({
  value,
  onChange,
  placeholder = 'Rechercher une ville...'
}: CitySearchInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(value);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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

  // Sync searchTerm with external value
  useEffect(() => {
    setSearchTerm(value);
  }, [value]);

  // Debounced search
  const searchCities = useCallback(async (query: string) => {
    if (query.length < 2) {
      setSuggestions([]);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        `https://geo.api.gouv.fr/communes?nom=${encodeURIComponent(query)}&fields=nom&boost=population&limit=10`
      );
      const data: City[] = await response.json();

      // Filtrer les villes recommandées pour éviter les doublons
      const featuredLabels = FEATURED_CITIES.map(c => c.label.toLowerCase());
      const filteredSuggestions = data
        .map(city => city.nom)
        .filter(name => !featuredLabels.includes(name.toLowerCase()));

      setSuggestions(filteredSuggestions);
    } catch (error) {
      console.error('Erreur lors de la recherche de villes:', error);
      setSuggestions([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Debounce effect
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm && isOpen) {
        searchCities(searchTerm);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, isOpen, searchCities]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchTerm(newValue);
    onChange(newValue);
    setIsOpen(true);
    setHighlightedIndex(-1);
  };

  const handleFocus = () => {
    setIsOpen(true);
  };

  const handleSelect = (cityName: string) => {
    setSearchTerm(cityName);
    onChange(cityName);
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  // Filtrer les villes recommandées selon la recherche
  const filteredFeatured = FEATURED_CITIES.filter(city =>
    city.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Toutes les options (featured + suggestions)
  const allOptions = [
    ...filteredFeatured.map(c => ({ label: c.label, featured: true })),
    ...suggestions.map(s => ({ label: s, featured: false }))
  ];

  // Gestion clavier
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'Enter') {
        setIsOpen(true);
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex(prev =>
          prev < allOptions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex(prev => (prev > 0 ? prev - 1 : -1));
        break;
      case 'Enter':
        e.preventDefault();
        if (highlightedIndex >= 0 && highlightedIndex < allOptions.length) {
          handleSelect(allOptions[highlightedIndex].label);
        } else if (searchTerm.trim()) {
          // Valider la saisie libre
          onChange(searchTerm.trim());
          setIsOpen(false);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setHighlightedIndex(-1);
        break;
    }
  };

  const showFeaturedSection = filteredFeatured.length > 0;
  const showSuggestionsSection = suggestions.length > 0;

  return (
    <div ref={containerRef} className="relative w-full lg:w-[388px]">
      {/* Input de recherche */}
      <div
        className="w-full h-[72px] px-4 rounded-[18px] border border-white/10 flex items-center gap-2.5 backdrop-blur-md"
        style={{ background: 'rgba(250, 245, 241, 0.85)' }}
      >
        {/* Icône de recherche */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0"
        >
          <path
            d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
            stroke="#7A7572"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <input
          ref={inputRef}
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none font-medium"
          style={{
            fontFamily: 'var(--font-inter-tight)',
            fontSize: '18px',
            fontWeight: 500,
            lineHeight: '110%',
            color: '#1C1917',
          }}
          autoComplete="off"
        />

        {/* Loader */}
        {isLoading && (
          <div className="w-5 h-5 border-2 border-gray-300 border-t-orange-500 rounded-full animate-spin" />
        )}
      </div>

      {/* Dropdown */}
      {isOpen && (showFeaturedSection || showSuggestionsSection || searchTerm.length >= 2) && (
        <div className="absolute z-50 w-full mt-2 bg-white rounded-2xl outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 shadow-lg max-h-[300px] overflow-y-auto">

          {/* Section villes recommandées */}
          {showFeaturedSection && (
            <>
              <div
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider"
                style={{
                  fontFamily: 'var(--font-inter-tight)',
                  color: '#7A7572',
                  backgroundColor: 'rgba(254, 130, 83, 0.08)',
                }}
              >
                On y est !
              </div>
              {filteredFeatured.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleSelect(city.label)}
                  className={`p-3 lg:p-4 cursor-pointer flex items-center gap-2 ${
                    highlightedIndex === index ? 'bg-orange-50' : 'hover:bg-gray-50'
                  }`}
                  style={{
                    fontFamily: 'var(--font-inter-tight)',
                  }}
                >
                  {/* Étoile orange */}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="#FE8253"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" />
                  </svg>
                  <span className="text-sm lg:text-lg font-medium text-gray-900">
                    {city.label}
                  </span>
                </div>
              ))}
            </>
          )}

          {/* Section suggestions API */}
          {showSuggestionsSection && (
            <>
              <div
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider border-t border-gray-100"
                style={{
                  fontFamily: 'var(--font-inter-tight)',
                  color: '#7A7572',
                }}
              >
                Suggestions
              </div>
              {suggestions.map((cityName, index) => {
                const actualIndex = filteredFeatured.length + index;
                return (
                  <div
                    key={cityName}
                    onClick={() => handleSelect(cityName)}
                    className={`p-3 lg:p-4 cursor-pointer text-sm lg:text-lg font-normal text-gray-900 ${
                      highlightedIndex === actualIndex ? 'bg-gray-100' : 'hover:bg-gray-50'
                    } last:rounded-b-2xl`}
                    style={{
                      fontFamily: 'var(--font-inter-tight)',
                    }}
                  >
                    {cityName}
                  </div>
                );
              })}
            </>
          )}

          {/* Message si pas de résultats */}
          {searchTerm.length >= 2 && !showFeaturedSection && !showSuggestionsSection && !isLoading && (
            <div
              className="p-4 text-sm text-gray-500 text-center"
              style={{ fontFamily: 'var(--font-inter-tight)' }}
            >
              Aucune ville trouvée. Appuyez sur Entrée pour valider &quot;{searchTerm}&quot;.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
