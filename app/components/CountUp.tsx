'use client';

import { useInView, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useRef } from 'react';

interface CountUpProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export default function CountUp({ end, suffix = '', prefix = '', duration = 2 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
    duration: duration,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(end);
    }
  }, [isInView, end, motionValue]);

  useEffect(() => {
    return springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = prefix + Math.floor(latest).toLocaleString() + suffix;
      }
    });
  }, [springValue, prefix, suffix]);

  return <span ref={ref} className="tabular-nums">{prefix}0{suffix}</span>;
}
