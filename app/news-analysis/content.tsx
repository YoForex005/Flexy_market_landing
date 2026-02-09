"use client";

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Link from 'next/link';


export default function NewsAnalysisContent() {
    return (
        <main className="bg-white">
            <NavBar />

            {/* HERO SECTION */}
            <section className="position-relative overflow-hidden"
                style={{
                    background: 'radial-gradient(circle at 50% -20%, #ccfbf1 0%, #ffffff 60%)',
                    paddingTop: '210px',
                    paddingBottom: '120px'
                }}
            >
                {/* Background Decor */}
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ opacity: 0.6, pointerEvents: 'none' }}>
                    <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(15, 73, 65, 0.08) 0%, transparent 70%)' }}></div>
                    <div style={{ position: 'absolute', top: '20%', left: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(45, 212, 191, 0.1) 0%, transparent 70%)' }}></div>
                </div>

                <div className="container position-relative" style={{ zIndex: 2 }}>
                    <div className="text-center mx-auto" style={{ maxWidth: '900px' }}>
                        <span className="d-inline-block py-1 px-3 rounded-pill bg-white border mb-4 shadow-sm fw-bold text-success" style={{ fontSize: '14px', letterSpacing: '1px' }}>
                            MARKET INSIGHTS
                        </span>

                        <h1 className="display-3 fw-bold mb-4 text-dark" style={{ letterSpacing: '-1.5px', lineHeight: '1.1' }}>
                            Empower Your Trading Decisions<br />
                            <span style={{ color: '#0f4941' }}>with Expert Analysis</span>
                        </h1>

                        <p className="fs-5 text-secondary mb-5 mx-auto lh-lg" style={{ maxWidth: '750px' }}>
                            Stay ahead of market trends with real-time news, in-depth technical analysis, and economic insights.
                            Unlock powerful insights and tools to enhance your trading strategies, ensuring you stay ahead of the market.
                        </p>
                        <div className="mb-5">
                            <a
                                href="https://user.flexymarkets.com/accounts/signUps"
                                className="btn fw-bold px-5 py-3 text-white"
                                style={{
                                    textDecoration: 'none',
                                    background: '#0f4941',
                                    border: '1px solid #0f4941',
                                    borderRadius: '50px',
                                    fontSize: '18px',
                                    boxShadow: '0 4px 15px rgba(15, 73, 65, 0.4)',
                                    transition: 'all 0.3s ease',
                                    display: 'inline-block'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = "translateY(-3px)";
                                    e.currentTarget.style.boxShadow = "0 15px 35px rgba(15, 73, 65, 0.25)";
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "0 10px 25px rgba(15, 73, 65, 0.15)";
                                }}
                            >
                                Get Started Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* LATEST NEWS GRID */}
            <section className="py-5 bg-white">
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h2 className="display-5 fw-bold mb-3 text-dark">Latest Market News</h2>
                        <p className="text-secondary fs-5">
                            Real-time updates on Forex, Stocks, and Commodities.
                        </p>
                    </div>

                    <div className="row g-4">
                        {/* News Card 1 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden hover-card">
                                <div className="position-relative" style={{ height: '200px', backgroundColor: '#e2e8f0' }}>
                                    <div className="position-absolute top-50 start-50 translate-middle text-muted">
                                        <i className="fas fa-chart-line fa-3x"></i>
                                    </div>
                                    <div className="position-absolute top-0 end-0 m-3 px-3 py-1 bg-white rounded-pill shadow-sm small fw-bold">
                                        FOREX
                                    </div>
                                </div>
                                <div className="card-body p-4">
                                    <div className="text-muted small mb-2"><i className="far fa-clock me-1"></i> 2 hours ago</div>
                                    <h3 className="h5 fw-bold mb-3">
                                        <Link href="#" className="text-decoration-none text-dark stretched-link">
                                            EUR/USD Outlook: Euro struggle near support ahead of Fed meeting
                                        </Link>
                                    </h3>
                                    <p className="text-muted small mb-0 lh-base">
                                        The Euro continues to trade heavily against the Greenback as investors await critical guidance from the Federal Reserve...
                                    </p>
                                </div>
                                <div className="card-footer bg-white border-0 p-4 pt-0">
                                    <span className="text-success fw-bold small">Read Analysis <i className="fas fa-arrow-right ms-1"></i></span>
                                </div>
                            </div>
                        </div>

                        {/* News Card 2 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden hover-card">
                                <div className="position-relative" style={{ height: '200px', backgroundColor: '#e2e8f0' }}>
                                    <div className="position-absolute top-50 start-50 translate-middle text-muted">
                                        <i className="fas fa-coins fa-3x"></i>
                                    </div>
                                    <div className="position-absolute top-0 end-0 m-3 px-3 py-1 bg-white rounded-pill shadow-sm small fw-bold">
                                        GOLD
                                    </div>
                                </div>
                                <div className="card-body p-4">
                                    <div className="text-muted small mb-2"><i className="far fa-clock me-1"></i> 4 hours ago</div>
                                    <h3 className="h5 fw-bold mb-3">
                                        <Link href="#" className="text-decoration-none text-dark stretched-link">
                                            Gold Price Analysis: XAU/USD bulls aim for $2050 amid geopolitical tension
                                        </Link>
                                    </h3>
                                    <p className="text-muted small mb-0 lh-base">
                                        Gold prices found fresh buying interest during the early European session as safe-haven flows dominate...
                                    </p>
                                </div>
                                <div className="card-footer bg-white border-0 p-4 pt-0">
                                    <span className="text-success fw-bold small">Read Analysis <i className="fas fa-arrow-right ms-1"></i></span>
                                </div>
                            </div>
                        </div>

                        {/* News Card 3 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden hover-card">
                                <div className="position-relative" style={{ height: '200px', backgroundColor: '#e2e8f0' }}>
                                    <div className="position-absolute top-50 start-50 translate-middle text-muted">
                                        <i className="fas fa-building fa-3x"></i>
                                    </div>
                                    <div className="position-absolute top-0 end-0 m-3 px-3 py-1 bg-white rounded-pill shadow-sm small fw-bold">
                                        STOCKS
                                    </div>
                                </div>
                                <div className="card-body p-4">
                                    <div className="text-muted small mb-2"><i className="far fa-clock me-1"></i> 6 hours ago</div>
                                    <h3 className="h5 fw-bold mb-3">
                                        <Link href="#" className="text-decoration-none text-dark stretched-link">
                                            Wall Street mixed as tech stocks retreat, energy sector outperforms
                                        </Link>
                                    </h3>
                                    <p className="text-muted small mb-0 lh-base">
                                        Major US indices showed lack of direction on Tuesday, with Nasdaq underperforming as traders took profits...
                                    </p>
                                </div>
                                <div className="card-footer bg-white border-0 p-4 pt-0">
                                    <span className="text-success fw-bold small">Read Analysis <i className="fas fa-arrow-right ms-1"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ANALYSIS TOOLS TEASER */}
            <section className="py-5 bg-light" style={{ backgroundColor: '#f8fafc' }}>
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <span className="text-success fw-bold tracking-wider small">ADVANCED TOOLS</span>
                            <h2 className="display-5 fw-bold mb-4 mt-2 text-dark">Technical Analysis Made Simple</h2>
                            <p className="fs-5 text-secondary mb-4 lh-lg">
                                Don&apos;t just read the news—analyze it. Use our professional-grade charting tools and technical indicators to validate your trade ideas.
                            </p>
                            <ul className="list-unstyled mb-5">
                                <li className="d-flex align-items-center mb-3">
                                    <i className="fas fa-check-circle text-success me-3 fs-5"></i>
                                    <span className="fw-bold text-dark">Real-time Charting & Indicators</span>
                                </li>
                                <li className="d-flex align-items-center mb-3">
                                    <i className="fas fa-check-circle text-success me-3 fs-5"></i>
                                    <span className="fw-bold text-dark">Automated Pattern Recognition</span>
                                </li>
                                <li className="d-flex align-items-center mb-3">
                                    <i className="fas fa-check-circle text-success me-3 fs-5"></i>
                                    <span className="fw-bold text-dark">Daily Technical Levels Support/Resistance</span>
                                </li>
                            </ul>
                            <a href="https://user.flexymarkets.com/accounts/signUps" className="btn btn-dark rounded-pill fw-bold px-5 py-3 shadow-lg">
                                Try Analytics Tools
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <div className="bg-white p-4 rounded-4 shadow-lg border">
                                {/* Placeholder for a Chart image or widget */}
                                <div className="bg-light rounded-3 d-flex align-items-center justify-content-center text-muted" style={{ height: '350px' }}>
                                    <div className="text-center">
                                        <i className="fas fa-laptop-code fa-4x mb-3 opacity-50"></i>
                                        <p className="fw-bold">Interactive Chart Platform</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .hover-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
                .hover-card:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important; }
            `}</style>

            <Footer />
        </main>
    );
}
