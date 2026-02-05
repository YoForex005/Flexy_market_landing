"use client";

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';

export default function AboutPage() {
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
        <main className="bg-white" style={{ minHeight: "100vh" }}>
            <NavBar />

            {/* HERO SECTION - Premium Light Gradient */}
            <section className="position-relative overflow-hidden text-center"
                style={{
                    background: 'radial-gradient(circle at 50% -20%, #ccfbf1 0%, #ffffff 60%)',
                    paddingTop: "160px",
                    paddingBottom: "100px"
                }}
            >
                <div className="container position-relative" style={{ zIndex: 2 }}>
                    <div className="badge bg-success bg-opacity-10 text-success mb-3 px-3 py-2 rounded-pill fw-bold border border-success border-opacity-25 small">
                        Trusted by 15,000+ Traders Worldwide
                    </div>
                    <h1 className="display-3 fw-bold mb-4 text-dark" style={{ letterSpacing: '-1px' }}>
                        Trade Smarter. <br />
                        <span style={{ color: "#0f4941" }}>Trade With Confidence.</span>
                    </h1>
                    <p className="text-secondary mb-5 fs-5 mx-auto" style={{ maxWidth: '800px', lineHeight: '1.8' }}>
                        Access global markets with <b>lightning-fast execution</b>, competitive spreads, and professional-grade tools.
                        Your premium gateway to Forex, Stocks, Commodities & Indices.
                    </p>
                    <div className="d-flex justify-content-center gap-3">
                        <a href="https://user.flexymarkets.com/accounts/signUps" className="btn btn-primary rounded-pill fw-bold px-5 py-3 shadow-lg hover-lift"
                            style={{ backgroundColor: "#0f4941", border: "none" }}>
                            Start Trading Now
                        </a>
                        <a href="#features" className="btn btn-outline-dark rounded-pill fw-bold px-5 py-3 hover-lift">
                            Explore Features
                        </a>
                    </div>
                </div>
            </section>

            {/* STATS SECTION - 4 Columns */}
            <section className="py-5" style={{ background: "#0f4941" }}>
                <div className="container">
                    <div className="row g-4 text-center text-white divide-x-md">
                        <div className="col-md-3 border-end border-white border-opacity-10">
                            <div className="display-5 fw-bold mb-1">{stats.clients.toLocaleString()}+</div>
                            <div className="text-white-50 text-uppercase small fw-bold tracking-widest">Active Clients</div>
                        </div>
                        <div className="col-md-3 border-end border-white border-opacity-10">
                            <div className="display-5 fw-bold mb-1">{stats.countries}+</div>
                            <div className="text-white-50 text-uppercase small fw-bold tracking-widest">Countries Covered</div>
                        </div>
                        <div className="col-md-3 border-end border-white border-opacity-10">
                            <div className="display-5 fw-bold mb-1">{stats.trades.toFixed(1)}M+</div>
                            <div className="text-white-50 text-uppercase small fw-bold tracking-widest">Trades Executed</div>
                        </div>
                        <div className="col-md-3">
                            <div className="display-5 fw-bold mb-1">24/5</div>
                            <div className="text-white-50 text-uppercase small fw-bold tracking-widest">Award-Winning Support</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MISSION SECTION */}
            <section className="py-5 bg-white" id="features">
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="position-relative ps-4 text-start border-start border-5 border-success" style={{ borderColor: '#0f4941 !important' }}>
                                <h2 className="display-5 fw-bold mb-4" style={{ color: "#0f4941" }}>
                                    Inspiring Global Traders <br /> Through Innovation
                                </h2>
                                <p className="lead text-secondary">
                                    Our mission is to empower you with exceptional trading services, innovative technology, and deep educational resources.
                                </p>
                                <p className="text-muted">
                                    Our goal is to be your trusted partner—helping you achieve your financial objectives through reliable platforms, zero requotes, and expert support strategies tailored to your needs.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            {/* Decorative Grid of 'Why Us' */}
                            <div className="row g-3">
                                <div className="col-6">
                                    <div className="p-4 bg-light rounded-4 text-center h-100">
                                        <i className="fas fa-bolt fs-1 mb-3 text-warning"></i>
                                        <h5 className="fw-bold">Fast Execution</h5>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="p-4 bg-light rounded-4 text-center h-100">
                                        <i className="fas fa-globe fs-1 mb-3 text-info"></i>
                                        <h5 className="fw-bold">Global Access</h5>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="p-4 bg-light rounded-4 text-center h-100">
                                        <i className="fas fa-shield-alt fs-1 mb-3 text-success"></i>
                                        <h5 className="fw-bold">Secure Funds</h5>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="p-4 bg-light rounded-4 text-center h-100">
                                        <i className="fas fa-headset fs-1 mb-3 text-primary"></i>
                                        <h5 className="fw-bold">Expert Support</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CORE VALUES Grid - 4 Items */}
            <section className="py-5" style={{ backgroundColor: "#f8fcfb" }}>
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold display-6 mb-3" style={{ color: "#0f4941" }}>Fundamental Principles</h2>
                        <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
                            The pillars that define the Flexy Markets experience.
                        </p>
                    </div>

                    <div className="row g-4 justify-content-center">
                        {[
                            { title: 'Integrity', icon: 'fa-handshake', desc: 'Honesty and complete transparency in every transaction.' },
                            { title: 'Innovation', icon: 'fa-lightbulb', desc: 'Leading technology aimed at giving you the market edge.' },
                            { title: 'Customer Focus', icon: 'fa-user-circle', desc: 'A client-centered approach that puts your success first.' },
                            { title: 'Excellence', icon: 'fa-trophy', desc: 'The relentless pursuit of trading perfection and quality.' }
                        ].map((item, i) => (
                            <div className="col-md-6 col-lg-3" key={i}>
                                <div className="card h-100 border-0 shadow-sm p-4 text-center rounded-4 hover-lift">
                                    <div className="mx-auto rounded-circle bg-success bg-opacity-10 d-flex align-items-center justify-content-center mb-3"
                                        style={{ width: '60px', height: '60px' }}>
                                        <i className={`fas ${item.icon} fs-4`} style={{ color: "#0f4941" }}></i>
                                    </div>
                                    <h5 className="fw-bold mb-2">{item.title}</h5>
                                    <p className="text-muted small mb-0">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CSR SECTION */}
            <section className="py-5 bg-white">
                <div className="container py-5">
                    <div className="row align-items-center flex-row-reverse">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="p-5 rounded-5 position-relative overflow-hidden dark-section">
                                {/* Decor */}
                                <i className="fas fa-seedling position-absolute" style={{ fontSize: '200px', opacity: 0.1, bottom: '-50px', right: '-50px' }}></i>
                                <h3 className="fw-bold mb-3">Corporate Social Responsibility</h3>
                                <p className="mb-4">
                                    "For us, success is measured not just in profits but in the difference we make."
                                </p>
                                <ul className="list-unstyled mb-0 d-grid gap-2">
                                    <li className="d-flex align-items-center"><i className="fas fa-check-circle me-2 text-warning"></i> Charitable Donations</li>
                                    <li className="d-flex align-items-center"><i className="fas fa-check-circle me-2 text-warning"></i> Volunteer Programs</li>
                                    <li className="d-flex align-items-center"><i className="fas fa-check-circle me-2 text-warning"></i> Eco-friendly Practices</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 pe-lg-5">
                            <span className="badge bg-success bg-opacity-10 text-success mb-2">Making a Positive Impact</span>
                            <h2 className="display-5 fw-bold mb-4" style={{ color: "#0f4941" }}>Building a Better Future</h2>
                            <p className="lead text-secondary mb-4">
                                Driving change through initiatives that matter.
                            </p>
                            <p className="text-muted">
                                Through charitable donations, volunteer programs, and eco-friendly practices, we aim to create a sustainable and better future for everyone. We believe in trading responsibly and giving back to the global community that sustains us.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* AWARDS & CTA COMBINED SECTION - Ultra Premium Redesign */}
            <section className="dark-section py-4 position-relative overflow-hidden" style={{ minHeight: '450px' }}>
                {/* Animated Floating Orbs Background */}
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ opacity: 0.08, pointerEvents: 'none' }}>
                    <div className="floating-orb" style={{
                        position: 'absolute',
                        top: '15%',
                        right: '10%',
                        width: '350px',
                        height: '350px',
                        background: 'radial-gradient(circle, rgba(251,191,36,0.4) 0%, transparent 70%)',
                        borderRadius: '50%',
                        animation: 'float 8s ease-in-out infinite'
                    }}></div>
                    <div className="floating-orb" style={{
                        position: 'absolute',
                        bottom: '15%',
                        left: '8%',
                        width: '450px',
                        height: '450px',
                        background: 'radial-gradient(circle, rgba(245,158,11,0.3) 0%, transparent 70%)',
                        borderRadius: '50%',
                        animation: 'float 10s ease-in-out infinite reverse'
                    }}></div>
                </div>

                <div className="container position-relative" style={{ zIndex: 2 }}>
                    {/* Premium Header with Glassmorphism Badge */}
                    <div className="text-center mb-3 pb-1">
                        <div className="d-inline-block mb-2 px-3 py-1 rounded-pill fw-bold position-relative overflow-hidden"
                            style={{
                                background: 'rgba(251, 191, 36, 0.15)',
                                backdropFilter: 'blur(10px)',
                                border: '2px solid rgba(251, 191, 36, 0.3)',
                                boxShadow: '0 8px 32px rgba(251, 191, 36, 0.2)'
                            }}>
                            <i className="fas fa-trophy me-2" style={{ color: '#fbbf24', fontSize: '12px' }}></i>
                            <span style={{ color: '#fbbf24', fontSize: '12px', letterSpacing: '1px' }}>AWARD-WINNING EXCELLENCE</span>
                        </div>
                        <h2 className="display-6 fw-bold mb-2" style={{ letterSpacing: '-1px' }}>
                            Recognized for <span style={{
                                background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}>Outstanding Service</span>
                        </h2>
                        <p className="mx-auto mb-0" style={{ maxWidth: '600px', opacity: 0.9, lineHeight: '1.6', fontSize: '15px' }}>
                            You demand the best trading experience—our awards reflect our commitment to excellence.
                        </p>
                    </div>

                    {/* 3D Floating Awards Display */}
                    <div className="d-flex justify-content-center align-items-center gap-3 mb-3 pb-2 flex-wrap" style={{ minHeight: '120px' }}>
                        {[
                            { icon: 'fa-crown', rotation: '-8deg', delay: '0s', yOffset: '-10px' },
                            { icon: 'fa-star', rotation: '0deg', delay: '0.2s', yOffset: '0px' },
                            { icon: 'fa-mobile-alt', rotation: '8deg', delay: '0.4s', yOffset: '-10px' }
                        ].map((award, i) => (
                            <div key={i} className="award-sticker"
                                style={{
                                    animation: `floatAward 3s ease-in-out infinite`,
                                    animationDelay: award.delay,
                                    transform: `rotate(${award.rotation}) translateY(${award.yOffset})`
                                }}>
                                <div className="position-relative d-flex align-items-center justify-content-center"
                                    style={{
                                        width: '100px',
                                        height: '100px',
                                        borderRadius: '50%',
                                        background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                                        boxShadow: `
                                            0 30px 60px -15px rgba(251, 191, 36, 0.5),
                                            0 15px 30px -10px rgba(245, 158, 11, 0.4),
                                            inset 0 -8px 20px rgba(0,0,0,0.25),
                                            inset 0 8px 20px rgba(255,255,255,0.4)
                                        `,
                                        border: '5px solid rgba(255, 255, 255, 0.2)',
                                        cursor: 'pointer',
                                        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'scale(1.15) translateY(-15px) rotate(360deg)';
                                        e.currentTarget.style.boxShadow = `
                                            0 40px 80px -20px rgba(251, 191, 36, 0.7),
                                            0 20px 40px -15px rgba(245, 158, 11, 0.5),
                                            inset 0 -8px 20px rgba(0,0,0,0.25),
                                            inset 0 8px 20px rgba(255,255,255,0.4)
                                        `;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'scale(1) translateY(0) rotate(0deg)';
                                        e.currentTarget.style.boxShadow = `
                                            0 30px 60px -15px rgba(251, 191, 36, 0.5),
                                            0 15px 30px -10px rgba(245, 158, 11, 0.4),
                                            inset 0 -8px 20px rgba(0,0,0,0.25),
                                            inset 0 8px 20px rgba(255,255,255,0.4)
                                        `;
                                    }}>
                                    {/* Glossy Shine Effect */}
                                    <div className="position-absolute top-0 start-0 w-100 h-100 rounded-circle"
                                        style={{
                                            background: 'radial-gradient(circle at 35% 30%, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.1) 40%, transparent 70%)',
                                            pointerEvents: 'none'
                                        }}></div>
                                    {/* Icon */}
                                    <i className={`fas ${award.icon} text-white position-relative`}
                                        style={{
                                            fontSize: '40px',
                                            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.4))',
                                            zIndex: 1
                                        }}></i>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Premium CTA Card with Glassmorphism */}
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-xl-8">
                            <div className="rounded-4 p-4 position-relative overflow-hidden"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    backdropFilter: 'blur(20px)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
                                }}>
                                {/* Gradient Border Effect */}
                                <div className="position-absolute top-0 start-0 w-100 h-100 rounded-5" style={{
                                    background: 'linear-gradient(135deg, rgba(251,191,36,0.1) 0%, transparent 50%, rgba(245,158,11,0.1) 100%)',
                                    pointerEvents: 'none'
                                }}></div>

                                <div className="text-center position-relative" style={{ zIndex: 2 }}>
                                    <h3 className="fw-bold mb-2 h4">Ready to Trade with an Award-Winning Broker?</h3>
                                    <p className="mb-3" style={{ opacity: 0.9, fontSize: '14px' }}>
                                        Join <span className="fw-bold" style={{ color: '#fbbf24' }}>15,000+</span> traders who trust Flexy Markets with their investments
                                    </p>
                                    <div className="d-flex flex-column flex-sm-row justify-content-center gap-2">
                                        <a href="https://user.flexymarkets.com/accounts/signUps"
                                            className="btn rounded-pill fw-bold px-4 py-2"
                                            style={{
                                                background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                                                color: '#1e293b',
                                                border: 'none',
                                                boxShadow: '0 10px 30px rgba(251, 191, 36, 0.4)',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'translateY(-3px)';
                                                e.currentTarget.style.boxShadow = '0 15px 40px rgba(251, 191, 36, 0.5)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(251, 191, 36, 0.4)';
                                            }}>
                                            <i className="fas fa-rocket me-2"></i>Open an Account
                                        </a>
                                        <a href="#features"
                                            className="btn btn-outline-light rounded-pill fw-bold px-4 py-2"
                                            style={{
                                                borderWidth: '2px',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                                e.currentTarget.style.transform = 'translateY(-3px)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.background = 'transparent';
                                                e.currentTarget.style.transform = 'translateY(0)';
                                            }}>
                                            <i className="fas fa-info-circle me-2"></i>Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CSS Animations */}
                <style jsx>{`
                    @keyframes float {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-30px); }
                    }
                    @keyframes floatAward {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-15px); }
                    }
                `}</style>
            </section>

            <Footer />
        </main>
    );
}
