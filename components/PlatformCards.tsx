/* eslint-disable @next/next/no-img-element */
"use client";

export default function PlatformCards() {
    return (
        <div className="platform-cards py-5" style={{ background: '#fff' }}>
            <div className="container">
                {/* 2x2 Grid */}
                <div className="row g-4">
                    {/* Mobile Card */}
                    <div className="col-lg-6">
                        <div className="platform-card text-center p-4 rounded-4 h-100"
                            style={{
                                background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                                border: '2px solid #bae6fd',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                            {/* Icon Sticker */}
                            <div className="mb-4 pt-3">
                                <div className="icon-wrapper d-inline-flex align-items-center justify-content-center"
                                    style={{
                                        width: '120px',
                                        height: '120px',
                                        background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                                        borderRadius: '30px',
                                        boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)',
                                        transform: 'rotate(-5deg)'
                                    }}>
                                    <i className="fas fa-mobile-alt" style={{ fontSize: '56px', color: '#fff' }}></i>
                                </div>
                            </div>
                            <h5 className="fw-bold mb-3" style={{ fontSize: '19px', color: '#1e293b' }}>
                                Mobile & Tablet
                            </h5>
                            <p className="text-muted mb-4" style={{ fontSize: '14px' }}>
                                Trade on the go
                            </p>
                            <div className="d-grid gap-2">
                                <a
                                    href="https://apps.apple.com/in/app/flexy-markets/id6752637785"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-dark py-2 d-flex align-items-center justify-content-center gap-2"
                                    style={{
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        borderRadius: '10px',
                                        background: '#1f2937',
                                        border: 'none'
                                    }}>
                                    <i className="fab fa-apple" style={{ fontSize: '18px' }}></i>
                                    App Store
                                </a>
                                <a
                                    href="https://play.google.com/store/search?q=flexymarkets&c=apps"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn py-2 d-flex align-items-center justify-content-center gap-2"
                                    style={{
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        borderRadius: '10px',
                                        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                                        color: '#fff',
                                        border: 'none'
                                    }}>
                                    <i className="fab fa-google-play" style={{ fontSize: '16px' }}></i>
                                    Google Play
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* PC Card */}
                    <div className="col-lg-6">
                        <div className="platform-card text-center p-4 rounded-4 h-100"
                            style={{
                                background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
                                border: '2px solid #bbf7d0',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                            {/* Icon Sticker */}
                            <div className="mb-4 pt-3">
                                <div className="icon-wrapper d-inline-flex align-items-center justify-content-center"
                                    style={{
                                        width: '120px',
                                        height: '120px',
                                        background: 'linear-gradient(135deg, #0f664a 0%, #0d5a40 100%)',
                                        borderRadius: '30px',
                                        boxShadow: '0 20px 40px rgba(15, 102, 74, 0.3)',
                                        transform: 'rotate(5deg)'
                                    }}>
                                    <i className="fas fa-desktop" style={{ fontSize: '52px', color: '#fff' }}></i>
                                </div>
                            </div>
                            <h5 className="fw-bold mb-3" style={{ fontSize: '19px', color: '#1e293b' }}>
                                Desktop (Windows)
                            </h5>
                            <p className="text-muted mb-4" style={{ fontSize: '14px' }}>
                                Full-featured platform
                            </p>
                            <a
                                href="https://download.mql5.com/cdn/web/flexy.markets.limited/mt5/flexymarkets5setup.exe"
                                className="btn w-100 py-2 fw-bold"
                                style={{
                                    background: 'linear-gradient(135deg, #0f664a 0%, #0d5a40 100%)',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '10px',
                                    fontSize: '14px'
                                }}>
                                <i className="fas fa-download me-2"></i>
                                Download for Windows
                            </a>
                        </div>
                    </div>

                    {/* WebTrader */}
                    <div className="col-lg-6">
                        <div className="platform-card text-center p-4 rounded-4 h-100"
                            style={{
                                background: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)',
                                border: '2px solid #ddd6fe',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                            {/* Icon Sticker */}
                            <div className="mb-4 pt-3">
                                <div className="icon-wrapper d-inline-flex align-items-center justify-content-center"
                                    style={{
                                        width: '120px',
                                        height: '120px',
                                        background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                                        borderRadius: '30px',
                                        boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)',
                                        transform: 'rotate(-3deg)'
                                    }}>
                                    <i className="fas fa-globe" style={{ fontSize: '52px', color: '#fff' }}></i>
                                </div>
                            </div>
                            <h5 className="fw-bold mb-3" style={{ fontSize: '19px', color: '#1e293b' }}>
                                MT5 WebTrader
                            </h5>
                            <p className="text-muted mb-4" style={{ fontSize: '14px' }}>
                                No download required
                            </p>
                            <a
                                href="https://user.flexymarkets.com/accounts/signIn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn w-100 py-2 fw-bold"
                                style={{
                                    background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '10px',
                                    fontSize: '14px'
                                }}>
                                Access Now <i className="fas fa-arrow-right ms-2"></i>
                            </a>
                        </div>
                    </div>

                    {/* Multiterminal */}
                    <div className="col-lg-6">
                        <div className="platform-card text-center p-4 rounded-4 h-100"
                            style={{
                                background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
                                border: '2px solid #fcd34d',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                            {/* Icon Sticker */}
                            <div className="mb-4 pt-3">
                                <div className="icon-wrapper d-inline-flex align-items-center justify-content-center"
                                    style={{
                                        width: '120px',
                                        height: '120px',
                                        background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                                        borderRadius: '30px',
                                        boxShadow: '0 20px 40px rgba(245, 158, 11, 0.3)',
                                        transform: 'rotate(4deg)'
                                    }}>
                                    <i className="fas fa-layer-group" style={{ fontSize: '52px', color: '#fff' }}></i>
                                </div>
                            </div>
                            <h5 className="fw-bold mb-3" style={{ fontSize: '19px', color: '#1e293b' }}>
                                MT5 Multiterminal
                            </h5>
                            <p className="text-muted mb-4" style={{ fontSize: '14px' }}>
                                Manage multiple accounts
                            </p>
                            <a
                                href="https://download.mql5.com/cdn/web/flexy.markets.limited/mt5/flexymarkets5setup.exe"
                                className="btn w-100 py-2 fw-bold"
                                style={{
                                    background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '10px',
                                    fontSize: '14px'
                                }}>
                                <i className="fas fa-download me-2"></i>
                                Download
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animations */}
            <style jsx>{`
                .platform-card {
                    transition: all 0.3s ease;
                    min-height: 340px;
                }
                
                .platform-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
                }
                
                .platform-card:hover .icon-wrapper {
                    transform: rotate(0deg) scale(1.1);
                }
                
                .icon-wrapper {
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                
                .btn:hover {
                    transform: scale(1.05);
                }
            `}</style>
        </div>
    );
}
