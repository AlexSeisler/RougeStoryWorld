/**
 * Navigation.tsx
 * ------------------
 * Primary site navigation bar for Rouge's Storybook World.
 * Features:
 * - Fixed top navigation with scroll-based style changes.
 * - Desktop links to Home, Collection, YouTube, and Amazon Store.
 * - Mobile responsive menu with smooth transitions.
 */

import React, { useState, useEffect } from 'react';
import { Menu, Book, X, Youtube, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>('');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    setActiveLink(window.location.pathname);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [window.location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Collection', path: '/collection' },
    {
      name: 'YouTube',
      path: 'https://youtube.com/@roguesstorybookworld?si=lwteP98ce7V9dhtb',
      icon: <Youtube className="w-4 h-4" />,
      external: true,
    },
    {
      name: 'Amazon Store',
      path: 'https://www.amazon.com/stores/author/B0DLLB4GB3/allbooks',
      icon: <ShoppingCart className="w-4 h-4" />,
      external: true,
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 shadow-lg backdrop-blur-md border-b border-gray-200/20'
          : activeLink === '/collection'
          ? 'bg-white/95 shadow-lg backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <Link
            to="/"
            className="flex items-center space-x-2 md:space-x-4 group relative"
            onClick={() => setActiveLink('/')}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
              <div
                className={`absolute inset-0 bg-gradient-to-br from-purple-200 to-amber-200 rounded-full transition-all duration-300 ${
                  isHovered ? 'opacity-20 scale-110' : 'opacity-0 scale-100'
                }`}
              />
              <img
                src="/thumbnail_logo-removebg-preview.png"
                alt="Rouge's Storybook World"
                className={`h-full w-full object-contain transform transition-all duration-300 ${
                  isHovered ? 'scale-110 rotate-3' : 'scale-100 rotate-0'
                }`}
              />
            </div>
            <span
              className={`font-enchanted text-xl md:text-3xl font-bold transition-colors duration-300 ${
                isScrolled || activeLink === '/collection'
                  ? 'text-gray-800'
                  : 'text-white'
              } drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] relative`}
            >
              <span className="hidden sm:inline">Rouge's Storybook World</span>
              <span className="sm:hidden">Rouge's Stories</span>
              <span
                className={`absolute -bottom-1 left-0 w-full h-0.5 bg-amber-500 transform origin-left transition-transform duration-300 ${
                  isHovered ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 ${
              isScrolled || activeLink === '/collection'
                ? 'hover:bg-gray-100'
                : 'hover:bg-white/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X
                className={`w-6 h-6 ${
                  isScrolled || activeLink === '/collection'
                    ? 'text-gray-800'
                    : 'text-white'
                }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${
                  isScrolled || activeLink === '/collection'
                    ? 'text-gray-800'
                    : 'text-white'
                }`}
              />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Component
                key={link.path}
                to={link.path}
                onClick={() => setActiveLink(link.path)}
                className={`nav-link relative text-lg font-medium transition-all duration-300 hover:text-amber-500 ${
                  isScrolled || activeLink === '/collection'
                    ? 'text-gray-800'
                    : 'text-white'
                } ${activeLink === link.path ? 'nav-link-active' : ''}`}
                href={link.external ? link.path : undefined}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  {link.icon && <span>{link.icon}</span>}
                  <span>{link.name}</span>
                </span>
                {activeLink === link.path && (
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-amber-500 transform origin-left transition-transform duration-300" />
                )}
              </Component>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-x-0 top-20 transition-all duration-300 ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden backdrop-blur-md bg-white/90 border-b border-gray-200/20 shadow-lg`}
        >
          {navLinks.map((link) => (
            <Component
              key={link.path}
              to={link.path}
              onClick={() => {
                setIsMenuOpen(false);
                setActiveLink(link.path);
              }}
              className={`flex items-center space-x-2 px-6 py-4 text-lg font-medium transition-all duration-300 
                ${
                  !link.external && activeLink === link.path
                    ? 'text-amber-500 bg-amber-50/50'
                    : 'text-gray-800 hover:bg-gray-50'
                }`}
              href={link.external ? link.path : undefined}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
            >
              {link.icon || <Book className="w-5 h-5" />}
              <span>{link.name}</span>
            </Component>
          ))}
        </div>
      </div>
    </nav>
  );
}

/**
 * Component helper
 * ------------------
 * Decides whether to render a React Router <Link> or
 * a standard <a> tag (for external links).
 */
const Component = ({ to, href, ...props }: any) => {
  return href ? <a href={href} {...props} /> : <Link to={to} {...props} />;
};
