"use client";

import { useState } from 'react';
import Link from 'next/link';

interface MarketData {
    symbol: string;
    name: string;
    avgSpread: string;
    lowSpread: string;
    leverage: string;
    icon?: string; // Flag or Icon URL
    iconClass?: string; // FontAwesome Class
    color?: string; // Icon Color
}

interface MarketTableProps {
    title?: string;
    description?: string;
    standardData: MarketData[];
    ultraData: MarketData[];
}

export default function GenericMarketTable({
    title = "Pick Your Pairs",
    description = "The market operates Monday – Friday 00:05 – 23:50 GMT+2",
    standardData,
    ultraData
}: MarketTableProps) {
    const [activeTab, setActiveTab] = useState<'Standard' | 'Ultra'>('Standard');

    const currentData = activeTab === 'Standard' ? standardData : ultraData;

    return (
        <section className="py-5 bg-white">
            <div className="container">
                <div className="text-center mb-5">
                    {/* CONFIRMED: No separator line here */}
                    <h2 className="fw-bold mb-3" style={{ fontSize: "2.5rem", color: "#0f4941" }}>{title}</h2>
                    <p className="text-muted" style={{ fontSize: "16px" }}>
                        {description}
                    </p>
                </div>

                {/* Tabs */}
                <div className="d-flex justify-content-center mb-4">
                    <div className="d-flex p-1" style={{ backgroundColor: "#f5f5f5", borderRadius: "8px" }}>
                        <button
                            className={`btn fw-bold px-4 py-2 ${activeTab === 'Standard' ? 'bg-white shadow-sm text-dark' : 'text-muted'}`}
                            style={{ border: "none", transition: "all 0.2s" }}
                            onClick={() => setActiveTab('Standard')}
                        >
                            Standard
                        </button>
                        <button
                            className={`btn fw-bold px-4 py-2 ${activeTab === 'Ultra' ? 'bg-white shadow-sm text-dark' : 'text-muted'}`}
                            style={{ borderRadius: "6px", border: "none", transition: "all 0.2s" }}
                            onClick={() => setActiveTab('Ultra')}
                        >
                            Ultra Low Standard
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="table-responsive shadow-sm" style={{ borderRadius: "12px", border: "1px solid #eee" }}>
                    <table className="table table-hover align-middle mb-0" style={{ minWidth: "800px" }}>
                        <thead className="bg-light">
                            <tr style={{ fontSize: "14px", color: "#666" }}>
                                <th className="py-3 ps-4">Instrument</th>
                                <th className="py-3">Name</th>
                                <th className="py-3 text-center">Average Spread</th>
                                <th className="py-3 text-center">Low As</th>
                                <th className="py-3 text-center">Max Leverage</th>
                                <th className="py-3 text-end pe-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentData.map((item, index) => (
                                <tr key={index} style={{ borderBottom: "1px solid #f0f0f0" }}>
                                    <td className="ps-4 py-3 fw-bold text-dark d-flex align-items-center">
                                        {item.iconClass ? (
                                            <i className={`${item.iconClass} me-2`} style={{ fontSize: "20px", color: item.color || "#0f4941", width: "24px", textAlign: "center" }}></i>
                                        ) : (
                                            item.icon && <img src={item.icon} alt="" width="24" height="24" className="me-2 rounded-circle" style={{ objectFit: 'contain' }} />
                                        )}
                                        {item.symbol}
                                    </td>
                                    <td className="text-muted">{item.name}</td>
                                    <td className="text-center fw-bold text-dark">{item.avgSpread}</td>
                                    <td className="text-center text-muted">{item.lowSpread}</td>
                                    <td className="text-center text-success fw-bold">1:{item.leverage}</td>
                                    <td className="text-end pe-4">
                                        <button
                                            className="btn btn-sm fw-bold text-white rounded-pill px-4 shadow-sm hover-lift"
                                            style={{ backgroundColor: "#0f664a", border: "none", transition: "all 0.3s ease" }}
                                        >
                                            Trade
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* See More */}
                <div className="text-center p-4 mt-4" style={{ backgroundColor: "#fff" }}>
                    <p className="fw-bold mb-3 text-dark">Ready to discover more instruments?</p>
                    <a href="https://user.flexymarkets.com/accounts/signUps" style={{ textDecoration: 'none' }}>
                        <button
                            className="btn btn-primary fw-bold px-4 py-2"
                        >
                            Register to See More
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}
