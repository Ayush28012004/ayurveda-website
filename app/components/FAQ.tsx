'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SITE_CONFIG } from '../config';
import RevealWrapper from './RevealWrapper';

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="faq-item border-b border-border dark:border-darkBorder"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="faq-question w-full py-6 flex items-center justify-between text-left gap-4 group"
        aria-expanded={isOpen}
      >
        <span className="font-serif text-lg text-text dark:text-darkText group-hover:text-sageDark dark:group-hover:text-darkAccent transition-colors">
          {question}
        </span>
        <motion.span
          className="flex-shrink-0 w-8 h-8 rounded-full border border-border dark:border-darkBorder flex items-center justify-center text-sageDark dark:text-darkAccent"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2 4L6 8L10 4" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="faq-answer pb-6 text-textMuted dark:text-darkTextMuted leading-[1.8]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const f = SITE_CONFIG.faq;
  
  return (
    <motion.section
      id="faq"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="scroll-mt-24 px-8 md:px-16 py-24 bg-sectionBio dark:bg-darkSectionBio"
    >
      <RevealWrapper className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="faq-tag inline-block text-[0.73rem] tracking-[0.18em] uppercase text-sageDark dark:text-darkAccent mb-4">{f.tag}</span>
          <h2 className="faq-title font-serif text-[clamp(2rem,4vw,3rem)] font-light leading-[1.2] text-text dark:text-darkText">
            {f.title} <em className="italic text-sageDark dark:text-darkAccent">{f.titleAccent}</em>
          </h2>
        </div>
        
        <div className="faq-list">
          {f.questions.map((item, idx) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              index={idx}
            />
          ))}
        </div>
      </RevealWrapper>
    </motion.section>
  );
}
