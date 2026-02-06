/* eslint-disable @next/next/no-img-element */
"use client";

import Link from 'next/link';

export default function TradeView() {
    const markets = [
        {
            name: "Forex",
            description: "Trade 60+ currency pairs with tight spreads",
            href: "/forex-trading",
            gradient: "radial-gradient(circle at center, #173334 0%, #326262 100%)",
            image: "/images/forex.png",
            textColor: "white",
            buttonStyle: {
                background: 'transparent',
                border: '2px solid rgba(46, 204, 113, 0.5)',
                color: 'white'
            }
        },
        {
            name: "Crypto",
            description: "Access popular crypto CFDs 24/7",
            href: "/cryptocurrencies",
            gradient: "radial-gradient(circle at center, #a0b9b3 0%, #a0b9b3 30%, #deedea 100%)",
            image: "/images/Crypto.png",
            textColor: "#0f4941",
            buttonStyle: {
                background: 'transparent',
                border: '2px solid rgba(15, 102, 74, 0.3)',
                color: '#0f4941'
            }
        },
        {
            name: "Indices",
            description: "Trade global stock market indices",
            href: "/indices",
            gradient: "radial-gradient(circle at center, #173334 0%, #326262 100%)",
            image: "/images/Indices.png",
            textColor: "white",
            buttonStyle: {
                background: 'transparent',
                border: '2px solid rgba(46, 204, 113, 0.5)',
                color: 'white'
            }
        },
        {
            name: "Gold",
            description: "Trade commodities like gold, oil & more",
            href: "/commodities",
            gradient: "radial-gradient(circle at center, #a0b9b3 0%, #a0b9b3 30%, #deedea 100%)",
            image: "/images/gold.png",
            textColor: "#0f4941",
            buttonStyle: {
                background: 'transparent',
                border: '2px solid rgba(15, 102, 74, 0.3)',
                color: '#0f4941'
            }
        }
    ];

    return (
        <div className="trade-view-section">
            <div className="container">
                {/* Header */}
                <div className="row text-center mb-5">
                    <div className="col-12">
                        <h2 className="display-5 fw-bold mb-3" style={{ color: '#000', fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
                            Start Trading <span style={{ color: '#0f664a' }}>Today</span>
                        </h2>
                        <p className="lead text-muted" style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
                            Access over 1,400+ global instruments across multiple asset classes
                        </p>
                    </div>
                </div>

                {/* Market Cards - Matching Discover Style */}
                <div className="row g-4">
                    {markets.map((market, index) => (
                        <div key={index} className="col-lg-6">
                            <Link href={market.href} style={{ textDecoration: 'none' }}>
                                <div
                                    className="market-card-consistent h-100 rounded-5 p-4 p-md-5 overflow-hidden position-relative"
                                    style={{
                                        background: market.gradient,
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                                        transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                                        border: '1px solid rgba(15, 102, 74, 0.3)',
                                        minHeight: '280px'
                                    }}
                                >
                                    <div className="row h-100 align-items-center">
                                        <div className="col-md-7 z-2">
                                            <h3 className="h2 fw-bold mb-3" style={{ color: market.textColor }}>
                                                {market.name}
                                            </h3>
                                            <p className="mb-4" style={{
                                                color: market.textColor === 'white' ? 'rgba(255,255,255,0.75)' : '#344054',
                                                fontSize: '1.05rem',
                                                lineHeight: '1.6'
                                            }}>
                                                {market.description}
                                            </p>
                                            <button
                                                className="btn fw-bold rounded-pill px-4 py-2"
                                                style={{
                                                    ...market.buttonStyle,
                                                    transition: 'all 0.3s'
                                                }}
                                            >
                                                Trade Now
                                            </button>
                                        </div>
                                        <div className="col-md-5 z-1 mt-4 mt-md-0 d-flex justify-content-center position-relative">
                                            <div className="image-crop-container">
                                                <img
                                                    src={market.image}
                                                    alt={`${market.name} Trading`}
                                                    className="img-fluid drop-shadow-3d zoom-image"
                                                    style={{
                                                        maxHeight: '250px',
                                                        filter: market.textColor === 'white'
                                                            ? 'drop-shadow(0 10px 20px rgba(0,0,0,0.5)) brightness(1.15)'
                                                            : 'drop-shadow(0 10px 20px rgba(0,0,0,0.2))',
                                                        mixBlendMode: market.textColor === 'white' ? 'screen' : 'normal'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* Inline CSS - Matching Discover */}
            <style jsx>{`
                .trade-view-section {
                    padding-bottom: 4rem;
                    padding-top: 210px;
                }
                
                @media (max-width: 991px) {
                    .trade-view-section {
                        padding-top: 120px;
                        padding-bottom: 3rem;
                    }
                }
                
                @media (max-width: 768px) {
                    .trade-view-section {
                        padding-top: 80px;
                        padding-bottom: 2rem;
                    }
                }

                .market-card-consistent:hover {
                    transform: translateY(-10px) !important;
                }

                .image-crop-container {
                    overflow: hidden;
                    border-radius: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                }

                .zoom-image {
                    transform: scale(1.1);
                    width: auto;
                    object-fit: contain;
                }
            `}</style>
        </div>
    );
}
