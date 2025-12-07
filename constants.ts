import { Product, Testimonial } from './types';

// NOTE: I have updated these to use high-quality hosted images (Unsplash) to ensure they show up immediately.
// If you want to use your local files, replace the URLs below with your file paths (e.g., '/my-image.jpg').

export const SHAPES = ['Almond', 'Coffin', 'Stiletto', 'Square', 'Oval'];
export const LENGTHS = ['Short', 'Medium', 'Long', 'Extra Long'];
export const COLORS = ['Pink', 'Nude', 'White', 'Black', 'Red', 'Blue', 'Multi'];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Sakura Glitz',
    price: 28.00,
    description: 'Delicate pink nails featuring 3D white floral charms and scattered gold glitter flakes. A perfect blend of romance and sparkle.',
    category: 'Art',
    shape: 'Coffin',
    length: 'Medium',
    color: 'Pink',
    // Pink floral aesthetic
    images: ['https://images.unsplash.com/photo-1632973542583-6e9195d9b810?q=80&w=1000&auto=format&fit=crop'],
    rating: 5.0,
    reviews: 42,
    isNew: true,
  },
  {
    id: '2',
    name: 'Daisy Noir',
    price: 26.00,
    description: 'Chic nude almond nails featuring sophisticated black french tips and dainty white daisy art. Modern and playful.',
    category: 'Art',
    shape: 'Almond',
    length: 'Medium',
    color: 'Nude',
    // Elegant manicure
    images: ['https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1000&auto=format&fit=crop'],
    rating: 4.9,
    reviews: 88,
    isBestSeller: true,
  },
  {
    id: '3',
    name: 'V-French Classic',
    price: 25.00,
    description: 'Elongated coffin nails with a sharp, deep V-cut white french tip. A dramatic update to a timeless classic.',
    category: 'French',
    shape: 'Coffin',
    length: 'Long',
    color: 'White',
    // Classic French Tip
    images: ['https://images.unsplash.com/photo-1596611350120-c50e823be315?q=80&w=1000&auto=format&fit=crop'],
    rating: 4.8,
    reviews: 156,
    isBestSeller: true,
  },
  {
    id: '4',
    name: 'Pure Almond French',
    price: 22.00,
    description: 'The quintessential manicure. Soft pink base with a clean, curved white tip. Elegant, simple, and perfect for any occasion.',
    category: 'French',
    shape: 'Almond',
    length: 'Medium',
    color: 'Nude',
    // Clean Natural French
    images: ['https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?q=80&w=1000&auto=format&fit=crop'],
    rating: 4.9,
    reviews: 310,
  },
  {
    id: '5',
    name: 'Sky Tip',
    price: 24.00,
    description: 'A soft twist on the classic french, featuring pastel blue tips with a delicate outline. Fresh and airy.',
    category: 'French',
    shape: 'Almond',
    length: 'Medium',
    color: 'Blue',
    // Blue aesthetic
    images: ['https://images.unsplash.com/photo-1595475207225-428b62bda831?q=80&w=1000&auto=format&fit=crop'], 
    rating: 4.7,
    reviews: 24,
    isNew: true,
  },
  {
    id: '6',
    name: 'Art Deco White',
    price: 26.00,
    description: 'Modern square nails with geometric white line art and french tip details. A structured, architectural look.',
    category: 'Art',
    shape: 'Square',
    length: 'Medium',
    color: 'White',
    // Geometric/White
    images: ['https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1000&auto=format&fit=crop'],
    rating: 4.6,
    reviews: 35,
  },
  {
    id: '7',
    name: 'Galaxy Cat Eye',
    price: 29.00,
    description: 'Mesmerizing dark blue magnetic cat-eye effect that shifts with movement. Deep, mysterious, and captivating.',
    category: 'Texture',
    shape: 'Almond',
    length: 'Long',
    color: 'Blue',
    // Dark/Glittery
    images: ['https://images.unsplash.com/photo-1601055903647-87e122de871e?q=80&w=1000&auto=format&fit=crop'],
    rating: 5.0,
    reviews: 67,
    isBestSeller: true,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah J.',
    text: "These are honestly better than my acrylics. The V-French Classic lasted 2 weeks!",
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: '2',
    name: 'Emily R.',
    text: "The sizing guide was spot on. I love the 'Daisy Noir' set, so elegant.",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: '3',
    name: 'Jessica M.',
    text: "Super easy to apply. I wore the Galaxy Cat Eye to a party and got so many compliments.",
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    rating: 4,
  },
];
