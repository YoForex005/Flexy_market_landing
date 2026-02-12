"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import styles from './promotions.module.css';

// Import local images directly for better Next.js optimization and path resolution
import depositBonusImg from './promotion_page_images/deposit_bonus.webp';
import loyaltyProgramImg from './promotion_page_images/loyalty_program.png';
import referFriendImg from './promotion_page_images/refer_a_friend.png';
import freeVpsImg from './promotion_page_images/free_vps_service.png';
import zeroFeesImg from './promotion_page_images/zero_fees.png';
import noDepositBonusImg from './promotion_page_images/deposit_bonus_2.jpg';

export default function PromotionsContent() {

    // Intersection Observer for scroll animations
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles['animate-fadeInUp']);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements
        const elementsToObserve = document.querySelectorAll(`.${styles['group']}, .${styles['section-title']}, .observe-me`);
        elementsToObserve.forEach(el => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <main className={`${styles['promotions-container']} custom-scrollbar`}>
            <NavBar />

            {/* Hero Section with Gradient Animation */}
            {/* Added top padding to account for fixed navbar */}
            <section className={`${styles['gradient-animated']} position-relative overflow-hidden`} style={{ minHeight: '70vh', paddingTop: '120px' }}>
                {/* Floating Background Elements */}
                <div className={`${styles['absolute']} ${styles['inset-0']} ${styles['opacity-10']} ${styles['pointer-events-none']}`}>
                    <div className={`${styles['absolute']} ${styles['top-20']} ${styles['left-10']} ${styles['w-32']} ${styles['h-32']} bg-white ${styles['rounded-full']} ${styles['animate-float']}`}></div>
                    <div className={`${styles['absolute']} ${styles['top-40']} ${styles['right-20']} ${styles['w-24']} ${styles['h-24']} bg-white ${styles['rounded-full']} ${styles['animate-float']} ${styles['delay-200']}`}></div>
                    <div className={`${styles['absolute']} ${styles['bottom-32']} ${styles['left-1-4']} ${styles['w-40']} ${styles['h-40']} bg-white ${styles['rounded-full']} ${styles['animate-float']} ${styles['delay-400']}`}></div>
                    <div className={`${styles['absolute']} ${styles['bottom-20']} ${styles['right-1-3']} ${styles['w-20']} ${styles['h-20']} bg-white ${styles['rounded-full']} ${styles['animate-float']} ${styles['delay-300']}`}></div>
                </div>

                <div className="container mx-auto px-4 py-5 position-relative z-10">
                    <div className="text-center mx-auto" style={{ maxWidth: '896px' }}> {/* max-w-4xl approx 896px */}
                        <div className={`${styles['animate-fadeInUp']}`}>
                            <p className={`${styles['text-white-80']} ${styles['text-lg']} md:text-xl ${styles['font-medium']} text-uppercase tracking-wider mb-4`}>Exclusive Offers</p>
                        </div>
                        <div className={`${styles['animate-fadeInUp']} ${styles['delay-100']}`}>
                            <h1 className={`${styles['text-4xl']} ${styles['md-text-6xl']} ${styles['lg-text-7xl']} ${styles['font-bold']} text-white ${styles['mb-6']} lh-1`}>
                                Get More From<br />Your Trading
                            </h1>
                        </div>
                        <div className={`${styles['animate-fadeInUp']} ${styles['delay-200']}`}>
                            <p className={`${styles['text-xl']} ${styles['md-text-2xl']} ${styles['text-white-90']} ${styles['mb-10']}`}>
                                Unlock exclusive rewards and benefits through our promotions.
                            </p>
                        </div>
                        <div className={`${styles['animate-fadeInUp']} ${styles['delay-300']}`}>
                            <a href="https://user.flexymarkets.com/accounts/signUp">
                                <button className={`${styles['btn-yellow']} ${styles['animate-pulse-custom']}`}>
                                    Start Trading Forex →
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className={`${styles['absolute']} ${styles['bottom-10']} ${styles['left-1-2']} ${styles['transform-center-x']} ${styles['animate-bounce']}`}>
                    <svg className="w-6 h-6 text-white" style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </section>

            {/* Featured Bonuses Section */}
            <section className={`${styles['section-padding']} bg-white`}>
                <div className="container mx-auto px-4">
                    <div className="mx-auto" style={{ maxWidth: '1280px' }}> {/* max-w-7xl */}

                        {/* Section Header */}
                        <div className="text-center ${styles['mb-16']}">
                            <h2 className={`${styles['section-title']} observe-me`}>Featured Bonuses</h2>
                            <p className={`${styles['section-subtitle']} observe-me`}>Choose the bonus that fits your trading style</p>
                        </div>

                        {/* Bonus Cards Grid */}
                        <div className="row g-4 mb-5">

                            {/* Deposit Bonus Card */}
                            <div className="col-md-6 mb-4">
                                <div className={`${styles['group']} border rounded-4 shadow-sm overflow-hidden h-100 position-relative ${styles['card-hover']}`}>
                                    <div className={`position-relative ${styles['image-zoom-container']}`} style={{ height: '256px' }}>
                                        <Image src={depositBonusImg} alt="Deposit Bonus" className={`w-100 h-100 object-fit-cover ${styles['image-zoom']}`} fill style={{ objectFit: "cover" }} />
                                        <div className={`position-absolute top-0 start-0 w-100 h-100 ${styles['gradient-overlay']}`}></div>
                                        <div className={`${styles['badge-custom']} ${styles['badge-yellow']}`}>
                                            25% Bonus
                                        </div>
                                    </div>
                                    <div className="bg-white p-5">
                                        <h3 className={`h3 ${styles['font-bold']} ${styles['text-dark-green']} mb-3`}>Deposit Bonus</h3>
                                        <p className={`${styles['text-gray-600']} mb-4 lh-base`}>
                                            Boost your trading power and explore new opportunities with bonuses designed to work for you. Bonus credited in your account base currency.
                                        </p>
                                        <p className={`${styles['text-sm']} ${styles['text-gray-500']} ${styles['mb-6']}`}>
                                            The bonus is not withdrawable only profits are. T&Cs apply.
                                        </p>
                                        <Link href="/promotions/deposit-bonus" className={`${styles['btn-primary-custom']}`}>
                                            Claim Now
                                            <svg className="w-5 h-5" style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Flexy150 No Deposit Bonus Card */}
                            <div className="col-md-6 mb-4">
                                <div className={`${styles['group']} border rounded-4 shadow-sm overflow-hidden h-100 position-relative ${styles['card-hover']}`}>
                                    <div className={`position-relative ${styles['image-zoom-container']}`} style={{ height: '256px' }}>
                                        <Image src={noDepositBonusImg} alt="Flexy150 Bonus" className={`w-100 h-100 object-fit-cover ${styles['image-zoom']}`} fill style={{ objectFit: "cover" }} />
                                        <div className={`position-absolute top-0 start-0 w-100 h-100 ${styles['gradient-overlay']}`}></div>
                                        <div className={`${styles['badge-custom']} ${styles['badge-green']}`}>
                                            $150 NDB
                                        </div>
                                    </div>
                                    <div className="bg-white p-5">
                                        <h3 className={`h3 ${styles['font-bold']} ${styles['text-dark-green']} mb-3`}>Flexy150: No Deposit Bonus</h3>
                                        <p className={`${styles['text-gray-600']} mb-4 lh-base`}>
                                            Start trading with $150 free credit without any deposit required. Perfect for beginners to experience real trading with zero risk.
                                        </p>
                                        <p className={`${styles['text-sm']} ${styles['text-gray-500']} ${styles['mb-6']}`}>
                                            To withdraw profits, a minimum deposit of $150 is required. T&Cs apply.
                                        </p>
                                        <Link href="/promotions/flexy150" className={`${styles['btn-primary-custom']}`}>
                                            Learn More
                                            <svg className="w-5 h-5" style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Benefits Section */}
            <section className={`${styles['section-padding']} ${styles['bg-gray-50']}`}>
                <div className="container mx-auto px-4">
                    <div className="mx-auto" style={{ maxWidth: '1280px' }}>

                        {/* Section Header */}
                        <div className="text-center ${styles['mb-16']}">
                            <h2 className={`${styles['section-title']} observe-me`}>More Ways to Succeed</h2>
                            <p className={`${styles['section-subtitle']} observe-me`}>Additional benefits to maximize your trading potential</p>
                        </div>

                        {/* Benefits Grid */}
                        <div className="row g-4">

                            {/* Loyalty Program */}
                            <div className="col-md-6 col-lg-3">
                                <div className={`${styles['group']} bg-white rounded-4 overflow-hidden shadow-sm h-100 ${styles['card-hover']}`}>
                                    <div className={`position-relative ${styles['image-zoom-container']}`} style={{ height: '192px' }}>
                                        <Image src={loyaltyProgramImg} alt="Loyalty Program" className={`w-100 h-100 object-fit-cover ${styles['image-zoom']}`} fill style={{ objectFit: "cover" }} />
                                        <div className={`position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-0`}></div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className={`h5 ${styles['font-bold']} ${styles['text-dark-green']} mb-2`}>Loyalty Program</h3>
                                        <p className={`${styles['text-gray-600']} small mb-4`}>Trade and earn points that can be redeemed for credit bonus rewards.</p>
                                        <a href="https://user.flexymarkets.com/accounts/signUp" className={`${styles['text-dark-green']} fw-bold text-decoration-none d-inline-flex align-items-center gap-1`}>
                                            Join Now
                                            <svg className="w-4 h-4" style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Refer a Friend */}
                            <div className="col-md-6 col-lg-3">
                                <div className={`${styles['group']} bg-white rounded-4 overflow-hidden shadow-sm h-100 ${styles['card-hover']}`}>
                                    <div className={`position-relative ${styles['image-zoom-container']}`} style={{ height: '192px' }}>
                                        <Image src={referFriendImg} alt="Refer a Friend" className={`w-100 h-100 object-fit-cover ${styles['image-zoom']}`} fill style={{ objectFit: "cover" }} />
                                    </div>
                                    <div className="p-4">
                                        <h3 className={`h5 ${styles['font-bold']} ${styles['text-dark-green']} mb-2`}>Refer a Friend</h3>
                                        <p className={`${styles['text-gray-600']} small mb-4`}>The more people you invite, the more you earn with every successful referral.</p>
                                        <a href="https://user.flexymarkets.com/accounts/signUp" className={`${styles['text-dark-green']} fw-bold text-decoration-none d-inline-flex align-items-center gap-1`}>
                                            Start Earning Now
                                            <svg className="w-4 h-4" style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Free VPS Service */}
                            <div className="col-md-6 col-lg-3">
                                <div className={`${styles['group']} bg-white rounded-4 overflow-hidden shadow-sm h-100 ${styles['card-hover']}`}>
                                    <div className={`position-relative ${styles['image-zoom-container']}`} style={{ height: '192px' }}>
                                        <Image src={freeVpsImg} alt="Free VPS Service" className={`w-100 h-100 object-fit-cover ${styles['image-zoom']}`} fill style={{ objectFit: "cover" }} />
                                    </div>
                                    <div className="p-4">
                                        <h3 className={`h5 ${styles['font-bold']} ${styles['text-dark-green']} mb-2`}>Free VPS Service</h3>
                                        <p className={`${styles['text-gray-600']} small mb-4`}>Increase the speed of your trades and eliminate downtime.</p>
                                        <a href="https://user.flexymarkets.com/accounts/signUp" className={`${styles['text-dark-green']} fw-bold text-decoration-none d-inline-flex align-items-center gap-1`}>
                                            Claim Now
                                            <svg className="w-4 h-4" style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Zero Fees */}
                            <div className="col-md-6 col-lg-3">
                                <div className={`${styles['group']} bg-white rounded-4 overflow-hidden shadow-sm h-100 ${styles['card-hover']}`}>
                                    <div className={`position-relative ${styles['image-zoom-container']}`} style={{ height: '192px' }}>
                                        <Image src={zeroFeesImg} alt="Zero Fees" className={`w-100 h-100 object-fit-cover ${styles['image-zoom']}`} fill style={{ objectFit: "cover" }} />
                                    </div>
                                    <div className="p-4">
                                        <h3 className={`h5 ${styles['font-bold']} ${styles['text-dark-green']} mb-2`}>Zero Fees</h3>
                                        <p className={`${styles['text-gray-600']} small mb-4`}>No hidden fees. Your money is for trading, not paying for the service.</p>
                                        <a href="https://user.flexymarkets.com/accounts/signUp" className={`${styles['text-dark-green']} fw-bold text-decoration-none d-inline-flex align-items-center gap-1`}>
                                            Create Account
                                            <svg className="w-4 h-4" style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section with Gradient */}
            <section className={`${styles['section-padding']} ${styles['gradient-animated']} position-relative overflow-hidden`}>
                <div className={`${styles['absolute']} ${styles['inset-0']} ${styles['opacity-10']} ${styles['pointer-events-none']}`}>
                    <div className={`${styles['absolute']} ${styles['top-10']} ${styles['left-10']} ${styles['w-24']} ${styles['h-24']} bg-white ${styles['rounded-full']} ${styles['animate-float']}`}></div>
                    <div className={`${styles['absolute']} ${styles['bottom-10']} ${styles['right-10']} ${styles['w-32']} ${styles['h-32']} bg-white ${styles['rounded-full']} ${styles['animate-float']} ${styles['delay-300']}`}></div>
                    <div className={`${styles['absolute']} ${styles['top-1-2']} ${styles['left-1-3']} ${styles['w-16']} ${styles['h-16']} bg-white ${styles['rounded-full']} ${styles['animate-float']} ${styles['delay-500']}`}></div>
                </div>

                <div className="container mx-auto px-4 position-relative z-10">
                    <div className="text-center mx-auto" style={{ maxWidth: '896px' }}>
                        <h2 className={`${styles['text-4xl']} ${styles['md-text-5xl']} ${styles['font-bold']} text-white ${styles['mb-6']}`}>
                            Want More From Your Trades?
                        </h2>
                        <p className={`${styles['text-xl']} ${styles['text-white-90']} ${styles['mb-10']}`}>
                            Claim rewards and benefits when you trade with Flexy. Open your account today.
                        </p>
                        <a href="https://user.flexymarkets.com/accounts/signUp">
                            <button className={`${styles['btn-yellow']} ${styles['animate-pulse-custom']}`}>
                                Start Trading Now →
                            </button>
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
