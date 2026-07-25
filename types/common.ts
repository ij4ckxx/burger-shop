import { Burger } from "./burger";

export interface CartItem {
  burger: Burger;
  quantity: number;
  selectedOptions?: {
    extraCheese?: boolean;
    doublePatty?: boolean;
    baconStrip?: boolean;
    sauce?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  favoriteBurger: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface PromoDeal {
  id: string;
  title: string;
  subtitle: string;
  discountBadge: string;
  originalPrice: number;
  promoPrice: number;
  expiresInHours: number;
  code: string;
  bgGradient: string;
  image: string;
}
