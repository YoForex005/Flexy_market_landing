"use client";

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function MarginLeverage() {
    return (
        <main style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
            <NavBar />

            {/* HERO SECTION - Standardized Style */}
            <section className="position-relative text-center"
                style={{
                    background: 'radial-gradient(circle at 50% -20%, #ccfbf1 0%, #ffffff 60%)',
                    paddingTop: "210px",
                    paddingBottom: "180px"
                }}>
                <div className="container position-relative z-1">
                    <div className="d-inline-flex align-items-center justify-content-center mb-4 px-3 py-1 rounded-pill border border-emerald-200 bg-emerald-50 text-emerald-800 shadow-sm"
                        style={{ backgroundColor: "rgba(15, 102, 74, 0.05)", border: '1px solid #bbf7d0' }}>
                        <span className="fw-bold text-uppercase" style={{ color: "#0f664a", fontSize: "12px", letterSpacing: "1px" }}>
                            Margin & Leverage
                        </span>
                    </div>

                    <h1 className="fw-bold mb-4 mx-auto"
                        style={{
                            color: "#0f4941",
                            fontSize: "clamp(48px, 6vw, 72px)",
                            letterSpacing: "-1.5px",
                            marginBottom: "100px"
                        }}>
                        Trade Bigger
                    </h1>

                    <p className="lead text-muted mx-auto mb-5" style={{ maxWidth: "600px", fontSize: "18px" }}>
                        Use flexible leverage to increase the size of your trades and take a larger stake in the markets.
                    </p>

                    <div>
                        <a href="https://user.flexymarkets.com/accounts/signUps"
                            className="btn rounded-pill fw-bold px-5 py-3 text-white shadow-lg hover-lift"
                            style={{
                                backgroundColor: "#0f4941",
                                border: "none",
                                transition: "all 0.3s ease"
                            }}>
                            Open an Account
                        </a>
                    </div>
                </div>
            </section>

            {/* BENTO GRID SECTION */}
            <section className="container pb-5 mb-5">
                <div className="row g-4">
                    {/* Card 1: Dark - Flexible Leverage */}
                    <div className="col-lg-6">
                        <div className="p-5 h-100 position-relative overflow-hidden rounded-5 shadow-lg bento-card-dark"
                            style={{
                                background: "#000",
                                color: "white",
                                minHeight: "400px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                            {/* Background Glow */}
                            <div style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                width: "300px",
                                height: "300px",
                                background: "radial-gradient(circle, rgba(15,102,74,0.4) 0%, rgba(0,0,0,0) 70%)",
                                zIndex: 0
                            }}></div>

                            <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                                <h3 className="fw-bold mb-3 text-white">Flexible Leverage up to</h3>
                                <div className="display-1 fw-bold text-gradient-green" style={{ letterSpacing: "-2px" }}>
                                    500:1
                                </div>
                                <div className="mt-4 px-4 py-2 rounded-3"
                                    style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", display: "inline-block" }}>
                                    <span style={{ fontSize: "14px", color: "#ffffff" }}>Maximize your potential</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Dark Green - Real-Time Monitoring */}
                    <div className="col-lg-6">
                        <div className="p-5 h-100 position-relative overflow-hidden rounded-5 shadow-lg bento-card-dark-green"
                            style={{
                                background: "#0f2a24",
                                color: "white",
                                minHeight: "400px"
                            }}>
                            <h3 className="fw-bold mb-4 text-white">Real-Time Margin Monitoring</h3>
                            <div className="d-flex justify-content-center align-items-center h-75">
                                {/* Animated Chart Representation */}
                                <div className="chart-bars d-flex align-items-end gap-3" style={{ height: "150px" }}>
                                    <div className="bar rounded-top" style={{ width: "20px", height: "40%", background: "#2ecc71", opacity: 0.5 }}></div>
                                    <div className="bar rounded-top" style={{ width: "20px", height: "70%", background: "#2ecc71", opacity: 0.7 }}></div>
                                    <div className="bar rounded-top" style={{ width: "20px", height: "50%", background: "#2ecc71", opacity: 0.6 }}></div>
                                    <div className="bar rounded-top" style={{ width: "20px", height: "90%", background: "#2ecc71", boxShadow: "0 0 20px rgba(46, 204, 113, 0.5)" }}></div>
                                    <div className="bar rounded-top" style={{ width: "20px", height: "60%", background: "#2ecc71", opacity: 0.6 }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Light Green - Negative Balance */}
                    <div className="col-lg-6">
                        <div className="p-5 h-100 position-relative overflow-hidden rounded-5 border-0 bento-card-light"
                            style={{
                                background: "#d1e7dd", // Sage green light
                                color: "#0f2a24",
                                minHeight: "350px"
                            }}>
                            <h3 className="fw-bold mb-3">Negative Balance Protection</h3>
                            <p className="mb-5" style={{ opacity: 0.8, maxWidth: "400px" }}>
                                We ensure you never lose more than your initial deposit. Trade with confidence knowing your downside is capped.
                            </p>
                            <div className="position-absolute bottom-0 end-0 p-5">
                                <i className="fas fa-shield-alt" style={{ fontSize: "120px", color: "#0f2a24", opacity: 0.1, transform: "rotate(-15deg)" }}></i>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Light Green - Stable Leverage */}
                    <div className="col-lg-6">
                        <div className="p-5 h-100 position-relative overflow-hidden rounded-5 border-0 bento-card-light"
                            style={{
                                background: "#e2e8f0", // Light cool gray/blue
                                color: "#0f2a24",
                                minHeight: "350px"
                            }}>
                            <h3 className="fw-bold mb-3">Stable Leverage</h3>
                            <p className="mb-0" style={{ opacity: 0.8, maxWidth: "400px" }}>
                                No unexpected changes to margin requirements overnight or during weekends. Your strategy stays intact.
                            </p>

                            {/* Graphic Lines */}
                            <div className="position-absolute start-0 end-0 bottom-0" style={{ height: "150px", opacity: 0.2 }}>
                                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <path d="M0 80 Q 25 20 50 80 T 100 20" stroke="#0f2a24" strokeWidth="2" fill="none" />
                                    <path d="M0 60 Q 30 90 60 40 T 100 70" stroke="#0f2a24" strokeWidth="1" fill="none" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BOTTOM CTA STRIP */}
            <section className="py-5 bg-light text-center mb-5">
                <div className="container">
                    <div className="bg-white rounded-5 p-5 shadow-sm">
                        <h2 className="fw-bold mb-3" style={{ color: "#0f2a24" }}>Trade Over 1,400 Assets</h2>
                        <p className="text-muted mb-4">Build your portfolio with Forex, Stocks, Precious Metals, Energies, and Indices.</p>
                        <a href="https://user.flexymarkets.com/accounts/signUps"
                            className="btn rounded-pill fw-bold px-5 py-3 text-white shadow-lg hover-scale"
                            style={{
                                backgroundColor: "#0f664a",
                                border: "none",
                                transition: "transform 0.2s ease"
                            }}>
                            Open an Account <i className="fas fa-arrow-right ms-2"></i>
                        </a>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .text-gradient-green {
                    background: linear-gradient(135deg, #2ecc71 0%, #2bd685 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .hover-scale:hover {
                    transform: scale(1.05);
                }
                .bento-card-dark, .bento-card-dark-green, .bento-card-light {
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .bento-card-dark:hover, .bento-card-dark-green:hover, .bento-card-light:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
                }
                
                @keyframes floatBar {
                    0%, 100% { height: 40%; }
                    50% { height: 60%; }
                }
                .bar {
                    transition: height 0.5s ease;
                }
            `}</style>

            <Footer />
        </main>
    );
}
