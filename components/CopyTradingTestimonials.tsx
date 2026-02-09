"use client";

export default function CopyTradingTestimonials() {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Copy Trader",
            image: "👩‍💼",
            rating: 5,
            text: "I&apos;ve been copying trades for 6 months and my portfolio is up 32%. The platform is incredibly easy to use, even for beginners like me.",
            profit: "+32% ROI",
            duration: "6 months"
        },
        {
            name: "Michael Chen",
            role: "Active Investor",
            image: "👨‍💻",
            rating: 5,
            text: "As someone with a busy schedule, copy trading has been a game-changer. I can invest without spending hours analyzing markets.",
            profit: "+45% ROI",
            duration: "1 year"
        },
        {
            name: "Emma Williams",
            role: "New Trader",
            image: "👩‍🎓",
            rating: 5,
            text: "Started with zero experience. Copying expert traders helped me learn while earning. Best decision I made for my financial future!",
            profit: "+28% ROI",
            duration: "4 months"
        }
    ];

    return (
        <section className="copy-trading-testimonials py-5" style={{
            background: '#fff',
            paddingTop: '100px !important',
            paddingBottom: '100px !important'
        }}>
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-5 pb-3">
                    <div className="d-inline-block px-4 py-2 rounded-pill mb-3"
                        style={{ background: '#fff7ed', border: '1px solid #fed7aa' }}>
                        <span style={{ fontSize: '14px', fontWeight: 600, color: '#ea580c' }}>
                            <i className="fas fa-star me-2"></i>
                            SUCCESS STORIES
                        </span>
                    </div>
                    <h2 className="display-5 fw-bold mb-3" style={{ color: '#1a1a1a' }}>
                        Trusted by Thousands of Traders
                    </h2>
                    <p className="lead text-muted mx-auto" style={{ maxWidth: '650px' }}>
                        See what our copy traders have to say about their experience
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="row g-4">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            <div className="testimonial-card p-4 rounded-4 h-100"
                                style={{
                                    background: '#fff',
                                    border: '2px solid #e5e7eb',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.1)';
                                    e.currentTarget.style.borderColor = '#0f664a';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.borderColor = '#e5e7eb';
                                }}>
                                {/* Rating Stars */}
                                <div className="mb-3">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <i key={i} className="fas fa-star" style={{ color: '#fbbf24', fontSize: '16px' }}></i>
                                    ))}
                                </div>

                                {/* Testimonial Text */}
                                <p className="mb-4" style={{
                                    color: '#4a5568',
                                    fontSize: '0.95rem',
                                    lineHeight: '1.7',
                                    fontStyle: 'italic'
                                }}>
                                    &quot;{testimonial.text}&quot;
                                </p>

                                {/* Stats */}
                                <div className="d-flex gap-3 mb-4 py-3 px-3 rounded-3" style={{ background: '#f8f9fa' }}>
                                    <div className="flex-fill text-center">
                                        <div className="fw-bold" style={{ color: '#0f664a', fontSize: '1.1rem' }}>
                                            {testimonial.profit}
                                        </div>
                                        <div className="text-muted small">Returns</div>
                                    </div>
                                    <div style={{ width: '1px', background: '#e5e7eb' }}></div>
                                    <div className="flex-fill text-center">
                                        <div className="fw-bold" style={{ color: '#1a1a1a', fontSize: '1.1rem' }}>
                                            {testimonial.duration}
                                        </div>
                                        <div className="text-muted small">Duration</div>
                                    </div>
                                </div>

                                {/* Author */}
                                <div className="d-flex align-items-center gap-3">
                                    <div className="avatar d-flex align-items-center justify-content-center rounded-circle"
                                        style={{
                                            width: '50px',
                                            height: '50px',
                                            background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
                                            fontSize: '24px'
                                        }}>
                                        {testimonial.image}
                                    </div>
                                    <div>
                                        <div className="fw-bold" style={{ color: '#1a1a1a' }}>
                                            {testimonial.name}
                                        </div>
                                        <div className="text-muted small">
                                            {testimonial.role}
                                        </div>
                                    </div>
                                    <i className="fas fa-badge-check ms-auto"
                                        style={{ color: '#0f664a', fontSize: '20px' }}></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
