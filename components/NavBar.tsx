"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import logoImg from '../public/hd_logo.webp';

export default function NavBar() {
    const [isSticky, setIsSticky] = useState(true);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const pathname = usePathname();
    const isHome = pathname === '/';

    const toggleDropdown = (menuName: string) => {
        setOpenDropdown(openDropdown === menuName ? null : menuName);
    };

    const closeDropdowns = () => {
        setOpenDropdown(null);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (!isHome) {
                setIsSticky(true);
                return;
            }
            const currentScrollY = window.scrollY;
            if (currentScrollY > 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        // Initialize on mount and path change
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHome]);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Don't close dropdowns if clicking inside mobile menu
            if (!target.closest('.dropdown') && !target.closest('.offcanvas')) {
                closeDropdowns();
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
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
                                <a style={{ color: isSticky ? '#154941' : '#ffffff', fontWeight: 600, textDecoration: 'none' }} href="https://partners.flexymarkets.com/" target="_blank" rel="noopener noreferrer">Partnership</a>
                            </div>
                            <div className="col-lg-1 text-end">
                                <Link style={{ color: isSticky ? '#154941' : '#ffffff', fontWeight: 600, display: 'inline-block', borderLeft: `1px solid ${isSticky ? '#ccc' : 'rgba(255,255,255,0.3)'}`, paddingLeft: '20px', marginLeft: '10px', textDecoration: 'none' }} href="/contact">Contact</Link>
                            </div>
                        </div>
                        <div className="row align-items-center py-2">
                            <div className="col-lg-2">
                                <div className="header_logo">
                                    <Link href="/">
                                        <Image
                                            src={logoImg}
                                            alt="Logo"
                                            style={{
                                                height: '45px',
                                                width: 'auto',
                                                transition: 'all .3s',
                                                filter: isSticky ? 'none' : 'brightness(0) invert(1)'
                                            }}
                                            priority
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-10">
                                <div className="header_right d-flex align-items-center justify-content-between">
                                    <nav className="header_menu flex-grow-1 d-flex justify-content-center">
                                        <ul className="header_menu_ul d-flex align-items-center list-unstyled mb-0 list-inline">
                                            <li className="list-inline-item mx-3 position-relative dropdown">
                                                <a
                                                    className="dropdown-toggle nav-link fw-bold"
                                                    href="#"
                                                    onClick={(e) => { e.preventDefault(); toggleDropdown('trading'); }}
                                                    style={{ color: isSticky ? '#154941' : '#ffffff', cursor: 'pointer' }}
                                                >
                                                    Trading
                                                </a>
                                                <div className={`dropdown-menu mega-menu2 menu-trading p-4 animated-dropdown shadow-lg border-0 ${openDropdown === 'trading' ? 'show' : ''}`} style={{ display: openDropdown === 'trading' ? 'block' : 'none' }}>
                                                    <div className="row">
                                                        <div className="col-3">
                                                            <h6 className="dropdown-header fw-bold text-uppercase" style={{ fontSize: '12px' }}>Accounts</h6>
                                                            <Link className="dropdown-item py-2" href="/account">Account Types</Link>
                                                        </div>
                                                        <div className="col-3">
                                                            <h6 className="dropdown-header fw-bold text-uppercase" style={{ fontSize: '12px' }}>Markets</h6>
                                                            <Link className="dropdown-item py-2" href="/forex-trading">Forex Trading</Link>
                                                            <Link className="dropdown-item py-2" href="/cryptocurrencies">Cryptocurrencies</Link>
                                                            <Link className="dropdown-item py-2" href="/stock-derivatives">Stock Derivatives</Link>
                                                            <Link className="dropdown-item py-2" href="/turbo-stocks">Turbo Stocks</Link>
                                                            <Link className="dropdown-item py-2" href="/commodities">Commodities</Link>
                                                            <Link className="dropdown-item py-2" href="/equity-indices">Equity Indices</Link>
                                                            <Link className="dropdown-item py-2" href="/precious-metals">Precious Metals</Link>
                                                            <Link className="dropdown-item py-2" href="/energies">Energies</Link>
                                                            <Link className="dropdown-item py-2" href="/shares">Shares</Link>
                                                            <Link className="dropdown-item py-2" href="/thematic-indices">Thematic Indices</Link>
                                                        </div>
                                                        <div className="col-3">
                                                            <h6 className="dropdown-header fw-bold text-uppercase" style={{ fontSize: '12px' }}>Platforms</h6>
                                                            <Link className="dropdown-item py-2" href="/platforms">MT5 Platform</Link>
                                                        </div>
                                                        <div className="col-3">
                                                            <h6 className="dropdown-header fw-bold text-uppercase" style={{ fontSize: '12px' }}>Our Offerings</h6>
                                                            <Link className="dropdown-item py-2" href="/flexy-copy-trading">Flexy Copy Trading</Link>
                                                            <Link className="dropdown-item py-2" href="/execution-policy">Execution Policy</Link>
                                                            <Link className="dropdown-item py-2" href="/margin-leverage">Margin and Leverage</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-inline-item mx-3 position-relative dropdown">
                                                <a
                                                    className="dropdown-toggle nav-link fw-bold"
                                                    href="#"
                                                    onClick={(e) => { e.preventDefault(); toggleDropdown('discover'); }}
                                                    style={{ color: isSticky ? '#154941' : '#ffffff', cursor: 'pointer' }}
                                                >
                                                    Discover
                                                </a>
                                                <div className={`dropdown-menu mega-menu2 menu-discover p-4 animated-dropdown shadow-lg border-0 ${openDropdown === 'discover' ? 'show' : ''}`} style={{ display: openDropdown === 'discover' ? 'block' : 'none' }}>
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <h6 className="dropdown-header fw-bold text-uppercase" style={{ fontSize: '12px' }}>Education</h6>
                                                            <Link className="dropdown-item py-2" href="/learning-centre">Learning Centre</Link>
                                                            <Link className="dropdown-item py-2" href="/live_education">Live Education</Link>
                                                            <Link className="dropdown-item py-2" href="/blog">Blogs</Link>
                                                        </div>
                                                        <div className="col-6">
                                                            <h6 className="dropdown-header fw-bold text-uppercase" style={{ fontSize: '12px' }}>Community</h6>
                                                            <Link className="dropdown-item py-2" href="/news-analysis">News and Analysis</Link>
                                                            <Link className="dropdown-item py-2" href="/analytical-tools">Analytical Tools</Link>
                                                            <Link className="dropdown-item py-2" href="/economic-calendar">Economic Calendar</Link>
                                                            <Link className="dropdown-item py-2" href="/forex-calculator">Forex Calculators</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-inline-item mx-3">
                                                <Link href="/promotions" className="nav-link fw-bold" style={{ color: isSticky ? '#154941' : '#ffffff' }}>Promotions</Link>
                                            </li>
                                            <li className="list-inline-item mx-3 position-relative dropdown">
                                                <a
                                                    className="dropdown-toggle nav-link fw-bold"
                                                    href="#"
                                                    onClick={(e) => { e.preventDefault(); toggleDropdown('company'); }}
                                                    style={{ color: isSticky ? '#154941' : '#ffffff', cursor: 'pointer' }}
                                                >
                                                    Company
                                                </a>
                                                <div className={`dropdown-menu mega-menu2 menu-company p-4 animated-dropdown shadow-lg border-0 ${openDropdown === 'company' ? 'show' : ''}`} style={{ display: openDropdown === 'company' ? 'block' : 'none' }}>
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <Link className="dropdown-item py-2" href="/about">Who is Flexy Group?</Link>
                                                            <Link className="dropdown-item py-2" href="/legal-documents">Legal Documents</Link>
                                                            <Link className="dropdown-item py-2" href="/contact">Contact Us</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div className="header_button d-flex align-items-center gap-3">
                                        <a
                                            href="https://user.flexymarkets.com/accounts/signIns"
                                            className="btn fw-bold text-decoration-none p-0"
                                            style={{ color: isSticky ? '#154941' : '#ffffff', border: '1px solid transparent' }}
                                        >
                                            Login
                                        </a>
                                        <a
                                            href="https://user.flexymarkets.com/accounts/signUps"
                                            className="btn btn-primary fw-bold px-4 py-2"
                                        >
                                            Get Started
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>

            {/* Mobile Header */}
            <div className="d-block d-lg-none">
                <header className="header sticky" style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>
                    <div className="container">
                        <div className="d-flex align-items-center justify-content-between">
                            <Link href="/">
                                <Image
                                    src={logoImg}
                                    alt="Logo"
                                    style={{
                                        height: '35px',
                                        width: 'auto'
                                    }}
                                    priority
                                />
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
                            style={{ width: '85%', maxWidth: '400px', backgroundColor: '#fff', zIndex: 1050 }}
                        >
                            <div className="offcanvas-header border-bottom">
                                <h5 className="offcanvas-title fw-bold" id="offcanvasNavbarLabel">Menu</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body" style={{ backgroundColor: '#fff' }}>
                                <ul className="list-unstyled mb-4">
                                    <li className="py-2">
                                        <a
                                            className="nav-link fw-bold d-flex justify-content-between align-items-center"
                                            href="#"
                                            onClick={(e) => { e.preventDefault(); toggleDropdown('mobile-trading'); }}
                                            style={{ cursor: 'pointer', fontSize: '16px', color: '#154941' }}
                                        >
                                            Trading
                                            <i className={`fas fa-caret-${openDropdown === 'mobile-trading' ? 'up' : 'down'}`} style={{ fontSize: '14px' }}></i>
                                        </a>
                                        {openDropdown === 'mobile-trading' && (
                                            <div className="ps-3 pt-3 pb-3 mt-2" style={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #dee2e6' }}>
                                                <h6 className="text-muted text-uppercase mb-2" style={{ fontSize: '11px', fontWeight: 700 }}>Accounts</h6>
                                                <Link className="d-block py-1 text-decoration-none text-dark fw-bold" href="/account" style={{ fontSize: '14px' }}>Account Types</Link>

                                                <h6 className="text-muted text-uppercase mt-3 mb-2" style={{ fontSize: '11px', fontWeight: 700 }}>Markets</h6>
                                                <Link className="d-block py-1 text-decoration-none text-dark fw-bold" href="/forex-trading" style={{ fontSize: '14px' }}>Forex Trading</Link>
                                                <Link className="d-block py-1 text-decoration-none text-dark fw-bold" href="/cryptocurrencies" style={{ fontSize: '14px' }}>Cryptocurrencies</Link>
                                                <Link className="d-block py-1 text-decoration-none text-dark fw-bold" href="/stock-derivatives" style={{ fontSize: '14px' }}>Stock Derivatives</Link>
                                                <Link className="d-block py-1 text-decoration-none text-dark fw-bold" href="/turbo-stocks" style={{ fontSize: '14px' }}>Turbo Stocks</Link>
                                                <Link className="d-block py-1 text-decoration-none text-dark fw-bold" href="/commodities" style={{ fontSize: '14px' }}>Commodities</Link>
                                                <Link className="d-block py-1 text-decoration-none text-dark fw-bold" href="/equity-indices" style={{ fontSize: '14px' }}>Equity Indices</Link>
                                                <Link className="d-block py-1 text-decoration-none text-dark fw-bold" href="/precious-metals" style={{ fontSize: '14px' }}>Precious Metals</Link>
                                                <Link className="d-block py-1 text-decoration-none text-dark fw-bold" href="/energies" style={{ fontSize: '14px' }}>Energies</Link>
                                                <Link className="d-block py-1 text-decoration-none text-dark fw-bold" href="/shares" style={{ fontSize: '14px' }}>Shares</Link>
                                                <Link className="d-block py-1 text-decoration-none text-dark fw-bold" href="/thematic-indices" style={{ fontSize: '14px' }}>Thematic Indices</Link>

                                                <h6 className="text-muted text-uppercase mt-3 mb-2" style={{ fontSize: '11px', fontWeight: 700 }}>Platforms</h6>
                                                <Link className="d-block py-1 text-decoration-none text-dark fw-bold" href="/platforms" style={{ fontSize: '14px' }}>MT5 Platform</Link>

                                                <h6 className="text-muted text-uppercase mt-3 mb-2" style={{ fontSize: '11px', fontWeight: 700 }}>Our Offerings</h6>
                                                <Link className="d-block py-1 text-decoration-none text-dark fw-bold" href="/flexy-copy-trading" style={{ fontSize: '14px' }}>Flexy Copy Trading</Link>
                                                <Link className="d-block py-1 text-decoration-none text-dark fw-bold" href="/execution-policy" style={{ fontSize: '14px' }}>Execution Policy</Link>
                                                <Link className="d-block py-1 text-decoration-none text-dark fw-bold" href="/margin-leverage" style={{ fontSize: '14px' }}>Margin and Leverage</Link>
                                            </div>
                                        )}
                                    </li>
                                    <li className="py-2">
                                        <a
                                            className="nav-link fw-bold d-flex justify-content-between align-items-center"
                                            href="#"
                                            onClick={(e) => { e.preventDefault(); toggleDropdown('mobile-discover'); }}
                                            style={{ cursor: 'pointer', fontSize: '16px', color: '#154941' }}
                                        >
                                            Discover
                                            <i className={`fas fa-caret-${openDropdown === 'mobile-discover' ? 'up' : 'down'}`} style={{ fontSize: '14px' }}></i>
                                        </a>
                                        {openDropdown === 'mobile-discover' && (
                                            <div className="ps-3 pt-3 pb-3 mt-2" style={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #dee2e6' }}>
                                                <h6 className="text-muted text-uppercase mb-2" style={{ fontSize: '11px', fontWeight: 700 }}>Education</h6>
                                                <Link className="d-block py-1 text-decoration-none text-dark fw-bold" href="/learning-centre" style={{ fontSize: '14px' }}>Learning Centre</Link>
                                                <Link className="d-block py-1 text-decoration-none text-dark fw-bold" href="/live_education" style={{ fontSize: '14px' }}>Live Education</Link>
                                                <Link className="d-block py-1 text-decoration-none text-dark fw-bold" href="/blog" style={{ fontSize: '14px' }}>Blogs</Link>

                                                <h6 className="text-muted text-uppercase mt-3 mb-2" style={{ fontSize: '11px', fontWeight: 700 }}>Community</h6>
                                                <Link className="d-block py-1 text-decoration-none text-dark fw-bold" href="/news-analysis" style={{ fontSize: '14px' }}>News and Analysis</Link>
                                                <Link className="d-block py-1 text-decoration-none text-dark fw-bold" href="/analytical-tools" style={{ fontSize: '14px' }}>Analytical Tools</Link>
                                                <Link className="d-block py-1 text-decoration-none text-dark fw-bold" href="/economic-calendar" style={{ fontSize: '14px' }}>Economic Calendar</Link>
                                                <Link className="d-block py-1 text-decoration-none text-dark fw-bold" href="/forex-calculator" style={{ fontSize: '14px' }}>Forex Calculators</Link>
                                            </div>
                                        )}
                                    </li>
                                    <li className="py-2">
                                        <Link href="/promotions" className="nav-link fw-bold" style={{ fontSize: '16px', color: '#154941' }}>Promotions</Link>
                                    </li>
                                    <li className="py-2">
                                        <a
                                            className="nav-link fw-bold d-flex justify-content-between align-items-center"
                                            href="#"
                                            onClick={(e) => { e.preventDefault(); toggleDropdown('mobile-company'); }}
                                            style={{ cursor: 'pointer', fontSize: '16px', color: '#154941' }}
                                        >
                                            Company
                                            <i className={`fas fa-caret-${openDropdown === 'mobile-company' ? 'up' : 'down'}`} style={{ fontSize: '14px' }}></i>
                                        </a>
                                        {openDropdown === 'mobile-company' && (
                                            <div className="ps-3 pt-3 pb-3 mt-2" style={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #dee2e6' }}>
                                                <Link className="d-block py-1 text-decoration-none text-dark fw-bold" href="/about" style={{ fontSize: '14px' }}>Who is Flexy Group?</Link>
                                                <Link className="d-block py-1 text-decoration-none text-dark fw-bold" href="/legal-documents" style={{ fontSize: '14px' }}>Legal Documents</Link>
                                                <Link className="d-block py-1 text-decoration-none text-dark fw-bold" href="/contact" style={{ fontSize: '14px' }}>Contact Us</Link>
                                            </div>
                                        )}
                                    </li>
                                    <li className="py-2">
                                        <a href="https://partners.flexymarkets.com/" className="nav-link fw-bold d-flex align-items-center" style={{ fontSize: '16px', color: '#154941' }}>
                                            Partnership <i className="fas fa-external-link-alt ms-2" style={{ fontSize: '12px' }}></i>
                                        </a>
                                    </li>
                                </ul>

                                <div className="d-flex align-items-center">
                                    <a
                                        href="https://user.flexymarkets.com/accounts/signIns"
                                        className="btn fw-bold me-3 text-dark"
                                        style={{ fontSize: "15px" }}
                                    >
                                        Login
                                    </a>
                                    <a
                                        href="https://user.flexymarkets.com/accounts/signUps"
                                        className="btn btn-primary fw-bold"
                                        style={{
                                            padding: "10px 24px",
                                            fontSize: "15px"
                                        }}
                                    >
                                        Get Started
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header >
            </div >

            <style jsx global>{`
                #offcanvasNavbar {
                    background-color: #fff !important;
                    height: 100vh !important;
                    min-height: 100% !important;
                    display: flex !important;
                    flex-direction: column !important;
                }
                #offcanvasNavbar .offcanvas-body {
                    background-color: #fff !important;
                    flex-grow: 1 !important;
                    overflow-y: auto !important;
                    opacity: 1 !important;
                    scrollbar-width: none; /* Firefox */
                    -ms-overflow-style: none; /* IE/Edge */
                }
                #offcanvasNavbar .offcanvas-body::-webkit-scrollbar {
                    display: none; /* Chrome/Safari */
                }
            `}</style>
        </>
    );
}
