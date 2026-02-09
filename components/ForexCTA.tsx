"use client";



export default function ForexCTA() {
    return (
        <section className="py-5 bg-white text-center">
            <div className="container py-4">
                <h2 className="fw-bold mb-3" style={{ color: "#0f4941", fontSize: "2.5rem" }}>
                    Ready to Trade Forex With Us?
                </h2>
                <p className="mx-auto mb-5" style={{ color: "#0f4941", maxWidth: "700px" }}>
                    Join a truly global and regulated broker to explore your forex trading potential. Open an account within seconds.
                </p>
                <a href="https://user.flexymarkets.com/accounts/signUps" style={{ textDecoration: 'none' }}>
                    <button
                        className="btn btn-primary fw-bold px-5 py-3"
                        style={{
                            fontSize: '18px'
                        }}
                    >
                        Start Trading Now <i className="fas fa-arrow-right ms-2"></i>
                    </button>
                </a>
            </div>
        </section>
    );
}
