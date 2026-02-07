/* eslint-disable @next/next/no-img-element */
"use client";
import Image from 'next/image';

interface CopyTradingHeroProps {
    paddingTop?: string;
    paddingBottom?: string;
}

export default function CopyTradingHero({ paddingTop = "120px", paddingBottom = "100px" }: CopyTradingHeroProps) {
    return (
        <section className="copy-trading-hero position-relative"
            style={{
                background: 'radial-gradient(circle at 50% -20%, #ccfbf1 0%, #ffffff 60%)',
                paddingTop: paddingTop,
                paddingBottom: paddingBottom,
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

            <div className="container position-relative text-center">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-9">
                        {/* Trust Badges */}
                        <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
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

                        <h1 className="fw-bold mb-4 mx-auto" style={{
                            color: '#0f4941',
                            fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                            lineHeight: '1.1',
                            maxWidth: '800px',
                            letterSpacing: '-0.02em',
                        }}>
                            Trade Like an Expert
                        </h1>
                        <p className="mb-5 mx-auto" style={{
                            color: '#4a5568',
                            fontSize: '1.2rem',
                            lineHeight: '1.8',
                            maxWidth: '600px'
                        }}>
                            No time? No experience? No problem. Take the copy trading shortcut and copy
                            the trades of a Strategy Manager. It's free and so easy to use.
                        </p>

                        {/* CTA Buttons */}
                        <div className="d-flex justify-content-center gap-3 flex-wrap mb-5">
                            <a
                                href="https://user.flexymarkets.com/accounts/signIns"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary px-5 py-3 fw-bold rounded-pill shadow-lg hover-lift"
                                style={{
                                    fontSize: '16px'
                                }}
                            >
                                Start Copy Trading
                            </a>
                            <a
                                href="#how-it-works"
                                className="btn btn-outline-dark px-5 py-3 fw-bold rounded-pill hover-lift"
                                style={{
                                    fontSize: '16px'
                                }}
                            >
                                Learn How It Works
                            </a>
                        </div>

                        {/* Centered Image */}
                        <div className="position-relative d-inline-block mt-3" style={{ maxWidth: '800px', width: '100%' }}>
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '120%',
                                height: '120%',
                                background: 'radial-gradient(circle, rgba(15, 102, 74, 0.08) 0%, transparent 70%)',
                                zIndex: 0,
                                pointerEvents: 'none'
                            }}></div>
                            <Image
                                src="/images/copy-trading-hero.webp"
                                alt="Trade Like an Expert"
                                className="position-relative img-fluid"
                                width={800}
                                height={450}
                                style={{
                                    zIndex: 1,
                                    maxHeight: '450px',
                                    width: 'auto',
                                    height: 'auto'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
