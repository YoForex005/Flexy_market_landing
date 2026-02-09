"use client";

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';


export default function PromotionsContent() {
    return (
        <main className="bg-white text-dark overflow-hidden">
            <NavBar />

            {/* HERO SECTION */}
            <section className="position-relative d-flex align-items-center justify-content-center"
                style={{
                    minHeight: "60vh",
                    background: 'radial-gradient(circle at 50% 30%, #ccfbf1 0%, #ffffff 70%)',
                    paddingTop: "120px"
                }}>
                <div className="container position-relative text-center z-1">
                    <span className={`d-inline-block py-1 px-3 rounded-pill bg-white border border-success mb-4 shadow-sm fw-bold text-success fade-in-up`}
                        style={{ fontSize: '13px', letterSpacing: '1px' }}>
                        EXCLUSIVE OFFERS
                    </span>
                    <h1 className="display-3 fw-bold mb-4 text-dark fade-in-up"
                        style={{ letterSpacing: '-2px', animationDelay: '0.1s' }}>
                        Boost Your Trading<br />
                        <span style={{ color: '#0f4941' }}>With Our Promotions</span>
                    </h1>
                    <p className="lead text-secondary mb-5 mx-auto fade-in-up"
                        style={{ maxWidth: '600px', animationDelay: '0.2s' }}>
                        Take advantage of our limited-time offers designed to enhance your trading potential and maximize your returns.
                    </p>
                </div>

                {/* Animated Background Elements */}
                <div className="position-absolute w-100 h-100 top-0 start-0 overflow-hidden">
                    <div className="position-absolute bg-success opacity-10 rounded-circle blur-xl"
                        style={{ width: '400px', height: '400px', top: '-10%', right: '-5%' }}></div>
                    <div className="position-absolute bg-info opacity-10 rounded-circle blur-xl"
                        style={{ width: '300px', height: '300px', bottom: '10%', left: '-5%' }}></div>
                </div>
            </section>

            {/* PROMOTIONS GRID */}
            <section className="py-5 bg-white">
                <div className="container py-5">
                    {/* Promotion 1: No Deposit Bonus */}
                    <div className="row align-items-center mb-5 gx-5">
                        <div className="col-lg-6 mb-4 mb-lg-0 order-lg-1">
                            <div className="position-relative p-5 rounded-5 overflow-hidden text-white hover-scale"
                                style={{
                                    background: 'linear-gradient(135deg, #0f4941 0%, #062c26 100%)',
                                    boxShadow: '0 20px 40px rgba(15, 73, 65, 0.3)'
                                }}>
                                <div className="position-relative z-1">
                                    <div className="d-flex align-items-center mb-4">
                                        <i className="fas fa-gift fs-2 me-3 text-warning"></i>
                                        <h2 className="h3 fw-bold mb-0">No Deposit Bonus</h2>
                                    </div>
                                    <p className="fs-5 opacity-75 mb-4">
                                        Start trading completely risk-free with our $30 No Deposit Bonus. Test our execution and conditions without risking your own capital.
                                    </p>
                                    <ul className="list-unstyled mb-5">
                                        <li className="d-flex align-items-center mb-3">
                                            <i className="fas fa-check-circle text-success me-3"></i>
                                            <span>No deposit required</span>
                                        </li>
                                        <li className="d-flex align-items-center mb-3">
                                            <i className="fas fa-check-circle text-success me-3"></i>
                                            <span>Profits are withdrawable</span>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <i className="fas fa-check-circle text-success me-3"></i>
                                            <span>Available for new clients</span>
                                        </li>
                                    </ul>
                                    <a href="https://user.flexymarkets.com/accounts/signUps"
                                        className="btn btn-light rounded-pill px-4 py-3 fw-bold text-success shadow-lg">
                                        Claim $30 Bonus
                                    </a>
                                </div>
                                <div className="position-absolute top-0 end-0 p-5 opacity-10">
                                    <i className="fas fa-gift display-1"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-2">
                            <div className="p-4">
                                <span className="text-secondary fw-bold small tracking-wider">POPULAR CHOICE</span>
                                <h3 className="display-6 fw-bold mb-3 mt-2 text-dark">Risk-Free Start</h3>
                                <p className="text-secondary lh-lg mb-4">
                                    Why wait? Experience the Flexy Markets difference instantly. Our No Deposit Bonus is the perfect way to get started in the forex market with zero financial commitment.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Promotion 2: Deposit Bonus */}
                    <div className="row align-items-center mb-5 gx-5">
                        <div className="col-lg-6 mb-4 mb-lg-0 order-lg-2">
                            <div className="position-relative p-5 rounded-5 overflow-hidden text-dark hover-scale"
                                style={{
                                    background: 'linear-gradient(135deg, #d1e7dd 0%, #a3cfbb 100%)',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
                                }}>
                                <div className="position-relative z-1">
                                    <div className="d-flex align-items-center mb-4">
                                        <i className="fas fa-percentage fs-2 me-3 text-success"></i>
                                        <h2 className="h3 fw-bold mb-0">100% Deposit Bonus</h2>
                                    </div>
                                    <p className="fs-5 opacity-75 mb-4">
                                        Double your trading power instantly. Deposit any amount and we will match it 100% up to $5,000.
                                    </p>
                                    <ul className="list-unstyled mb-5">
                                        <li className="d-flex align-items-center mb-3">
                                            <i className="fas fa-check-circle text-success me-3"></i>
                                            <span>Instant credit to account</span>
                                        </li>
                                        <li className="d-flex align-items-center mb-3">
                                            <i className="fas fa-check-circle text-success me-3"></i>
                                            <span>Increases margin</span>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <i className="fas fa-check-circle text-success me-3"></i>
                                            <span>Tradable bonus</span>
                                        </li>
                                    </ul>
                                    <a href="https://user.flexymarkets.com/accounts/signUps"
                                        className="btn btn-dark rounded-pill px-4 py-3 fw-bold shadow-lg">
                                        Get 100% Bonus
                                    </a>
                                </div>
                                <div className="position-absolute top-0 end-0 p-5 opacity-10">
                                    <i className="fas fa-coins display-1"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <div className="p-4">
                                <span className="text-secondary fw-bold small tracking-wider">MAXIMIZE POTENTIAL</span>
                                <h3 className="display-6 fw-bold mb-3 mt-2 text-dark">Double Your Capital</h3>
                                <p className="text-secondary lh-lg mb-4">
                                    Boost your equity and trade with confidence. A larger capital base means you can implement more robust trading strategies and withstand market volatility better.
                                </p>
                            </div>
                        </div>
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
                .feature-card:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important; }
                .fade-in-up { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; transform: translateY(20px); }
                .hover-scale { transition: transform 0.3s ease; }
                .hover-scale:hover { transform: scale(1.02); }
                @keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
                .blur-xl { filter: blur(80px); }
            `}</style>

            <Footer />
        </main>
    );
}
