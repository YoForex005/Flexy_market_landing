"use client";

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import MarketHero from '@/components/MarketHero';
import MarketTable from '@/components/MarketTable';
import MarketFeatures from '@/components/MarketFeatures';
import ForexCTA from '@/components/ForexCTA';

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
        { symbol: "AMD", name: "Advanced Micro Devices", avgSpread: "0.12", lowSpread: "0.08", leverage: "20", iconClass: "fas fa-memory", color: "#000000" },
        { symbol: "NIO", name: "NIO Inc.", avgSpread: "0.10", lowSpread: "0.05", leverage: "20", iconClass: "fas fa-car-side", color: "#00BFFF" },
        { symbol: "PLTR", name: "Palantir Technologies", avgSpread: "0.12", lowSpread: "0.08", leverage: "20", iconClass: "fas fa-project-diagram", color: "#333333" },
    ];

    const features = [
        { title: "High Leverage", description: "Amplify your trades with higher leverage options up to 1:200.", iconClass: "fas fa-tachometer-alt" },
        { title: "Fast Execution", description: "Lightning fast execution designed for volatile market movements.", iconClass: "fas fa-bolt" },
        { title: "No Expiry", description: "Trade without worrying about daily or monthly contract expiry dates.", iconClass: "fas fa-calendar-times" },
        { title: "Short & Long", description: "Profit from both rising and falling markets with ease.", iconClass: "fas fa-arrows-alt-v" },
    ];

    return (
        <main>
            <NavBar />
            <MarketHero
                title="Trade Turbo Stocks"
                subtitle="Experience high-speed trading with enhanced leverage on the world's most volatile stocks."
                activeMarket="Turbo Stocks"
                stickers={[
                    { iconClass: "fas fa-bolt", color: "#FFD700", top: "25%", right: "12%", rotate: "10deg", delay: "0.5s", size: 90 }, // Gold/Yellow
                    { iconClass: "fas fa-microchip", color: "#00BFFF", top: "60%", left: "8%", rotate: "-15deg", delay: "1.5s", size: 70 }, // Deep Sky Blue
                    { iconClass: "fas fa-rocket", color: "#FF4500", top: "15%", left: "15%", rotate: "5deg", delay: "1s", size: 80 }, // Orange Red
                ]}
            />
            <MarketTable
                title="Popular Turbo Stocks"
                standardData={standardData}
                ultraData={ultraData}
            />
            <MarketFeatures
                title="Why Trade Turbo Stocks With Us?"
                features={features}
            />
            <ForexCTA />
            <Footer />
        </main>
    );
}
