"use client";

import { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function ForexCalculatorPage() {
    const [activeTab, setActiveTab] = useState('pip');

    // Pip Calculator State
    const [pipPair, setPipPair] = useState('EUR/USD');
    const [pipSize, setPipSize] = useState(1); // Standard lots
    const [pipResult, setPipResult] = useState<number | null>(null);

    // Margin Calculator State
    const [marginPair, setMarginPair] = useState('EUR/USD');
    const [marginLeverage, setMarginLeverage] = useState(100);
    const [marginSize, setMarginSize] = useState(1);
    const [marginResult, setMarginResult] = useState<number | null>(null);

    // Profit Calculator State
    const [profitPair, setProfitPair] = useState('EUR/USD');
    const [profitSize, setProfitSize] = useState(1);
    const [openPrice, setOpenPrice] = useState<number>(0);
    const [closePrice, setClosePrice] = useState<number>(0);
    const [profitResult, setProfitResult] = useState<number | null>(null);

    // Mock calculations (simplified)
    const calculatePip = () => {
        // Standard Lot (100,000) * 0.0001 (Pip) = $10 for USD pairs
        // Simplified logic for demo
        const base = 10;
        setPipResult(pipSize * base);
    };

    const calculateMargin = () => {
        // (Size * Contract Size) / Leverage
        const contractSize = 100000;
        setMarginResult((marginSize * contractSize) / marginLeverage);
    };

    const calculateProfit = () => {
        // (Close - Open) * Size * Contract Size
        const contractSize = 100000;
        setProfitResult((closePrice - openPrice) * profitSize * contractSize);
    };

    return (
        <main className="bg-white" style={{ minHeight: "100vh" }}>
            <NavBar />

            {/* HERO SECTION - Premium Light Gradient */}
            <section className="position-relative overflow-hidden text-center"
                style={{
                    background: 'radial-gradient(circle at 50% -20%, #ccfbf1 0%, #ffffff 60%)',
                    paddingTop: "180px",
                    paddingBottom: "120px"
                }}
            >
                {/* Background Decor */}
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ opacity: 0.6, pointerEvents: 'none' }}>
                    <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(15, 73, 65, 0.05) 0%, transparent 70%)' }}></div>
                    <div style={{ position: 'absolute', top: '10%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(45, 212, 191, 0.08) 0%, transparent 70%)' }}></div>
                </div>

                <div className="container position-relative" style={{ zIndex: 2 }}>
                    <h1 className="display-4 fw-bold mb-3 text-dark">
                        Precision Trading Tools
                    </h1>
                    <p className="text-secondary mb-5 fs-5 mx-auto" style={{ maxWidth: '600px' }}>
                        Calculate your potential risks and rewards instantly with our comprehensive suite of Forex calculators.
                    </p>
                </div>
            </section>

            {/* CALCULATORS SECTION */}
            <section className="position-relative" style={{ marginTop: "-80px", paddingBottom: "100px" }}>
                <div className="container">
                    <div className="card border-0 shadow-lg rounded-4 overflow-hidden bg-white">
                        <div className="card-header bg-white border-bottom-0 p-4 pb-0 text-center">
                            {/* TABS */}
                            <div className="d-inline-flex bg-light rounded-pill p-1 shadow-sm">
                                {['pip', 'margin', 'profit'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`btn rounded-pill px-4 fw-bold ${activeTab === tab ? 'bg-white shadow-sm text-dark' : 'text-muted'}`}
                                        style={{ transition: 'all 0.3s' }}
                                    >
                                        {tab.charAt(0).toUpperCase() + tab.slice(1)} Calculator
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="card-body p-5">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">

                                    {/* PIP CALCULATOR */}
                                    {activeTab === 'pip' && (
                                        <div className="animate__animated animate__fadeIn">
                                            <h3 className="fw-bold mb-4 text-center" style={{ color: "#0f4941" }}>Pip Value Calculator</h3>
                                            <div className="row g-4">
                                                <div className="col-md-6">
                                                    <label className="form-label fw-bold text-muted small">Currency Pair</label>
                                                    <select className="form-select form-select-lg bg-light border-0" value={pipPair} onChange={(e) => setPipPair(e.target.value)}>
                                                        <option>EUR/USD</option>
                                                        <option>GBP/USD</option>
                                                        <option>USD/JPY</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="form-label fw-bold text-muted small">Trade Size (Lots)</label>
                                                    <input type="number" className="form-control form-control-lg bg-light border-0" value={pipSize} onChange={(e) => setPipSize(Number(e.target.value))} />
                                                </div>
                                                <div className="col-12 text-center mt-4">
                                                    <button onClick={calculatePip} className="btn btn-primary btn-lg rounded-pill px-5 fw-bold" style={{ backgroundColor: "#0f4941", border: "none" }}>
                                                        Calculate
                                                    </button>
                                                </div>
                                                {pipResult !== null && (
                                                    <div className="col-12 mt-4 text-center">
                                                        <div className="p-4 rounded-3" style={{ background: "linear-gradient(135deg, #e0f2fe 0%, #f0fdf4 100%)" }}>
                                                            <div className="small  fw-bold text-muted mb-1 text-uppercase">Pip Value</div>
                                                            <div className="display-4 fw-bold" style={{ color: "#0f4941" }}>${pipResult.toFixed(2)}</div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {/* MARGIN CALCULATOR */}
                                    {activeTab === 'margin' && (
                                        <div className="animate__animated animate__fadeIn">
                                            <h3 className="fw-bold mb-4 text-center" style={{ color: "#0f4941" }}>Margin Calculator</h3>
                                            <div className="row g-4">
                                                <div className="col-md-6">
                                                    <label className="form-label fw-bold text-muted small">Currency Pair</label>
                                                    <select className="form-select form-select-lg bg-light border-0" value={marginPair} onChange={(e) => setMarginPair(e.target.value)}>
                                                        <option>EUR/USD</option>
                                                        <option>GBP/USD</option>
                                                        <option>USD/JPY</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="form-label fw-bold text-muted small">Leverage (1:X)</label>
                                                    <select className="form-select form-select-lg bg-light border-0" value={marginLeverage} onChange={(e) => setMarginLeverage(Number(e.target.value))}>
                                                        <option value="100">1:100</option>
                                                        <option value="200">1:200</option>
                                                        <option value="500">1:500</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-12">
                                                    <label className="form-label fw-bold text-muted small">Trade Size (Lots)</label>
                                                    <input type="number" className="form-control form-control-lg bg-light border-0" value={marginSize} onChange={(e) => setMarginSize(Number(e.target.value))} />
                                                </div>
                                                <div className="col-12 text-center mt-4">
                                                    <button onClick={calculateMargin} className="btn btn-primary btn-lg rounded-pill px-5 fw-bold" style={{ backgroundColor: "#0f4941", border: "none" }}>
                                                        Calculate
                                                    </button>
                                                </div>
                                                {marginResult !== null && (
                                                    <div className="col-12 mt-4 text-center">
                                                        <div className="p-4 rounded-3" style={{ background: "linear-gradient(135deg, #e0f2fe 0%, #f0fdf4 100%)" }}>
                                                            <div className="small  fw-bold text-muted mb-1 text-uppercase">Required Margin</div>
                                                            <div className="display-4 fw-bold" style={{ color: "#0f4941" }}>${marginResult.toFixed(2)}</div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {/* PROFIT CALCULATOR */}
                                    {activeTab === 'profit' && (
                                        <div className="animate__animated animate__fadeIn">
                                            <h3 className="fw-bold mb-4 text-center" style={{ color: "#0f4941" }}>Profit/Loss Calculator</h3>
                                            <div className="row g-4">
                                                <div className="col-md-6">
                                                    <label className="form-label fw-bold text-muted small">Currency Pair</label>
                                                    <select className="form-select form-select-lg bg-light border-0" value={profitPair} onChange={(e) => setProfitPair(e.target.value)}>
                                                        <option>EUR/USD</option>
                                                        <option>GBP/USD</option>
                                                        <option>USD/JPY</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="form-label fw-bold text-muted small">Trade Size (Lots)</label>
                                                    <input type="number" className="form-control form-control-lg bg-light border-0" value={profitSize} onChange={(e) => setProfitSize(Number(e.target.value))} />
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="form-label fw-bold text-muted small">Open Price</label>
                                                    <input type="number" className="form-control form-control-lg bg-light border-0" placeholder="1.1000" value={openPrice} onChange={(e) => setOpenPrice(Number(e.target.value))} />
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="form-label fw-bold text-muted small">Close Price</label>
                                                    <input type="number" className="form-control form-control-lg bg-light border-0" placeholder="1.1050" value={closePrice} onChange={(e) => setClosePrice(Number(e.target.value))} />
                                                </div>
                                                <div className="col-12 text-center mt-4">
                                                    <button onClick={calculateProfit} className="btn btn-primary btn-lg rounded-pill px-5 fw-bold" style={{ backgroundColor: "#0f4941", border: "none" }}>
                                                        Calculate
                                                    </button>
                                                </div>
                                                {profitResult !== null && (
                                                    <div className="col-12 mt-4 text-center">
                                                        <div className={`p-4 rounded-3 ${profitResult >= 0 ? 'bg-success bg-opacity-10' : 'bg-danger bg-opacity-10'}`} style={{ transition: 'all 0.3s' }}>
                                                            <div className="small fw-bold text-muted mb-1 text-uppercase">Projected Profit</div>
                                                            <div className={`display-4 fw-bold ${profitResult >= 0 ? 'text-success' : 'text-danger'}`}>
                                                                {profitResult >= 0 ? '+' : ''}${profitResult.toFixed(2)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-5 bg-light">
                <div className="container text-center">
                    <h2 className="fw-bold mb-4" style={{ color: "#0f4941" }}>Ready to Apply Your Strategy?</h2>
                    <p className="text-secondary mb-4 mx-auto" style={{ maxWidth: "600px" }}>
                        Now that you've calculated your potential, execute your trade with Flexy Markets' low spreads and fast execution.
                    </p>
                    <a href="https://user.flexymarkets.com/accounts/signUps" className="btn btn-primary rounded-pill fw-bold px-5 py-3 shadow-lg"
                        style={{ backgroundColor: "#0f4941", border: "none" }}>
                        Open Live Account
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
