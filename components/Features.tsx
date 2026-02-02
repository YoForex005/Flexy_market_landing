/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from 'react';

export default function Features() {
    const [activeTab, setActiveTab] = useState('trade');

    return (
        <div className="container-fluid features-section p-0">
            <div className="row g-0">
                <section className="every_heading text-center">
                    <div className="my-5 mb-4 px-3">
                        <h2 className="display-4 fw-bold">Features</h2>
                        <p className="lead text-muted">
                            Explore our platform with instant features, advanced tools, and more!
                        </p>
                    </div>

                    <div className="tab-content mb-0 position-relative">
                        <div className={`tab-pane fade ${activeTab === 'trade' ? 'show active' : ''}`}>
                            <img 
                                src="/images/trade-instantly.webp" 
                                alt="Trade Instantly Screenshot" 
                                loading="lazy"
                                className="w-100 features-responsive-img"
                            />
                        </div>
                        <div className={`tab-pane fade ${activeTab === 'tools' ? 'show active' : ''}`}>
                            <img 
                                src="/images/advance-tools.webp" 
                                alt="Use Advanced Tools Screenshot" 
                                loading="lazy"
                                className="w-100 features-responsive-img"
                            />
                        </div>
                        <div className={`tab-pane fade ${activeTab === 'expand' ? 'show active' : ''}`}>
                            <img 
                                src="/images/expand-opportunities.webp" 
                                alt="Expand Your Opportunities Screenshot" 
                                loading="lazy"
                                className="w-100 features-responsive-img"
                            />
                        </div>
                    </div>

                                        <ul className="nav nav-pills justify-content-center gap-3 mt-4 px-3">
                        <li className="nav-item">
                            <button 
                                className={`nav-link feature-nav-btn ${activeTab === 'trade' ? 'active' : ''}`}
                                onClick={() => setActiveTab('trade')}
                            >
                                Trade Instantly
                            </button>
                        </li>
                        <li className="nav-item">
                            <button 
                                className={`nav-link feature-nav-btn ${activeTab === 'tools' ? 'active' : ''}`}
                                onClick={() => setActiveTab('tools')}
                            >
                                Use Advanced Tools
                            </button>
                        </li>
                        <li className="nav-item">
                            <button 
                                className={`nav-link feature-nav-btn ${activeTab === 'expand' ? 'active' : ''}`}
                                onClick={() => setActiveTab('expand')}
                            >
                                Expand Your Opportunities
                            </button>
                        </li>
                    </ul>
                </section>
            </div>

                        <style jsx>{`
                .features-responsive-img {
                    object-fit: cover;
                    width: 100%;
                    height: auto;
                    display: block;
                    opacity: 1 !important;
                    filter: none !important;
                    image-rendering: -webkit-optimize-contrast;
                    image-rendering: crisp-edges;
                    backface-visibility: hidden;
                    transform: translateZ(0);
                    transition: none;
                }

                .tab-pane {
                    opacity: 1 !important;
                }

                .tab-pane.fade {
                    transition: opacity 0.15s linear;
                }

                .tab-pane.fade:not(.show) {
                    opacity: 0;
                }

                .tab-pane.fade.show {
                    opacity: 1 !important;
                }
                .feature-nav-btn {
                    padding: 14px 32px !important;
                    font-size: 16px;
                    font-weight: 600;
                    border-radius: 50px;
                    border: 2px solid #0f664a;
                    background: transparent;
                    color: #0f664a;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 4px 15px rgba(15, 102, 74, 0.1);
                }

                .feature-nav-btn::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                    transition: left 0.5s;
                }

                .feature-nav-btn:hover::before {
                    left: 100%;
                }

                .feature-nav-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(15, 102, 74, 0.25);
                    border-color: #0d5a40;
                }

                .feature-nav-btn.active {
                    background: linear-gradient(135deg, #0f664a 0%, #0d5a40 100%);
                    color: #ffffff;
                    border-color: #0f664a;
                    box-shadow: 0 8px 25px rgba(15, 102, 74, 0.35);
                }

                .feature-nav-btn.active:hover {
                    background: linear-gradient(135deg, #0d5a40 0%, #0b4d35 100%);
                }

                @media (max-width: 767px) {
                    .feature-nav-btn {
                        padding: 12px 24px !important;
                        font-size: 14px;
                    }
                }

                /* Desktop - Portrait orientation */
                @media (min-width: 992px) {
                    .features-responsive-img {
                        aspect-ratio: auto;
                        max-height: none;
                        height: auto;
                        max-width: 1200px;
                        width: 100%;
                        margin: 0 auto;
                    }
                }

                /* Tablet - Slightly wider */
                @media (min-width: 768px) and (max-width: 991px) {
                    .features-responsive-img {
                        aspect-ratio: 16/9;
                        max-height: 400px;
                        max-width: 100%;
                    }
                }

                /* Mobile - Full width, auto height */
                @media (max-width: 767px) {
                    .features-responsive-img {
                        aspect-ratio: 16/9;
                        max-height: 300px;
                        max-width: 100%;
                    }
                }
            `}</style>
        </div>
    );
}