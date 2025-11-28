export interface Property {
  id: string;
  programmeId: string;
  programmeName: string;
  city: string;
  address: string;
  type: string;
  surface: number;
  price: number;
  monthlyPayment: string;
  deliveryDate: string;
  mainImage: string;
}

// Utilise la route API interne pour éviter les problèmes CORS
export async function fetchProperties(): Promise<Property[]> {
  const response = await fetch('/api/properties');
  if (!response.ok) {
    throw new Error('Failed to fetch properties');
  }
  return response.json();
}

export function filterByType(properties: Property[], quizType: string): Property[] {
  const typeMap: Record<string, string[]> = {
    'studio': ['Studio'],
    't1': ['T1'],
    't2': ['T2'],
    't3': ['T3'],
    't4+': ['T4', 'T5', 'T6', 'T7'],
  };

  const allowedTypes = typeMap[quizType.toLowerCase()] || [];
  return properties.filter(p => allowedTypes.includes(p.type));
}

// Mapping ville du quiz vers ville de l'API
const cityMap: Record<string, string[]> = {
  'tours': ['Tours', 'TOURS'],
  'bourg-en-bresse': ['Bourg-en-Bresse', 'BOURG-EN-BRESSE', 'Bourg en Bresse'],
  'autre': [], // Autre ville = on ne filtre pas par ville
};

// Filtre par ville
export function filterByCity(properties: Property[], quizCity: string): Property[] {
  if (!quizCity || quizCity.toLowerCase() === 'autre') {
    return properties; // Pas de filtre si "autre" ou vide
  }

  const allowedCities = cityMap[quizCity.toLowerCase()] || [];
  if (allowedCities.length === 0) return properties;

  return properties.filter(p =>
    allowedCities.some(city =>
      p.city.toLowerCase().includes(city.toLowerCase())
    )
  );
}

// Système de matching intelligent avec scoring et fallback
export interface MatchResult {
  property: Property;
  score: number;
  matchType: 'exact' | 'type_only' | 'city_only' | 'fallback';
}

export function findBestMatches(
  properties: Property[],
  quizCity: string | undefined,
  quizType: string | undefined
): MatchResult[] {
  const typeMap: Record<string, string[]> = {
    'studio': ['Studio'],
    't1': ['T1'],
    't2': ['T2'],
    't3': ['T3'],
    't4+': ['T4', 'T5', 'T6', 'T7'],
  };

  const typeKey = quizType?.toLowerCase() || '';
  const cityKey = quizCity?.toLowerCase() || '';
  const allowedTypes = typeKey ? (typeMap[typeKey] || []) : [];
  const allowedCities = cityKey ? (cityMap[cityKey] || []) : [];
  const isAutreVille = !quizCity || quizCity.toLowerCase() === 'autre';

  const results: MatchResult[] = properties.map(property => {
    const typeMatch = allowedTypes.includes(property.type);
    const cityMatch = isAutreVille || allowedCities.some(city =>
      property.city.toLowerCase().includes(city.toLowerCase())
    );

    let score = 0;
    let matchType: MatchResult['matchType'] = 'fallback';

    if (typeMatch && cityMatch) {
      score = 100;
      matchType = 'exact';
    } else if (typeMatch) {
      score = 70;
      matchType = 'type_only';
    } else if (cityMatch) {
      score = 50;
      matchType = 'city_only';
    } else {
      score = 10;
      matchType = 'fallback';
    }

    return { property, score, matchType };
  });

  // Trier par score décroissant, puis par prix croissant
  return results.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.property.price - b.property.price;
  });
}

// Fonction simplifiée pour obtenir le meilleur bien
export function findBestProperty(
  properties: Property[],
  quizCity: string | undefined,
  quizType: string | undefined
): Property | null {
  console.log('🔍 findBestProperty:', { quizCity, quizType, propertiesCount: properties.length });

  const matches = findBestMatches(properties, quizCity, quizType);

  console.log('📊 Top matches:', matches.slice(0, 3).map(m => ({
    name: m.property.programmeName,
    city: m.property.city,
    type: m.property.type,
    score: m.score,
    matchType: m.matchType
  })));

  // Si des matches existent, retourner le meilleur
  if (matches.length > 0) {
    return matches[0].property;
  }

  // Fallback ultime : premier bien disponible
  console.log('⚠️ Aucun match, fallback sur le premier bien');
  return properties.length > 0 ? properties[0] : null;
}

// Fonction pour obtenir tous les biens triés par pertinence
export function getSortedProperties(
  properties: Property[],
  quizCity: string | undefined,
  quizType: string | undefined
): Property[] {
  const matches = findBestMatches(properties, quizCity, quizType);
  return matches.map(m => m.property);
}

export function formatPrice(price: number): string {
  if (price === 0) return 'Prix sur demande';
  return new Intl.NumberFormat('fr-FR').format(price) + ' €';
}

export function formatDeliveryDate(date: string): string {
  // Format: "2026T2" -> "T2 2026"
  const match = date.match(/(\d{4})T(\d)/);
  if (match) {
    return `T${match[2]} ${match[1]}`;
  }
  return date;
}
