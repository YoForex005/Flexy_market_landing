"use client";

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function ContactPage() {
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
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

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
                        <i className="fas fa-headset me-2"></i>24/7 Support Available
                    </div>
                    <h1 className="display-3 fw-bold mb-4 text-dark" style={{ letterSpacing: '-1px' }}>
                        We're Here to <span style={{ color: "#0f4941" }}>Help</span>
                    </h1>
                    <p className="text-secondary mb-0 fs-5 mx-auto" style={{ maxWidth: '700px', lineHeight: '1.8' }}>
                        Got questions? Need assistance? Our dedicated support team is available 24/7 to help you succeed.
                        Reach out through your preferred channel.
                    </p>
                </div>
            </section>

            {/* CONTACT METHODS CARDS */}
            <section className="py-5 bg-white">
                <div className="container">
                    <div className="row g-4 mb-5 justify-content-center">
                        <div className="col-md-5 col-lg-4">
                            <div className="card border-0 shadow-sm rounded-4 p-4 text-center h-100 hover-lift"
                                style={{ transition: 'transform 0.3s' }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div className="mx-auto rounded-circle bg-success bg-opacity-10 d-flex align-items-center justify-content-center mb-3"
                                    style={{ width: '70px', height: '70px' }}>
                                    <i className="fas fa-envelope fs-3" style={{ color: "#0f4941" }}></i>
                                </div>
                                <h5 className="fw-bold mb-2">Email Support</h5>
                                <p className="text-muted small mb-3">Get a response within 24 hours</p>
                                <a href="mailto:support@flexymarkets.com" className="text-decoration-none fw-bold" style={{ color: "#0f4941" }}>
                                    support@flexymarkets.com
                                </a>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-4">
                            <div className="card border-0 shadow-sm rounded-4 p-4 text-center h-100 hover-lift"
                                style={{ transition: 'transform 0.3s' }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div className="mx-auto rounded-circle bg-success bg-opacity-10 d-flex align-items-center justify-content-center mb-3"
                                    style={{ width: '70px', height: '70px' }}>
                                    <i className="fas fa-phone-alt fs-3" style={{ color: "#0f4941" }}></i>
                                </div>
                                <h5 className="fw-bold mb-2">Phone Support</h5>
                                <p className="text-muted small mb-3">Available 24/7 worldwide</p>
                                <a href="tel:+442012345678" className="text-decoration-none fw-bold" style={{ color: "#0f4941" }}>
                                    +44 20 1234 5678
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACT FORM SECTION */}
            <section className="py-5" style={{ backgroundColor: "#f8fcfb" }}>
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="text-center mb-5">
                                <h2 className="fw-bold display-6 mb-3" style={{ color: "#0f4941" }}>Send Us a Message</h2>
                                <p className="text-muted">
                                    Fill out the form below and our team will get back to you as soon as possible.
                                </p>
                            </div>

                            {/* Premium Glassmorphism Form */}
                            <div className="card border-0 shadow-lg rounded-4 p-4 p-md-5"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.95)',
                                    backdropFilter: 'blur(10px)'
                                }}>
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <label className="form-label fw-bold small text-dark">Your Name *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control form-control-lg rounded-3 border-0 shadow-sm"
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                style={{ backgroundColor: '#f8f9fa' }}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label fw-bold small text-dark">Email Address *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control form-control-lg rounded-3 border-0 shadow-sm"
                                                placeholder="john@example.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                style={{ backgroundColor: '#f8f9fa' }}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label fw-bold small text-dark">Subject *</label>
                                            <select
                                                name="subject"
                                                className="form-select form-select-lg rounded-3 border-0 shadow-sm"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                style={{ backgroundColor: '#f8f9fa' }}
                                            >
                                                <option value="">Select a topic</option>
                                                <option value="general">General Inquiry</option>
                                                <option value="account">Account Support</option>
                                                <option value="technical">Technical Issue</option>
                                                <option value="trading">Trading Question</option>
                                                <option value="partnership">Partnership Opportunity</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label fw-bold small text-dark">Message *</label>
                                            <textarea
                                                name="message"
                                                className="form-control form-control-lg rounded-3 border-0 shadow-sm"
                                                rows={6}
                                                placeholder="Tell us how we can help you..."
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                style={{ backgroundColor: '#f8f9fa' }}
                                            ></textarea>
                                        </div>
                                        <div className="col-12">
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="btn btn-lg rounded-pill fw-bold px-5 py-3 shadow-lg w-100 w-md-auto"
                                                style={{ backgroundColor: "#0f4941", color: "white", border: "none" }}
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        <i className="fas fa-paper-plane me-2"></i>Send Message
                                                    </>
                                                )}
                                            </button>
                                        </div>

                                        {/* Success Message */}
                                        {submitStatus === 'success' && (
                                            <div className="col-12">
                                                <div className="alert alert-success rounded-3 d-flex align-items-center" role="alert">
                                                    <i className="fas fa-check-circle me-2 fs-5"></i>
                                                    <div>
                                                        <strong>Success!</strong> Your message has been sent to both support teams. We'll get back to you within 24 hours.
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Error Message */}
                                        {submitStatus === 'error' && (
                                            <div className="col-12">
                                                <div className="alert alert-danger rounded-3 d-flex align-items-center" role="alert">
                                                    <i className="fas fa-exclamation-circle me-2 fs-5"></i>
                                                    <div>
                                                        <strong>Error!</strong> Failed to send message. Please try again or contact us directly at support@flexymarkets.com
                                                    </div>
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

            {/* GLOBAL PRESENCE SECTION */}
            <section className="py-5 bg-white">
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold display-6 mb-3" style={{ color: "#0f4941" }}>Our Global Presence</h2>
                        <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
                            With offices and support teams around the world, we're always here when you need us.
                        </p>
                    </div>

                    <div className="row g-4">
                        {[
                            { city: 'London', country: 'United Kingdom', address: '123 Financial Street, London EC2A 1AB', icon: 'gb' },
                            { city: 'New York', country: 'United States', address: '456 Wall Street, New York, NY 10005', icon: 'us' },
                            { city: 'Dubai', country: 'United Arab Emirates', address: '789 Business Bay, Dubai, UAE', icon: 'ae' },
                            { city: 'Singapore', country: 'Singapore', address: '321 Marina Bay, Singapore 018989', icon: 'sg' }
                        ].map((office, index) => (
                            <div className="col-md-6 col-lg-3" key={index}>
                                <div className="card border-0 shadow-sm rounded-4 p-4 h-100 text-center">
                                    <div className="mb-3">
                                        <div className="rounded-circle bg-light mx-auto d-flex align-items-center justify-content-center"
                                            style={{ width: '60px', height: '60px' }}>
                                            <i className="fas fa-map-marker-alt fs-4" style={{ color: "#0f4941" }}></i>
                                        </div>
                                    </div>
                                    <h5 className="fw-bold mb-1">{office.city}</h5>
                                    <p className="text-muted small mb-2">{office.country}</p>
                                    <p className="text-muted small mb-0" style={{ fontSize: '0.85rem' }}>{office.address}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ QUICK LINKS */}
            <section className="py-5" style={{ backgroundColor: "#f8fcfb" }}>
                <div className="container py-4">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <h3 className="fw-bold mb-3" style={{ color: "#0f4941" }}>Looking for Quick Answers?</h3>
                            <p className="text-muted mb-0">
                                Check out our comprehensive FAQ section or explore our help center for instant answers to common questions.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-lg-end">
                                <a href="/learning-centre" className="btn btn-outline-dark rounded-pill fw-bold px-4 py-3">
                                    <i className="fas fa-book me-2"></i>Visit Help Center
                                </a>
                                <a href="/learning-centre" className="btn rounded-pill fw-bold px-4 py-3" style={{ backgroundColor: "#0f4941", color: "white", border: "none" }}>
                                    <i className="fas fa-question-circle me-2"></i>View FAQs
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
