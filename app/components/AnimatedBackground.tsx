'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function AnimatedBackground() {
  const { scrollY } = useScroll();
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
    const newParticles: Particle[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.15 + 0.05,
    }));
    setParticles(newParticles);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 left-10 w-[400px] h-[400px] rounded-full bg-sageLight/20 dark:bg-sageDark/10 blur-[100px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-40 right-10 w-[500px] h-[500px] rounded-full bg-goldLight/15 dark:bg-gold/10 blur-[120px]"
      />
      
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grain" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <rect width="200" height="200" fill="transparent" />
              <circle cx="25" cy="25" r="1" fill="currentColor" className="text-sageDark dark:text-white" />
              <circle cx="75" cy="75" r="1" fill="currentColor" className="text-sageDark dark:text-white" />
              <circle cx="125" cy="50" r="0.5" fill="currentColor" className="text-sageDark dark:text-white" />
              <circle cx="175" cy="125" r="1" fill="currentColor" className="text-sageDark dark:text-white" />
              <circle cx="50" cy="150" r="0.5" fill="currentColor" className="text-sageDark dark:text-white" />
              <circle cx="150" cy="175" r="1" fill="currentColor" className="text-sageDark dark:text-white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grain)" />
        </svg>
      </div>

      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: [0, -100, -200, -300],
            opacity: [0, particle.opacity, particle.opacity, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg
            width={particle.size}
            height={particle.size}
            viewBox="0 0 24 24"
            className="text-sageDark/40 dark:text-sageLight/30"
            fill="currentColor"
          >
            <path d="M12 2C13.1046 2 14 2.89543 14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2ZM12 8C13.1046 8 14 8.89543 14 10C14 11.1046 13.1046 12 12 12C10.8954 12 10 11.1046 10 10C10 8.89543 10.8954 8 12 8ZM12 14C13.1046 14 14 14.8954 14 16C14 17.1046 13.1046 18 12 18C10.8954 18 10 17.1046 10 16C10 14.8954 10.8954 14 12 14ZM4 8C5.10457 8 6 8.89543 6 10C6 11.1046 5.10457 12 4 12C2.89543 12 2 11.1046 2 10C2 8.89543 2.89543 8 4 8ZM20 8C21.1046 8 22 8.89543 22 10C22 11.1046 21.1046 12 20 12C18.8954 12 18 11.1046 18 10C18 8.89543 18.8954 8 20 8ZM6 16C7.10457 16 8 16.8954 8 18C8 19.1046 7.10457 20 6 20C4.89543 20 4 19.1046 4 18C4 16.8954 4.89543 16 6 16ZM18 16C19.1046 16 20 16.8954 20 18C20 19.1046 19.1046 20 18 20C16.8954 20 16 19.1046 16 18C16 16.8954 16.8954 16 18 16Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
