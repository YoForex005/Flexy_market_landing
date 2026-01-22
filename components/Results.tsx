/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Results() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(() => {
        const animateCounter = (setter: (v: number) => void, target: number) => {
            let current = 0;
            const duration = 1500;
            const startTime = performance.now();

            const update = (currentTime: number) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                current = progress * target;
                setter(parseFloat(current.toFixed(2)));

                if (progress < 1) {
                    requestAnimationFrame(update);
                }
            };

            requestAnimationFrame(update);
        };

        setTimeout(() => {
            animateCounter(setCount1, 2.37);
            animateCounter(setCount2, 90.1);
        }, 500);
    }, []);

    return (
        <div className="result py-5" style={{ background: '#fcfcfc' }}>
            <div className="container">
                <div className="result_in text-center">
                    <div className="results_proven_in_main mb-4" style={{ marginBottom: '20px', paddingBottom: '50px' }}>
                        <h2 className="display-4 fw-bold mb-3" style={{ color: '#000' }}>
                            Our Results Are Proven in Numbers
                        </h2>
                        <h5 className="text-muted fw-normal" style={{ fontSize: '20px' }}>
                            Nobody does more to provide you with what you need to maximise your trading potential.
                        </h5>
                    </div>

                    <div className="row g-4 mb-5">
                        <div className="col-lg-4">
                            <div className="p-5 bg-white rounded-5 shadow-sm border h-100">
                                <h1 className="fw-bold mb-3" style={{ color: '#12685a', fontSize: '50px' }}>
                                    {count1} Billion
                                </h1>
                                <p className="text-muted mb-0">trades have been executed on flexyMarket.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="p-5 bg-white rounded-5 shadow-sm border h-100 d-flex flex-column justify-content-center">
                                <h1 className="fw-bold mb-3" style={{ color: '#12685a', fontSize: '50px' }}>ZERO</h1>
                                <p className="text-muted mb-0">rejections or requotes on trades.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="p-5 bg-white rounded-5 shadow-sm border h-100">
                                <h1 className="fw-bold mb-3" style={{ color: '#0f664a', fontSize: '50px' }}>
                                    {count2}%
                                </h1>
                                <p className="text-muted mb-0">of our withdrawals are automatically approved.</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial Section */}
                    <div className="testimonial-section mt-5 py-5 rounded-4" style={{ background: '#f5f5f5' }}>
                        <div className="row justify-content-center align-items-center mb-4">
                            <div className="col-auto">
                                <img src="/images/trustpilot-logo.png" alt="Trustpilot" style={{ width: '150px' }} />
                            </div>
                            <div className="col-auto">
                                <span style={{ fontSize: '18px', fontWeight: 600 }}>Excellent</span>
                            </div>
                        </div>

                        <div className="row g-4 px-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="col-md-4 text-start">
                                    <div className="bg-white p-4 rounded-4 shadow-sm border h-100">
                                        <div className="mb-2 text-warning">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <h6 className="fw-bold mb-2">Great Trading Experience</h6>
                                        <p className="text-muted small">
                                            &quot;Flexy Markets provides a very smooth platform with excellent execution speed. Highly recommend!&quot;
                                        </p>
                                        <div className="mt-3">
                                            <small className="fw-bold">Trader {i}</small>
                                            <br />
                                            <small className="text-muted">Verified Trader</small>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-5">
                        <Link
                            href="https://user.flexymarkets.com/accounts/signUp"
                            className="btn btn-success btn-lg rounded-pill px-5 py-3"
                            style={{ background: '#0f664a', border: 'none', fontWeight: 600 }}
                        >
                            Start Trading Today
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
