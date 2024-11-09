import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import type { Product } from '../types';

const products: Product[] = [
  {
    id: '1',
    name: 'Hardware Wallet Pro',
    price: 149.99,
    description: 'Secure cold storage for your cryptocurrencies with advanced security features.',
    image: 'https://images.unsplash.com/photo-1642104704074-907c0698b98d?auto=format&fit=crop&w=800&q=80',
    category: 'Hardware',
  },
  {
    id: '2',
    name: 'Crypto Trading Course',
    price: 299.99,
    description: 'Comprehensive course covering advanced trading strategies and market analysis.',
    image: 'https://images.unsplash.com/photo-1642104704074-907c0698b98d?auto=format&fit=crop&w=800&q=80',
    category: 'Education',
  },
  {
    id: '3',
    name: 'Mining Rig Setup Guide',
    price: 49.99,
    description: 'Step-by-step guide to setting up your own mining operation.',
    image: 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&w=800&q=80',
    category: 'Education',
  },
  {
    id: '4',
    name: 'Crypto Tax Calculator',
    price: 79.99,
    description: 'Easily calculate your cryptocurrency taxes with our advanced software.',
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=800&q=80',
    category: 'Software',
  },
  {
    id: '5',
    name: 'Market Analysis Tool',
    price: 129.99,
    description: 'Professional-grade tool for cryptocurrency market analysis.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
    category: 'Software',
  },
  {
    id: '6',
    name: 'Secure Backup Device',
    price: 89.99,
    description: 'Backup solution for your cryptocurrency private keys.',
    image: 'https://images.unsplash.com/photo-1642104704074-907c0698b98d?auto=format&fit=crop&w=800&q=80',
    category: 'Hardware',
  },
];

const categories = ['All', 'Hardware', 'Software', 'Education'];

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
          <span className="text-lg font-semibold text-green-600">
            ${product.price.toFixed(2)}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm px-2 py-1 bg-green-100 text-green-700 rounded-full">
            {product.category}
          </span>
          <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div>
      <PageHeader
        title="Products"
        description="Discover our range of cryptocurrency products and services"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filters */}
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full md:w-80 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <div className="flex items-center gap-4">
            <Filter className="text-gray-400 h-5 w-5" />
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    selectedCategory === category
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No products found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}