import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const sections = [
  {
    title: 'Information Collection',
    icon: FileText,
    content: `We collect information that you provide directly to us, including:
      • Personal information (name, email, address)
      • Account credentials
      • Transaction data
      • Communication preferences
      • Device and usage information`,
  },
  {
    title: 'Data Security',
    icon: Lock,
    content: `We implement appropriate security measures to protect your data:
      • End-to-end encryption
      • Regular security audits
      • Secure data storage
      • Access controls
      • Regular backups`,
  },
  {
    title: 'Privacy Rights',
    icon: Shield,
    content: `You have the right to:
      • Access your personal data
      • Request data correction
      • Delete your account
      • Opt-out of communications
      • Export your data`,
  },
  {
    title: 'Data Usage',
    icon: Eye,
    content: `We use your information to:
      • Provide our services
      • Process transactions
      • Send notifications
      • Improve user experience
      • Comply with legal requirements`,
  },
];

export default function Privacy() {
  return (
    <div>
      <PageHeader
        title="Privacy Policy"
        description="Learn how we protect and handle your data"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Our Commitment to Privacy
          </h2>
          <p className="text-gray-600">
            At Crypto Currency Day, we take your privacy seriously. This policy outlines how we
            collect, use, and protect your personal information. We are committed to
            maintaining the trust and confidence of our visitors and users.
          </p>
        </motion.div>

        {/* Policy Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6 flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <section.icon className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h3>
                  <div className="text-gray-600 whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center text-gray-600"
        >
          <p>Last updated: March 15, 2024</p>
          <p className="mt-4">
            If you have any questions about our Privacy Policy, please{' '}
            <a
              href="/contact"
              className="text-green-600 hover:text-green-700 transition-colors"
            >
              contact us
            </a>
            .
          </p>
        </motion.div>

        {/* Cookie Consent Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-center sm:text-left">
              We use cookies to enhance your experience. By continuing to visit this site,
              you agree to our use of cookies.
            </p>
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">
                Customize
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}