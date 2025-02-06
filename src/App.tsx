import React, { useState } from 'react';
import { Brain, Microscope, Dna, Activity, ChevronDown } from 'lucide-react';
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
    image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: 'pathology',
    name: 'PathAI',
    description: 'Digital pathology analysis',
    icon: Microscope,
    color: 'emerald',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: 'genomics',
    name: 'GenomeX',
    description: 'AI genomics analysis',
    icon: Dna,
    color: 'purple',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: 'vitals',
    name: 'VitalSense',
    description: 'Real-time patient monitoring',
    icon: Activity,
    color: 'rose',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=2000'
  }
];

function Home() {
  const [previewProduct, setPreviewProduct] = useState<typeof products[0] | null>(null);
  const [isInView, setIsInView] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
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
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
                Advanced AI Solutions for
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Healthcare Innovation
                </span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                Discover our suite of AI-powered tools revolutionizing healthcare technology.
                From medical imaging to genomics analysis, we're advancing healthcare one innovation at a time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onPreview={() => setPreviewProduct(product)}
                />
              ))}
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <a
                href="#about"
                className="flex flex-col items-center text-gray-500 hover:text-blue-600 transition-colors"
                onClick={() => setIsInView(true)}
              >
                <span className="text-sm font-medium mb-2">Scroll to learn more</span>
                <ChevronDown className="w-6 h-6 animate-bounce" />
              </a>
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