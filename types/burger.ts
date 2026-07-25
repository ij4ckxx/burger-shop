export interface Burger {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  categoryId: string;
  image: string;
  isPopular?: boolean;
  isSpicy?: boolean;
  isVeg?: boolean;
  isNew?: boolean;
  calories: number;
  prepTimeMinutes: number;
  tags: string[];
  ingredients: string[];
}
