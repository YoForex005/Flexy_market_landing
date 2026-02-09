import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import UnifiedHero from '@/components/UnifiedHero';
import UnifiedMarketTable from '@/components/UnifiedMarketTable';
import MarketFeatures from '@/components/MarketFeatures';
import ForexCTA from '@/components/ForexCTA';
import JsonLd from '@/components/JsonLd';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Energy Trading | Oil & Gas CLS | Flexy Markets',
    description: 'Trade energy commodities including Crude Oil (WTI, Brent) and Natural Gas. Take advantage of market volatility with competitive conditions.',
};

export default function EnergiesPage() {
    const standardData = [
        { symbol: "USOIL", name: "US Crude Oil", avgSpread: "0.05", lowSpread: "0.04", leverage: "50", icon: "https://flagcdn.com/w80/us.png" },
        { symbol: "UKOIL", name: "Brent Crude Oil", avgSpread: "0.06", lowSpread: "0.05", leverage: "50", icon: "https://flagcdn.com/w80/gb.png" },
        { symbol: "NGAS", name: "Natural Gas", avgSpread: "0.01", lowSpread: "0.008", leverage: "20", icon: "https://flagcdn.com/w80/us.png" },
    ];

    const ultraData = [
        { symbol: "USOIL", name: "US Crude Oil", avgSpread: "0.04", lowSpread: "0.03", leverage: "50", icon: "https://flagcdn.com/w80/us.png" },
        { symbol: "UKOIL", name: "Brent Crude Oil", avgSpread: "0.05", lowSpread: "0.04", leverage: "50", icon: "https://flagcdn.com/w80/gb.png" },
        { symbol: "NGAS", name: "Natural Gas", avgSpread: "0.008", lowSpread: "0.005", leverage: "20", icon: "https://flagcdn.com/w80/us.png" },
    ];

    const features = [
        { title: "High Volatility", description: "Capitalize on significant price movements in the global energy sector.", iconClass: "fas fa-chart-bar" },
        { title: "Global Benchmarks", description: "Trade both WTI and Brent Crude oil benchmarks.", iconClass: "fas fa-globe" },
        { title: "Low Margin", description: "Start trading energies with competitive margin requirements.", iconClass: "fas fa-percent" },
        { title: "News Trading", description: "React quickly to geopolitical events that directly impact energy prices.", iconClass: "fas fa-newspaper" },
    ];

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Energy Commodities Trading",
        "description": "Trade US Crude Oil, Brent Crude Oil, and Natural Gas with competitive spreads and leverage.",
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
                title="Energies Trading"
                subtitle="Trade Crude Oil, Brent Oil and Natural Gas. Take advantage of volatility in the energy markets."
                activeMarket="Energies"
                paddingTop="210px"
                paddingBottom="180px"
                stickers={[
                    { countryCode: "sa", top: "20%", right: "12%", rotate: "10deg", delay: "0s", size: 90 }, // Saudi Arabia
                    { countryCode: "us", top: "50%", right: "20%", rotate: "-5deg", delay: "1.5s", size: 80 }, // US
                    { countryCode: "ae", top: "40%", left: "12%", rotate: "15deg", delay: "2.5s", size: 70 }, // UAE
                    { countryCode: "ru", top: "65%", right: "10%", rotate: "-10deg", delay: "1s", size: 75 }, // Russia
                ]}
            />
            <UnifiedMarketTable
                title="Energy Commodities"
                standardData={standardData}
                ultraData={ultraData}
            />
            <MarketFeatures
                title="Why Trade Energies With Us?"
                features={features}
            />
            <ForexCTA />
            <Footer />
        </main>
    );
}
