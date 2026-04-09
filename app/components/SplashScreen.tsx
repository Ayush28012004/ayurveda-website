'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SITE_CONFIG } from '../config';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const brandName = SITE_CONFIG.brand.name;
  const accent = SITE_CONFIG.brand.nameAccent;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const nameWithoutAccent = accent && brandName.includes(accent)
    ? brandName.replace(accent, '')
    : brandName;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-darkBg"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-6xl md:text-7xl mb-4"
            >
              🌿
            </motion.div>
            <div className="font-serif text-4xl md:text-5xl font-semibold tracking-[0.02em]">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-text dark:text-darkText"
              >
                {nameWithoutAccent}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-sageDark dark:text-darkAccent"
              >
                {accent}
              </motion.span>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="text-textMuted dark:text-darkTextMuted mt-4 text-sm tracking-[0.2em] uppercase"
            >
              Ancient Wisdom, Modern Wellness
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
