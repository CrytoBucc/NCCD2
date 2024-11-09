import React from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, Target, Heart } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const values = [
  {
    icon: Users,
    title: 'Community First',
    description: 'Building a strong, supportive community of crypto enthusiasts.',
  },
  {
    icon: Trophy,
    title: 'Excellence',
    description: 'Striving for excellence in everything we do.',
  },
  {
    icon: Target,
    title: 'Innovation',
    description: 'Pushing boundaries and embracing new technologies.',
  },
  {
    icon: Heart,
    title: 'Trust',
    description: 'Building lasting relationships based on trust and transparency.',
  },
];

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400&q=80',
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Marketing',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=400&q=80',
  },
  {
    name: 'David Kim',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80',
  },
];

export default function About() {
  return (
    <div>
      <PageHeader
        title="About Crypto Currency Day"
        description="Learn about our mission, values, and the team behind Crypto Currency Day"
      />

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600">
              At Crypto Currency Day, we're dedicated to making cryptocurrency accessible to everyone.
              Our platform provides education, tools, and resources to help you navigate
              the exciting world of digital assets with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <value.icon className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}