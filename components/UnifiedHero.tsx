"use client";

import WorldMapBackground from './WorldMapBackground';
import FloatingSticker from './FloatingSticker';
import MarketNavigation from './MarketNavigation';
import { ReactNode } from 'react';

export interface StickerConfig {
    countryCode?: string;
    imageUrl?: string;
    iconClass?: string;
    color?: string;
    top?: string;
    right?: string;
    left?: string;
    bottom?: string;
    rotate: string;
    delay: string;
    size: number;
}

interface UnifiedHeroProps {
    title: ReactNode;
    subtitle: string;
    activeMarket: string;
    paddingTop?: string;
    paddingBottom?: string;
    stickers?: StickerConfig[];
    ctaText?: string;
    ctaLink?: string;
}

export default function UnifiedHero({
    title,
    subtitle,
    activeMarket,
    paddingTop = "120px",
    paddingBottom = "100px",
    stickers = [],
    ctaText = "Start Trading Forex",
    ctaLink = "https://user.flexymarkets.com/accounts/signUps"
}: UnifiedHeroProps) {
    return (
        <section className="position-relative overflow-hidden"
            style={{
                minHeight: 'auto',
                background: 'radial-gradient(circle at 50% -20%, #ccfbf1 0%, #ffffff 60%)',
                paddingTop: paddingTop,
                paddingBottom: paddingBottom
            }}
        >

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
                    <a
                        href={ctaLink}
                        className="btn btn-primary fw-bold px-5 py-3"
                        style={{
                            textDecoration: 'none',
                            fontSize: '18px'
                        }}
                    >
                        {ctaText} <i className="fas fa-arrow-right ms-2"></i>
                    </a>
                </div>

                {/* Market Navigation Pills */}
                <MarketNavigation activeMarket={activeMarket} />

            </div>

            {/* Floating Stickers */}
            {stickers.map((sticker, index) => (
                <FloatingSticker
                    key={index}
                    {...sticker}
                />
            ))}

        </section>
    );
}
