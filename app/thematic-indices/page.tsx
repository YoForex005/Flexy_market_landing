"use client";

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import MarketHero from '@/components/MarketHero';
import GenericMarketTable from '@/components/GenericMarketTable';
import MarketFeatures from '@/components/MarketFeatures';
import ForexCTA from '@/components/ForexCTA';

export default function ThematicIndicesPage() {
    const standardData = [
        {
            symbol: "AI-INDEX",
            name: "Artificial Intelligence",
            avgSpread: "1.5",
            lowSpread: "0.8",
            leverage: "20",
            iconClass: "fas fa-brain",
            color: "#8e44ad"
        },
        {
            symbol: "EV-INDEX",
            name: "Electric Vehicles",
            avgSpread: "1.2",
            lowSpread: "0.6",
            leverage: "20",
            iconClass: "fas fa-bolt",
            color: "#f1c40f"
        },
        {
            symbol: "BIO-INDEX",
            name: "Biotech & Pharma",
            avgSpread: "1.8",
            lowSpread: "0.9",
            leverage: "20",
            iconClass: "fas fa-dna",
            color: "#e74c3c"
        },
        {
            symbol: "ESG-INDEX",
            name: "ESG Leaders",
            avgSpread: "1.0",
            lowSpread: "0.5",
            leverage: "20",
            iconClass: "fas fa-leaf",
            color: "#2ecc71"
        },
        {
            symbol: "GAME-INDEX",
            name: "Gaming & Esports",
            avgSpread: "1.4",
            lowSpread: "0.7",
            leverage: "20",
            iconClass: "fas fa-gamepad",
            color: "#3498db"
        },
    ];

    const ultraData = [
        {
            symbol: "AI-INDEX",
            name: "Artificial Intelligence",
            avgSpread: "1.0",
            lowSpread: "0.5",
            leverage: "20",
            iconClass: "fas fa-brain",
            color: "#8e44ad"
        },
        {
            symbol: "EV-INDEX",
            name: "Electric Vehicles",
            avgSpread: "0.8",
            lowSpread: "0.4",
            leverage: "20",
            iconClass: "fas fa-bolt",
            color: "#f1c40f"
        },
        {
            symbol: "BIO-INDEX",
            name: "Biotech & Pharma",
            avgSpread: "1.2",
            lowSpread: "0.6",
            leverage: "20",
            iconClass: "fas fa-dna",
            color: "#e74c3c"
        },
        {
            symbol: "ESG-INDEX",
            name: "ESG Leaders",
            avgSpread: "0.7",
            lowSpread: "0.3",
            leverage: "20",
            iconClass: "fas fa-leaf",
            color: "#2ecc71"
        },
        {
            symbol: "GAME-INDEX",
            name: "Gaming & Esports",
            avgSpread: "1.0",
            lowSpread: "0.5",
            leverage: "20",
            iconClass: "fas fa-gamepad",
            color: "#3498db"
        },
    ];

    const features = [
        { title: "Trend Trading", description: "Capture the growth of future-shaping industries.", iconClass: "fas fa-chart-line" },
        { title: "Instant Diversification", description: "One trade gives you exposure to a whole sector.", iconClass: "fas fa-layer-group" },
        { title: "Expertly Curated", description: "Baskets designed by analysts to track performance.", iconClass: "fas fa-glasses" },
        { title: "Risk Balanced", description: "Reduce single-stock risk by trading the index.", iconClass: "fas fa-scale-balanced" },
    ];

    return (
        <main>
            <NavBar />
            <MarketHero
                title="Thematic Indices"
                subtitle="Don't just trade stocks—trade the trends. Invest in the sectors shaping the world of tomorrow, from AI to Clean Energy."
                activeMarket="Thematic Indices"
                paddingTop="210px"
                paddingBottom="180px"
                stickers={[
                    { iconClass: "fas fa-brain", color: "#8e44ad", top: "20%", right: "15%", rotate: "15deg", delay: "0s", size: 80 },
                    { iconClass: "fas fa-bolt", color: "#f1c40f", top: "50%", right: "10%", rotate: "-10deg", delay: "1.5s", size: 90 },
                    { iconClass: "fas fa-dna", color: "#e74c3c", top: "30%", left: "12%", rotate: "-5deg", delay: "1s", size: 70 },
                    { iconClass: "fas fa-leaf", color: "#2ecc71", top: "65%", left: "18%", rotate: "10deg", delay: "2s", size: 60 },
                    { iconClass: "fas fa-gamepad", color: "#3498db", top: "15%", left: "25%", rotate: "5deg", delay: "0.5s", size: 75 },
                ]}
            />
            <GenericMarketTable
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

