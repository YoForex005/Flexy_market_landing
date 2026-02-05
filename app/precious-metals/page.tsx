"use client";

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import MarketHero from '@/components/MarketHero';
import GenericMarketTable from '@/components/GenericMarketTable';
import MarketFeatures from '@/components/MarketFeatures';
import ForexCTA from '@/components/ForexCTA';

export default function PreciousMetalsPage() {
    const standardData = [
        { symbol: "XAUUSD", name: "Gold vs US Dollar", avgSpread: "0.30", lowSpread: "0.20", leverage: "100", icon: "https://flagcdn.com/w80/us.png" },
        { symbol: "XAUEUR", name: "Gold vs Euro", avgSpread: "0.35", lowSpread: "0.25", leverage: "100", icon: "https://flagcdn.com/w80/eu.png" },
        { symbol: "XAGUSD", name: "Silver vs US Dollar", avgSpread: "0.03", lowSpread: "0.02", leverage: "100", icon: "https://flagcdn.com/w80/us.png" },
        { symbol: "XPTUSD", name: "Platinum vs US Dollar", avgSpread: "2.50", lowSpread: "2.00", leverage: "50", icon: "https://flagcdn.com/w80/za.png" },
        { symbol: "XPDUSD", name: "Palladium vs US Dollar", avgSpread: "5.00", lowSpread: "4.50", leverage: "50", icon: "https://flagcdn.com/w80/ru.png" },
    ];

    const ultraData = [
        { symbol: "XAUUSD", name: "Gold vs US Dollar", avgSpread: "0.15", lowSpread: "0.10", leverage: "100", icon: "https://flagcdn.com/w80/us.png" },
        { symbol: "XAUEUR", name: "Gold vs Euro", avgSpread: "0.25", lowSpread: "0.18", leverage: "100", icon: "https://flagcdn.com/w80/eu.png" },
        { symbol: "XAGUSD", name: "Silver vs US Dollar", avgSpread: "0.02", lowSpread: "0.015", leverage: "100", icon: "https://flagcdn.com/w80/us.png" },
        { symbol: "XPTUSD", name: "Platinum vs US Dollar", avgSpread: "1.80", lowSpread: "1.50", leverage: "50", icon: "https://flagcdn.com/w80/za.png" },
        { symbol: "XPDUSD", name: "Palladium vs US Dollar", avgSpread: "4.00", lowSpread: "3.50", leverage: "50", icon: "https://flagcdn.com/w80/ru.png" },
    ];

    const features = [
        { title: "Safe Haven", description: "Use Gold and other metals as a hedge during market volatility.", iconClass: "fas fa-shield-alt" },
        { title: "Competitive Spreads", description: "Trade Gold with some of the lowest spreads in the market.", iconClass: "fas fa-dollar-sign" },
        { title: "No Requotes", description: "Experience fast execution with absolutely no requotes on metals.", iconClass: "fas fa-stopwatch" },
        { title: "Diverse Metals", description: "Access a full range of metals including Gold, Silver, Platinum, and Palladium.", iconClass: "fas fa-layer-group" },
    ];

    return (
        <main>
            <NavBar />
            <MarketHero
                title="Discover Precious Metals"
                subtitle="Trade Gold, Silver, Platinum and Palladium with ease. Diversify your portfolio with hard assets."
                activeMarket="Precious Metals"
                paddingTop="210px"
                paddingBottom="180px"
                stickers={[
                    { countryCode: "za", top: "30%", right: "15%", rotate: "-15deg", delay: "0s", size: 80 }, // South Africa (Gold/Plat)
                    { countryCode: "au", top: "60%", right: "10%", rotate: "10deg", delay: "2s", size: 70 }, // Australia
                    { countryCode: "ru", top: "25%", left: "12%", rotate: "5deg", delay: "1s", size: 75 }, // Russia (Palladium)
                    { countryCode: "ch", top: "50%", left: "20%", rotate: "-10deg", delay: "1.5s", size: 65 }, // Swiss (Refining)
                ]}
            />
            <GenericMarketTable
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
