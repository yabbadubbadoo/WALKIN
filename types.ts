export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'Solid' | 'Art' | 'French' | 'Texture';
  shape: 'Almond' | 'Coffin' | 'Stiletto' | 'Square' | 'Oval';
  length: 'Short' | 'Medium' | 'Long' | 'Extra Long';
  color: string;
  images: string[];
  rating: number;
  reviews: number;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface CartItem extends Product {
  cartId: string;
  quantity: number;
  selectedSize?: string; // e.g., XS, S, M, L, Custom
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  avatar: string;
  rating: number;
}
