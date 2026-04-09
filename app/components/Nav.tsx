'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from './ThemeProvider';
import { SITE_CONFIG } from '../config';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMounted]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const handleNavClick = () => setMobileMenuOpen(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-4 backdrop-blur-lg border-b transition-all duration-300 ${scrolled ? 'shadow-[0_2px_24px_rgba(0,0,0,0.12)]' : ''} bg-white/80 dark:bg-darkBg/80 dark:border-darkBorder`}
      >
        <a href="#" className="font-serif text-[1.45rem] md:text-[1.55rem] font-semibold tracking-[0.02em] text-text dark:text-darkText no-underline" aria-label="Go to home">
          {SITE_CONFIG.brand.nameAccent && SITE_CONFIG.brand.name.includes(SITE_CONFIG.brand.nameAccent)
            ? SITE_CONFIG.brand.name.replace(SITE_CONFIG.brand.nameAccent, '')
            : SITE_CONFIG.brand.name}
          <span className="text-sageDark dark:text-darkAccent">{SITE_CONFIG.brand.nameAccent}</span>
        </a>

        <ul className="hidden lg:flex gap-8 list-none text-sm">
          {SITE_CONFIG.nav.links.map((link) => (
            <li key={`${link.label}-${link.href}`}>
              <motion.a href={link.href} className="tracking-[0.08em] uppercase text-textMuted dark:text-darkTextMuted no-underline font-normal transition-colors duration-250 hover:text-sageDark dark:hover:text-darkAccent" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                {link.label}
              </motion.a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <motion.button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle light and dark mode"
            className="px-3 py-2 rounded-lg border border-border dark:border-darkBorder bg-white dark:bg-darkBg text-sm font-medium text-text dark:text-darkText hover:bg-sageLight dark:hover:bg-darkBorder transition-colors duration-250"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMounted ? (theme === 'dark' ? '☀️ Light' : '🌙 Dark') : 'Toggle theme'}
          </motion.button>
          <motion.a
            href={SITE_CONFIG.nav.ctaHref}
            className="hidden sm:inline-flex bg-sageDark dark:bg-darkAccent text-white dark:text-darkBg px-4 py-2 rounded-lg text-[0.78rem] tracking-[0.08em] uppercase no-underline font-medium transition-colors duration-250 hover:bg-bark dark:hover:bg-sageDark"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {SITE_CONFIG.nav.ctaLabel}
          </motion.a>
          
          <motion.button
            type="button"
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <motion.span
              className="block w-6 h-0.5 bg-text dark:bg-white"
              animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-text dark:bg-white"
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-text dark:bg-white"
              animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="absolute inset-0 bg-black/50" />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-[280px] bg-white dark:bg-darkBg shadow-xl pt-24 px-8"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="flex flex-col gap-6 list-none text-lg">
                {SITE_CONFIG.nav.links.map((link, index) => (
                  <motion.li
                    key={`${link.label}-${link.href}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      onClick={handleNavClick}
                      className="tracking-[0.08em] uppercase text-textMuted dark:text-darkTextMuted no-underline font-normal transition-colors duration-250 hover:text-sageDark dark:hover:text-darkAccent"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: SITE_CONFIG.nav.links.length * 0.1 }}
                >
                  <a
                    href={SITE_CONFIG.nav.ctaHref}
                    onClick={handleNavClick}
                    className="inline-flex bg-sageDark dark:bg-darkAccent text-white dark:text-darkBg px-6 py-3 rounded-lg text-sm tracking-[0.08em] uppercase no-underline font-medium"
                  >
                    {SITE_CONFIG.nav.ctaLabel}
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
