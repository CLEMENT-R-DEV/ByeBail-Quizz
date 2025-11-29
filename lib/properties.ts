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
  matchType: 'exact' | 'type_budget' | 'city_budget' | 'type_city' | 'budget_only' | 'type_only' | 'city_only' | 'fallback';
}

// Vérifie si un bien est dans le budget (±30% du loyer actuel)
function isInBudget(property: Property, rent: number): boolean {
  if (!rent || rent <= 0) return true; // Si pas de loyer renseigné, on ne filtre pas

  // Utiliser monthlyPayment si disponible, sinon estimer depuis le prix
  const monthlyPayment = property.monthlyPayment && property.monthlyPayment !== ''
    ? parseFloat(property.monthlyPayment)
    : property.price / 240; // Estimation sur ~20 ans

  const minBudget = rent * 0.7;  // -30%
  const maxBudget = rent * 1.3;  // +30%

  return monthlyPayment >= minBudget && monthlyPayment <= maxBudget;
}

export function findBestMatches(
  properties: Property[],
  quizCity: string | undefined,
  quizType: string | undefined,
  quizRent: string | undefined
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
  const rent = quizRent ? parseFloat(quizRent) : 0;
  const allowedTypes = typeKey ? (typeMap[typeKey] || []) : [];
  const allowedCities = cityKey ? (cityMap[cityKey] || []) : [];
  const isAutreVille = !quizCity || quizCity.toLowerCase() === 'autre';

  const results: MatchResult[] = properties.map(property => {
    const typeMatch = allowedTypes.length > 0 && allowedTypes.includes(property.type);
    const cityMatch = isAutreVille || allowedCities.some(city =>
      property.city.toLowerCase().includes(city.toLowerCase())
    );
    const budgetMatch = isInBudget(property, rent);

    let score = 0;
    let matchType: MatchResult['matchType'] = 'fallback';

    // Scoring avec 3 critères : ville, type, budget
    if (typeMatch && cityMatch && budgetMatch) {
      score = 100;
      matchType = 'exact';
    } else if (typeMatch && budgetMatch) {
      score = 80;
      matchType = 'type_budget';
    } else if (cityMatch && budgetMatch) {
      score = 70;
      matchType = 'city_budget';
    } else if (typeMatch && cityMatch) {
      score = 60;
      matchType = 'type_city';
    } else if (budgetMatch) {
      score = 50;
      matchType = 'budget_only';
    } else if (typeMatch) {
      score = 40;
      matchType = 'type_only';
    } else if (cityMatch) {
      score = 30;
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
  quizType: string | undefined,
  quizRent?: string | undefined
): Property | null {
  console.log('🔍 findBestProperty:', { quizCity, quizType, quizRent, propertiesCount: properties.length });

  const matches = findBestMatches(properties, quizCity, quizType, quizRent);

  console.log('📊 Top matches:', matches.slice(0, 3).map(m => ({
    name: m.property.programmeName,
    city: m.property.city,
    type: m.property.type,
    price: m.property.price,
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
  quizType: string | undefined,
  quizRent?: string | undefined
): Property[] {
  const matches = findBestMatches(properties, quizCity, quizType, quizRent);
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
