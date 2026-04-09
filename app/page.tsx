'use client';

import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Bio from './components/Bio';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ThemeProvider from './components/ThemeProvider';
import ScrollProgress from './components/ScrollProgress';
import AnimatedBackground from './components/AnimatedBackground';
import SplashScreen from './components/SplashScreen';
import CursorFollower from './components/CursorFollower';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  const handleSkipToContent = () => {
    const main = document.getElementById('main-content');
    if (main) {
      main.focus();
      main.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <ThemeProvider>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <a
        href="#main-content"
        onClick={handleSkipToContent}
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-sageDark focus:text-white focus:rounded-lg focus:text-sm focus:font-medium focus:transition-colors"
      >
        Skip to main content
      </a>
      <div className="min-h-screen font-sans font-light overflow-x-hidden transition-colors duration-300">
        <CursorFollower />
        <Nav />
        <AnimatedBackground />
        <ScrollProgress />
        <main id="main-content" className="pt-24" tabIndex={-1}>
          <Hero />
          <Marquee />
          <Products />
          <About />
          <FAQ />
          <Testimonials />
          <Bio />
          <Newsletter />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}
