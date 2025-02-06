import React from 'react';
import Hero from '../components/Hero';
import Demo from '../components/Demo';
import Research from '../components/Research';
import Testimonials from '../components/Testimonials';

export default function MedSeg() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed w-full bg-white/80 backdrop-blur-md z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-8">
              <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                ← Back to Products
              </a>
              <span className="text-2xl font-bold text-blue-600">MedSeg</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#demo" className="text-gray-600 hover:text-blue-600 transition-colors">Demo</a>
              <a href="#research" className="text-gray-600 hover:text-blue-600 transition-colors">Research</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
            <div>
              <a
                href="#contact"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <Hero />
        <Demo />
        <Research />
        <Testimonials />
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">MedSeg</h3>
              <p className="text-gray-400">
                Advanced medical image segmentation powered by AI
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#demo" className="text-gray-400 hover:text-white transition-colors">Demo</a></li>
                <li><a href="#research" className="text-gray-400 hover:text-white transition-colors">Research</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">
                Email: contact@medseg.ai<br />
                Phone: (555) 123-4567
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} MedSeg. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}