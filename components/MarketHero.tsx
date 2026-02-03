"use client";

import Link from 'next/link';
import WorldMapBackground from './WorldMapBackground';
import FloatingSticker from './FloatingSticker';
import MarketNavigation from './MarketNavigation';

interface StickerConfig {
    countryCode?: string;
    imageUrl?: string;
    iconClass?: string;
    color?: string;
    top: string;
    right?: string;
    left?: string;
    rotate: string;
    delay: string;
    size: number;
}

interface MarketHeroProps {
    title: string;
    subtitle: string;
    activeMarket: string;
    stickers?: StickerConfig[];
}

export default function MarketHero({ title, subtitle, activeMarket, stickers = [] }: MarketHeroProps) {
    return (
        <section className="position-relative overflow-hidden" style={{ minHeight: '800px', backgroundColor: "#fff", paddingTop: "120px", paddingBottom: "100px" }}>

            {/* Background World Map */}
            <WorldMapBackground />

            <div className="container text-center position-relative" style={{ zIndex: 10 }}>

                {/* Main Heading */}
                <h1
                    className="mb-5"
                    style={{
                        color: "#0f4941",
                        fontSize: "clamp(56px, 6vw, 80px)",
                        fontWeight: 700,
                        letterSpacing: "-2px",
                        lineHeight: "1.1",
                        marginBottom: "100px" // Increased to move content down
                    }}
                >
                    {title}
                </h1>

                {/* Subtitle */}
                <p
                    className="mx-auto mb-5"
                    style={{
                        color: "#667085",
                        fontSize: "20px",
                        maxWidth: "680px",
                        lineHeight: "1.6",
                        fontWeight: 400
                    }}
                >
                    {subtitle}
                </p>

                {/* Primary CTA Button */}
                <div className="mb-5">
                    <a href="https://user.flexymarkets.com/accounts/signUp" style={{ textDecoration: 'none' }}>
                        <button
                            type="button"
                            className="btn fw-bold px-5 py-3 text-white"
                            style={{
                                background: '#0f4941',
                                border: '1px solid #0f4941',
                                borderRadius: '50px',
                                fontSize: '18px',
                                boxShadow: '0 4px 15px rgba(15, 73, 65, 0.4)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = "translateY(-3px)";
                                e.currentTarget.style.boxShadow = "0 15px 35px rgba(15, 73, 65, 0.25)";
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "0 10px 25px rgba(15, 73, 65, 0.15)";
                            }}
                        >
                            Start Trading Forex <i className="fas fa-arrow-right ms-2"></i>
                        </button>
                    </a>
                </div>

                {/* Market Navigation Pills */}
                <MarketNavigation activeMarket={activeMarket} />

            </div>

            {/* Floating Stickers */}
            {stickers.map((sticker, index) => (
                <FloatingSticker
                    key={index}
                    countryCode={sticker.countryCode}
                    imageUrl={sticker.imageUrl}
                    iconClass={sticker.iconClass}
                    color={sticker.color}
                    top={sticker.top}
                    right={sticker.right}
                    left={sticker.left}
                    rotate={sticker.rotate}
                    delay={sticker.delay}
                    size={sticker.size}
                />
            ))}

        </section>
    );
}
