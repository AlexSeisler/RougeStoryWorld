import React from 'react';
import { Youtube, BookOpen, ArrowRight, ShieldCheck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative z-10 bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Quick Links */}
            <div>
              <h3 className="font-enchanted text-2xl font-bold mb-6">Quick Links</h3>
              <div className="space-y-4">
                <a
                  href="https://www.amazon.com/stores/author/B0DLLB4GB3/allbooks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-amber-400 transition-colors"
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Amazon Author Page</span>
                </a>
                <a
                  href="https://youtube.com/@roguesstorybookworld?si=lwteP98ce7V9dhtb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-amber-400 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                  <span>YouTube Channel</span>
                </a>
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center md:text-left">
              <h2 className="font-enchanted text-3xl font-bold mb-4">
                📚 Ready to Start the Adventure?
              </h2>
              <p className="text-gray-300 mb-6">
                Step into the world of Rouge's stories today!
              </p>
              <a
                href="https://www.amazon.com/stores/author/B0DLLB4GB3/allbooks"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-500 text-white px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <span>Explore the Books</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <div className="flex items-center justify-center md:justify-start space-x-2 mt-4 text-sm text-gray-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Safe & secure checkout on Amazon</span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Rouge's Storybook World. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}