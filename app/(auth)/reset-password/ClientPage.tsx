"use client";

import Link from 'next/link';
import AuthSplitLayout from '@/components/AuthSplitLayout';

export default function ResetPasswordPage() {
    const leftContent = (
        <>
            <h1 className="fw-bold mb-4" style={{ fontSize: "3.5rem", color: "#2c3e50" }}>
                <span style={{ color: "#0f4941" }}>Flexy Markets</span>
            </h1>
            <p className="lead mb-5 text-muted" style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                Reset your password securely and regain access to your Flexy account. Our recovery process ensures your account stays protected.
            </p>

            <h4 className="fw-bold mb-4" style={{ color: "#2c3e50" }}>Secure Password Recovery</h4>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-center text-muted">
                        <span className="me-3" style={{ color: "#f39c12", fontSize: "12px" }}>
                            <i className="fas fa-lock"></i>
                        </span>
                        Secure password recovery
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-center text-muted">
                        <span className="me-3" style={{ color: "#f39c12", fontSize: "12px" }}>
                            <i className="fas fa-bolt"></i>
                        </span>
                        Quick verification process
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-center text-muted">
                        <span className="me-3" style={{ color: "#f39c12", fontSize: "12px" }}>
                            <i className="fas fa-lock"></i>
                        </span>
                        End-to-end encryption
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-center text-muted">
                        <span className="me-3" style={{ color: "#666", fontSize: "12px" }}>
                            <i className="fas fa-mobile-alt"></i>
                        </span>
                        Access from any device
                    </div>
                </div>
            </div>
        </>
    );

    return (
        <AuthSplitLayout leftContent={leftContent}>
            <div className="auth-card bg-white p-4 p-md-5 w-100 position-relative" style={{ borderRadius: "16px", boxShadow: "0 20px 50px rgba(0,0,0,0.1)", background: "rgba(255, 255, 255, 0.9)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.5)" }}>
                <div className="w-100">
                    <h2 className="fw-bold mb-4" style={{ color: "#000", fontSize: "24px" }}>
                        Reset password
                    </h2>

                    <form onSubmit={(e) => e.preventDefault()}>
                        {/* Email */}
                        <div className="mb-4 position-relative">
                            <label htmlFor="email" className="form-label small fw-bold text-muted">Your email address</label>
                            <div className="position-relative">
                                <span className="position-absolute top-50 start-0 translate-middle-y ps-3 text-muted">
                                    <i className="fas fa-envelope"></i>
                                </span>
                                <input
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    type="email"
                                    className="form-control p-3 ps-5"
                                    style={{ borderRadius: "8px", border: "1px solid #dee2e6", fontSize: "16px", backgroundColor: "#f8f9fa" }}
                                    placeholder="name@example.com"
                                />
                            </div>
                        </div>

                        {/* Continue Button */}
                        <button
                            className="btn w-100 fw-bold py-3 mb-4"
                            style={{ backgroundColor: "#0f4941", color: "#fff", borderRadius: "4px", fontSize: "16px" }}
                        >
                            Continue
                        </button>

                        {/* Footer Link */}
                        <div className="text-center">
                            <p className="small text-muted mb-0">
                                Remember your password? <Link href="/accounts/signIn" style={{ color: "#0056b3", fontWeight: "bold", textDecoration: "none" }}>Sign in now</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </AuthSplitLayout>
    );
}
