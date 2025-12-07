import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Default to 'M' size for quick add, normally would open a modal
    addToCart(product, 1, 'M');
  };

  return (
    <div className="group relative">
      <div className="aspect-[1/1] w-full overflow-hidden rounded-2xl bg-stone-100 relative">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          {product.isNew && (
            <span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-stone-900 text-xs font-bold px-2 py-1 rounded-sm uppercase tracking-wider">
              New
            </span>
          )}
          {product.isBestSeller && (
            <span className="absolute top-3 left-3 bg-rose-200/90 backdrop-blur text-rose-900 text-xs font-bold px-2 py-1 rounded-sm uppercase tracking-wider">
              Best Seller
            </span>
          )}
        </Link>
        {/* Quick Add Button - visible on hover on desktop */}
        <button
          onClick={handleQuickAdd}
          className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg text-stone-900 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-stone-900 hover:text-white"
          aria-label="Quick Add"
        >
          <ShoppingBag size={18} />
        </button>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm font-medium text-stone-900">
            <Link to={`/product/${product.id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </Link>
          </h3>
          <p className="mt-1 text-xs text-stone-500">{product.shape} · {product.length}</p>
        </div>
        <p className="text-sm font-medium text-stone-900">${product.price.toFixed(2)}</p>
      </div>
      <div className="mt-1 flex items-center">
        <Star size={12} className="text-yellow-400 fill-yellow-400" />
        <span className="ml-1 text-xs text-stone-500">{product.rating} ({product.reviews})</span>
      </div>
    </div>
  );
};

export default ProductCard;
