

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import UnifiedHero from '@/components/UnifiedHero';
import UnifiedMarketTable from '@/components/UnifiedMarketTable';
import MarketFeatures from '@/components/MarketFeatures';
import ForexCTA from '@/components/ForexCTA';
import JsonLd from '@/components/JsonLd';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Commodities Trading | Gold, Silver & Oil | Flexy Markets',
    description: 'Diversify your portfolio by trading commodities including Gold, Silver, and Oil. Access competitive spreads and leverage with Flexy Markets.',
};

export default function CommoditiesPage() {
    const standardData = [
        { symbol: "XAUUSD", name: "Gold vs US Dollar", avgSpread: "0.30", lowSpread: "0.20", leverage: "100", icon: "https://flagcdn.com/w80/us.png" },
        { symbol: "XAGUSD", name: "Silver vs US Dollar", avgSpread: "0.03", lowSpread: "0.02", leverage: "100", icon: "https://flagcdn.com/w80/us.png" },
        { symbol: "USOIL", name: "US Crude Oil", avgSpread: "0.05", lowSpread: "0.04", leverage: "50", icon: "https://flagcdn.com/w80/us.png" },
        { symbol: "UKOIL", name: "Brent Crude Oil", avgSpread: "0.06", lowSpread: "0.05", leverage: "50", icon: "https://flagcdn.com/w80/gb.png" },
        { symbol: "NGAS", name: "Natural Gas", avgSpread: "0.01", lowSpread: "0.008", leverage: "20", icon: "https://flagcdn.com/w80/us.png" },
    ];

    const ultraData = [
        { symbol: "XAUUSD", name: "Gold vs US Dollar", avgSpread: "0.15", lowSpread: "0.10", leverage: "100", icon: "https://flagcdn.com/w80/us.png" },
        { symbol: "XAGUSD", name: "Silver vs US Dollar", avgSpread: "0.02", lowSpread: "0.015", leverage: "100", icon: "https://flagcdn.com/w80/us.png" },
        { symbol: "USOIL", name: "US Crude Oil", avgSpread: "0.04", lowSpread: "0.03", leverage: "50", icon: "https://flagcdn.com/w80/us.png" },
        { symbol: "UKOIL", name: "Brent Crude Oil", avgSpread: "0.05", lowSpread: "0.04", leverage: "50", icon: "https://flagcdn.com/w80/gb.png" },
        { symbol: "NGAS", name: "Natural Gas", avgSpread: "0.008", lowSpread: "0.005", leverage: "20", icon: "https://flagcdn.com/w80/us.png" },
    ];

    const features = [
        { title: "Precious Metals", description: "Trade Gold, Silver, and Platinum with tight spreads and fast execution.", iconClass: "fas fa-gem" },
        { title: "Energy Commodities", description: "Access major Oil and Natural Gas markets directly from your account.", iconClass: "fas fa-burn" },
        { title: "Portfolio Hedging", description: "Use commodities to diversify and hedge your portfolio against inflation.", iconClass: "fas fa-shield-alt" },
        { title: "No Ownership", description: "Speculate on price movements without the need for physical delivery or storage.", iconClass: "fas fa-box-open" },
    ];

    const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Commodities Trading',
        description: 'Trade commodities like Gold, Silver, Oil, and Gas with competitive spreads and leverage.',
        brand: {
            '@type': 'Brand',
            name: 'Flexy Markets'
        },
        provider: {
            '@type': 'Organization',
            name: 'Flexy Markets'
        }
    };

    return (
        <main>
            <JsonLd data={productSchema} />
            <NavBar />
            <UnifiedHero
                title="Discover Commodities Trading"
                subtitle="Trade Gold, Oil, Silver and other soft commodities with competitive spreads and superior execution."
                activeMarket="Commodities"
                paddingTop="210px"
                paddingBottom="180px"
                stickers={[
                    { countryCode: "au", top: "15%", right: "15%", rotate: "20deg", delay: "0s", size: 70 }, // Australia (Gold)
                    { countryCode: "ca", top: "45%", right: "8%", rotate: "-10deg", delay: "2s", size: 60 }, // Canada (Oil)
                    { countryCode: "sa", top: "65%", left: "10%", rotate: "5deg", delay: "1s", size: 75 }, // Saudi Arabia (Oil)
                    { countryCode: "us", top: "15%", left: "5%", rotate: "-15deg", delay: "1.5s", size: 85 }, // US
                ]}
            />
            <UnifiedMarketTable
                title="Commodities Prices"
                standardData={standardData}
                ultraData={ultraData}
            />
            <MarketFeatures
                title="Why Trade Commodities With Us?"
                features={features}
            />
            <ForexCTA />
            <Footer />
        </main>
    );
}
