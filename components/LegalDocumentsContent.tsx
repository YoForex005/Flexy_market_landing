"use client";

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function LegalDocumentsContent() {
    const documents = [
        {
            title: 'Terms and Conditions',
            desc: 'Comprehensive terms governing your use of our services and trading platform.',
            file: '/pdf/TERM AND CONDITION.pdf',
            icon: 'fa-file-contract'
        },
        {
            title: 'VPS Terms and Conditions',
            desc: 'Specific terms and conditions for our Virtual Private Server services.',
            file: '/pdf/VPS-Service-Terms-and-Conditions-special.pdf',
            icon: 'fa-server'
        },
        {
            title: 'Money Laundering Prevention',
            desc: 'Our commitment to preventing money laundering and ensuring regulatory compliance.',
            file: '/pdf/Flexy-Markets-Money-Laundering-Prevention (1).pdf',
            icon: 'fa-shield-alt'
        },
        {
            title: 'Order Execution Policy',
            desc: 'Transparency in how we execute your orders and manage trade execution.',
            file: '/pdf/Flexy Markets-Order-Execution-Policy.pdf',
            icon: 'fa-chart-line'
        },
        {
            title: 'Risk Disclosure for Financial Instruments',
            desc: 'Important information about the risks associated with trading financial instruments.',
            file: '/pdf/Global_Risk_Disclosures_for_Financial_Instruments.pdf',
            icon: 'fa-exclamation-triangle'
        },
        {
            title: 'Complaint Handling Procedure',
            desc: 'Our process for addressing and resolving customer complaints and concerns.',
            file: '/pdf/Flexymarkets-Complaint-Handling-Procedures.pdf',
            icon: 'fa-hands-helping'
        }
    ];

    return (
        <main className="bg-white" style={{ minHeight: "100vh" }}>
            <NavBar />

            {/* HERO SECTION */}
            <section className="position-relative overflow-hidden text-center"
                style={{
                    background: 'radial-gradient(circle at 50% -20%, #ccfbf1 0%, #ffffff 60%)',
                    paddingTop: "160px",
                    paddingBottom: "100px"
                }}
            >
                <div className="container position-relative" style={{ zIndex: 2 }}>
                    <div className="badge bg-success bg-opacity-10 text-success mb-3 px-3 py-2 rounded-pill fw-bold border border-success border-opacity-25 small">
                        <i className="fas fa-lock me-2"></i>Transparent & Compliant
                    </div>
                    <h1 className="display-3 fw-bold mb-4 text-dark" style={{ letterSpacing: '-1px' }}>
                        Legal <span style={{ color: "#0f4941" }}>Documents</span>
                    </h1>
                    <p className="text-secondary mb-0 fs-5 mx-auto" style={{ maxWidth: '800px', lineHeight: '1.8' }}>
                        It&apos;s important that you read and understand any documentation relating to the services you&apos;re interested in.
                        Anything that applies to your account will be clearly marked during the registration process.
                        You should familiarize yourself with these documents before completing your registration.
                    </p>
                </div>
            </section>

            {/* DOCUMENTS SECTION */}
            <section className="py-5 bg-white">
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold display-6 mb-3" style={{ color: "#0f4941" }}>Business Terms and Policies</h2>
                        <p className="text-muted mx-auto" style={{ maxWidth: "650px" }}>
                            Click on any document below to view or download. All documents are available in PDF format.
                        </p>
                    </div>

                    <div className="row g-4">
                        {documents.map((doc, index) => (
                            <div className="col-lg-6" key={index}>
                                <a href={doc.file} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                    <div className="card h-100 border-0 shadow-sm rounded-4 p-4 hover-lift"
                                        style={{
                                            transition: 'all 0.3s ease',
                                            cursor: 'pointer'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-5px)';
                                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(15, 73, 65, 0.15)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '';
                                        }}
                                    >
                                        <div className="d-flex align-items-start gap-3">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-circle bg-success bg-opacity-10 d-flex align-items-center justify-content-center"
                                                    style={{ width: '50px', height: '50px' }}>
                                                    <i className={`fas ${doc.icon} fs-5`} style={{ color: "#0f4941" }}></i>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h5 className="fw-bold mb-2" style={{ color: "#1e293b" }}>{doc.title}</h5>
                                                <p className="text-muted small mb-3">{doc.desc}</p>
                                                <div className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-file-pdf text-danger"></i>
                                                    <span className="small fw-bold" style={{ color: "#0f4941" }}>View Document</span>
                                                    <i className="fas fa-external-link-alt small" style={{ color: "#0f4941" }}></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY READ SECTION */}
            <section className="py-5" style={{ backgroundColor: "#f8fcfb" }}>
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <h2 className="display-6 fw-bold mb-4" style={{ color: "#0f4941" }}>
                                Why Read Our Legal Documents?
                            </h2>
                            <p className="lead text-secondary mb-4">
                                Understanding our legal documentation is crucial for a transparent and secure trading experience.
                            </p>
                            <p className="text-muted">
                                These documents outline your rights, responsibilities, and the terms under which we provide our services.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <div className="bg-white rounded-4 shadow-sm p-4">
                                <ul className="list-unstyled mb-0">
                                    {[
                                        'Clear understanding of your trading account terms and conditions',
                                        'Knowledge of risk factors associated with trading financial instruments',
                                        'Information about our order execution and pricing policies',
                                        'Understanding of our compliance with anti-money laundering regulations',
                                        'Awareness of your rights and our complaint handling procedures'
                                    ].map((item, i) => (
                                        <li key={i} className="d-flex align-items-start mb-3 pb-3 border-bottom border-light">
                                            <i className="fas fa-check-circle me-3 mt-1 flex-shrink-0" style={{ color: "#0f4941" }}></i>
                                            <span className="text-dark">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SUPPORT SECTION */}
            <section className="py-5 bg-white">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="text-center mb-5">
                                <i className="fas fa-headset fs-1 mb-3" style={{ color: "#0f4941" }}></i>
                                <h2 className="fw-bold mb-3" style={{ color: "#0f4941" }}>Need Assistance?</h2>
                                <p className="text-muted mb-4">
                                    If you have any questions about our legal documents or need clarification on any terms,
                                    our compliance and support teams are here to help. We encourage you to reach out before
                                    completing your registration if you have any concerns.
                                </p>
                            </div>

                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="card border-0 shadow-sm rounded-4 p-4 h-100 text-center">
                                        <i className="fas fa-user-tie fs-2 mb-3" style={{ color: "#0f4941" }}></i>
                                        <h5 className="fw-bold mb-2">Compliance Team</h5>
                                        <a href="mailto:compliance@flexymarkets.com" className="text-decoration-none" style={{ color: "#0f4941" }}>
                                            compliance@flexymarkets.com
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card border-0 shadow-sm rounded-4 p-4 h-100 text-center">
                                        <i className="fas fa-life-ring fs-2 mb-3" style={{ color: "#0f4941" }}></i>
                                        <h5 className="fw-bold mb-2">24/7 Customer Support</h5>
                                        <a href="mailto:support@flexymarkets.com" className="text-decoration-none mb-1 d-block" style={{ color: "#0f4941" }}>
                                            support@flexymarkets.com
                                        </a>
                                        <small className="text-muted">or via live chat</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION - PREMIUM REDESIGN */}
            <section className="dark-section py-5 position-relative overflow-hidden"
                style={{
                    minHeight: '400px'
                }}>
                {/* Animated Background Elements */}
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ opacity: 0.1, pointerEvents: 'none' }}>
                    <div className="position-absolute" style={{ top: '-10%', right: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)', borderRadius: '50%', animation: 'float 6s ease-in-out infinite' }}></div>
                    <div className="position-absolute" style={{ bottom: '-10%', left: '5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)', borderRadius: '50%', animation: 'float 8s ease-in-out infinite' }}></div>
                </div>

                <div className="container position-relative py-5" style={{ zIndex: 2 }}>
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-8">
                            {/* Badge */}
                            <div className="mb-4">
                                <span className="badge px-4 py-2 rounded-pill fw-bold"
                                    style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.25)',
                                        border: '2px solid rgba(255, 255, 255, 0.5)',
                                        color: '#ffffff',
                                        backdropFilter: 'blur(10px)'
                                    }}>
                                    <i className="fas fa-shield-check me-2"></i>Regulated & Secure
                                </span>
                            </div>

                            {/* Headline */}
                            <h2 className="display-4 fw-bold mb-4" style={{ letterSpacing: '-0.5px' }}>
                                Ready to Start Trading?
                            </h2>

                            {/* Subtext */}
                            <p className="lead mb-5 mx-auto" style={{ maxWidth: '650px', fontSize: '1.15rem' }}>
                                Now that you&apos;re familiar with our legal documentation, you&apos;re ready to open your account
                                and start trading with confidence. Join <strong>15,000+ traders</strong> who trust Flexy Markets.
                            </p>

                            {/* Buttons */}
                            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-4">
                                <a href="https://user.flexymarkets.com/accounts/signUps"
                                    className="btn btn-light btn-lg rounded-pill fw-bold px-5 py-3 shadow-lg position-relative overflow-hidden"
                                    style={{
                                        color: "#0f4941",
                                        transition: 'all 0.3s ease',
                                        border: 'none'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.3)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '';
                                    }}>
                                    <i className="fas fa-rocket me-2"></i>Open Trading Account
                                </a>
                                <a href="/contact"
                                    className="btn btn-outline-light btn-lg rounded-pill fw-bold px-5 py-3"
                                    style={{
                                        borderWidth: '2px',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}>
                                    <i className="fas fa-envelope me-2"></i>Contact Support
                                </a>
                            </div>

                            {/* Trust Badges */}
                            <div className="d-flex flex-wrap justify-content-center gap-4 mt-5 pt-3" style={{ opacity: 0.9 }}>
                                <div className="d-flex align-items-center gap-2">
                                    <i className="fas fa-shield-alt fs-5"></i>
                                    <span className="small">Regulated Broker</span>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <i className="fas fa-lock fs-5"></i>
                                    <span className="small">Secure Platform</span>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <i className="fas fa-headset fs-5"></i>
                                    <span className="small">24/7 Support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Animation Keyframes */}
                <style>{`
                    @keyframes float {
                        0%, 100% { transform: translateY(0) scale(1); }
                        50% { transform: translateY(-20px) scale(1.05); }
                    }
                    .backdrop-blur {
                        backdrop-filter: blur(10px);
                    }
                `}</style>
            </section>

            <Footer />
        </main>
    );
}
