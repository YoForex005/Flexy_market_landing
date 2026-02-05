"use client";

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';

export default function PromotionsPage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
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
                        Exclusive Rewards Program
                    </div>
                    <h1 className="display-3 fw-bold mb-4 text-dark" style={{ letterSpacing: '-1px' }}>
                        Trade With <br />
                        <span style={{ color: "#0f4941" }}>More Power From Day One</span>
                    </h1>
                    <p className="text-secondary mb-5 fs-5 mx-auto" style={{ maxWidth: '800px', lineHeight: '1.8' }}>
                        Market-leading bonuses and <b>risk-free credits</b> designed to maximize profits while minimizing risk.
                        Your gateway to enhanced trading opportunities.
                    </p>
                    <div className="d-flex justify-content-center gap-3">
                        <a href="https://user.flexymarkets.com/accounts/signUps" className="btn btn-primary rounded-pill fw-bold px-5 py-3 shadow-lg hover-lift"
                            style={{ backgroundColor: "#0f4941", border: "none" }}>
                            Claim Rewards Now
                        </a>
                        <a href="#promotions" className="btn btn-outline-dark rounded-pill fw-bold px-5 py-3 hover-lift">
                            View All Offers
                        </a>
                    </div>
                </div>
            </section>

            {/* FEATURED PROMOS - Interactive Minimalism */}
            <section className="py-5 bg-white" id="promotions">
                <div className="container">
                    <div className="row g-4 mb-5 pb-4 justify-content-center">

                        {/* CARD 1: 25% BONUS - Light/Gold Theme */}
                        <div className={`col-lg-6 col-xl-5 fade-in-up delay-100 ${isVisible ? 'visible' : ''}`}>
                            <div className="card h-100 border-0 rounded-4 overflow-hidden position-relative group promo-card-minimal-light"
                                style={{
                                    background: "#ffffff",
                                    border: "1px solid #e2e8f0"
                                }}>

                                {/* Shine Effect */}
                                <div className="shine-element-dark"></div>

                                <div className="card-body p-4 p-lg-5 d-flex flex-column h-100 position-relative z-1">
                                    <div className="d-flex justify-content-between align-items-start mb-4">
                                        <span className="badge bg-warning text-dark fw-bold px-3 py-2 rounded-pill d-flex align-items-center gap-2">
                                            <i className="fas fa-star"></i> POPULAR
                                        </span>
                                        <div className="icon-box-minimal text-warning">
                                            <i className="fas fa-coins fa-2x"></i>
                                        </div>
                                    </div>

                                    <h2 className="display-6 fw-bold mb-3 text-dark tracking-tight">25% Bonus</h2>
                                    <p className="text-slate-600 fs-5 mb-5 lh-base">
                                        Deposit <span className="text-dark fw-bold">$1,000</span>, trade with <span className="text-warning fw-bold">$1,250</span>.
                                        <br />Instant power.
                                    </p>

                                    <div className="mt-auto">
                                        <a href="https://user.flexymarkets.com/accounts/signUps"
                                            className="btn btn-warning w-100 rounded-pill py-3 fw-bold text-dark lift-subtle position-relative overflow-hidden">
                                            Claim Bonus <i className="fas fa-arrow-right ms-2 transition-transform group-hover:translate-x-1"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CARD 2: $150 FREE - Clean Light Prism */}
                        <div className={`col-lg-6 col-xl-5 fade-in-up delay-200 ${isVisible ? 'visible' : ''}`}>
                            <div className="card h-100 border-0 rounded-4 overflow-hidden position-relative group promo-card-minimal-light"
                                style={{
                                    background: "#ffffff",
                                    border: "1px solid #e2e8f0"
                                }}>

                                {/* Shine Effect */}
                                <div className="shine-element-dark"></div>

                                <div className="card-body p-4 p-lg-5 d-flex flex-column h-100 position-relative z-1">
                                    <div className="d-flex justify-content-between align-items-start mb-4">
                                        <span className="badge bg-emerald-100 text-dark fw-bold px-3 py-2 rounded-pill d-flex align-items-center gap-2">
                                            <i className="fas fa-bolt text-emerald-600"></i> NEW
                                        </span>
                                        <div className="icon-box-minimal text-emerald-600">
                                            <i className="fas fa-gift fa-2x"></i>
                                        </div>
                                    </div>

                                    <h2 className="display-6 fw-bold mb-3 text-dark tracking-tight">$150 Credit</h2>
                                    <p className="text-slate-600 fs-5 mb-5 lh-base">
                                        Start trading risk-free. No deposit required.
                                        <br />Keep your profits.
                                    </p>

                                    <div className="mt-auto">
                                        <a href="https://user.flexymarkets.com/accounts/signUps"
                                            className="btn btn-emerald w-100 rounded-pill py-3 fw-bold lift-subtle position-relative overflow-hidden">
                                            Start Risk-Free <i className="fas fa-arrow-right ms-2 transition-transform group-hover:translate-x-1"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* MORE WAYS TO SUCCEED - Clean Grid */}
                    <div className="mb-5 pb-5">
                        <div className={`text-center mb-5 fade-in-up delay-300 ${isVisible ? 'visible' : ''}`}>
                            <h2 className="h2 fw-bold mb-3 text-slate-800">More Ways to Win</h2>
                            <p className="text-slate-500 mx-auto" style={{ maxWidth: "500px" }}>
                                Maximize your potential with these exclusive benefits.
                            </p>
                        </div>

                        <div className="row g-4 justify-content-center">
                            {[
                                { title: "Loyalty Program", desc: "Earn points for every trade.", icon: "fa-crown", color: "text-purple-600", bg: "bg-purple-50" },
                                { title: "Free VPS", desc: "Ultra-low latency trading.", icon: "fa-server", color: "text-indigo-600", bg: "bg-indigo-50" },
                                { title: "Zero Fees", desc: "Keep more of your profit.", icon: "fa-percentage", color: "text-rose-600", bg: "bg-rose-50" },
                            ].map((item, i) => (
                                <div key={i} className={`col-md-6 col-lg-3 fade-in-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${400 + (i * 100)}ms` }}>
                                    <div className="card h-100 border-0 shadow-sm rounded-4 p-4 hover-card-minimal text-center position-relative overflow-hidden group">
                                        <div className="card-body">
                                            <div className={`p-3 rounded-circle d-inline-flex mb-3 ${item.bg} ${item.color}`}>
                                                <i className={`fas ${item.icon} fa-2x`}></i>
                                            </div>
                                            <h5 className="fw-bold mb-2 text-slate-800">{item.title}</h5>
                                            <p className="small text-slate-500 mb-0">{item.desc}</p>
                                        </div>
                                        <div className="position-absolute bottom-0 start-0 w-100 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 1: PREMIUM BENEFITS - White Background */}
            <section className="py-5 bg-white">
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold display-6 mb-3" style={{ color: "#0f4941" }}>Why Trade With Promotions?</h2>
                        <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
                            Experience the advantage of trading with enhanced capital and reduced risk.
                        </p>
                    </div>

                    <div className="row g-4 justify-content-center">
                        {[
                            { title: 'Amplified Capital', icon: 'fa-rocket', desc: 'Start with more buying power from day one. Trade larger positions and maximize potential profits.' },
                            { title: 'Risk Mitigation', icon: 'fa-shield-alt', desc: 'Test strategies risk-free with our no-deposit credit. Learn and grow without financial pressure.' },
                            { title: 'Competitive Edge', icon: 'fa-trophy', desc: 'Access premium tools and features that give you an advantage in fast-moving markets.' },
                            { title: 'Flexibility', icon: 'fa-sync-alt', desc: 'Choose the promotion that fits your trading style. Multiple options for every trader level.' }
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

            {/* SECTION 2: TRADING ADVANTAGES - Dark Background */}
            <section className="py-5 text-white position-relative" style={{ backgroundColor: '#0f4941' }}>
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h2 className="display-4 fw-bold mb-5">Maximize Your Trading Potential</h2>
                    </div>

                    <div className="row g-4 px-lg-5">
                        {[
                            { title: "Instant Activation", desc: "Get your bonus or credit instantly upon deposit. No waiting, no hassle—start trading immediately with enhanced capital.", icon: "fa-bolt" },
                            { title: "Transparent Terms", desc: "Clear, straightforward terms and conditions. Know exactly what you're getting with no hidden requirements or surprises.", icon: "fa-file-contract" },
                            { title: "Multiple Withdrawals", desc: "Withdraw your profits anytime. Our promotions are designed to reward your success, not restrict your access to funds.", icon: "fa-money-bill-wave" },
                            { title: "Expert Guidance", desc: "24/5 support team ready to help you make the most of your promotional benefits and answer any questions.", icon: "fa-headset" },
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

            {/* SECTION 3: FINAL CTA - Light Background */}
            <section className="py-5" style={{ backgroundColor: "#f8fcfb" }}>
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="position-relative ps-4 text-start border-start border-5 border-success" style={{ borderColor: '#0f4941 !important' }}>
                                <h2 className="display-5 fw-bold mb-4" style={{ color: "#0f4941" }}>
                                    Ready to Claim Your Rewards?
                                </h2>
                                <p className="lead text-secondary">
                                    Don't miss out on these exclusive offers. Join thousands of traders who are already maximizing their potential with Flexy Markets.
                                </p>
                                <p className="text-muted">
                                    Whether you're a beginner looking for risk-free practice or an experienced trader seeking maximum leverage, we have the perfect promotion for you. Start your journey today.
                                </p>
                                <div className="mt-4">
                                    <a href="https://user.flexymarkets.com/accounts/signUps" className="btn btn-primary rounded-pill fw-bold px-5 py-3 shadow-lg hover-lift"
                                        style={{ backgroundColor: "#0f4941", border: "none" }}>
                                        Get Started Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            {/* Decorative Grid of Features */}
                            <div className="row g-3">
                                <div className="col-6">
                                    <div className="p-4 bg-white rounded-4 text-center h-100 shadow-sm">
                                        <i className="fas fa-check-circle fs-1 mb-3 text-success"></i>
                                        <h5 className="fw-bold">Verified Broker</h5>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="p-4 bg-white rounded-4 text-center h-100 shadow-sm">
                                        <i className="fas fa-lock fs-1 mb-3 text-primary"></i>
                                        <h5 className="fw-bold">Secure Funds</h5>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="p-4 bg-white rounded-4 text-center h-100 shadow-sm">
                                        <i className="fas fa-gift fs-1 mb-3 text-warning"></i>
                                        <h5 className="fw-bold">Best Bonuses</h5>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="p-4 bg-white rounded-4 text-center h-100 shadow-sm">
                                        <i className="fas fa-users fs-1 mb-3 text-info"></i>
                                        <h5 className="fw-bold">15K+ Traders</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <style jsx>{`
                /* UTILITIES */
                .fw-800 { font-weight: 800; }
                .text-gradient-emerald {
                    background: linear-gradient(135deg, #0f4941 0%, #10b981 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .leading-relaxed { line-height: 1.7; }
                
                /* COLOR UTILITIES */
                .text-slate-400 { color: #94a3b8; }
                .text-slate-500 { color: #64748b; }
                .text-slate-600 { color: #475569; }
                .text-slate-800 { color: #1e293b; }
                .text-emerald-600 { color: #059669; }
                .text-purple-600 { color: #9333ea; }
                .text-blue-600 { color: #2563eb; }
                .text-indigo-600 { color: #4f46e5; }
                .text-rose-600 { color: #e11d48; }
                .bg-emerald-50 { background-color: #ecfdf5; }
                .bg-emerald-100 { background-color: #d1fae5; }
                .bg-purple-50 { background-color: #faf5ff; }
                .bg-blue-50 { background-color: #eff6ff; }
                .bg-indigo-50 { background-color: #eef2ff; }
                .bg-rose-50 { background-color: #fff1f2; }

                /* NEW CARD STYLES */
                .promo-card-minimal-light {
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .promo-card-minimal-light:hover {
                    box-shadow: 0 20px 40px -6px rgba(0, 0, 0, 0.08) !important;
                    transform: translateY(-4px);
                    border-color: #cbd5e1 !important;
                }

                /* SHINE EFFECTS */
                .shine-element-dark {
                    background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.6) 50%, transparent);
                }
                .group:hover .shine-element-dark {
                    left: 200%;
                    transition: left 1s ease-in-out;
                }

                /* HOVER GRID CARDS */
                .hover-card-minimal {
                    transition: all 0.3s ease;
                    background: #fff;
                }
                .hover-card-minimal:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.08) !important;
                }

                /* BUTTONS & ANIMATIONS */
                .hover-lift {
                    transition: all 0.3s ease;
                }
                .hover-lift:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
                }
                .lift-subtle:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px -5px rgba(0,0,0,0.15);
                }
                .transition-transform { transition: transform 0.3s ease; }
                
                .fade-in-up { opacity: 0; transform: translateY(20px); transition: all 0.6s ease-out; }
                .visible { opacity: 1; transform: translateY(0); }
                .delay-100 { transition-delay: 0.1s; }
                .delay-200 { transition-delay: 0.2s; }
                .delay-300 { transition-delay: 0.3s; }
            `}</style>

            <div className="position-relative z-1">
                <Footer />
            </div>
        </main>
    );
}
