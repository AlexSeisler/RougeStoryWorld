/**
 * FeaturedBooks.tsx
 * ------------------
 * Displays a grid of featured books with cover images, details, ratings,
 * and Amazon links. Includes support for flip previews, expandable
 * descriptions, and a modal for full details.
 */

import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Star, Gift, Timer, Award, TrendingUp } from 'lucide-react';
import { BookModal } from './BookModal';
import { featuredBooks } from '../data/books';

interface BadgeProps {
  icon: React.ReactNode;
  text: string;
  className: string;
}

const Badge = ({ icon, text, className }: BadgeProps) => (
  <div
    className={`absolute right-4 px-3 py-1 rounded-full text-sm font-semibold shadow-lg flex items-center space-x-1 ${className}`}
  >
    {icon}
    <span>{text}</span>
  </div>
);

export function FeaturedBooks() {
  const [selectedCovers, setSelectedCovers] = useState<Record<number, number>>({});
  const [selectedBook, setSelectedBook] = useState<typeof featuredBooks[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredBook, setHoveredBook] = useState<number | null>(null);
  const [expandedDescriptions, setExpandedDescriptions] = useState<Record<number, boolean>>({});
  const [showAll, setShowAll] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && entry.target.classList.add('visible'),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleBookClick = (book: typeof featuredBooks[0]) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const handleImageClick = (e: React.MouseEvent, book: typeof featuredBooks[0]) => {
    e.stopPropagation();
    if (book.cover1 && book.cover2 && e.detail === 2) {
      setSelectedCovers((prev) => ({
        ...prev,
        [book.id]: prev[book.id] === 1 ? 2 : 1,
      }));
      return;
    }
    handleBookClick(book);
  };

  const initialDisplayCount = 3;
  const displayedBooks = showAll ? featuredBooks : featuredBooks.slice(0, initialDisplayCount);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 py-20 bg-gradient-to-b from-white via-purple-50/30 to-white section-fade-up"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-enchanted text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            📚 Step Into the Storybook World
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-2">
            ✨ Discover Rouge&apos;s Most Enchanting Tales
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-sm text-gray-500">
            <span className="flex items-center">
              <Gift className="w-4 h-4 mr-1 text-purple-500" />
              Free Activities
            </span>
            <span className="flex items-center">
              <Star className="w-4 h-4 mr-1 text-amber-500" />
              5-Star Rated
            </span>
            <span className="flex items-center">
              <TrendingUp className="w-4 h-4 mr-1 text-green-500" />
              Bestsellers
            </span>
          </div>
        </div>

        {/* Featured Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedBooks.map((book) => (
            <div
              key={book.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer relative"
              onClick={() => handleBookClick(book)}
              onMouseEnter={() => setHoveredBook(book.id)}
              onMouseLeave={() => setHoveredBook(null)}
            >
              {/* Book Cover */}
              <div
                className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-purple-50 to-amber-50"
                onClick={(e) => handleImageClick(e, book)}
              >
                <img
                  src={
                    book.cover1 && book.cover2
                      ? selectedCovers[book.id] === 2
                        ? book.cover2
                        : book.cover1
                      : book.cover
                  }
                  alt={book.title}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    hoveredBook === book.id ? 'scale-110 brightness-105' : ''
                  }`}
                />

                {/* Badges */}
                {book.isBestseller && (
                  <Badge
                    icon={<Award className="w-4 h-4" />}
                    text="Bestseller"
                    className="top-4 bg-amber-500 text-white"
                  />
                )}
                {book.isNew && (
                  <Badge
                    icon={<Timer className="w-4 h-4" />}
                    text="New Release"
                    className="top-4 bg-purple-500 text-white"
                  />
                )}
                {book.hasActivity && (
                  <Badge
                    icon={<Gift className="w-4 h-4" />}
                    text="Activities Included"
                    className="top-16 bg-green-500 text-white"
                  />
                )}

                {/* Hover Overlay */}
                <div
                  className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredBook === book.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <span className="text-white text-lg font-semibold">Double-click to preview</span>
                </div>
              </div>

              {/* Book Details */}
              <div className="p-6 bg-gradient-to-br from-white to-purple-50/30">
                <h3 className="font-enchanted text-2xl font-bold mb-1 text-gray-800">
                  {book.title}
                </h3>
                {book.subtitle && (
                  <p className="text-purple-600 font-semibold mb-2">{book.subtitle}</p>
                )}
                <p className="text-gray-600 text-sm mb-2 italic">by {book.author}</p>
                {book.releaseDate && (
                  <p className="text-amber-600 text-sm mb-2">Coming {book.releaseDate}</p>
                )}

                <div className="mb-4">
                  <p
                    className={`text-gray-600 ${
                      expandedDescriptions[book.id] ? '' : 'line-clamp-2'
                    }`}
                  >
                    {book.description}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedDescriptions((prev) => ({
                        ...prev,
                        [book.id]: !prev[book.id],
                      }));
                    }}
                    className="text-purple-600 hover:text-purple-700 text-sm font-medium mt-2 focus:outline-none"
                  >
                    {expandedDescriptions[book.id] ? 'Read Less' : 'Read More'}
                  </button>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-4 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(book.rating) ? 'text-amber-400' : 'text-gray-300'
                      }`}
                      fill={i < Math.floor(book.rating) ? 'currentColor' : 'none'}
                    />
                  ))}
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600">{book.rating}</span>
                    <span className="text-xs px-2 py-0.5 bg-green-100 text-green-800 rounded-full">
                      Verified Purchase
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={book.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-500 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Get It on Amazon</span>
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {!showAll && featuredBooks.length > initialDisplayCount && (
          <div className="text-center mb-12">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <span>View More Books</span>
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* See Full Collection CTA */}
        <div className="text-center space-y-6">
          <p className="text-xl text-gray-700">
            Join thousands of readers who love Rouge&apos;s stories. Grab your next adventure
            today!
          </p>
          <a
            href="https://www.amazon.com/stores/author/B0DLLB4GB3/allbooks"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white text-xl px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <span>🔥 Explore All Books</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Book Modal */}
      <BookModal book={selectedBook} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
