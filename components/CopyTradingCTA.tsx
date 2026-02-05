"use client";

export default function CopyTradingCTA() {
    return (
        <section className="dark-section copy-trading-cta position-relative py-5"
            style={{
                paddingTop: '100px !important',
                paddingBottom: '100px !important',
                overflow: 'hidden'
            }}>
            {/* Background Pattern */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: '(circle at 20% 50%, rgba(255,255,255,0.03) 1px, transparent 1px), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.03) 1px, transparent 1px)',
                backgroundSize: '50px 50px',
                opacity: 0.5
            }}></div>

            <div className="container position-relative text-center">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        {/* Badge */}
                        <div className="d-inline-block px-4 py-2 rounded-pill mb-4"
                            style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}>
                            <span style={{ fontSize: '14px', fontWeight: 600 }}>
                                <i className="fas fa-gift me-2"></i>
                                LIMITED OFFER
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h2 className="display-4 fw-bold mb-4" style={{ lineHeight: '1.2' }}>
                            Start Your Copy Trading Journey Today
                        </h2>

                        {/* Subheading */}
                        <p className="lead mb-4 opacity-90" style={{ fontSize: '1.15rem', maxWidth: '600px', margin: '0 auto' }}>
                            Join thousands of successful traders who are already earning by copying expert strategies.
                            No fees to start, full control of your funds.
                        </p>

                        {/* Benefits */}
                        <div className="row g-3 mb-5 justify-content-center">
                            <div className="col-md-4">
                                <div className="d-flex align-items-center justify-content-center gap-2">
                                    <i className="fas fa-check-circle" style={{ color: '#2ecc71', fontSize: '20px' }}></i>
                                    <span>Zero Starting Fees</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="d-flex align-items-center justify-content-center gap-2">
                                    <i className="fas fa-check-circle" style={{ color: '#2ecc71', fontSize: '20px' }}></i>
                                    <span>24/7 Support</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="d-flex align-items-center justify-content-center gap-2">
                                    <i className="fas fa-check-circle" style={{ color: '#2ecc71', fontSize: '20px' }}></i>
                                    <span>Regulated Platform</span>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="d-flex gap-3 justify-content-center flex-wrap">
                            <a
                                href="https://user.flexymarkets.com/accounts/signIns"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-light px-5 py-3 fw-bold"
                                style={{
                                    fontSize: '16px',
                                    borderRadius: '8px',
                                    color: '#0f4941',
                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                                }}
                            >
                                <i className="fas fa-rocket me-2"></i>
                                Start Copy Trading Now
                            </a>
                            <a
                                href="https://flexymarkets.com/contact"
                                className="btn btn-outline-light px-5 py-3 fw-bold"
                                style={{
                                    fontSize: '16px',
                                    borderRadius: '8px',
                                    borderWidth: '2px'
                                }}
                            >
                                <i className="fas fa-comments me-2"></i>
                                Talk to an Expert
                            </a>
                        </div>

                        {/* Trust Badge */}
                        <div className="mt-4 opacity-75">
                            <small>
                                <i className="fas fa-shield-check me-2"></i>
                                Your funds are protected under regulatory guidelines
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
