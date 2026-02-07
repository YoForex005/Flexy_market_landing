import NavBar from '@/components/NavBar';
import PlatformHero from '@/components/PlatformHero';
import PlatformCards from '@/components/PlatformCards';
import Features from '@/components/Features';
import Support from '@/components/Support';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';

export const dynamic = 'force-static';

export default function MT5Page() {
    return (
        <main>
            <NavBar />
            <PlatformHero paddingTop="180px" paddingBottom="120px" />
            <PlatformCards />
            <Features />
            <Support />
            <Footer />
            <WhatsAppWidget />
        </main>
    );
}
