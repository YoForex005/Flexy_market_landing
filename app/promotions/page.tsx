"use client";

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import FloatingSticker from '@/components/FloatingSticker';
import { useEffect, useState } from 'react';

export default function PromotionsPage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Configuration for the premium 3D stickers
    const stickers = [
        { iconClass: "fas fa-gem", color: "#9333ea", top: "15%", left: "10%", rotate: "-15deg", delay: "0s", size: 80 },
        { iconClass: "fas fa-gift", color: "#10b981", top: "25%", right: "12%", rotate: "10deg", delay: "1s", size: 70 },
        { iconClass: "fas fa-coins", color: "#f59e0b", top: "45%", left: "5%", rotate: "-5deg", delay: "2s", size: 60 },
        { iconClass: "fas fa-rocket", color: "#f43f5e", top: "40%", right: "8%", rotate: "15deg", delay: "3s", size: 75 },
    ];

    return (
        <main className="position-relative" style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
            {/* BACKGROUND - Matches Homepage "Aurora" Style - FIXED */}
            <div className="position-fixed top-0 start-0 w-100 h-100" style={{ zIndex: 0 }}>
                <AnimatedBackground variant="aurora" intensity="medium" />
            </div>

            <NavBar />

            {/* HERO SECTION - Premium Light Theme + Stickers */}
            <div className="container position-relative z-1 pt-5 mt-5">

                {/* Floating Stickers */}
                <div className="d-none d-lg-block">
                    {stickers.map((s, i) => (
                        <FloatingSticker
                            key={i}
                            iconClass={s.iconClass}
                            color={s.color}
                            top={s.top}
                            left={s.left}
                            right={s.right}
                            rotate={s.rotate}
                            delay={s.delay}
                            size={s.size}
                        />
                    ))}
                </div>

                <div className="text-center pt-5 pb-5 fade-in-up" style={{ marginTop: "60px" }}>
                    <div className="d-inline-flex align-items-center justify-content-center mb-4 px-4 py-2 bg-white rounded-pill shadow-sm border border-success border-opacity-25 glass-pill">
                        <i className="fas fa-crown me-2 text-warning"></i>
                        <span className="fw-bold text-uppercase" style={{ fontSize: "12px", letterSpacing: "1px", color: "#0f4941" }}>
                            Premium Trading Rewards
                        </span>
                    </div>

                    <h1 className="display-3 fw-800 mb-4" style={{ color: "#0f4941", letterSpacing: "-1px" }}>
                        Get More From <br />
                        <span className="text-gradient-emerald">Your Trading</span>
                    </h1>

                    <p className="lead mx-auto mb-5" style={{ maxWidth: "700px", color: "#475467", lineHeight: "1.6", fontWeight: 500 }}>
                        Unlock exclusive bonuses, cash rewards, and premium services designed to give you the competitive edge in the global markets.
                    </p>

                    <a href="https://user.flexymarkets.com/accounts/signUp" className="btn btn-emerald rounded-pill px-5 py-3 fw-bold shadow-lg hover-up">
                        Start Trading Now
                    </a>
                </div>

                {/* FEATURED PROMOS - Clean White Cards */}
                <div className="row g-5 mb-5 pb-5">

                    {/* CARD 1: 25% BONUS */}
                    <div className={`col-lg-6 fade-in-up delay-100 ${isVisible ? 'visible' : ''}`}>
                        <div className="card h-100 border-0 rounded-5 shadow-lg overflow-hidden promo-card-light position-relative">
                            <div className="card-body p-5 d-flex flex-column h-100 position-relative z-1">
                                <span className="badge bg-purple-soft text-purple fw-bold px-3 py-2 rounded-pill mb-3 w-auto align-self-start">MOST POPULAR</span>
                                <h2 className="display-5 fw-bold mb-3" style={{ color: "#1e293b" }}>25% Deposit Bonus</h2>
                                <p className="text-muted fs-5 mb-4 leading-relaxed">
                                    Instantly boost your buying power. Deposit $1,000, trade with $1,250.
                                    All profits are fully withdrawable.
                                </p>

                                <div className="mt-auto">
                                    <div className="d-flex flex-wrap gap-3 mb-4">
                                        <div className="d-flex align-items-center fw-semibold text-slate-700">
                                            <i className="fas fa-check-circle text-success me-2"></i> Instant Credit
                                        </div>
                                        <div className="d-flex align-items-center fw-semibold text-slate-700">
                                            <i className="fas fa-check-circle text-success me-2"></i> Tradable
                                        </div>
                                    </div>
                                    <a href="https://user.flexymarkets.com/accounts/signUp" className="btn btn-dark w-100 rounded-pill py-3 fw-bold">
                                        Claim Bonus
                                    </a>
                                </div>
                            </div>
                            {/* Background Illustration - Subtle */}
                            <div className="position-absolute bottom-0 end-0 p-4" style={{ opacity: 0.05, zIndex: 0 }}>
                                <i className="fas fa-coins text-dark" style={{ fontSize: "200px", transform: "rotate(-20deg) translate(20px, 20px)" }}></i>
                            </div>
                        </div>
                    </div>

                    {/* CARD 2: $150 FREE */}
                    <div className={`col-lg-6 fade-in-up delay-200 ${isVisible ? 'visible' : ''}`}>
                        <div className="card h-100 border-0 rounded-5 shadow-lg overflow-hidden promo-card-light bg-emerald-soft position-relative">
                            <div className="card-body p-5 d-flex flex-column h-100 position-relative z-1">
                                <span className="badge bg-white text-success fw-bold px-3 py-2 rounded-pill mb-3 w-auto align-self-start shadow-sm">NEW TRADERS</span>
                                <h2 className="display-5 fw-bold mb-3" style={{ color: "#0f4941" }}>$150 Welcome Credit</h2>
                                <p className="text-emerald-700 fs-5 mb-4 leading-relaxed">
                                    Experience real market conditions without risking your own capital.
                                </p>

                                <div className="mt-auto">
                                    <div className="bg-white bg-opacity-60 p-4 rounded-4 mb-4 border border-white border-opacity-50">
                                        <div className="d-flex justify-content-between mb-2">
                                            <span className="text-emerald-800 fw-medium">Welcome Credit</span>
                                            <span className="fw-bold text-emerald-900">$150.00</span>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <span className="text-emerald-800 fw-medium">Personal Risk</span>
                                            <span className="fw-bold text-emerald-900">0.00%</span>
                                        </div>
                                    </div>

                                    <a href="https://user.flexymarkets.com/accounts/signUp" className="btn btn-emerald w-100 rounded-pill py-3 fw-bold">
                                        Start Risk-Free
                                    </a>
                                </div>
                            </div>
                            {/* Background Illustration - Subtle */}
                            <div className="position-absolute top-0 end-0 p-4" style={{ opacity: 0.05, zIndex: 0 }}>
                                <i className="fas fa-gift text-emerald-900" style={{ fontSize: "200px", transform: "rotate(10deg)" }}></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* MORE WAYS TO SUCCEED - 4 Col Grid */}
                <div className="mb-5 pb-5">
                    <div className="text-center mb-5 fade-in-up delay-300">
                        <h2 className="display-6 fw-bold mb-3" style={{ color: "#0f4941" }}>More Ways to Succeed</h2>
                        <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
                            Maximize your potential with our exclusive trader benefits.
                        </p>
                    </div>

                    <div className="row g-4">
                        {[
                            { title: "Loyalty Program", desc: "Earn points on every trade. Redeem for cash bonuses.", icon: "gem", color: "#9333ea", bg: "bg-purple-50" },
                            { title: "Refer a Friend", desc: "Invite friends and earn up to $500 per referral.", icon: "user-friends", color: "#2563eb", bg: "bg-blue-50" },
                            { title: "Free VPS", desc: "Low latency hosting for automated trading strategies.", icon: "server", color: "#475569", bg: "bg-slate-50" },
                            { title: "Zero Fees", desc: "Keep more of your profits with 0% commission accounts.", icon: "ban", color: "#dc2626", bg: "bg-red-50" },
                        ].map((item, i) => (
                            <div key={i} className={`col-md-6 col-lg-3 fade-in-up delay-${(i + 4) * 100} ${isVisible ? 'visible' : ''}`}>
                                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden hover-card text-center p-4">
                                    <div className={`d-inline-flex align-items-center justify-content-center rounded-circle mb-3 ${item.bg}`}
                                        style={{ width: "70px", height: "70px" }}>
                                        <i className={`fas fa-${item.icon} fa-2x`} style={{ color: item.color }}></i>
                                    </div>
                                    <h5 className="fw-bold mb-2" style={{ color: "#1e293b" }}>{item.title}</h5>
                                    <p className="small text-muted mb-3">{item.desc}</p>
                                    <a href="#" className="fw-bold text-decoration-none small stretched-link" style={{ color: item.color }}>
                                        Learn More <i className="fas fa-arrow-right ms-1" style={{ fontSize: "10px" }}></i>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <style jsx>{`
                /* UTILITIES */
                .fw-800 { font-weight: 800; }
                .text-gradient-emerald {
                    background: linear-gradient(135deg, #0f4941 0%, #10b981 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .leading-relaxed { line-height: 1.7; }
                
                /* COLORS */
                .bg-purple-soft { background-color: rgba(147, 51, 234, 0.1); }
                .text-purple { color: #9333ea; }
                .bg-emerald-soft { background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); }
                .text-emerald-700 { color: #047857; }
                .text-emerald-800 { color: #065f46; }
                .text-emerald-900 { color: #064e3b; }
                .text-slate-700 { color: #334155; }
                
                .bg-purple-50 { background-color: #faf5ff; }
                .bg-blue-50 { background-color: #eff6ff; }
                .bg-slate-50 { background-color: #f8fafc; }
                .bg-red-50 { background-color: #fef2f2; }

                /* BUTTONS */
                .btn-emerald {
                    background-color: #0f4941;
                    color: white;
                    border: none;
                    transition: all 0.3s ease;
                }
                .btn-emerald:hover {
                    background-color: #0c3e33;
                    color: white;
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px rgba(15, 73, 65, 0.2);
                }
                .hover-up:hover { transform: translateY(-3px); }

                /* CARDS */
                .promo-card-light {
                    transition: all 0.3s ease;
                    background: white;
                }
                .promo-card-light:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(15, 73, 65, 0.08) !important;
                }
                .hover-card { transition: all 0.3s ease; background: white; }
                .hover-card:hover { 
                    transform: translateY(-5px); 
                    box-shadow: 0 10px 30px rgba(0,0,0,0.06) !important; 
                }
                
                .glass-pill {
                    background: rgba(255, 255, 255, 0.8);
                    backdrop-filter: blur(10px);
                }

                /* ANIMATIONS */
                .fade-in-up { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); }
                .visible { opacity: 1; transform: translateY(0); }
                .delay-100 { transition-delay: 0.1s; }
                .delay-200 { transition-delay: 0.2s; }
                .delay-300 { transition-delay: 0.3s; }
            `}</style>

            <Footer />
        </main>
    );
}
