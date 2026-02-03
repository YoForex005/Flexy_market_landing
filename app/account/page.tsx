"use client";

import { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function Account() {
    return (
        <main style={{ backgroundColor: "#f8fcfb", minHeight: "100vh" }}>
            <NavBar />

            {/* Header Section */}
            <section className="container text-center" style={{ paddingTop: "120px", paddingBottom: "100px" }}>
                <div className="d-inline-block px-4 py-2 mb-4 rounded-pill" style={{ backgroundColor: "#E8F3F0" }}>
                    <span className="fw-medium" style={{ color: "#0f664a", fontSize: "14px" }}>Account Types</span>
                </div>
                <h1 className="display-4 fw-bold mb-4" style={{ color: "#0f664a", marginBottom: "100px" }}>
                    Open Your Account
                </h1>
                <p className="lead text-muted mx-auto mb-5" style={{ maxWidth: "700px" }}>
                    Open an account today to access fair conditions and get everything you need to achieve your trading goals.
                </p>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary rounded-pill px-5 py-3 fw-bold border-0 shadow-lg"
                        style={{ backgroundColor: "#0f664a", transition: "all 0.3s" }}>
                        Choose your Plan
                    </button>
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
                                <h3 className="h3 fw-bold mb-2" style={{ color: "#0f664a" }}>No Deposit Bonus</h3>
                                <p className="mb-0 fw-medium" style={{ color: "rgba(15, 102, 74, 0.7)" }}>NoDepositBonus</p>
                            </div>
                            <p className="text-muted mb-4" style={{ minHeight: "48px" }}>No Deposit Bonus</p>

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

                            <button className="btn w-100 rounded-pill py-3 fw-bold text-white border-0 mt-auto"
                                style={{ backgroundColor: "#0f664a" }}>
                                Select Plan
                            </button>
                        </div>
                    </div>

                    {/* ECN Card */}
                    <div className="col-lg-4 col-md-6">
                        <div className="card h-100 border-0 p-4"
                            style={{ backgroundColor: "#d1e7dd", borderRadius: "32px", border: "1px solid rgba(15, 102, 74, 0.1)" }}>
                            <div className="mb-4">
                                <h3 className="h3 fw-bold mb-2" style={{ color: "#0f664a" }}>ECN</h3>
                                <p className="mb-0 fw-medium" style={{ color: "rgba(15, 102, 74, 0.7)" }}>Raw spread</p>
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

                            <button className="btn w-100 rounded-pill py-3 fw-bold text-white border-0 mt-auto"
                                style={{ backgroundColor: "#0f664a" }}>
                                Select Plan
                            </button>
                        </div>
                    </div>

                    {/* Pro Card */}
                    <div className="col-lg-4 col-md-6">
                        <div className="card h-100 border-0 p-4"
                            style={{ backgroundColor: "#d1e7dd", borderRadius: "32px", border: "1px solid rgba(15, 102, 74, 0.1)" }}>
                            <div className="mb-4">
                                <h3 className="h3 fw-bold mb-2" style={{ color: "#0f664a" }}>Pro</h3>
                                <p className="mb-0 fw-medium" style={{ color: "rgba(15, 102, 74, 0.7)" }}>Pro</p>
                            </div>
                            <p className="text-muted mb-4" style={{ minHeight: "48px" }}>Instant or market execution with tighter spreads.</p>

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

                            <button className="btn w-100 rounded-pill py-3 fw-bold text-white border-0 mt-auto"
                                style={{ backgroundColor: "#0f664a" }}>
                                Select Plan
                            </button>
                        </div>
                    </div>

                    {/* Superfast Card */}
                    <div className="col-lg-4 col-md-6">
                        <div className="card h-100 border-0 p-4"
                            style={{ backgroundColor: "#d1e7dd", borderRadius: "32px", border: "1px solid rgba(15, 102, 74, 0.1)" }}>
                            <div className="mb-4">
                                <h3 className="h3 fw-bold mb-2" style={{ color: "#0f664a" }}>Superfast</h3>
                                <p className="mb-0 fw-medium" style={{ color: "rgba(15, 102, 74, 0.7)" }}>Superfast</p>
                            </div>
                            <p className="text-muted mb-4" style={{ minHeight: "48px" }}>Instant or market execution with Superfast Speed.</p>

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

                            <button className="btn w-100 rounded-pill py-3 fw-bold border-2 mt-auto bg-white"
                                style={{ color: "#0f664a", borderColor: "#0f664a" }}>
                                Select Plan
                            </button>
                        </div>
                    </div>

                    {/* Social Card */}
                    <div className="col-lg-4 col-md-6">
                        <div className="card h-100 border-0 p-4"
                            style={{ backgroundColor: "#d1e7dd", borderRadius: "32px", border: "1px solid rgba(15, 102, 74, 0.1)" }}>
                            <div className="mb-4">
                                <h3 className="h3 fw-bold mb-2" style={{ color: "#0f664a" }}>Social</h3>
                                <p className="mb-0 fw-medium" style={{ color: "rgba(15, 102, 74, 0.7)" }}>Social</p>
                            </div>
                            <p className="text-muted mb-4" style={{ minHeight: "48px" }}>Made for all traders Best for IB</p>

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

                            <button className="btn w-100 rounded-pill py-3 fw-bold border-2 mt-auto bg-white"
                                style={{ color: "#0f664a", borderColor: "#0f664a" }}>
                                Select Plan
                            </button>
                        </div>
                    </div>

                    {/* Standard Card */}
                    <div className="col-lg-4 col-md-6">
                        <div className="card h-100 border-0 p-4"
                            style={{ backgroundColor: "#d1e7dd", borderRadius: "32px", border: "1px solid rgba(15, 102, 74, 0.1)" }}>
                            <div className="mb-4">
                                <h3 className="h3 fw-bold mb-2" style={{ color: "#0f664a" }}>Standard</h3>
                                <p className="mb-0 fw-medium" style={{ color: "rgba(15, 102, 74, 0.7)" }}>Standard</p>
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

                            <button className="btn w-100 rounded-pill py-3 fw-bold border-2 mt-auto bg-white"
                                style={{ color: "#0f664a", borderColor: "#0f664a" }}>
                                Select Plan
                            </button>
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

                    <button className="btn rounded-pill px-5 py-3 fw-bold text-white shadow-lg"
                        style={{ backgroundColor: "#0f4941", transition: "all 0.3s" }}>
                        Get Started
                    </button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
