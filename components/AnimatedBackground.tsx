"use client";

import { useEffect, useRef } from 'react';
import styles from './AnimatedBackground.module.css';

type BackgroundVariant = 'ribbons' | 'waves' | 'aurora';

interface AnimatedBackgroundProps {
  variant?: BackgroundVariant;
}

// One observer and one visibility listener serve every decorative background.
// DOM attributes change only at visibility boundaries, never on animation frames.
const backgrounds = new Map<HTMLElement, boolean>();
let observer: IntersectionObserver | undefined;
let motionQuery: MediaQueryList | undefined;

function updateAnimation(element: HTMLElement, visible: boolean) {
  element.dataset.animate = String(visible && !document.hidden && Boolean(motionQuery?.matches));
}

function updateAllAnimations() {
  backgrounds.forEach((visible, element) => updateAnimation(element, visible));
}

function observeBackground(element: HTMLElement) {
  if (!('IntersectionObserver' in window)) return () => {};

  if (!observer) {
    motionQuery = window.matchMedia(
      '(min-width: 768px) and (hover: hover) and (prefers-reduced-motion: no-preference)'
    );
    observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const target = entry.target as HTMLElement;
        if (!backgrounds.has(target)) continue;
        backgrounds.set(target, entry.isIntersecting);
        updateAnimation(target, entry.isIntersecting);
      }
    }, { threshold: 0 });
    document.addEventListener('visibilitychange', updateAllAnimations);
    motionQuery.addEventListener('change', updateAllAnimations);
  }

  backgrounds.set(element, false);
  observer.observe(element);

  return () => {
    observer?.unobserve(element);
    backgrounds.delete(element);
    delete element.dataset.animate;

    if (backgrounds.size === 0) {
      observer?.disconnect();
      observer = undefined;
      document.removeEventListener('visibilitychange', updateAllAnimations);
      motionQuery?.removeEventListener('change', updateAllAnimations);
      motionQuery = undefined;
    }
  };
}

export default function AnimatedBackground({
  variant = 'ribbons',
}: AnimatedBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) return observeBackground(ref.current);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`${styles.background} ${styles[variant]}`}
    >
      <div className={styles.ambient} />
    </div>
  );
}
