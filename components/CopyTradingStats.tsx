"use client";

export default function CopyTradingStats() {
    const stats = [
        {
            icon: "fa-chart-network",
            number: "4,000+",
            label: "Strategies Available",
            color: "#0f664a",
            bgColor: "#f0fdf4"
        },
        {
            icon: "fa-exchange-alt",
            number: "150,000+",
            label: "Daily Trades Executed",
            color: "#2563eb",
            bgColor: "#eff6ff"
        },
        {
            icon: "fa-users",
            number: "0-1.1M",
            label: "Copy Traders Worldwide",
            color: "#7c3aed",
            bgColor: "#f5f3ff"
        },
        {
            icon: "fa-award",
            number: "98%",
            label: "Success Rate",
            color: "#ea580c",
            bgColor: "#fff7ed"
        }
    ];

    return (
        <section className="copy-trading-stats py-5" style={{
            background: '#fff',
            borderTop: '1px solid #e5e7eb',
            borderBottom: '1px solid #e5e7eb'
        }}>
            <div className="container">
                <div className="row g-4">
                    {stats.map((stat, index) => (
                        <div key={index} className="col-lg-3 col-md-6">
                            <div className="stat-card h-100 p-4 rounded-4 text-center"
                                style={{
                                    background: '#fff',
                                    border: '1px solid #e5e7eb',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.08)';
                                    e.currentTarget.style.borderColor = stat.color;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.borderColor = '#e5e7eb';
                                }}>
                                <div className="icon-wrapper mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle"
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        background: stat.bgColor,
                                        transition: 'all 0.3s ease'
                                    }}>
                                    <i className={`fas ${stat.icon}`}
                                        style={{
                                            fontSize: '32px',
                                            color: stat.color
                                        }}></i>
                                </div>
                                <h3 className="fw-bold mb-2" style={{
                                    fontSize: '2.5rem',
                                    color: '#1a1a1a',
                                    lineHeight: '1'
                                }}>
                                    {stat.number}
                                </h3>
                                <p className="mb-0 text-muted" style={{
                                    fontSize: '0.95rem',
                                    fontWeight: 500
                                }}>
                                    {stat.label}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
