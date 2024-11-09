import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Tag } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import type { BlogPost } from '../types';

const posts: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding Blockchain Technology',
    content: 'A comprehensive guide to understanding the fundamentals of blockchain technology...',
    author: 'Sarah Johnson',
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
    tags: ['Blockchain', 'Technology', 'Guide'],
    category: 'Education',
  },
  {
    id: '2',
    title: 'Cryptocurrency Trading Strategies',
    content: 'Learn about effective trading strategies for cryptocurrency markets...',
    author: 'Michael Chen',
    date: '2024-03-14',
    image: 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&w=800&q=80',
    tags: ['Trading', 'Cryptocurrency', 'Strategy'],
    category: 'Trading',
  },
  {
    id: '3',
    title: 'The Future of DeFi',
    content: 'Exploring the potential impact of decentralized finance on traditional banking...',
    author: 'Emily Rodriguez',
    date: '2024-03-13',
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=800&q=80',
    tags: ['DeFi', 'Finance', 'Future'],
    category: 'Finance',
  },
];

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.article
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {post.date}
          </div>
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            {post.author}
          </div>
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>
        <p className="text-gray-600 mb-4">{post.content}</p>
        <div className="flex items-center gap-2">
          <Tag className="h-4 w-4 text-green-500" />
          <div className="flex gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm px-2 py-1 bg-green-100 text-green-700 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Blog() {
  return (
    <div>
      <PageHeader
        title="Blog"
        description="Stay updated with the latest news and insights from the crypto world"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}