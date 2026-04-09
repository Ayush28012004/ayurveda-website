'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { SITE_CONFIG } from '../config';
import RevealWrapper from './RevealWrapper';
import ProductCard from './ProductCard';
import RippleButton from './RippleButton';

interface Product {
  name: string;
  category: string;
  badge?: string;
  icon: string;
  image?: string;
  bgClass: string;
  shortDesc: string;
  description: string;
  benefits: string[];
  price: string;
  unit: string;
  affiliateLink: string;
}

export default function Products() {
  const ps = SITE_CONFIG.productsSection;
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = activeFilter === 'all' ? SITE_CONFIG.products : SITE_CONFIG.products.filter(p => p.category === activeFilter);

  const catLabel: Record<string, string> = {
    herbs: 'Herbal Supplements',
    oils: 'Oils & Serums',
    teas: 'Teas & Kadha',
    skin: 'Skincare & Beauty'
  };

  const badgeClass: Record<string, string> = {
    popular: 'bg-sageDark text-white dark:bg-darkAccent dark:text-darkBg',
    new: 'bg-gold text-white',
    organic: 'bg-bark text-white dark:bg-barkLight dark:text-white'
  };

  const bgClass: Record<string, string> = {
    'bg-herbs': 'bg-gradient-to-br from-[#e8f0e9] to-[#d4e6d6] dark:from-[#1a3d22] dark:to-[#152d19]',
    'bg-oils': 'bg-gradient-to-br from-[#f0ece4] to-[#e4ddd0] dark:from-[#2a2822] dark:to-[#1f1d18]',
    'bg-teas': 'bg-gradient-to-br from-[#e9ede4] to-[#d9e4d4] dark:from-[#1f2d1c] dark:to-[#182315]',
    'bg-skin': 'bg-gradient-to-br from-[#f0ebe8] to-[#e8ddd8] dark:from-[#2a2420] dark:to-[#1e1a17]'
  };

  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProduct]);

  const handleClose = () => setSelectedProduct(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <motion.section
      id="products"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="scroll-mt-24 bg-sectionProducts dark:bg-darkSectionProducts"
    >
      <RevealWrapper className="section-header text-center px-8 md:px-16 pt-20 pb-10">
        <span className="section-tag inline-block text-[0.73rem] tracking-[0.18em] uppercase text-sageDark dark:text-darkAccent mb-4">{ps.tag}</span>
        <h2 className="section-title font-serif text-[clamp(2.2rem,4vw,3.5rem)] font-light leading-[1.15] text-text dark:text-darkText">
          {ps.title} <em className="italic text-sageDark dark:text-darkAccent">{ps.titleAccent}</em> {ps.titleEnd}
        </h2>
        <p className="section-sub text-[0.95rem] text-textMuted dark:text-darkTextMuted mt-2 max-w-[55ch] mx-auto leading-[1.75]">{ps.subtitle}</p>
      </RevealWrapper>

      <div className="filter-bar flex justify-center gap-2 flex-wrap px-8 md:px-16 pb-10">
        {ps.filters.map((f) => (
          <motion.button
            key={f.value}
            className={`filter-btn px-4 sm:px-7 py-2 rounded-full border text-[0.7rem] sm:text-[0.78rem] tracking-[0.08em] uppercase cursor-pointer font-medium transition-all duration-250 ${
              activeFilter === f.value
                ? 'bg-sageDark border-sageDark text-white dark:bg-darkAccent dark:border-darkAccent dark:text-darkBg'
                : 'bg-white dark:bg-[#1a2f1f] border-border dark:border-darkBorder text-text dark:text-darkText hover:bg-sageDark hover:border-sageDark hover:text-white dark:hover:bg-darkAccent dark:hover:border-darkAccent dark:hover:text-darkBg'
            }`}
            onClick={() => setActiveFilter(f.value)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {f.label}
          </motion.button>
        ))}
      </div>

      <div className="products-grid grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 px-4 sm:px-8 md:px-16 pb-24 max-w-7xl mx-auto">
        {filteredProducts.map((p, idx) => (
          <ProductCard
            key={p.name}
            product={p}
            bgClass={bgClass}
            badgeClass={badgeClass}
            catLabel={catLabel}
            idx={idx}
            onSelect={setSelectedProduct}
            isSelected={selectedProduct?.name === p.name}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={handleClose}
          >
            <motion.div 
              className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm"
              initial={{ backdropFilter: 'blur(0px)' }}
              animate={{ backdropFilter: 'blur(8px)' }}
              exit={{ backdropFilter: 'blur(0px)' }}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-darkBg rounded-2xl shadow-2xl dark:shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 dark:bg-darkBg/90 flex items-center justify-center text-text dark:text-darkText hover:bg-sageDark hover:text-white dark:hover:bg-darkAccent dark:hover:text-darkBg transition-all shadow-lg"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <div className={`product-modal-img h-[200px] sm:h-[250px] flex items-center justify-center text-[5rem] sm:text-[6rem] relative ${bgClass[selectedProduct.bgClass]}`}>
                {selectedProduct.badge && (
                  <span className={`absolute top-4 left-4 text-[0.65rem] tracking-[0.12em] uppercase px-3 py-1.5 rounded-full font-semibold ${badgeClass[selectedProduct.badge]}`}>
                    {selectedProduct.badge[0].toUpperCase() + selectedProduct.badge.slice(1)}
                  </span>
                )}
                {selectedProduct.image ? (
                  <Image src={selectedProduct.image} alt={selectedProduct.name} fill className="object-cover" />
                ) : (
                  <motion.span 
                    className="text-[5rem] sm:text-[6rem]"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    {selectedProduct.icon}
                  </motion.span>
                )}
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[0.6rem] tracking-[0.16em] uppercase text-sageDark dark:text-darkAccent font-semibold">{catLabel[selectedProduct.category]}</span>
                  <span className="w-1 h-1 rounded-full bg-textMuted dark:bg-darkTextMuted" />
                  <span className="text-[0.6rem] tracking-[0.16em] uppercase text-textMuted dark:text-darkTextMuted">{selectedProduct.unit}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-text dark:text-darkText mb-3">{selectedProduct.name}</h3>
                
                <p className="text-lg sm:text-xl font-serif font-bold text-sageDark dark:text-darkAccent mb-4">
                  {selectedProduct.price} <span className="text-sm font-normal text-textMuted dark:text-darkTextMuted">/ {selectedProduct.unit}</span>
                </p>

                <p className="text-[0.9rem] sm:text-[0.95rem] text-textMuted dark:text-darkTextMuted leading-relaxed mb-6">
                  {selectedProduct.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProduct.benefits.map((benefit: string) => (
                    <span 
                      key={benefit} 
                      className="text-[0.7rem] tracking-[0.08em] uppercase px-4 py-2 rounded-full bg-offWhite dark:bg-darkCream text-text dark:text-darkText border border-border dark:border-darkBorder font-medium"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <RippleButton
                    href={selectedProduct.affiliateLink}
                    className="flex-1 bg-sageDark dark:bg-darkAccent text-white dark:text-darkBg px-6 py-4 rounded-xl text-sm tracking-[0.1em] uppercase font-bold text-center hover:bg-bark dark:hover:bg-sageDark transition-colors"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    Buy Now → 
                  </RippleButton>
                  <button
                    onClick={handleClose}
                    className="px-6 py-4 rounded-xl border-2 border-border dark:border-darkBorder text-text dark:text-darkText text-sm tracking-[0.1em] uppercase font-bold hover:border-sageDark dark:hover:border-darkAccent hover:text-sageDark dark:hover:text-darkAccent transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
