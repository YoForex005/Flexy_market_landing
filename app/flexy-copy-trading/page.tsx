import { Metadata } from 'next';
import NavBar from '@/components/NavBar';
import CopyTradingHero from '@/components/CopyTradingHero';
import CopyTradingStats from '@/components/CopyTradingStats';
import CopyTradingHowItWorks from '@/components/CopyTradingHowItWorks';
import CopyTradingFeatures from '@/components/CopyTradingFeatures';
import CopyTradingTestimonials from '@/components/CopyTradingTestimonials';
import CopyTradingCTA from '@/components/CopyTradingCTA';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Flexy Copy Trading - Trade Like an Expert | Flexy Markets',
    description: 'Copy the trades of successful Strategy Managers. No time? No experience? No problem. Start copy trading today with Flexy Markets.',
};

export default function CopyTradingPage() {
    return (
        <main>
            <NavBar />
            <CopyTradingHero />
            <CopyTradingStats />
            <CopyTradingHowItWorks />
            <CopyTradingFeatures />
            <CopyTradingTestimonials />
            <CopyTradingCTA />
            <Footer />
        </main>
    );
}
