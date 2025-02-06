import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description: string;
    image: string;
    icon: LucideIcon;
    stats: {
      accuracy: string;
      speed: string;
      cases: string;
    };
  };
  onPreview: () => void;
  isActive: boolean;
}

export default function ProductCard({ product, onPreview, isActive }: ProductCardProps) {
  return (
    <div 
      className={`group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 hover:shadow-2xl ${
        isActive ? 'scale-105 z-10' : 'scale-100 z-0'
      }`}
      style={{ height: '400px' }}
    >
      <div className="absolute inset-0">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
      </div>
      
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
          <product.icon className="h-10 w-10 text-white opacity-75" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2 transform transition-transform duration-300 group-hover:-translate-y-1">
          {product.name}
        </h3>
        <p className="text-gray-200 mb-6 transform transition-transform duration-300 group-hover:-translate-y-1">
          {product.description}
        </p>
        
        <div className="grid grid-cols-3 gap-4 mb-6 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <div className="text-center">
            <div className="text-white font-bold">{product.stats.accuracy}</div>
            <div className="text-gray-300 text-sm">Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-white font-bold">{product.stats.speed}</div>
            <div className="text-gray-300 text-sm">Speed</div>
          </div>
          <div className="text-center">
            <div className="text-white font-bold">{product.stats.cases}</div>
            <div className="text-gray-300 text-sm">Cases</div>
          </div>
        </div>
        
        <button
          onClick={onPreview}
          className="flex items-center gap-2 w-full justify-center py-3 px-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg text-white font-medium transition-all duration-300 group-hover:bg-white group-hover:text-gray-900"
        >
          Preview Project
          <ArrowUpRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}