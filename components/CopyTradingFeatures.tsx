"use client";

export default function CopyTradingFeatures() {
    const features = [
        {
            icon: "fa-copy",
            title: "Easy to Start",
            description: "Simply choose a Strategy Manager and start copying their trades automatically"
        },
        {
            icon: "fa-chart-line",
            title: "Proven Strategies",
            description: "Access thousands of verified strategies from experienced traders worldwide"
        },
        {
            icon: "fa-shield-alt",
            title: "Risk Control",
            description: "Set your own risk limits and stop-loss levels for complete control"
        },
        {
            icon: "fa-clock",
            title: "Save Time",
            description: "No need to monitor markets 24/7 - trades are executed automatically"
        },
        {
            icon: "fa-users",
            title: "Learn & Earn",
            description: "Watch how successful traders operate while earning from their expertise"
        },
        {
            icon: "fa-mobile-alt",
            title: "Trade Anywhere",
            description: "Manage your copy trading portfolio from any device, anytime"
        }
    ];

    return (
        <section className="copy-trading-features py-5" style={{ background: '#fff' }}>
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold mb-3" style={{ color: '#1a1a1a' }}>
                        Why Choose Copy Trading?
                    </h2>
                    <p className="lead text-muted" style={{ maxWidth: '700px', margin: '0 auto' }}>
                        Copy trading makes it simple for anyone to trade like a professional.
                        Here&apos;s why thousands of traders choose our platform.
                    </p>
                </div>

                <div className="row g-4">
                    {features.map((feature, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            <div className="feature-card p-4 h-100 rounded-3"
                                style={{
                                    background: '#f8f9fa',
                                    border: '1px solid #e5e7eb',
                                    transition: 'all 0.3s ease'
                                }}>
                                <div className="mb-3">
                                    <div className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle"
                                        style={{
                                            width: '60px',
                                            height: '60px',
                                            background: 'linear-gradient(135deg, #0f664a 0%, #0d5a40 100%)',
                                            color: '#fff'
                                        }}>
                                        <i className={`fas ${feature.icon}`} style={{ fontSize: '24px' }}></i>
                                    </div>
                                </div>
                                <h5 className="fw-bold mb-2" style={{ color: '#1a1a1a' }}>
                                    {feature.title}
                                </h5>
                                <p className="text-muted mb-0" style={{ fontSize: '14px' }}>
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .feature-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1) !important;
                    border-color: #0f664a !important;
                }
            `}</style>
        </section>
    );
}
