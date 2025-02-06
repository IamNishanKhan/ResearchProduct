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
  };
  onPreview: () => void;
}

export default function ProductCard({ product, onPreview }: ProductCardProps) {
  return (
    <div 
      className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
      style={{ height: '400px' }}
    >
      <div className="absolute inset-0">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
      </div>
      
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="mb-4">
          <product.icon className="h-10 w-10 text-white opacity-75" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
        <p className="text-gray-200 mb-6">{product.description}</p>
        
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