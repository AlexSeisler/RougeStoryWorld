import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X, Star, ExternalLink } from 'lucide-react';

interface Book {
  id: number;
  title: string;
  subtitle?: string;
  cover?: string;
  cover1?: string;
  cover2?: string;
  description: string;
  author: string;
  rating: number;
  amazonLink: string;
  isBestseller?: boolean;
  isNew?: boolean;
  hasActivity?: boolean;
  releaseDate?: string;
}

interface BookModalProps {
  book: Book | null;
  isOpen: boolean;
  onClose: () => void;
}

export function BookModal({ book, isOpen, onClose }: BookModalProps) {
  if (!book) return null;

  return (
    <Transition show={isOpen} as={React.Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={onClose}
      >
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="aspect-[3/4] relative overflow-hidden rounded-lg">
                    <img
                      src={book.cover || book.cover1}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                    {book.isBestseller && (
                      <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                        Bestseller
                      </div>
                    )}
                    {book.isNew && (
                      <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                        New Release
                      </div>
                    )}
                    {book.hasActivity && (
                      <div className="absolute top-16 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                        Includes Activities
                      </div>
                    )}
                  </div>

                  <div>
                    <Dialog.Title as="h3" className="font-enchanted text-3xl font-bold text-gray-900 mb-2">
                      {book.title}
                    </Dialog.Title>
                    {book.subtitle && (
                      <p className="text-purple-600 font-semibold mb-2">{book.subtitle}</p>
                    )}
                    <p className="text-gray-600 text-sm mb-4 italic">by {book.author}</p>
                    
                    {book.releaseDate && (
                      <p className="text-amber-600 text-sm mb-4">Coming {book.releaseDate}</p>
                    )}

                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < Math.floor(book.rating) ? 'text-amber-400' : 'text-gray-300'}`}
                          fill={i < Math.floor(book.rating) ? 'currentColor' : 'none'}
                        />
                      ))}
                      <span className="ml-2 text-gray-600">{book.rating}</span>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {book.description}
                    </p>

                    <a
                      href={book.amazonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-500 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
                    >
                      <span>View on Amazon</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}