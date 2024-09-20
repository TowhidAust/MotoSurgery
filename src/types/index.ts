// ---- (HOME SCREEN) PACKAGE LIST ------
export interface packageFeatures {
  title: string;
  description: string;
}
export interface servicePakage {
  id: string;
  title: string;
  price: number;
  description: String;
  features: packageFeatures[];
}

// ----- API RESPONSE TYPES ------
