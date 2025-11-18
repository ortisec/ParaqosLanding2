import { Product } from '../types/product';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div 
      onClick={() => onClick(product)}
      className="group cursor-pointer"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick(product);
        }
      }}
    >
      <div className="relative mb-3 sm:mb-4 aspect-[3/4] overflow-hidden bg-gray-100">
        <ImageWithFallback
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {(product.isNew || product.isOnSale) && (
          <div className="absolute left-2 top-2 flex flex-col gap-1.5 sm:gap-2">
            {product.isNew && (
              <Badge className="bg-black text-white hover:bg-black text-xs">
                NUEVO
              </Badge>
            )}
            {product.isOnSale && (
              <Badge className="bg-white text-black border border-black hover:bg-white text-xs">
                OFERTA
              </Badge>
            )}
          </div>
        )}
      </div>
      
      <div className="space-y-0.5 sm:space-y-1 px-1">
        <h3 className="text-xs sm:text-sm tracking-wide line-clamp-2">{product.name}</h3>
        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
          <span className="tracking-wide text-sm sm:text-base">S/ {product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-xs sm:text-sm text-gray-400 line-through">
              S/ {product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
