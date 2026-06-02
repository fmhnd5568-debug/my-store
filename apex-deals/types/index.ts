// أنواع البيانات الرئيسية

export interface Product {
  id: string;
  name: string;
  description?: string;
  image?: string;
  categoryId: number;
  prices: Price[];
  reviews: Review[];
  createdAt: Date;
}

export interface Price {
  id: string;
  productId: string;
  store: string; // AliExpress, Amazon, etc.
  price: number;
  link: string;
  createdAt: Date;
}

export interface Review {
  id: string;
  productId: string;
  rating: number; // 1-5
  comment?: string;
  createdAt: Date;
}

export interface User {
  id: string;
  email: string;
  phone?: string;
  name?: string;
  createdAt: Date;
}

export interface Message {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  content: string;
  status: 'new' | 'read' | 'replied';
  createdAt: Date;
}

export interface Affiliate {
  id: string;
  userId: string;
  earnings: number;
  clicks: number;
  conversions: number;
}
