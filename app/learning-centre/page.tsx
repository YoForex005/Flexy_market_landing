"use client";

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function LearningCentrePage() {
    return (
        <main className="bg-white">
            <NavBar />

            {/* HERO SECTION - Clean, No Stickers */}
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

                <div className="container text-center position-relative" style={{ zIndex: 2 }}>
                    <h1 className="display-4 fw-bold mb-4 text-dark" style={{ letterSpacing: '-1px' }}>
                        Learn to Trade<br />with Flexy Markets
                    </h1>
                    <p className="text-secondary mb-5 fs-5 mx-auto" style={{ maxWidth: '700px' }}>
                        Invest time in the learning tools in our Learning Centre so you can enter the markets equipped to make informed choices.
                    </p>
                    <div className="mb-5">
                        <a href="https://user.flexymarkets.com/accounts/signUps" style={{ textDecoration: 'none' }}>
                            <button
                                type="button"
                                className="btn fw-bold px-5 py-3 text-white"
                                style={{
                                    background: '#0f4941',
                                    border: '1px solid #0f4941',
                                    borderRadius: '50px',
                                    fontSize: '18px',
                                    boxShadow: '0 4px 15px rgba(15, 73, 65, 0.4)',
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
                                Get Started Now
                            </button>
                        </a>
                    </div>
                </div>
            </section>

            <div className="container pb-5">
                {/* DARK CARDS ROW */}
                <div className="row g-4 mb-4">
                    {/* Live Webinars */}
                    <div className="col-lg-6">
                        <div className="card h-100 border-0 rounded-4 p-5 position-relative overflow-hidden"
                            style={{ backgroundColor: '#0f4941', color: 'white' }}>
                            <div className="position-relative" style={{ zIndex: 2, maxWidth: '60%' }}>
                                <h3 className="fw-bold mb-3">Live Webinars</h3>
                                <p className="text-white-50 mb-4 lh-lg">
                                    Learn 7 days a week from 77 instructors in 23 languages. Join thousands of traders who benefit from our free, interactive webinars taught by industry experts.
                                </p>
                                <a href="https://user.flexymarkets.com/accounts/signUps" className="btn btn-light fw-bold px-4 py-2 rounded-pill">
                                    Register Now
                                </a>
                            </div>
                            {/* Decorative 3D Element */}
                            <div className="position-absolute" style={{ right: '-20px', bottom: '-40px', opacity: 0.8 }}>
                                <i className="fas fa-graduation-cap" style={{ fontSize: '250px', color: 'rgba(255,255,255,0.1)' }}></i>
                            </div>
                        </div>
                    </div>

                    {/* Live Education TV */}
                    <div className="col-lg-6">
                        <div className="card h-100 border-0 rounded-4 p-5 position-relative overflow-hidden"
                            style={{ backgroundColor: '#000000', color: 'white' }}>
                            <div className="position-relative" style={{ zIndex: 2, maxWidth: '60%' }}>
                                <h3 className="fw-bold mb-3">Live Education TV</h3>
                                <p className="text-white-50 mb-4 lh-lg">
                                    Master the markets with live shows and expert analysis. Watch daily sessions on Forex, stocks, indices, and commodities with our trading experts.
                                </p>
                                <a href="https://user.flexymarkets.com/accounts/signUps" className="btn btn-light fw-bold px-4 py-2 rounded-pill">
                                    Watch Live
                                </a>
                            </div>
                            {/* Decorative 3D Element */}
                            <div className="position-absolute" style={{ right: '-30px', bottom: '-30px', opacity: 0.8 }}>
                                <i className="fas fa-video" style={{ fontSize: '220px', color: '#1a1a1a' }}></i>
                                <i className="fas fa-play-circle position-absolute" style={{ fontSize: '100px', color: '#333', top: '50px', left: '-50px', transform: 'rotate(-15deg)' }}></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* LIGHT CARDS ROW */}
                <div className="row g-4">
                    {/* Trading Tools */}
                    <div className="col-lg-6">
                        <div className="card h-100 border-0 rounded-4 p-5 position-relative overflow-hidden"
                            style={{ backgroundColor: '#dcfce7' }}>
                            <div className="position-relative" style={{ zIndex: 2, maxWidth: '60%' }}>
                                <h3 className="fw-bold mb-3 text-dark">Trading Tools & Indicators</h3>
                                <p className="text-secondary mb-4 lh-lg">
                                    Learn to use professional trading tools and technical indicators. Master Moving Averages, RSI, MACD, and other essential tools for successful trading.
                                </p>
                                <a href="https://user.flexymarkets.com/accounts/signUps" className="btn fw-bold px-4 py-2 rounded-pill text-white" style={{ backgroundColor: '#000' }}>
                                    Learn More
                                </a>
                            </div>
                            {/* Decorative 3D Element */}
                            <div className="position-absolute" style={{ right: '20px', bottom: '20px' }}>
                                <div style={{
                                    width: '180px', height: '180px',
                                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                                    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1), inset 0 5px 10px rgba(255,255,255,0.3)',
                                    transform: 'rotate(15deg)'
                                }}>
                                    <i className="fas fa-chart-line" style={{ fontSize: '80px', color: '#fff', transform: 'rotate(-15deg)' }}></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Market Fundamentals */}
                    <div className="col-lg-6">
                        <div className="card h-100 border-0 rounded-4 p-5 position-relative overflow-hidden"
                            style={{ backgroundColor: '#f3f4f6' }}>
                            <div className="position-relative" style={{ zIndex: 2, maxWidth: '60%' }}>
                                <h3 className="fw-bold mb-3 text-dark">Market Fundamentals</h3>
                                <p className="text-secondary mb-4 lh-lg">
                                    Understand economic events and how they impact your trading. Get live coverage of economic releases and macroeconomic events that influence markets.
                                </p>
                                <a href="https://user.flexymarkets.com/accounts/signUps" className="btn fw-bold px-4 py-2 rounded-pill text-white" style={{ backgroundColor: '#000' }}>
                                    Start Learning
                                </a>
                            </div>
                            {/* Decorative 3D Element */}
                            <div className="position-absolute" style={{ right: '30px', bottom: '40px' }}>
                                <div style={{
                                    width: '160px', height: '160px',
                                    background: 'linear-gradient(135deg, #64748b 0%, #475569 100%)',
                                    borderRadius: '50%',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    boxShadow: '0 25px 50px rgba(0,0,0,0.2), inset 0 2px 5px rgba(255,255,255,0.2)',
                                    transform: 'rotate(-10deg)'
                                }}>
                                    <i className="fas fa-globe-americas" style={{ fontSize: '70px', color: '#fff' }}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* EDUCATION SECTION */}
            <section className="dark-section py-5 mt-5 position-relative overflow-hidden" style={{ borderRadius: '50px 50px 0 0' }}>
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h2 className="display-5 fw-bold mb-3">Education</h2>
                        <p className="fs-5" style={{ opacity: 0.9 }}>Access comprehensive learning resources to improve your trading</p>
                    </div>

                    <div className="row g-4 pt-4">
                        <div className="col-lg-6">
                            <div className="card h-100 border border-secondary rounded-4 p-4 bg-transparent">
                                <h3 className="h4 fw-bold mb-3">Trading Central</h3>
                                <p className="mb-4" style={{ opacity: 0.9 }}>
                                    Discover new market opportunities with Trading Central. Get access to Analyst Views, Daily Market News, and Web TV.
                                </p>
                                <div className="text-end mt-auto">
                                    <i className="fas fa-chart-area display-4 opacity-50"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card h-100 border border-secondary rounded-4 p-4 bg-transparent">
                                <h3 className="h4 fw-bold mb-3">Economic Calendar</h3>
                                <p className="mb-4" style={{ opacity: 0.9 }}>
                                    Stay on top of every economic event that can affect your trading. Filter by date, country, and importance.
                                </p>
                                <div className="text-end mt-auto">
                                    <i className="fas fa-calendar-alt display-4 opacity-50"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* COMMUNITY SECTION */}
            <section className="py-5 bg-white">
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h2 className="display-5 fw-bold mb-3 text-dark">Community</h2>
                        <p className="text-secondary fs-5">Join thousands of traders who learn and grow together</p>
                    </div>

                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6">
                            <div className="card h-100 border-0 rounded-4 p-4 bg-light text-center">
                                <div className="mb-3">
                                    <i className="fas fa-chalkboard-teacher display-4 text-secondary"></i>
                                </div>
                                <h3 className="h5 fw-bold mb-2 text-dark">77+ Expert Instructors</h3>
                                <p className="mb-0 small text-secondary">
                                    Learn from professionals who've taught at top financial institutions
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card h-100 border-0 rounded-4 p-4 bg-light text-center">
                                <div className="mb-3">
                                    <i className="fas fa-language display-4 text-secondary"></i>
                                </div>
                                <h3 className="h5 fw-bold mb-2 text-dark">23 Languages</h3>
                                <p className="mb-0 small text-secondary">
                                    Access education in your preferred language for better understanding
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card h-100 border-0 rounded-4 p-4 bg-light text-center">
                                <div className="mb-3">
                                    <i className="fas fa-gift display-4 text-secondary"></i>
                                </div>
                                <h3 className="h5 fw-bold mb-2 text-dark">100% Free</h3>
                                <p className="mb-0 small text-secondary">
                                    All webinars and live sessions are completely free for all traders
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card h-100 border-0 rounded-4 p-4 bg-light text-center">
                                <div className="mb-3">
                                    <i className="fas fa-clock display-4 text-secondary"></i>
                                </div>
                                <h3 className="h5 fw-bold mb-2 text-dark">Learn at Your Pace</h3>
                                <p className="mb-0 small text-secondary">
                                    Access content 7 days a week at times that suit your schedule
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
