/* eslint-disable @next/next/no-img-element */
"use client";

import AnimatedBackground from './AnimatedBackground';

export default function PlatformHero() {
    return (
        <div className="platform-hero position-relative text-center" style={{ background: '#fcfcfc', minHeight: '600px' }}>
            <AnimatedBackground variant="aurora" intensity="subtle" />

            <div className="container" style={{ position: 'relative', zIndex: 10, paddingTop: '120px', paddingBottom: '100px' }}>
                {/* Badge */}
                <div
                    className="d-inline-flex align-items-center justify-content-center mb-4"
                    style={{
                        background: "rgba(15, 73, 65, 0.08)",
                        border: "1px solid rgba(15, 73, 65, 0.15)",
                        borderRadius: "30px",
                        padding: "8px 24px",
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#0f664a"
                    }}
                >
                    Platforms
                </div>

                {/* Main Heading */}
                <h1
                    className="display-3 fw-bold mb-5"
                    style={{
                        color: '#000',
                        fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                        marginBottom: '100px'
                    }}
                >
                    Get Flexy Markets MT5
                </h1>

                {/* Description */}
                <p
                    className="lead mx-auto"
                    style={{
                        fontSize: '1.2rem',
                        maxWidth: '900px',
                        color: '#666',
                        lineHeight: '1.8'
                    }}
                >
                    Begin trading on one of the industry's top multi-asset platforms and harness the strength of a trusted global broker.
                </p>
            </div>
        </div>
    );
}
