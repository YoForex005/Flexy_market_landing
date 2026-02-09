"use client";

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function ContactContent() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulator API call
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <main className="bg-white">
            <NavBar />

            {/* HERO SECTION */}
            <section className="position-relative overflow-hidden text-center"
                style={{
                    background: 'radial-gradient(circle at 50% -20%, #ccfbf1 0%, #ffffff 60%)',
                    paddingTop: '210px',
                    paddingBottom: '120px'
                }}
            >
                {/* Background Decor */}
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ opacity: 0.6, pointerEvents: 'none' }}>
                    <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(15, 73, 65, 0.08) 0%, transparent 70%)' }}></div>
                    <div style={{ position: 'absolute', top: '20%', left: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(45, 212, 191, 0.1) 0%, transparent 70%)' }}></div>
                </div>

                <div className="container position-relative" style={{ zIndex: 2 }}>
                    <span className="d-inline-block py-1 px-3 rounded-pill bg-white border mb-4 shadow-sm fw-bold text-success" style={{ fontSize: '14px', letterSpacing: '1px' }}>
                        CONTACT US
                    </span>
                    <h1 className="display-3 fw-bold mb-4 text-dark" style={{ letterSpacing: '-1.5px' }}>
                        We&apos;re Here to Help<br />
                        <span style={{ color: '#0f4941' }}>24/7 Support</span>
                    </h1>
                    <p className="fs-5 text-secondary mb-5 mx-auto lh-lg" style={{ maxWidth: '750px' }}>
                        Have questions? Our dedicated support team is available around the clock to assist you.
                        Reach out to us via phone, email, or live chat.
                    </p>
                </div>
            </section>

            {/* CONTACT INFO & FORM */}
            <section className="py-5 bg-white">
                <div className="container">
                    <div className="row g-5">
                        {/* Contact Info */}
                        <div className="col-lg-5">
                            <div className="p-5 rounded-4 bg-light h-100" style={{ backgroundColor: '#f8fafc' }}>
                                <h3 className="h4 fw-bold mb-4 text-dark">Get in Touch</h3>
                                <p className="text-secondary mb-5">
                                    Whether you&apos;re a new trader or an experienced pro, we&apos;re ready to answer your questions.
                                </p>

                                <div className="d-flex align-items-start mb-4">
                                    <div className="bg-white p-3 rounded-circle shadow-sm text-success me-3">
                                        <i className="fas fa-envelope fa-lg"></i>
                                    </div>
                                    <div>
                                        <h5 className="fw-bold mb-1">Email Support</h5>
                                        <p className="text-secondary mb-0">support@flexymarkets.com</p>
                                    </div>
                                </div>

                                <div className="d-flex align-items-start mb-4">
                                    <div className="bg-white p-3 rounded-circle shadow-sm text-success me-3">
                                        <i className="fas fa-phone-alt fa-lg"></i>
                                    </div>
                                    <div>
                                        <h5 className="fw-bold mb-1">Phone Support</h5>
                                        <p className="text-secondary mb-0">+44 20 1234 5678</p>
                                    </div>
                                </div>

                                <div className="d-flex align-items-start">
                                    <div className="bg-white p-3 rounded-circle shadow-sm text-success me-3">
                                        <i className="fas fa-map-marker-alt fa-lg"></i>
                                    </div>
                                    <div>
                                        <h5 className="fw-bold mb-1">Headquarters</h5>
                                        <p className="text-secondary mb-0">
                                            123 Financial District,<br />
                                            London, UK
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="col-lg-7">
                            <div className="p-5 rounded-4 border shadow-sm bg-white">
                                <h3 className="h4 fw-bold mb-4 text-dark">Send us a Message</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    name="name"
                                                    placeholder="Your Name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    name="email"
                                                    placeholder="name@example.com"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <label htmlFor="email">Email Address</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="subject"
                                                    name="subject"
                                                    placeholder="Subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <label htmlFor="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating mb-4">
                                                <textarea
                                                    className="form-control"
                                                    placeholder="Leave a message here"
                                                    id="message"
                                                    name="message"
                                                    style={{ height: '150px' }}
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                ></textarea>
                                                <label htmlFor="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button
                                                type="submit"
                                                className="btn btn-dark fw-bold px-5 py-3 w-100 rounded-pill"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? (
                                                    <span><i className="fas fa-spinner fa-spin me-2"></i> Sending...</span>
                                                ) : (
                                                    'Send Message'
                                                )}
                                            </button>
                                        </div>
                                        {submitStatus === 'success' && (
                                            <div className="col-12 mt-3">
                                                <div className="alert alert-success rounded-pill text-center" role="alert">
                                                    Message sent successfully! We&apos;ll get back to you soon.
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE SECTION */}
            <section className="py-5 text-white position-relative" style={{ backgroundColor: '#0f4941', borderRadius: '50px 50px 0 0' }}>
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h2 className="display-4 fw-bold mb-5">Why Choose Flexy Markets?</h2>
                    </div>

                    <div className="row g-4 px-lg-5">
                        {[
                            { title: "Unlock Market Potential", desc: "Access a world of trading opportunities with Flexy Markets, powered by cutting-edge AI technology and deep market expertise to help you stay ahead.", icon: "fa-globe" },
                            { title: "Maximize Your Trading Accuracy", desc: "Leverage real-time data and in-depth market analysis to validate your trades, ensuring that every decision is based on accurate and up-to-date information.", icon: "fa-crosshairs" },
                            { title: "Real-Time Insights", desc: "Benefit from instant access to market data and predictive analytics, empowering you to make well-informed, timely decisions for optimal trading performance.", icon: "fa-bolt" },
                            { title: "Empower Your Trading Journey", desc: "Join a community of successful traders using Flexy Markets' intelligent tools, designed to guide your trading strategies and maximize potential profits.", icon: "fa-road" },
                        ].map((item, i) => (
                            <div key={i} className="col-lg-6">
                                <div className="p-4 rounded-4 h-100 d-flex gap-4 align-items-start" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <div className="flex-shrink-0 mt-1">
                                        <i className={`fas ${item.icon} text-success fs-2`}></i>
                                    </div>
                                    <div>
                                        <h3 className="h5 fw-bold mb-3">{item.title}</h3>
                                        <p className="opacity-75 mb-0 lh-base small">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
