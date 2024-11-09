export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  image: string;
  tags: string[];
  category: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribed_at: string;
  status: 'active' | 'unsubscribed';
  preferences: {
    marketing: boolean;
    updates: boolean;
    events: boolean;
  };
}