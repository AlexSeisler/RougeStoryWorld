/**
 * main.tsx
 * ------------------
 * React application bootstrap.
 * Mounts <App /> into the root element with React StrictMode.
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
