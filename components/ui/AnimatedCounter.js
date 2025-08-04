// components/ui/AnimatedCounter.js
"use client";

import React, { useState, useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export const AnimatedCounter = ({ 
  end, 
  duration = 2000, 
  suffix = '', 
  prefix = '',
  className = '',
  separator = false 
}) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [ref, isVisible] = useScrollReveal({ threshold: 0.3 });

  useEffect(() => {
    if (isVisible && !hasStarted) {
      setHasStarted(true);
      
      const startTime = Date.now();
      const startValue = 0;
      const endValue = typeof end === 'string' ? parseInt(end.replace(/\D/g, '')) : end;
      
      const updateCounter = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        
        // Utilise une fonction d'ease-out pour un effet plus naturel
        const easeOutProgress = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(startValue + (endValue - startValue) * easeOutProgress);
        
        setCount(current);
        
        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          setCount(endValue);
        }
      };
      
      requestAnimationFrame(updateCounter);
    }
  }, [isVisible, hasStarted, end, duration]);

  const formatNumber = (num) => {
    if (separator && num >= 1000) {
      return num.toLocaleString('fr-FR');
    }
    return num.toString();
  };

  return (
    <span ref={ref} className={className}>
      {prefix}{formatNumber(count)}{suffix}
    </span>
  );
};