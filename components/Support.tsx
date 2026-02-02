/* eslint-disable @next/next/no-img-element */
"use client";

import Link from 'next/link';

export default function Support() {
    return (
        <section className="support-section position-relative overflow-hidden">
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
                        <h2 className="display-4 fw-bold mb-3">
                            Rely on Award-Winning Support
                        </h2>
                        <p className="lead text-muted mb-4">
                            Whenever you need us we're just a few seconds away, 24/7, in extensive language options.
                        </p>
                        <Link
                            href="https://flexymarkets.com/contact"
                            className="btn btn-support"
                        >
                            Contact Us
                        </Link>
                    </div>
                    <div className="col-lg-6 text-center">
                        <div className="support-icon-wrapper">
                            <svg width="350" height="350" viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg" className="support-icon">
                                {/* Background circle */}
                                <circle cx="175" cy="175" r="140" fill="#f0f5f3" opacity="0.5" />

                                {/* Award badge */}
                                <g className="award-badge">
                                    <circle cx="175" cy="160" r="80" fill="url(#gradient1)" />
                                    <circle cx="175" cy="160" r="65" fill="white" />
                                    <circle cx="175" cy="160" r="50" fill="url(#gradient2)" />

                                    {/* Star */}
                                    <path d="M175 130 L182 147 L200 147 L186 158 L192 175 L175 165 L158 175 L164 158 L150 147 L168 147 Z" fill="white" />

                                    {/* Ribbon */}
                                    <path d="M155 200 L155 250 L175 235 L195 250 L195 200" fill="url(#gradient3)" />
                                </g>

                                {/* Headset */}
                                <g className="headset">
                                    <path d="M120 140 Q120 100 175 100 Q230 100 230 140" stroke="#0f664a" strokeWidth="8" fill="none" strokeLinecap="round" />
                                    <rect x="110" y="135" width="20" height="30" rx="5" fill="#0f664a" />
                                    <rect x="220" y="135" width="20" height="30" rx="5" fill="#0f664a" />
                                    <circle cx="175" cy="105" r="8" fill="#0f664a" />
                                </g>

                                {/* Gradients */}
                                <defs>
                                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#0f664a" />
                                        <stop offset="100%" stopColor="#0d5a40" />
                                    </linearGradient>
                                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#0f664a" />
                                        <stop offset="100%" stopColor="#0b4d35" />
                                    </linearGradient>
                                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#0f664a" />
                                        <stop offset="100%" stopColor="#0d5a40" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .support-section {
                    background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
                    padding: 80px 0;
                    position: relative;
                }

                .support-section::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, #e0e0e0, transparent);
                }

                .support-section h2 {
                    color: #1a1a1a;
                    font-weight: 700;
                    line-height: 1.2;
                }

                .support-section .lead {
                    font-size: 1.1rem;
                    color: #666;
                    max-width: 500px;
                }

                .btn-support {
                    display: inline-block;
                    padding: 16px 40px;
                    font-size: 16px;
                    font-weight: 700;
                    border-radius: 50px;
                    background: #0f4941;
                    color: white !important;
                    text-decoration: none;
                    border: none;
                    box-shadow: 0 10px 20px rgba(15, 73, 65, 0.2);
                    transition: all 0.4s ease;
                    position: relative;
                    overflow: hidden;
                    z-index: 1;
                }

                .btn-support::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                        90deg, 
                        transparent, 
                        rgba(255, 255, 255, 0.2), 
                        transparent
                    );
                    transition: none;
                }

                .btn-support:hover::after {
                    left: 100%;
                    transition: 0.6s ease;
                }

                .btn-support:hover {
                    transform: translateY(-3px) scale(1.02);
                    box-shadow: 0 20px 30px rgba(15, 73, 65, 0.4);
                    background: #0d3d36;
                    color: white !important;
                }

                .support-icon-wrapper {
                    position: relative;
                    display: inline-block;
                }

                .support-icon {
                    filter: drop-shadow(0 10px 30px rgba(0,0,0,0.1));
                    animation: float 3s ease-in-out infinite;
                }

                .award-badge {
                    animation: rotate 20s linear infinite;
                    transform-origin: 175px 160px;
                }

                .headset {
                    animation: pulse 2s ease-in-out infinite;
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }

                @keyframes rotate {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }

                @keyframes pulse {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.8;
                    }
                }

                @media (max-width: 991px) {
                    .support-section {
                        padding: 60px 0;
                    }

                    .support-section h2 {
                        font-size: 2rem;
                    }

                    .support-icon {
                        max-width: 250px;
                        height: auto;
                    }

                    .support-section .lead {
                        margin-left: auto;
                        margin-right: auto;
                    }
                }
            `}</style>
        </section>
    );
}
