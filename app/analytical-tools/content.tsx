"use client";

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { useState } from 'react';


export default function AnalyticalToolsContent() {
    const [activeTab, setActiveTab] = useState<'stocks' | 'news'>('stocks');

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
                            PREMIUM ANALYTICS
                        </span>

                        <h1 className="display-3 fw-bold mb-4 text-dark" style={{ letterSpacing: '-1.5px', lineHeight: '1.1' }}>
                            Elevate Your Trading Analysis<br />
                            <span style={{ color: '#0f4941' }}>with Flexy Markets</span>
                        </h1>

                        <p className="fs-5 text-secondary mb-5 mx-auto lh-lg" style={{ maxWidth: '750px' }}>
                            Unleash the power of AI-driven insights and award-winning analytical tools.
                            Discover new trading opportunities with precision analytics and expert insights.
                        </p>
                        <br /><br />

                        <a href="https://user.flexymarkets.com/accounts/signUps" style={{ textDecoration: 'none' }}>
                            <button
                                type="button"
                                className="btn fw-bold px-5 py-3 text-white"
                                style={{
                                    background: '#0f4941',
                                    border: '1px solid #0f4941',
                                    borderRadius: '50px',
                                    fontSize: '18px',
                                    boxShadow: '0 4px 15px rgba(15, 73, 65, 0.3)',
                                    transition: 'all 0.3s ease'
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
                                Open an Account <i className="fas fa-arrow-right ms-2"></i>
                            </button>
                        </a>
                    </div>
                </div>
            </section>

            {/* FEATURES SECTION (TABS) */}
            <section className="py-5 bg-white">
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h2 className="display-5 fw-bold mb-3 text-dark">Get Analysis Customized to Your Goals</h2>
                        <p className="text-secondary fs-5">
                            This premium service costs <span className="text-danger fw-bold">$10,000 a month</span>,<br />
                            but at <span className="fw-bold text-dark">Flexy Markets</span> you get it <span className="text-success fw-bold">for free</span>.
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="d-flex justify-content-center gap-3 mb-5">
                        <button
                            className={`btn px-5 py-2 rounded-pill fw-bold ${activeTab === 'stocks' ? 'shadow-sm' : 'text-muted'}`}
                            style={{
                                backgroundColor: activeTab === 'stocks' ? '#fff' : 'transparent',
                                border: activeTab === 'stocks' ? '1px solid #ddd' : 'none',
                                transition: 'all 0.3s ease'
                            }}
                            onClick={() => setActiveTab('stocks')}
                        >
                            Stocks
                        </button>
                        <button
                            className={`btn px-5 py-2 rounded-pill fw-bold ${activeTab === 'news' ? 'shadow-sm' : 'text-muted'}`}
                            style={{
                                backgroundColor: activeTab === 'news' ? '#fff' : 'transparent',
                                border: activeTab === 'news' ? '1px solid #ddd' : 'none',
                                transition: 'all 0.3s ease'
                            }}
                            onClick={() => setActiveTab('news')}
                        >
                            News & Sentiment
                        </button>
                    </div>

                    {/* Tab Content */}
                    <div className="row g-4 justify-content-center">
                        {activeTab === 'stocks' ? (
                            <>
                                <div className="col-lg-6">
                                    <div className="card h-100 border rounded-4 p-5 shadow-sm bg-white hover-card position-relative overflow-hidden">
                                        <div className="position-absolute top-0 end-0 p-4 opacity-10">
                                            <i className="fas fa-search-dollar fa-5x text-success"></i>
                                        </div>
                                        <h3 className="fw-bold mb-3 h4">Stock Scanner</h3>
                                        <p className="text-muted mb-0 lh-lg">
                                            Scan thousands of stocks across hundreds of criteria. Filter by sector, price, volume, and technical indicators with real-time updates.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card h-100 border rounded-4 p-5 shadow-sm bg-white hover-card position-relative overflow-hidden">
                                        <div className="position-absolute top-0 end-0 p-4 opacity-10">
                                            <i className="fas fa-random fa-5x text-primary"></i>
                                        </div>
                                        <h3 className="fw-bold mb-3 h4">Options Flow</h3>
                                        <p className="text-muted mb-0 lh-lg">
                                            Track unusual options activity and institutional money flow. Spot big moves before they happen with our real-time options scanner.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card h-100 border rounded-4 p-5 shadow-sm bg-white hover-card position-relative overflow-hidden">
                                        <div className="position-absolute top-0 end-0 p-4 opacity-10">
                                            <i className="fas fa-chart-line fa-5x text-info"></i>
                                        </div>
                                        <h3 className="fw-bold mb-3 h4">Technical Insights</h3>
                                        <p className="text-muted mb-0 lh-lg">
                                            Automated technical analysis on virtually any instrument. Recognize classic chart patterns and price trends instantly.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card h-100 border rounded-4 p-5 shadow-sm bg-white hover-card position-relative overflow-hidden">
                                        <div className="position-absolute top-0 end-0 p-4 opacity-10">
                                            <i className="fas fa-chess-knight fa-5x text-warning"></i>
                                        </div>
                                        <h3 className="fw-bold mb-3 h4">Strategy Builder</h3>
                                        <p className="text-muted mb-0 lh-lg">
                                            Build, backtest, and optimize your trading strategies. Visualize potential outcomes and risk/reward ratios before you trade.
                                        </p>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="col-lg-6">
                                    <div className="card h-100 border rounded-4 p-5 shadow-sm bg-white hover-card position-relative overflow-hidden">
                                        <div className="position-absolute top-0 end-0 p-4 opacity-10">
                                            <i className="fas fa-newspaper fa-5x text-danger"></i>
                                        </div>
                                        <h3 className="fw-bold mb-3 h4">Live Market News</h3>
                                        <p className="text-muted mb-0 lh-lg">
                                            Stay updated with real-time news streaming from top financial sources. Filter by asset class and importance to never miss a beat.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card h-100 border rounded-4 p-5 shadow-sm bg-white hover-card position-relative overflow-hidden">
                                        <div className="position-absolute top-0 end-0 p-4 opacity-10">
                                            <i className="fas fa-smile fa-5x text-warning"></i>
                                        </div>
                                        <h3 className="fw-bold mb-3 h4">Social Sentiment</h3>
                                        <p className="text-muted mb-0 lh-lg">
                                            See what the market is talking about. Analyze social media sentiment trends to gauge market mood and potential reversals.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card h-100 border rounded-4 p-5 shadow-sm bg-white hover-card position-relative overflow-hidden">
                                        <div className="position-absolute top-0 end-0 p-4 opacity-10">
                                            <i className="fas fa-user-tie fa-5x text-primary"></i>
                                        </div>
                                        <h3 className="fw-bold mb-3 h4">Analyst Views</h3>
                                        <p className="text-muted mb-0 lh-lg">
                                            Get clear directional views on top instruments based on the expertise of senior market analysts and automated algorithms.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card h-100 border rounded-4 p-5 shadow-sm bg-white hover-card position-relative overflow-hidden">
                                        <div className="position-absolute top-0 end-0 p-4 opacity-10">
                                            <i className="fas fa-calendar-alt fa-5x text-success"></i>
                                        </div>
                                        <h3 className="fw-bold mb-3 h4">Economic Calendar</h3>
                                        <p className="text-muted mb-0 lh-lg">
                                            Track key economic events and data releases. See historical data, consensus forecasts, and immediate market impact.
                                        </p>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE SECTION */}
            <section className="py-5 text-white position-relative" style={{ backgroundColor: '#0f4941', borderRadius: '50px 50px 0 0' }}>
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h2 className="display-4 fw-bold mb-5">Why Choose Flexy Markets?</h2>
                    </div>

                    <div className="row g-4 px-lg-5">
                        {[
                            { title: "Unlock Market Potential", desc: "Access a world of trading opportunities with Flexy Markets, powered by cutting-edge AI technology and deep market expertise to help you stay ahead.", icon: "fa-globe" },
                            { title: "Maximize Your Trading Accuracy", desc: "Leverage real-time data and in-depth market analysis to validate your trades, ensuring that every decision is based on accurate and up-to-date information.", icon: "fa-crosshairs" },
                            { title: "Real-Time Insights", desc: "Benefit from instant access to market data and predictive analytics, empowering you to make well-informed, timely decisions for optimal trading performance.", icon: "fa-bolt" },
                            { title: "Empower Your Trading Journey", desc: "Join a community of successful traders using Flexy Markets' intelligent tools, designed to guide your trading strategies and maximize potential profits.", icon: "fa-road" },
                        ].map((item, i) => (
                            <div key={i} className="col-lg-6">
                                <div className="p-4 rounded-4 h-100 d-flex gap-4 align-items-start" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <div className="flex-shrink-0 mt-1">
                                        <i className={`fas ${item.icon} text-success fs-2`}></i>
                                    </div>
                                    <div>
                                        <h3 className="h5 fw-bold mb-3">{item.title}</h3>
                                        <p className="opacity-75 mb-0 lh-base small">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
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
