import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Loader } from 'lucide-react';
import { useNewsletter } from '../hooks/useNewsletter';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const { subscribe } = useNewsletter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      await subscribe.mutateAsync({
        email,
        preferences: {
          marketing: true,
          updates: true,
          events: true,
        },
      });
      setEmail('');
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error('Failed to subscribe:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <div className="relative flex-1">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="pl-10 w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-500"
        />
      </div>
      <button
        type="submit"
        disabled={subscribe.isPending}
        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
      >
        {subscribe.isPending ? (
          <Loader className="h-5 w-5 animate-spin" />
        ) : (
          'Subscribe'
        )}
      </button>

      {/* Success Message */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 right-0 mt-2 text-center text-green-500"
        >
          Successfully subscribed to newsletter!
        </motion.div>
      )}
    </form>
  );
}