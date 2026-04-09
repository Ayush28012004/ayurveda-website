'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { SITE_CONFIG } from '../config';
import RevealWrapper from './RevealWrapper';

export default function Testimonials() {
  const ts = SITE_CONFIG.testimonialsSection;
  return (
    <motion.section
      className="testimonials bg-sectionTestimonials dark:bg-darkSectionTestimonials px-8 md:px-16 py-24"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <RevealWrapper className="section-header text-center mb-12">
        <span className="section-tag inline-block text-[0.73rem] tracking-[0.18em] uppercase text-sageDark dark:text-darkAccent mb-4">{ts.tag}</span>
        <h2 className="section-title font-serif text-[clamp(1.8rem,3vw,2.8rem)] font-light text-text dark:text-darkText">
          {ts.title} <em className="italic text-sageDark dark:text-darkAccent">{ts.titleAccent}</em> {ts.titleEnd}
        </h2>
      </RevealWrapper>
      <div className="testimonials-grid grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {SITE_CONFIG.testimonials.map((t, idx) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="testi-card bg-white dark:bg-darkCream rounded-[4px] p-8 border border-border dark:border-darkBorder"
          >
            <div className="testi-stars text-gold dark:text-goldLight text-[0.9rem] mb-4">{'★'.repeat(t.stars)}</div>
            <div className="testi-text font-serif italic text-[1.1rem] leading-[1.65] text-text dark:text-darkText mb-7">&ldquo;{t.text}&rdquo;</div>
            <div className="testi-author flex items-center gap-4">
              {t.image ? (
                <div className="testi-avatar w-10 h-10 rounded-full overflow-hidden relative flex-shrink-0">
                  <Image src={t.image} alt={t.name} fill className="object-cover" />
                </div>
              ) : (
                <div className="testi-avatar w-10 h-10 rounded-full flex items-center justify-center text-base bg-sageLight dark:bg-sageDark text-white flex-shrink-0">{t.avatar}</div>
              )}
              <div>
                <div className="testi-name text-[0.85rem] font-medium text-text dark:text-darkText">{t.name}</div>
                <div className="testi-loc text-[0.75rem] text-textMuted dark:text-darkTextMuted">{t.location}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}