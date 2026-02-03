import NavBar from '@/components/NavBar';
import PlatformHero from '@/components/PlatformHero';
import PlatformCards from '@/components/PlatformCards';
import Features from '@/components/Features';
import Support from '@/components/Support';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';

export default function PlatformsPage() {
    return (
        <main>
            <NavBar />
            <PlatformHero />
            <PlatformCards />
            <Features />
            <Support />
            <Footer />
            <WhatsAppWidget />
        </main>
    );
}
