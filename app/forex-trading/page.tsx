import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ForexHero from '@/components/ForexHero';
import ForexTable from '@/components/ForexTable';
import ForexFeatures from '@/components/ForexFeatures';
import ForexCTA from '@/components/ForexCTA';

export default function ForexTradingPage() {
    return (
        <main>
            <NavBar />
            <ForexHero />
            <ForexTable />
            <ForexFeatures />
            <ForexCTA />
            <Footer />
        </main>
    );
}
