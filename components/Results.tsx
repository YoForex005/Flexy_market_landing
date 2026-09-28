"use client";

import Image from 'next/image';
import Link from 'next/link';
import candlestickImg from '../public/images/candlestick-chart-3d.webp';
import graduationImg from '../public/images/graduation-cap-3d.webp';
import AnimatedBackground from './AnimatedBackground';

export default function Results() {
    return (
        <div className="result py-5 position-relative" style={{ background: '#fcfcfc' }}>
            {/* Premium Financial Aurora Background */}
            <AnimatedBackground variant="aurora" />
            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div className="result_in text-center">
                    <div className="results_proven_in_main mb-4" style={{ marginBottom: '20px', paddingBottom: '50px' }}>
                        <h2 className="display-4 fw-bold mb-3" style={{ color: '#000' }}>
                            Understand Your Trading Conditions
                        </h2>
                        <p className="text-muted fw-normal" style={{ fontSize: '20px' }}>
                            Review account costs, order execution and margin requirements before opening a trading account.
                        </p>
                    </div>

                    <div className="row g-4 mb-5">
                        <div className="col-lg-4">
                            <div className="p-4 p-lg-5 bg-white rounded-5 shadow-sm border h-100">
                                <h3 className="fw-bold mb-3" style={{ color: '#0f664a', fontSize: 'clamp(36px, 4vw, 50px)' }}>
                                    Accounts
                                </h3>
                                <p className="text-muted mb-0"><Link href="/account">Compare account types</Link>, minimum deposits, spreads and commissions.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="p-4 p-lg-5 bg-white rounded-5 shadow-sm border h-100 d-flex flex-column justify-content-center">
                                <h3 className="fw-bold mb-3" style={{ color: '#0f664a', fontSize: 'clamp(36px, 4vw, 50px)' }}>Execution</h3>
                                <p className="text-muted mb-0">Read the <Link href="/execution-policy">order execution policy</Link> for information about how orders are handled.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="p-4 p-lg-5 bg-white rounded-5 shadow-sm border h-100">
                                <h3 className="fw-bold mb-3" style={{ color: '#0f664a', fontSize: 'clamp(36px, 4vw, 50px)' }}>
                                    Margin
                                </h3>
                                <p className="text-muted mb-0">Review <Link href="/margin-leverage">margin and leverage information</Link> and the conditions that apply to trading.</p>
                            </div>
                        </div>
                    </div>


                    <div className="mt-5">

                        <a
                            href="https://user.flexymarkets.com/accounts/signUps"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-lg rounded-pill px-5 py-3 d-inline-flex align-items-center gap-2 magic-hover-btn"
                        >
                            Open a Trading Account
                        </a>
                    </div>

                    {/* Safety Banner - Split Layout */}
                    <div className="safety-banner mt-5 rounded-5 position-relative overflow-hidden"
                        style={{
                            background: 'linear-gradient(135deg, #0a3d35 0%, #0f4941 100%)',
                            border: '1px solid rgba(46, 204, 113, 0.3)',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                        }}
                    >
                        {/* Glowing Border Animation */}
                        <div style={{
                            position: 'absolute',
                            inset: '0',
                            borderRadius: 'inherit',
                            padding: '1px',
                            background: 'linear-gradient(90deg, transparent, rgba(46, 204, 113, 0.5), transparent)',
                            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                            maskComposite: 'exclude',
                            WebkitMaskComposite: 'xor',
                            animation: 'borderFlow 4s linear infinite',
                            zIndex: 2
                        }}></div>

                        <div className="row g-0 align-items-center position-relative z-1">
                            {/* Content */}
                            <div className="col-12 p-5 text-center">
                                <div className="position-relative">
                                    {/* Subtle Watermark Icon behind text */}
                                    <i className="fas fa-shield-alt position-absolute" style={{
                                        fontSize: '150px',
                                        color: 'rgba(46, 204, 113, 0.05)',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        zIndex: -1
                                    }}></i>

                                    <h2 className="fw-bold mb-3 text-white display-6">Review the Terms and Trading Risks</h2>
                                    <p className="text-white-50 mb-0 mx-auto" style={{ fontSize: '1.1rem', letterSpacing: '0.5px', lineHeight: '1.6', maxWidth: '800px' }}>
                                        Trading involves significant risk and can result in the loss of your invested capital. Read our <Link href="/legal-documents" className="text-white text-decoration-underline">legal documents and risk disclosure</Link> before funding an account.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Every Trader Can Succeed Section */}
                <div className="trader-success-section mt-5 pt-5">
                    <div className="row text-center mb-5">
                        <div className="col-12">
                            <h2 className="display-5 fw-bold mb-3" style={{ color: '#000' }}>Trading Education and Platform Features</h2>
                        </div>
                    </div>

                    <div className="row g-4">
                        {/* Card 1: Tailored Educational Resources */}
                        <div className="col-lg-6">
                            <div
                                className="discover-card h-100 rounded-5 p-4 p-md-5 overflow-hidden position-relative"
                                style={{
                                    background: 'linear-gradient(135deg, #0a3d35 0%, #0f4941 100%)',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                                    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                                    border: '1px solid rgba(15, 102, 74, 0.3)'
                                }}
                            >
                                <div className="row h-100 align-items-center">
                                    <div className="col-md-7 z-2 text-start">
                                        <h3 className="h2 fw-bold mb-3 text-white">Forex<br />Educational<br />Resources</h3>
                                        <p className="mb-4 text-white-50" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
                                            Explore forex guides and trading concepts in the learning centre, including platform use and risk management.
                                        </p>
                                        <Link
                                            href="/learning-centre"
                                            className="btn fw-bold rounded-pill px-4 py-2 text-white"
                                            style={{
                                                background: 'transparent',
                                                border: '2px solid rgba(46, 204, 113, 0.5)',
                                                transition: 'all 0.3s'
                                            }}
                                        >
                                            Explore Forex Education
                                        </Link>
                                    </div>
                                    <div className="col-md-5 z-1 mt-4 mt-md-0 d-flex justify-content-center position-relative">
                                        <div className="image-crop-container">
                                            <Image
                                                src={candlestickImg}
                                                alt=""
                                                className="img-fluid drop-shadow-3d zoom-image blend-screen"
                                                style={{
                                                    maxHeight: '250px',
                                                    width: 'auto',
                                                    height: 'auto',
                                                    filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))',
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Cutting-Edge Technology */}
                        <div className="col-lg-6">
                            <div
                                className="discover-card h-100 rounded-5 p-4 p-md-5 overflow-hidden position-relative"
                                style={{
                                    background: 'linear-gradient(135deg, #e8f5f0 0%, #d4ebe3 100%)',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                                    border: '1px solid rgba(15, 102, 74, 0.3)'
                                }}
                            >
                                <div className="row h-100 align-items-center">
                                    <div className="col-md-7 z-2 text-start">
                                        <h3 className="h2 fw-bold mb-3" style={{ color: '#0f4941' }}>RTX 5<br />Trading Platform</h3>
                                        <p className="mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.6', opacity: 0.9, color: '#344054' }}>
                                            View the RTX 5 trading interface and explore its charting, market analysis and account tools.
                                        </p>
                                        <Link
                                            href="/rtx5"
                                            className="btn fw-bold rounded-pill px-4 py-2"
                                            style={{
                                                background: 'transparent',
                                                border: '2px solid rgba(15, 102, 74, 0.5)',
                                                transition: 'all 0.3s',
                                                color: '#0f4941'
                                            }}
                                        >
                                            Explore the RTX 5 Platform
                                        </Link>
                                    </div>
                                    <div className="col-md-5 z-1 mt-4 mt-md-0 d-flex justify-content-center position-relative">
                                        <div className="image-crop-container">
                                            <Image
                                                src={graduationImg}
                                                alt=""
                                                className="img-fluid drop-shadow-3d zoom-image"
                                                style={{
                                                    maxHeight: '220px',
                                                    width: 'auto',
                                                    height: 'auto',
                                                    filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))',
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .magic-hover-btn {
                    background: #0f4941;
                    border: none;
                    font-weight: 700;
                    color: #fff;
                    box-shadow: 0 10px 20px rgba(15, 73, 65, 0.2);
                    transition: all 0.4s ease;
                    position: relative;
                    overflow: hidden;
                    z-index: 1;
                }
                
                .magic-hover-btn:hover {
                    transform: translateY(-3px) scale(1.02);
                    box-shadow: 0 20px 30px rgba(15, 73, 65, 0.4);
                    background: #0d3d36;
                }

                /* Shine Effect */
                .magic-hover-btn::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                        90deg, 
                        transparent, 
                        rgba(255, 255, 255, 0.2), 
                        transparent
                    );
                    transition: none;
                }
                
                .magic-hover-btn:hover::after {
                    left: 100%;
                    transition: 0.6s ease;
                }

                /* New Section Styles */
                .discover-card:hover {
                    transform: translateY(-10px) !important;
                }
                
                .image-crop-container {
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

                .blend-screen {
                    mix-blend-mode: screen; 
                }

                /* Interactive Features Section */
                .feature-card-interactive {
                    height: 350px;
                    cursor: pointer;
                    transition: transform 0.4s ease, box-shadow 0.4s ease;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
                }

                .feature-card-interactive:hover {
                    transform: translateY(-10px) scale(1.02);
                    box-shadow: 0 20px 50px rgba(0,0,0,0.25);
                }

                .feature-image {
                    object-fit: cover;
                    transition: transform 0.4s ease;
                }

                .feature-card-interactive:hover .feature-image {
                    transform: scale(1.1);
                }

                .feature-overlay {
                    background: linear-gradient(
                        135deg, 
                        rgba(15, 73, 65, 0.95) 0%, 
                        rgba(10, 50, 45, 0.98) 100%
                    );
                    backdrop-filter: blur(10px);
                    opacity: 0;
                    transition: opacity 0.4s ease;
                }

                .feature-card-interactive:hover .feature-overlay {
                    opacity: 1;
                }

                .feature-content {
                    transform: translateY(20px);
                    transition: transform 0.4s ease 0.1s;
                }

                .feature-card-interactive:hover .feature-content {
                    transform: translateY(0);
                }

                @media (max-width: 991px) {
                    .feature-card-interactive {
                        height: 300px;
                    }
                }

                @media (max-width: 767px) {
                    .feature-card-interactive {
                        height: 280px;
                    }
                }
            `}</style>
        </div >
    );
}
