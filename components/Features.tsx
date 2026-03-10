"use client";

import { useState } from 'react';
import Image from 'next/image';
import tradeInstantlyImg from '../public/rtxmockups/rtx1.png';
import advanceToolsImg from '../public/rtxmockups/rtx 2.png';
import expandOkImg from '../public/rtxmockups/rtx 3.png';

export default function Features() {
    const [activeTab, setActiveTab] = useState('trade');

    return (
        <div className="container-fluid features-section p-0">
            <div className="row g-0">
                <section className="every_heading text-center">
                    <div className="my-5 mb-4 px-3">
                        <h2 className="display-4 fw-bold">Advanced Trading Features</h2>
                        <p className="lead text-muted">
                            Explore our platform with instant features, advanced tools, and more!
                        </p>
                    </div>

                    <div className="tab-content mb-0 position-relative">
                        <div className={`tab-pane fade ${activeTab === 'trade' ? 'show active' : ''}`}>
                            <Image
                                src={tradeInstantlyImg}
                                alt="Trade Instantly Screenshot"
                                placeholder="blur"
                                className="features-responsive-img"
                                style={{ width: '95%', height: 'auto', maxWidth: '95%', margin: '0 auto', display: 'block' }}
                            />
                        </div>
                        <div className={`tab-pane fade ${activeTab === 'tools' ? 'show active' : ''}`}>
                            <Image
                                src={advanceToolsImg}
                                alt="Use Advanced Tools Screenshot"
                                placeholder="blur"
                                className="features-responsive-img"
                                style={{ width: '95%', height: 'auto', maxWidth: '95%', margin: '0 auto', display: 'block' }}
                            />
                        </div>
                        <div className={`tab-pane fade ${activeTab === 'expand' ? 'show active' : ''}`}>
                            <Image
                                src={expandOkImg}
                                alt="Expand Your Opportunities Screenshot"
                                placeholder="blur"
                                className="features-responsive-img"
                                style={{ width: '95%', height: 'auto', maxWidth: '95%', margin: '0 auto', display: 'block' }}
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
                    margin: 0 auto;
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

                /* Large screens */
                @media (min-width: 992px) {
                    .features-responsive-img {
                        width: 70vw !important;
                        max-width: 70vw;
                        height: auto;
                        object-fit: contain;
                    }
                }

                /* Tablet */
                @media (min-width: 768px) and (max-width: 991px) {
                    .features-responsive-img {
                        max-height: 400px;
                        max-width: 100%;
                        width: 100%;
                        height: auto;
                        object-fit: contain;
                    }
                }

                /* Mobile */
                @media (max-width: 767px) {
                    .tab-content {
                        width: 100%;
                    }
                    .tab-pane.active {
                        display: block;
                        width: 100%;
                    }
                    .features-responsive-img {
                        width: 100% !important;
                        max-width: 100% !important;
                        height: auto !important;
                        object-fit: contain;
                        display: block;
                        margin: 0 auto;
                    }

                    .nav.nav-pills {
                        flex-direction: column !important;
                        align-items: center !important;
                        gap: 12px !important;
                    }

                    .nav-item {
                        width: 100%;
                        max-width: 320px;
                    }

                    .feature-nav-btn {
                        width: 100%;
                        padding: 12px 16px !important;
                        font-size: 14px;
                        white-space: normal;
                    }
                }
            `}</style>
        </div>
    );
}