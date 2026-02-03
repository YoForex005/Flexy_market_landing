"use client";

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';

export default function ThematicIndicesPage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const indices = [
        {
            symbol: "AI-INDEX",
            name: "Artificial Intelligence",
            desc: "Exposure to leading AI & robotics companies.",
            avgSpread: "1.5",
            leverage: "1:20",
            icon: "fas fa-brain", // or fa-robot
            color: "#8e44ad" // Purple
        },
        {
            symbol: "EV-INDEX",
            name: "Electric Vehicles",
            desc: "Invest in the future of transportation.",
            avgSpread: "1.2",
            leverage: "1:20",
            icon: "fas fa-bolt",
            color: "#f1c40f" // Yellow
        },
        {
            symbol: "BIO-INDEX",
            name: "Biotech & Pharma",
            desc: "Healthcare innovation and medical breakthroughs.",
            avgSpread: "1.8",
            leverage: "1:20",
            icon: "fas fa-dna",
            color: "#e74c3c" // Red
        },
        {
            symbol: "ESG-INDEX",
            name: "ESG Leaders",
            desc: "Sustainable companies with high environmental scores.",
            avgSpread: "1.0",
            leverage: "1:20",
            icon: "fas fa-leaf",
            color: "#2ecc71" // Green
        },
        {
            symbol: "GAME-INDEX",
            name: "Gaming & Esports",
            desc: "The booming world of video games and esports.",
            avgSpread: "1.4",
            leverage: "1:20",
            icon: "fas fa-gamepad",
            color: "#3498db" // Blue
        },
    ];

    const features = [
        { title: "Trend Trading", description: "Capture the growth of future-shaping industries.", icon: "fas fa-chart-line" },
        { title: "Instant Diversification", description: "One trade gives you exposure to a whole sector.", icon: "fas fa-layer-group" },
        { title: "Expertly Curated", description: "Baskets designed by analysts to track performance.", icon: "fas fa-glasses" },
        { title: "Risk Balanced", description: "Reduce single-stock risk by trading the index.", icon: "fas fa-scale-balanced" },
    ];

    return (
        <main className="bg-light">
            <NavBar />

            {/* HERO SECTION - Clean & Stylish */}
            <section className="position-relative overflow-hidden text-center text-white"
                style={{
                    background: "linear-gradient(135deg, #0f4941 0%, #052923 100%)",
                    paddingTop: "160px",
                    paddingBottom: "100px"
                }}>
                {/* Background Decor */}
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ opacity: 0.1 }}>
                    <i className="fas fa-network-wired position-absolute" style={{ top: '10%', left: '10%', fontSize: '200px' }}></i>
                    <i className="fas fa-microchip position-absolute" style={{ bottom: '10%', right: '10%', fontSize: '200px' }}></i>
                </div>

                <div className="container position-relative z-1 fade-in-up">
                    <span className="badge border border-light rounded-pill px-3 py-2 mb-3 fw-light tracking-wider uppercase">
                        Future Markets
                    </span>
                    <h1 className="display-4 fw-bold mb-4">Thematic Indices</h1>
                    <p className="lead mx-auto text-white-50" style={{ maxWidth: "700px" }}>
                        Don't just trade stocks—trade the trends. Invest in the sectors shaping the world of tomorrow, from AI to Clean Energy.
                    </p>
                </div>
            </section>

            {/* INDICES GRID */}
            <section className="container py-5 mt-n5" style={{ position: 'relative', zIndex: 10 }}>
                <div className="row g-4 justify-content-center">
                    {indices.map((idx, i) => (
                        <div key={i} className={`col-md-6 col-lg-4 fade-in-up delay-${(i + 1) * 100} ${isVisible ? 'visible' : ''}`}>
                            <div className="card h-100 border-0 shadow-sm rounded-4 hover-float overflow-hidden">
                                <div className="card-body p-4 text-center">
                                    <div className="mb-4 d-inline-flex align-items-center justify-content-center rounded-circle"
                                        style={{
                                            width: "80px",
                                            height: "80px",
                                            background: `rgba(${parseInt(idx.color.slice(1, 3), 16)}, ${parseInt(idx.color.slice(3, 5), 16)}, ${parseInt(idx.color.slice(5, 7), 16)}, 0.1)`,
                                            color: idx.color
                                        }}>
                                        <i className={`${idx.icon}`} style={{ fontSize: "36px" }}></i>
                                    </div>
                                    <h4 className="fw-bold mb-2">{idx.name}</h4>
                                    <div className="badge bg-light text-dark mb-3 font-monospace">{idx.symbol}</div>
                                    <p className="text-muted small mb-4">{idx.desc}</p>

                                    <div className="d-flex justify-content-between border-top pt-3">
                                        <div className="text-center w-50 border-end">
                                            <small className="text-uppercase text-muted" style={{ fontSize: '10px' }}>Spread</small>
                                            <div className="fw-bold text-success">{idx.avgSpread}</div>
                                        </div>
                                        <div className="text-center w-50">
                                            <small className="text-uppercase text-muted" style={{ fontSize: '10px' }}>Leverage</small>
                                            <div className="fw-bold">{idx.leverage}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer bg-white border-0 p-3 pt-0">
                                    <a href="https://user.flexymarkets.com/accounts/signUp" className="btn btn-outline-dark w-100 rounded-pill fw-bold btn-sm">
                                        Trade {idx.name}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* WHY TRADE THEMES */}
            <section className="py-5 bg-white">
                <div className="container py-4">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold mb-3">Why Trade Themes?</h2>
                        <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
                            Thematic indices offer a smarter way to diversify your portfolio.
                        </p>
                    </div>

                    <div className="row g-4">
                        {features.map((feat, i) => (
                            <div key={i} className="col-md-6 col-lg-3">
                                <div className="d-flex align-items-start p-3 rounded-3 hover-bg-light transition-all">
                                    <div className="flex-shrink-0 me-3 text-success">
                                        <i className={`${feat.icon} fa-2x`}></i>
                                    </div>
                                    <div>
                                        <h5 className="fw-bold h6 mb-2">{feat.title}</h5>
                                        <p className="small text-muted mb-0">{feat.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SIMPLE CTA */}
            <section className="py-5 bg-dark text-white text-center">
                <div className="container">
                    <h2 className="fw-bold mb-4">Start Trading the Future</h2>
                    <a href="https://user.flexymarkets.com/accounts/signUp"
                        className="btn btn-success rounded-pill px-5 py-3 fw-bold shadow-lg hover-scale">
                        Open Account
                    </a>
                </div>
            </section>

            <style jsx>{`
                .fade-in-up {
                    animation: fadeInUp 0.8s ease-out forwards;
                    opacity: 0;
                    transform: translateY(20px);
                }
                .visible { opacity: 1; transform: translateY(0); }
                
                @keyframes fadeInUp {
                    to { opacity: 1; transform: translateY(0); }
                }

                .delay-100 { animation-delay: 0.1s; }
                .delay-200 { animation-delay: 0.2s; }
                .delay-300 { animation-delay: 0.3s; }
                .delay-400 { animation-delay: 0.4s; }
                .delay-500 { animation-delay: 0.5s; }

                .hover-float { transition: transform 0.3s ease, box-shadow 0.3s ease; }
                .hover-float:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important; }
                
                .hover-scale { transition: transform 0.2s; }
                .hover-scale:hover { transform: scale(1.05); }

                .hover-bg-light:hover { background-color: #f8f9fa; }
                .tracking-wider { letter-spacing: 0.1em; }
            `}</style>

            <Footer />
        </main>
    );
}
