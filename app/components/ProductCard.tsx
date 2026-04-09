'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import Image from 'next/image';

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

interface ProductCardProps {
  product: Product;
  bgClass: Record<string, string>;
  badgeClass: Record<string, string>;
  catLabel: Record<string, string>;
  idx: number;
  onSelect: (product: Product) => void;
  isSelected: boolean;
}

export default function ProductCard({ product: p, bgClass, badgeClass, catLabel, idx, onSelect, isSelected }: ProductCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['12deg', '-12deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-12deg', '12deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: idx * 0.05 }}
      className={`product-card group relative bg-white dark:bg-darkCream border-2 border-transparent dark:border-darkBorder rounded-xl overflow-hidden transition-all duration-300 cursor-pointer ${isSelected ? 'border-sageDark dark:border-darkAccent shadow-[0_0_30px_rgba(78,114,83,0.3)] dark:shadow-[0_0_30px_rgba(122,224,122,0.2)]' : 'hover:border-sageLight dark:hover:border-sageDark hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]'}`}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(p)}
      style={{
        rotateY,
        rotateX,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ y: -6, scale: 1.02 }}
      layout
    >
      <div className={`product-img h-[130px] sm:h-[150px] md:h-[170px] flex items-center justify-center text-[2.5rem] sm:text-[3rem] relative overflow-hidden transition-transform duration-300 group-hover:scale-105 ${bgClass[p.bgClass]}`}>
        {p.badge && (
          <span className={`product-badge absolute top-3 left-3 text-[0.5rem] sm:text-[0.55rem] tracking-[0.12em] uppercase px-2.5 py-1 rounded-full font-semibold z-10 ${badgeClass[p.badge]}`}>
            {p.badge[0].toUpperCase() + p.badge.slice(1)}
          </span>
        )}
        <motion.div 
          className="text-[2.5rem] sm:text-[3rem] transition-transform duration-300 group-hover:scale-110"
          whileHover={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 0.3 }}
        >
          {p.image ? (
            <Image src={p.image} alt={p.name} fill className="object-cover" />
          ) : (
            p.icon
          )}
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <motion.div 
          className="absolute bottom-3 left-3 right-3 text-white text-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
        >
          <span className="text-xs font-medium tracking-wide">Click to view details</span>
        </motion.div>
      </div>
      
      <div className="product-body p-3 sm:p-4 flex flex-col">
        <div className="product-cat text-[0.5rem] sm:text-[0.55rem] tracking-[0.16em] uppercase text-sageDark dark:text-darkAccent mb-1 font-medium">{catLabel[p.category]}</div>
        <div className="product-name font-serif text-base sm:text-lg font-semibold text-text dark:text-darkText mb-1 leading-tight group-hover:text-sageDark dark:group-hover:text-darkAccent transition-colors">{p.name}</div>
        <div className="product-short-desc text-[0.65rem] sm:text-[0.7rem] text-textMuted dark:text-darkTextMuted mb-3 line-clamp-2 leading-relaxed">{p.shortDesc}</div>
        
        <div className="product-footer flex items-center justify-between pt-2 sm:pt-3 mt-auto border-t border-border dark:border-darkBorder">
          <div className="product-price font-serif text-lg sm:text-xl font-bold text-text dark:text-darkText">
            {p.price} <span className="text-[0.6rem] sm:text-[0.65rem] text-textMuted dark:text-darkTextMuted font-normal">/ {p.unit}</span>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              onSelect(p);
            }}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-sageDark dark:bg-darkAccent text-white dark:text-darkBg flex items-center justify-center text-sm font-bold cursor-pointer shadow-md hover:shadow-lg transition-all"
          >
            →
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
