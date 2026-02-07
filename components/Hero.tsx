"use client";

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const Ticker = dynamic(() => import('./Ticker'), { ssr: false });

interface SlideData {
    id: number;
    type: 'video' | 'image';
    videoSrc?: string;
    imageSrc?: string;
    customFilter?: string;
    badgeText: string;
    title: string;
    subtitle: string;
    description: string;
    ctaText: string;
}

const slides: SlideData[] = [
    {
        id: 1,
        type: 'video',
        videoSrc: "/videos/hero-video.mp4",
        customFilter: "none",
        badgeText: "Trusted by over Million Traders",
        title: "The Broker You Can Trust",
        subtitle: "The Results You Deserve",
        description: "We offer a superior trading environment that puts traders in the best position to profit.",
        ctaText: "Easy Access to 1,400+ Global Assets"
    },
    {
        id: 2,
        type: 'image',
        imageSrc: "/images/girl1.webp",
        customFilter: "none",
        badgeText: "Premium Trading Experience",
        title: "Join The Elite",
        subtitle: "Trade With The Best",
        description: "Experience lightning fast execution, competitive spreads, and 24/7 dedicated support with Flexy Markets.",
        ctaText: "Start Your Trading Journey Today"
    }
];

const SLIDE_DURATION = 15000;

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [hasTransitioned, setHasTransitioned] = useState(false);
    const [showTicker, setShowTicker] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Defer Ticker loading - load after hero text is visible
    useEffect(() => {
        const timer = setTimeout(() => setShowTicker(true), 3000);
        return () => clearTimeout(timer);
    }, []);

    // Network-aware video: disable on very slow connections
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const conn = (navigator as unknown as { connection?: { effectiveType?: string; saveData?: boolean } }).connection;
        const isSlowNetwork = conn && (
            conn.effectiveType === '2g' ||
            conn.effectiveType === 'slow-2g' ||
            conn.saveData
        );

        if (isSlowNetwork) {
            video.preload = 'none';
            video.pause();
        }
    }, []);

    const nextSlide = useCallback(() => {
        if (!hasTransitioned) setHasTransitioned(true);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, [hasTransitioned]);

    const prevSlide = useCallback(() => {
        if (!hasTransitioned) setHasTransitioned(true);
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }, [hasTransitioned]);

    return (
        <div className="index-banner position-relative group">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`hero-slide ${index === currentSlide ? 'active' : ''} ${!hasTransitioned && index === 0 ? 'instant' : ''}`}
                >
                    {/* Background Media */}
                    <div className="hero-video-container">
                        {slide.type === 'video' ? (
                            <>
                                <video
                                    ref={videoRef}
                                    className="hero-video"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload={index === currentSlide ? "auto" : "none"}
                                    style={{
                                        filter: slide.customFilter,
                                        backgroundColor: '#0f172a' // Dark placeholder to prevent white flash
                                    }}
                                >
                                    {/* Only render source if it's the current slide or next slide to save bandwidth */}
                                    {(index === currentSlide || index === (currentSlide + 1) % slides.length) && (
                                        <source src={slide.videoSrc} type="video/mp4" />
                                    )}
                                </video>
                                <div className="hero-overlay"></div>
                            </>
                        ) : (
                            <>
                                <Image
                                    src={slide.imageSrc || ''}
                                    alt={slide.title}
                                    fill
                                    className="hero-video"
                                    style={{
                                        objectFit: 'cover',
                                        filter: slide.customFilter
                                    }}
                                />
                                <div className="hero-overlay"></div>
                            </>
                        )}
                    </div>

                    <div
                        className="index-banner-content text-center hero-slide-content container-responsive"
                        style={{
                            position: 'relative',
                            zIndex: 10,
                            margin: "0 auto",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <div
                            className="d-inline-flex align-items-center justify-content-center mb-4"
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
                                {slide.badgeText}
                            </span>
                        </div>
                        <h1
                            className="mb-4 hero-title"
                            style={{
                                color: "#ffffff",
                                fontWeight: 900,
                                lineHeight: "1.1",
                                letterSpacing: "-2px",
                                textShadow: "0 2px 20px rgba(0, 0, 0, 0.5), 0 4px 40px rgba(0, 0, 0, 0.3)"
                            }}
                        >
                            {slide.title}
                            <br />
                            <span className="text-gradient-premium">
                                {slide.subtitle}
                            </span>
                        </h1>
                        <p
                            className="mx-auto mb-4 hero-description"
                            style={{
                                color: "#f0f9ff",
                                fontSize: "19px",
                                maxWidth: "700px",
                                lineHeight: "1.7",
                                textShadow: "0 1px 12px rgba(0, 0, 0, 0.4)"
                            }}
                        >
                            {slide.description}
                        </p>

                        <div className="mt-4">
                            <Link href="https://user.flexymarkets.com/accounts/signUps" style={{ textDecoration: 'none' }}>
                                <button className="btn btn-primary fw-bold" style={{
                                    padding: "12px 36px",
                                    fontSize: "16px",
                                    borderRadius: "4px",
                                    background: "#0052ff",
                                    border: "none",
                                    boxShadow: "0 4px 15px rgba(0, 82, 255, 0.4)"
                                }}>
                                    Join Now
                                </button>
                            </Link>
                        </div>

                        {/* Ticker removed from here to prevent multiple instances */}
                    </div>
                </div>
            ))}

            {/* Ticker - Rendered once outside the loop to prevent widget errors */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 20,
                    width: '100%',
                    maxWidth: '1200px',
                    padding: '0 20px',
                    pointerEvents: 'none'
                }}
            >
                <div style={{ pointerEvents: 'auto', minHeight: '72px' }}>
                    {showTicker && <Ticker />}
                </div>
            </div>

            {/* Navigation Arrows */}
            <div className="hero-nav-container d-none d-md-flex">
                <button
                    onClick={prevSlide}
                    className="hero-nav-btn me-3"
                    aria-label="Previous Slide"
                >
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button
                    onClick={nextSlide}
                    className="hero-nav-btn"
                    aria-label="Next Slide"
                >
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>

            {/* CSS-animated Progress Bar - eliminates 10 re-renders/sec from setInterval */}
            <div className="hero-progress-bar-container">
                <div
                    key={currentSlide}
                    className="hero-progress-bar"
                    style={{ animationDuration: `${SLIDE_DURATION}ms` }}
                    onAnimationEnd={nextSlide}
                />
            </div>

            <style jsx>{`
                .container-responsive {
                    max-width: 1200px;
                    padding-top: 120px;
                    padding-bottom: 80px;
                    padding-left: 20px;
                    padding-right: 20px;
                }
                .hero-title {
                    font-size: clamp(40px, 6vw, 68px);
                }

                .hero-nav-container {
                    position: absolute;
                    bottom: 15%;
                    right: 10%;
                    z-index: 20;
                    display: flex;
                    align-items: center;
                }

                .hero-nav-btn {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.2);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    backdrop-filter: blur(5px);
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-size: 16px;
                }

                .hero-nav-btn:hover {
                    background: rgba(255, 255, 255, 0.4);
                    transform: scale(1.1);
                }

                @media (max-width: 768px) {
                    .container-responsive {
                        padding-top: 80px;
                        padding-bottom: 40px;
                        width: 100%;
                    }
                    .hero-title {
                        font-size: clamp(32px, 8vw, 42px);
                    }
                    .hero-description {
                        font-size: 16px !important;
                        padding: 0 15px;
                    }
                    .hero-nav-container {
                        bottom: 5%;
                        right: 50%;
                        transform: translateX(50%);
                    }
                }
            `}</style>
        </div>
    );
}
