// hooks/useScrollReveal.js
"use client";

import { useEffect, useRef, useState } from 'react';

export const useScrollReveal = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Une fois visible, on peut arrêter d'observer
          if (options.once !== false) {
            observer.unobserve(entry.target);
          }
        } else if (options.once === false) {
          setIsVisible(false);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options.threshold, options.rootMargin, options.once]);

  return [ref, isVisible];
};

// Composant wrapper pour les animations
export const RevealOnScroll = ({ 
  children, 
  animation = 'fadeInUp', 
  delay = 0,
  duration = 0.6,
  className = '',
  ...options 
}) => {
  const [ref, isVisible] = useScrollReveal(options);

  const animations = {
    fadeInUp: {
      initial: { opacity: 0, transform: 'translateY(30px)' },
      animate: { opacity: 1, transform: 'translateY(0px)' }
    },
    fadeInDown: {
      initial: { opacity: 0, transform: 'translateY(-30px)' },
      animate: { opacity: 1, transform: 'translateY(0px)' }
    },
    fadeInLeft: {
      initial: { opacity: 0, transform: 'translateX(-30px)' },
      animate: { opacity: 1, transform: 'translateX(0px)' }
    },
    fadeInRight: {
      initial: { opacity: 0, transform: 'translateX(30px)' },
      animate: { opacity: 1, transform: 'translateX(0px)' }
    },
    scaleIn: {
      initial: { opacity: 0, transform: 'scale(0.8)' },
      animate: { opacity: 1, transform: 'scale(1)' }
    },
    slideInUp: {
      initial: { opacity: 0, transform: 'translateY(50px)' },
      animate: { opacity: 1, transform: 'translateY(0px)' }
    }
  };

  const currentAnimation = animations[animation] || animations.fadeInUp;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...currentAnimation.initial,
        transition: `all ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
        ...(isVisible ? currentAnimation.animate : {})
      }}
    >
      {children}
    </div>
  );
};