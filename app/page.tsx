

import dynamic from 'next/dynamic';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import JsonLd from '@/components/JsonLd';

import SectionSkeleton from '@/components/SectionSkeleton';

// Dynamic imports - ssr: false skips server render for faster initial HTML
const TradeView = dynamic(() => import('@/components/TradeView'), {
  loading: () => <SectionSkeleton height="600px" />
});
const Discover = dynamic(() => import('@/components/Discover'), {
  loading: () => <SectionSkeleton height="500px" />
});
const Results = dynamic(() => import('@/components/Results'), {
  loading: () => <SectionSkeleton height="400px" />
});
const AccountTypes = dynamic(() => import('@/components/AccountTypes'), {
  loading: () => <SectionSkeleton height="800px" />
});
const Features = dynamic(() => import('@/components/Features'), {
  loading: () => <SectionSkeleton height="600px" />
});
const Support = dynamic(() => import('@/components/Support'), {
  loading: () => <SectionSkeleton height="400px" />
});

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Flexy Markets | Regulated Online Trading Broker | Forex, Shares & Crypto',
  description: 'Trade CFDs on Forex, Shares, Indices & more with a regulated broker optimized for MQL5 and automated trading. Access 1,400+ assets with Flexy Markets.',
  alternates: {
    canonical: 'https://flexymarkets.com',
  },
  openGraph: {
    title: 'Flexy Markets | Regulated Online Trading Broker | Forex, Shares & Crypto',
    description: 'Trade CFDs on Forex, Shares, Indices & more with a regulated broker optimized for MQL5 and automated trading. Access 1,400+ assets with Flexy Markets.',
    url: 'https://flexymarkets.com',
    siteName: 'Flexy Markets',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flexy Markets | Regulated Online Trading Broker | Forex, Shares & Crypto',
    description: 'Trade CFDs on Forex, Shares, Indices & more with a regulated broker optimized for MQL5 and automated trading. Access 1,400+ assets with Flexy Markets.',
  },
};

export default function Home() {
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://flexymarkets.com/#webpage',
    url: 'https://flexymarkets.com/',
    name: 'Flexy Markets | Regulated Online Trading Broker | Forex, Shares & Crypto',
    description: 'Trade CFDs on Forex, Shares, Indices & more with a regulated broker optimized for MQL5 and automated trading. Access 1,400+ assets with Flexy Markets.',
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://flexymarkets.com/#website',
      url: 'https://flexymarkets.com/',
      name: 'Flexy Markets',
    },
    about: {
      '@id': 'https://flexymarkets.com/#organization',
    },
  };

  return (
    <main>
      <JsonLd data={webPageSchema} />
      <NavBar />
      <Hero />

      {/* Gradient Transition Overlay */}
      <div className="hero-gradient-transition" />

      <ScrollReveal priority style={{ marginTop: '-150px', position: 'relative', zIndex: 25 }}>
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
