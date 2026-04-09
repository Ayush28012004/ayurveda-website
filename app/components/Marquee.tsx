'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import { SITE_CONFIG } from '../config';

export default function Marquee() {
  const items = [...SITE_CONFIG.marquee.items, ...SITE_CONFIG.marquee.items];
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      className="overflow-hidden border-t border-b border-border py-4 bg-sectionMarquee dark:bg-darkSectionMarquee dark:border-darkBorder"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      tabIndex={0}
      aria-label="Pause marquee with space"
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Spacebar') {
          e.preventDefault();
          setIsPaused((p) => !p);
        }
      }}
    >
      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={isPaused ? { x: 0 } : { x: ['0%', '-50%'] }}
        transition={isPaused ? { duration: 0 } : { repeat: Infinity, duration: 24, ease: 'linear' }}
      >
        {items.map((name, i) => (
          <span key={`${name}-${i}`} className="text-[0.73rem] tracking-[0.18em] uppercase text-textMuted dark:text-darkTextMuted font-medium flex items-center gap-2 flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-sage dark:bg-darkAccent"></span>
            {name}
          </span>
        ))}
      </motion.div>
    </section>
  );
}