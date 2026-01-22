"use client";

import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <footer className="footer" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #17423c 0%, #2a6b5f 50%, #17423c 100%)' }}></div>

                <div className="container">
                    {/* Header Section with Social Icons */}
                    <div className="foorer_1 py-5" style={{ borderBottom: '1px solid rgba(23, 66, 60, 0.1)' }}>
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="footer_heading">
                                    <h3 className="display-6 fw-bold" style={{ color: '#17423c' }}>Feel connected anytime, anywhere.</h3>
                                </div>
                            </div>
                            <div className="col-lg-4 offset-lg-3">
                                <div className="footer_1_right">
                                    <ul className="d-flex gap-3 justify-content-lg-end justify-content-center list-unstyled mb-0">
                                        <li>
                                            <a href="https://www.facebook.com/flexymarkets/" aria-label="Facebook"
                                                className="d-flex align-items-center justify-content-center rounded-circle bg-white shadow-sm"
                                                style={{ width: '50px', height: '50px', transition: 'all 0.3s' }}>
                                                <i className="fab fa-facebook" style={{ fontSize: '24px', color: '#1877F2' }}></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/flexy.markets/" aria-label="Instagram"
                                                className="d-flex align-items-center justify-content-center rounded-circle bg-white shadow-sm"
                                                style={{ width: '50px', height: '50px', transition: 'all 0.3s' }}>
                                                <i className="fab fa-instagram" style={{ fontSize: '24px', color: '#E4405F' }}></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/company/flexy-market/" aria-label="LinkedIn"
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
                            <div className="col-md-2 mb-4">
                                <h6 className="fw-bold text-uppercase mb-3" style={{ color: '#17423c', fontSize: '0.875rem', letterSpacing: '1px' }}>ACCOUNTS</h6>
                                <Link href="/account" className="d-block text-muted mb-2" style={{ fontSize: '0.95rem' }}>Account Types</Link>
                            </div>

                            <div className="col-md-2 mb-4">
                                <h6 className="fw-bold text-uppercase mb-3" style={{ color: '#17423c', fontSize: '0.875rem', letterSpacing: '1px' }}>OUR OFFERING</h6>
                                <Link href="/flexy-copy-trading" className="d-block text-muted mb-2" style={{ fontSize: '0.95rem' }}>Flexy Copy Trading</Link>
                                <Link href="/execution-policy" className="d-block text-muted mb-2" style={{ fontSize: '0.95rem' }}>Execution Policy</Link>
                                <Link href="/margin-leverage" className="d-block text-muted mb-2" style={{ fontSize: '0.95rem' }}>Margin and Leverage</Link>
                            </div>

                            <div className="col-md-2 mb-4">
                                <h6 className="fw-bold text-uppercase mb-3" style={{ color: '#17423c', fontSize: '0.875rem', letterSpacing: '1px' }}>PLATFORMS</h6>
                                <Link href="/mt5" className="d-block text-muted mb-2" style={{ fontSize: '0.95rem' }}>MT5 Platform</Link>
                            </div>

                            <div className="col-md-2 mb-4">
                                <h6 className="fw-bold text-uppercase mb-3" style={{ color: '#17423c', fontSize: '0.875rem', letterSpacing: '1px' }}>COMPANY</h6>
                                <Link href="/about" className="d-block text-muted mb-2" style={{ fontSize: '0.95rem' }}>Who is Flexy Markets?</Link>
                                <Link href="/legal-document" className="d-block text-muted mb-2" style={{ fontSize: '0.95rem' }}>Legal Documents</Link>
                                <Link href="/flexy-csr" className="d-block text-muted mb-2" style={{ fontSize: '0.95rem' }}>CSR</Link>
                                <Link href="/contact" className="d-block text-muted mb-2" style={{ fontSize: '0.95rem' }}>Contact Us</Link>
                            </div>

                            <div className="col-md-2 mb-4">
                                <h6 className="fw-bold text-uppercase mb-3" style={{ color: '#17423c', fontSize: '0.875rem', letterSpacing: '1px' }}>REGISTERED ADDRESS</h6>
                                <p className="text-muted small">Flexy Markets Limited (Reg No. - 2024-00752)</p>
                                <p className="text-muted small">Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia</p>
                                <p className="text-muted small"><strong>Email:</strong> support@flexymarkets.com</p>
                                <p className="text-muted small"><strong>Phone:</strong> +971 42293628</p>
                            </div>

                            <div className="col-md-2 mb-4">
                                <h6 className="fw-bold text-uppercase mb-3" style={{ color: '#17423c', fontSize: '0.875rem', letterSpacing: '1px' }}>CORRESPONDENCE ADDRESS</h6>
                                <p className="text-muted small">Middle East Office:</p>
                                <p className="text-muted small">B2007-127, 33rd floor, Latifa Tower, Trade Center first, Seikh Zayad Road, Dubai-UAE</p>
                            </div>
                        </div>
                    </div>

                    {/* Legal Footer Section */}
                    <div className="legal-footer bg-white rounded-4 p-4 mb-4" style={{ border: '1px solid rgba(23, 66, 60, 0.1)' }}>
                        <div className="row">
                            <div className="col-12 text-center mb-3">
                                <a href="https://flexymarkets.com/legal_documents/VPS-Service-Terms-and-Conditions-special.pdf" className="text-muted small px-2">VPS Terms and Conditions</a> |
                                <a href="https://flexymarkets.com/legal_documents/TERM%20AND%20CONDITION.pdf" className="text-muted small px-2">Terms and Conditions</a>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <p className="text-muted small mb-2">
                                    <strong style={{ color: '#17423c' }}>Legal:</strong> This website is operated by Flexy Markets Limited with registered address at Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia.
                                </p>

                                <p className="text-muted small mb-2">
                                    <strong style={{ color: '#17423c' }}>Risk Warning:</strong> Our services involve a significant risk and can result in the loss of your invested capital. Please read and ensure you fully understand our Risk Disclosure.
                                </p>

                                <p className="text-muted small mb-2">
                                    <strong style={{ color: '#17423c' }}>Restricted Regions:</strong> Flexy Markets Ltd does not provide services for the residents of certain countries, such as the United States of America, Canada, Argentina, UAE, Israel and the Islamic Republic of Iran.
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
            <footer className="copyright-footer text-center text-white py-3" style={{ background: '#17423c' }}>
                &copy; {new Date().getFullYear()} Flexy Markets Ltd. All rights reserved.
            </footer>
        </>
    );
}
