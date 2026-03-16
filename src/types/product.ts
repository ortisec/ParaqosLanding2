export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  images: string[];
  colors: string[];
  sizes: string[];
  stockBySize?: Record<string, number>;
  isNew?: boolean;
  isOnSale?: boolean;
  description: string;
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  quantity: number;
}
