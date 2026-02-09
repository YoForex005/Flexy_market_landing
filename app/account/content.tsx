"use client";


import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function AccountContent() {
    return (
        <main className="bg-white" style={{ minHeight: "100vh" }}>
            <NavBar />

            {/* Header Section */}
            <section className="position-relative overflow-hidden"
                style={{
                    background: 'radial-gradient(circle at 50% -20%, #ccfbf1 0%, #ffffff 60%)',
                    paddingTop: "210px",
                    paddingBottom: "120px"
                }}
            >
                {/* Background Decor */}
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ opacity: 0.6, pointerEvents: 'none' }}>
                    <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(15, 73, 65, 0.08) 0%, transparent 70%)' }}></div>
                    <div style={{ position: 'absolute', top: '20%', left: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(45, 212, 191, 0.1) 0%, transparent 70%)' }}></div>
                </div>

                <div className="container text-center position-relative" style={{ zIndex: 2 }}>
                    <div className="d-inline-block px-4 py-2 mb-4 rounded-pill" style={{ backgroundColor: "rgba(15, 73, 65, 0.06)" }}>
                        <span className="fw-medium" style={{ color: "#0f664a", fontSize: "14px", letterSpacing: '0.5px' }}>ACCOUNT TYPES</span>
                    </div>
                    <h1 className="display-4 fw-bold mb-4" style={{ color: "#0f664a", marginBottom: "100px", letterSpacing: '-1px' }}>
                        Open Your Account
                    </h1>
                    <p className="text-secondary mx-auto mb-5 fs-5" style={{ maxWidth: "700px" }}>
                        Open an account today to access fair conditions and get everything you need to achieve your trading goals.
                    </p>
                    <div className="d-flex justify-content-center">
                        <a href="https://user.flexymarkets.com/accounts/signUps"
                            className="btn btn-primary rounded-pill px-5 py-3 fw-bold border-0 shadow-lg text-white text-decoration-none"
                            style={{ backgroundColor: "#0f4941", transition: "all 0.3s", fontSize: '18px' }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = "translateY(-3px)";
                                e.currentTarget.style.boxShadow = "0 15px 35px rgba(15, 73, 65, 0.25)";
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "0 10px 25px rgba(15, 73, 65, 0.15)";
                            }}
                        >
                            Choose Your Plan <i className="fas fa-arrow-right ms-2"></i>
                        </a>
                    </div>
                </div>
            </section>

            {/* Account Types Grid */}
            <section className="container pb-5 mb-5">
                <div className="row g-4">
                    {/* No Deposit Bonus Card */}
                    <div className="col-lg-4 col-md-6">
                        <div className="card h-100 border-0 p-4"
                            style={{ backgroundColor: "#d1e7dd", borderRadius: "32px", border: "1px solid rgba(15, 102, 74, 0.1)" }}>
                            <div className="mb-4">
                                <h3 className="h3 fw-bold mb-0" style={{ color: "#0f664a" }}>No Deposit Bonus</h3>
                            </div>
                            <p className="text-muted mb-4" style={{ minHeight: "48px" }}>Start trading with a bonus without making a deposit</p>

                            <div className="bg-white rounded-4 p-4 mb-4" style={{ borderRadius: "16px" }}>
                                <div className="d-flex justify-content-between mb-2 small">
                                    <span className="fw-semibold">Minimum Deposit:</span>
                                    <span className="fw-bold" style={{ color: "#0f664a" }}>$0</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2 small">
                                    <span className="fw-semibold">Spread:</span>
                                    <span className="fw-bold" style={{ color: "#0f664a" }}>From 0.3</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2 small">
                                    <span className="fw-semibold">Commission:</span>
                                    <span className="fw-bold" style={{ color: "#0f664a" }}>0</span>
                                </div>
                                <div className="d-flex justify-content-between mb-0 small">
                                    <span className="fw-semibold">Leverage:</span>
                                    <span className="fw-bold" style={{ color: "#0f664a" }}>1:500</span>
                                </div>
                            </div>

                            <a href="https://user.flexymarkets.com/accounts/signUps"
                                className="btn w-100 rounded-pill py-3 fw-bold text-white border-0 mt-auto text-decoration-none"
                                style={{ backgroundColor: "#0f664a" }}>
                                Select Plan
                            </a>
                        </div>
                    </div>

                    {/* ECN Card */}
                    <div className="col-lg-4 col-md-6">
                        <div className="card h-100 border-0 p-4"
                            style={{ backgroundColor: "#d1e7dd", borderRadius: "32px", border: "1px solid rgba(15, 102, 74, 0.1)" }}>
                            <div className="mb-4">
                                <h3 className="h3 fw-bold mb-0" style={{ color: "#0f664a" }}>ECN</h3>
                            </div>
                            <p className="text-muted mb-4" style={{ minHeight: "48px" }}>Direct market pricing with fixed commission</p>

                            <div className="bg-white rounded-4 p-4 mb-4" style={{ borderRadius: "16px" }}>
                                <div className="d-flex justify-content-between mb-2 small">
                                    <span className="fw-semibold">Minimum Deposit:</span>
                                    <span className="fw-bold" style={{ color: "#0f664a" }}>$10,000</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2 small">
                                    <span className="fw-semibold">Spread:</span>
                                    <span className="fw-bold" style={{ color: "#0f664a" }}>From 0.08</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2 small">
                                    <span className="fw-semibold">Commission:</span>
                                    <span className="fw-bold" style={{ color: "#0f664a" }}>4</span>
                                </div>
                                <div className="d-flex justify-content-between mb-0 small">
                                    <span className="fw-semibold">Leverage:</span>
                                    <span className="fw-bold" style={{ color: "#0f664a" }}>1:300</span>
                                </div>
                            </div>

                            <a href="https://user.flexymarkets.com/accounts/signUps"
                                className="btn w-100 rounded-pill py-3 fw-bold text-white border-0 mt-auto text-decoration-none"
                                style={{ backgroundColor: "#0f664a" }}>
                                Select Plan
                            </a>
                        </div>
                    </div>

                    {/* Pro Card */}
                    <div className="col-lg-4 col-md-6">
                        <div className="card h-100 border-0 p-4"
                            style={{ backgroundColor: "#d1e7dd", borderRadius: "32px", border: "1px solid rgba(15, 102, 74, 0.1)" }}>
                            <div className="mb-4">
                                <h3 className="h3 fw-bold mb-0" style={{ color: "#0f664a" }}>Pro</h3>
                            </div>
                            <p className="text-muted mb-4" style={{ minHeight: "48px" }}>Instant or market execution with tighter spreads</p>

                            <div className="bg-white rounded-4 p-4 mb-4" style={{ borderRadius: "16px" }}>
                                <div className="d-flex justify-content-between mb-2 small">
                                    <span className="fw-semibold">Minimum Deposit:</span>
                                    <span className="fw-bold" style={{ color: "#0f664a" }}>$1,000</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2 small">
                                    <span className="fw-semibold">Spread:</span>
                                    <span className="fw-bold" style={{ color: "#0f664a" }}>From 0.15</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2 small">
                                    <span className="fw-semibold">Commission:</span>
                                    <span className="fw-bold" style={{ color: "#0f664a" }}>0</span>
                                </div>
                                <div className="d-flex justify-content-between mb-0 small">
                                    <span className="fw-semibold">Leverage:</span>
                                    <span className="fw-bold" style={{ color: "#0f664a" }}>1:500</span>
                                </div>
                            </div>

                            <a href="https://user.flexymarkets.com/accounts/signUps"
                                className="btn w-100 rounded-pill py-3 fw-bold text-white border-0 mt-auto text-decoration-none"
                                style={{ backgroundColor: "#0f664a" }}>
                                Select Plan
                            </a>
                        </div>
                    </div>

                    {/* Superfast Card */}
                    <div className="col-lg-4 col-md-6">
                        <div className="card h-100 border-0 p-4"
                            style={{ backgroundColor: "#d1e7dd", borderRadius: "32px", border: "1px solid rgba(15, 102, 74, 0.1)" }}>
                            <div className="mb-4">
                                <h3 className="h3 fw-bold mb-0" style={{ color: "#0f664a" }}>Superfast</h3>
                            </div>
                            <p className="text-muted mb-4" style={{ minHeight: "48px" }}>Instant or market execution with Superfast Speed</p>

                            <div className="bg-white rounded-4 p-4 mb-4" style={{ borderRadius: "16px" }}>
                                <div className="d-flex justify-content-between mb-2 small">
                                    <span className="fw-semibold">Minimum Deposit:</span>
                                    <span className="fw-bold" style={{ color: "#0f664a" }}>$500</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2 small">
                                    <span className="fw-semibold">Spread:</span>
                                    <span className="fw-bold" style={{ color: "#0f664a" }}>From 0.18</span>
                                </div>
                                <div className="d-flex justify-content-between mb-0 small">
                                    <span className="fw-semibold">Commission:</span>
                                    <span className="fw-bold" style={{ color: "#0f664a" }}>0</span>
                                </div>
                            </div>

                            <a href="https://user.flexymarkets.com/accounts/signUps"
                                className="btn w-100 rounded-pill py-3 fw-bold text-white border-0 mt-auto text-decoration-none"
                                style={{ backgroundColor: "#0f664a" }}>
                                Select Plan
                            </a>
                        </div>
                    </div>

                    {/* Social Card */}
                    <div className="col-lg-4 col-md-6">
                        <div className="card h-100 border-0 p-4"
                            style={{ backgroundColor: "#d1e7dd", borderRadius: "32px", border: "1px solid rgba(15, 102, 74, 0.1)" }}>
                            <div className="mb-4">
                                <h3 className="h3 fw-bold mb-0" style={{ color: "#0f664a" }}>Social</h3>
                            </div>
                            <p className="text-muted mb-4" style={{ minHeight: "48px" }}>Made for all traders, Best for IB</p>

                            <div className="bg-white rounded-4 p-4 mb-4" style={{ borderRadius: "16px" }}>
                                <div className="d-flex justify-content-between mb-2 small">
                                    <span className="fw-semibold">Minimum Deposit:</span>
                                    <span className="fw-bold" style={{ color: "#0f664a" }}>$100</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2 small">
                                    <span className="fw-semibold">Spread:</span>
                                    <span className="fw-bold" style={{ color: "#0f664a" }}>From 0.22</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2 small">
                                    <span className="fw-semibold">Commission:</span>
                                    <span className="fw-bold" style={{ color: "#0f664a" }}>0</span>
                                </div>
                                <div className="d-flex justify-content-between mb-0 small">
                                    <span className="fw-semibold">Leverage:</span>
                                    <span className="fw-bold" style={{ color: "#0f664a" }}>1:500</span>
                                </div>
                            </div>

                            <a href="https://user.flexymarkets.com/accounts/signUps"
                                className="btn w-100 rounded-pill py-3 fw-bold text-white border-0 mt-auto text-decoration-none"
                                style={{ backgroundColor: "#0f664a" }}>
                                Select Plan
                            </a>
                        </div>
                    </div>

                    {/* Standard Card */}
                    <div className="col-lg-4 col-md-6">
                        <div className="card h-100 border-0 p-4"
                            style={{ backgroundColor: "#d1e7dd", borderRadius: "32px", border: "1px solid rgba(15, 102, 74, 0.1)" }}>
                            <div className="mb-4">
                                <h3 className="h3 fw-bold mb-0" style={{ color: "#0f664a" }}>Standard</h3>
                            </div>
                            <p className="text-muted mb-4" style={{ minHeight: "48px" }}>Low minimum deposit with no commission</p>

                            <div className="bg-white rounded-4 p-4 mb-4" style={{ borderRadius: "16px" }}>
                                <div className="d-flex justify-content-between mb-2 small">
                                    <span className="fw-semibold">Minimum Deposit:</span>
                                    <span className="fw-bold" style={{ color: "#0f664a" }}>$100</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2 small">
                                    <span className="fw-semibold">Spread:</span>
                                    <span className="fw-bold" style={{ color: "#0f664a" }}>From 0.18</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2 small">
                                    <span className="fw-semibold">Commission:</span>
                                    <span className="fw-bold" style={{ color: "#0f664a" }}>0</span>
                                </div>
                                <div className="d-flex justify-content-between mb-0 small">
                                    <span className="fw-semibold">Leverage:</span>
                                    <span className="fw-bold" style={{ color: "#0f664a" }}>1:500</span>
                                </div>
                            </div>

                            <a href="https://user.flexymarkets.com/accounts/signUps"
                                className="btn w-100 rounded-pill py-3 fw-bold text-white border-0 mt-auto text-decoration-none"
                                style={{ backgroundColor: "#0f664a" }}>
                                Select Plan
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Practice Trading Section */}
            <section className="py-5 bg-white">
                <div className="container text-center py-5">
                    <p className="text-muted mb-4 mx-auto lead" style={{ maxWidth: "800px" }}>
                        All accounts offer negative balance protection, hedging and Islamic option as standard. If the currency you deposit into your account is not USD, amount shown is the equivalent in the deposit currency.
                    </p>

                    <h2 className="display-5 fw-bold mb-4" style={{ color: "#0f2a24" }}>Want to Practice Trading for Free?</h2>

                    <p className="text-muted mb-5 mx-auto lead" style={{ maxWidth: "700px" }}>
                        Use your Demo Account and test your trading strategies risk-free with virtual funds in a simulated environment. Then switch to a Real Account when you are ready.
                    </p>

                    <a href="https://user.flexymarkets.com/accounts/signUps"
                        className="btn rounded-pill px-5 py-3 fw-bold text-white shadow-lg text-decoration-none"
                        style={{ backgroundColor: "#0f4941", transition: "all 0.3s" }}>
                        Get Started
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
