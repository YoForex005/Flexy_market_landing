"use client";

import Link from 'next/link';

export default function Support() {
    return (
        <div className="every_down py-5" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="every_heading mb-4">
                            <h2 className="display-4 fw-bold">Rely on Award-Winning Support</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="every_subheading every_low_sub mb-4">
                            <h5 className="text-muted">
                                Whenever you need us we&apos;re just a few seconds away, 24/7, in extensive language options.
                            </h5>
                        </div>
                        <div className="every_low_button">
                            <Link
                                href="https://flexymarkets.com/contact"
                                className="btn btn-lg rounded-pill px-5 py-3"
                                style={{ backgroundColor: '#114941', color: '#fff', border: 'none' }}
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
