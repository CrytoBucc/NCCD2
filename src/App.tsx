import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Products from './pages/Products';
import Merch from './pages/Merch';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Privacy from './pages/Privacy';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="products" element={<Products />} />
          <Route path="merch" element={<Merch />} />
          <Route path="events" element={<Events />} />
          <Route path="contact" element={<Contact />} />
          <Route path="donate" element={<Donate />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;