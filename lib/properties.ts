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

const API_URL = '/api/properties';

export async function fetchProperties(): Promise<Property[]> {
  const response = await fetch(API_URL);
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
