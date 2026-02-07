/* eslint-disable @next/next/no-img-element */
"use client";

import Image from 'next/image';

export default function PlatformCards() {
    return (
        <div className="platform-cards py-5" style={{ background: '#f8fafc', paddingBottom: '120px' }}>
            <div className="container">
                {/* 3 Column Grid */}
                <div className="row g-5">
                    {/* Mobile Card */}
                    <div className="col-lg-4">
                        <div className="platform-card h-100 position-relative rounded-5 p-0 overflow-hidden shadow-lg border-0 bg-white group">
                            {/* Visual Header */}
                            <div className="visual-header position-relative" style={{ height: '280px', overflow: 'hidden', background: '#f1f5f9' }}>
                                <div className="absolute-center" style={{ width: '100%', height: '100%' }}>
                                    <Image
                                        src="/platform-mobile.webp"
                                        alt="Mobile Trading"
                                        className="img-fluid w-100 h-100 object-fit-cover transition-transform"
                                        width={400}
                                        height={280}
                                        style={{ transform: 'scale(1.05)' }}
                                    />
                                </div>
                                <div className="overlay-gradient position-absolute top-0 start-0 w-100 h-100"
                                    style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,1) 100%)' }}></div>
                            </div>

                            {/* Content Body */}
                            <div className="card-body p-4 text-center position-relative z-1" style={{ marginTop: '-40px' }}>
                                <h3 className="fw-bold mb-2 text-dark">Mobile App</h3>
                                <p className="text-muted mb-4 small text-uppercase fw-bold tracking-wider">iOS & Android</p>
                                <p className="text-slate-600 mb-4 px-2" style={{ lineHeight: '1.6' }}>
                                    Trade on the go with our award-winning mobile app. Full charting capabilities in your pocket.
                                </p>

                                <div className="d-flex flex-column gap-2 mt-auto">
                                    <a href="https://apps.apple.com/in/app/flexy-markets/id6752637785"
                                        className="btn btn-dark rounded-pill py-3 fw-bold d-flex align-items-center justify-content-center gap-2 shadow-sm lift-hover">
                                        <i className="fab fa-apple fa-lg"></i> App Store
                                    </a>
                                    <a href="https://play.google.com/store/search?q=flexymarkets&c=apps"
                                        className="btn btn-outline-dark rounded-pill py-3 fw-bold d-flex align-items-center justify-content-center gap-2 lift-hover">
                                        <i className="fab fa-google-play fa-lg"></i> Google Play
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Card - Featured */}
                    <div className="col-lg-4">
                        <div className="platform-card h-100 position-relative rounded-5 p-0 overflow-hidden shadow-2xl border-0 bg-white group featured-card">
                            {/* Visual Header */}
                            <div className="visual-header position-relative" style={{ height: '320px', overflow: 'hidden', background: '#f0fdf4' }}>
                                <div className="absolute-center" style={{ width: '100%', height: '100%' }}>
                                    <Image
                                        src="/platform-desktop.webp"
                                        alt="Desktop Trading"
                                        className="img-fluid w-100 h-100 object-fit-cover transition-transform"
                                        width={400}
                                        height={320}
                                        style={{ transform: 'scale(1.05)' }}
                                    />
                                </div>
                                <div className="overlay-gradient position-absolute top-0 start-0 w-100 h-100"
                                    style={{ background: 'linear-gradient(to bottom, rgba(15, 73, 65, 0) 0%, rgba(255,255,255,0.2) 60%, rgba(255,255,255,1) 100%)' }}></div>
                            </div>

                            {/* Content Body */}
                            <div className="card-body p-4 text-center position-relative z-1" style={{ marginTop: '-50px' }}>
                                <div className="badge bg-emerald-100 text-emerald-800 rounded-pill px-3 py-2 mb-3 fw-bold shadow-sm">
                                    <i className="fas fa-star me-1 text-warning"></i> Professional Choice
                                </div>
                                <h3 className="fw-bold mb-2 text-dark display-6" style={{ fontSize: '1.75rem' }}>MT5 Desktop</h3>
                                <p className="text-muted mb-4 small text-uppercase fw-bold tracking-wider">Windows</p>
                                <p className="text-slate-600 mb-4 px-2" style={{ lineHeight: '1.6' }}>
                                    The ultimate trading powerhouse. Advanced technical analysis, algorithmic trading, and zero latency.
                                </p>

                                <a href="https://download.mql5.com/cdn/web/flexy.markets.limited/mt5/flexymarkets5setup.exe"
                                    className="btn btn-emerald w-100 rounded-pill py-3 fw-bold d-flex align-items-center justify-content-center gap-2 shadow-lg lift-hover-lg">
                                    <i className="fas fa-download fa-lg"></i> Download Now
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* WebTrader Card */}
                    <div className="col-lg-4">
                        <div className="platform-card h-100 position-relative rounded-5 p-0 overflow-hidden shadow-lg border-0 bg-white group">
                            {/* Visual Header */}
                            <div className="visual-header position-relative" style={{ height: '280px', overflow: 'hidden', background: '#f5f3ff' }}>
                                <div className="absolute-center" style={{ width: '100%', height: '100%' }}>
                                    <Image
                                        src="/platform-webtrader.webp"
                                        alt="Web Trading"
                                        className="img-fluid w-100 h-100 object-fit-cover transition-transform"
                                        width={400}
                                        height={280}
                                        style={{ transform: 'scale(1.05)' }}
                                    />
                                </div>
                                <div className="overlay-gradient position-absolute top-0 start-0 w-100 h-100"
                                    style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,1) 100%)' }}></div>
                            </div>

                            {/* Content Body */}
                            <div className="card-body p-4 text-center position-relative z-1" style={{ marginTop: '-40px' }}>
                                <h3 className="fw-bold mb-2 text-dark">WebTrader</h3>
                                <p className="text-muted mb-4 small text-uppercase fw-bold tracking-wider">Browser Based</p>
                                <p className="text-slate-600 mb-4 px-2" style={{ lineHeight: '1.6' }}>
                                    Trade directly from any browser without installation. Instant access to global markets.
                                </p>

                                <a href="https://user.flexymarkets.com/accounts/signIns"
                                    className="btn btn-primary-soft w-100 rounded-pill py-3 fw-bold d-flex align-items-center justify-content-center gap-2 shadow-sm lift-hover"
                                    style={{ background: '#eff6ff', color: '#2563eb' }}>
                                    <i className="fas fa-globe fa-lg"></i> Launch WebTrader
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <style jsx>{`
                .platform-card {
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .hover-scale { transition: transform 0.6s ease; }
                .group:hover .transition-transform { transform: scale(1.1) !important; }
                
                .lift-hover { transition: all 0.3s ease; }
                .lift-hover:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important; }
                
                .lift-hover-lg:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(15, 73, 65, 0.25) !important; }

                .featured-card {
                    transform: scale(1.05); /* Make the middle card slightly larger by default for emphasis */
                    z-index: 10;
                    border: 1px solid rgba(15, 102, 74, 0.1);
                }
                @media (max-width: 991px) {
                    .featured-card { transform: none; }
                }

                .bg-emerald-100 { background-color: #d1fae5; }
                .text-emerald-800 { color: #065f46; }
                .shadow-2xl { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
                
                .btn-emerald {
                    background: #0f4941;
                    color: white;
                    border: none;
                }
                .btn-emerald:hover {
                    background: #0c3e33;
                    color: white;
                }
                .btn-primary-soft:hover {
                    background: #2563eb !important;
                    color: white !important;
                }
            `}</style>
        </div>
    );
}
