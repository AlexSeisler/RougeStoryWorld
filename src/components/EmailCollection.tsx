import React, { useState, useEffect } from 'react';
import { Mail, Gift, X } from 'lucide-react';
import { supabase } from '../lib/supabase';

const POPUP_DELAY = 30000; // 30 seconds
const FINAL_POPUP_DELAY = 60000; // 1 minute

export function EmailCollection() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastClosed, setLastClosed] = useState(0);
  const [popupCount, setPopupCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      const now = Date.now();
      
      // Show popup based on conditions
      if (scrollPercent > 50 && !isSubmitted && (now - lastClosed > POPUP_DELAY) && popupCount < 2) {
        setPopupCount(prev => prev + 1);
        setIsVisible(true);
      } else if (scrollPercent > 50 && !isSubmitted && (now - lastClosed > FINAL_POPUP_DELAY) && popupCount === 2) {
        setPopupCount(prev => prev + 1);
        setIsVisible(true);
      }
    };

    const timer = setTimeout(() => {
      const now = Date.now();
      // Initial popup after 30 seconds if not shown yet
      if (!isSubmitted && popupCount === 0) {
        setPopupCount(1);
        setIsVisible(true);
      }
    }, POPUP_DELAY);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [isSubmitted, lastClosed, popupCount]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const { error: supabaseError } = await supabase
        .from('subscribers')
        .insert([{ email, source: 'popup' }]);

      if (supabaseError) throw supabaseError;

      setSuccess(true);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message.includes('unique constraint') 
          ? 'This email is already subscribed!' 
          : 'Failed to subscribe. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-gradient-to-br from-amber-50 to-purple-50 rounded-2xl shadow-2xl p-8">
        <button
          onClick={() => {
            setIsVisible(false);
            setLastClosed(Date.now());
            // Don't increment popup count when closing the final popup
            if (popupCount < 3) {
              setPopupCount(prev => Math.min(prev + 1, 3));
            }
          }}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="text-center">
          <div className="mb-6">
            <Mail className="w-12 h-12 mx-auto text-purple-600 mb-4" />
            <h2 className="font-enchanted text-3xl font-bold text-gray-800 mb-2">
              Get Exclusive Stories & Special Perks!
            </h2>
            <p className="text-gray-600">
              Sign up now to receive free story downloads, first access to new book releases, and VIP discounts—before anyone else!
            </p>
            {error && (
              <p className="text-red-500 text-sm mt-2">{error}</p>
            )}
            {success && (
              <p className="text-green-500 text-sm mt-2">✨ Welcome to the Storybook Club! Check your email soon for your free story.</p>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading || success}
                placeholder="Enter your email to join the Storybook Club"
                className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading || success}
              className={`w-full bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-500 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2 ${
                (isLoading || success) ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <span>
                {isLoading ? '✨ Subscribing...' : success ? '✨ Subscribed!' : '✨ Unlock Free Stories!'}
              </span>
            </button>

            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
              <Gift className="w-4 h-4 text-green-500" />
              <span>Get a FREE exclusive short story instantly when you sign up!</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}