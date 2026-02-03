"use client";

import Link from 'next/link';

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
                <a href="https://user.flexymarkets.com/accounts/signUp" style={{ textDecoration: 'none' }}>
                    <button
                        className="btn fw-bold px-5 py-3 text-white"
                        style={{
                            background: '#0f4941',
                            border: '1px solid #0f4941',
                            borderRadius: '50px',
                            fontSize: '18px',
                            boxShadow: '0 4px 15px rgba(15, 73, 65, 0.4)',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        Start Trading Now <i className="fas fa-arrow-right ms-2"></i>
                    </button>
                </a>
            </div>
        </section>
    );
}
