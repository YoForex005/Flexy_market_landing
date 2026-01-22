/* eslint-disable @next/next/no-img-element */
"use client";

import Link from 'next/link';

export default function Discover() {
    return (
        <div className="discover my-5 py-5">
            <div className="container">
                <div className="row text-center mb-5">
                    <div className="col-lg-12">
                        <div className="discover_heading1">
                            <h2 className="display-4 fw-bold" style={{ color: '#000' }}>
                                Discover Our Traders&apos; <span style={{ color: '#0f664a' }}>Favourites</span>
                            </h2>
                        </div>
                        <div className="discover_subheading mt-3">
                            <p className="lead text-muted">
                                Explore some of our must-have products that keep everyone trading with us time and again.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="discover_items mt-5">
                    <div className="row g-4">
                        <div className="col-lg-7">
                            <div className="discover_col_main position-relative overflow-hidden rounded-4 shadow-sm h-100 p-4 slideup_animation" style={{ background: '#f8f9fa' }}>
                                <div className="row align-items-center h-100">
                                    <div className="col-md-6 order-md-2">
                                        <div className="discover_image">
                                            {/* Placeholder */}
                                            <img src="/images/cat_1.webp" alt="Seamless Trading" className="img-fluid rounded" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 order-md-1">
                                        <h2 className="h3 fw-bold mb-3" style={{ color: '#154941' }}>Seamless Trading</h2>
                                        <p className="text-muted mb-4">
                                            Get full access to Flexy Market&apos;s top-rated, award-winning trading platforms designed to make your trading journey smooth and profitable.
                                        </p>
                                        <Link href="https://user.flexymarkets.com/accounts/signUp" className="btn btn-outline-success rounded-pill px-4">join now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="discover_col_main position-relative overflow-hidden rounded-4 shadow-sm h-100 p-4 slideup_animation" style={{ background: '#f8f9fa' }}>
                                <div className="text-center">
                                    <div className="discover_image mb-4">
                                        <img src="/images/Maximize-Your-Returns.webp" alt="Maximize Returns" className="img-fluid rounded" style={{ maxHeight: '200px' }} />
                                    </div>
                                    <h2 className="h3 fw-bold mb-3" style={{ color: '#154941' }}>Maximize Your Returns</h2>
                                    <p className="text-muted mb-4">
                                        Use our extensive range of trading tools to minimize risk, maximize profits, and unlock your true trading potential.
                                    </p>
                                    <Link href="https://user.flexymarkets.com/accounts/signUp" className="btn btn-outline-success rounded-pill px-4">join now</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="discover_col_main position-relative overflow-hidden rounded-4 shadow-sm p-5 slideup_animation" style={{ background: '#f8f9fa', backgroundImage: 'url(/images/Competition.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className="row">
                                    <div className="col-md-6 bg-white bg-opacity-75 p-4 rounded-4">
                                        <h2 className="h3 fw-bold mb-3" style={{ color: '#154941' }}>Empower Your Strategy</h2>
                                        <p className="text-muted mb-4">
                                            Join 10,000+ traders leveraging expert strategies and insights to stay ahead in the game. Start your winning journey today.
                                        </p>
                                        <Link href="https://user.flexymarkets.com/accounts/signUp" className="btn btn-success rounded-pill px-4">join now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
