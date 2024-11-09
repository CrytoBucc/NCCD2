import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bitcoin, Wallet, Users, Calendar } from 'lucide-react';

const features = [
  {
    icon: Bitcoin,
    title: 'Crypto Education',
    description: 'Learn about blockchain technology and cryptocurrency trading.',
  },
  {
    icon: Wallet,
    title: 'Secure Transactions',
    description: 'Safe and reliable payment processing for all your needs.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Join our growing community of crypto enthusiasts.',
  },
  {
    icon: Calendar,
    title: 'Events',
    description: 'Stay updated with our latest meetups and conferences.',
  },
];

const carouselImages = [
  'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&w=1200&q=80',
];

export default function Home() {
  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        <motion.img
          key={currentImage}
          src={carouselImages[currentImage]}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white space-y-6 max-w-4xl px-4">
            <motion.h1
              className="text-4xl md:text-6xl font-bold"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Welcome to Crypto Currency Day
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Your gateway to the world of cryptocurrency and blockchain technology
            </motion.p>
            <motion.button
              className="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors inline-flex items-center gap-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Get Started
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Crypto Currency Day?</h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover the benefits of joining our platform
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <feature.icon className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to start your crypto journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of users who trust Crypto Currency Day for their cryptocurrency needs
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}