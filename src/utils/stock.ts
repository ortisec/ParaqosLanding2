import { CartItem, Product } from '../types/product';

export const DEFAULT_STOCK_PER_SIZE = 20;

export function getStockForSize(product: Product, size: string): number {
  if (!size) return 0;
  const stock = product.stockBySize?.[size];
  if (typeof stock === 'number' && Number.isFinite(stock)) {
    return Math.max(0, Math.floor(stock));
  }
  return DEFAULT_STOCK_PER_SIZE;
}

export function getQuantityInCartForVariant(
  cartItems: CartItem[],
  productId: string,
  size: string,
  excludeIndex?: number
): number {
  return cartItems.reduce((sum, item, index) => {
    if (excludeIndex !== undefined && index === excludeIndex) return sum;
    if (item.product.id !== productId || item.selectedSize !== size) return sum;
    return sum + item.quantity;
  }, 0);
}

export function getMaxAllowedForCartLine(
  cartItems: CartItem[],
  lineItem: CartItem,
  lineIndex: number
): number {
  const totalStock = getStockForSize(lineItem.product, lineItem.selectedSize);
  const quantityInOtherLines = getQuantityInCartForVariant(
    cartItems,
    lineItem.product.id,
    lineItem.selectedSize,
    lineIndex
  );
  return Math.max(0, totalStock - quantityInOtherLines);
}

export function clampQuantity(value: number, max: number): number {
  if (max <= 0) return 0;
  return Math.max(1, Math.min(value, max));
}
