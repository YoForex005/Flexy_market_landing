"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
        videoSrc: "/videos/hero-video.mp4",
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
        imageSrc: "/images/girl1.webp",
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
                                    poster="/images/forex.png"
                                    style={{ filter: slide.customFilter }} // Apply custom filter
                                    key={slide.videoSrc}
                                    onLoadedMetadata={(e) => {
                                        // Normal speed
                                        e.currentTarget.playbackRate = 1.0;
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
                                <Image
                                    src={slide.imageSrc || ''}
                                    alt={slide.title}
                                    fill
                                    priority={index === 0} // Prioritize if it's the first slide
                                    className="hero-video" // Reuse class for full coverage
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

                        {/* Join Now Button */}
                        <div className="mt-4">
                            <Link href="https://user.flexymarkets.com/accounts/signUps" style={{ textDecoration: 'none' }}>
                                <button className="btn btn-primary fw-bold" style={{
                                    padding: "12px 36px",
                                    fontSize: "16px",
                                    borderRadius: "4px", // More rectangular like "Join Now"
                                    background: "#0052ff", // Brighter blue like the reference
                                    border: "none",
                                    boxShadow: "0 4px 15px rgba(0, 82, 255, 0.4)"
                                }}>
                                    Join Now
                                </button>
                            </Link>
                        </div>

                        {/* Integrated Marquee Ticker - Only show on first slide or always? Keeping it inside content for now */}
                        <div className="mt-5 w-100">
                            <Ticker />
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows - Bottom Right */}
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
