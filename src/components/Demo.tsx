import React, { useState } from 'react';
import { Upload, RefreshCw } from 'lucide-react';

export default function Demo() {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        simulateProcessing();
      };
      reader.readAsDataURL(file);
    }
  };

  const simulateProcessing = () => {
    setIsProcessing(true);
    setTimeout(() => setIsProcessing(false), 2000);
  };

  return (
    <section id="demo" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Try it yourself
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Upload a medical image to see our segmentation technology in action
          </p>
        </div>

        <div className="mt-16 flex flex-col lg:flex-row gap-8 items-center justify-center">
          <div
            className={`w-full lg:w-1/2 h-96 border-2 border-dashed rounded-lg flex flex-col items-center justify-center p-6 transition-colors ${
              isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
            }`}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
          >
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Uploaded"
                className="max-h-full object-contain"
              />
            ) : (
              <>
                <Upload className="h-12 w-12 text-gray-400" />
                <p className="mt-4 text-gray-600">
                  Drag and drop your image here, or{' '}
                  <span className="text-blue-600">browse</span>
                </p>
              </>
            )}
          </div>

          <div className="w-full lg:w-1/2 h-96 bg-gray-100 rounded-lg flex items-center justify-center">
            {isProcessing ? (
              <div className="flex flex-col items-center">
                <RefreshCw className="h-12 w-12 text-blue-600 animate-spin" />
                <p className="mt-4 text-gray-600">Processing image...</p>
              </div>
            ) : selectedImage ? (
              <div className="text-center">
                <p className="text-lg text-gray-600">Segmentation Result</p>
                {/* Placeholder for segmentation result */}
                <div className="mt-4 w-full h-64 bg-gray-200 rounded"></div>
              </div>
            ) : (
              <p className="text-gray-500">Segmentation result will appear here</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}