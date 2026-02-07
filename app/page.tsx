"use client";

import dynamic from 'next/dynamic';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

// Dynamic imports - ssr: false skips server render for faster initial HTML
const TradeView = dynamic(() => import('@/components/TradeView'), { ssr: false });
const Discover = dynamic(() => import('@/components/Discover'), { ssr: false });
const Results = dynamic(() => import('@/components/Results'), { ssr: false });
const AccountTypes = dynamic(() => import('@/components/AccountTypes'), { ssr: false });
const Features = dynamic(() => import('@/components/Features'), { ssr: false });
const Support = dynamic(() => import('@/components/Support'), { ssr: false });

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />

      {/* Gradient Transition Overlay */}
      <div className="hero-gradient-transition" />

      <ScrollReveal style={{ marginTop: '-150px', position: 'relative', zIndex: 25 }}>
        <TradeView />
      </ScrollReveal>

      <ScrollReveal>
        <Discover />
      </ScrollReveal>

      <ScrollReveal>
        <Results />
      </ScrollReveal>

      <ScrollReveal>
        <AccountTypes />
      </ScrollReveal>

      <ScrollReveal>
        <Features />
      </ScrollReveal>

      <ScrollReveal>
        <Support />
      </ScrollReveal>

      <Footer />
    </main>
  );
}
