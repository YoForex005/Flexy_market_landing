"use client";

import { useEffect, useRef, useState } from 'react';

import AnimatedBackground from "./AnimatedBackground";

import ForexRates from "./ForexRates";
import Ticker from "./Ticker";


export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const [isChatVisible, setIsChatVisible] = useState(true);

    return (
        <div className="index-banner position-relative" ref={heroRef}>
            {/* Premium Gradient Waves Background - Pure CSS */}
            <AnimatedBackground variant="aurora" intensity="high" />

            <div className="index-banner-content text-center" style={{ position: 'relative', zIndex: 10, maxWidth: "1200px", padding: "40px 20px" }}>
                <div
                    className="d-inline-flex align-items-center justify-content-center slideup_animation animate mb-4"
                    style={{
                        background: "rgba(15, 73, 65, 0.08)",
                        border: "1px solid rgba(15, 73, 65, 0.15)",
                        borderRadius: "100px",
                        padding: "8px 24px",
                    }}
                >
                    <i className="fas fa-check-circle me-2" style={{ color: "#0f664a" }}></i>
                    <span
                        style={{
                            color: "#0f4941",
                            fontSize: "12px",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "1px"
                        }}
                    >
                        Trusted by over Million Traders
                    </span>
                </div>
                <h1
                    className="slideup_animation animate mb-4"
                    style={{
                        color: "#0f4941",
                        fontSize: "clamp(40px, 6vw, 64px)",
                        fontWeight: 800,
                        lineHeight: "1.1",
                        letterSpacing: "-1.5px"
                    }}
                >
                    The Broker You Can Trust,
                    <br />
                    <span style={{
                        background: "linear-gradient(135deg, #0f664a 0%, #2ecc71 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        display: "inline-block"
                    }}>
                        The Results You Deserve
                    </span>
                </h1>
                <p
                    className="slideup_animation animate mx-auto mb-4"
                    style={{
                        color: "#344054",
                        fontSize: "18px",
                        maxWidth: "700px",
                        lineHeight: "1.6"
                    }}
                >
                    We offer a superior trading environment that puts traders in the best position to profit.
                </p>
                <button
                    type="button"
                    className="index-banner-button slideup_animation animate fw-bold"
                    style={{
                        padding: "16px 40px",
                        fontSize: "16px",
                        borderRadius: "50px",
                        boxShadow: "0 10px 20px rgba(15, 73, 65, 0.2)",
                        marginTop: "10px"
                    }}
                >
                    Get your welcome bonus*
                </button>
                <div className="index-banner-limited mt-4 text-muted" style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.5px" }}>
                    *Limited-Time Offer
                </div>
                <div className="index-banner-easy mt-2 text-dark fw-bold" style={{ fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                    <i className="fas fa-check-circle" style={{ color: "#2ecc71" }}></i>
                    Easy Access to 1,400+ Global Assets
                </div>


                {/* Integrated Marquee Ticker */}
                <div className="mt-5">
                    <Ticker />
                </div>
            </div>

            {/* Floating Actions */}
            <div className="floating-actions">
                {isChatVisible && (
                    <div className="chat-bubble">
                        <span>Chat with us</span>
                        <div
                            className="close-chat"
                            onClick={() => setIsChatVisible(false)}
                            style={{ cursor: 'pointer' }}
                        >
                            ×
                        </div>
                    </div>
                )}
                <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-btn"
                >
                    <i className="fab fa-whatsapp"></i>
                </a>
            </div>
        </div>
    );
}
