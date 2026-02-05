/* eslint-disable @next/next/no-img-element */
"use client";

import AnimatedBackground from './AnimatedBackground';

interface PlatformHeroProps {
    paddingTop?: string;
    paddingBottom?: string;
}

export default function PlatformHero({ paddingTop = "120px", paddingBottom = "100px" }: PlatformHeroProps) {
    return (
        <div className="platform-hero position-relative text-center"
            style={{
                background: 'radial-gradient(circle at 50% -20%, #ccfbf1 0%, #ffffff 60%)',
                minHeight: '600px'
            }}>
            {/* Background Decor */}
            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ opacity: 0.6, pointerEvents: 'none' }}>
                <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(15, 73, 65, 0.08) 0%, transparent 70%)' }}></div>
                <div style={{ position: 'absolute', top: '20%', left: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(45, 212, 191, 0.1) 0%, transparent 70%)' }}></div>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 10, paddingTop: paddingTop, paddingBottom: paddingBottom }}>
                {/* Badge */}
                <div
                    className="d-inline-flex align-items-center justify-content-center mb-4"
                    style={{
                        background: "rgba(15, 73, 65, 0.08)",
                        border: "1px solid rgba(15, 73, 65, 0.15)",
                        borderRadius: "30px",
                        padding: "8px 24px",
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#0f664a"
                    }}
                >
                    Platforms
                </div>

                {/* Main Heading */}
                <h1
                    className="display-3 fw-bold mb-5"
                    style={{
                        color: '#000',
                        fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                        marginBottom: '100px'
                    }}
                >
                    Get Flexy Markets MT5
                </h1>

                {/* Description */}
                <p
                    className="lead mx-auto"
                    style={{
                        fontSize: '1.2rem',
                        maxWidth: '900px',
                        color: '#666',
                        lineHeight: '1.8'
                    }}
                >
                    Begin trading on one of the industry's top multi-asset platforms and harness the strength of a trusted global broker.
                </p>

                {/* New Interactive Feature Section */}
                <div className="row g-4 justify-content-center mt-5">
                    {[
                        {
                            icon: "fas fa-bolt",
                            title: "Lightning Fast",
                            desc: "Execute trades with zero latency on our optimized servers.",
                            color: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
                            bg: "rgba(254, 243, 199, 0.5)",
                            border: "#fcd34d"
                        },
                        {
                            icon: "fas fa-shield-alt",
                            title: "Secure & Reliable",
                            desc: "Your funds are protected with top-tier encryption standards.",
                            color: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                            bg: "rgba(209, 250, 229, 0.5)",
                            border: "#6ee7b7"
                        },
                        {
                            icon: "fas fa-chart-line",
                            title: "Advanced Tools",
                            desc: "Access 80+ indicators and professional charting tools.",
                            color: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
                            bg: "rgba(219, 234, 254, 0.5)",
                            border: "#93c5fd"
                        }
                    ].map((item, index) => (
                        <div key={index} className="col-md-4 col-lg-3">
                            <div className="feature-card p-4 h-100 rounded-4 text-start"
                                style={{
                                    background: item.bg,
                                    backdropFilter: 'blur(10px)',
                                    border: `1px solid ${item.border}`,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}>
                                <div className="icon-box mb-3 d-inline-flex align-items-center justify-content-center rounded-3"
                                    style={{
                                        width: '48px',
                                        height: '48px',
                                        background: item.color,
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                                    }}>
                                    <i className={`${item.icon} text-white`} style={{ fontSize: '20px' }}></i>
                                </div>
                                <h5 className="fw-bold mb-2" style={{ color: '#1e293b', fontSize: '1.1rem' }}>{item.title}</h5>
                                <p className="mb-0 text-muted small" style={{ lineHeight: '1.6' }}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <style jsx>{`
                    .feature-card:hover {
                        transform: translateY(-5px);
                        background: #fff !important;
                        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                    }
                    .feature-card:hover h5 {
                        color: #0f664a !important;
                    }
                `}</style>
            </div>
        </div>
    );
}
