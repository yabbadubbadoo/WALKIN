import React from 'react';

export const About: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-20">
    <h1 className="font-serif text-4xl md:text-5xl text-stone-900 mb-8 text-center">About Walkin</h1>
    <div className="prose prose-stone mx-auto text-center">
      <p className="text-xl text-stone-600 mb-8 leading-relaxed">
        We believe that a perfect manicure shouldn't require a salon appointment, damage your natural nails, or cost a fortune.
      </p>
      <div className="grid md:grid-cols-2 gap-12 text-left mt-16">
        <div>
           <img src="https://picsum.photos/seed/nailtools/800/600" alt="Craftsmanship" className="rounded-xl mb-6 w-full object-cover h-64 shadow-md"/>
           <h3 className="font-bold text-xl mb-3">Hand-Crafted Quality</h3>
           <p className="text-stone-500">Each Walkin set is designed by professional nail artists. We use 7 layers of gel polish to ensure durability and a salon-quality finish that lasts.</p>
        </div>
        <div>
           <img src="https://picsum.photos/seed/nailhands/800/600" alt="Sustainability" className="rounded-xl mb-6 w-full object-cover h-64 shadow-md"/>
           <h3 className="font-bold text-xl mb-3">Reusability</h3>
           <p className="text-stone-500">Our nails are designed to be worn again and again. With proper care, a single set can last for months of wear.</p>
        </div>
      </div>
    </div>
  </div>
);

export const Contact: React.FC = () => (
  <div className="max-w-xl mx-auto px-4 py-20">
    <h1 className="font-serif text-4xl text-stone-900 mb-4 text-center">Get in Touch</h1>
    <p className="text-stone-500 text-center mb-12">Questions about sizing? Custom orders? We're here to help.</p>
    
    <form className="space-y-6">
      <div>
        <label className="block text-sm font-bold text-stone-700 mb-2">Name</label>
        <input type="text" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-rose-200" />
      </div>
      <div>
        <label className="block text-sm font-bold text-stone-700 mb-2">Email</label>
        <input type="email" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-rose-200" />
      </div>
      <div>
        <label className="block text-sm font-bold text-stone-700 mb-2">Message</label>
        <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-rose-200"></textarea>
      </div>
      <button type="button" className="w-full bg-stone-900 text-white font-bold py-4 rounded-full hover:bg-rose-500 transition-colors">
        Send Message
      </button>
    </form>
  </div>
);

export const Policies: React.FC = () => (
  <div className="max-w-3xl mx-auto px-4 py-20">
    <h1 className="font-serif text-4xl text-stone-900 mb-12 text-center">Store Policies</h1>
    
    <div className="space-y-12">
      <section>
        <h2 className="text-2xl font-bold text-stone-900 mb-4">Shipping Policy</h2>
        <p className="text-stone-600 leading-relaxed">
          We process orders within 1-3 business days. Domestic shipping usually takes 3-5 business days. 
          International shipping times vary. You will receive a tracking number once your order has shipped.
        </p>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold text-stone-900 mb-4">Returns & Exchanges</h2>
        <p className="text-stone-600 leading-relaxed">
          Due to the sanitary nature of our products, all sales are final. 
          However, if you receive a damaged or incorrect item, please contact us within 48 hours of delivery 
          at support@walkin.com and we will make it right.
        </p>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold text-stone-900 mb-4">Sizing Guarantee</h2>
        <p className="text-stone-600 leading-relaxed">
          We highly recommend purchasing a Sizing Kit before your first order to ensure the perfect fit. 
          We are not responsible for incorrect sizing orders.
        </p>
      </section>
    </div>
  </div>
);
