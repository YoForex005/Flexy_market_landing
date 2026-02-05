"use client";

import Link from 'next/link';
import WorldMapBackground from './WorldMapBackground';
import FloatingSticker from './FloatingSticker';
import MarketNavigation from './MarketNavigation';

export default function CryptoHero() {
    return (
        <section className="position-relative overflow-hidden"
            style={{
                minHeight: '800px',
                background: 'radial-gradient(circle at 50% -20%, #ccfbf1 0%, #ffffff 60%)',
                paddingTop: "120px",
                paddingBottom: "100px"
            }}
        >

            {/* Background Pattern */}
            <WorldMapBackground />

            <div className="container text-center position-relative" style={{ zIndex: 10 }}>

                {/* Main Heading */}
                <h1
                    className="mb-4"
                    style={{
                        color: "#0f4941",
                        fontSize: "clamp(48px, 6vw, 76px)",
                        fontWeight: 700,
                        letterSpacing: "-1.5px",
                        lineHeight: "1.1"
                    }}
                >
                    Discover
                    <br />
                    Crypto Derivatives Trading
                </h1>

                {/* Subtitle */}
                <p
                    className="mx-auto mb-5"
                    style={{
                        color: "#667085",
                        fontSize: "18px",
                        maxWidth: "700px",
                        lineHeight: "1.6",
                        fontWeight: 400
                    }}
                >
                    Trade Crypto derivatives including Bitcoin at real-time prices with unparalleled conditions.
                </p>

                {/* Primary CTA Button */}
                <div className="mb-5">
                    <button
                        type="button"
                        className="btn btn-primary fw-bold"
                        style={{
                            padding: "16px 40px",
                            fontSize: "16px"
                        }}
                    >
                        Start Trading Forex
                    </button>
                    {/* Note: Kept text as "Start Trading Forex" per screenshot, although "Crypto" might be more logical. */}
                </div>

                {/* Market Navigation Pills */}
                <MarketNavigation activeMarket="Cryptocurrencies" />

            </div>

            {/* Floating 3D Crypto Stickers */}

            {/* Left Side */}
            <FloatingSticker imageUrl="https://assets.coincap.io/assets/icons/sol@2x.png" top="15%" left="15%" rotate="-15deg" delay="0s" size={70} /> {/* Solana */}
            <FloatingSticker imageUrl="https://assets.coincap.io/assets/icons/eth@2x.png" top="45%" left="8%" rotate="10deg" delay="1s" size={100} /> {/* Ethereum */}
            <FloatingSticker imageUrl="https://assets.coincap.io/assets/icons/dot@2x.png" top="55%" left="20%" rotate="-5deg" delay="2s" size={60} /> {/* Polkadot */}

            {/* Top Center-Right */}
            <FloatingSticker imageUrl="https://assets.coincap.io/assets/icons/shib@2x.png" top="12%" right="20%" rotate="12deg" delay="2s" size={60} /> {/* Shiba Inu */}
            <FloatingSticker imageUrl="https://assets.coincap.io/assets/icons/avax@2x.png" top="28%" right="10%" rotate="-8deg" delay="1.5s" size={90} /> {/* Avalanche */}

            {/* Right Side */}
            <FloatingSticker imageUrl="https://assets.coincap.io/assets/icons/btc@2x.png" top="55%" right="12%" rotate="-8deg" delay="1.5s" size={110} /> {/* Bitcoin */}

            <style jsx>{`
            `}</style>

        </section>
    );
}
