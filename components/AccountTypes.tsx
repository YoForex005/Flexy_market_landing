/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from 'react';
import AnimatedBackground from './AnimatedBackground';

interface AccountGroup {
    id: number;
    name: string;
    type: string;
    recomendation: string;
    message: string;
    minDeposit: string;
    spread: string;
    commission: string;
    leverage: number;
}

interface ApiResponse {
    status: boolean;
    message: string;
    data: {
        totalRecords: number;
        groupList: AccountGroup[];
    };
}

export default function AccountTypes() {
    const [accounts, setAccounts] = useState<AccountGroup[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('https://backend.flexymarkets.com/user/mt5/group/list-dashboard?page=1&sizePerPage=50')
            .then(res => res.json())
            .then((data: ApiResponse) => {
                if (data.status && data.data.groupList) {
                    // Filter only REAL accounts, exclude DEMO
                    const realAccounts = data.data.groupList.filter(acc => acc.type === 'REAL');
                    setAccounts(realAccounts);
                } else {
                    setError('Failed to load account types');
                }
                setLoading(false);
            })
            .catch(() => {
                setError('Failed to load account types');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="account-types py-5 position-relative" style={{ background: '#fcfcfc', minHeight: '400px' }}>
                <div className="container">
                    <div className="text-center py-5">
                        <div className="spinner-border text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="account-types py-5 position-relative" style={{ background: '#fcfcfc' }}>
                <div className="container">
                    <div className="alert alert-warning text-center" role="alert">
                        {error}
                    </div>
                </div>
            </div>
        );
    }

    // Find recommended account (Pro or first with recommendation)
    const recommendedId = accounts.find(acc => acc.name === 'Pro')?.id || accounts[0]?.id;

    return (
        <div className="account-types py-5 position-relative" style={{ background: '#fcfcfc' }}>
            <AnimatedBackground variant="waves" intensity="subtle" />

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                {/* Header */}
                <div className="row text-center mb-5">
                    <div className="col-12">
                        <h2 className="display-4 fw-bold mb-3" style={{ color: '#000' }}>
                            Open Your <span style={{ color: '#0f664a' }}>Account</span>
                        </h2>
                        <p className="lead text-muted mt-3 mx-auto" style={{ fontSize: '1.1rem', maxWidth: '700px' }}>
                            Choose the perfect account type for your trading journey. All accounts feature low spreads, fast execution, and powerful leverage.
                        </p>
                    </div>
                </div>

                {/* Account Cards */}
                <div className="row g-4">
                    {accounts.map((account) => {
                        const isRecommended = account.id === recommendedId;

                        return (
                            <div key={account.id} className="col-lg-4 col-md-6">
                                <div
                                    className={`account-card h-100 position-relative ${isRecommended ? 'recommended' : ''}`}
                                    style={{
                                        background: isRecommended
                                            ? 'linear-gradient(135deg, #0f664a 0%, #0a3d35 100%)'
                                            : '#fff',
                                        borderRadius: '24px',
                                        padding: '32px 28px',
                                        border: isRecommended ? 'none' : '2px solid #e5e5e5',
                                        boxShadow: isRecommended
                                            ? '0 20px 40px rgba(15, 102, 74, 0.3)'
                                            : '0 10px 30px rgba(0,0,0,0.08)',
                                        transition: 'all 0.4s ease',
                                        color: isRecommended ? '#fff' : '#000'
                                    }}
                                >
                                    {/* Recommended Badge */}
                                    {isRecommended && (
                                        <div
                                            className="position-absolute top-0 start-50 translate-middle"
                                            style={{
                                                background: '#ffd700',
                                                color: '#000',
                                                padding: '6px 20px',
                                                borderRadius: '20px',
                                                fontSize: '12px',
                                                fontWeight: 700,
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.5px'
                                            }}
                                        >
                                            ⭐ Recommended
                                        </div>
                                    )}

                                    {/* Account Name */}
                                    <h3
                                        className="fw-bold mb-2 mt-2"
                                        style={{
                                            fontSize: '28px',
                                            color: isRecommended ? '#fff' : '#0f664a'
                                        }}
                                    >
                                        {account.name}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className="mb-4"
                                        style={{
                                            fontSize: '15px',
                                            opacity: isRecommended ? 0.9 : 0.8,
                                            minHeight: '45px'
                                        }}
                                    >
                                        {account.message}
                                    </p>

                                    {/* Pricing */}
                                    <div className="mb-4">
                                        <div className="d-flex align-items-baseline mb-2">
                                            <span style={{ fontSize: '40px', fontWeight: 700 }}>
                                                ${account.minDeposit}
                                            </span>
                                            <span
                                                className="ms-2"
                                                style={{
                                                    fontSize: '14px',
                                                    opacity: 0.7
                                                }}
                                            >
                                                Minimum Deposit
                                            </span>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="mb-4">
                                        <div className="feature-item mb-3">
                                            <i className="fas fa-check-circle me-2" style={{ color: isRecommended ? '#25D366' : '#0f664a' }}></i>
                                            <span style={{ fontSize: '15px' }}>
                                                <strong>Spread from:</strong> {account.spread} pips
                                            </span>
                                        </div>
                                        <div className="feature-item mb-3">
                                            <i className="fas fa-check-circle me-2" style={{ color: isRecommended ? '#25D366' : '#0f664a' }}></i>
                                            <span style={{ fontSize: '15px' }}>
                                                <strong>Commission:</strong> {account.commission === '0' ? 'No Commission' : `$${account.commission}`}
                                            </span>
                                        </div>
                                        <div className="feature-item mb-3">
                                            <i className="fas fa-check-circle me-2" style={{ color: isRecommended ? '#25D366' : '#0f664a' }}></i>
                                            <span style={{ fontSize: '15px' }}>
                                                <strong>Leverage:</strong> Up to 1:{account.leverage}
                                            </span>
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <a
                                        href="https://user.flexymarkets.com/accounts/signUps"
                                        className="btn w-100 fw-bold py-3 rounded-pill"
                                        style={{
                                            background: isRecommended ? '#fff' : '#0f664a',
                                            color: isRecommended ? '#0f664a' : '#fff',
                                            border: 'none',
                                            fontSize: '16px',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        Get Started
                                        <i className="fas fa-arrow-right ms-2"></i>
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Hover Effects */}
            <style jsx>{`
                .account-card {
                    cursor: pointer;
                }
                
                .account-card:hover {
                    transform: translateY(-10px);
                }
                
                .account-card:not(.recommended):hover {
                    box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
                }
                
                .account-card.recommended:hover {
                    box-shadow: 0 25px 50px rgba(15, 102, 74, 0.4) !important;
                }
                
                .account-card .btn:hover {
                    transform: scale(1.05);
                    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
                }
            `}</style>
        </div>
    );
}
