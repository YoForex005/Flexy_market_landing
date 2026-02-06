"use client";

import { useEffect, useRef, useState } from 'react';
import Ticker from "./Ticker";

interface SlideData {
    id: number;
    type: 'video' | 'image';
    videoSrc?: string;
    imageSrc?: string;
    customFilter?: string; // Add custom filter property
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
        videoSrc: "https://pub-58234dac80f54ab7a6d0f53bcd35bd06.r2.dev/images/Neymar%20vs%20Argentina%2011%2007%202021%20Copa%20America%20Final%20FINAL%201.mp4",
        customFilter: "none", // Original Green/Teal
        badgeText: "Trusted by over Million Traders",
        title: "The Broker You Can Trust",
        subtitle: "The Results You Deserve",
        description: "We offer a superior trading environment that puts traders in the best position to profit.",
        ctaText: "Easy Access to 1,400+ Global Assets"
    },
    {
        id: 2,
        type: 'image',
        imageSrc: "/images/girl1.png",
        customFilter: "none",
        badgeText: "Premium Trading Experience",
        title: "Join The Elite",
        subtitle: "Trade With The Best",
        description: "Experience lightning fast execution, competitive spreads, and 24/7 dedicated support with Flexy Markets.",
        ctaText: "Start Your Trading Journey Today"
    }
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [progress, setProgress] = useState(0);
    const DURATION = 15000; // 15 seconds
    const UPDATE_INTERVAL = 100; // Update progress every 100ms
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setProgress(0);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setProgress(0);
    };

    useEffect(() => {
        const startTime = Date.now();
        setProgress(0); // Reset progress on slide change

        timerRef.current = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const newProgress = Math.min((elapsed / DURATION) * 100, 100);
            setProgress(newProgress);

            if (elapsed >= DURATION) {
                nextSlide();
            }
        }, UPDATE_INTERVAL);

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [currentSlide]);

    return (
        <div className="index-banner position-relative group">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                >
                    {/* Background Media (Video or Image) */}
                    <div className="hero-video-container">
                        {slide.type === 'video' ? (
                            <>
                                <video
                                    className="hero-video"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="auto"
                                    style={{ filter: slide.customFilter }} // Apply custom filter
                                    key={slide.videoSrc}
                                    onLoadedMetadata={(e) => {
                                        e.currentTarget.playbackRate = 1.5;
                                    }}
                                >
                                    <source src={slide.videoSrc} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                {/* Professional Overlay for Text Legibility - ONLY for video or consistent? Keeping consistent */}
                                <div className="hero-overlay"></div>
                            </>
                        ) : (
                            <>
                                <img
                                    src={slide.imageSrc}
                                    alt={slide.title}
                                    className="hero-video" // Reuse class for full coverage
                                    style={{
                                        objectFit: 'cover',
                                        width: '100%',
                                        height: '100%',
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
                        <div className="index-banner-easy mt-4 fw-bold" style={{
                            fontSize: "14px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "8px",
                            color: "#ffffff",
                            textShadow: "0 1px 8px rgba(0, 0, 0, 0.3)"
                        }}>
                            <i className="fas fa-check-circle" style={{ color: "#2ecc71" }}></i>
                            {slide.ctaText}
                        </div>

                        {/* Integrated Marquee Ticker - Only show on first slide or always? Keeping it inside content for now */}
                        <div className="mt-5 w-100">
                            <Ticker />
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="position-absolute start-0 top-50 translate-middle-y border-0 bg-transparent p-4 d-none d-md-block"
                style={{ zIndex: 20, cursor: 'pointer', opacity: 0.7, transition: 'opacity 0.3s' }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
                aria-label="Previous Slide"
            >
                <i className="fas fa-chevron-left text-white" style={{ fontSize: '2rem', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}></i>
            </button>

            <button
                onClick={nextSlide}
                className="position-absolute end-0 top-50 translate-middle-y border-0 bg-transparent p-4 d-none d-md-block"
                style={{ zIndex: 20, cursor: 'pointer', opacity: 0.7, transition: 'opacity 0.3s' }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
                aria-label="Next Slide"
            >
                <i className="fas fa-chevron-right text-white" style={{ fontSize: '2rem', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}></i>
            </button>

            {/* Progress Bar */}
            <div className="hero-progress-bar-container">
                <div
                    className="hero-progress-bar"
                    style={{ width: `${progress}%` }}
                ></div>
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
                }
            `}</style>
        </div>
    );
}
