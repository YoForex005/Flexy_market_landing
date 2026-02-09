"use client";

interface Feature {
    title: string;
    description: string;
    iconClass: string;
}

interface MarketFeaturesProps {
    title?: string;
    features: Feature[];
}

export default function MarketFeatures({ title = "Why Trade With Us?", features }: MarketFeaturesProps) {
    return (
        <section className="dark-section py-5">
            <div className="container py-4">
                <div className="text-center mb-5">
                    <h2 className="fw-bold mb-3" style={{ fontSize: "2.5rem" }}>{title}</h2>
                    <p className="mx-auto" style={{ maxWidth: "700px" }}>
                        Enter the world&apos;s most liquid market with the confidence of having a leading broker at your side.
                    </p>
                </div>

                <div className="row g-4">
                    {features.map((feature, index) => (
                        <div key={index} className="col-md-6">
                            <div className="p-4 rounded-3 h-100 d-flex align-items-center"
                                style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
                                <div className="me-4 flex-shrink-0 d-flex align-items-center justify-content-center"
                                    style={{ width: "60px", height: "60px", borderRadius: "50%", border: "1px solid #3b82f6" }}>
                                    <i className={`fas ${feature.iconClass}`} style={{ fontSize: "24px", color: "#3b82f6" }}></i>
                                </div>
                                <div>
                                    <h5 className="fw-bold mb-2">{feature.title}</h5>
                                    <p className="mb-0 small">{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
