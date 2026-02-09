"use client";

import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <footer className="footer" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #0f4941 0%, #0f664a 50%, #0f4941 100%)' }}></div>

                <div className="container">
                    {/* Header Section with Social Icons */}
                    <div className="foorer_1 py-5" style={{ borderBottom: '1px solid rgba(15, 73, 65, 0.1)' }}>
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="footer_heading">
                                    <h3 className="display-6 fw-bold" style={{ color: '#0f4941' }}>Feel connected anytime, anywhere.</h3>
                                </div>
                            </div>
                            <div className="col-lg-4 offset-lg-3">
                                <div className="footer_1_right">
                                    <ul className="d-flex gap-3 justify-content-lg-end justify-content-center list-unstyled mb-0">
                                        <li>
                                            <a href="https://www.facebook.com/flexymarkets/" aria-label="Facebook" target="_blank" rel="noopener noreferrer"
                                                className="d-flex align-items-center justify-content-center rounded-circle bg-white shadow-sm"
                                                style={{ width: '50px', height: '50px', transition: 'all 0.3s' }}>
                                                <i className="fab fa-facebook" style={{ fontSize: '24px', color: '#1877F2' }}></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/flexy.markets/" aria-label="Instagram" target="_blank" rel="noopener noreferrer"
                                                className="d-flex align-items-center justify-content-center rounded-circle bg-white shadow-sm"
                                                style={{ width: '50px', height: '50px', transition: 'all 0.3s' }}>
                                                <i className="fab fa-instagram" style={{ fontSize: '24px', color: '#E4405F' }}></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/company/flexy-market/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"
                                                className="d-flex align-items-center justify-content-center rounded-circle bg-white shadow-sm"
                                                style={{ width: '50px', height: '50px', transition: 'all 0.3s' }}>
                                                <i className="fab fa-linkedin" style={{ fontSize: '24px', color: '#0A66C2' }}></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Links Section */}
                    <div className="footer_2 py-5">
                        <div className="row">
                            {/* Trading Markets */}
                            <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                                <h6 className="fw-bold text-uppercase mb-3" style={{ color: '#0f4941', fontSize: '0.875rem', letterSpacing: '1px' }}>TRADING MARKETS</h6>
                                <Link href="/forex-trading" className="d-block text-muted mb-2" style={{ fontSize: '0.95rem' }}>Forex Trading</Link>
                                <Link href="/cryptocurrencies" className="d-block text-muted mb-2" style={{ fontSize: '0.95rem' }}>Cryptocurrencies</Link>
                                <Link href="/equity-indices" className="d-block text-muted mb-2" style={{ fontSize: '0.95rem' }}>Equity Indices</Link>
                                <Link href="/thematic-indices" className="d-block text-muted mb-2" style={{ fontSize: '0.95rem' }}>Thematic Indices</Link>
                                <Link href="/stock-derivatives" className="d-block text-muted mb-2" style={{ fontSize: '0.95rem' }}>Stock Derivatives</Link>
                                <Link href="/turbo-stocks" className="d-block text-muted mb-2" style={{ fontSize: '0.95rem' }}>Turbo Stocks</Link>
                                <Link href="/shares" className="d-block text-muted mb-2" style={{ fontSize: '0.95rem' }}>Shares</Link>
                                <Link href="/commodities" className="d-block text-muted mb-2" style={{ fontSize: '0.95rem' }}>Commodities</Link>
                                <Link href="/precious-metals" className="d-block text-muted mb-2" style={{ fontSize: '0.95rem' }}>Precious Metals</Link>
                                <Link href="/energies" className="d-block text-muted mb-2" style={{ fontSize: '0.95rem' }}>Energies</Link>
                            </div>

                            {/* Tools & Resources */}
                            <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                                <h6 className="fw-bold text-uppercase mb-3" style={{ color: '#0f4941', fontSize: '0.875rem', letterSpacing: '1px' }}>TOOLS & RESOURCES</h6>
                                <Link href="/economic-calendar" className="d-block text-muted mb-2" style={{ fontSize: '0.95rem' }}>Economic Calendar</Link>
                                <Link href="/forex-calculator" className="d-block text-muted mb-2" style={{ fontSize: '0.95rem' }}>Forex Calculator</Link>
                                <Link href="/analytical-tools" className="d-block text-muted mb-2" style={{ fontSize: '0.95rem' }}>Analytical Tools</Link>
                                <Link href="/learning-centre" className="d-block text-muted mb-2" style={{ fontSize: '0.95rem' }}>Learning Centre</Link>
                                <Link href="/live_education" className="d-block text-muted mb-2" style={{ fontSize: '0.95rem' }}>Live Education</Link>
                                <Link href="/news-analysis" className="d-block text-muted mb-2" style={{ fontSize: '0.95rem' }}>News & Analysis</Link>
                            </div>

                            {/* Platforms */}
                            <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                                <h6 className="fw-bold text-uppercase mb-3" style={{ color: '#0f4941', fontSize: '0.875rem', letterSpacing: '1px' }}>PLATFORMS</h6>
                                <Link href="/platforms" className="d-block text-muted mb-2" style={{ fontSize: '0.95rem' }}>MT5 Platform</Link>
                            </div>

                            {/* Accounts */}
                            <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                                <h6 className="fw-bold text-uppercase mb-3" style={{ color: '#0f4941', fontSize: '0.875rem', letterSpacing: '1px' }}>ACCOUNTS</h6>
                                <Link href="/account" className="d-block text-muted mb-2" style={{ fontSize: '0.95rem' }}>Account Types</Link>
                            </div>

                            {/* Our Offering */}
                            <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                                <h6 className="fw-bold text-uppercase mb-3" style={{ color: '#0f4941', fontSize: '0.875rem', letterSpacing: '1px' }}>OUR OFFERING</h6>
                                <Link href="/flexy-copy-trading" className="d-block text-muted mb-2" style={{ fontSize: '0.95rem' }}>Flexy Copy Trading</Link>
                                <Link href="/promotions" className="d-block text-muted mb-2" style={{ fontSize: '0.95rem' }}>Promotions</Link>
                                <Link href="/execution-policy" className="d-block text-muted mb-2" style={{ fontSize: '0.95rem' }}>Execution Policy</Link>
                                <Link href="/margin-leverage" className="d-block text-muted mb-2" style={{ fontSize: '0.95rem' }}>Margin and Leverage</Link>
                            </div>

                            {/* Company */}
                            <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                                <h6 className="fw-bold text-uppercase mb-3" style={{ color: '#0f4941', fontSize: '0.875rem', letterSpacing: '1px' }}>COMPANY</h6>
                                <Link href="/about" className="d-block text-muted mb-2" style={{ fontSize: '0.95rem' }}>Who is Flexy Markets?</Link>
                                <Link href="/legal-documents" className="d-block text-muted mb-2" style={{ fontSize: '0.95rem' }}>Legal Documents</Link>
                                <Link href="/contact" className="d-block text-muted mb-2" style={{ fontSize: '0.95rem' }}>Contact Us</Link>
                            </div>
                        </div>

                        {/* Address Section - Full Width Row */}
                        <div className="row mt-4 pt-4" style={{ borderTop: '1px solid rgba(15, 73, 65, 0.1)' }}>
                            <div className="col-lg-6 mb-4">
                                <h6 className="fw-bold text-uppercase mb-3" style={{ color: '#0f4941', fontSize: '0.875rem', letterSpacing: '1px' }}>REGISTERED ADDRESS</h6>
                                <p className="text-muted small mb-1">Flexy Markets Limited (Reg No. - 2024-00752)</p>
                                <p className="text-muted small mb-1">Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia</p>
                                <p className="text-muted small mb-1"><strong>Email:</strong> support@flexymarkets.com</p>
                                <p className="text-muted small mb-0">
                                    <strong>Phone:</strong>{" "}
                                    <a
                                        href="https://wa.me/443300271632"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: '#0f4941', textDecoration: 'none' }}
                                    >
                                        +44 3300 271632
                                    </a>
                                </p>
                            </div>

                            <div className="col-lg-6 mb-4">
                                <h6 className="fw-bold text-uppercase mb-3" style={{ color: '#0f4941', fontSize: '0.875rem', letterSpacing: '1px' }}>CORRESPONDENCE ADDRESS</h6>
                                <p className="text-muted small mb-1">Middle East Office:</p>
                                <p className="text-muted small mb-0">B2007-127, 33rd floor, Latifa Tower, Trade Center first, Seikh Zayad Road, Dubai-UAE</p>
                            </div>
                        </div>
                    </div>

                    {/* Legal Footer Section */}
                    <div className="legal-footer bg-white rounded-4 p-4 mb-4" style={{ border: '1px solid rgba(15, 73, 65, 0.1)' }}>
                        <div className="row">
                            <div className="col-12 text-center mb-3">
                                <a href="/pdf/TERM%20AND%20CONDITION.pdf" target="_blank" className="text-muted small px-2">Terms and Conditions</a>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <p className="text-muted small mb-2">
                                    <strong style={{ color: '#0f4941' }}>Legal:</strong> This website is operated by Flexy Markets Limited with registered address at Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia.
                                </p>

                                <p className="text-muted small mb-2">
                                    <strong style={{ color: '#0f4941' }}>Risk Warning:</strong> Our services involve a significant risk and can result in the loss of your invested capital. Please read and ensure you fully understand our Risk Disclosure.
                                </p>

                                <p className="text-muted small mb-2">
                                    <strong style={{ color: '#0f4941' }}>Restricted Regions:</strong> Flexy Markets Ltd does not provide services for the residents of certain countries, such as the United States of America, Canada, Argentina, UAE, Israel and the Islamic Republic of Iran.
                                </p>

                                <p className="text-muted small mb-0">
                                    Flexy Markets does not direct its website and services to any individual in any country in which the use of its website and services are prohibited by local laws or regulations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Copyright Footer */}
            <footer className="copyright-footer text-center text-white py-3" style={{ background: '#0f4941' }}>
                &copy; {new Date().getFullYear()} Flexy Markets Ltd. All rights reserved.
            </footer>
        </>
    );
}
