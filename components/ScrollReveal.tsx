"use client";

import { useEffect, useRef } from 'react';

const sections = new Set<HTMLElement>();
let revealObserver: IntersectionObserver | undefined;

function observeSection(element: HTMLElement) {
    if (!revealObserver) {
        revealObserver = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                const target = entry.target as HTMLElement;
                if (!sections.has(target)) continue;

                if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
                    target.classList.remove('section-pending');
                    revealObserver?.unobserve(target);
                } else {
                    // Observer geometry avoids forcing layout during hydration.
                    // Only content still below the viewport gets a reveal effect.
                    target.classList.add('section-pending');
                }
            }
        }, { threshold: 0, rootMargin: '0px 0px 100px 0px' });
    }

    sections.add(element);
    revealObserver.observe(element);

    return () => {
        revealObserver?.unobserve(element);
        sections.delete(element);
        element.classList.remove('section-pending');
        if (sections.size === 0) {
            revealObserver?.disconnect();
            revealObserver = undefined;
        }
    };
}

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
        if (!el || !('IntersectionObserver' in window) ||
            window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        // Server HTML stays visible; the shared observer enables effects later.
        return observeSection(el);
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
