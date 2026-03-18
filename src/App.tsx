import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { FilterSection } from './components/FilterSection';
import { CartDrawer } from './components/CartDrawer';
import { Button } from './components/ui/button';
import { products } from './data/products';
import { Product, CartItem } from './types/product';
import { clampQuantity, getMaxAllowedForCartLine, getQuantityInCartForVariant, getStockForSize } from './utils/stock';
import { ArrowDown, FilterIcon } from 'lucide-react';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 400]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [displayedProducts, setDisplayedProducts] = useState(10);

  // Products without filters for New and Sale sections
  const newProducts = products.filter((p) => p.isNew);
  const saleProducts = products.filter((p) => p.isOnSale);

  // Filter products only for "All Products" section
  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    const colorMatch = selectedColors.length === 0 || selectedColors.some(color => product.colors.includes(color));
    const sizeMatch = selectedSizes.length === 0 || selectedSizes.some(size => product.sizes.includes(size));
    return categoryMatch && priceMatch && colorMatch && sizeMatch;
  });

  const allProductsSection = filteredProducts.slice(0, displayedProducts);

  // Infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
        displayedProducts < filteredProducts.length
      ) {
        setDisplayedProducts((prev) => Math.min(prev + 10, filteredProducts.length));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [displayedProducts, filteredProducts.length]);

  const handleAddToCart = (product: Product, size: string, quantity: number) => {
    setCartItems((prev) => {
      const variantStock = getStockForSize(product, size);
      const quantityAlreadyInCart = getQuantityInCartForVariant(prev, product.id, size);
      const remaining = Math.max(0, variantStock - quantityAlreadyInCart);
      if (remaining === 0) return prev;

      const quantityToAdd = Math.min(quantity, remaining);
      const existingIndex = prev.findIndex((item) => item.product.id === product.id && item.selectedSize === size);

      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantityToAdd,
        };
        return updated;
      }

      return [...prev, { product, selectedSize: size, quantity: quantityToAdd }];
    });
  };

  const handleUpdateQuantity = (index: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(index);
      return;
    }
    setCartItems((prev) => {
      const targetItem = prev[index];
      if (!targetItem) return prev;

      const maxAllowed = getMaxAllowedForCartLine(prev, targetItem, index);
      if (maxAllowed <= 0) {
        return prev.filter((_, i) => i !== index);
      }

      const clampedQuantity = clampQuantity(quantity, maxAllowed);
      const newItems = [...prev];
      newItems[index].quantity = clampedQuantity;
      return newItems;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleCheckout = () => {
    const message = encodeURIComponent(
      `Hola! Me gustaría realizar el siguiente pedido:\n\n` +
      cartItems.map((item, i) =>
        `${i + 1}. ${item.product.name}\n` +
        `   Talla: ${item.selectedSize}\n` +
        `   Cantidad: ${item.quantity}\n` +
        `   Precio: S/ ${(item.product.price * item.quantity).toFixed(2)}\n`
      ).join('\n') +
      `\nTotal: S/ ${cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0).toFixed(2)}`
    );

    window.open(`https://wa.me/51993133662?text=${message}`, '_blank');
  };

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setPriceRange([0, 400]);
    setSelectedColors([]);
    setSelectedSizes([]);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
      />

      {/* Hero Section */}
      <section className="border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4 tracking-wider">
            BIENVENIDO A PÁRAQOS
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Polos y pantalones aesthetic para tu estilo urbano. Comodidad y diseño minimalista.
          </p>
        </div>
      </section>

      {/* New Arrivals Section */}
      {newProducts.length > 0 && (
        <section className="py-10 sm:py-12 md:py-16 border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 tracking-wider">
              NUEVOS LANZAMIENTOS
            </h2>
            <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              <div className="flex gap-3 sm:gap-4 md:gap-6 pb-2">
                {newProducts.map((product) => (
                  <div key={product.id} className="flex-none w-[45%] sm:w-[280px] md:w-[320px]">
                    <ProductCard
                      product={product}
                      onClick={setSelectedProduct}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Sale Section */}
      {saleProducts.length > 0 && (
        <section className="py-10 sm:py-12 md:py-16 bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 tracking-wider">
              OFERTAS ESPECIALES
            </h2>
            <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              <div className="flex gap-3 sm:gap-4 md:gap-6 pb-2">
                {saleProducts.map((product) => (
                  <div key={product.id} className="flex-none w-[45%] sm:w-[280px] md:w-[320px]">
                    <ProductCard
                      product={product}
                      onClick={setSelectedProduct}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}


      {/* All Products Section */}
      <section className="py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 tracking-wider">
            TODOS LOS PRODUCTOS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

            {/* Filter Section Before All Products */}
            <div className="flex flex-col">
              <Button 
              onClick={() => setIsFiltersOpen(prev => !prev)}
              > Filtros <FilterIcon /></Button>

              {isFiltersOpen &&
                <FilterSection
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                  priceRange={priceRange}
                  onPriceRangeChange={setPriceRange}
                  selectedColors={selectedColors}
                  onColorChange={setSelectedColors}
                  selectedSizes={selectedSizes}
                  onSizeChange={setSelectedSizes}
                  onClearFilters={handleClearFilters}
                />}
            </div>


            <div className="col-span-3 sm:col-span-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
              {allProductsSection.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={setSelectedProduct}
                />
              ))}
            </div>


          </div>



          {displayedProducts < filteredProducts.length && (
            <div className="text-center mt-6 sm:mt-8 text-sm sm:text-base text-gray-500">
              Cargando más productos...
            </div>
          )}

          {displayedProducts >= filteredProducts.length && filteredProducts.length > 0 && (
            <div className="text-center mt-6 sm:mt-8 text-sm sm:text-base text-gray-500">
              Has visto todos los productos
            </div>
          )}

          {filteredProducts.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <p className="text-base sm:text-lg mb-4">No se encontraron productos con estos filtros</p>
              <Button onClick={handleClearFilters} variant="outline" className="border-black">
                Limpiar filtros
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4 tracking-wider">PÁRAQOS</h3>
          <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">Moda contemporánea para todos</p>
          <p className="text-xs sm:text-sm text-gray-500">
            © 2025 Páraqos. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        open={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Cart Drawer */}
      <CartDrawer
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />
    </div>
  );
}
