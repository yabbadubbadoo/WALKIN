import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, Check, Info } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../constants';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === id);
  const { addToCart } = useCart();
  
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'details' | 'howto' | 'shipping'>('details');

  if (!product) {
    return <div className="p-20 text-center">Product not found. <button onClick={() => navigate('/shop')} className="underline">Go back</button></div>;
  }

  const sizes = ['XS', 'S', 'M', 'L', 'Custom'];

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize);
    // Optional: show toast
  };

  return (
    <div className="bg-white pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-stone-100 rounded-2xl overflow-hidden">
              <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
               {product.images.map((img, i) => (
                 <div key={i} className="aspect-square bg-stone-100 rounded-xl overflow-hidden cursor-pointer hover:opacity-90">
                    <img src={img} alt="" className="w-full h-full object-cover" />
                 </div>
               ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-2 flex items-center space-x-2">
               <span className="px-2 py-0.5 bg-rose-100 text-rose-700 text-xs font-bold uppercase rounded">{product.category}</span>
               {product.isBestSeller && <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs font-bold uppercase rounded">Best Seller</span>}
            </div>
            <h1 className="font-serif text-4xl text-stone-900 mb-2">{product.name}</h1>
            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => (
                   <Star key={i} size={16} fill={i < Math.round(product.rating) ? "currentColor" : "none"} className={i < Math.round(product.rating) ? "" : "text-stone-300"} />
                ))}
              </div>
              <span className="text-sm text-stone-500">{product.reviews} reviews</span>
            </div>
            
            <p className="text-2xl font-medium text-stone-900 mb-8">${product.price.toFixed(2)}</p>
            
            <p className="text-stone-600 mb-8 leading-relaxed">
              {product.description} Includes a full application kit: glue, adhesive tabs, nail file, buffer, and cuticle stick.
            </p>

            {/* Shape & Length Info Display */}
            <div className="flex gap-8 mb-8 pb-8 border-b border-stone-100">
               <div>
                 <span className="block text-xs uppercase text-stone-500 font-bold mb-1">Shape</span>
                 <span className="text-stone-900">{product.shape}</span>
               </div>
               <div>
                 <span className="block text-xs uppercase text-stone-500 font-bold mb-1">Length</span>
                 <span className="text-stone-900">{product.length}</span>
               </div>
            </div>

            {/* Selectors */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-bold text-stone-900">Size</label>
                <button className="text-xs text-rose-500 underline flex items-center"><Info size={12} className="mr-1"/> Size Guide</button>
              </div>
              <div className="grid grid-cols-5 gap-3">
                {sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 text-sm font-medium rounded-lg border transition-all ${selectedSize === size ? 'border-stone-900 bg-stone-900 text-white' : 'border-stone-200 text-stone-600 hover:border-stone-400'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex space-x-4 mb-8">
              <div className="flex items-center border border-stone-200 rounded-full">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-stone-600 hover:text-stone-900"
                >
                  <Minus size={16} />
                </button>
                <span className="w-8 text-center font-medium text-stone-900">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-stone-600 hover:text-stone-900"
                >
                  <Plus size={16} />
                </button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-stone-900 text-white font-bold rounded-full hover:bg-rose-500 transition-colors py-3 shadow-lg hover:shadow-xl transform active:scale-95 duration-200"
              >
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Tabs */}
            <div className="border-t border-stone-200 pt-8">
              <div className="flex space-x-8 mb-6 border-b border-stone-100">
                {['details', 'howto', 'shipping'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={`pb-3 text-sm font-bold uppercase tracking-wider transition-colors border-b-2 ${activeTab === tab ? 'text-stone-900 border-stone-900' : 'text-stone-400 border-transparent hover:text-stone-600'}`}
                  >
                    {tab === 'howto' ? 'How to Apply' : tab}
                  </button>
                ))}
              </div>
              
              <div className="min-h-[150px] text-sm text-stone-600 leading-relaxed">
                {activeTab === 'details' && (
                  <p>
                    Each Walkin set is hand-painted with high-quality gel polish. 
                    <br/><br/>
                    <strong>In the box:</strong><br/>
                    • 10 Press-on Nails<br/>
                    • Nail Glue (2g)<br/>
                    • 24 Adhesive Tabs<br/>
                    • Mini Nail File<br/>
                    • Cuticle Stick<br/>
                    • Alcohol Prep Pad
                  </p>
                )}
                {activeTab === 'howto' && (
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Push back cuticles with the wooden stick.</li>
                    <li>Buff natural nails gently to remove shine.</li>
                    <li>Clean nails with the alcohol pad.</li>
                    <li>Select the correct size nail for each finger.</li>
                    <li>Apply a small drop of glue to the press-on nail and your natural nail.</li>
                    <li>Press and hold for 15-20 seconds. Done!</li>
                  </ol>
                )}
                {activeTab === 'shipping' && (
                  <p>
                    <strong>Processing Time:</strong> 1-3 business days.<br/>
                    <strong>Shipping:</strong> Standard (3-5 days) or Express (1-2 days).<br/>
                    <strong>Returns:</strong> Due to sanitary reasons, we only accept returns for damaged items within 14 days.
                  </p>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
