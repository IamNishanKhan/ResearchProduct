import React from 'react';
import { X } from 'lucide-react';
import MedSeg from '../pages/MedSeg';

interface ProductPreviewProps {
  product: {
    id: string;
    name: string;
  };
  onClose: () => void;
}

export default function ProductPreview({ product, onClose }: ProductPreviewProps) {
  return (
    <div className="fixed inset-0 z-50 overflow-hidden" aria-labelledby="preview-modal">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      <div className="absolute inset-4 sm:inset-8 bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="absolute top-4 right-4 z-50">
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all hover:scale-110"
          >
            <X className="w-6 h-6 text-gray-900" />
          </button>
        </div>
        
        <div className="h-full overflow-y-auto">
          {product.id === 'medseg' && <MedSeg />}
          {/* Add other product previews here */}
        </div>
      </div>
    </div>
  );
}