import React from 'react';
import { ShoppingCart, Youtube, Star } from 'lucide-react';

export function AboutSection() {
  const sectionRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      {
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative z-10 py-20 bg-gradient-to-b from-white via-amber-50/50 to-amber-50 section-fade-up"
      style={{ '--gradient-start': 'rgb(255, 255, 255)', '--gradient-end': 'rgb(254, 243, 199)' } as React.CSSProperties}
    >
      <div className="section-transition section-transition-top"></div>
      <div className="section-transition section-transition-bottom"></div>
      {/* Shadow Transition */}
      <div className="absolute -top-24 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-enchanted text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Meet the Author Behind the Magic
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover the story of Rouge and her journey in creating enchanting tales for readers of all ages
            </p>
          </div>

          {/* Author Content Grid */}
          <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-amber-50 opacity-50"></div>
            
            <div className="relative grid grid-cols-12 gap-8 p-8">
              {/* Content Column */}
              <div className="col-span-12 lg:col-span-8 space-y-6 md:space-y-8">
                {/* Author Header */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-lg">
                    <img
                      src="/Patricia.jpg"
                      alt="Patricia A Henderson"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="font-enchanted text-2xl font-bold text-gray-800">Patricia A Henderson</h3>
                    <p className="text-purple-600">Children's Book Author & Storyteller</p>
                  </div>
                </div>
                {/* Bio Content */}
                <p className="text-gray-700 leading-relaxed">
                  Welcome to Rouge's Storybook World, where imagination knows no bounds. As a passionate storyteller and self-published author, I've dedicated myself to creating enchanting tales that inspire young minds and warm hearts across generations.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  My journey began with a simple dream: to share stories that not only entertain but also empower children to believe in themselves and their dreams. Through the guidance of mentors like Paul from SCORE and the support of our growing community, this dream has blossomed into a collection of books that bring joy to families worldwide.
                </p>

                {/* Trust Indicators */}
                <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-6">
                  <div className="flex items-center space-x-3 bg-white/80 rounded-full px-4 py-2 shadow-sm">
                    <ShoppingCart className="w-5 h-5 text-amber-500" />
                    <span className="text-sm font-medium text-gray-700">Amazon KDP Author</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/80 rounded-full px-4 py-2 shadow-sm">
                    <Youtube className="w-5 h-5 text-red-500" />
                    <span className="text-sm font-medium text-gray-700">Animated Stories</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/80 rounded-full px-4 py-2 shadow-sm">
                    <Star className="w-5 h-5 text-blue-500" />
                    <span className="text-sm font-medium text-gray-700">SCORE Mentored</span>
                  </div>
                </div>

                {/* Testimonial */}
                <blockquote className="relative">
                  <div className="absolute -left-4 top-0 text-6xl text-amber-200">"</div>
                  <div className="relative pl-8">
                    <p className="text-gray-700 italic text-lg">
                      Rouge's stories have become a cherished part of our bedtime routine. The combination of beautiful illustrations and heartwarming messages makes each book special.
                    </p>
                    <footer className="mt-2 text-gray-600">
                      — Amazon Verified Purchase
                    </footer>
                  </div>
                </blockquote>
              </div>

              {/* Decorative Image Column */}
              <div className="hidden lg:block col-span-4">
                <div className="relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-amber-100/50 rounded-xl"></div>
                  <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-purple-200 to-amber-200 rounded-full opacity-20"></div>
                  <div className="absolute -left-4 top-1/4 w-32 h-32 bg-gradient-to-br from-amber-200 to-purple-200 rounded-full opacity-20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}