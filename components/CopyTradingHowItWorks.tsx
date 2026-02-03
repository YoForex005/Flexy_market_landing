"use client";

export default function CopyTradingHowItWorks() {
    const steps = [
        {
            number: "1",
            title: "Choose a Strategy",
            description: "Browse thousands of verified Strategy Managers and select the one that matches your goals and risk tolerance.",
            icon: "fa-search-dollar"
        },
        {
            number: "2",
            title: "Start Copying",
            description: "Connect your account and automatically replicate the trades of your chosen Strategy Manager in real-time.",
            icon: "fa-copy"
        },
        {
            number: "3",
            title: "Watch & Earn",
            description: "Monitor your portfolio's performance and watch your investments grow while learning from the experts.",
            icon: "fa-chart-line-up"
        }
    ];

    return (
        <section id="how-it-works" className="how-it-works py-5" style={{
            background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
            paddingTop: '100px !important',
            paddingBottom: '100px !important'
        }}>
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-5 pb-4">
                    <div className="d-inline-block px-4 py-2 rounded-pill mb-3"
                        style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                        <span style={{ fontSize: '14px', fontWeight: 600, color: '#0f664a' }}>
                            <i className="fas fa-rocket me-2"></i>
                            SIMPLE PROCESS
                        </span>
                    </div>
                    <h2 className="display-5 fw-bold mb-3" style={{ color: '#1a1a1a' }}>
                        How Copy Trading Works
                    </h2>
                    <p className="lead text-muted mx-auto" style={{ maxWidth: '650px' }}>
                        Get started in three simple steps. No trading experience required.
                    </p>
                </div>

                {/* Steps */}
                <div className="row g-4 align-items-center">
                    {steps.map((step, index) => (
                        <div key={index} className="col-12">
                            <div className="row align-items-center g-4">
                                <div className="col-lg-1 text-center">
                                    <div className="step-number mx-auto d-flex align-items-center justify-content-center rounded-circle fw-bold"
                                        style={{
                                            width: '70px',
                                            height: '70px',
                                            background: 'linear-gradient(135deg, #0f664a 0%, #0d5a40 100%)',
                                            color: '#fff',
                                            fontSize: '32px',
                                            boxShadow: '0 4px 12px rgba(15, 102, 74, 0.3)'
                                        }}>
                                        {step.number}
                                    </div>
                                    {index < steps.length - 1 && (
                                        <div className="connector mx-auto mt-3"
                                            style={{
                                                width: '3px',
                                                height: '80px',
                                                background: 'linear-gradient(180deg, #0f664a 0%, #bbf7d0 100%)',
                                                borderRadius: '2px'
                                            }}></div>
                                    )}
                                </div>
                                <div className="col-lg-11">
                                    <div className="step-card p-4 rounded-4 h-100"
                                        style={{
                                            background: '#fff',
                                            border: '2px solid #e5e7eb',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor = '#0f664a';
                                            e.currentTarget.style.boxShadow = '0 8px 20px rgba(15, 102, 74, 0.1)';
                                            e.currentTarget.style.transform = 'translateX(10px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor = '#e5e7eb';
                                            e.currentTarget.style.boxShadow = 'none';
                                            e.currentTarget.style.transform = 'translateX(0)';
                                        }}>
                                        <div className="row align-items-center">
                                            <div className="col-md-2 text-center mb-3 mb-md-0">
                                                <div className="icon-box mx-auto d-flex align-items-center justify-content-center rounded-3"
                                                    style={{
                                                        width: '80px',
                                                        height: '80px',
                                                        background: '#f0fdf4'
                                                    }}>
                                                    <i className={`fas ${step.icon}`}
                                                        style={{ fontSize: '36px', color: '#0f664a' }}></i>
                                                </div>
                                            </div>
                                            <div className="col-md-10">
                                                <h4 className="fw-bold mb-2" style={{ color: '#1a1a1a', fontSize: '1.5rem' }}>
                                                    {step.title}
                                                </h4>
                                                <p className="mb-0 text-muted" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-5 pt-4">
                    <a
                        href="https://user.flexymarkets.com/accounts/signIn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary px-5 py-3 fw-bold"
                        style={{
                            fontSize: '15px',
                            borderRadius: '8px',
                            background: 'linear-gradient(135deg, #0f664a 0%, #0d5a40 100%)',
                            border: 'none',
                            boxShadow: '0 4px 12px rgba(15, 102, 74, 0.3)'
                        }}>
                        Get Started Now
                        <i className="fas fa-arrow-right ms-2"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}
