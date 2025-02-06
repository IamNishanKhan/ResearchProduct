import React, { useState, useEffect } from 'react';
import { Brain, Microscope, Dna, Activity, ChevronDown, ArrowRight } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MedSeg from './pages/MedSeg';
import ProductCard from './components/ProductCard';
import ProductPreview from './components/ProductPreview';

const products = [
  {
    id: 'medseg',
    name: 'MedSeg',
    description: 'AI-powered medical image segmentation',
    icon: Brain,
    color: 'blue',
    image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=2000',
    stats: { accuracy: '99.8%', speed: '2.3s', cases: '50K+' }
  },
  {
    id: 'pathology',
    name: 'PathAI',
    description: 'Digital pathology analysis',
    icon: Microscope,
    color: 'emerald',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=2000',
    stats: { accuracy: '99.5%', speed: '1.8s', cases: '35K+' }
  },
  {
    id: 'genomics',
    name: 'GenomeX',
    description: 'AI genomics analysis',
    icon: Dna,
    color: 'purple',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=2000',
    stats: { accuracy: '99.9%', speed: '3.1s', cases: '25K+' }
  },
  {
    id: 'vitals',
    name: 'VitalSense',
    description: 'Real-time patient monitoring',
    icon: Activity,
    color: 'rose',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=2000',
    stats: { accuracy: '99.7%', speed: '0.5s', cases: '75K+' }
  }
];

function Home() {
  const [previewProduct, setPreviewProduct] = useState<typeof products[0] | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % products.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Progress bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <header className="fixed w-full bg-white/80 backdrop-blur-md z-40">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Solutions
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#products" className="text-gray-600 hover:text-blue-600 transition-colors">Products</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-20">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
              <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
              <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <div className="relative inline-block">
                <h1 className="text-6xl font-bold tracking-tight text-gray-900 sm:text-7xl mb-6 relative z-10">
                  Advanced AI Solutions for
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient-x">
                    Healthcare Innovation
                  </span>
                </h1>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl blur-3xl opacity-30 -z-10" />
              </div>
              <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in">
                Discover our suite of AI-powered tools revolutionizing healthcare technology.
                From medical imaging to genomics analysis, we're advancing healthcare one innovation at a time.
              </p>
              <div className="mt-10 flex items-center justify-center gap-6">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Get Started
                </button>
                <button className="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                  Learn More <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {products.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onPreview={() => setPreviewProduct(product)}
                  isActive={index === activeIndex}
                />
              ))}
            </div>

            <div className="mt-16 flex justify-center gap-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <a
                href="#about"
                className="flex flex-col items-center text-gray-500 hover:text-blue-600 transition-colors"
              >
                <span className="text-sm font-medium mb-2">Scroll to learn more</span>
                <ChevronDown className="w-6 h-6 animate-bounce" />
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.id} className="bg-gray-50 rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <product.icon className="w-8 h-8 text-blue-600" />
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Accuracy</span>
                      <span className="font-semibold">{product.stats.accuracy}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Processing Speed</span>
                      <span className="font-semibold">{product.stats.speed}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Cases Analyzed</span>
                      <span className="font-semibold">{product.stats.cases}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {previewProduct && (
        <ProductPreview
          product={previewProduct}
          onClose={() => setPreviewProduct(null)}
        />
      )}

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">AI Solutions</h3>
              <p className="text-gray-400">
                Advancing healthcare through artificial intelligence
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Products</h3>
              <ul className="space-y-2">
                {products.map(product => (
                  <li key={product.id}>
                    <button
                      onClick={() => setPreviewProduct(product)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {product.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">
                Email: contact@ai-solutions.com<br />
                Phone: (555) 123-4567
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} AI Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medseg" element={<MedSeg />} />
      </Routes>
    </Router>
  );
}