

import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import JsonLd from '@/components/JsonLd';

// Render primary content directly: loading boundaries leave hidden streamed
// sections behind until JavaScript runs, even when server rendering is enabled.
import TradeView from '@/components/TradeView';
import Discover from '@/components/Discover';
import Results from '@/components/Results';
import AccountTypes from '@/components/AccountTypes';
import Features from '@/components/Features';
import Support from '@/components/Support';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Forex & CFD Trading Platform | Flexy Markets',
  description: 'Explore forex and CFD trading with Flexy Markets. Compare trading accounts, discover the RTX 5 platform, and access market analysis and educational resources.',
  alternates: {
    canonical: 'https://flexymarkets.com/',
  },
  openGraph: {
    title: 'Forex & CFD Trading Platform | Flexy Markets',
    description: 'Explore forex and CFD trading with Flexy Markets. Compare trading accounts, discover the RTX 5 platform, and access market analysis and educational resources.',
    url: 'https://flexymarkets.com/',
    siteName: 'Flexy Markets',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Flexy Markets — Forex & CFD Trading',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forex & CFD Trading Platform | Flexy Markets',
    description: 'Explore forex and CFD trading with Flexy Markets. Compare trading accounts, discover the RTX 5 platform, and access market analysis and educational resources.',
    images: ['/opengraph-image'],
  },
};

export default function Home() {
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://flexymarkets.com/#webpage',
    url: 'https://flexymarkets.com/',
    name: 'Forex & CFD Trading Platform | Flexy Markets',
    description: 'Explore forex and CFD trading with Flexy Markets. Compare trading accounts, discover the RTX 5 platform, and access market analysis and educational resources.',
    inLanguage: 'en',
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
    <>
      <JsonLd data={webPageSchema} />
      <a href="#main-content" className="visually-hidden-focusable position-absolute p-3 bg-white" style={{ zIndex: 1100 }}>Skip to main content</a>
      <NavBar />
      <main id="main-content" tabIndex={-1}>
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

      </main>
      <Footer />
    </>
  );
}
