export type Language = 'ta' | 'en';

export interface Product {
  id: string;
  name: string;
  nameTa: string;
  category: string;
  weight: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  description?: string;
  descriptionTa?: string;
  badge?: string;
  inStock?: boolean;
}

export interface Category {
  id: string;
  name: string;
  nameTa: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  cityTa: string;
  comment: string;
  commentTa: string;
  rating: number;
  avatar: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ToastMessage {
  id: string;
  message: string;
  type?: 'success' | 'info' | 'warning';
}
