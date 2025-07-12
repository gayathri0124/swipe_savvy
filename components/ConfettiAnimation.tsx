'use client';

import { useEffect } from 'react';
import confetti from 'canvas-confetti';

interface ConfettiAnimationProps {
  trigger: boolean;
  onComplete?: () => void;
}

export default function ConfettiAnimation({ trigger, onComplete }: ConfettiAnimationProps) {
  useEffect(() => {
    if (trigger) {
      const duration = 3000;
      const animationEnd = Date.now() + duration;

      const randomInRange = (min: number, max: number) => {
        return Math.random() * (max - min) + min;
      };

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          clearInterval(interval);
          onComplete?.();
          return;
        }

        const particleCount = 50 * (timeLeft / duration);

        
        confetti({
          particleCount,
          startVelocity: 30,
          spread: 360,
          origin: {
            x: randomInRange(0.1, 0.3),
            y: Math.random() - 0.2,
          },
          colors: ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd'],
        });

       
        confetti({
          particleCount,
          startVelocity: 30,
          spread: 360,
          origin: {
            x: randomInRange(0.7, 0.9),
            y: Math.random() - 0.2,
          },
          colors: ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd'],
        });
      }, 250);

      return () => clearInterval(interval);
    }
  }, [trigger, onComplete]);

  return null;
}