import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Slider } from './ui/slider';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { useMemo } from 'react';
import { products } from '../data/products';

interface FilterSectionProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  selectedColors: string[];
  onColorChange: (colors: string[]) => void;
  selectedSizes: string[];
  onSizeChange: (sizes: string[]) => void;
  onClearFilters: () => void;
}

export function FilterSection({
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  selectedColors,
  onColorChange,
  selectedSizes,
  onSizeChange,
  onClearFilters
}: FilterSectionProps) {
  // Get unique colors and sizes from all products
  const availableColors = useMemo(() => {
    const colors = new Set<string>();
    products.forEach(product => {
      product.colors.forEach(color => colors.add(color));
    });
    return Array.from(colors).sort();
  }, []);

  const availableSizes = useMemo(() => {
    const sizes = new Set<string>();
    products.forEach(product => {
      product.sizes.forEach(size => sizes.add(size));
    });
    return Array.from(sizes).sort((a, b) => {
      // Custom sort: XS, S, M, L, XL, then numbers
      const order = ['XS', 'S', 'M', 'L', 'XL'];
      const aIndex = order.indexOf(a);
      const bIndex = order.indexOf(b);
      
      if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
      if (aIndex !== -1) return -1;
      if (bIndex !== -1) return 1;
      return parseInt(a) - parseInt(b);
    });
  }, []);

  const handleColorToggle = (color: string) => {
    if (selectedColors.includes(color)) {
      onColorChange(selectedColors.filter(c => c !== color));
    } else {
      onColorChange([...selectedColors, color]);
    }
  };

  const handleSizeToggle = (size: string) => {
    if (selectedSizes.includes(size)) {
      onSizeChange(selectedSizes.filter(s => s !== size));
    } else {
      onSizeChange([...selectedSizes, size]);
    }
  };

  return (
    <div className="bg-gray-50 border-y border-gray-200 py-8 md:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {/* Category Filter */}
          <div className="w-full">
            <label className="block mb-3 text-xs tracking-widest uppercase">Categoría</label>
            <Select value={selectedCategory} onValueChange={onCategoryChange}>
              <SelectTrigger className="w-full bg-white h-11 border-gray-300">
                <SelectValue placeholder="Todas las categorías" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las categorías</SelectItem>
                <SelectItem value="polo">Polos</SelectItem>
                <SelectItem value="pantalon">Pantalones</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Color Filter */}
          <div className="w-full">
            <label className="block mb-3 text-xs tracking-widest uppercase">
              Color {selectedColors.length > 0 && `(${selectedColors.length})`}
            </label>
            <div className="h-[180px] overflow-y-auto bg-white border border-gray-300 p-4">
              <div className="space-y-3">
                {availableColors.map((color) => (
                  <div key={color} className="flex items-center gap-3 hover:bg-gray-50 -mx-1 px-1 py-1 transition-colors">
                    <Checkbox
                      id={`color-${color}`}
                      checked={selectedColors.includes(color)}
                      onCheckedChange={() => handleColorToggle(color)}
                      className="rounded-none border-gray-400"
                    />
                    <label
                      htmlFor={`color-${color}`}
                      className="text-sm cursor-pointer select-none flex-1"
                    >
                      {color}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Size Filter */}
          <div className="w-full">
            <label className="block mb-3 text-xs tracking-widest uppercase">
              Talla {selectedSizes.length > 0 && `(${selectedSizes.length})`}
            </label>
            <div className="h-[180px] overflow-y-auto bg-white border border-gray-300 p-4">
              <div className="space-y-3">
                {availableSizes.map((size) => (
                  <div key={size} className="flex items-center gap-3 hover:bg-gray-50 -mx-1 px-1 py-1 transition-colors">
                    <Checkbox
                      id={`size-${size}`}
                      checked={selectedSizes.includes(size)}
                      onCheckedChange={() => handleSizeToggle(size)}
                      className="rounded-none border-gray-400"
                    />
                    <label
                      htmlFor={`size-${size}`}
                      className="text-sm cursor-pointer select-none flex-1"
                    >
                      {size}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Price Filter */}
          <div className="w-full">
            <label className="block mb-3 text-xs tracking-widest uppercase">
              Precio
            </label>
            <div className="bg-white border border-gray-300 p-4 h-[180px] flex flex-col justify-center">
              <div className="text-sm text-center mb-4">
                S/ {priceRange[0]} - S/ {priceRange[1]}
              </div>
              <Slider
                min={0}
                max={400}
                step={10}
                value={priceRange}
                onValueChange={(value) => onPriceRangeChange(value as [number, number])}
                className="w-full"
              />
            </div>
          </div>
          
          {/* Clear Filters Button */}
          <div className="w-full md:col-span-2 lg:col-span-4 xl:col-span-1 flex items-end">
            <Button
              onClick={onClearFilters}
              variant="outline"
              className="w-full border-black hover:bg-black hover:text-white h-11 transition-colors"
            >
              LIMPIAR FILTROS
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
