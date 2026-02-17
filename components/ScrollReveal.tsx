"use client";

import { useEffect, useRef } from 'react';

export default function ScrollReveal({
    children,
    className = '',
    style,
    priority = false
}: {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    priority?: boolean;
}) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (priority) return;

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
    }, [priority]);

    return (
        <div
            ref={ref}
            className={`scroll-fade-section ${className} ${priority ? 'section-visible' : ''}`}
            style={style}
        >
            {children}
        </div>
    );
}
