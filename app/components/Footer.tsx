'use client';

import { motion } from 'motion/react';
import { SITE_CONFIG } from '../config';

export default function Footer() {
  const b = SITE_CONFIG.brand;
  const f = SITE_CONFIG.footer;
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="bg-sectionFooter dark:bg-darkSectionFooter px-8 md:px-16 py-16 pb-8"
    >
      <div className="footer-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <div className="footer-brand font-serif text-[1.5rem] font-semibold text-white dark:text-darkText mb-2">
            {b.nameAccent && b.name.includes(b.nameAccent)
              ? b.name.replace(b.nameAccent, '')
              : b.name}
            <span className="text-sageLight dark:text-darkAccent">{b.nameAccent}</span>
          </div>
          <p className="footer-desc text-[0.83rem] leading-[1.75] text-[rgba(255,255,255,0.7)] dark:text-[rgba(240,242,240,0.7)]">{b.description}</p>
        </div>
        {f.columns.map((col) => (
          <div key={col.title}>
            <div className="footer-col-title text-[0.73rem] tracking-[0.18em] uppercase text-white dark:text-darkText mb-6">{col.title}</div>
            <ul className="footer-links list-none space-y-2">
              {col.links.map((link) => (
                <li key={`${link.label}-${link.href}`}>
                  <motion.a href={link.href} className="text-[rgba(255,255,255,0.55)] dark:text-[rgba(240,242,240,0.6)] no-underline text-[0.85rem] transition-colors duration-200 hover:text-sageLight dark:hover:text-darkAccent" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom border-t border-[rgba(255,255,255,0.08)] dark:border-[rgba(240,242,240,0.1)] pt-6 flex flex-col sm:flex-row justify-between items-center text-[0.78rem]">
        <span className="text-[rgba(255,255,255,0.5)] dark:text-[rgba(240,242,240,0.5)]">© {b.copyrightYear} {b.name}. All rights reserved.</span>
        <span>
          {f.bottomLinks.map((link, idx) => (
            <span key={`${link.label}-${link.href}`}>
              <motion.a href={link.href} className="text-[rgba(255,255,255,0.5)] dark:text-[rgba(240,242,240,0.5)] no-underline hover:text-[rgba(255,255,255,0.7)] dark:hover:text-[rgba(240,242,240,0.8)]" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                {link.label}
              </motion.a>
              {idx < f.bottomLinks.length - 1 && ' · '}
            </span>
          ))}
        </span>
      </div>
      <p className="footer-disc text-[0.73rem] text-[rgba(255,255,255,0.35)] dark:text-[rgba(240,242,240,0.35)] max-w-[60ch] leading-[1.6] mt-2">{b.affiliateDisclosure}</p>
    </motion.footer>
  );
}
