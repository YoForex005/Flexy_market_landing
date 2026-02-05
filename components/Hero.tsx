"use client";

import { useEffect, useRef } from 'react';
import Ticker from "./Ticker";


export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Force video to play
        const playVideo = () => {
            video.play().catch((error) => {
                console.log('Video autoplay failed:', error);
                // Try again after a short delay
                setTimeout(() => {
                    video.play().catch(() => {
                        console.log('Video autoplay retry failed');
                    });
                }, 500);
            });
        };

        // Play video when loaded
        if (video.readyState >= 3) {
            playVideo();
        } else {
            video.addEventListener('loadeddata', playVideo);
        }

        return () => {
            video.removeEventListener('loadeddata', playVideo);
        };
    }, []);

    return (
        <div className="index-banner position-relative" ref={heroRef}>
            {/* HD Cinematic Video Background */}
            <div className="hero-video-container">
                <video
                    ref={videoRef}
                    className="hero-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                >
                    <source src="/videos/206633.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Professional Overlay for Text Legibility */}
                <div className="hero-overlay"></div>
            </div>

            <div className="index-banner-content text-center" style={{ position: 'relative', zIndex: 10, maxWidth: "1200px", paddingTop: "40px", paddingBottom: "100px", paddingLeft: "20px", paddingRight: "20px" }}>
                <div
                    className="d-inline-flex align-items-center justify-content-center slideup_animation animate mb-4"
                    style={{
                        background: "rgba(255, 255, 255, 0.15)",
                        border: "1px solid rgba(255, 255, 255, 0.25)",
                        borderRadius: "100px",
                        padding: "8px 24px",
                        backdropFilter: "blur(10px)",
                    }}
                >
                    <i className="fas fa-check-circle me-2" style={{ color: "#2ecc71" }}></i>
                    <span
                        style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                            textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)"
                        }}
                    >
                        Trusted by over Million Traders
                    </span>
                </div>
                <h1
                    className="slideup_animation animate mb-4"
                    style={{
                        color: "#ffffff",
                        fontSize: "clamp(40px, 6vw, 68px)",
                        fontWeight: 900,
                        lineHeight: "1.1",
                        letterSpacing: "-2px",
                        textShadow: "0 2px 20px rgba(0, 0, 0, 0.5), 0 4px 40px rgba(0, 0, 0, 0.3)"
                    }}
                >
                    The Broker You Can Trust
                    <br />
                    <span style={{
                        background: "linear-gradient(135deg, #2ecc71 0%, #a7f3d0 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        display: "inline-block",
                        textShadow: "none",
                        filter: "drop-shadow(0 2px 15px rgba(46, 204, 113, 0.4))"
                    }}>
                        The Results You Deserve
                    </span>
                </h1>
                <p
                    className="slideup_animation animate mx-auto mb-4"
                    style={{
                        color: "#f0f9ff",
                        fontSize: "19px",
                        maxWidth: "700px",
                        lineHeight: "1.7",
                        textShadow: "0 1px 12px rgba(0, 0, 0, 0.4)"
                    }}
                >
                    We offer a superior trading environment that puts traders in the best position to profit.
                </p>
                <a
                    href="https://user.flexymarkets.com/accounts/signUps"
                    className="index-banner-button slideup_animation animate fw-bold"
                    style={{
                        padding: "18px 48px",
                        fontSize: "16px",
                        borderRadius: "50px",
                        boxShadow: "0 12px 30px rgba(46, 204, 113, 0.4)",
                        marginTop: "10px",
                        display: "inline-block",
                        textDecoration: "none",
                        color: "#fff",
                        position: "relative",
                        overflow: "hidden",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                    }}
                >
                    Get your welcome bonus*
                </a>
                <div className="index-banner-limited mt-4" style={{
                    fontSize: "12px",
                    fontWeight: 500,
                    letterSpacing: "0.5px",
                    color: "rgba(255, 255, 255, 0.8)",
                    textShadow: "0 1px 8px rgba(0, 0, 0, 0.3)"
                }}>
                    *Limited-Time Offer
                </div>
                <div className="index-banner-easy mt-2 fw-bold" style={{
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    color: "#ffffff",
                    textShadow: "0 1px 8px rgba(0, 0, 0, 0.3)"
                }}>
                    <i className="fas fa-check-circle" style={{ color: "#2ecc71" }}></i>
                    Easy Access to 1,400+ Global Assets
                </div>

                {/* Integrated Marquee Ticker */}
                <div className="mt-5">
                    <Ticker />
                </div>
            </div>
        </div>
    );
}
