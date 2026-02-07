"use client";

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

// Dynamic imports for heavy components
const TradeView = dynamic(() => import('@/components/TradeView'));
const Discover = dynamic(() => import('@/components/Discover'));
const Results = dynamic(() => import('@/components/Results'));
const AccountTypes = dynamic(() => import('@/components/AccountTypes'));
const Features = dynamic(() => import('@/components/Features'));
const Support = dynamic(() => import('@/components/Support'));
import ForexRates from '@/components/ForexRates';
import Ticker from '@/components/Ticker';
import Awards from '@/components/Awards';

export default function Home() {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <main>
      <NavBar />
      <Hero />

      {/* Gradient Transition Overlay */}
      <div className="hero-gradient-transition"></div>

      <div ref={addToRefs} className="scroll-fade-section" style={{ marginTop: '-150px', position: 'relative', zIndex: 25 }}>
        <TradeView />
      </div>

      <div ref={addToRefs} className="scroll-fade-section">
        <Discover />
      </div>

      <div ref={addToRefs} className="scroll-fade-section">
        <Results />
      </div>

      <div ref={addToRefs} className="scroll-fade-section">
        <AccountTypes />
      </div>

      <div ref={addToRefs} className="scroll-fade-section">
        <Features />
      </div>

      <div ref={addToRefs} className="scroll-fade-section">
        <Support />
      </div>

      <Footer />

      <style jsx>{`
        .hero-gradient-transition {
          position: relative;
          height: 400px;
          margin-top: -400px;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0) 40%,
            rgba(255, 255, 255, 0.15) 60%,
            rgba(255, 255, 255, 0.5) 80%,
            #ffffff 100%
          );
          pointer-events: none;
          z-index: 20;
        }

        .scroll-fade-section {
          opacity: 0;
          transform: translateY(60px);
          transition: opacity 1.2s cubic-bezier(0.2, 0.8, 0.2, 1),
                      transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .scroll-fade-section.section-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Stagger delay for consecutive sections */
        .scroll-fade-section:nth-child(2) { transition-delay: 0s; }
        .scroll-fade-section:nth-child(3) { transition-delay: 0.1s; }
        .scroll-fade-section:nth-child(4) { transition-delay: 0.15s; }
        .scroll-fade-section:nth-child(5) { transition-delay: 0.2s; }
        .scroll-fade-section:nth-child(6) { transition-delay: 0.25s; }
        .scroll-fade-section:nth-child(7) { transition-delay: 0.3s; }
      `}</style>
    </main>
  );
}
