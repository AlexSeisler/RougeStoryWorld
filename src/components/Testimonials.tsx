import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    rating: 5,
    text: "Absolutely magical! My kids can't stop asking for more bedtime stories from Rouge's collection.",
    author: "Sarah M.",
    location: "Texas"
  },
  {
    rating: 5,
    text: "The illustrations are breathtaking, and the stories capture the heart. A must-have for young readers!",
    author: "Jonathan P.",
    location: "California"
  },
  {
    rating: 5,
    text: "A perfect mix of adventure and life lessons. I even enjoy reading them myself!",
    author: "Emily R.",
    location: "New York"
  }
];

export function Testimonials() {
  return (
    <section className="relative z-10 py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-enchanted text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              ⭐ What Readers Are Saying...
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-amber-400"
                      fill="currentColor"
                    />
                  ))}
                </div>

                {/* Verified Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Amazon Verified Purchase
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>

                {/* Author */}
                <p className="text-gray-600 text-sm">
                  — {testimonial.author}, {testimonial.location}
                </p>
              </div>
            ))}
          </div>

          {/* Author Recognition */}
          <div className="text-center mb-12">
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <span className="inline-flex items-center space-x-2 bg-purple-50 px-4 py-2 rounded-full text-purple-700">
                <span>✔</span>
                <span>Featured Author</span>
              </span>
              <span className="inline-flex items-center space-x-2 bg-amber-50 px-4 py-2 rounded-full text-amber-700">
                <span>✔</span>
                <span>Amazon KDP</span>
              </span>
              <span className="inline-flex items-center space-x-2 bg-red-50 px-4 py-2 rounded-full text-red-700">
                <span>✔</span>
                <span>YouTube Creator</span>
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-xl text-gray-700 mb-6">
              Loved by thousands of readers—be the next!
            </p>
            <a
              href="https://www.amazon.com/stores/author/B0DLLB4GB3/allbooks"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <span>Grab Your Copy on Amazon</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}