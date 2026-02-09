import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import UnifiedHero from '@/components/UnifiedHero';
import UnifiedMarketTable from '@/components/UnifiedMarketTable';
import MarketFeatures from '@/components/MarketFeatures';
import ForexCTA from '@/components/ForexCTA';
import JsonLd from '@/components/JsonLd';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Turbo Stocks Trading | High Leverage Stocks | Flexy Markets',
    description: 'Trade Turbo Stocks including Tesla, NVIDIA, and Apple with higher leverage and fractional trading options.',
};

export default function TurboStocksPage() {
    const standardData = [
        { symbol: "TSLA", name: "Tesla Inc.", avgSpread: "0.30", lowSpread: "0.20", leverage: "20", iconClass: "fas fa-bolt", color: "#cc0000" },
        { symbol: "NVDA", name: "NVIDIA Corp", avgSpread: "0.25", lowSpread: "0.15", leverage: "20", iconClass: "fas fa-microchip", color: "#76B900" },
        { symbol: "AMD", name: "Advanced Micro Devices", avgSpread: "0.20", lowSpread: "0.12", leverage: "20", iconClass: "fas fa-memory", color: "#000000" },
        { symbol: "NIO", name: "NIO Inc.", avgSpread: "0.15", lowSpread: "0.08", leverage: "20", iconClass: "fas fa-car-side", color: "#00BFFF" },
        { symbol: "PLTR", name: "Palantir Technologies", avgSpread: "0.18", lowSpread: "0.10", leverage: "20", iconClass: "fas fa-project-diagram", color: "#333333" },
    ];

    const ultraData = [
        { symbol: "TSLA", name: "Tesla Inc.", avgSpread: "0.20", lowSpread: "0.15", leverage: "20", iconClass: "fas fa-bolt", color: "#cc0000" },
        { symbol: "NVDA", name: "NVIDIA Corp", avgSpread: "0.15", lowSpread: "0.10", leverage: "20", iconClass: "fas fa-microchip", color: "#76B900" },
        { symbol: "AMD", name: "Advanced Micro Devices", avgSpread: "0.15", lowSpread: "0.08", leverage: "20", iconClass: "fas fa-memory", color: "#000000" },
        { symbol: "NIO", name: "NIO Inc.", avgSpread: "0.10", lowSpread: "0.06", leverage: "20", iconClass: "fas fa-car-side", color: "#00BFFF" },
        { symbol: "PLTR", name: "Palantir Technologies", avgSpread: "0.12", lowSpread: "0.08", leverage: "20", iconClass: "fas fa-project-diagram", color: "#333333" },
    ];

    const features = [
        { title: "High Leverage", description: "Trade popular stocks with leverage up to 1:20.", iconClass: "fas fa-rocket" },
        { title: "Fractional Shares", description: "Start trading with smaller amounts by buying fractional shares.", iconClass: "fas fa-puzzle-piece" },
        { title: "Top Performers", description: "Access the most volatile and popular stocks in the market.", iconClass: "fas fa-fire" },
        { title: "Extended Hours", description: "Trade during pre-market and after-hours sessions on select stocks.", iconClass: "fas fa-clock" },
    ];

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Turbo Stocks Trading",
        "description": "Trade high-volatility stocks like Tesla and NVIDIA with leverage.",
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
                title="Trade Turbo Stocks"
                subtitle="Supercharge your portfolio. Trade the world's most popular stocks with enhanced leverage."
                activeMarket="Turbo Stocks"
                paddingTop="210px"
                paddingBottom="180px"
                stickers={[
                    { iconClass: "fas fa-bolt", color: "#cc0000", top: "20%", right: "12%", rotate: "10deg", delay: "0s", size: 90 }, // Tesla
                    { iconClass: "fas fa-microchip", color: "#76B900", top: "50%", right: "18%", rotate: "-8deg", delay: "1.5s", size: 80 }, // Nvidia
                    { iconClass: "fas fa-car-side", color: "#00BFFF", top: "35%", left: "10%", rotate: "5deg", delay: "1s", size: 70 }, // Nio
                    { iconClass: "fas fa-apple-alt", color: "#555555", top: "65%", left: "15%", rotate: "-10deg", delay: "2s", size: 75 }, // Apple
                ]}
            />
            <UnifiedMarketTable
                title="Turbo Stocks Pricing"
                standardData={standardData}
                ultraData={ultraData}
            />
            <MarketFeatures
                title="Why Trade Turbo Stocks?"
                features={features}
            />
            <ForexCTA />
            <Footer />
        </main>
    );
}
