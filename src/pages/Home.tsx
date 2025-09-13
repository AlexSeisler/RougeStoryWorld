import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { FeaturedBooks } from '../components/FeaturedBooks';
import { VideoSection } from '../components/VideoSection';
import { AboutSection } from '../components/AboutSection';
import { Testimonials } from '../components/Testimonials';
import { EmailCollection } from '../components/EmailCollection';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <div className="min-h-screen relative">
      <HeroSection />
      <FeaturedBooks />
      <Testimonials />
      <VideoSection />
      <AboutSection />
      <EmailCollection />
      <Footer />
    </div>
  );
}