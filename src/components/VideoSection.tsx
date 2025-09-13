import React from 'react';
import { Youtube, Star } from 'lucide-react';

export function VideoSection() {
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
      className="relative z-10 bg-gradient-to-b from-purple-500 via-purple-700 to-purple-950 py-20 section-fade-up"
      style={{ '--gradient-start': 'rgb(168, 85, 247)', '--gradient-end': 'rgb(88, 28, 135)' } as React.CSSProperties}
    >
      <div className="section-transition section-transition-top"></div>
      <div className="section-transition section-transition-bottom"></div>
      {/* Shadow Transition */}
      <div className="absolute -top-24 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-purple-500/20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 opacity-0 animate-fade-in">
            <h2 className="font-enchanted text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              Experience Stories Come to Life!
            </h2>
            <p className="text-purple-100 text-base sm:text-lg max-w-2xl mx-auto">
              Magical tales that ignite imagination for readers of all ages
            </p>
          </div>

          {/* Video Container */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl mb-8 opacity-0 animate-fade-in-delay bg-purple-900/50 backdrop-blur-sm">
            <iframe
              width="560"
              height="315"
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/Invuo-N7fnw?si=L7BLEITueJQkVbpN"
              title="Rouge's Storybook World - Animated Stories"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          {/* Testimonial */}
          <div className="text-center mb-8 opacity-0 animate-fade-in-delay-2">
            <p className="text-purple-100/90 text-lg italic">
              "These animated stories bring a whole new dimension to children's literature!"
            </p>
            <div className="flex items-center justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-amber-400"
                  fill="currentColor"
                />
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center opacity-0 animate-fade-in-delay-3">
            <a
              href="https://youtube.com/@roguesstorybookworld?si=lwteP98ce7V9dhtb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-500 text-white text-xl px-8 py-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Youtube className="w-6 h-6" />
              <span>Watch More on YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}