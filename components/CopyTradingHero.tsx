/* eslint-disable @next/next/no-img-element */
"use client";

export default function CopyTradingHero() {
    return (
        <section className="copy-trading-hero position-relative"
            style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fffe 100%)',
                paddingTop: '120px',
                paddingBottom: '100px',
                minHeight: '650px',
                overflow: 'hidden'
            }}>
            {/* Background Pattern */}
            <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '50%',
                height: '100%',
                background: 'radial-gradient(circle at top right, rgba(15, 102, 74, 0.03) 0%, transparent 70%)',
                pointerEvents: 'none'
            }}></div>

            <div className="container position-relative">
                <div className="row align-items-center g-5">
                    {/* Left Content */}
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        {/* Trust Badges */}
                        <div className="d-flex gap-3 mb-4 flex-wrap">
                            <div className="badge-item d-flex align-items-center gap-2 px-3 py-2 rounded-pill"
                                style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                                <i className="fas fa-shield-alt" style={{ color: '#0f664a', fontSize: '14px' }}></i>
                                <span style={{ fontSize: '13px', fontWeight: 600, color: '#0f664a' }}>Regulated Broker</span>
                            </div>
                            <div className="badge-item d-flex align-items-center gap-2 px-3 py-2 rounded-pill"
                                style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                                <i className="fas fa-users" style={{ color: '#0f664a', fontSize: '14px' }}></i>
                                <span style={{ fontSize: '13px', fontWeight: 600, color: '#0f664a' }}>5,000+ Active Traders</span>
                            </div>
                        </div>

                        <h1 className="fw-bold mb-4" style={{
                            color: '#1a1a1a',
                            fontSize: '3.5rem',
                            lineHeight: '1.15',
                            maxWidth: '520px',
                            letterSpacing: '-0.02em',
                            marginBottom: '100px'
                        }}>
                            Trade Like an Expert
                        </h1>
                        <p className="mb-5" style={{
                            color: '#4a5568',
                            fontSize: '1.05rem',
                            lineHeight: '1.8',
                            maxWidth: '500px'
                        }}>
                            No time? No experience? No problem. Take the copy trading shortcut and copy
                            the trades of a Strategy Manager. It's free and so easy to use.
                        </p>

                        {/* CTA Buttons */}
                        <div className="d-flex gap-3 flex-wrap">
                            <a
                                href="https://user.flexymarkets.com/accounts/signIn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary px-5 py-3 fw-bold"
                                style={{
                                    fontSize: '15px',
                                    borderRadius: '8px',
                                    background: 'linear-gradient(135deg, #0f664a 0%, #0d5a40 100%)',
                                    border: 'none',
                                    boxShadow: '0 4px 12px rgba(15, 102, 74, 0.3)',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(15, 102, 74, 0.4)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(15, 102, 74, 0.3)';
                                }}
                            >
                                Start Copy Trading
                            </a>
                            <a
                                href="#how-it-works"
                                className="btn btn-outline-dark px-5 py-3 fw-bold"
                                style={{
                                    fontSize: '15px',
                                    borderRadius: '8px',
                                    borderColor: '#1a1a1a',
                                    color: '#1a1a1a',
                                    borderWidth: '2px',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = '#1a1a1a';
                                    e.currentTarget.style.color = '#fff';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.color = '#1a1a1a';
                                }}
                            >
                                Learn How It Works
                            </a>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="col-lg-6 text-center">
                        <div className="position-relative d-inline-block" style={{ maxWidth: '580px', width: '100%' }}>
                            <div style={{
                                position: 'absolute',
                                top: '20px',
                                right: '20px',
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(135deg, rgba(15, 102, 74, 0.1) 0%, rgba(46, 204, 113, 0.05) 100%)',
                                borderRadius: '20px',
                                filter: 'blur(40px)',
                                zIndex: 0
                            }}></div>
                            <img
                                src="/images/copy-trading-hero.png"
                                alt="Trade Like an Expert"
                                className="position-relative"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    maxWidth: '580px',
                                    zIndex: 1
                                }}
                                onError={(e) => {
                                    const parent = e.currentTarget.parentElement;
                                    if (parent) {
                                        parent.innerHTML = `
                                            <div style="width: 450px; height: 450px; background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto;">
                                                <i class="fas fa-users" style="font-size: 120px; color: #0f664a; opacity: 0.3;"></i>
                                            </div>
                                        `;
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
