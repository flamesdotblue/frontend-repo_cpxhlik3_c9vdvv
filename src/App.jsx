import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-indigo-950 text-white">
      <Hero />
      <Features />
      <Products />
      <Contact />
      <footer className="border-t border-white/10 bg-indigo-950/80">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white/70">
          <p className="text-sm">© {new Date().getFullYear()} Your Startup — GenAI products, delivered fast.</p>
          <nav className="flex items-center gap-4 text-sm">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#products" className="hover:text-white">Products</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default App;
