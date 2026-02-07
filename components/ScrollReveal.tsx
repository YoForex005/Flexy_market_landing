"use client";

import { useEffect, useRef } from 'react';

export default function ScrollReveal({
    children,
    className = '',
    style
}: {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('section-visible');
                    observer.unobserve(el);
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={`scroll-fade-section ${className}`} style={style}>
            {children}
        </div>
    );
}
