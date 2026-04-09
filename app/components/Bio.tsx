'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { SITE_CONFIG } from '../config';
import RevealWrapper from './RevealWrapper';

export default function Bio() {
  const p = SITE_CONFIG.practitioner;
  return (
    <motion.section
      id="practitioner"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7 }}
      className="scroll-mt-24 px-8 md:px-16 py-24 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] items-center gap-20 bg-sectionBio dark:bg-darkSectionBio"
    >
      <RevealWrapper className="bio-visual">
        <div className="bio-img-frame bg-cream dark:bg-darkCream rounded-[4px] h-[460px] flex items-center justify-center text-[6rem] relative overflow-hidden">
          {p.image ? (
            <Image src={p.image} alt={p.name} fill className="object-cover" />
          ) : (
            <span className="text-[6rem]">{p.icon}</span>
          )}
          <div className="absolute bottom-[-0.75rem] right-[-0.75rem] w-[70%] h-[70%] border border-sageLight dark:border-sageDark rounded-[4px] -z-10"></div>
        </div>
        <div className="bio-credentials flex flex-wrap gap-2 mt-6">
          {p.credentials.map((c, idx) => (
            <motion.span
              key={c}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="cred-tag text-[0.72rem] tracking-[0.1em] uppercase px-4 py-2 rounded-full border border-sageDark dark:border-darkAccent text-sageDark dark:text-darkAccent"
              whileHover={{ scale: 1.05 }}
            >
              {c}
            </motion.span>
          ))}
        </div>
      </RevealWrapper>
      <RevealWrapper>
        <div className="bio-tag text-[0.73rem] tracking-[0.18em] uppercase text-sageDark dark:text-darkAccent mb-4">{p.tag}</div>
        <h2 className="bio-name font-serif text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.2] mb-6 text-text dark:text-darkText">{p.name}</h2>
        {p.bio.map((b, idx) => (
          <p key={`${p.name}-bio-${idx}`} className="bio-text text-[0.95rem] leading-[1.85] text-textMuted dark:text-darkTextMuted mb-2">{b}</p>
        ))}
        <p className="bio-quote italic text-barkLight dark:text-goldLight font-serif text-[1.05rem] border-l-[2px] border-sage dark:border-darkAccent pl-4 mt-6 text-text dark:text-darkText">{`"${p.quote}"`}</p>
      </RevealWrapper>
    </motion.section>
  );
}
