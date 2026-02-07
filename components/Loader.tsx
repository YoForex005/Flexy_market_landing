"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Loader() {
    const [isLoading, setIsLoading] = useState(true);
    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        const timer = setTimeout(() => setIsLoading(false), 1800);
        const removeTimer = setTimeout(() => setShouldRender(false), 2400);

        return () => {
            clearTimeout(timer);
            clearTimeout(removeTimer);
            document.body.style.overflow = 'unset';
        };
    }, [isLoading]);

    if (!shouldRender) return null;

    return (
        <div
            className="premium-loader"
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                opacity: isLoading ? 1 : 0,
                transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                pointerEvents: isLoading ? 'all' : 'none',
            }}
        >
            {/* Background layers */}
            <div className="loader-bg" />
            <div className="loader-grid" />
            <div className="loader-glow loader-glow-1" />
            <div className="loader-glow loader-glow-2" />

            {/* Center content */}
            <div className="loader-center">

                {/* Orbital ring system */}
                <div className="orbit-wrapper">
                    <svg className="orbit-svg" viewBox="0 0 200 200">
                        <defs>
                            <linearGradient id="loaderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#2ecc71" stopOpacity="1" />
                                <stop offset="50%" stopColor="#d4af37" stopOpacity="1" />
                                <stop offset="100%" stopColor="#2ecc71" stopOpacity="0.3" />
                            </linearGradient>
                        </defs>
                        {/* Outer subtle ring */}
                        <circle cx="100" cy="100" r="95" fill="none" stroke="rgba(46,204,113,0.04)" strokeWidth="1" />
                        {/* Middle track ring */}
                        <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(46,204,113,0.06)" strokeWidth="1" />
                        {/* Animated arc */}
                        <circle
                            className="orbit-arc"
                            cx="100" cy="100" r="80"
                            fill="none"
                            stroke="url(#loaderGrad)"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeDasharray="502.65"
                            strokeDashoffset="380"
                        />
                        {/* Orbiting dot */}
                        <circle className="orbit-dot" cx="100" cy="20" r="3" fill="#2ecc71">
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                from="0 100 100"
                                to="360 100 100"
                                dur="2s"
                                repeatCount="indefinite"
                            />
                        </circle>
                        {/* Second orbiting dot (gold, opposite) */}
                        <circle className="orbit-dot-gold" cx="100" cy="180" r="2" fill="#d4af37" opacity="0.6">
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                from="0 100 100"
                                to="360 100 100"
                                dur="3s"
                                repeatCount="indefinite"
                            />
                        </circle>
                    </svg>

                    {/* Logo in center */}
                    <div className="logo-container">
                        <Image
                            src="/hd_logo.webp"
                            alt="Flexy Markets"
                            width={52}
                            height={52}
                            priority
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                </div>

                {/* Brand name */}
                <div className="brand-row">
                    <span className="brand-flexy">FLEXY</span>
                    <span className="brand-dot" />
                    <span className="brand-markets">MARKETS</span>
                </div>

                {/* Tagline */}
                <p className="brand-tagline">Your Gateway to Global Markets</p>

                {/* Animated progress line */}
                <div className="progress-track">
                    <div className="progress-glow" />
                </div>
            </div>

            <style jsx>{`
                /* ===== Background ===== */
                .loader-bg {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(150deg, #061a15 0%, #0a3028 35%, #0f4941 65%, #082a22 100%);
                    z-index: 0;
                }

                /* Trading grid pattern */
                .loader-grid {
                    position: absolute;
                    inset: 0;
                    background-image:
                        linear-gradient(rgba(46,204,113,0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(46,204,113,0.03) 1px, transparent 1px);
                    background-size: 50px 50px;
                    z-index: 1;
                    mask-image: radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 70%);
                    -webkit-mask-image: radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 70%);
                }

                /* Ambient glows */
                .loader-glow {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(80px);
                    pointer-events: none;
                    z-index: 1;
                }
                .loader-glow-1 {
                    width: 500px;
                    height: 500px;
                    background: radial-gradient(circle, rgba(46,204,113,0.12) 0%, transparent 70%);
                    top: -20%;
                    left: -10%;
                    animation: ambientFloat 8s ease-in-out infinite;
                }
                .loader-glow-2 {
                    width: 400px;
                    height: 400px;
                    background: radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%);
                    bottom: -15%;
                    right: -10%;
                    animation: ambientFloat 10s ease-in-out infinite reverse;
                }

                @keyframes ambientFloat {
                    0%, 100% { opacity: 0.5; transform: scale(1) translate(0, 0); }
                    50% { opacity: 1; transform: scale(1.1) translate(10px, -10px); }
                }

                /* ===== Center content ===== */
                .loader-center {
                    position: relative;
                    z-index: 10;
                    text-align: center;
                    animation: contentFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }

                @keyframes contentFadeIn {
                    from { opacity: 0; transform: translateY(20px) scale(0.96); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }

                /* ===== Orbital ring ===== */
                .orbit-wrapper {
                    position: relative;
                    width: 160px;
                    height: 160px;
                    margin: 0 auto 30px;
                }

                .orbit-svg {
                    width: 100%;
                    height: 100%;
                    animation: orbitRotate 3s linear infinite;
                    filter: drop-shadow(0 0 20px rgba(46,204,113,0.15));
                }

                .orbit-arc {
                    animation: arcMorph 2.4s ease-in-out infinite;
                }

                @keyframes orbitRotate {
                    to { transform: rotate(360deg); }
                }

                @keyframes arcMorph {
                    0% { stroke-dashoffset: 502.65; }
                    50% { stroke-dashoffset: 150; }
                    100% { stroke-dashoffset: 502.65; }
                }

                .orbit-dot {
                    filter: drop-shadow(0 0 6px rgba(46,204,113,0.8));
                }
                .orbit-dot-gold {
                    filter: drop-shadow(0 0 4px rgba(212,175,55,0.6));
                }

                /* Logo center */
                .logo-container {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    animation: logoBreathe 2.5s ease-in-out infinite;
                }

                @keyframes logoBreathe {
                    0%, 100% { transform: translate(-50%, -50%) scale(1); filter: drop-shadow(0 0 0 transparent); }
                    50% { transform: translate(-50%, -50%) scale(1.06); filter: drop-shadow(0 0 20px rgba(46,204,113,0.3)); }
                }

                /* ===== Brand text ===== */
                .brand-row {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    margin-bottom: 10px;
                }

                .brand-flexy {
                    font-size: 26px;
                    font-weight: 700;
                    letter-spacing: 8px;
                    color: #ffffff;
                    opacity: 0;
                    animation: textReveal 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
                }

                .brand-dot {
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    background: #2ecc71;
                    opacity: 0;
                    animation: dotPop 0.4s ease 0.6s forwards;
                    box-shadow: 0 0 10px rgba(46,204,113,0.6);
                }

                .brand-markets {
                    font-size: 26px;
                    font-weight: 600;
                    letter-spacing: 8px;
                    background: linear-gradient(135deg, #2ecc71 0%, #a8e6cf 40%, #d4af37 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    opacity: 0;
                    animation: textReveal 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards;
                }

                @keyframes textReveal {
                    from { opacity: 0; transform: translateY(15px); filter: blur(8px); }
                    to { opacity: 1; transform: translateY(0); filter: blur(0); }
                }

                @keyframes dotPop {
                    from { opacity: 0; transform: scale(0); }
                    to { opacity: 1; transform: scale(1); }
                }

                /* Tagline */
                .brand-tagline {
                    font-size: 12px;
                    font-weight: 500;
                    letter-spacing: 4px;
                    text-transform: uppercase;
                    color: rgba(255,255,255,0.3);
                    margin: 0 0 28px;
                    opacity: 0;
                    animation: textReveal 0.6s ease 0.8s forwards;
                }

                /* ===== Progress line ===== */
                .progress-track {
                    width: 180px;
                    height: 2px;
                    background: rgba(255,255,255,0.06);
                    border-radius: 2px;
                    margin: 0 auto;
                    overflow: hidden;
                    opacity: 0;
                    animation: textReveal 0.5s ease 0.7s forwards;
                }

                .progress-glow {
                    width: 50%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, #2ecc71, #d4af37, transparent);
                    border-radius: 2px;
                    animation: progressSweep 1.5s ease-in-out infinite;
                }

                @keyframes progressSweep {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(300%); }
                }

                /* ===== Mobile adjustments ===== */
                @media (max-width: 480px) {
                    .orbit-wrapper {
                        width: 130px;
                        height: 130px;
                        margin-bottom: 24px;
                    }
                    .brand-flexy, .brand-markets {
                        font-size: 20px;
                        letter-spacing: 5px;
                    }
                    .brand-tagline {
                        font-size: 10px;
                        letter-spacing: 3px;
                    }
                    .progress-track {
                        width: 140px;
                    }
                }
            `}</style>
        </div>
    );
}
