"use client";

import { useEffect, useRef } from 'react';
import Link from "next/link";

import ForexRates from "./ForexRates";
import Ticker from "./Ticker";
import Awards from "./Awards";

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!heroRef.current) return;
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const x = (clientX / innerWidth - 0.5) * 2; // -1 to 1
            const y = (clientY / innerHeight - 0.5) * 2; // -1 to 1

            heroRef.current.style.setProperty('--mouse-x', x.toString());
            heroRef.current.style.setProperty('--mouse-y', y.toString());
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="index-banner position-relative" ref={heroRef}>
            {/* 3D Interactive Mesh Background */}
            <div className="wave-container">
                {/* 
                   Motion Logic:
                   Wrapper handles Parallax (Mouse interaction).
                   Inner 'wave' handles Breathing (CSS Animation).
                */}
                <div className="parallax-wrapper" style={{ transform: 'translate(calc(var(--mouse-x, 0) * -60px), calc(var(--mouse-y, 0) * -60px))', transition: 'transform 0.1s ease-out' }}>
                    <div className="wave wave-1"></div>
                </div>
                <div className="parallax-wrapper" style={{ transform: 'translate(calc(var(--mouse-x, 0) * 80px), calc(var(--mouse-y, 0) * 80px))', transition: 'transform 0.1s ease-out' }}>
                    <div className="wave wave-2"></div>
                </div>
                <div className="parallax-wrapper" style={{ transform: 'translate(calc(var(--mouse-x, 0) * -40px), calc(var(--mouse-y, 0) * -40px))', transition: 'transform 0.1s ease-out' }}>
                    <div className="wave wave-3"></div>
                </div>
                <div className="parallax-wrapper" style={{ transform: 'translate(calc(var(--mouse-x, 0) * 50px), calc(var(--mouse-y, 0) * 50px))', transition: 'transform 0.1s ease-out' }}>
                    <div className="wave wave-4"></div>
                </div>

                {/* Bubble Flow Animation */}
                <div className="bubble-container">
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                </div>
            </div>

            <div className="index-banner-content text-center" style={{ zIndex: 1, maxWidth: "1200px", padding: "40px 20px" }}>
                <h5
                    className="slideup_animation animate"
                    style={{
                        color: "#667085",
                        fontSize: "13px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "2px",
                        marginBottom: "16px"
                    }}
                >
                    Trusted by over Million Traders
                </h5>
                <h1
                    className="slideup_animation animate mb-3"
                    style={{
                        color: "#0f4941",
                        fontSize: "clamp(32px, 5vw, 56px)",
                        fontWeight: 800,
                        lineHeight: "1.1",
                        letterSpacing: "-1px"
                    }}
                >
                    The Broker You Can Trust,
                    <br />The Results You Deserve
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
                <Link href="https://user.flexymarkets.com/accounts/signUp">
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
                </Link>
                <div className="index-banner-limited mt-4 text-muted" style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.5px" }}>
                    *Limited-Time Offer
                </div>
                <div className="index-banner-easy mt-2 text-dark fw-bold" style={{ fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                    <i className="fas fa-check-circle" style={{ color: "#2ecc71" }}></i>
                    Easy Access to 1,400+ Global Assets
                </div>

                {/* Integrated Forex Rates Cards */}


                {/* Integrated Marquee Ticker */}
                <Ticker />

                {/* Integrated Awards Slider */}
                <Awards />
            </div>

            {/* Floating Actions */}
            <div className="floating-actions">
                <div className="chat-bubble">
                    <span>Chat with us</span>
                    <div className="close-chat">x</div>
                </div>
                <div className="whatsapp-btn">
                    <i className="fab fa-whatsapp"></i>
                </div>
            </div>
        </div>
    );
}
