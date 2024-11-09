import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Plus } from 'lucide-react';
import PageHeader from '../components/PageHeader';

interface MerchItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  sizes: string[];
}

const merchItems: MerchItem[] = [
  {
    id: '1',
    name: 'CryptoHub T-Shirt',
    price: 29.99,
    description: 'Premium cotton t-shirt with our signature logo.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '2',
    name: 'Bitcoin Hoodie',
    price: 49.99,
    description: 'Comfortable hoodie with embroidered Bitcoin logo.',
    image: 'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?auto=format&fit=crop&w=800&q=80',
    sizes: ['M', 'L', 'XL'],
  },
  {
    id: '3',
    name: 'Crypto Cap',
    price: 24.99,
    description: 'Adjustable baseball cap with embroidered crypto symbols.',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80',
    sizes: ['One Size'],
  },
  {
    id: '4',
    name: 'Trading Journal',
    price: 19.99,
    description: 'High-quality notebook for tracking your trades.',
    image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=800&q=80',
    sizes: ['A5', 'A4'],
  },
  {
    id: '5',
    name: 'Crypto Mug',
    price: 14.99,
    description: 'Ceramic mug with cryptocurrency designs.',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800&q=80',
    sizes: ['11oz', '15oz'],
  },
  {
    id: '6',
    name: 'Laptop Sleeve',
    price: 34.99,
    description: 'Protective sleeve with blockchain pattern.',
    image: 'https://images.unsplash.com/photo-1533740566848-5f7d3e04e3d7?auto=format&fit=crop&w=800&q=80',
    sizes: ['13"', '15"', '17"'],
  },
];

function MerchCard({ item, index }: { item: MerchItem; index: number }) {
  const [selectedSize, setSelectedSize] = React.useState(item.sizes[0]);

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
          <span className="font-semibold text-green-600">${item.price}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
        <p className="text-gray-600 mb-4">{item.description}</p>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Size
          </label>
          <div className="flex gap-2">
            {item.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 rounded-md text-sm ${
                  selectedSize === size
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
          <Plus className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}

export default function Merch() {
  return (
    <div>
      <PageHeader
        title="Merchandise"
        description="Show your crypto pride with our exclusive merchandise"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Shopping Cart Preview */}
        <div className="fixed bottom-8 right-8 z-50">
          <button className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-colors">
            <ShoppingCart className="h-5 w-5" />
            <span className="font-semibold">Cart (0)</span>
          </button>
        </div>

        {/* Merch Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {merchItems.map((item, index) => (
            <MerchCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}