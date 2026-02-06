"use client";

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import UnifiedHero from '@/components/UnifiedHero';
import UnifiedMarketTable from '@/components/UnifiedMarketTable';
import MarketFeatures from '@/components/MarketFeatures';
import ForexCTA from '@/components/ForexCTA';

export default function ThematicIndicesPage() {
    const standardData = [
        { symbol: "AI_INDEX", name: "Artificial Intelligence Index", avgSpread: "0.40", lowSpread: "0.30", leverage: "10", iconClass: "fas fa-robot", color: "#00BFFF" },
        { symbol: "EV_INDEX", name: "Electric Vehicles Index", avgSpread: "0.35", lowSpread: "0.25", leverage: "10", iconClass: "fas fa-charging-station", color: "#32CD32" },
        { symbol: "BIO_INDEX", name: "Biotech & Pharma Index", avgSpread: "0.45", lowSpread: "0.35", leverage: "10", iconClass: "fas fa-dna", color: "#FF69B4" },
        { symbol: "META_INDEX", name: "Metaverse Index", avgSpread: "0.50", lowSpread: "0.40", leverage: "10", iconClass: "fas fa-vr-cardboard", color: "#8A2BE2" },
        { symbol: "ESG_INDEX", name: "ESG Companies Index", avgSpread: "0.30", lowSpread: "0.20", leverage: "10", iconClass: "fas fa-leaf", color: "#228B22" },
    ];

    const ultraData = [
        { symbol: "AI_INDEX", name: "Artificial Intelligence Index", avgSpread: "0.30", lowSpread: "0.20", leverage: "10", iconClass: "fas fa-robot", color: "#00BFFF" },
        { symbol: "EV_INDEX", name: "Electric Vehicles Index", avgSpread: "0.25", lowSpread: "0.15", leverage: "10", iconClass: "fas fa-charging-station", color: "#32CD32" },
        { symbol: "BIO_INDEX", name: "Biotech & Pharma Index", avgSpread: "0.35", lowSpread: "0.25", leverage: "10", iconClass: "fas fa-dna", color: "#FF69B4" },
        { symbol: "META_INDEX", name: "Metaverse Index", avgSpread: "0.40", lowSpread: "0.30", leverage: "10", iconClass: "fas fa-vr-cardboard", color: "#8A2BE2" },
        { symbol: "ESG_INDEX", name: "ESG Companies Index", avgSpread: "0.20", lowSpread: "0.15", leverage: "10", iconClass: "fas fa-leaf", color: "#228B22" },
    ];

    const features = [
        { title: "Diversified Exposure", description: "Gain exposure to entire sectors with a single trade.", iconClass: "fas fa-layer-group" },
        { title: "Emerging Trends", description: "Invest in the future with indices tracking the latest global trends.", iconClass: "fas fa-chart-line" },
        { title: "Risk Management", description: "Spread your risk across multiple companies in high-growth industries.", iconClass: "fas fa-shield-alt" },
        { title: "Expertly Curated", description: "Indices designed by market experts to capture sector performance.", iconClass: "fas fa-user-tie" },
    ];

    return (
        <main>
            <NavBar />
            <UnifiedHero
                title="Trade Thematic Indices"
                subtitle="Invest in the future. Trade baskets of stocks tracking global trends like AI, EVs, and Biotech."
                activeMarket="Thematic Indices"
                paddingTop="210px"
                paddingBottom="180px"
                stickers={[
                    { iconClass: "fas fa-robot", color: "#00BFFF", top: "20%", right: "12%", rotate: "10deg", delay: "0s", size: 90 }, // AI Robot
                    { iconClass: "fas fa-leaf", color: "#32CD32", top: "50%", right: "18%", rotate: "-8deg", delay: "1.5s", size: 80 }, // ESG Leaf
                    { iconClass: "fas fa-dna", color: "#FF69B4", top: "35%", left: "10%", rotate: "5deg", delay: "1s", size: 70 }, // Biotech DNA
                    { iconClass: "fas fa-vr-cardboard", color: "#8A2BE2", top: "65%", left: "15%", rotate: "-10deg", delay: "2s", size: 75 }, // Metaverse VR
                ]}
            />
            <UnifiedMarketTable
                title="Thematic Indices Pricing"
                standardData={standardData}
                ultraData={ultraData}
            />
            <MarketFeatures
                title="Why Trade Thematic Indices?"
                features={features}
            />
            <ForexCTA />
            <Footer />
        </main>
    );
}

