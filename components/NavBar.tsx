"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        // Initialize on mount
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Desktop Header */}
            <div className="d-none d-lg-block">
                <header
                    className={`header ${isSticky ? 'sticky' : ''}`}
                >
                    <div className="container">
                        <div className={`partner_row row py-2 ${isSticky ? 'd-none' : ''}`} style={{ fontSize: '13px', paddingTop: '10px' }}>
                            <div className="col-lg-1 offset-lg-10 text-end">
                                <a style={{ color: '#154941', fontWeight: 600, textDecoration: 'none' }} href="https://partners.flexymarkets.com/">Partnership</a>
                            </div>
                            <div className="col-lg-1 text-end">
                                <Link style={{ color: '#154941', fontWeight: 600, display: 'inline-block', borderLeft: '1px solid #ccc', paddingLeft: '20px', marginLeft: '10px', textDecoration: 'none' }} href="/contact">Contact</Link>
                            </div>
                        </div>
                        <div className="row align-items-center py-2">
                            <div className="col-lg-2">
                                <div className="header_logo">
                                    <Link href="/">
                                        <img
                                            src={isSticky ? "/hd_logo.png" : "/hd_logo.png"}
                                            alt="Logo"
                                            style={{ height: '45px', transition: 'all .3s' }}
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = "/hd_logo.png"; // Fallback if dark logo is missing
                                            }}
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-10">
                                <div className="header_right d-flex align-items-center justify-content-between">
                                    <nav className="header_menu flex-grow-1 d-flex justify-content-center">
                                        <ul className="header_menu_ul d-flex align-items-center list-unstyled mb-0 list-inline">
                                            <li className="list-inline-item mx-3 position-relative dropdown">
                                                <Link className="dropdown-toggle nav-link fw-bold" href="#" data-bs-toggle="dropdown" style={{ color: isSticky ? '#000' : '#154941' }}>
                                                    Trading
                                                </Link>
                                                <div className="dropdown-menu mega-menu2 menu-trading p-4 animated-dropdown shadow-lg border-0">
                                                    <div className="row">
                                                        <div className="col-3">
                                                            <h6 className="dropdown-header fw-bold text-uppercase" style={{ fontSize: '12px' }}>Accounts</h6>
                                                            <Link className="dropdown-item py-2" href="/account">Account Types</Link>
                                                        </div>
                                                        <div className="col-3">
                                                            <h6 className="dropdown-header fw-bold text-uppercase" style={{ fontSize: '12px' }}>Markets</h6>
                                                            <Link className="dropdown-item py-2" href="https://flexymarkets.com/forex-trading.php">Forex Trading</Link>
                                                            <Link className="dropdown-item py-2" href="https://flexymarkets.com/cryptocurrencies.php">Cryptocurrencies</Link>
                                                            <Link className="dropdown-item py-2" href="https://flexymarkets.com/stock-derivatives.php">Stock Derivatives</Link>
                                                            <Link className="dropdown-item py-2" href="https://flexymarkets.com/turbo-stocks.php">Turbo Stocks</Link>
                                                            <Link className="dropdown-item py-2" href="https://flexymarkets.com/commodities.php">Commodities</Link>
                                                            <Link className="dropdown-item py-2" href="https://flexymarkets.com/equity-indices.php">Equity Indices</Link>
                                                            <Link className="dropdown-item py-2" href="https://flexymarkets.com/precious-metals.php">Precious Metals</Link>
                                                            <Link className="dropdown-item py-2" href="https://flexymarkets.com/energies.php">Energies</Link>
                                                            <Link className="dropdown-item py-2" href="https://flexymarkets.com/shares.php">Shares</Link>
                                                            <Link className="dropdown-item py-2" href="https://flexymarkets.com/thematic-indices.php">Thematic Indices</Link>
                                                        </div>
                                                        <div className="col-3">
                                                            <h6 className="dropdown-header fw-bold text-uppercase" style={{ fontSize: '12px' }}>Platforms</h6>
                                                            <Link className="dropdown-item py-2" href="https://flexymarkets.com/mt5.php">MT5 Platform</Link>
                                                        </div>
                                                        <div className="col-3">
                                                            <h6 className="dropdown-header fw-bold text-uppercase" style={{ fontSize: '12px' }}>Our Offerings</h6>
                                                            <Link className="dropdown-item py-2" href="https://flexymarkets.com/flexy-copy-trading.php">Flexy Copy Trading</Link>
                                                            <Link className="dropdown-item py-2" href="https://flexymarkets.com/execution-policy.php">Execution Policy</Link>
                                                            <Link className="dropdown-item py-2" href="https://flexymarkets.com/margin-leverage.php">Margin and Leverage</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-inline-item mx-3 position-relative dropdown">
                                                <Link className="dropdown-toggle nav-link fw-bold" href="#" data-bs-toggle="dropdown" style={{ color: isSticky ? '#000' : '#154941' }}>Discover</Link>
                                                <div className="dropdown-menu mega-menu2 menu-discover p-4 animated-dropdown shadow-lg border-0">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <h6 className="dropdown-header fw-bold text-uppercase" style={{ fontSize: '12px' }}>Education</h6>
                                                            <Link className="dropdown-item py-2" href="https://flexymarkets.com/learning_centre.php">Learning Centre</Link>
                                                            <Link className="dropdown-item py-2" href="https://flexymarkets.com/live_education.php">Live Education</Link>
                                                            <Link className="dropdown-item py-2" href="https://flexymarkets.com/blog/">Blogs</Link>
                                                        </div>
                                                        <div className="col-6">
                                                            <h6 className="dropdown-header fw-bold text-uppercase" style={{ fontSize: '12px' }}>Community</h6>
                                                            <Link className="dropdown-item py-2" href="https://flexymarkets.com/news_and_analysis.php">News and Analysis</Link>
                                                            <Link className="dropdown-item py-2" href="https://flexymarkets.com/analytical-tools.php">Analytical Tools</Link>
                                                            <Link className="dropdown-item py-2" href="https://flexymarkets.com/economic_calender.php">Economic Calendar</Link>
                                                            <Link className="dropdown-item py-2" href="https://flexymarkets.com/forex-calculator.php">Forex Calculators</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-inline-item mx-3">
                                                <Link href="https://flexymarkets.com/promotion.php" className="nav-link fw-bold" style={{ color: isSticky ? '#000' : '#154941' }}>Promotions</Link>
                                            </li>
                                            <li className="list-inline-item mx-3 position-relative dropdown">
                                                <Link className="nav-link dropdown-toggle fw-bold" href="#" data-bs-toggle="dropdown" style={{ color: isSticky ? '#000' : '#154941' }}>Company</Link>
                                                <div className="dropdown-menu mega-menu2 menu-company p-4 animated-dropdown shadow-lg border-0">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <Link className="dropdown-item py-2" href="https://flexymarkets.com/about.php">Who is Flexy Group?</Link>
                                                            <Link className="dropdown-item py-2" href="https://flexymarkets.com/legal-document.php">Legal Documents</Link>
                                                            <Link className="dropdown-item py-2" href="https://flexymarkets.com/flexy-csr.php">CSR</Link>
                                                            <Link className="dropdown-item py-2" href="https://flexymarkets.com/contact.php">Contact Us</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div className="header_button d-flex align-items-center gap-3">
                                        <button
                                            type="button"
                                            className="btn fw-bold text-decoration-none p-0 text-black"
                                            style={{ color: '#000', border: '1px solid transparent' }}
                                            onClick={() => window.location.href = "https://user.flexymarkets.com/accounts/signIn"}
                                        >
                                            Login
                                        </button>
                                        <button
                                            type="button"
                                            className="btn rounded-3 fw-bold px-4 py-2 text-white"
                                            style={{ background: '#0f4941', border: '1px solid #0f4941' }}
                                            onClick={() => window.location.href = "https://user.flexymarkets.com/accounts/signUp"}
                                        >
                                            Get Started
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>

            {/* Mobile Header */}
            <div className="d-block d-lg-none">
                <header className="header" style={{ backgroundColor: '#fff', padding: '10px 0', borderBottom: '1px solid #eee' }}>
                    <div className="container">
                        <div className="d-flex align-items-center justify-content-between">
                            <Link href="/">
                                <img src="/hd_logo.png" alt="Logo" style={{ height: '35px' }} />
                            </Link>
                            <button
                                className="btn p-0"
                                type="button"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasNavbar"
                                aria-controls="offcanvasNavbar"
                            >
                                <i className="fas fa-bars" style={{ fontSize: '24px', color: '#154941' }}></i>
                            </button>
                        </div>

                        <div
                            className="offcanvas offcanvas-end"
                            tabIndex={-1}
                            id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel"
                            style={{ width: '300px' }}
                        >
                            <div className="offcanvas-header border-bottom">
                                <h5 className="offcanvas-title fw-bold" id="offcanvasNavbarLabel">Menu</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="list-unstyled mb-4">
                                    <li className="py-3 border-bottom dropdown">
                                        <Link className="nav-link dropdown-toggle fw-bold d-flex justify-content-between align-items-center" href="#" data-bs-toggle="dropdown">
                                            Trading
                                        </Link>
                                    </li>
                                    <li className="py-3 border-bottom dropdown">
                                        <Link className="nav-link dropdown-toggle fw-bold d-flex justify-content-between align-items-center" href="#" data-bs-toggle="dropdown">
                                            Discover
                                        </Link>
                                    </li>
                                    <li className="py-3 border-bottom">
                                        <Link href="https://flexymarkets.com/promotion.php" className="nav-link fw-bold">Promotions</Link>
                                    </li>
                                    <li className="py-3 border-bottom dropdown">
                                        <Link className="nav-link dropdown-toggle fw-bold d-flex justify-content-between align-items-center" href="#" data-bs-toggle="dropdown">
                                            Company
                                        </Link>
                                    </li>
                                    <li className="py-3 border-bottom">
                                        <a href="https://partners.flexymarkets.com/" className="nav-link fw-bold d-flex align-items-center">
                                            Partnership <i className="fas fa-external-link-alt ms-2" style={{ fontSize: '12px' }}></i>
                                        </a>
                                    </li>
                                </ul>

                                <div className="d-flex gap-3 mt-auto">
                                    <button
                                        type="button"
                                        className="btn flex-fill fw-bold py-2"
                                        style={{ border: '1px solid #ddd', color: '#666' }}
                                        onClick={() => window.location.href = "https://user.flexymarkets.com/accounts/signIn"}
                                    >
                                        Login
                                    </button>
                                    <button
                                        type="button"
                                        className="btn flex-fill fw-bold py-2 text-white"
                                        style={{ background: '#0f4941' }}
                                        onClick={() => window.location.href = "https://user.flexymarkets.com/accounts/signUp"}
                                    >
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    );
}
