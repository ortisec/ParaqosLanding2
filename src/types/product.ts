export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  images: string[];
  colors: string[];
  sizes: string[];
  isNew?: boolean;
  isOnSale?: boolean;
  description: string;
}

export interface CartItem {
  product: Product;
  selectedColor: string;
  selectedSize: string;
  quantity: number;
}
