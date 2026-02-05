"use client";

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import MarketHero from '@/components/MarketHero';
import GenericMarketTable from '@/components/GenericMarketTable';
import MarketFeatures from '@/components/MarketFeatures';
import ForexCTA from '@/components/ForexCTA';

export default function StockDerivativesPage() {
    const standardData = [
        { symbol: "AAPL", name: "Apple Inc.", avgSpread: "0.15", lowSpread: "0.10", leverage: "20", iconClass: "fab fa-apple", color: "#000000" },
        { symbol: "TSLA", name: "Tesla Inc.", avgSpread: "0.25", lowSpread: "0.15", leverage: "20", iconClass: "fas fa-car", color: "#cc0000" },
        { symbol: "AMZN", name: "Amazon.com Inc.", avgSpread: "0.20", lowSpread: "0.12", leverage: "20", iconClass: "fab fa-amazon", color: "#FF9900" },
        { symbol: "GOOGL", name: "Alphabet Inc.", avgSpread: "0.18", lowSpread: "0.10", leverage: "20", iconClass: "fab fa-google", color: "#4285F4" },
        { symbol: "META", name: "Meta Platforms", avgSpread: "0.22", lowSpread: "0.14", leverage: "20", iconClass: "fab fa-facebook", color: "#1877F2" },
    ];

    const ultraData = [
        { symbol: "AAPL", name: "Apple Inc.", avgSpread: "0.08", lowSpread: "0.05", leverage: "20", iconClass: "fab fa-apple", color: "#000000" },
        { symbol: "TSLA", name: "Tesla Inc.", avgSpread: "0.15", lowSpread: "0.08", leverage: "20", iconClass: "fas fa-car", color: "#cc0000" },
        { symbol: "AMZN", name: "Amazon.com Inc.", avgSpread: "0.10", lowSpread: "0.06", leverage: "20", iconClass: "fab fa-amazon", color: "#FF9900" },
        { symbol: "GOOGL", name: "Alphabet Inc.", avgSpread: "0.09", lowSpread: "0.05", leverage: "20", iconClass: "fab fa-google", color: "#4285F4" },
        { symbol: "META", name: "Meta Platforms", avgSpread: "0.12", lowSpread: "0.07", leverage: "20", iconClass: "fab fa-facebook", color: "#1877F2" },
    ];

    const features = [
        {
            title: "Cut Your Costs",
            description: "Skip stock exchange costs and trade straight from your Flexy account.",
            iconClass: "fas fa-chart-line"
        },
        {
            title: "Buy and Sell Stocks",
            description: "Buy and sell assets to take advantage of all market conditions.",
            iconClass: "fas fa-exchange-alt"
        },
        {
            title: "Pay 0 Commissions",
            description: "Boost the potential of your trades with leverage for traders of all levels.",
            iconClass: "fas fa-percentage"
        },
        {
            title: "Forget Charges",
            description: "Use your money to trade, not to pay for services. You can enjoy no hidden fees or extra charges.",
            iconClass: "fas fa-wallet"
        },
    ];

    return (
        <main>
            <NavBar />
            <MarketHero
                title="Discover Stock Derivatives Trading"
                subtitle="Buy and sell the most liquid stocks, like Apple and Tesla, 24/5 with market-leading execution and conditions."
                activeMarket="Stock Derivatives"
                paddingTop="210px"
                paddingBottom="180px"
                stickers={[
                    { iconClass: "fab fa-apple", color: "#000000", top: "20%", right: "12%", rotate: "15deg", delay: "0s", size: 80 }, // Apple (Black)
                    { iconClass: "fab fa-google", color: "#4285F4", top: "50%", right: "15%", rotate: "-10deg", delay: "2s", size: 70 }, // Google (Blue)
                    { iconClass: "fas fa-car", color: "#cc0000", top: "30%", left: "10%", rotate: "-5deg", delay: "1s", size: 90 }, // Tesla (Red)
                    { iconClass: "fab fa-microsoft", color: "#F25022", top: "60%", left: "15%", rotate: "10deg", delay: "1.5s", size: 75 }, // Microsoft (Orange/Red)
                    { iconClass: "fab fa-facebook", color: "#1877F2", top: "15%", right: "25%", rotate: "-15deg", delay: "0.5s", size: 60 }, // Meta (Blue)
                    { iconClass: "fas fa-microchip", color: "#76B900", top: "65%", right: "10%", rotate: "5deg", delay: "2.5s", size: 80 }, // Nvidia (Green)
                ]}
            />
            <GenericMarketTable
                title="Pick Your Pairs"
                standardData={standardData}
                ultraData={ultraData}
            />
            <MarketFeatures
                title="Why Trade Stocks With Us?"
                features={features}
            />
            <ForexCTA />
            <Footer />
        </main>
    );
}
