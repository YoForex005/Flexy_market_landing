import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import UnifiedHero from '@/components/UnifiedHero';
import UnifiedMarketTable from '@/components/UnifiedMarketTable';
import MarketFeatures from '@/components/MarketFeatures';
import ForexCTA from '@/components/ForexCTA';
import JsonLd from '@/components/JsonLd';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Trade Precious Metals | Gold & Silver | Flexy Markets',
    description: 'Diversify your portfolio with precious metals trading. Access competitive spreads on Gold (XAU), Silver (XAG), Platinum, and Palladium.',
};

export default function PreciousMetalsPage() {
    const standardData = [
        { symbol: "XAUUSD", name: "Gold vs US Dollar", avgSpread: "0.25", lowSpread: "0.15", leverage: "100", icon: "https://flagcdn.com/w80/us.png" },
        { symbol: "XAGUSD", name: "Silver vs US Dollar", avgSpread: "0.03", lowSpread: "0.02", leverage: "100", icon: "https://flagcdn.com/w80/us.png" },
        { symbol: "XPTUSD", name: "Platinum vs US Dollar", avgSpread: "2.50", lowSpread: "2.00", leverage: "50", icon: "https://flagcdn.com/w80/us.png" },
        { symbol: "XPDUSD", name: "Palladium vs US Dollar", avgSpread: "4.00", lowSpread: "3.50", leverage: "50", icon: "https://flagcdn.com/w80/us.png" },
        { symbol: "XAUEUR", name: "Gold vs Euro", avgSpread: "0.40", lowSpread: "0.30", leverage: "100", icon: "https://flagcdn.com/w80/eu.png" },
    ];

    const ultraData = [
        { symbol: "XAUUSD", name: "Gold vs US Dollar", avgSpread: "0.15", lowSpread: "0.10", leverage: "100", icon: "https://flagcdn.com/w80/us.png" },
        { symbol: "XAGUSD", name: "Silver vs US Dollar", avgSpread: "0.02", lowSpread: "0.015", leverage: "100", icon: "https://flagcdn.com/w80/us.png" },
        { symbol: "XPTUSD", name: "Platinum vs US Dollar", avgSpread: "2.00", lowSpread: "1.50", leverage: "50", icon: "https://flagcdn.com/w80/us.png" },
        { symbol: "XPDUSD", name: "Palladium vs US Dollar", avgSpread: "3.50", lowSpread: "3.00", leverage: "50", icon: "https://flagcdn.com/w80/us.png" },
        { symbol: "XAUEUR", name: "Gold vs Euro", avgSpread: "0.30", lowSpread: "0.20", leverage: "100", icon: "https://flagcdn.com/w80/eu.png" },
    ];

    const features = [
        { title: "Safe Haven", description: "Use Gold and Silver as a hedge against market volatility and inflation.", iconClass: "fas fa-shield-alt" },
        { title: "High Liquidity", description: "Benefit from deep liquidity and fast execution on metal trades.", iconClass: "fas fa-water" },
        { title: "Competitive Spreads", description: "Trade metals with some of the lowest spreads in the industry.", iconClass: "fas fa-percentage" },
        { title: "Diversification", description: "Add a new asset class to your portfolio to spread your risk.", iconClass: "fas fa-chart-pie" },
    ];

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Precious Metals Trading",
        "description": "Trade Gold, Silver, Platinum and Palladium with competitive spreads and high leverage.",
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
                title="Trade Precious Metals"
                subtitle="Diversify your portfolio with Gold, Silver, Platinum and Palladium. Trade with competitive conditions."
                activeMarket="Precious Metals"
                paddingTop="210px"
                paddingBottom="180px"
                stickers={[
                    { countryCode: "au", top: "15%", right: "12%", rotate: "15deg", delay: "0s", size: 80 }, // Australia (Major Gold)
                    { countryCode: "za", top: "55%", right: "18%", rotate: "-8deg", delay: "1.5s", size: 75 }, // South Africa (Platinum/Gold)
                    { countryCode: "cn", top: "30%", left: "10%", rotate: "-5deg", delay: "1s", size: 70 }, // China (Major Consumer)
                    { countryCode: "us", top: "60%", left: "15%", rotate: "10deg", delay: "2s", size: 90 }, // US
                ]}
            />
            <UnifiedMarketTable
                title="Metal Prices"
                standardData={standardData}
                ultraData={ultraData}
            />
            <MarketFeatures
                title="Why Trade Precious Metals With Us?"
                features={features}
            />
            <ForexCTA />
            <Footer />
        </main>
    );
}
