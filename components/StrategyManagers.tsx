"use client";

import { useState } from 'react';

interface Strategy {
    id: number;
    name: string;
    username: string;
    roi: string;
    fee: string;
    winRatio: string;
    drawdown: string;
    investors: number;
    invested: string;
    ownFunds: string;
    badge: number;
}

const strategies: Strategy[] = [
    {
        id: 1,
        name: "雪球987k",
        username: "@jaceket",
        roi: "38.14%",
        fee: "18%",
        winRatio: "5.23",
        drawdown: "61%",
        investors: 289,
        invested: "$3,149",
        ownFunds: "$890",
        badge: 2
    },
    {
        id: 2,
        name: "EvoTrend",
        username: "@platinumfx",
        roi: "26.14%",
        fee: "15%",
        winRatio: "2.15",
        drawdown: "27%",
        investors: 0,
        invested: "$0",
        ownFunds: "$1,013",
        badge: 4
    },
    {
        id: 3,
        name: "BestGain",
        username: "@BESTE",
        roi: "24.16%",
        fee: "20%",
        winRatio: "3.04",
        drawdown: "51%",
        investors: 0,
        invested: "$0",
        ownFunds: "$2,815",
        badge: 10
    }
];

export default function StrategyManagers() {
    const [activeTab, setActiveTab] = useState('featured');

    return (
        <section className="strategy-managers py-5" style={{ background: '#fff' }}>
            <div className="container">
                {/* Tabs */}
                <div className="text-center mb-4">
                    <ul className="nav nav-pills justify-content-center gap-2">
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === 'featured' ? 'active' : ''}`}
                                onClick={() => setActiveTab('featured')}
                                style={{
                                    background: activeTab === 'featured' ? '#0f664a' : 'transparent',
                                    color: activeTab === 'featured' ? '#fff' : '#4a5568',
                                    border: 'none',
                                    borderRadius: '8px',
                                    padding: '8px 20px',
                                    fontSize: '14px',
                                    fontWeight: 500
                                }}
                            >
                                Featured
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === 'best' ? 'active' : ''}`}
                                onClick={() => setActiveTab('best')}
                                style={{
                                    background: activeTab === 'best' ? '#0f664a' : 'transparent',
                                    color: activeTab === 'best' ? '#fff' : '#4a5568',
                                    border: 'none',
                                    borderRadius: '8px',
                                    padding: '8px 20px',
                                    fontSize: '14px',
                                    fontWeight: 500
                                }}
                            >
                                Best Performers
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === 'invested' ? 'active' : ''}`}
                                onClick={() => setActiveTab('invested')}
                                style={{
                                    background: activeTab === 'invested' ? '#0f664a' : 'transparent',
                                    color: activeTab === 'invested' ? '#fff' : '#4a5568',
                                    border: 'none',
                                    borderRadius: '8px',
                                    padding: '8px 20px',
                                    fontSize: '14px',
                                    fontWeight: 500
                                }}
                            >
                                Most Invested
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === 'ratio' ? 'active' : ''}`}
                                onClick={() => setActiveTab('ratio')}
                                style={{
                                    background: activeTab === 'ratio' ? '#0f664a' : 'transparent',
                                    color: activeTab === 'ratio' ? '#fff' : '#4a5568',
                                    border: 'none',
                                    borderRadius: '8px',
                                    padding: '8px 20px',
                                    fontSize: '14px',
                                    fontWeight: 500
                                }}
                            >
                                High Win Ratio
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === 'risk' ? 'active' : ''}`}
                                onClick={() => setActiveTab('risk')}
                                style={{
                                    background: activeTab === 'risk' ? '#0f664a' : 'transparent',
                                    color: activeTab === 'risk' ? '#fff' : '#4a5568',
                                    border: 'none',
                                    borderRadius: '8px',
                                    padding: '8px 20px',
                                    fontSize: '14px',
                                    fontWeight: 500
                                }}
                            >
                                Low Risk
                            </button>
                        </li>
                    </ul>
                </div>

                {/* Strategy Cards */}
                <div className="row g-4">
                    {strategies.map((strategy) => (
                        <div key={strategy.id} className="col-lg-4 col-md-6">
                            <div className="strategy-card p-4 rounded-3"
                                style={{
                                    background: '#fff',
                                    border: '1px solid #e5e7eb',
                                    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                                    transition: 'all 0.2s'
                                }}>
                                {/* Header */}
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div>
                                        <div className="d-flex align-items-center gap-2 mb-1">
                                            <div className="fw-bold" style={{ fontSize: '18px', color: '#1a1a1a' }}>
                                                {strategy.name}
                                            </div>
                                            <div className="badge-icon d-flex align-items-center justify-content-center"
                                                style={{
                                                    width: '24px',
                                                    height: '24px',
                                                    background: '#0f664a',
                                                    borderRadius: '50%',
                                                    color: '#fff',
                                                    fontSize: '11px',
                                                    fontWeight: 600
                                                }}>
                                                {strategy.badge}
                                            </div>
                                        </div>
                                        <div className="text-muted" style={{ fontSize: '13px' }}>{strategy.username}</div>
                                    </div>
                                </div>

                                {/* ROI */}
                                <div className="text-center mb-3 py-3" style={{ background: '#f8f9fa', borderRadius: '8px' }}>
                                    <div className="display-5 fw-bold" style={{ color: '#10b981' }}>{strategy.roi}</div>
                                </div>

                                {/* Stats */}
                                <div className="mb-3">
                                    <div className="d-flex justify-content-between mb-2" style={{ fontSize: '13px' }}>
                                        <span className="text-muted">Fee: {strategy.fee}</span>
                                        <span>Win Ratio: {strategy.winRatio}</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2" style={{ fontSize: '13px' }}>
                                        <span>Drawdown: {strategy.drawdown}</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2" style={{ fontSize: '13px' }}>
                                        <span>Investors: {strategy.investors}</span>
                                        <span>Invested: {strategy.invested}</span>
                                    </div>
                                    <div style={{ fontSize: '13px' }}>
                                        <span>Own Funds: {strategy.ownFunds}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation */}
                <div className="text-center mt-4">
                    <button className="btn btn-outline-secondary btn-sm me-2" style={{ borderRadius: '8px' }}>
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <button className="btn btn-outline-secondary btn-sm" style={{ borderRadius: '8px' }}>
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>

            <style jsx>{`
                .strategy-card:hover {
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1) !important;
                    transform: translateY(-2px);
                }
            `}</style>
        </section>
    );
}
