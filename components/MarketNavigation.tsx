"use client";

import Link from 'next/link';

interface MarketNavigationProps {
    activeMarket: string;
}

const markets = [
    { name: "Forex Trading", href: "/forex-trading" },
    { name: "Cryptocurrencies", href: "/cryptocurrencies" },
    { name: "Stock Derivatives", href: "/stock-derivatives" },
    { name: "Turbo Stocks", href: "/turbo-stocks" },
    { name: "Commodities", href: "/commodities" },
    { name: "Equity Indices", href: "/equity-indices" },
    { name: "Precious Metals", href: "/precious-metals" },
    { name: "Energies", href: "/energies" },
    { name: "Shares", href: "/shares" },
    { name: "Thematic Indices", href: "/thematic-indices" },
];

export default function MarketNavigation({ activeMarket }: MarketNavigationProps) {
    return (
        <div className="d-flex flex-wrap justify-content-center gap-3 mt-5 pt-4">
            {markets.map((market) => {
                const isActive = market.name === activeMarket;
                return (
                    <Link
                        key={market.name}
                        href={market.href}
                        className={`market-nav-pill text-decoration-none ${isActive ? 'active' : ''}`}
                    >
                        {market.name}
                    </Link>
                );
            })}

            <style jsx global>{`
                /* Styles moved to globals.css for consistency */
            `}</style>
        </div>
    );
}
