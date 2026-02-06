"use client";

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import UnifiedHero from '@/components/UnifiedHero';
import UnifiedMarketTable from '@/components/UnifiedMarketTable';
import MarketFeatures from '@/components/MarketFeatures';
import ForexCTA from '@/components/ForexCTA';

export default function SharesPage() {
    const standardData = [
        { symbol: "NFLX", name: "Netflix Inc.", avgSpread: "0.20", lowSpread: "0.10", leverage: "5", iconClass: "fas fa-play", color: "#E50914" },
        { symbol: "BABA", name: "Alibaba Group", avgSpread: "0.25", lowSpread: "0.15", leverage: "5", iconClass: "fas fa-shopping-bag", color: "#FF6600" },
        { symbol: "V", name: "Visa Inc.", avgSpread: "0.15", lowSpread: "0.08", leverage: "5", iconClass: "fab fa-cc-visa", color: "#1A1F71" },
        { symbol: "JPM", name: "JPMorgan Chase", avgSpread: "0.18", lowSpread: "0.10", leverage: "5", iconClass: "fas fa-university", color: "#000000" },
        { symbol: "WMT", name: "Walmart Inc.", avgSpread: "0.12", lowSpread: "0.05", leverage: "5", iconClass: "fas fa-shopping-cart", color: "#0071CE" },
    ];

    const ultraData = [
        { symbol: "NFLX", name: "Netflix Inc.", avgSpread: "0.15", lowSpread: "0.08", leverage: "5", iconClass: "fas fa-play", color: "#E50914" },
        { symbol: "BABA", name: "Alibaba Group", avgSpread: "0.20", lowSpread: "0.12", leverage: "5", iconClass: "fas fa-shopping-bag", color: "#FF6600" },
        { symbol: "V", name: "Visa Inc.", avgSpread: "0.10", lowSpread: "0.05", leverage: "5", iconClass: "fab fa-cc-visa", color: "#1A1F71" },
        { symbol: "JPM", name: "JPMorgan Chase", avgSpread: "0.12", lowSpread: "0.08", leverage: "5", iconClass: "fas fa-university", color: "#000000" },
        { symbol: "WMT", name: "Walmart Inc.", avgSpread: "0.08", lowSpread: "0.03", leverage: "5", iconClass: "fas fa-shopping-cart", color: "#0071CE" },
    ];

    const features = [
        { title: "Thousands of Stocks", description: "Choose from over 2,000 stocks from global exchanges.", iconClass: "fas fa-th" },
        { title: "Earn Dividends", description: "Get paid dividends directly into your trading account.", iconClass: "fas fa-coins" },
        { title: "Earnings Reports", description: "Trade the volatility during earnings season.", iconClass: "fas fa-bullhorn" },
        { title: "Low Fees", description: "Benefit from our low commission structure.", iconClass: "fas fa-percentage" },
    ];

    return (
        <main>
            <NavBar />
            <UnifiedHero
                title="Discover Share Trading"
                subtitle="Invest in the world's most popular companies. Buy and sell shares of top global brands with competitive conditions."
                activeMarket="Shares"
                paddingTop="210px"
                paddingBottom="180px"
                stickers={[
                    { iconClass: "fab fa-google", color: "#EA4335", top: "20%", right: "12%", rotate: "12deg", delay: "0s", size: 90 }, // Google Red
                    { iconClass: "fab fa-cc-visa", color: "#1A1F71", top: "50%", right: "18%", rotate: "-8deg", delay: "1.5s", size: 65 }, // Visa Blue
                    { iconClass: "fas fa-shopping-cart", color: "#FF9900", top: "35%", left: "10%", rotate: "5deg", delay: "1s", size: 70 }, // Amazon Orange-ish
                    { iconClass: "fas fa-building", color: "#555555", top: "60%", left: "20%", rotate: "-15deg", delay: "2s", size: 80 }, // Building Grey
                ]}
            />
            <UnifiedMarketTable
                title="Popular Shares"
                standardData={standardData}
                ultraData={ultraData}
            />
            <MarketFeatures
                title="Why Trade Shares With Us?"
                features={features}
            />
            <ForexCTA />
            <Footer />
        </main>
    );
}
