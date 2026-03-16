import { CartItem } from '../types/product';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { getMaxAllowedForCartLine } from '../utils/stock';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (index: number, quantity: number) => void;
  onRemoveItem: (index: number) => void;
  onCheckout: () => void;
}

export function CartDrawer({
  open,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}: CartDrawerProps) {
  const total = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto flex flex-col p-0">
        <SheetHeader className="px-6 py-6 border-b border-gray-200">
          <SheetTitle className="text-xl md:text-2xl tracking-wide">CARRITO DE COMPRAS</SheetTitle>
        </SheetHeader>
        
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 text-center px-6 py-12">
            <p className="text-gray-500 mb-6">Tu carrito está vacío</p>
            <Button onClick={onClose} variant="outline" className="border-black hover:bg-gray-100">
              CONTINUAR COMPRANDO
            </Button>
          </div>
        ) : (
          <>
            {/* Cart Items - Scrollable area */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <div className="space-y-6">
                {cartItems.map((item, index) => {
                  const maxAllowed = getMaxAllowedForCartLine(cartItems, item, index);
                  const canIncrease = item.quantity < maxAllowed;
                  return (
                  <div key={index} className="flex gap-4 pb-6 border-b border-gray-200 last:border-0">
                    <div className="w-20 h-28 sm:w-24 sm:h-32 flex-shrink-0 bg-gray-100 overflow-hidden">
                      <ImageWithFallback
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0 space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="tracking-wide text-sm sm:text-base line-clamp-2">{item.product.name}</h4>
                        <button
                          onClick={() => onRemoveItem(index)}
                          className="p-1.5 text-red-600 hover:bg-red-50 transition flex-shrink-0"
                          aria-label="Eliminar producto"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      
                      <p className="text-xs sm:text-sm text-gray-600">
                        <span className="block sm:inline">Talla: {item.selectedSize}</span>
                      </p>
                      
                      <p className="text-sm sm:text-base">S/ {item.product.price.toFixed(2)}</p>
                      
                      <div className="flex items-center gap-3 pt-1">
                        <div className="flex items-center gap-2 border border-gray-300">
                          <button
                            onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                            className="p-2 hover:bg-gray-100 transition"
                            aria-label="Disminuir cantidad"
                          >
                            <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
                          </button>
                          <span className="min-w-[2rem] text-center text-sm sm:text-base">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                            className={`p-2 transition ${
                              canIncrease ? 'hover:bg-gray-100' : 'opacity-40 cursor-not-allowed'
                            }`}
                            aria-label="Aumentar cantidad"
                            disabled={!canIncrease}
                          >
                            <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
                          </button>
                        </div>
                        <span className="text-sm text-gray-600">
                          Subtotal: S/ {(item.product.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                    );
                })}
              </div>
            </div>
            
            {/* Total and Checkout - Fixed at bottom */}
            <div className="border-t border-gray-200 px-6 py-6 bg-white space-y-4">
              <div className="flex justify-between items-center">
                <span className="tracking-wide text-lg sm:text-xl">TOTAL</span>
                <span className="text-xl sm:text-2xl">S/ {total.toFixed(2)}</span>
              </div>
              
              <Button
                onClick={onCheckout}
                className="w-full bg-black text-white hover:bg-gray-800 h-12 sm:h-14 text-sm sm:text-base"
              >
                REALIZAR PEDIDO POR WHATSAPP
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
