"use client";

import { useEffect, useRef, useState, useCallback, type CSSProperties, type ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';




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
        videoSrc: "/videos/hero-video-optimized.mp4",
        customFilter: "none",
        badgeText: "Explore Global Markets",
        title: "Forex & CFD Trading",
        subtitle: "with Flexy Markets",
        description: "Explore forex, cryptocurrency, index and commodity CFDs with Flexy Markets. Compare trading accounts, explore RTX 5 and review trading conditions.",
        ctaText: "Open a Trading Account"
    },
    {
        id: 2,
        type: 'image',
        imageSrc: "/images/girl1.webp",
        customFilter: "none",
        badgeText: "RTX 5 Trading Platform",
        title: "Explore Trading Tools",
        subtitle: "with RTX 5",
        description: "Discover the RTX 5 platform, explore our market analysis tools and contact the Flexy Markets team for help with your account.",
        ctaText: "Open a Trading Account"
    }
];

const SLIDE_DURATION = 15000;

type HeroHeadingProps = {
    as: 'h1' | 'h2';
    className: string;
    style: CSSProperties;
    children: ReactNode;
};

function HeroHeading({ as: Tag, ...props }: HeroHeadingProps) {
    return <Tag {...props} />;
}

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [hasTransitioned, setHasTransitioned] = useState(false);
    const [hasVideoFrame, setHasVideoFrame] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);



    // Keep the poster and text available immediately; load decorative video only
    // after a paint and an idle opportunity on suitable desktop connections.
    useEffect(() => {
        const video = videoRef.current;
        const videoSource = slides[0].videoSrc;
        if (!video || !videoSource) return;

        const media = window.matchMedia('(min-width: 769px) and (prefers-reduced-motion: no-preference)');
        const connection = (navigator as Navigator & {
            connection?: EventTarget & { effectiveType?: string; saveData?: boolean };
        }).connection;
        let animationFrame = 0;
        let idleCallback: number | undefined;
        let fallbackTimer: number | undefined;
        let inViewport = true;

        const canLoadVideo = () => media.matches && !connection?.saveData &&
            connection?.effectiveType !== '2g' && connection?.effectiveType !== 'slow-2g';

        const cancelPendingLoad = () => {
            window.cancelAnimationFrame(animationFrame);
            if (idleCallback !== undefined) window.cancelIdleCallback(idleCallback);
            if (fallbackTimer !== undefined) window.clearTimeout(fallbackTimer);
        };

        const updatePlayback = () => {
            if (!canLoadVideo()) {
                video.pause();
                if (video.hasAttribute('src')) {
                    video.removeAttribute('src');
                    video.load();
                }
                return;
            }

            if (currentSlide !== 0 || document.hidden || !inViewport) {
                video.pause();
                return;
            }

            if (!video.hasAttribute('src')) video.src = videoSource;
            void video.play().catch(() => {
                // The poster remains visible when browser autoplay is unavailable.
            });
        };

        const schedulePlayback = () => {
            cancelPendingLoad();
            if (progressRef.current) {
                progressRef.current.style.animationPlayState = document.hidden || !inViewport ? 'paused' : 'running';
            }
            if (!canLoadVideo() || currentSlide !== 0 || document.hidden || !inViewport) {
                updatePlayback();
                return;
            }

            animationFrame = window.requestAnimationFrame(() => {
                animationFrame = window.requestAnimationFrame(() => {
                    if (typeof window.requestIdleCallback === 'function') {
                        idleCallback = window.requestIdleCallback(updatePlayback, { timeout: 1500 });
                    } else {
                        fallbackTimer = window.setTimeout(updatePlayback, 1000);
                    }
                });
            });
        };

        const observer = new IntersectionObserver(([entry]) => {
            inViewport = entry.isIntersecting;
            schedulePlayback();
        });
        if (heroRef.current) observer.observe(heroRef.current);
        schedulePlayback();
        media.addEventListener('change', schedulePlayback);
        connection?.addEventListener('change', schedulePlayback);
        document.addEventListener('visibilitychange', schedulePlayback);

        return () => {
            cancelPendingLoad();
            observer.disconnect();
            video.pause();
            media.removeEventListener('change', schedulePlayback);
            connection?.removeEventListener('change', schedulePlayback);
            document.removeEventListener('visibilitychange', schedulePlayback);
        };
    }, [currentSlide]);

    const nextSlide = useCallback(() => {
        if (!hasTransitioned) setHasTransitioned(true);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, [hasTransitioned]);

    const prevSlide = useCallback(() => {
        if (!hasTransitioned) setHasTransitioned(true);
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }, [hasTransitioned]);

    return (
        <div ref={heroRef} className={`${styles.hero} index-banner position-relative group`}>
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`${styles.slide} hero-slide ${index === currentSlide ? 'active' : ''} ${!hasTransitioned && index === 0 ? 'instant' : ''}`}
                    data-active={index === currentSlide}
                    aria-hidden={index !== currentSlide}
                    style={{ visibility: index === currentSlide ? 'visible' : 'hidden' }}
                >
                    {/* Background Media */}
                    <div className="hero-video-container">
                        {slide.type === 'video' ? (
                            <>
                                <Image
                                    src="/images/hero-video-poster.webp"
                                    alt=""
                                    fill
                                    sizes="100vw"
                                    priority
                                    className={`${styles.media} hero-video`}
                                    style={{ objectFit: 'cover', opacity: hasVideoFrame ? 0 : 1 }}
                                />
                                <video
                                    ref={videoRef}
                                    className={`${styles.media} hero-video`}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    aria-hidden="true"
                                    preload="none"
                                    onPlaying={() => setHasVideoFrame(true)}
                                    onEmptied={() => setHasVideoFrame(false)}
                                    onError={() => setHasVideoFrame(false)}
                                    style={{
                                        filter: slide.customFilter,
                                        opacity: hasVideoFrame ? 1 : 0,
                                    }}
                                />
                                <div className="hero-overlay"></div>
                            </>
                        ) : (
                            <>
                                <Image
                                    src={slide.imageSrc || ''} // Fallback for video on mobile
                                    alt=""
                                    fill
                                    className={`${styles.media} hero-video`}
                                    sizes="100vw"
                                    style={{
                                        objectFit: 'cover',
                                        filter: slide.customFilter
                                    }}
                                    priority={index === 0}
                                />
                                <div className="hero-overlay"></div>
                            </>
                        )}
                    </div>

                    <div
                        className={`${styles.content} index-banner-content text-center hero-slide-content`}
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
                        <HeroHeading
                            as={index === 0 ? 'h1' : 'h2'}
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
                        </HeroHeading>
                        <p
                            className={`${styles.description} mx-auto mb-4 hero-description`}
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
                            <Link
                                href="https://user.flexymarkets.com/accounts/signUps"
                                className="btn btn-primary fw-bold"
                                style={{
                                    textDecoration: 'none',
                                    padding: "12px 36px",
                                    fontSize: "16px",
                                    borderRadius: "4px",
                                    background: "#0052ff",
                                    border: "none",
                                    boxShadow: "0 4px 15px rgba(0, 82, 255, 0.4)",
                                    display: "inline-block"
                                }}
                            >
                                {slide.ctaText}
                            </Link>
                        </div>

                        {/* Ticker removed from here to prevent multiple instances */}
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <div className={`${styles.navigation} hero-nav-container d-none d-md-flex`}>
                <button
                    onClick={prevSlide}
                    className={`${styles.navigationButton} hero-nav-btn me-3`}
                    aria-label="Previous Slide"
                >
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button
                    onClick={nextSlide}
                    className={`${styles.navigationButton} hero-nav-btn`}
                    aria-label="Next Slide"
                >
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>

            {/* CSS-animated Progress Bar - eliminates 10 re-renders/sec from setInterval */}
            <div className="hero-progress-bar-container">
                <div
                    key={currentSlide}
                    ref={progressRef}
                    className={`${styles.progress} hero-progress-bar`}
                    style={{ animationDuration: `${SLIDE_DURATION}ms` }}
                    onAnimationEnd={nextSlide}
                />
            </div>

        </div>
    );
}
