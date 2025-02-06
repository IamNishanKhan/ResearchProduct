import React from 'react';
import { Brain, Activity, ScanFace } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Advanced Medical Image
            <span className="text-blue-600"> Segmentation</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Revolutionizing healthcare with AI-powered image analysis. Our cutting-edge
            technology provides precise, automated segmentation for medical imaging,
            enabling faster diagnosis and improved patient outcomes.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#demo"
              className="rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all"
            >
              Try Demo
            </a>
            <a
              href="#learn-more"
              className="text-lg font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-all"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-200 to-blue-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div className="mx-auto grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="flex flex-col items-center">
            <Brain className="h-16 w-16 text-blue-600" />
            <h3 className="mt-4 text-lg font-semibold">AI-Powered Analysis</h3>
            <p className="text-sm text-gray-600 text-center mt-2">Advanced neural networks for precise segmentation</p>
          </div>
          <div className="flex flex-col items-center">
            <Activity className="h-16 w-16 text-blue-600" />
            <h3 className="mt-4 text-lg font-semibold">Real-time Processing</h3>
            <p className="text-sm text-gray-600 text-center mt-2">Instant results for faster diagnosis</p>
          </div>
          <div className="flex flex-col items-center">
            <ScanFace className="h-16 w-16 text-blue-600" />
            <h3 className="mt-4 text-lg font-semibold">Multi-modality Support</h3>
            <p className="text-sm text-gray-600 text-center mt-2">Works with MRI, CT, and ultrasound</p>
          </div>
        </div>
      </div>
    </div>
  );
}