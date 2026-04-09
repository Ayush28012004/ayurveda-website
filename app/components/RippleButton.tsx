'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

interface RippleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
}

export default function RippleButton({
  children,
  onClick,
  className = '',
  href,
  target,
  rel,
  ...props
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = { id: Date.now(), x, y };
    setRipples(prev => [...prev, newRipple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);

    onClick?.();
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      className={`relative overflow-hidden ${className}`}
      onClick={handleClick}
      href={href}
      target={target}
      rel={rel}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
      {ripples.map(ripple => (
        <motion.span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full pointer-events-none"
          initial={{ width: 0, height: 0, opacity: 0.6 }}
          animate={{ width: 200, height: 200, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            left: ripple.x - 100,
            top: ripple.y - 100,
          }}
        />
      ))}
    </Component>
  );
}