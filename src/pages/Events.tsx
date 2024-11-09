import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import type { Event } from '../types';

const events: Event[] = [
  {
    id: '1',
    title: 'Crypto Trading Workshop',
    date: '2024-04-15',
    time: '10:00 AM - 4:00 PM',
    location: 'San Francisco Convention Center',
    description: 'Join us for an intensive workshop on cryptocurrency trading strategies.',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    title: 'Blockchain Developer Meetup',
    date: '2024-04-20',
    time: '6:00 PM - 9:00 PM',
    location: 'Tech Hub Downtown',
    description: 'Network with fellow blockchain developers and share your experiences.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    title: 'DeFi Innovation Summit',
    date: '2024-05-01',
    time: '9:00 AM - 6:00 PM',
    location: 'Grand Hotel Conference Center',
    description: 'Explore the latest innovations in decentralized finance.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
  },
];

function EventCard({ event, index }: { event: Event; index: number }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">{event.title}</h3>
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="h-5 w-5 text-green-500" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="h-5 w-5 text-green-500" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="h-5 w-5 text-green-500" />
            <span>{event.location}</span>
          </div>
        </div>
        <p className="text-gray-600 mb-6">{event.description}</p>
        <div className="flex justify-between items-center">
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
            <Users className="h-4 w-4" />
            RSVP Now
          </button>
          <button className="px-4 py-2 text-green-600 hover:text-green-700 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Events() {
  return (
    <div>
      <PageHeader
        title="Events"
        description="Join our upcoming cryptocurrency events and meetups"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}