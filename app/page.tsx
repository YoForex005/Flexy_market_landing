import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import ForexRates from '@/components/ForexRates';
import Ticker from '@/components/Ticker';
import Awards from '@/components/Awards';
import Discover from '@/components/Discover';
import Results from '@/components/Results';
import AccountTypes from '@/components/AccountTypes';
import Features from '@/components/Features';
import Support from '@/components/Support';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Discover />
      <Results />
      <AccountTypes />
      <Features />
      <Support />
      <Footer />
    </main>
  );
}
