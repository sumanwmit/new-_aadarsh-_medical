import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { MainLayout } from './layouts/MainLayout';
import { PlusCircle } from 'lucide-react';

// Lazy loading all 5 separate React pages as strictly required
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const Gallery = lazy(() => import('./pages/Gallery').then(m => ({ default: m.Gallery })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));

// Loading spinner fallback
const PageLoader = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 space-y-4">
    <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center animate-spin">
      <PlusCircle className="w-7 h-7" />
    </div>
    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider animate-pulse">
      Loading New aadarsh Medical Hall...
    </p>
  </div>
);

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              index
              element={
                <Suspense fallback={<PageLoader />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="about"
              element={
                <Suspense fallback={<PageLoader />}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="services"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Services />
                </Suspense>
              }
            />
            <Route
              path="gallery"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Gallery />
                </Suspense>
              }
            />
            <Route
              path="contact"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Contact />
                </Suspense>
              }
            />
            {/* Fallback route */}
            <Route
              path="*"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Home />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
