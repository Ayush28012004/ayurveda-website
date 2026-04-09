'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CursorFollower() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    const observer = new MutationObserver(() => {
      const elements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
      elements.forEach((el) => {
        el.addEventListener('mouseenter', handleHoverStart);
        el.addEventListener('mouseleave', handleHoverEnd);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
      observer.disconnect();
    };
  }, [cursorX, cursorY, isVisible]);

  if (typeof window === 'undefined' || !isVisible) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-[60] hidden md:block"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <motion.div
        className="rounded-full"
        animate={{
          width: isHovering ? 50 : 12,
          height: isHovering ? 50 : 12,
          backgroundColor: isHovering ? 'rgba(122, 158, 126, 0.3)' : 'rgba(122, 158, 126, 0.8)',
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
}
