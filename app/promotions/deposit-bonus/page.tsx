"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import styles from './deposit-bonus.module.css';

export default function DepositBonusPage() {

    useEffect(() => {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles['visible']);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const elementsToObserve = document.querySelectorAll(`.${styles['animate-fadeInUp']}`);
        elementsToObserve.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={styles['deposit-bonus-container']}>
            <NavBar />

            {/* Hero Section */}
            <section className={`${styles['hero-section']} ${styles['relative']} ${styles['flex']} ${styles['items-center']} ${styles['justify-center']} ${styles['overflow-hidden']} ${styles['gradient-animated']} ${styles['py-16']}`}>

                {/* Background Blobs (Hidden on mobile mostly) */}
                <div className={`${styles['absolute']} ${styles['inset-0']} ${styles['opacity-10']} ${styles['hidden']} sm:block`}>
                    <div className={`${styles['absolute']} ${styles['top-20']} ${styles['left-10']} ${styles['w-32']} ${styles['h-32']} ${styles['bg-white']} ${styles['rounded-full']} ${styles['animate-float']}`}></div>
                    <div className={`${styles['absolute']} ${styles['top-40']} ${styles['right-20']} ${styles['w-24']} ${styles['h-24']} ${styles['bg-white']} ${styles['rounded-full']} ${styles['animate-float']} ${styles['delay-200']}`}></div>
                    <div className={`${styles['absolute']} ${styles['bottom-32']} ${styles['left-1-4']} ${styles['w-40']} ${styles['h-40']} ${styles['bg-white']} ${styles['rounded-full']} ${styles['animate-float']} ${styles['delay-400']}`}></div>
                    <div className={`${styles['absolute']} ${styles['bottom-20']} ${styles['right-1-3']} ${styles['w-20']} ${styles['h-20']} ${styles['bg-white']} ${styles['rounded-full']} ${styles['animate-float']} ${styles['delay-300']}`}></div>
                </div>

                <div className={`${styles['container']} ${styles['relative']} ${styles['z-10']}`}>
                    <div className={`${styles['max-w-5xl']} ${styles['mx-auto']} ${styles['text-center']}`}>

                        <div className={`${styles['animate-fadeInUp']} ${styles['mb-4']}`}>
                            <p className={`${styles['text-white-80']} ${styles['text-lg']} ${styles['font-medium']} ${styles['uppercase']} ${styles['tracking-wider']}`}>Deposit Bonus Program</p>
                        </div>

                        <div className={`${styles['animate-fadeInUp']} ${styles['delay-100']}`}>
                            <h1 className={`${styles['text-3xl']} sm:text-5xl md:text-6xl lg:text-7xl ${styles['font-bold']} ${styles['text-white']} ${styles['mb-6']} ${styles['leading-tight']}`}>
                                Get <span className={`${styles['text-yellow-300']} ${styles['animate-pulse-custom']} inline-block`}>25%</span> Bonus on Every Deposit
                            </h1>
                        </div>

                        <h2 className={`${styles['text-xl']} sm:text-2xl md:text-3xl lg:text-4xl ${styles['font-bold']} ${styles['text-white']} ${styles['mb-8']} ${styles['animate-fadeInUp']} ${styles['delay-200']}`}>
                            Boost Your Trading Capital!
                        </h2>

                        <div className={`${styles['flex']} ${styles['flex-col']} ${styles['sm-flex-row']} ${styles['justify-center']} ${styles['gap-4']} ${styles['mb-10']} ${styles['animate-fadeInUp']} ${styles['delay-300']}`}>
                            <div className={`${styles['bg-white-20']} ${styles['backdrop-blur-md']} ${styles['px-6']} ${styles['py-3']} ${styles['rounded-full']} ${styles['text-white']} ${styles['font-semibold']}`}>
                                ✓ Up to $1,250 Per Deposit
                            </div>
                            <div className={`${styles['bg-white-20']} ${styles['backdrop-blur-md']} ${styles['px-6']} ${styles['py-3']} ${styles['rounded-full']} ${styles['text-white']} ${styles['font-semibold']}`}>
                                ✓ Profits Are Withdrawable
                            </div>
                            <div className={`${styles['bg-white-20']} ${styles['backdrop-blur-md']} ${styles['px-6']} ${styles['py-3']} ${styles['rounded-full']} ${styles['text-white']} ${styles['font-semibold']}`}>
                                ✓ Instant Credit
                            </div>
                        </div>

                        <div className={`${styles['flex']} ${styles['flex-col']} ${styles['sm-flex-row']} ${styles['gap-4']} ${styles['justify-center']} ${styles['animate-fadeInUp']} ${styles['delay-400']}`}>
                            <a href="https://user.flexymarkets.com/accounts/signUp" className={`${styles['bg-yellow-400']} ${styles['hover-bg-yellow-500']} ${styles['text-gray-900']} ${styles['font-bold']} ${styles['px-6']} sm:px-10 ${styles['py-3']} sm:py-4 ${styles['rounded-xl']} ${styles['text-lg']} ${styles['shadow-2xl']} ${styles['hover-scale-105']} ${styles['transition-all']} ${styles['duration-300']}`}>
                                Claim Your Bonus Now →
                            </a>
                            <button onClick={() => scrollToSection('how-it-works')}
                                className={`${styles['bg-white-10']} ${styles['backdrop-blur-md']} ${styles['hover-bg-white-20']} ${styles['text-white']} ${styles['font-bold']} ${styles['px-6']} sm:px-10 ${styles['py-3']} sm:py-4 ${styles['rounded-xl']} ${styles['text-lg']} ${styles['border-2']} ${styles['border-white-50']} ${styles['hover-scale-105']} ${styles['transition-all']} ${styles['duration-300']}`}>
                                How It Works
                            </button>
                        </div>

                        <div className={`${styles['mt-12']} ${styles['text-white-70']} ${styles['text-sm']} ${styles['max-w-3xl']} ${styles['mx-auto']} ${styles['animate-fadeInUp']} ${styles['delay-500']}`}>
                            <p>* The Deposit Bonus is non-withdrawable. However, profits made using the bonus are fully withdrawable under the stated conditions. *</p>
                        </div>
                    </div>
                </div>

                <div className={`${styles['scroll-indicator']} ${styles['text-white']}`}>
                    <svg className="w-6 h-6" style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className={`${styles['py-16']} ${styles['bg-white']}`} id="why-bonus">
                <div className={`${styles['container']} ${styles['mx-auto']}`}>
                    <div className={`${styles['max-w-6xl']} ${styles['mx-auto']}`}>
                        <div className={`${styles['text-center']} ${styles['mb-10']} sm:mb-16`}>
                            <h2 className={`${styles['text-3xl']} sm:text-5xl ${styles['font-bold']} ${styles['text-dark-green']} ${styles['mb-4']}`}>Why Choose Our Deposit Bonus?</h2>
                        </div>

                        <div className={`${styles['grid']} ${styles['grid-cols-1']} ${styles['sm-grid-cols-2']} ${styles['lg-grid-cols-3']} ${styles['gap-8']}`}>
                            {/* Card 1 */}
                            <div className={`${styles['text-center']} ${styles['card-hover']} ${styles['bg-gradient-gray']} ${styles['rounded-2xl']} ${styles['p-6']} sm:p-8 ${styles['shadow-lg']}`}>
                                <div className={`${styles['w-20']} ${styles['h-20']} ${styles['icon-bg']} ${styles['rounded-2xl']} ${styles['flex']} ${styles['items-center']} ${styles['justify-center']} ${styles['mx-auto']} ${styles['mb-6']} transform rotate-12`}>
                                    <svg className="w-10 h-10 text-white transform -rotate-12" style={{ width: '40px', height: '40px' }} fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className={`${styles['text-2xl']} ${styles['font-bold']} ${styles['text-dark-green']} ${styles['mb-2']}`}>Increase Your</h3>
                                <h4 className={`${styles['text-xl']} ${styles['font-bold']} ${styles['text-primary-green']} ${styles['mb-4']}`}>Capital</h4>
                                <p className={`${styles['text-gray-600']}`}>Get 25% Bonus on Every Deposit Up to $5000!</p>
                            </div>

                            {/* Card 2 */}
                            <div className={`${styles['text-center']} ${styles['card-hover']} ${styles['bg-gradient-gray']} ${styles['rounded-2xl']} ${styles['p-6']} sm:p-8 ${styles['shadow-lg']}`}>
                                <div className={`${styles['w-20']} ${styles['h-20']} ${styles['icon-bg']} ${styles['rounded-2xl']} ${styles['flex']} ${styles['items-center']} ${styles['justify-center']} ${styles['mx-auto']} ${styles['mb-6']} transform rotate-12`}>
                                    <svg className="w-10 h-10 text-white transform -rotate-12" style={{ width: '40px', height: '40px' }} fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className={`${styles['text-2xl']} ${styles['font-bold']} ${styles['text-dark-green']} ${styles['mb-2']}`}>Withdrawable</h3>
                                <h4 className={`${styles['text-xl']} ${styles['font-bold']} ${styles['text-primary-green']} ${styles['mb-4']}`}>Profits</h4>
                                <p className={`${styles['text-gray-600']}`}>Withdraw your profits under the terms.</p>
                            </div>

                            {/* Card 3 */}
                            <div className={`${styles['text-center']} ${styles['card-hover']} ${styles['bg-gradient-gray']} ${styles['rounded-2xl']} ${styles['p-6']} sm:p-8 ${styles['shadow-lg']} sm:col-span-2 lg:col-span-1`}>
                                <div className={`${styles['w-20']} ${styles['h-20']} ${styles['icon-bg']} ${styles['rounded-2xl']} ${styles['flex']} ${styles['items-center']} ${styles['justify-center']} ${styles['mx-auto']} ${styles['mb-6']} transform rotate-12`}>
                                    <svg className="w-10 h-10 text-white transform -rotate-12" style={{ width: '40px', height: '40px' }} fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className={`${styles['text-2xl']} ${styles['font-bold']} ${styles['text-dark-green']} ${styles['mb-2']}`}>Instant</h3>
                                <h4 className={`${styles['text-xl']} ${styles['font-bold']} ${styles['text-primary-green']} ${styles['mb-4']}`}>Credit</h4>
                                <p className={`${styles['text-gray-600']}`}>Bonus credited instantly after request.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className={`${styles['py-16']} ${styles['bg-gradient-gray']}`} id="how-it-works">
                <div className={`${styles['container']} ${styles['mx-auto']}`}>
                    <div className={`${styles['max-w-6xl']} ${styles['mx-auto']}`}>
                        <div className={`${styles['text-center']} ${styles['mb-16']}`}>
                            <h2 className={`${styles['text-3xl']} sm:text-5xl ${styles['font-bold']} ${styles['text-dark-green']} ${styles['mb-4']}`}>Steps to Claim Your Bonus</h2>
                            <p className={`${styles['text-lg']} sm:text-xl ${styles['text-gray-600']}`}>Get your 25% bonus in 4 simple steps</p>
                        </div>

                        <div className={`${styles['grid']} ${styles['grid-cols-1']} ${styles['sm-grid-cols-2']} ${styles['lg-grid-cols-4']} ${styles['gap-8']}`}>
                            {[1, 2, 3, 4].map((step, index) => (
                                <div key={step} className={`${styles['relative']} ${styles['h-full']}`}>
                                    <div className={`${styles['bg-white']} ${styles['rounded-2xl']} ${styles['p-8']} ${styles['shadow-lg']} ${styles['card-hover']} ${styles['h-full']} ${styles['border']} ${styles['border-gray-100']}`}>
                                        <div className={`${styles['flex']} ${styles['items-center']} ${styles['gap-4']} ${styles['mb-4']}`}>
                                            <div className={`${styles['w-12']} ${styles['h-12']} ${styles['step-number']} ${styles['rounded-full']} ${styles['flex']} ${styles['items-center']} ${styles['justify-center']} ${styles['text-white']} ${styles['font-bold']} ${styles['text-xl']} ${styles['flex-shrink-0']}`}>
                                                {step}
                                            </div>
                                            <h3 className={`${styles['text-xl']} ${styles['font-bold']} ${styles['text-dark-green']}`}>
                                                {['Sign Up & Verify', 'Create Account', 'Submit Request', 'Claim Bonus'][index]}
                                            </h3>
                                        </div>
                                        <p className={`${styles['text-gray-600']} ${styles['pl-16']}`}>
                                            {[
                                                'Sign up, log in, and complete your verification.',
                                                'Get verified, open your account, and make a deposit!',
                                                'Deposit any amount, claim bonus through ticket.',
                                                'Your bonus is added automatically; trade without delay.'
                                            ][index]}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Terms Section */}
            <section className={`${styles['py-16']} ${styles['bg-white']}`}>
                <div className={`${styles['container']} ${styles['mx-auto']}`}>
                    <div className={`${styles['max-w-5xl']} ${styles['mx-auto']}`}>
                        <div className={`${styles['text-center']} ${styles['mb-12']}`}>
                            <h2 className={`${styles['text-3xl']} sm:text-5xl ${styles['font-bold']} ${styles['text-dark-green']} ${styles['mb-4']}`}>Deposit Bonus Terms</h2>
                        </div>

                        <div className={`${styles['bg-gradient-terms']} ${styles['rounded-3xl']} ${styles['p-8']} md:p-12`}>
                            <div className={`${styles['grid']} ${styles['grid-cols-1']} ${styles['sm-grid-cols-2']} ${styles['gap-6']}`}>
                                {[
                                    'Receive 25% Bonus on Every Deposit',
                                    'Maximum bonus per deposit: $1,250 (25% of $5,000)',
                                    'Total bonus limit: Up to $5,000 per client',
                                    'Claim your bonus within 60 days of deposit',
                                    'Credit expires 60 days after claim'
                                ].map((term, index) => (
                                    <div key={index} className={`${styles['flex']} ${styles['items-center']} ${styles['gap-4']} ${index === 4 ? styles['sm-col-span-2'] : ''}`}>
                                        <div className={`${styles['flex-shrink-0']} w-10 h-10 ${styles['bg-white']} ${styles['rounded-full']} ${styles['flex']} ${styles['items-center']} ${styles['justify-center']} mt-1 shadow-sm`}>
                                            <svg className="w-5 h-5 text-[#0d6454]" style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <p className={`${styles['text-gray-700']} ${styles['font-medium']}`}>{term}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={`${styles['text-center']} ${styles['mt-10']}`}>
                            <a href="https://user.flexymarkets.com/accounts/signUp"
                                className={`${styles['btn-primary']} ${styles['text-white']} ${styles['font-bold']} ${styles['px-12']} ${styles['py-4']} ${styles['rounded-xl']} ${styles['text-lg']} ${styles['shadow-xl']} ${styles['hover-scale-105']} ${styles['transition-all']} ${styles['duration-300']}`}>
                                Get Your 25% Bonus Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className={`${styles['py-16']} ${styles['bg-gradient-gray']}`}>
                <div className={`${styles['container']} ${styles['mx-auto']}`}>
                    <div className={`${styles['max-w-4xl']} ${styles['mx-auto']}`}>
                        <div className={`${styles['text-center']} ${styles['mb-12']}`}>
                            <h2 className={`${styles['text-3xl']} sm:text-4xl ${styles['font-bold']} ${styles['text-dark-green']} ${styles['mb-4']}`}>Frequently Asked Questions</h2>
                        </div>

                        <div className={`${styles['flex']} ${styles['flex-col']} ${styles['gap-4']}`}>
                            {[
                                {
                                    q: "How does the 25% Deposit Bonus work?",
                                    a: "With any deposit, you'll receive a 25% bonus credit. For example, deposit $1,000 and receive $250 bonus. The maximum bonus per deposit is $1,250 on a $5,000 deposit."
                                },
                                {
                                    q: "How do I claim the Deposit Bonus?",
                                    a: "After you sign up, verify your account, and make a deposit, simply request your Deposit Bonus via ticket in your panel or by contacting support."
                                },
                                {
                                    q: "Can I claim this bonus multiple times?",
                                    a: "Yes! You can claim the 25% bonus on every deposit you make, up to a total maximum of $5,000 bonus per client."
                                },
                                {
                                    q: "How can I withdraw the bonus?",
                                    a: "Profits generated from trading with the bonus are withdrawable under the stated terms. The bonus itself is non-withdrawable but helps increase your trading capital. See our Terms & Conditions for complete details."
                                }
                            ].map((faq, index) => (
                                <details key={index} className={`${styles['faq-details']}`} open={index === 0}>
                                    <summary className={`${styles['faq-summary']}`}>
                                        <span>{faq.q}</span>
                                        <svg className={`${styles['faq-icon']} w-5 h-5`} style={{ width: '20px', height: '20px' }} viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </summary>
                                    <div className={`${styles['faq-content']}`}>
                                        {faq.a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className={`${styles['py-20']} ${styles['cta-minimal-bg']} ${styles['relative']} ${styles['overflow-hidden']}`}>
                <div className={`${styles['container']} ${styles['mx-auto']} ${styles['relative']} ${styles['z-10']}`}>
                    <div className={`${styles['max-w-4xl']} ${styles['mx-auto']} ${styles['text-center']}`}>
                        <h2 className={`${styles['text-3xl']} sm:text-5xl ${styles['font-bold']} ${styles['text-white']} ${styles['mb-6']}`}>
                            Ready to Boost Your Trading Capital?
                        </h2>
                        <p className={`${styles['text-xl']} ${styles['text-white-90']} ${styles['mb-10']}`}>
                            Get 25% bonus on every deposit and maximize your trading potential
                        </p>

                        <a href="https://user.flexymarkets.com/accounts/signUp" className={`${styles['btn-cta']}`}>
                            Claim Your 25% Bonus Now →
                        </a>

                        <div className={`${styles['mt-10']} ${styles['text-white-80']} ${styles['text-sm']}`}>
                            <p>* Terms and conditions apply. Maximum $5,000 total bonus per client.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
