"use client";

import { useState } from 'react';

export default function ForexTable() {
    const [activeTab, setActiveTab] = useState<'Standard' | 'Ultra'>('Standard');

    // Standard Data
    const standardData = [
        { symbol: "USDJPY#", name: "Dollar vs Japanese Yen", avgSpread: "2.5", lowSpread: "2.0", leverage: "1,000", country: "us" },
        { symbol: "EURUSD#", name: "Euro vs U.S. Dollar", avgSpread: "2.0", lowSpread: "1.5", leverage: "1,000", country: "eu" },
        { symbol: "AUDUSD#", name: "Australian Dollar vs U.S. Dollar", avgSpread: "2.4", lowSpread: "2.3", leverage: "1,000", country: "au" },
        { symbol: "GBPJPY#", name: "Pound Sterling vs Japanese Yen", avgSpread: "3.8", lowSpread: "3.0", leverage: "1,000", country: "gb" },
        { symbol: "GBPUSD#", name: "Pound Sterling vs U.S. Dollar", avgSpread: "2.4", lowSpread: "1.8", leverage: "1,000", country: "gb" },
        { symbol: "EURJPY#", name: "Euro vs Japanese Yen", avgSpread: "3.2", lowSpread: "2.1", leverage: "1,000", country: "eu" },
        { symbol: "EURGBP#", name: "Euro vs Pound Sterling", avgSpread: "2.4", lowSpread: "1.8", leverage: "1,000", country: "eu" },
        { symbol: "USDCHF#", name: "U.S. Dollar vs Swiss Franc", avgSpread: "2.6", lowSpread: "1.9", leverage: "1,000", country: "us" },
        { symbol: "NZDUSD#", name: "New Zealand Dollar vs U.S. Dollar", avgSpread: "2.9", lowSpread: "2.8", leverage: "1,000", country: "nz" },
        { symbol: "EURCHF#", name: "Euro vs Swiss Franc", avgSpread: "3.3", lowSpread: "2.4", leverage: "1,000", country: "eu" },
    ];

    // Ultra Low Data (Based on screenshot)
    const ultraData = [
        { symbol: "USDJPY#", name: "Dollar vs Japanese Yen", avgSpread: "1.4", lowSpread: "0.9", leverage: "1,000", country: "us" },
        { symbol: "EURUSD#", name: "Euro vs U.S. Dollar", avgSpread: "1.2", lowSpread: "0.8", leverage: "1,000", country: "eu" },
        { symbol: "AUDUSD#", name: "Australian Dollar vs U.S. Dollar", avgSpread: "1.7", lowSpread: "1.7", leverage: "1,000", country: "au" },
        { symbol: "GBPUSD#", name: "Pound Sterling vs U.S. Dollar", avgSpread: "1.5", lowSpread: "0.8", leverage: "1,000", country: "gb" },
        { symbol: "EURJPY#", name: "Euro vs Japanese Yen", avgSpread: "2.5", lowSpread: "1.4", leverage: "1,000", country: "eu" },
        { symbol: "EURGBP#", name: "Euro vs Pound Sterling", avgSpread: "2.1", lowSpread: "1.5", leverage: "1,000", country: "eu" },
        { symbol: "EURGBP#", name: "Euro vs Pound Sterling", avgSpread: "2.1", lowSpread: "1.5", leverage: "1,000", country: "eu" }, // Duplicate as seen in screenshot
        { symbol: "USDCHF#", name: "U.S. Dollar vs Swiss Franc", avgSpread: "1.8", lowSpread: "1.1", leverage: "400", country: "us" },
        { symbol: "NZDUSD#", name: "New Zealand Dollar vs U.S. Dollar", avgSpread: "2.1", lowSpread: "2.0", leverage: "1,000", country: "nz" },
        { symbol: "EURCHF#", name: "Euro vs Swiss Franc", avgSpread: "1.8", lowSpread: "1.3", leverage: "400", country: "eu" },
    ];

    const currentData = activeTab === 'Standard' ? standardData : ultraData;

    return (
        <section className="py-5 bg-white">
            <div className="container">

                {/* Operating Hours Text */}
                <div className="text-center mb-5">
                    <h2 className="fw-bold mb-3" style={{ fontSize: "2.5rem", color: "#0f4941" }}>Pick Your Pairs</h2>
                    <p className="text-muted" style={{ fontSize: "16px" }}>
                        The Forex market operates Monday – Friday 00:05 – 23:50 GMT+2
                    </p>
                </div>

                {/* Tabs */}
                <div className="d-flex justify-content-center mb-5">
                    <div className="d-inline-flex p-1 rounded" style={{ backgroundColor: "#f8f9fa", border: "1px solid #eee" }}>
                        {/* Using a container for the joined tab look if desired, or keeping separate buttons */}
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
                                            {/* Flag Icon */}
                                            <div className="me-3 shadow-sm rounded-circle overflow-hidden" style={{ width: "24px", height: "24px" }}>
                                                <img
                                                    src={`https://flagcdn.com/w40/${item.country}.png`}
                                                    alt={item.country}
                                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
                    <p className="fw-bold mb-3 text-dark">Explore beyond the top 10 Forex Instruments! Ready to discover more?</p>
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
                    background-color: #d1d5db; /* Greyish active state */
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
