/**
 * Collection.tsx
 * ------------------
 * Collection page.
 * Displays the full set of featured books.
 */

import React from 'react';
import { FeaturedBooks } from '../components/FeaturedBooks';

export function Collection() {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <FeaturedBooks />
    </div>
  );
}
