
"use client";

import { useState } from 'react';

export default function WhatsAppWidget() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Floating WhatsApp Chat Widget */}
            {isOpen && (
                <div className="whatsapp-widget-container">
                    <div className="whatsapp-widget">
                        {/* Header */}
                        <div className="whatsapp-header">
                            <div className="d-flex align-items-center">
                                <i className="fab fa-whatsapp me-2" style={{ fontSize: '24px' }}></i>
                                <div>
                                    <div className="fw-bold">Flexy Markets</div>
                                    <div style={{ fontSize: '12px', opacity: 0.9 }}>Typically replies instantly</div>
                                </div>
                            </div>
                            <button
                                className="close-btn"
                                onClick={() => setIsOpen(false)}
                                aria-label="Close chat"
                            >
                                <i className="fas fa-times"></i>
                            </button>
                        </div>

                        {/* Body */}
                        <div className="whatsapp-body">
                            <div className="message-bubble">
                                <div className="fw-semibold mb-1">Flexy Markets</div>
                                <p className="mb-2">
                                    Hi there! 👋<br />
                                    How can we help you today?
                                </p>
                                <div style={{ fontSize: '11px', opacity: 0.7 }}>Just now</div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="whatsapp-footer">
                            <a
                                href="https://api.whatsapp.com/send?phone=443300271632&text=Hello,%20I%20have%20a%20question%20about%20Flexy%20Markets"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="whatsapp-link"
                            >
                                <i className="fab fa-whatsapp me-2"></i>
                                Start Chat
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                className="whatsapp-toggle-btn"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Open WhatsApp chat"
            >
                {isOpen ? (
                    <i className="fas fa-times" style={{ fontSize: '28px' }}></i>
                ) : (
                    <i className="fab fa-whatsapp" style={{ fontSize: '32px' }}></i>
                )}
            </button>

            {/* Styles */}
            <style jsx>{`
                .whatsapp-widget-container {
                    position: fixed;
                    bottom: 92px;
                    right: 24px;
                    z-index: 9999;
                    animation: slideUp 0.3s ease;
                }

                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .whatsapp-widget {
                    width: 320px;
                    background: #fff;
                    border-radius: 16px;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
                    overflow: hidden;
                }

                .whatsapp-header {
                    background: linear-gradient(135deg, #0f664a 0%, #0d5a40 100%);
                    color: #fff;
                    padding: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .close-btn {
                    background: transparent;
                    border: none;
                    color: #fff;
                    font-size: 20px;
                    cursor: pointer;
                    padding: 4px;
                    width: 32px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    transition: background 0.2s;
                }

                .close-btn:hover {
                    background: rgba(255, 255, 255, 0.2);
                }

                .whatsapp-body {
                    padding: 20px;
                    background: #e5ddd5;
                    min-height: 160px;
                }

                .message-bubble {
                    background: #fff;
                    padding: 12px;
                    border-radius: 8px;
                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
                    max-width: 85%;
                }

                .whatsapp-footer {
                    padding: 12px;
                    background: #f0f0f0;
                    border-top: 1px solid #e0e0e0;
                }

                .whatsapp-link {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(135deg, #0f664a 0%, #0d5a40 100%);
                    color: #fff !important;
                    padding: 12px 24px;
                    border-radius: 8px;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 15px;
                    transition: all 0.2s;
                }

                .whatsapp-link:hover {
                    background: linear-gradient(135deg, #0d5a40 0%, #0b4d35 100%);
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(15, 102, 74, 0.3);
                }

                .whatsapp-toggle-btn {
                    position: fixed;
                    bottom: 24px;
                    right: 24px;
                    width: 60px;
                    height: 60px;
                    background: linear-gradient(135deg, #0f664a 0%, #0d5a40 100%);
                    color: #fff;
                    border: none;
                    border-radius: 50%;
                    box-shadow: 0 4px 16px rgba(15, 102, 74, 0.4);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9998;
                    transition: all 0.3s ease;
                }

                .whatsapp-toggle-btn:hover {
                    transform: scale(1.1);
                    box-shadow: 0 6px 24px rgba(15, 102, 74, 0.5);
                }

                .whatsapp-toggle-btn:active {
                    transform: scale(0.95);
                }

                @media (max-width: 480px) {
                    .whatsapp-widget-container {
                        right: 16px;
                        bottom: 84px;
                    }

                    .whatsapp-widget {
                        width: calc(100vw - 32px);
                        max-width: 320px;
                    }

                    .whatsapp-toggle-btn {
                        right: 16px;
                        bottom: 16px;
                        width: 56px;
                        height: 56px;
                    }
                }
            `}</style>
        </>
    );
}
