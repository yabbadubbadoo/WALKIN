import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search, Instagram, Facebook, Twitter, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-stone-800 hover:text-rose-500">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center md:justify-start w-full md:w-auto absolute md:static left-0 right-0 pointer-events-none md:pointer-events-auto">
            <Link to="/" className="pointer-events-auto">
              <span className="font-serif text-3xl tracking-tighter text-stone-900 font-bold">Walkin.</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  location.pathname === link.path ? 'text-rose-500' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <button className="text-stone-600 hover:text-stone-900 hidden sm:block">
              <Search size={20} />
            </button>
            <Link to="/cart" className="text-stone-600 hover:text-stone-900 relative">
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-rose-100 animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-stone-600 hover:text-rose-500 hover:bg-rose-50 rounded-md"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-50 pt-16 pb-8 border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <span className="font-serif text-2xl font-bold text-stone-900">Walkin.</span>
            <p className="mt-4 text-stone-500 text-sm leading-relaxed">
              Salon-quality manicures delivered straight to your door. Reusable, durable, and always on trend.
            </p>
            <div className="flex space-x-4 mt-6">
              <Instagram size={20} className="text-stone-400 hover:text-rose-500 cursor-pointer" />
              <Facebook size={20} className="text-stone-400 hover:text-rose-500 cursor-pointer" />
              <Twitter size={20} className="text-stone-400 hover:text-rose-500 cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-stone-900 tracking-wider uppercase mb-4">Shop</h3>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-stone-500 hover:text-rose-500 text-sm">All Products</Link></li>
              <li><Link to="/shop" className="text-stone-500 hover:text-rose-500 text-sm">Best Sellers</Link></li>
              <li><Link to="/shop" className="text-stone-500 hover:text-rose-500 text-sm">New Arrivals</Link></li>
              <li><Link to="/shop" className="text-stone-500 hover:text-rose-500 text-sm">Accessories</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-stone-900 tracking-wider uppercase mb-4">Support</h3>
            <ul className="space-y-3">
              <li><Link to="/policies" className="text-stone-500 hover:text-rose-500 text-sm">Shipping & Returns</Link></li>
              <li><Link to="/policies" className="text-stone-500 hover:text-rose-500 text-sm">Size Guide</Link></li>
              <li><Link to="/contact" className="text-stone-500 hover:text-rose-500 text-sm">Contact Us</Link></li>
              <li><Link to="/policies" className="text-stone-500 hover:text-rose-500 text-sm">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-stone-900 tracking-wider uppercase mb-4">Stay in the loop</h3>
            <p className="text-stone-500 text-sm mb-4">Subscribe for exclusive drops and 10% off your first order.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 min-w-0 px-4 py-2 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-200"
              />
              <button type="button" className="bg-stone-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-rose-500 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-stone-400 text-xs">© 2024 Walkin Nails. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/policies" className="text-stone-400 text-xs hover:text-stone-600">Privacy Policy</Link>
            <Link to="/policies" className="text-stone-400 text-xs hover:text-stone-600">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
