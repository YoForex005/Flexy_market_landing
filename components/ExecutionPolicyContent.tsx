"use client";

import NavBar from '@/components/NavBar';
import Footer from "@/components/Footer";
import Image from 'next/image';
import logoImg from '../public/hd_logo.webp';

export default function ExecutionPolicyContent() {
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
                            Execution Policy
                        </span>
                    </div>

                    <h1 className="fw-bold mb-4 mx-auto"
                        style={{
                            color: "#0f4941",
                            fontSize: "clamp(3rem, 5vw, 4.5rem)",
                            lineHeight: "1.1",
                            maxWidth: "900px",
                            letterSpacing: "-0.02em",
                            marginBottom: "100px"
                        }}>
                        Ultra-Fast Trade Execution<br />
                        At Best Available Market Price
                    </h1>

                    <div className="mt-5">
                        <a href="https://user.flexymarkets.com/accounts/signUps"
                            target="_blank"
                            rel="noopener noreferrer"
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

            {/* CURVED STATS SECTION */}
            <section className="position-relative" style={{ marginTop: "40px" }}>
                {/* Curved Top Background */}
                <div style={{
                    backgroundColor: "#003b2f", // Deep dark green
                    borderTopLeftRadius: "50% 100px",
                    borderTopRightRadius: "50% 100px",
                    paddingTop: "120px",
                    paddingBottom: "120px",
                    color: "white"
                }}>
                    <div className="container">
                        <div className="row g-5 text-center justify-content-center">
                            {/* Stat 1 */}
                            <div className="col-md-3 col-sm-6">
                                <div className="stat-item p-3 h-100">
                                    <i className="fas fa-bolt mb-4" style={{ fontSize: "40px", color: "#4facfe" }}></i>
                                    <h2 className="fw-bold mb-3 text-white" style={{ fontSize: "24px" }}>
                                        99.4% of All Trades<br />
                                        Executed in Less Than 1 Second
                                    </h2>
                                </div>
                            </div>

                            {/* Stat 2 */}
                            <div className="col-md-3 col-sm-6">
                                <div className="stat-item p-3 h-100">
                                    <i className="fas fa-ban mb-4" style={{ fontSize: "40px", color: "#c471ed" }}></i>
                                    <h2 className="fw-bold mb-3 text-white" style={{ fontSize: "24px" }}>
                                        Strictly No Re-quotes<br />
                                        and No Virtual Dealer Plug-in
                                    </h2>
                                </div>
                            </div>

                            {/* Stat 3 */}
                            <div className="col-md-3 col-sm-6">
                                <div className="stat-item p-3 h-100">
                                    <i className="fas fa-hand-holding-usd mb-4" style={{ fontSize: "40px", color: "#4facfe" }}></i>
                                    <h2 className="fw-bold mb-3 text-white" style={{ fontSize: "24px" }}>
                                        100% Execution Rate<br />
                                        With No Orders Rejected
                                    </h2>
                                </div>
                            </div>

                            {/* Stat 4 */}
                            <div className="col-md-3 col-sm-6">
                                <div className="stat-item p-3 h-100">
                                    <i className="fas fa-chart-line mb-4" style={{ fontSize: "40px", color: "#c471ed" }}></i>
                                    <h2 className="fw-bold mb-3 text-white" style={{ fontSize: "24px" }}>
                                        Live Quotes and Real-Time<br />
                                        Market Execution
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* QUOTE SECTION */}
            <section className="py-5 bg-white text-center">
                <div className="container py-5">
                    <div className="mx-auto" style={{ maxWidth: "800px" }}>
                        <i className="fas fa-quote-left mb-4" style={{ fontSize: "40px", color: "#e2e8f0" }}></i>
                        <h2 className="fw-bold mb-5" style={{ color: "#0f2a24", lineHeight: "1.4" }}>
                            Execution speed affects the outcome of a trade which is why we treat it with the same importance as our spreads and prices.
                        </h2>

                        <div className="mb-4">
                            <h4 className="fw-bold mb-1" style={{ color: "#0f2a24" }}>Arijit Nayak</h4>
                            <p className="text-muted small text-uppercase" style={{ letterSpacing: "1px" }}>Co-Founder of Flexy Markets</p>
                        </div>

                        {/* Flexy Logo */}
                        <div className="mt-4">
                            <Image
                                src={logoImg}
                                alt="Flexy Markets"
                                style={{ height: "40px", width: "auto", opacity: 0.8 }}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES GRID */}
            <section className="py-5 bg-light" style={{ backgroundColor: "#f8fafc" }}>
                <div className="container py-5">
                    <div className="row g-4 justify-content-center">
                        {/* Feature 1 */}
                        <div className="col-md-6">
                            <div className="bg-white p-5 h-100 rounded-4 shadow-sm border-0 d-flex align-items-start gap-4 hover-lift">
                                <div className="icon-wrapper flex-shrink-0">
                                    <i className="fas fa-coins" style={{ fontSize: "40px", color: "#4facfe" }}></i>
                                </div>
                                <div>
                                    <h3 className="fw-bold mb-3" style={{ color: "#0f2a24" }}>Highly Competitive Overnight Positions</h3>
                                    <p className="text-muted mb-0" style={{ lineHeight: "1.7" }}>
                                        Holding a position overnight may incur a rollover interest, known as a swap fee. These fees are primarily determined by the interest rate differential between traded currencies or the leverage cost for non-Forex CFD products.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="col-md-6">
                            <div className="bg-white p-5 h-100 rounded-4 shadow-sm border-0 d-flex align-items-start gap-4 hover-lift">
                                <div className="icon-wrapper flex-shrink-0">
                                    <i className="fas fa-clock" style={{ fontSize: "40px", color: "#4facfe" }}></i>
                                </div>
                                <div>
                                    <h3 className="fw-bold mb-3" style={{ color: "#0f2a24" }}>24-Hour Online Trading</h3>
                                    <p className="text-muted mb-0" style={{ lineHeight: "1.7" }}>
                                        Forex trading is available 24/5. Trading on Precious Metals, Stocks, Commodities, Energies, and many other instruments is available from Monday to Friday with times dependent on which assets you choose to trade.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-5">
                        <a href="https://user.flexymarkets.com/accounts/signUps"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn rounded-3 fw-bold px-5 py-3 text-white shadow-lg"
                            style={{
                                backgroundColor: "#0f2a24",
                                border: "none",
                                transition: "all 0.3s ease"
                            }}>
                            Open an Account
                        </a>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .hover-lift {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .hover-lift:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important;
                }
                .stat-item {
                    transition: transform 0.3s ease;
                }
                .stat-item:hover {
                    transform: translateY(-5px);
                }
            `}</style>

            <Footer />
        </main>
    );
}
