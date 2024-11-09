import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  description: string;
  className?: string;
}

export default function PageHeader({ title, description, className = '' }: PageHeaderProps) {
  return (
    <div className={`py-12 bg-gradient-to-r from-green-600 to-blue-600 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
          <p className="text-xl text-white/90">{description}</p>
        </motion.div>
      </div>
    </div>
  );
}