// hooks/useScrollReveal.tsx
"use client";

import React, { useEffect, useRef, useState, useMemo, CSSProperties, ReactNode, RefObject } from 'react';

interface ScrollRevealOptions extends IntersectionObserverInit {
    once?: boolean;
}

export const useScrollReveal = (options: ScrollRevealOptions = {}): [RefObject<HTMLDivElement | null>, boolean] => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    // Mémoiser les options de l'observer pour éviter les re-créations
    const observerOptions = useMemo(() => ({
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px'
    }), [options.threshold, options.rootMargin]);

    useEffect(() => {
        const currentRef = ref.current;
        if (!currentRef) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Une fois visible, on peut arrêter d'observer pour économiser les ressources
                    if (options.once !== false) {
                        observer.unobserve(entry.target);
                    }
                } else if (options.once === false) {
                    setIsVisible(false);
                }
            },
            observerOptions
        );

        observer.observe(currentRef);

        return () => {
            observer.unobserve(currentRef);
            observer.disconnect();
        };
    }, [observerOptions, options.once]);

    return [ref, isVisible];
};

type AnimationType = 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'slideInUp';

interface AnimationProps {
    initial: CSSProperties;
    animate: CSSProperties;
}

// Animations constantes (en dehors du composant pour éviter les re-créations)
const ANIMATIONS: Record<AnimationType, AnimationProps> = {
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

interface RevealOnScrollProps extends ScrollRevealOptions {
    children: ReactNode;
    animation?: AnimationType;
    delay?: number;
    duration?: number;
    className?: string;
}

// Composant wrapper pour les animations - Optimisé avec React.memo
export const RevealOnScroll = ({
    children,
    animation = 'fadeInUp',
    delay = 0,
    duration = 0.6,
    className = '',
    ...options
}: RevealOnScrollProps) => {
    const [ref, isVisible] = useScrollReveal(options);

    const currentAnimation = ANIMATIONS[animation] || ANIMATIONS.fadeInUp;

    // Mémoiser le style pour éviter les re-calculs
    const animationStyle = useMemo<CSSProperties>(() => ({
        ...currentAnimation.initial,
        transition: `all ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
        willChange: 'transform, opacity', // Optimisation GPU
        ...(isVisible ? currentAnimation.animate : {})
    }), [currentAnimation, duration, delay, isVisible]);

    return (
        <div
            ref={ref}
            className={className}
            style={animationStyle}
        >
            {children}
        </div>
    );
};
