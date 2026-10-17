"use client";

import { useState } from 'react';

/** A Telegram support launcher. The filename is retained to avoid breaking existing imports. */
export default function TelegramWidget() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {isOpen && (
                <div className="telegram-widget-container">
                    <section
                        className="telegram-widget"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Chat with Flexy Markets on Telegram"
                    >
                        <div className="telegram-header">
                            <div className="d-flex align-items-center">
                                <span className="telegram-icon-wrap me-2" aria-hidden="true">
                                    <i className="fab fa-telegram-plane"></i>
                                </span>
                                <div>
                                    <div className="fw-bold">Flexy Markets</div>
                                    <div style={{ fontSize: '12px', opacity: 0.9 }}>Typically replies instantly</div>
                                </div>
                            </div>
                            <button
                                className="close-btn"
                                onClick={() => setIsOpen(false)}
                                aria-label="Close Telegram chat"
                            >
                                <i className="fas fa-times" aria-hidden="true"></i>
                            </button>
                        </div>

                        <div className="telegram-body">
                            <div className="message-bubble">
                                <div className="fw-semibold mb-1">Flexy Markets</div>
                                <p className="mb-2">
                                    Hi there! <span role="img" aria-label="waving hand">👋</span><br />
                                    How can we help you today?
                                </p>
                                <div style={{ fontSize: '11px', opacity: 0.7 }}>Just now</div>
                            </div>
                        </div>

                        <div className="telegram-footer">
                            <a
                                href="https://t.me/yoforexrobot"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="telegram-link"
                            >
                                <i className="fab fa-telegram-plane me-2" aria-hidden="true"></i>
                                Start on Telegram
                            </a>
                        </div>
                    </section>
                </div>
            )}

            <button
                className="telegram-toggle-btn"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? 'Close Telegram chat' : 'Open Telegram chat'}
                aria-expanded={isOpen}
            >
                {isOpen ? (
                    <i className="fas fa-times" style={{ fontSize: '28px' }} aria-hidden="true"></i>
                ) : (
                    <i className="fab fa-telegram-plane" style={{ fontSize: '30px', marginLeft: '-2px' }} aria-hidden="true"></i>
                )}
            </button>

            <style jsx>{`
                .telegram-widget-container {
                    position: fixed;
                    bottom: 92px;
                    right: 24px;
                    z-index: 9999;
                    animation: slideUp 0.3s ease;
                }

                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .telegram-widget {
                    width: 320px;
                    overflow: hidden;
                    background: #fff;
                    border-radius: 16px;
                    box-shadow: 0 16px 40px rgba(27, 77, 104, 0.24);
                }

                .telegram-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 16px;
                    color: #fff;
                    background: linear-gradient(135deg, #229ed9 0%, #168ac2 100%);
                }

                .telegram-icon-wrap {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 30px;
                    height: 30px;
                    border: 1px solid rgba(255, 255, 255, 0.65);
                    border-radius: 50%;
                    font-size: 17px;
                }

                .close-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 32px;
                    height: 32px;
                    padding: 4px;
                    color: #fff;
                    font-size: 20px;
                    background: transparent;
                    border: none;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: background 0.2s;
                }

                .close-btn:hover { background: rgba(255, 255, 255, 0.2); }

                .telegram-body {
                    min-height: 160px;
                    padding: 20px;
                    background: linear-gradient(135deg, #eef7fb 0%, #e3f0f6 100%);
                }

                .message-bubble {
                    max-width: 85%;
                    padding: 12px;
                    background: #fff;
                    border-radius: 12px 12px 12px 4px;
                    box-shadow: 0 2px 8px rgba(24, 73, 99, 0.12);
                }

                .telegram-footer {
                    padding: 12px;
                    background: #f8fbfd;
                    border-top: 1px solid #dcebf2;
                }

                .telegram-link {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 12px 24px;
                    color: #fff !important;
                    font-size: 15px;
                    font-weight: 600;
                    text-decoration: none;
                    background: linear-gradient(135deg, #229ed9 0%, #168ac2 100%);
                    border-radius: 10px;
                    transition: all 0.2s;
                }

                .telegram-link:hover {
                    background: linear-gradient(135deg, #168ac2 0%, #0e78ad 100%);
                    box-shadow: 0 6px 14px rgba(34, 158, 217, 0.3);
                    transform: translateY(-1px);
                }

                .telegram-toggle-btn {
                    position: fixed;
                    right: 24px;
                    bottom: 24px;
                    z-index: 9998;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 60px;
                    height: 60px;
                    color: #fff;
                    background: linear-gradient(135deg, #229ed9 0%, #168ac2 100%);
                    border: none;
                    border-radius: 50%;
                    box-shadow: 0 7px 20px rgba(34, 158, 217, 0.42);
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .telegram-toggle-btn:hover {
                    box-shadow: 0 10px 26px rgba(34, 158, 217, 0.52);
                    transform: scale(1.1);
                }

                .telegram-toggle-btn:active { transform: scale(0.95); }

                @media (max-width: 480px) {
                    .telegram-widget-container { right: 16px; bottom: 84px; }
                    .telegram-widget { width: calc(100vw - 32px); max-width: 320px; }
                    .telegram-toggle-btn { right: 16px; bottom: 16px; width: 56px; height: 56px; }
                }
            `}</style>
        </>
    );
}
