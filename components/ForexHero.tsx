"use client";

import { useRef } from 'react';
import Link from 'next/link';
import WorldMapBackground from './WorldMapBackground';
import FloatingSticker from './FloatingSticker';
import MarketNavigation from './MarketNavigation';

interface ForexHeroProps {
    paddingTop?: string;
    paddingBottom?: string;
}

export default function ForexHero({ paddingTop = "120px", paddingBottom = "100px" }: ForexHeroProps) {
    return (
        <section className="position-relative overflow-hidden"
            style={{
                minHeight: 'auto',
                background: 'radial-gradient(circle at 50% -20%, #ccfbf1 0%, #ffffff 60%)',
                paddingTop: paddingTop,
                paddingBottom: paddingBottom
            }}
        >

            {/* Background Map Pattern */}
            <WorldMapBackground />

            <div className="container text-center position-relative" style={{ zIndex: 10 }}>

                {/* Main Heading */}
                <h1
                    className="mb-4"
                    style={{
                        color: "#0f4941",
                        fontSize: "clamp(56px, 6vw, 80px)",
                        fontWeight: 700,
                        letterSpacing: "-2px",
                        lineHeight: "1.1"
                    }}
                >
                    Discover
                    <br />
                    Forex Trading
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
                    Buy and sell the most liquid currencies, like EURUSD, 24/5 with market-leading execution and conditions.
                </p>

                {/* Primary CTA Button */}
                <div className="mb-5">
                    <button
                        type="button"
                        className="btn btn-primary fw-bold"
                        style={{
                            padding: "18px 42px",
                            fontSize: "18px"
                        }}
                    >
                        Start Trading Forex
                    </button>
                </div>

                {/* Market Navigation Pills */}
                {/* Market Navigation Pills */}
                <MarketNavigation activeMarket="Forex Trading" />

            </div>

            {/* Floating 3D Flags (Stickers) */}
            {/* Left Side */}
            <FloatingSticker countryCode="eu" top="15%" left="15%" rotate="-15deg" delay="0s" size={70} /> {/* EU */}
            <FloatingSticker countryCode="ch" top="45%" left="8%" rotate="10deg" delay="1s" size={100} /> {/* Swiss */}
            <FloatingSticker countryCode="ca" top="50%" left="14%" rotate="-5deg" delay="1s" size={80} /> {/* Canada - Part of Swiss group in image? */}

            {/* Top Center-Right */}
            <FloatingSticker countryCode="au" top="12%" right="20%" rotate="12deg" delay="2s" size={60} /> {/* Australia/NZ */}

            {/* Right Side */}
            <FloatingSticker countryCode="us" top="55%" right="12%" rotate="-8deg" delay="1.5s" size={110} /> {/* USA */}
            <FloatingSticker countryCode="eu" top="60%" right="8%" rotate="5deg" delay="1.5s" size={90} /> {/* EU - Part of USA group in image? */}
            <FloatingSticker countryCode="nz" top="30%" right="8%" rotate="-12deg" delay="3s" size={70} /> {/* NZ */}

            <style jsx>{`
            `}</style>


        </section>
    );
}
