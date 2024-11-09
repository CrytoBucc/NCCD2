import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Heart, Trophy, Users } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const donationTiers = [
  {
    name: 'Supporter',
    amount: 25,
    description: 'Help us maintain and improve our platform.',
    icon: Heart,
  },
  {
    name: 'Advocate',
    amount: 50,
    description: 'Support our educational initiatives and content creation.',
    icon: Users,
  },
  {
    name: 'Champion',
    amount: 100,
    description: 'Enable us to organize more events and workshops.',
    icon: Trophy,
  },
];

const donationGoal = 10000;
const currentDonations = 7500;

export default function Donate() {
  const [customAmount, setCustomAmount] = useState('');
  const [selectedTier, setSelectedTier] = useState<number | null>(null);

  const progress = (currentDonations / donationGoal) * 100;

  const handleDonation = (amount: number) => {
    // Here you would integrate with PayPal
    console.log(`Processing donation of $${amount}`);
  };

  return (
    <div>
      <PageHeader
        title="Support Our Mission"
        description="Help us build the future of cryptocurrency education and adoption"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-lg font-semibold text-gray-900">
              Monthly Goal: ${donationGoal.toLocaleString()}
            </span>
            <span className="text-lg font-semibold text-green-600">
              ${currentDonations.toLocaleString()} Raised
            </span>
          </div>
          <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-green-600"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
          </div>
        </motion.div>

        {/* Donation Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {donationTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-lg p-6 cursor-pointer transition-all ${
                selectedTier === index
                  ? 'ring-2 ring-green-500 transform scale-105'
                  : 'hover:shadow-xl'
              }`}
              onClick={() => setSelectedTier(index)}
            >
              <tier.icon className="h-8 w-8 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
              <p className="text-gray-600 mb-4">{tier.description}</p>
              <div className="text-2xl font-bold text-green-600">${tier.amount}</div>
            </motion.div>
          ))}
        </div>

        {/* Custom Amount */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Amount</h3>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="number"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setSelectedTier(null);
              }}
              placeholder="Enter amount"
              className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>
        </motion.div>

        {/* Donation Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <button
            onClick={() =>
              handleDonation(
                selectedTier !== null
                  ? donationTiers[selectedTier].amount
                  : Number(customAmount)
              )
            }
            disabled={selectedTier === null && !customAmount}
            className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Heart className="h-5 w-5" />
            Donate Now
          </button>
          <p className="mt-4 text-sm text-gray-600">
            Secure payments powered by PayPal
          </p>
        </motion.div>

        {/* Impact Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Your Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-green-600 mb-2">1000+</div>
              <div className="text-gray-600">Students Educated</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Events Organized</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-green-600 mb-2">20+</div>
              <div className="text-gray-600">Countries Reached</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}