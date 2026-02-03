"use client";

import { useState } from 'react';

export default function CryptoTable() {
    const [activeTab, setActiveTab] = useState<'Standard' | 'Ultra'>('Standard');

    // Crypto Data - Providing realistic crypto pairs instead of copying Forex data error
    const standardData = [
        { symbol: "BTCUSD", name: "Bitcoin vs U.S. Dollar", avgSpread: "35.0", lowSpread: "30.0", leverage: "100", icon: "https://assets.coincap.io/assets/icons/btc@2x.png" },
        { symbol: "ETHUSD", name: "Ethereum vs U.S. Dollar", avgSpread: "2.5", lowSpread: "2.0", leverage: "100", icon: "https://assets.coincap.io/assets/icons/eth@2x.png" },
        { symbol: "LTCUSD", name: "Litecoin vs U.S. Dollar", avgSpread: "1.2", lowSpread: "1.0", leverage: "50", icon: "https://assets.coincap.io/assets/icons/ltc@2x.png" },
        { symbol: "XRPUSD", name: "Ripple vs U.S. Dollar", avgSpread: "0.04", lowSpread: "0.03", leverage: "50", icon: "https://assets.coincap.io/assets/icons/xrp@2x.png" },
        { symbol: "BCHUSD", name: "Bitcoin Cash vs U.S. Dollar", avgSpread: "3.5", lowSpread: "3.0", leverage: "50", icon: "https://assets.coincap.io/assets/icons/bch@2x.png" },
        { symbol: "SOLUSD", name: "Solana vs U.S. Dollar", avgSpread: "0.15", lowSpread: "0.12", leverage: "50", icon: "https://assets.coincap.io/assets/icons/sol@2x.png" },
        { symbol: "DOGEUSD", name: "Dogecoin vs U.S. Dollar", avgSpread: "0.002", lowSpread: "0.001", leverage: "20", icon: "https://assets.coincap.io/assets/icons/doge@2x.png" },
        { symbol: "ADAUSD", name: "Cardano vs U.S. Dollar", avgSpread: "0.004", lowSpread: "0.003", leverage: "50", icon: "https://assets.coincap.io/assets/icons/ada@2x.png" },
    ];

    const ultraData = [
        { symbol: "BTCUSD", name: "Bitcoin vs U.S. Dollar", avgSpread: "25.0", lowSpread: "20.0", leverage: "100", icon: "https://assets.coincap.io/assets/icons/btc@2x.png" },
        { symbol: "ETHUSD", name: "Ethereum vs U.S. Dollar", avgSpread: "1.8", lowSpread: "1.5", leverage: "100", icon: "https://assets.coincap.io/assets/icons/eth@2x.png" },
        { symbol: "LTCUSD", name: "Litecoin vs U.S. Dollar", avgSpread: "0.9", lowSpread: "0.8", leverage: "50", icon: "https://assets.coincap.io/assets/icons/ltc@2x.png" },
        { symbol: "XRPUSD", name: "Ripple vs U.S. Dollar", avgSpread: "0.03", lowSpread: "0.02", leverage: "50", icon: "https://assets.coincap.io/assets/icons/xrp@2x.png" },
        { symbol: "BCHUSD", name: "Bitcoin Cash vs U.S. Dollar", avgSpread: "2.8", lowSpread: "2.5", leverage: "50", icon: "https://assets.coincap.io/assets/icons/bch@2x.png" },
        { symbol: "SOLUSD", name: "Solana vs U.S. Dollar", avgSpread: "0.12", lowSpread: "0.10", leverage: "50", icon: "https://assets.coincap.io/assets/icons/sol@2x.png" },
        { symbol: "DOGEUSD", name: "Dogecoin vs U.S. Dollar", avgSpread: "0.0015", lowSpread: "0.001", leverage: "20", icon: "https://assets.coincap.io/assets/icons/doge@2x.png" },
        { symbol: "ADAUSD", name: "Cardano vs U.S. Dollar", avgSpread: "0.003", lowSpread: "0.002", leverage: "50", icon: "https://assets.coincap.io/assets/icons/ada@2x.png" },
    ];

    const currentData = activeTab === 'Standard' ? standardData : ultraData;

    return (
        <section className="py-5 bg-white">
            <div className="container">

                <div className="text-center mb-5">
                    <h2 className="fw-bold mb-3" style={{ fontSize: "2.5rem", color: "#0f4941" }}>Pick Your Pairs</h2>
                    <p className="text-muted" style={{ fontSize: "16px" }}>
                        The Forex market operates Monday – Friday 00:05 – 23:50 GMT+2
                        {/* Kept text "Forex market operates..." to match screenshot exactly as requested, even if illogical for crypto 24/7 */}
                    </p>
                </div>

                {/* Tabs */}
                <div className="d-flex justify-content-center mb-5">
                    <div className="d-inline-flex p-1 rounded" style={{ backgroundColor: "#f8f9fa", border: "1px solid #eee" }}>
                        <button
                            className={`btn fw-bold px-4 py-2 ${activeTab === 'Standard' ? 'active-tab' : 'inactive-tab'}`}
                            onClick={() => setActiveTab('Standard')}
                            style={{ borderRadius: "4px 0 0 4px" }}
                        >
                            Standard
                        </button>
                        <button
                            className={`btn fw-bold px-4 py-2 ${activeTab === 'Ultra' ? 'active-tab' : 'inactive-tab'}`}
                            onClick={() => setActiveTab('Ultra')}
                            style={{ borderRadius: "0 4px 4px 0" }}
                        >
                            Ultra Low Standard
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="table-responsive shadow-sm border rounded mb-5">
                    <table className="table mb-0 align-middle text-center">
                        <thead className="bg-light border-bottom">
                            <tr>
                                <th scope="col" className="py-3 text-start ps-5 text-dark fw-bold" style={{ width: "30%" }}>Symbol</th>
                                <th scope="col" className="py-3 text-dark fw-bold">Average Spread (pips)</th>
                                <th scope="col" className="py-3 text-dark fw-bold">Spread As Low As (pips)</th>
                                <th scope="col" className="py-3 text-dark fw-bold">Max Leverage</th>
                                <th scope="col" className="py-3 text-dark fw-bold">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentData.map((item, index) => (
                                <tr key={index} className="border-bottom hover-row">
                                    <td className="py-3 text-start ps-5">
                                        <div className="d-flex align-items-center">
                                            {/* Crypto Icon */}
                                            <div className="me-3 shadow-sm rounded-circle overflow-hidden bg-white d-flex align-items-center justify-content-center" style={{ width: "32px", height: "32px" }}>
                                                <img
                                                    src={item.icon}
                                                    alt={item.symbol}
                                                    style={{ width: "24px", height: "24px", objectFit: "contain" }}
                                                />
                                            </div>
                                            <div className="d-flex flex-column text-start">
                                                <span className="fw-bold fs-6" style={{ color: "#0f4941" }}>{item.symbol}</span>
                                                <span className="text-muted" style={{ fontSize: "11px" }}>{item.name}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3 fw-bold text-dark">{item.avgSpread}</td>
                                    <td className="py-3 fw-bold text-dark">{item.lowSpread}</td>
                                    <td className="py-3 fw-bold text-dark">{item.leverage}</td>
                                    <td className="py-3">
                                        <button
                                            className="btn fw-bold text-white px-4 py-1"
                                            style={{
                                                backgroundColor: "#012e27",
                                                borderRadius: "4px",
                                                fontSize: "14px",
                                                minWidth: "80px"
                                            }}
                                        >
                                            Trade
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Explore More Footer */}
                <div className="text-center p-4" style={{ backgroundColor: "#fff" }}>
                    <p className="fw-bold mb-3 text-dark">Explore beyond the top 10 Crypto Instruments! Ready to discover more?</p>
                    <button
                        className="btn fw-bold"
                        style={{
                            backgroundColor: "#012e27",
                            color: "#fff",
                            padding: "12px 30px",
                            fontSize: "15px",
                            borderRadius: "4px"
                        }}
                    >
                        Register to See More
                    </button>
                </div>

            </div>

            <style jsx>{`
                .active-tab {
                    background-color: #d1d5db;
                    color: #000;
                    border: 1px solid #d1d5db;
                }
                .inactive-tab {
                    background-color: transparent;
                    color: #6b7280;
                    border: 1px solid transparent;
                }
                .hover-row:hover {
                    background-color: #f9fafb;
                }
            `}</style>
        </section>
    );
}
