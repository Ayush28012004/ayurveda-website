'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import { SITE_CONFIG } from '../config';

export default function Newsletter() {
  const n = SITE_CONFIG.newsletter;
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('success');
    setMessage(`Thanks ${email}, we’ll notify you soon!`);
    try {
      const stored = JSON.parse(localStorage.getItem('newsletter-emails') || '[]');
      localStorage.setItem('newsletter-emails', JSON.stringify([...stored, email]));
    } catch {
      // Local storage may be unavailable; fallback is fine.
    }
    setEmail('');
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="scroll-mt-24 newsletter bg-sectionNewsletter dark:bg-darkSectionNewsletter px-8 md:px-16 py-20 text-center"
    >
      <h2 className="newsletter-title font-serif text-[clamp(1.8rem,3vw,2.8rem)] font-light text-white dark:text-darkText mb-2">{n.title}</h2>
      <p className="newsletter-sub text-cream dark:text-darkTextMuted text-[0.95rem] mb-8">{n.subtitle}</p>
      <form onSubmit={handleSubmit} className="newsletter-form flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <input
          type="email"
          aria-label="Enter your email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          className="newsletter-input flex-1 px-6 py-4 rounded-[2px] text-base bg-[rgba(255,255,255,0.15)] text-white dark:text-darkText outline-none border border-[rgba(255,255,255,0.25)] dark:border-[rgba(255,255,255,0.15)] placeholder:text-[rgba(255,255,255,0.55)]"
          placeholder={n.placeholder}
          required
        />
        <motion.button
          type="submit"
          className="newsletter-btn bg-white dark:bg-darkAccent text-sageDark dark:text-darkBg px-6 py-4 rounded-[2px] text-[0.8rem] tracking-[0.1em] uppercase font-medium cursor-pointer transition-colors duration-250 hover:bg-cream dark:hover:bg-sageDark"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {n.btnLabel}
        </motion.button>
      </form>
      {status !== 'idle' && (
        <div className={`mt-4 text-sm ${status === 'success' ? 'text-green-200' : 'text-red-200'}`}>{message}</div>
      )}
    </motion.section>
  );
}