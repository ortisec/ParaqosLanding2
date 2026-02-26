import { useState } from 'react';
import { Product } from '../types/product';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, size: string) => void;
}

export function ProductModal({ product, open, onClose, onAddToCart }: ProductModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');

  if (!product) return null;

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Por favor selecciona una talla');
      return;
    }
    onAddToCart(product, selectedSize);
    setSelectedSize('');
    setCurrentImageIndex(0);
    onClose();
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] sm:max-w-[90vw] md:max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto p-4 sm:p-6">
        <DialogHeader className="pb-4">
          <DialogDescription className="sr-only">Detalles del producto y opciones de compra</DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Image Carousel */}
          <div className="relative">
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
              <ImageWithFallback
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="h-full w-full object-cover"
              />
              
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 bg-white/90 hover:bg-white transition shadow-md"
                    aria-label="Imagen anterior"
                  >
                    <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 bg-white/90 hover:bg-white transition shadow-md"
                    aria-label="Imagen siguiente"
                  >
                    <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                </>
              )}
            </div>
            
            {/* Image Indicators */}
            {product.images.length > 1 && (
              <div className="flex justify-center gap-2 mt-3 sm:mt-4">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full transition ${
                      index === currentImageIndex ? 'bg-black w-4 sm:w-6' : 'bg-gray-300'
                    }`}
                    aria-label={`Ver imagen ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
          
          {/* Product Details */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2 flex-wrap">
              {product.isNew && (
                <Badge className="bg-black text-white hover:bg-black text-xs sm:text-sm">NUEVO</Badge>
              )}
              {product.isOnSale && (
                <Badge className="bg-white text-black border border-black hover:bg-white text-xs sm:text-sm">
                  OFERTA
                </Badge>
              )}
            </div>

            <h2 className="text-lg sm:text-xl md:text-2xl tracking-wide pr-8">{product.name}</h2>
            
            <div>
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                <span className="text-2xl sm:text-3xl">S/ {product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-lg sm:text-xl text-gray-400 line-through">
                    S/ {product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
            
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{product.description}</p>
            
            {/* Color selection removed */}
            
            {/* Size Selection */}
            <div>
              <label className="block mb-2 sm:mb-3 text-sm tracking-wide">TALLA</label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 border transition text-sm sm:text-base min-w-[2.5rem] ${
                      selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            <Button
              onClick={handleAddToCart}
              className="w-full bg-black text-white hover:bg-gray-800 h-11 sm:h-12 text-sm sm:text-base mt-6"
            >
              AGREGAR AL CARRITO
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
