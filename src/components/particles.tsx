"use client"

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

type ParticlesProps = {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  refresh?: boolean;
};

export function Particles({
  className,
  quantity = 30,
}: ParticlesProps) {
  const [particles, setParticles] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const newParticles: JSX.Element[] = [];
    for (let i = 0; i < quantity; i++) {
      const size = Math.random() * 2 + 0.5;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const delay = Math.random() * 25;
      newParticles.push(
        <span
          key={i}
          className="particle"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: `${size}px`,
            height: `${size}px`,
            animationDelay: `${delay}s`,
          }}
        />
      );
    }
    setParticles(newParticles);
  }, [quantity]);

  return (
    <div
      className={cn(
        'absolute inset-0 pointer-events-none overflow-hidden',
        className
      )}
    >
      {particles}
    </div>
  );
}
