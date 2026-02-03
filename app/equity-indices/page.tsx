"use client";

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import MarketHero from '@/components/MarketHero';
import MarketTable from '@/components/MarketTable';
import MarketFeatures from '@/components/MarketFeatures';
import ForexCTA from '@/components/ForexCTA';

export default function EquityIndicesPage() {
    const standardData = [
        { symbol: "US500", name: "S&P 500", avgSpread: "0.50", lowSpread: "0.40", leverage: "100", icon: "https://flagcdn.com/w80/us.png" },
        { symbol: "US30", name: "Wall Street 30", avgSpread: "1.50", lowSpread: "1.20", leverage: "100", icon: "https://flagcdn.com/w80/us.png" },
        { symbol: "DE40", name: "Germany 40", avgSpread: "1.00", lowSpread: "0.80", leverage: "100", icon: "https://flagcdn.com/w80/de.png" },
        { symbol: "UK100", name: "UK 100", avgSpread: "1.20", lowSpread: "1.00", leverage: "100", icon: "https://flagcdn.com/w80/gb.png" },
        { symbol: "JP225", name: "Japan 225", avgSpread: "5.00", lowSpread: "4.00", leverage: "100", icon: "https://flagcdn.com/w80/jp.png" },
    ];

    const ultraData = [
        { symbol: "US500", name: "S&P 500", avgSpread: "0.30", lowSpread: "0.20", leverage: "100", icon: "https://flagcdn.com/w80/us.png" },
        { symbol: "US30", name: "Wall Street 30", avgSpread: "1.00", lowSpread: "0.80", leverage: "100", icon: "https://flagcdn.com/w80/us.png" },
        { symbol: "DE40", name: "Germany 40", avgSpread: "0.80", lowSpread: "0.50", leverage: "100", icon: "https://flagcdn.com/w80/de.png" },
        { symbol: "UK100", name: "UK 100", avgSpread: "0.90", lowSpread: "0.70", leverage: "100", icon: "https://flagcdn.com/w80/gb.png" },
        { symbol: "JP225", name: "Japan 225", avgSpread: "3.50", lowSpread: "3.00", leverage: "100", icon: "https://flagcdn.com/w80/jp.png" },
    ];

    const features = [
        { title: "Global Access", description: "Trade the world's most major indices from one single account.", iconClass: "fas fa-globe-americas" },
        { title: "After Hours", description: "Trade select indices even after market close to capture global opportunities.", iconClass: "fas fa-moon" },
        { title: "Low Margins", description: "Benefit from low margin requirements on all major indices.", iconClass: "fas fa-tags" },
        { title: "Macro Trading", description: "Speculate on the performance of entire economies rather than single stocks.", iconClass: "fas fa-chart-line" },
    ];

    return (
        <main>
            <NavBar />
            <MarketHero
                title="Indices Trading"
                subtitle="Trade the world's leading equity indices like S&P 500 and DAX 40 with tight spreads."
                activeMarket="Equity Indices"
                stickers={[
                    { countryCode: "us", top: "20%", right: "12%", rotate: "15deg", delay: "0s", size: 85 },
                    { countryCode: "jp", top: "55%", right: "25%", rotate: "-5deg", delay: "2.5s", size: 60 }, // Japan
                    { countryCode: "de", top: "40%", left: "10%", rotate: "10deg", delay: "1.5s", size: 70 }, // Germany
                    { countryCode: "gb", top: "15%", left: "20%", rotate: "-15deg", delay: "1s", size: 75 }, // UK
                ]}
            />
            <MarketTable
                title="Major Indices"
                standardData={standardData}
                ultraData={ultraData}
            />
            <MarketFeatures
                title="Why Trade Indices With Us?"
                features={features}
            />
            <ForexCTA />
            <Footer />
        </main>
    );
}
