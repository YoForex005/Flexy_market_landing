"use client";

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { useEffect, useRef, useState } from 'react';


export default function EconomicCalendarContent() {
    // TradingView Widget Integration
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Clear previous content to prevent duplicates
        containerRef.current.innerHTML = '';

        const script = document.createElement('script');
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
        script.type = "text/javascript";
        script.async = true;

        // Add error handling for script loading
        script.onerror = () => {
            console.error('Failed to load TradingView widget script');
        };

        // Adjusted height to fit well within the bordered container
        script.innerHTML = JSON.stringify({
            "colorTheme": "light",
            "isTransparent": true,
            "width": "100%",
            "height": "800",
            "locale": "en",
            "importanceFilter": "-1,0,1",
            "countryFilter": "ar,au,br,ca,cn,fr,de,in,id,it,jp,kr,mx,ru,sa,za,tr,gb,us,eu"
        });

        const widgetContainer = document.createElement('div');
        widgetContainer.className = "tradingview-widget-container";

        const widgetDiv = document.createElement('div');
        widgetDiv.className = "tradingview-widget-container__widget";

        widgetContainer.appendChild(widgetDiv);
        widgetContainer.appendChild(script);

        containerRef.current.appendChild(widgetContainer);

        const container = containerRef.current;

        // Cleanup function
        return () => {
            if (container) {
                container.innerHTML = '';
            }
        };
    }, []);

    return (
        <main className="bg-white" style={{ minHeight: "100vh" }}>
            <NavBar />

            {/* HERO SECTION - Premium Light Gradient */}
            <section className="position-relative overflow-hidden text-center"
                style={{
                    background: 'radial-gradient(circle at 50% -20%, #ccfbf1 0%, #ffffff 60%)',
                    paddingTop: "140px",
                    paddingBottom: "80px"
                }}
            >
                {/* Background Decor */}
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ opacity: 0.6, pointerEvents: 'none' }}>
                    <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(15, 73, 65, 0.08) 0%, transparent 70%)' }}></div>
                    <div style={{ position: 'absolute', top: '20%', left: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(45, 212, 191, 0.1) 0%, transparent 70%)' }}></div>
                </div>

                <div className="container position-relative" style={{ zIndex: 2 }}>
                    <h1 className="display-3 fw-bold mb-4" style={{ letterSpacing: '-1px', color: '#0f4941' }}>
                        Economic Calendar
                    </h1>
                    <p className="text-secondary mb-5 fs-5 mx-auto" style={{ maxWidth: '700px' }}>
                        Stay ahead of the markets. Our fully updated Economic Calendar is your key to timely trading.
                    </p>
                    {/* Optional CTA if needed in hero */}
                    <div className="mb-5">
                        <a href="https://user.flexymarkets.com/accounts/signUps" className="btn btn-primary rounded-pill fw-bold px-4 py-2"
                            style={{ backgroundColor: "#0f664a", border: "1px solid #0f664a", color: "white" }}>
                            Start Trading Forex
                        </a>
                    </div>

                    {/* LIVE MARKET SESSIONS (Interactive Element) */}
                    <div className="d-flex flex-wrap justify-content-center gap-3">
                        {/* Helper to render session pill */}
                        {['Sydney', 'Tokyo', 'London', 'New York'].map((city, i) => (
                            <div key={city} className="bg-white px-4 py-2 rounded-pill shadow-sm d-flex align-items-center gap-2 border border-light"
                                style={{ minWidth: '140px', transition: 'transform 0.2s', cursor: 'default' }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div className={`rounded-circle ${i === 2 || i === 3 ? 'bg-success' : 'bg-secondary'}`}
                                    style={{ width: '8px', height: '8px', animation: i === 2 || i === 3 ? 'pulse 1.5s infinite' : 'none' }}></div>
                                <span className="fw-bold text-dark small">{city}</span>
                                <span className="text-muted small ms-auto" style={{ fontSize: '10px' }}>{i === 2 || i === 3 ? 'OPEN' : 'CLOSED'}</span>
                            </div>
                        ))}
                    </div>
                    <style jsx>{`
                        @keyframes pulse {
                            0% { box-shadow: 0 0 0 0 rgba(25, 135, 84, 0.4); }
                            70% { box-shadow: 0 0 0 6px rgba(25, 135, 84, 0); }
                            100% { box-shadow: 0 0 0 0 rgba(25, 135, 84, 0); }
                        }
                    `}</style>
                </div>
            </section>

            {/* CALENDAR WIDGET SECTION - Clean White Background */}
            <section className="py-5 position-relative">
                <div className="container">
                    {/* TradingView Widget Container - Full Width & Clean with Green Border */}
                    <div className="w-100" style={{
                        minHeight: "800px",
                        border: "2px solid #0f4941",
                        borderRadius: "24px",
                        overflow: "hidden",
                        padding: "10px" // Optional: gives a little breathing room inside the border
                    }}>
                        <div ref={containerRef} className="w-100 h-100"></div>
                    </div>

                    {/* Disclaimer Text */}
                    <div className="text-muted text-center mt-5 small">
                        <p className="mb-0">
                            Disclaimer: The Economic Calendar is provided for informational purposes only. Flexy Markets does not accept responsibility for any errors or inaccuracies in the data.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
