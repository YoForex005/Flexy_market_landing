"use client";

export default function CryptoFeatures() {
    const features = [
        {
            title: "Trade 24/7",
            description: "Tap into the crypto market around the clock, without interruption.",
            icon: "fa-clock"
        },
        {
            title: "Buy and Sell",
            description: "Buy and sell Crypto derivatives, taking advantage of all market conditions.",
            icon: "fa-exchange-alt"
        },
        {
            title: "Magnify Your Trades",
            description: "Boost the potential of your trades with variable leverage options.",
            icon: "fa-chart-line"
        },
        {
            title: "Forget Charges",
            description: "Trade with no hidden fees or charges so you can focus on what matters.",
            icon: "fa-wallet"
        }
    ];

    return (
        <section className="py-5" style={{ backgroundColor: "#011c16", color: "#fff" }}>
            <div className="container py-4">
                <div className="text-center mb-5">
                    {/* Title updated to 'Why Trade Crypto' to be logical, despite screenshot potentially saying Forex if it was a copy-paste */}
                    <h2 className="fw-bold mb-3" style={{ fontSize: "2.5rem" }}>Why Trade Crypto With Us?</h2>
                    <p className="text-white-50 mx-auto" style={{ maxWidth: "700px" }}>
                        Enter the world's most liquid market with the confidence of having a leading broker at your side.
                    </p>
                </div>

                <div className="row g-4">
                    {features.map((feature, index) => (
                        <div key={index} className="col-md-6">
                            <div className="p-4 rounded-3 h-100 d-flex align-items-center"
                                style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
                                <div className="me-4 flex-shrink-0 d-flex align-items-center justify-content-center"
                                    style={{ width: "60px", height: "60px", borderRadius: "50%", border: "1px solid #3b82f6" }}> {/* Blue outline icon style */}
                                    <i className={`fas ${feature.icon}`} style={{ fontSize: "24px", color: "#3b82f6" }}></i>
                                </div>
                                <div>
                                    <h5 className="fw-bold mb-2">{feature.title}</h5>
                                    <p className="text-white-50 mb-0 small">{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
