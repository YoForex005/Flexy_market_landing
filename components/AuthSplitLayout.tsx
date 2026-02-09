"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoImg from '../public/hd_logo.webp';

interface AuthSplitLayoutProps {
    leftContent: React.ReactNode;
    children: React.ReactNode;
}

export default function AuthSplitLayout({ leftContent, children }: AuthSplitLayoutProps) {
    return (
        <div className="min-vh-100 d-flex flex-column position-relative overflow-hidden">
            {/* Animated Background */}
            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: -1 }}>
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        background: "linear-gradient(135deg, #f4f7fa 0%, #e6f7ff 100%)",
                    }}
                ></div>
                <div
                    className="position-absolute rounded-circle"
                    style={{
                        width: "600px",
                        height: "600px",
                        background: "radial-gradient(circle, rgba(15, 73, 65, 0.08) 0%, rgba(15, 73, 65, 0) 70%)",
                        top: "-150px",
                        right: "-100px",
                        animation: "float 10s ease-in-out infinite"
                    }}
                ></div>
                <div
                    className="position-absolute rounded-circle"
                    style={{
                        width: "500px",
                        height: "500px",
                        background: "radial-gradient(circle, rgba(46, 204, 113, 0.08) 0%, rgba(46, 204, 113, 0) 70%)",
                        bottom: "-100px",
                        left: "-100px",
                        animation: "float 15s ease-in-out infinite reverse"
                    }}
                ></div>
            </div>

            {/* Global Animation Styles */}
            <style jsx global>{`
                @keyframes float {
                    0% { transform: translate(0, 0); }
                    50% { transform: translate(20px, 40px); }
                    100% { transform: translate(0, 0); }
                }
                @keyframes slideInLeft {
                    from { opacity: 0; transform: translateX(-30px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes slideInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-slide-left {
                    animation: slideInLeft 0.8s ease-out forwards;
                }
                .animate-slide-up {
                    animation: slideInUp 0.8s ease-out 0.2s forwards; /* 0.2s delay */
                    opacity: 0; /* Start hidden for delay */
                }
            `}</style>

            <header className="py-4 px-4 px-md-5">
                <div className="container-fluid">
                    {/* Logo is flexible here if we want overrides, but standard Link is fine */}
                    <Link href="/" className="navbar-brand">
                        <Image
                            src={logoImg}
                            alt="Flexy Markets"
                            style={{ height: "45px", width: "auto" }}
                            priority
                        />
                    </Link>
                </div>
            </header>

            <main className="flex-grow-1 d-flex align-items-center position-relative">
                <div className="container">
                    <div className="row align-items-center justify-content-center justify-content-lg-between">

                        {/* Left Side: Dynamic Brand/Marketing Content */}
                        <div className="col-lg-6 mb-5 mb-lg-0 pe-lg-5 animate-slide-left">
                            {leftContent}
                        </div>

                        {/* Right Side: Form Container */}
                        <div className="col-lg-5 animate-slide-up">
                            {children}
                        </div>

                    </div>
                </div>
            </main>

            <footer className="py-4 mt-auto container text-center" style={{ fontSize: "11px", color: "#999" }}>
                <p className="mb-0">© 2026. Flexy Markets. All rights reserved.</p>
            </footer>
        </div>
    );
}
