'use client';

import { motion, useScroll } from 'motion/react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-40 h-1 bg-sageDark dark:bg-darkAccent origin-left"
      style={{ scaleX: scrollYProgress }}
      initial={{ scaleX: 0 }}
    />
  );
}