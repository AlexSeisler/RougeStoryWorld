/**
 * HeroSection.tsx
 * ------------------
 * Landing page hero section with logo, tagline, and primary CTA.
 * Includes animated background, sparkles, and trust indicators.
 */

import React from 'react';
import { ShoppingCart, Youtube, Book } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="relative min-h-screen">
      {/* Background Gradient with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-purple-400 to-blue-400 animate-gradient">
        <div className="absolute inset-0 bg-black/30" />

        {/* Sparkles Animation */}
        <div className="sparkles">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-white rounded-full animate-sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                opacity: '0.7',
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom Shadow Transition */}
      <div className="absolute -bottom-24 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white/20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex flex-col items-center justify-center text-center pt-20">
        {/* Logo */}
        <div className="mb-8 animate-float">
          <img
            src="/Rouges_storybook__1_-removebg-preview.png"
            alt="Rouge's Storybook World Logo"
            className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl"
          />
        </div>

        {/* Tagline */}
        <h1 className="font-enchanted text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/90 leading-tight drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)] animate-fade-in">
          Step Into a World of Stories & Imagination
        </h1>

        <p className="font-sans text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl animate-fade-in-delay drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
          Let every page turn transport you to a realm of magic and wonder,
          where enchanting audiobooks and paperbacks bring stories to life.
        </p>

        {/* CTA */}
        <a
          href="https://www.amazon.com/stores/author/B0DLLB4GB3/allbooks"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-500 text-white text-xl px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-amber-300/50 mb-8 animate-fade-in-delay-2"
        >
          Browse Books
        </a>

        {/* Trust Indicators */}
        <div className="flex flex-col items-center space-y-4 animate-fade-in-delay-3">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-white/90 bg-black/20 px-4 sm:px-6 py-3 rounded-full backdrop-blur-sm">
            <div className="flex items-center">
              <ShoppingCart className="w-5 h-5 mr-2" />
              <span>Amazon</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30" />
            <div className="flex items-center">
              <Youtube className="w-5 h-5 mr-2" />
              <span>YouTube</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30" />
            <div className="flex items-center">
              <Book className="w-5 h-5 mr-2" />
              <span>Self-Published Author</span>
            </div>
          </div>

          <div className="text-white/80 text-sm italic max-w-md drop-shadow-md">
            "A magical journey through stories that captivate both children and adults alike! ★★★★★"
          </div>
        </div>
      </div>
    </div>
  );
}
