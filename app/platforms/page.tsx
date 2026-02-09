import NavBar from '@/components/NavBar';
import PlatformHero from '@/components/PlatformHero';
import PlatformCards from '@/components/PlatformCards';
import Features from '@/components/Features';
import Support from '@/components/Support';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Trading Platforms | MT5 Web, Desktop & Mobile | Flexy Markets',
    description: 'Download the advanced MetaTrader 5 (MT5) platform for PC, Mac, iOS, or Android. Trade with superior execution and analysis tools.',
};

export default function PlatformsPage() {
    return (
        <main>
            <NavBar />
            <PlatformHero paddingTop="210px" paddingBottom="180px" />
            <PlatformCards />
            <Features />
            <Support />
            <Footer />
            <WhatsAppWidget />
        </main>
    );
}
