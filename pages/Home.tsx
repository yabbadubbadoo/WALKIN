import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Instagram } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.filter(p => p.isBestSeller).slice(0, 4);
  // High quality hero image from Unsplash
  const heroImage = 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2070&auto=format&fit=crop';

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-stone-100 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-90 object-center"
          />
          <div className="absolute inset-0 bg-stone-900/30" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-white/30 backdrop-blur-sm border border-white/40 text-white text-xs font-bold tracking-widest uppercase mb-6 animate-fade-in-up">
            New Collection Drop
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-white font-bold mb-6 leading-tight drop-shadow-sm animate-fade-in-up delay-100">
            Salon Quality,<br />Straight to Your Door.
          </h1>
          <p className="text-white/95 text-lg md:text-xl mb-10 max-w-xl mx-auto font-light animate-fade-in-up delay-200">
            Hand-crafted press-on nails that look and feel like the real thing. Reusable, durable, and damage-free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <Link to="/shop" className="px-8 py-4 bg-white text-stone-900 rounded-full font-bold hover:bg-stone-100 transition-colors">
              Shop All Nails
            </Link>
            <Link to="/about" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-stone-900 transition-colors">
              How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-2">Trending Now</h2>
            <p className="text-stone-500">Our most coveted styles this week.</p>
          </div>
          <Link to="/shop" className="hidden md:flex items-center text-stone-900 font-medium hover:text-rose-500 transition-colors">
            View All <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link to="/shop" className="inline-flex items-center text-stone-900 font-medium border-b border-stone-900 pb-1">
            View All Products
          </Link>
        </div>
      </section>

      {/* Benefits Banner */}
      <section className="bg-rose-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-12 h-12 bg-rose-200 rounded-full flex items-center justify-center mx-auto mb-4 text-rose-700 font-serif text-xl italic">1</div>
              <h3 className="font-bold text-stone-900 mb-2">5-Minute Application</h3>
              <p className="text-stone-600 text-sm">Skip the salon chair. Get a perfect manicure from the comfort of your couch.</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-rose-200 rounded-full flex items-center justify-center mx-auto mb-4 text-rose-700 font-serif text-xl italic">2</div>
              <h3 className="font-bold text-stone-900 mb-2">Reusable & Durable</h3>
              <p className="text-stone-600 text-sm">Wear them for weeks or just for the weekend. Reapply up to 5 times.</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-rose-200 rounded-full flex items-center justify-center mx-auto mb-4 text-rose-700 font-serif text-xl italic">3</div>
              <h3 className="font-bold text-stone-900 mb-2">Damage Free</h3>
              <p className="text-stone-600 text-sm">Keep your natural nails healthy. No harsh chemicals or drilling required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-stone-900 mb-16">Walkin Women</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map(t => (
            <div key={t.id} className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-stone-600 mb-6 italic">"{t.text}"</p>
              <div className="flex items-center">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover mr-3" />
                <span className="font-bold text-stone-900 text-sm">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram Feed Mock */}
      <section className="py-12 bg-stone-50 overflow-hidden">
        <div className="flex justify-center items-center mb-10 space-x-2">
          <Instagram size={24} className="text-stone-900" />
          <h3 className="text-xl font-bold tracking-tight">@walkinnails</h3>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 px-4 no-scrollbar">
           {[1, 2, 3, 4, 5, 6].map((i) => (
             <div key={i} className="min-w-[200px] md:min-w-[300px] aspect-square rounded-xl overflow-hidden bg-stone-200">
                <img src={`https://images.unsplash.com/photo-1628035254922-38379410d291?q=80&w=400&auto=format&fit=crop`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Instagram post" />
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
