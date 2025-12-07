import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Minus, Plus, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { items, removeFromCart, updateQuantity, cartTotal } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white px-4">
        <h2 className="font-serif text-3xl mb-4 text-stone-900">Your bag is empty</h2>
        <p className="text-stone-500 mb-8">Looks like you haven't made your choice yet.</p>
        <Link to="/shop" className="px-8 py-3 bg-stone-900 text-white rounded-full font-bold hover:bg-stone-800 transition-colors">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-stone-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">Shopping Bag</h1>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="flex-1 bg-white rounded-2xl shadow-sm overflow-hidden p-6 md:p-8">
            <div className="space-y-8">
              {items.map((item) => (
                <div key={item.cartId} className="flex flex-col sm:flex-row gap-6 border-b border-stone-100 pb-8 last:border-0 last:pb-0">
                  <div className="w-full sm:w-24 h-24 bg-stone-100 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-stone-900 text-lg"><Link to={`/product/${item.id}`}>{item.name}</Link></h3>
                        <p className="text-sm text-stone-500 mt-1">{item.shape}, {item.length}</p>
                        <p className="text-sm text-stone-500">Size: <span className="text-stone-900 font-medium">{item.selectedSize}</span></p>
                      </div>
                      <p className="font-medium text-stone-900">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    
                    <div className="flex justify-between items-end mt-4 sm:mt-0">
                      <div className="flex items-center border border-stone-200 rounded-lg">
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="p-2 text-stone-500 hover:text-stone-900"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="p-2 text-stone-500 hover:text-stone-900"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-stone-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="lg:w-96">
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 sticky top-24">
              <h2 className="font-serif text-xl font-bold text-stone-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-stone-600">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
              </div>
              
              <div className="border-t border-stone-100 pt-4 mb-8">
                <div className="flex justify-between text-lg font-bold text-stone-900">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-xs text-stone-400 mt-2">Taxes calculated at checkout</p>
              </div>
              
              <button 
                onClick={() => navigate('/checkout')}
                className="w-full bg-stone-900 text-white font-bold py-4 rounded-full hover:bg-rose-500 transition-colors flex items-center justify-center group"
              >
                Checkout <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
