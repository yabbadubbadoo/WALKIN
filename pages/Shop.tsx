import React, { useState, useMemo } from 'react';
import { Filter, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, SHAPES, LENGTHS, COLORS } from '../constants';

const Shop: React.FC = () => {
  const [selectedShapes, setSelectedShapes] = useState<string[]>([]);
  const [selectedLengths, setSelectedLengths] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilter = (set: React.Dispatch<React.SetStateAction<string[]>>, item: string) => {
    set(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      if (selectedShapes.length > 0 && !selectedShapes.includes(product.shape)) return false;
      if (selectedLengths.length > 0 && !selectedLengths.includes(product.length)) return false;
      if (selectedColor && product.color !== selectedColor) return false;
      return true;
    });
  }, [selectedShapes, selectedLengths, selectedColor]);

  const clearFilters = () => {
    setSelectedShapes([]);
    setSelectedLengths([]);
    setSelectedColor(null);
  };

  return (
    <div className="bg-white min-h-screen pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-8 border-b border-stone-100 pb-6">
          <h1 className="font-serif text-3xl md:text-4xl text-stone-900">Shop All</h1>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden mt-4 flex items-center text-stone-600"
          >
            <Filter size={18} className="mr-2" /> Filters
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Sidebar Filters */}
          <div className={`md:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden md:block'}`}>
            <div className="sticky top-24 space-y-8">
              
              <div>
                <h3 className="font-bold text-stone-900 mb-4 text-sm uppercase tracking-wider">Shape</h3>
                <div className="space-y-2">
                  {SHAPES.map(shape => (
                    <label key={shape} className="flex items-center cursor-pointer group">
                      <div className={`w-4 h-4 border rounded mr-3 flex items-center justify-center transition-colors ${selectedShapes.includes(shape) ? 'bg-stone-900 border-stone-900' : 'border-stone-300 group-hover:border-stone-500'}`}>
                        {selectedShapes.includes(shape) && <div className="w-2 h-2 bg-white rounded-sm" />}
                      </div>
                      <input 
                        type="checkbox" 
                        className="hidden" 
                        checked={selectedShapes.includes(shape)} 
                        onChange={() => toggleFilter(setSelectedShapes, shape)}
                      />
                      <span className="text-stone-600 text-sm group-hover:text-stone-900">{shape}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-stone-900 mb-4 text-sm uppercase tracking-wider">Length</h3>
                <div className="space-y-2">
                  {LENGTHS.map(length => (
                    <label key={length} className="flex items-center cursor-pointer group">
                      <div className={`w-4 h-4 border rounded mr-3 flex items-center justify-center transition-colors ${selectedLengths.includes(length) ? 'bg-stone-900 border-stone-900' : 'border-stone-300 group-hover:border-stone-500'}`}>
                        {selectedLengths.includes(length) && <div className="w-2 h-2 bg-white rounded-sm" />}
                      </div>
                      <input 
                        type="checkbox" 
                        className="hidden" 
                        checked={selectedLengths.includes(length)} 
                        onChange={() => toggleFilter(setSelectedLengths, length)}
                      />
                      <span className="text-stone-600 text-sm group-hover:text-stone-900">{length}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-stone-900 mb-4 text-sm uppercase tracking-wider">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {COLORS.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(selectedColor === color ? null : color)}
                      className={`px-3 py-1 rounded-full text-xs border transition-colors ${selectedColor === color ? 'bg-stone-900 text-white border-stone-900' : 'bg-white text-stone-600 border-stone-200 hover:border-stone-400'}`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {(selectedShapes.length > 0 || selectedLengths.length > 0 || selectedColor) && (
                <button 
                  onClick={clearFilters}
                  className="text-xs text-rose-500 hover:text-rose-700 underline underline-offset-4"
                >
                  Clear all filters
                </button>
              )}

            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-stone-50 rounded-xl">
                <p className="text-stone-500 mb-4">No nails found matching your style.</p>
                <button 
                  onClick={clearFilters}
                  className="px-6 py-2 bg-stone-900 text-white rounded-full text-sm hover:bg-stone-700"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Shop;
