"use client";

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';

export default function AboutContent() {
    // Animated Stats State (Simulated)
    const [stats, setStats] = useState({ clients: 0, countries: 0, trades: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            setStats(prev => ({
                clients: Math.min(prev.clients + 100, 15000),
                countries: Math.min(prev.countries + 2, 190),
                trades: Math.min(prev.trades + 0.1, 8.5)
            }));
        }, 30);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="bg-white">
            <NavBar />

            {/* HERO SECTION */}
            <section className="position-relative overflow-hidden text-center"
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
                    <span className="d-inline-block py-1 px-3 rounded-pill bg-white border mb-4 shadow-sm fw-bold text-success" style={{ fontSize: '14px', letterSpacing: '1px' }}>
                        WHO WE ARE
                    </span>
                    <h1 className="display-3 fw-bold mb-4 text-dark" style={{ letterSpacing: '-1.5px' }}>
                        Empowering Traders<br />
                        <span style={{ color: '#0f4941' }}>Global Success</span>
                    </h1>
                    <p className="fs-5 text-secondary mb-5 mx-auto lh-lg" style={{ maxWidth: '750px' }}>
                        Flexy Markets is a globally recognized broker dedicated to providing a seamless trading experience.
                        We combine cutting-edge technology with deep market expertise to help you achieve your financial goals.
                    </p>
                </div>
            </section>

            {/* STATS SECTION */}
            <section className="py-5 bg-white">
                <div className="container">
                    <div className="row g-4 text-center">
                        <div className="col-md-4">
                            <h2 className="display-4 fw-bold text-dark">{stats.clients.toLocaleString()}+</h2>
                            <p className="text-secondary">Active Clients</p>
                        </div>
                        <div className="col-md-4">
                            <h2 className="display-4 fw-bold text-dark">{stats.countries}+</h2>
                            <p className="text-secondary">Countries Served</p>
                        </div>
                        <div className="col-md-4">
                            <h2 className="display-4 fw-bold text-dark">{stats.trades.toFixed(1)}M+</h2>
                            <p className="text-secondary">Daily Trades</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* MISSION & VISION */}
            <section className="py-5 bg-light" style={{ backgroundColor: '#f8fafc' }}>
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="p-5 bg-white rounded-4 shadow-lg border-0 h-100">
                                <span className="text-success fw-bold tracking-wider small">OUR MISSION</span>
                                <h3 className="h2 fw-bold mt-3 mb-4 text-dark">Democratize Trading for Everyone</h3>
                                <p className="text-secondary lh-lg mb-0">
                                    Our mission is to make trading accessible, transparent, and profitable for everyone.
                                    We strive to provide the best tools, education, and support to empower our clients to succeed in the global markets.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="p-5 bg-dark text-white rounded-4 shadow-lg border-0 h-100" style={{ backgroundColor: '#0f4941' }}>
                                <span className="text-warning fw-bold tracking-wider small">OUR VISION</span>
                                <h3 className="h2 fw-bold mt-3 mb-4">Leading the Future of Fintech</h3>
                                <p className="text-white-50 lh-lg mb-0">
                                    We envision a world where financial freedom is within reach for all. By leveraging advanced technology and innovation, we aim to be the world&apos;s most trusted and reliable trading partner.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TEAM SECTION (Placeholder) */}
            <section className="py-5 bg-white">
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h2 className="display-5 fw-bold text-dark">Meet Our Leadership</h2>
                        <p className="text-secondary">Guided by industry veterans with decades of experience</p>
                    </div>
                    <div className="row g-4 justify-content-center">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="col-lg-4 col-md-6">
                                <div className="text-center">
                                    <div className="bg-light rounded-circle mx-auto mb-4" style={{ width: '150px', height: '150px', overflow: 'hidden' }}>
                                        <i className="fas fa-user-circle fa-8x text-secondary opacity-25" style={{ lineHeight: '150px' }}></i>
                                    </div>
                                    <h4 className="fw-bold text-dark">Executive Name</h4>
                                    <p className="text-success small fw-bold">Position Title</p>
                                    <p className="text-secondary small px-4">
                                        Brief bio description reflecting expertise and leadership role within the company.
                                    </p>
                                </div>
                            </div>
                        ))}
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

            <Footer />
        </main>
    );
}

