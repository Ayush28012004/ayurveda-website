'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { SITE_CONFIG } from '../config';
import TextReveal from './TextReveal';
import CountUp from './CountUp';

export default function Hero() {
  const h = SITE_CONFIG.hero;
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  const titleVariant = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.1 + i * 0.1 } }),
  };

  const parseNumber = (numStr: string) => {
    const cleaned = numStr.replace(/[^0-9]/g, '');
    return parseInt(cleaned) || 0;
  };

  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-4rem)] grid grid-cols-1 lg:grid-cols-2 items-center px-8 md:px-16 pt-24 pb-16 gap-14 bg-sectionHero dark:bg-darkSectionHero">
      <motion.div className="hero-gradient-circle absolute top-[-20%] right-[-10%] w-[55vw] h-[55vw] opacity-45 pointer-events-none bg-sageLight dark:bg-sageDark" style={{ y }} />

      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="hero-content"
      >
        <motion.div custom={0} variants={titleVariant} className="hero-eyebrow flex items-center gap-3 mb-6">
          <div className="w-10 h-px bg-sageDark dark:bg-darkAccent" />
          <span className="text-[0.75rem] tracking-[0.18em] uppercase text-sageDark dark:text-darkAccent font-medium">{h.eyebrow}</span>
        </motion.div>

        <motion.h1 custom={1} variants={titleVariant} className="hero-title font-serif text-[clamp(2.75rem,5vw,5.25rem)] font-light leading-[1.08] text-text dark:text-darkText mb-8">
          {h.titleLine1}<br />
          <em className="text-sageDark dark:text-darkAccent italic">{h.titleLine2}</em><br />
          {h.titleLine3}
        </motion.h1>

        <motion.div custom={2} variants={titleVariant} className="hero-desc text-base leading-[1.8] text-textMuted dark:text-darkTextMuted max-w-[42ch] mb-10">
          <TextReveal text={h.description} delay={0.5} />
        </motion.div>

        <motion.div custom={3} variants={titleVariant} className="hero-actions flex flex-wrap gap-4 items-center">
          <motion.a href={h.primaryBtn.href} className="btn-primary bg-sageDark dark:bg-darkAccent text-white dark:text-darkBg px-8 py-3 rounded-[2px] text-sm tracking-[0.08em] uppercase font-semibold transition-all duration-250 border-[1.5px] border-sageDark dark:border-darkAccent hover:bg-bark" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            {h.primaryBtn.label}
          </motion.a>
          <motion.a href={h.secondaryBtn.href} className="btn-outline text-text dark:text-darkText px-8 py-3 rounded-[2px] text-sm tracking-[0.08em] uppercase font-normal transition-all duration-250 border-[1.5px] border-border dark:border-darkBorder hover:border-sageDark hover:text-sageDark dark:hover:text-darkAccent" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            {h.secondaryBtn.label}
          </motion.a>
        </motion.div>

        <motion.div custom={4} variants={titleVariant} className="hero-stats flex flex-wrap gap-8 mt-14">
          {h.stats.map((stat) => (
            <div key={stat.label}>
              <div className="stat-num font-serif text-2xl font-light text-text dark:text-darkText">
                <CountUp end={parseNumber(stat.number)} suffix={stat.number.replace(/[0-9]/g, '')} />
              </div>
              <div className="stat-label text-[0.72rem] tracking-[0.08em] uppercase text-textMuted dark:text-darkTextMuted">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 64 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="hero-visual flex justify-center items-center">
        <div className="hero-illustration w-full max-w-[520px] relative">
          <div className="absolute inset-0 bg-gradient-to-br from-sageLight/30 to-goldLight/30 dark:from-sageDark/20 dark:to-gold/10 rounded-full blur-3xl" />
          <div className="relative bg-white dark:bg-darkBg rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.3)] border border-border dark:border-darkBorder overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="text-[0.7rem] tracking-[0.2em] uppercase text-sageDark dark:text-darkAccent mb-6 font-medium">Featured Products</div>
              <div className="grid grid-cols-2 gap-4">
                {(h.previewCards?.length ?? 0) > 0 ? (
                  h.previewCards.map((card, idx) => (
                    <motion.div 
                      key={card.name} 
                      initial={{ opacity: 0, y: 20 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      className={`mini-card group relative bg-offWhite dark:bg-darkCream rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer ${card.featured ? 'col-span-2 bg-gradient-to-br from-sageLight/50 to-sageLight/20 dark:from-sageDark/30 dark:to-sageDark/10 border border-sageLight/30 dark:border-darkBorder' : ''}`}
                    >
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-sageDark dark:bg-darkAccent rounded-full flex items-center justify-center text-white dark:text-darkBg text-xs shadow-lg">
                        {card.image ? <Image src={card.image} alt={card.name} fill className="object-cover rounded-full" /> : card.icon}
                      </div>
                      <div className="mini-card-icon text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {card.image ? <Image src={card.image} alt={card.name} width={32} height={32} className="object-contain" /> : card.icon}
                      </div>
                      <div className="mini-card-label text-[0.65rem] tracking-[0.1em] uppercase text-textMuted dark:text-darkTextMuted mb-1">{card.label}</div>
                      <div className="mini-card-name font-serif text-sm text-text dark:text-darkText font-medium leading-tight">{card.name}</div>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-2 text-textMuted dark:text-darkTextMuted text-center py-8">No featured products available yet.</div>
                )}
              </div>
            </div>
            <div className="px-6 md:px-8 py-4 bg-cream/50 dark:bg-darkCream/50 border-t border-border dark:border-darkBorder flex items-center justify-between">
              <div className="text-xs text-textMuted dark:text-darkTextMuted">
                <span className="font-medium text-text dark:text-darkText">40+</span> Curated Products
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-sageDark dark:bg-darkAccent rounded-full animate-pulse" />
                <span className="text-xs text-textMuted dark:text-darkTextMuted">Now Live</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
