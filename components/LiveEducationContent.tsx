"use client";

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function LiveEducationContent() {
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

                <div className="container text-center position-relative py-5" style={{ zIndex: 2 }}>
                    <span className="fw-bold text-success mb-3 d-block text-uppercase date-badge" style={{ fontSize: '14px', letterSpacing: '1px' }}>
                        Watch Flexy Markets Live Education
                    </span>
                    <h1 className="display-4 fw-bold mb-5 text-dark">
                        Level Up With Flexy Markets Live
                    </h1>
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
                            Open an Account to Access More <i className="fas fa-arrow-right ms-2"></i>
                        </a>
                    </div>
                </div>
            </section>

            {/* EDUCATION SECTION */}
            <section className="py-5 position-relative" style={{ backgroundColor: '#0f4941', borderRadius: '50px 50px 0 0' }}>
                <div className="container py-5">
                    <div className="text-center mb-5 text-white">
                        <h2 className="display-5 fw-bold mb-3">Education</h2>
                        <p className="mx-auto text-white-50" style={{ maxWidth: "700px" }}>
                            There&apos;s so much more to watch. Create an account to access the wide range of free shows available at Flexy Markets.
                        </p>
                    </div>

                    <div className="row g-4 justify-content-center">
                        {[
                            { title: "Daily Markets Outlook", desc: "Make informed trading decisions with daily Markets analysis and insights from our Markets Intelligence Team.", icon: "fa-chart-line" },
                            { title: "Introduction to Scalping", desc: "This is your step-by-step guide to scalping, the tools needed for this strategy, and the application of the Wyckoff Theory.", icon: "fa-laptop-code" },
                            { title: "Guide to Price Action Trading", desc: "Master price action trading and risk management. Get trading ideas and watch their execution in real time.", icon: "fa-desktop" },
                            { title: "What's Your Trading Style?", desc: "Learn about the benefits and drawbacks of different trading methods and which ones are most suitable for you.", icon: "fa-cogs" },
                            { title: "Forex Power Hour", desc: "Watch our trading experts randomly select a Forex pair and share their analysis and trading ideas in this live trading session.", icon: "fa-laptop" },
                            { title: "US Markets Open Hour", desc: "Discover the most attractive US Stocks to trade on the day. Analyse US Indices and sectors affected by the news.", icon: "fa-desktop" },
                            { title: "Indicators Masterclass", desc: "Enhance your trading by learning how to use some of the most important tools in technical analysis like 'Moving Averages'.", icon: "fa-sliders-h" },
                            { title: "Let's Talk Fundamentals", desc: "Get live coverage of economic releases and macroeconomic events, and see how they could influence your trading.", icon: "fa-globe" },
                        ].map((card, i) => (
                            <div key={i} className="col-md-6">
                                <div className="card h-100 border-0 rounded-3 p-4 bg-white d-flex flex-row align-items-start gap-3">
                                    <div className="flex-shrink-0">
                                        <i className={`fas ${card.icon} text-primary fs-2`}></i>
                                        {/* Using blue/primary color for icons as per screenshot */}
                                    </div>
                                    <div>
                                        <h4 className="fw-bold mb-2 h5 text-dark">{card.title}</h4>
                                        <p className="text-muted mb-0 small lh-base">{card.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* COMMUNITY SECTION */}
            <section className="py-5 bg-white text-center">
                <div className="container py-5 my-5">
                    <h2 className="display-4 fw-bold mb-3 text-dark">Community</h2>
                    <p className="text-slate-500 mb-5 fs-5">
                        Join thousands of traders who learn and grow together with Flexy Markets
                    </p>

                    <div className="row g-4 mb-5">
                        <div className="col-lg-3 col-md-6">
                            <div className="card h-100 border-0 rounded-4 p-4 bg-light text-center">
                                <div className="mb-3">
                                    <i className="fas fa-chalkboard-teacher display-4 text-secondary"></i>
                                </div>
                                <h3 className="h5 fw-bold mb-2 text-dark">77+ Expert Instructors</h3>
                                <p className="mb-0 small text-secondary">
                                    Learn from professionals who&apos;ve taught at top financial institutions
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
                            Start Now <i className="fas fa-arrow-right ms-2"></i>
                        </button>
                    </a>
                </div>
            </section>

            <style jsx>{`
                .text-slate-600 { color: #475569; }
                .text-slate-500 { color: #64748b; }
            `}</style>

            <Footer />
        </main>
    );
}
