import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import UnifiedHero from '@/components/UnifiedHero';
import UnifiedMarketTable from '@/components/UnifiedMarketTable';
import MarketFeatures from '@/components/MarketFeatures';
import ForexCTA from '@/components/ForexCTA';
import JsonLd from '@/components/JsonLd';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Equity Indices Trading | S&P 500, NASDAQ, DAX | Flexy Markets',
    description: 'Trade major global indices like S&P 500, NASDAQ 100, and DAX 40 with competitive spreads and leverage.',
};

export default function EquityIndicesPage() {
    const standardData = [
        { symbol: "US500", name: "S&P 500 Index", avgSpread: "0.40", lowSpread: "0.30", leverage: "20", icon: "https://flagcdn.com/w80/us.png" },
        { symbol: "US30", name: "Dow Jones Industrial Average", avgSpread: "1.50", lowSpread: "1.00", leverage: "20", icon: "https://flagcdn.com/w80/us.png" },
        { symbol: "NAS100", name: "Nasdaq 100 Index", avgSpread: "0.80", lowSpread: "0.50", leverage: "20", icon: "https://flagcdn.com/w80/us.png" },
        { symbol: "GER40", name: "DAX 40 Index", avgSpread: "0.90", lowSpread: "0.60", leverage: "20", icon: "https://flagcdn.com/w80/de.png" },
        { symbol: "UK100", name: "FTSE 100 Index", avgSpread: "0.80", lowSpread: "0.50", leverage: "20", icon: "https://flagcdn.com/w80/gb.png" },
    ];

    const ultraData = [
        { symbol: "US500", name: "S&P 500 Index", avgSpread: "0.30", lowSpread: "0.20", leverage: "20", icon: "https://flagcdn.com/w80/us.png" },
        { symbol: "US30", name: "Dow Jones Industrial Average", avgSpread: "1.20", lowSpread: "0.80", leverage: "20", icon: "https://flagcdn.com/w80/us.png" },
        { symbol: "NAS100", name: "Nasdaq 100 Index", avgSpread: "0.60", lowSpread: "0.40", leverage: "20", icon: "https://flagcdn.com/w80/us.png" },
        { symbol: "GER40", name: "DAX 40 Index", avgSpread: "0.70", lowSpread: "0.50", leverage: "20", icon: "https://flagcdn.com/w80/de.png" },
        { symbol: "UK100", name: "FTSE 100 Index", avgSpread: "0.60", lowSpread: "0.40", leverage: "20", icon: "https://flagcdn.com/w80/gb.png" },
    ];

    const features = [
        { title: "Global Market Access", description: "Trade the world's leading stock indices from a single account.", iconClass: "fas fa-globe" },
        { title: "Competitive Spreads", description: "Enjoy tight spreads on all major indices, keeping your trading costs low.", iconClass: "fas fa-percentage" },
        { title: "Long & Short Trading", description: "Take advantage of both rising and falling markets with CFDs.", iconClass: "fas fa-arrows-alt-v" },
        { title: "No Commission", description: "Trade indices with zero commission on Standard accounts.", iconClass: "fas fa-wallet" },
    ];

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Equity Indices Trading",
        "description": "Trade global equity indices like S&P 500 and DAX 40 with leverage.",
        "brand": {
            "@type": "Brand",
            "name": "Flexy Markets"
        },
        "provider": {
            "@type": "Organization",
            "name": "Flexy Markets"
        }
    };

    return (
        <main>
            <JsonLd data={productSchema} />
            <NavBar />
            <UnifiedHero
                title="Trade Equity Indices"
                subtitle="Access the world's most popular stock indices. Trade S&P 500, NASDAQ, DAX 40 and more."
                activeMarket="Equity Indices"
                paddingTop="210px"
                paddingBottom="180px"
                stickers={[
                    { countryCode: "us", top: "15%", right: "12%", rotate: "15deg", delay: "0s", size: 90 }, // US
                    { countryCode: "de", top: "55%", right: "18%", rotate: "-8deg", delay: "1.5s", size: 80 }, // Germany
                    { countryCode: "gb", top: "30%", left: "10%", rotate: "-5deg", delay: "1s", size: 75 }, // UK
                    { countryCode: "jp", top: "60%", left: "15%", rotate: "10deg", delay: "2s", size: 70 }, // Japan
                ]}
            />
            <UnifiedMarketTable
                title="Indices Pricing"
                standardData={standardData}
                ultraData={ultraData}
            />
            <MarketFeatures
                title="Why Trade Indices With Us?"
                features={features}
            />
            <ForexCTA />
            <Footer />
        </main>
    );
}
