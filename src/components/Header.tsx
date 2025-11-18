import { ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import logo from 'figma:asset/ebe64b4864f9256779a5e3e93c72d98945f6189f.png';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

export function Header({ cartCount, onCartClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="container mx-auto flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 sm:gap-3">
          <img src={logo} alt="Páraqos Logo" className="h-10 w-10 sm:h-12 sm:w-12" />
          <span className="text-xl sm:text-2xl tracking-wider">PÁRAQOS</span>
        </div>
        
        <Button 
          variant="outline" 
          size="icon" 
          className="relative border-black hover:bg-gray-100 h-9 w-9 sm:h-10 sm:w-10"
          onClick={onCartClick}
          aria-label="Carrito de compras"
        >
          <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
          {cartCount > 0 && (
            <span className="absolute -right-1.5 -top-1.5 sm:-right-2 sm:-top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-white text-xs">
              {cartCount > 99 ? '99+' : cartCount}
            </span>
          )}
        </Button>
      </div>
    </header>
  );
}
