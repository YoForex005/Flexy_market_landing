"use client";

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import UnifiedHero from '@/components/UnifiedHero';
import UnifiedMarketTable from '@/components/UnifiedMarketTable';
import MarketFeatures from '@/components/MarketFeatures';
import ForexCTA from '@/components/ForexCTA';

export default function EquityIndicesPage() {
    const standardData = [
        { symbol: "US500", name: "S&P 500 Index", avgSpread: "0.40", lowSpread: "0.30", leverage: "20", icon: "https://flagcdn.com/w80/us.png" },
        { symbol: "US30", name: "Dow Jones Industrial Average", avgSpread: "1.50", lowSpread: "1.00", leverage: "20", icon: "https://flagcdn.com/w80/us.png" },
        { symbol: "NAS100", name: "Nasdaq 100 Index", avgSpread: "0.80", lowSpread: "0.50", leverage: "20", icon: "https://flagcdn.com/w80/us.png" },
        { symbol: "GER40", name: "DAX 40 Index", avgSpread: "0.90", lowSpread: "0.60", leverage: "20", icon: "https://flagcdn.com/w80/de.png" },
        { symbol: "UK100", name: "FTSE 100 Index", avgSpread: "0.80", lowSpread: "0.50", leverage: "20", icon: "https://flagcdn.com/w80/gb.png" },
    ];

    const ultraData = [
        { symbol: "US500", name: "S&P 500 Index", avgSpread: "0.30", lowSpread: "0.20", leverage: "20", icon: "https://flagcdn.com/w80/us.png" },
        { symbol: "US30", name: "Dow Jones Industrial Average", avgSpread: "1.20", lowSpread: "0.80", leverage: "20", icon: "https://flagcdn.com/w80/us.png" },
        { symbol: "NAS100", name: "Nasdaq 100 Index", avgSpread: "0.60", lowSpread: "0.40", leverage: "20", icon: "https://flagcdn.com/w80/us.png" },
        { symbol: "GER40", name: "DAX 40 Index", avgSpread: "0.70", lowSpread: "0.50", leverage: "20", icon: "https://flagcdn.com/w80/de.png" },
        { symbol: "UK100", name: "FTSE 100 Index", avgSpread: "0.60", lowSpread: "0.40", leverage: "20", icon: "https://flagcdn.com/w80/gb.png" },
    ];

    const features = [
        { title: "Market Indicators", description: "Trade the overall performance of a stock market with a single position.", iconClass: "fas fa-chart-area" },
        { title: "Global Access", description: "Access major indices from the US, Europe, Asia, and Australia.", iconClass: "fas fa-globe" },
        { title: "Extended Hours", description: "Trade indices even when the underlying stock markets are closed.", iconClass: "fas fa-clock" },
        { title: "Low Commissions", description: "Enjoy commission-free trading on major global indices.", iconClass: "fas fa-money-bill-wave" },
    ];

    return (
        <main>
            <NavBar />
            <UnifiedHero
                title="Trade Equity Indices"
                subtitle="Trade the world's leading stock market indices like the S&P 500, Dow Jones and DAX 40."
                activeMarket="Equity Indices"
                paddingTop="210px"
                paddingBottom="180px"
                stickers={[
                    { countryCode: "us", top: "15%", right: "12%", rotate: "15deg", delay: "0s", size: 90 }, // US
                    { countryCode: "de", top: "50%", right: "18%", rotate: "-8deg", delay: "1.5s", size: 80 }, // Germany
                    { countryCode: "gb", top: "35%", left: "10%", rotate: "5deg", delay: "1s", size: 75 }, // UK
                    { countryCode: "jp", top: "65%", left: "15%", rotate: "-10deg", delay: "2s", size: 70 }, // Japan
                ]}
            />
            <UnifiedMarketTable
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
