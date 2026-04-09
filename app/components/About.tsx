'use client';

import { motion } from 'motion/react';
import { SITE_CONFIG } from '../config';
import RevealWrapper from './RevealWrapper';

export default function About() {
  const a = SITE_CONFIG.about;
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="scroll-mt-24 px-8 md:px-16 py-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-20 max-w-6xl mx-auto bg-sectionAbout dark:bg-darkSectionAbout"
    >
      <RevealWrapper>
        <div className="about-tag text-[0.73rem] tracking-[0.18em] uppercase text-sageDark dark:text-darkAccent mb-4">{a.tag}</div>
        <h2 className="about-title font-serif text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.2] mb-7 text-text dark:text-darkText">
          {a.titleLine1}<br />
          <em className="text-sageDark dark:text-darkAccent italic">{a.titleLine2}</em>
        </h2>
        <p className="about-body text-[0.95rem] leading-[1.85] text-textMuted dark:text-darkTextMuted">{a.body}</p>
      </RevealWrapper>
      <RevealWrapper className="about-features grid grid-cols-1 sm:grid-cols-2 gap-4">
        {a.features.map((f, idx) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="feature-box p-6 bg-offWhite dark:bg-darkCream rounded-[3px] border-l-[2px] border-sageDark dark:border-darkAccent"
            whileHover={{ scale: 1.02 }}
          >
            <div className="feature-box-icon text-[1.4rem] mb-3">{f.icon}</div>
            <div className="feature-box-title font-serif text-[1.1rem] mb-1 text-text dark:text-darkText">{f.title}</div>
            <div className="feature-box-desc text-[0.8rem] text-textMuted dark:text-darkTextMuted leading-[1.6]">{f.desc}</div>
          </motion.div>
        ))}
      </RevealWrapper>
    </motion.section>
  );
}
