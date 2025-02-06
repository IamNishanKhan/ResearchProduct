import React from 'react';

const testimonials = [
  {
    quote: "This technology has revolutionized our diagnostic process, reducing analysis time by 60% while maintaining exceptional accuracy.",
    author: "Dr. Emily Thompson",
    role: "Chief Radiologist",
    hospital: "Mayo Clinic",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    quote: "The accuracy and speed of the segmentation have significantly improved our workflow and patient care quality.",
    author: "Dr. James Chen",
    role: "Neurosurgeon",
    hospital: "Johns Hopkins Hospital",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Trusted by Leading Medical Institutions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See what healthcare professionals are saying about our technology
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="absolute -top-4 -left-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                />
              </div>
              <div className="pt-8">
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <div className="mt-6">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.role} at {testimonial.hospital}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}