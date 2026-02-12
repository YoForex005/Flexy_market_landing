

import dynamic from 'next/dynamic';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

// Dynamic imports - ssr: false skips server render for faster initial HTML
const TradeView = dynamic(() => import('@/components/TradeView'));
const Discover = dynamic(() => import('@/components/Discover'));
const Results = dynamic(() => import('@/components/Results'));
const AccountTypes = dynamic(() => import('@/components/AccountTypes'));
const Features = dynamic(() => import('@/components/Features'));
const Support = dynamic(() => import('@/components/Support'));

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Flexy Markets | Regulated Online Trading Broker',
  description: 'Trade CFD on Forex, Shares, Indices, Commodities & Cryptocurrencies with a regulated broker. Access 1,400+ assets with tight spreads and fast execution.',
  alternates: {
    canonical: 'https://flexymarkets.com',
  },
  openGraph: {
    title: 'Flexy Markets | Regulated Online Trading Broker',
    description: 'Trade CFD on Forex, Shares, Indices, Commodities & Cryptocurrencies with a regulated broker.',
    url: 'https://flexymarkets.com',
    siteName: 'Flexy Markets',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flexy Markets | Regulated Online Trading Broker',
    description: 'Trade CFD on Forex, Shares, Indices, Commodities & Cryptocurrencies with a regulated broker.',
  },
};

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
