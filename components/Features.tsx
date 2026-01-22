/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from 'react';

export default function Features() {
    const [activeTab, setActiveTab] = useState('trade');

    return (
        <div className="container features-section my-5 py-5">
            <div className="row">
                <section className="every_heading text-center">
                    <div className="my-5 mb-4">
                        <h2 className="display-4 fw-bold">Features</h2>
                        <p className="lead text-muted">
                            Explore our platform with instant features, advanced tools, and more!
                        </p>
                    </div>

                    <div className="tab-content mb-4">
                        <div className={`tab-pane fade ${activeTab === 'trade' ? 'show active' : ''}`}>
                            <img
                                src="/images/trade-instantly.webp"
                                alt="Trade Instantly Screenshot"
                                loading="lazy"
                                className="img-fluid rounded-4 shadow-lg"
                            />
                        </div>
                        <div className={`tab-pane fade ${activeTab === 'tools' ? 'show active' : ''}`}>
                            <img
                                src="/images/advance-tools.webp"
                                alt="Use Advanced Tools Screenshot"
                                loading="lazy"
                                className="img-fluid rounded-4 shadow-lg"
                            />
                        </div>
                        <div className={`tab-pane fade ${activeTab === 'expand' ? 'show active' : ''}`}>
                            <img
                                src="/images/expand-opportunities.webp"
                                alt="Expand Your Opportunities Screenshot"
                                loading="lazy"
                                className="img-fluid rounded-4 shadow-lg"
                            />
                        </div>
                    </div>

                    <ul className="nav nav-pills justify-content-evenly mt-4">
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === 'trade' ? 'active' : ''}`}
                                onClick={() => setActiveTab('trade')}
                                style={{
                                    background: activeTab === 'trade' ? '#0f664a' : 'transparent',
                                    color: activeTab === 'trade' ? '#fff' : '#000',
                                    border: 'none'
                                }}
                            >
                                Trade Instantly
                            </button>
                        </li>
                        <li className="nav-item mx-2">
                            <button
                                className={`nav-link ${activeTab === 'tools' ? 'active' : ''}`}
                                onClick={() => setActiveTab('tools')}
                                style={{
                                    background: activeTab === 'tools' ? '#0f664a' : 'transparent',
                                    color: activeTab === 'tools' ? '#fff' : '#000',
                                    border: 'none'
                                }}
                            >
                                Use Advanced Tools
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === 'expand' ? 'active' : ''}`}
                                onClick={() => setActiveTab('expand')}
                                style={{
                                    background: activeTab === 'expand' ? '#0f664a' : 'transparent',
                                    color: activeTab === 'expand' ? '#fff' : '#000',
                                    border: 'none'
                                }}
                            >
                                Expand Your Opportunities
                            </button>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
