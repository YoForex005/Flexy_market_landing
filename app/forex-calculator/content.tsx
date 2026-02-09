"use client";

import { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function ForexCalculatorContent() {
    const [activeTab, setActiveTab] = useState('pip');

    // Pip Calculator State
    const [pipValues, setPipValues] = useState({ pair: 'EURUSD', lot: 1, accountCurrency: 'USD' });
    const [pipResult, setPipResult] = useState<number | null>(null);

    // Margin Calculator State
    const [marginValues, setMarginValues] = useState({ pair: 'EURUSD', lot: 1, leverage: 500 });
    const [marginResult, setMarginResult] = useState<number | null>(null);

    // Profit Calculator State
    const [profitValues, setProfitValues] = useState({ pair: 'EURUSD', lot: 1, openPrice: 0, closePrice: 0, direction: 'buy' });
    const [profitResult, setProfitResult] = useState<number | null>(null);

    const calculatePip = () => {
        // Simplified Logic for Demo
        setPipResult(pipValues.lot * 10);
    };

    const calculateMargin = () => {
        // Simplified Logic: (Lot * 100,000) / Leverage
        setMarginResult((marginValues.lot * 100000) / marginValues.leverage);
    };

    const calculateProfit = () => {
        // Simplified Logic
        const diff = profitValues.direction === 'buy'
            ? profitValues.closePrice - profitValues.openPrice
            : profitValues.openPrice - profitValues.closePrice;
        setProfitResult(diff * profitValues.lot * 100000);
    };

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
                        TRADING TOOLS
                    </span>
                    <h1 className="display-3 fw-bold mb-4 text-dark" style={{ letterSpacing: '-1.5px', lineHeight: '1.1' }}>
                        Forex Calculators<br />
                        <span style={{ color: '#0f4941' }}>Precise & Professional</span>
                    </h1>
                    <p className="fs-5 text-secondary mb-5 mx-auto lh-lg" style={{ maxWidth: '750px' }}>
                        Calculate your potential profits, margins, and pip values accurately.
                        Optimization your money management with our suite of free trading tools.
                    </p>
                </div>
            </section>

            {/* CALCULATOR INTERFACE */}
            <section className="py-5 bg-white">
                <div className="container">
                    <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
                        <div className="card-header bg-white border-bottom p-0">
                            <ul className="nav nav-tabs nav-fill border-0" id="calculatorTabs" role="tablist">
                                <li className="nav-item">
                                    <button className={`nav-link py-4 fw-bold border-0 ${activeTab === 'pip' ? 'text-success border-bottom border-success border-3 active' : 'text-secondary'}`}
                                        onClick={() => setActiveTab('pip')} style={{ backgroundColor: activeTab === 'pip' ? '#f8fafc' : 'white' }}>
                                        Pip Calculator
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className={`nav-link py-4 fw-bold border-0 ${activeTab === 'margin' ? 'text-success border-bottom border-success border-3 active' : 'text-secondary'}`}
                                        onClick={() => setActiveTab('margin')} style={{ backgroundColor: activeTab === 'margin' ? '#f8fafc' : 'white' }}>
                                        Margin Calculator
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className={`nav-link py-4 fw-bold border-0 ${activeTab === 'profit' ? 'text-success border-bottom border-success border-3 active' : 'text-secondary'}`}
                                        onClick={() => setActiveTab('profit')} style={{ backgroundColor: activeTab === 'profit' ? '#f8fafc' : 'white' }}>
                                        Profit Calculator
                                    </button>
                                </li>
                            </ul>
                        </div>

                        <div className="card-body p-5 bg-light">
                            {/* PIP CALCULATOR */}
                            {activeTab === 'pip' && (
                                <div className="row justify-content-center fade-in">
                                    <div className="col-lg-8">
                                        <div className="row g-3">
                                            <div className="col-md-4">
                                                <label className="form-label fw-bold">Currency Pair</label>
                                                <select className="form-select rounded-pill py-3" value={pipValues.pair} onChange={(e) => setPipValues({ ...pipValues, pair: e.target.value })}>
                                                    <option value="EURUSD">EUR/USD</option>
                                                    <option value="GBPUSD">GBP/USD</option>
                                                    <option value="USDJPY">USD/JPY</option>
                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <label className="form-label fw-bold">Lot Size</label>
                                                <input type="number" className="form-control rounded-pill py-3" value={pipValues.lot} onChange={(e) => setPipValues({ ...pipValues, lot: Number(e.target.value) })} />
                                            </div>
                                            <div className="col-md-4">
                                                <label className="form-label fw-bold">Account Currency</label>
                                                <select className="form-select rounded-pill py-3" value={pipValues.accountCurrency} onChange={(e) => setPipValues({ ...pipValues, accountCurrency: e.target.value })}>
                                                    <option value="USD">USD</option>
                                                    <option value="EUR">EUR</option>
                                                </select>
                                            </div>
                                            <div className="col-12 mt-4 text-center">
                                                <button className="btn btn-success fw-bold px-5 py-3 rounded-pill shadow" onClick={calculatePip}>Calculate Pip Value</button>
                                            </div>
                                            {pipResult !== null && (
                                                <div className="col-12 mt-4 text-center">
                                                    <div className="alert alert-success d-inline-block px-5 py-3 rounded-4 shadow-sm">
                                                        <span className="text-secondary small d-block">Pip Value:</span>
                                                        <span className="h2 fw-bold mb-0">${pipResult.toFixed(2)}</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* MARGIN CALCULATOR */}
                            {activeTab === 'margin' && (
                                <div className="row justify-content-center fade-in">
                                    <div className="col-lg-8">
                                        <div className="row g-3">
                                            <div className="col-md-4">
                                                <label className="form-label fw-bold">Currency Pair</label>
                                                <select className="form-select rounded-pill py-3" value={marginValues.pair} onChange={(e) => setMarginValues({ ...marginValues, pair: e.target.value })}>
                                                    <option value="EURUSD">EUR/USD</option>
                                                    <option value="GBPUSD">GBP/USD</option>
                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <label className="form-label fw-bold">Lot Size</label>
                                                <input type="number" className="form-control rounded-pill py-3" value={marginValues.lot} onChange={(e) => setMarginValues({ ...marginValues, lot: Number(e.target.value) })} />
                                            </div>
                                            <div className="col-md-4">
                                                <label className="form-label fw-bold">Leverage</label>
                                                <select className="form-select rounded-pill py-3" value={marginValues.leverage} onChange={(e) => setMarginValues({ ...marginValues, leverage: Number(e.target.value) })}>
                                                    <option value="100">1:100</option>
                                                    <option value="500">1:500</option>
                                                    <option value="1000">1:1000</option>
                                                </select>
                                            </div>
                                            <div className="col-12 mt-4 text-center">
                                                <button className="btn btn-primary fw-bold px-5 py-3 rounded-pill shadow" style={{ backgroundColor: '#0f4941' }} onClick={calculateMargin}>Calculate Margin</button>
                                            </div>
                                            {marginResult !== null && (
                                                <div className="col-12 mt-4 text-center">
                                                    <div className="alert alert-primary d-inline-block px-5 py-3 rounded-4 shadow-sm" style={{ backgroundColor: '#e6fffa', borderColor: '#b2f5ea', color: '#0f4941' }}>
                                                        <span className="small d-block opacity-75">Required Margin:</span>
                                                        <span className="h2 fw-bold mb-0">${marginResult.toFixed(2)}</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* PROFIT CALCULATOR */}
                            {activeTab === 'profit' && (
                                <div className="row justify-content-center fade-in">
                                    <div className="col-lg-8">
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label className="form-label fw-bold">Direction</label>
                                                <div className="d-flex gap-3">
                                                    <label className={`btn flex-grow-1 rounded-pill fw-bold ${profitValues.direction === 'buy' ? 'btn-success' : 'btn-outline-secondary'}`}>
                                                        <input type="radio" className="d-none" name="direction" onChange={() => setProfitValues({ ...profitValues, direction: 'buy' })} checked={profitValues.direction === 'buy'} /> Buy
                                                    </label>
                                                    <label className={`btn flex-grow-1 rounded-pill fw-bold ${profitValues.direction === 'sell' ? 'btn-danger' : 'btn-outline-secondary'}`}>
                                                        <input type="radio" className="d-none" name="direction" onChange={() => setProfitValues({ ...profitValues, direction: 'sell' })} checked={profitValues.direction === 'sell'} /> Sell
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label fw-bold">Lot Size</label>
                                                <input type="number" className="form-control rounded-pill py-3" value={profitValues.lot} onChange={(e) => setProfitValues({ ...profitValues, lot: Number(e.target.value) })} />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label fw-bold">Open Price</label>
                                                <input type="number" className="form-control rounded-pill py-3" value={profitValues.openPrice} onChange={(e) => setProfitValues({ ...profitValues, openPrice: Number(e.target.value) })} />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label fw-bold">Close Price</label>
                                                <input type="number" className="form-control rounded-pill py-3" value={profitValues.closePrice} onChange={(e) => setProfitValues({ ...profitValues, closePrice: Number(e.target.value) })} />
                                            </div>
                                            <div className="col-12 mt-4 text-center">
                                                <button className="btn btn-dark fw-bold px-5 py-3 rounded-pill shadow" onClick={calculateProfit}>Calculate Profit</button>
                                            </div>
                                            {profitResult !== null && (
                                                <div className="col-12 mt-4 text-center">
                                                    <div className={`alert d-inline-block px-5 py-3 rounded-4 shadow-sm ${profitResult >= 0 ? 'alert-success' : 'alert-danger'}`}>
                                                        <span className="small d-block opacity-75">Profit/Loss:</span>
                                                        <span className="h2 fw-bold mb-0">${profitResult.toFixed(2)}</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}

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
                .fade-in { animation: fadeIn 0.5s ease-in-out; }
                @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
            `}</style>

            <Footer />
        </main>
    );
}
