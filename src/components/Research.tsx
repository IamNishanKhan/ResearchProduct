import React from 'react';
import { BookOpen, FileText, Users } from 'lucide-react';

const papers = [
  {
    title: "Advanced Neural Networks in Medical Image Segmentation",
    authors: "Dr. Sarah Chen, Dr. Michael Roberts",
    journal: "Nature Medicine",
    year: 2024,
    citations: 156
  },
  {
    title: "Real-time Segmentation of Brain MRI Scans",
    authors: "Dr. James Wilson, Dr. Emily Parker",
    journal: "Medical Imaging Journal",
    year: 2023,
    citations: 89
  }
];

export default function Research() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Research & Publications
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our technology is backed by peer-reviewed research and clinical studies
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {papers.map((paper, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start">
                <BookOpen className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {paper.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{paper.authors}</p>
                  <div className="mt-4 flex items-center text-sm text-gray-500">
                    <FileText className="h-4 w-4 mr-2" />
                    {paper.journal}, {paper.year}
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-2" />
                    {paper.citations} citations
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#publications"
            className="inline-flex items-center text-blue-600 hover:text-blue-500"
          >
            View all publications
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}