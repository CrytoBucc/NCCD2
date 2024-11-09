import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// API endpoints
export const endpoints = {
  auth: {
    login: (data: { email: string; password: string }) =>
      api.post('/auth/login', data),
    register: (data: { name: string; email: string; password: string }) =>
      api.post('/auth/register', data),
    me: () => api.get('/auth/me'),
  },
  products: {
    getAll: () => api.get('/products'),
    getOne: (id: string) => api.get(`/products/${id}`),
    create: (data: any) => api.post('/products', data),
    update: (id: string, data: any) => api.put(`/products/${id}`, data),
    delete: (id: string) => api.delete(`/products/${id}`),
  },
  events: {
    getAll: () => api.get('/events'),
    getOne: (id: string) => api.get(`/events/${id}`),
    create: (data: any) => api.post('/events', data),
    update: (id: string, data: any) => api.put(`/events/${id}`, data),
    delete: (id: string) => api.delete(`/events/${id}`),
  },
  blog: {
    getPosts: () => api.get('/blog/posts'),
    getPost: (id: string) => api.get(`/blog/posts/${id}`),
    createPost: (data: any) => api.post('/blog/posts', data),
    updatePost: (id: string, data: any) => api.put(`/blog/posts/${id}`, data),
    deletePost: (id: string) => api.delete(`/blog/posts/${id}`),
  },
  donations: {
    create: (data: any) => api.post('/donations', data),
    getStats: () => api.get('/donations/stats'),
  },
  newsletter: {
    subscribe: (email: string, preferences?: any) =>
      api.post('/newsletter/subscribe', { email, preferences }),
    unsubscribe: (email: string) =>
      api.post('/newsletter/unsubscribe', { email }),
    updatePreferences: (email: string, preferences: any) =>
      api.put('/newsletter/preferences', { email, preferences }),
    getSubscribers: () => api.get('/newsletter/subscribers'),
  },
};

export default api;