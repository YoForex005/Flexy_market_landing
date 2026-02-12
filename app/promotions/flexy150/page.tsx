"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import styles from './flexy150.module.css';

// Using placeholders for images as specific assets might not be available
// In a real scenario, these would be imported from local assets
const balloonImage = '/promotion_page_images/flexy150_balloon.png';
const coinImage = '/promotion_page_images/flexy150_coin.jpg';

export default function Flexy150Page() {
    return (
        <div className={styles['flexy150-container']}>
            <NavBar />

            {/* Hero Section Container */}
            <div className={`${styles['flex']} ${styles['items-center']} ${styles['justify-center']} ${styles['px-4']} ${styles['py-4']} ${styles['bg-white']} ${styles['hero-container']}`}>
                <div className={`${styles['w-full']} ${styles['max-w-7xl']}`}>
                    {/* Main Hero Box */}
                    <div className={`${styles['relative']} ${styles['rounded-3xl']} ${styles['min-h-400']} ${styles['lg-min-h-500']} ${styles['px-6']} ${styles['sm-px-12']} ${styles['lg-px-16']}`}
                        style={{ background: '#ffffff' }}>

                        {/* Content Container */}
                        <div className={`${styles['relative']} ${styles['z-10']} ${styles['h-full']} ${styles['flex']} ${styles['flex-col']} ${styles['lg-flex-row']} ${styles['items-center']} ${styles['justify-between']} ${styles['gap-8']} ${styles['lg-gap-16']} ${styles['py-8']} ${styles['lg-py-12']}`}>

                            {/* Left Side - Text Content */}
                            <div className={`${styles['text-left']} ${styles['max-w-2xl']}`}>
                                <h1 className={`${styles['text-7xl']} ${styles['font-bold']} ${styles['text-green-dark']} ${styles['mb-2']}`}>
                                    Flexy150:
                                </h1>
                                <h2 className={`${styles['text-6xl']} ${styles['font-bold']} ${styles['text-green-dark']} ${styles['mb-8']}`}>
                                    Zero Deposit, Zero Risk
                                </h2>
                                <p className={`${styles['text-2xl']} ${styles['sm-text-3xl']} ${styles['text-gray-900']} ${styles['font-semibold']} ${styles['mb-10']}`}>
                                    Receive $150 Free Trading Credit from Flexy Markets!
                                </p>
                                <a href="https://user.flexymarkets.com/accounts/signUp"
                                    className={`${styles['bg-green-primary']} ${styles['hover-bg-green-dark']} ${styles['text-white']} ${styles['hover-text-white']} ${styles['font-bold']} ${styles['px-12']} ${styles['py-4']} ${styles['rounded-full']} ${styles['text-lg']} ${styles['transition-all']} ${styles['duration-300']} ${styles['transform']} ${styles['hover-scale-105']} ${styles['shadow-xl']} ${styles['hover-shadow-xl']} inline-block`}>
                                    Begin Trading Free
                                </a>
                            </div>

                            {/* Right Side - Animated Balloon */}
                            <div className={`${styles['flex-1']} ${styles['flex']} ${styles['justify-center']} ${styles['lg-justify-end']} ${styles['items-center']}`}>
                                <div className={`${styles['relative']} ${styles['w-72']} sm:w-80 ${styles['lg-w-450']} ${styles['xl-w-550']} ${styles['h-72']} sm:h-80 ${styles['lg-h-450']} ${styles['xl-h-550']} ${styles['parachute-mobile-fix']}`}>
                                    {/* Using a placeholder or the actual image if available. 
                                         Ideally, upload 'your-balloon-image.png' to public/images */}
                                    <img
                                        src={balloonImage}
                                        alt="Money Balloon"
                                        className={`${styles['object-contain']} ${styles['w-full']} ${styles['h-full']} ${styles['parachute-float']} ${styles['parachute-swing']}`}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Decorative Floating Elements */}
                        <div className={`${styles['hidden']} ${styles['lg-block']} ${styles['absolute']} ${styles['bottom-10']} ${styles['left-1-4']} w-8 h-8 ${styles['bg-green-primary']} ${styles['opacity-10']} ${styles['rounded-lg']} ${styles['rotate-12']}`}></div>
                        <div className={`${styles['hidden']} ${styles['lg-block']} ${styles['absolute']} ${styles['top-20']} ${styles['right-1-3']} w-6 h-6 ${styles['bg-green-dark']} ${styles['opacity-10']} ${styles['rounded-lg']} ${styles['-rotate-12']}`}></div>
                        <div className={`${styles['hidden']} ${styles['lg-block']} ${styles['absolute']} ${styles['bottom-20']} ${styles['right-1-4']} w-10 h-10 ${styles['bg-green-primary']} ${styles['opacity-10']} ${styles['rounded-lg']} ${styles['rotate-45']}`}></div>

                    </div>
                </div>
            </div>

            {/* Why Flexy150 Plan Section */}
            <section className={`${styles['bg-white']} ${styles['py-16']} ${styles['relative']} ${styles['overflow-hidden']}`}>

                <div className={`${styles['max-w-7xl']} ${styles['mx-auto']} ${styles['px-4']} ${styles['md-px-6']} ${styles['relative']} ${styles['z-10']}`}>

                    {/* Section Title */}
                    <div className={`${styles['flex']} ${styles['flex-col']} ${styles['items-center']} ${styles['justify-center']} ${styles['mb-12']}`}>
                        <div className={`${styles['flex']} ${styles['items-center']} ${styles['justify-center']} ${styles['gap-4']} ${styles['mb-6']}`}>
                            <h2 className={`${styles['text-4xl']} ${styles['font-bold']} ${styles['text-gray-900']} ${styles['mb-0']}`}>
                                Why Choose <span className={`${styles['text-green-primary']}`}>Flexy150 Plan?</span>
                            </h2>
                        </div>
                        <div className={`${styles['w-full']} ${styles['max-w-4xl']} ${styles['mx-auto']} ${styles['h-px']} ${styles['bg-gradient-divider']}`}></div>
                    </div>

                    {/* Cards Grid */}
                    <div className={`${styles['grid']} ${styles['grid-cols-1']} ${styles['md-grid-cols-2']} ${styles['lg-grid-cols-3']} ${styles['gap-8']} ${styles['mb-12']}`}>

                        {/* Card 1 */}
                        <div className={`${styles['relative']} group`}>
                            <div className={`${styles['relative']} ${styles['overflow-hidden']} ${styles['backdrop-blur-xl']} ${styles['bg-white']} ${styles['border']} ${styles['border-gray-300']} ${styles['rounded-2xl']} ${styles['p-8']} ${styles['shadow-2xl']} ${styles['transition-all']} ${styles['duration-500']} hover:bg-gray-50 ${styles['min-h-280']} ${styles['flex']} ${styles['flex-col']} ${styles['items-center']} ${styles['justify-center']}`}>
                                <img src={coinImage} alt="" className={styles['card-bg-watermark']} />
                                <div className={`${styles['relative']} ${styles['z-10']} ${styles['flex']} ${styles['flex-col']} ${styles['items-center']}`}>
                                    <div className={`${styles['mb-8']}`}>
                                        <div className={`${styles['w-24']} h-24 ${styles['rounded-full']} ${styles['flex']} ${styles['items-center']} ${styles['justify-center']}`}>
                                            <div className={`${styles['text-gray-900']} ${styles['text-4xl']} ${styles['font-bold']}`}>0$</div>
                                        </div>
                                    </div>
                                    <div className={`${styles['text-center']}`}>
                                        <h3 className={`${styles['text-xl']} ${styles['md-text-2xl']} ${styles['font-bold']} ${styles['text-gray-900']} ${styles['mb-4']}`}>Zero Initial Investment</h3>
                                        <div className={`${styles['w-full']} ${styles['h-px']} ${styles['bg-gradient-divider']} ${styles['mb-4']}`}></div>
                                        <p className={`${styles['text-gray-600']} ${styles['text-sm']} ${styles['md-text-base']} ${styles['leading-relaxed']}`}>
                                            Claim your trading credit immediately upon registration and account verification.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className={`${styles['relative']} group`}>
                            <div className={`${styles['relative']} ${styles['overflow-hidden']} ${styles['backdrop-blur-xl']} ${styles['bg-white']} ${styles['border']} ${styles['border-gray-300']} ${styles['rounded-2xl']} ${styles['p-8']} ${styles['shadow-2xl']} ${styles['transition-all']} ${styles['duration-500']} hover:bg-gray-50 ${styles['min-h-280']} ${styles['flex']} ${styles['flex-col']} ${styles['items-center']} ${styles['justify-center']}`}>
                                <img src={coinImage} alt="" className={styles['card-bg-watermark']} />
                                <div className={`${styles['relative']} ${styles['z-10']} ${styles['flex']} ${styles['flex-col']} ${styles['items-center']}`}>
                                    <div className={`${styles['mb-8']}`}>
                                        <div className={`${styles['w-24']} h-24 ${styles['rounded-full']} ${styles['flex']} ${styles['items-center']} ${styles['justify-center']}`}>
                                            <div className={`${styles['text-gray-900']} ${styles['flex']} ${styles['items-center']}`}>
                                                <span className={`${styles['text-4xl']} ${styles['font-bold']}`}>%</span>
                                                <svg className={`${styles['w-full']} h-10 ${styles['ml-1']}`} style={{ width: '40px', height: '40px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                    <polyline points="22,7 13.5,15.5 8.5,10.5 2,17" strokeWidth="2"></polyline>
                                                    <polyline points="16,7 22,7 22,13" strokeWidth="2"></polyline>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles['text-center']}`}>
                                        <h3 className={`${styles['text-xl']} ${styles['md-text-2xl']} ${styles['font-bold']} ${styles['text-gray-900']} ${styles['mb-4']}`}>Profit Withdrawal Available</h3>
                                        <div className={`${styles['w-full']} ${styles['h-px']} ${styles['bg-gradient-divider']} ${styles['mb-4']}`}></div>
                                        <p className={`${styles['text-gray-600']} ${styles['text-sm']} ${styles['md-text-base']} ${styles['leading-relaxed']}`}>
                                            Withdraw your earned profits by fulfilling the requirements.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className={`${styles['relative']} group ${styles['md-col-span-2']} ${styles['lg-col-span-1']}`}>
                            <div className={`${styles['relative']} ${styles['overflow-hidden']} ${styles['backdrop-blur-xl']} ${styles['bg-white']} ${styles['border']} ${styles['border-gray-200']} ${styles['rounded-2xl']} ${styles['p-8']} ${styles['shadow-2xl']} ${styles['transition-all']} ${styles['duration-500']} hover:bg-gray-50 ${styles['min-h-280']} ${styles['flex']} ${styles['flex-col']} ${styles['items-center']} ${styles['justify-center']}`}>
                                <img src={coinImage} alt="" className={styles['card-bg-watermark']} />
                                <div className={`${styles['relative']} ${styles['z-10']} ${styles['flex']} ${styles['flex-col']} ${styles['items-center']}`}>
                                    <div className={`${styles['mb-8']}`}>
                                        <div className={`${styles['w-24']} h-24 ${styles['rounded-full']} ${styles['flex']} ${styles['items-center']} ${styles['justify-center']}`}>
                                            <div className={`${styles['relative']} ${styles['text-gray-900']}`}>
                                                <svg className="w-12 h-12" style={{ width: '48px', height: '48px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 12l2 2 4-4" />
                                                </svg>
                                                <div className={`${styles['absolute']} ${styles['-top-2']} ${styles['-right-2']} w-6 h-6 bg-green-400 ${styles['rounded-full']} ${styles['border']} ${styles['border-2']} borderColor-white`}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles['text-center']}`}>
                                        <h3 className={`${styles['text-xl']} ${styles['md-text-2xl']} ${styles['font-bold']} ${styles['text-gray-900']} ${styles['mb-4']}`}>Completely Risk-Free</h3>
                                        <div className={`${styles['w-full']} ${styles['h-px']} ${styles['bg-gradient-divider']} ${styles['mb-4']}`}></div>
                                        <p className={`${styles['text-gray-600']} ${styles['text-sm']} ${styles['md-text-base']} ${styles['leading-relaxed']}`}>
                                            Upon receiving your credit, engage in trading activities without worrying about potential losses.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={`${styles['text-center']} ${styles['mb-8']}`}>
                        <p className={`${styles['text-gray-600']} ${styles['text-xs']} ${styles['md-text-sm']} ${styles['max-w-4xl']} ${styles['mx-auto']}`}>
                            * Exclusive offer for new registrations and accounts created within the past 30 days. *
                        </p>
                    </div>

                    <div className={`${styles['flex']} ${styles['justify-center']}`}>
                        <a href="https://user.flexymarkets.com/accounts/signUp"
                            className={`${styles['bg-green-primary']} ${styles['hover-bg-green-dark']} ${styles['text-white']} ${styles['hover-text-white']} ${styles['font-bold']} ${styles['px-12']} ${styles['py-4']} ${styles['rounded-full']} ${styles['text-lg']} ${styles['shadow-xl']} ${styles['hover-shadow-xl']} ${styles['transition-all']} ${styles['duration-300']} ${styles['transform']} ${styles['hover-scale-105']}`}>
                            Activate Flexy150
                        </a>
                    </div>
                </div>
            </section>

            {/* Steps Section */}
            <div className={`${styles['bg-white']} ${styles['py-16']}`}>
                <div className={`${styles['max-w-7xl']} ${styles['mx-auto']} ${styles['px-4']} ${styles['md-px-6']}`}>
                    <div className={`${styles['mb-12']}`}>
                        <h2 className={`${styles['text-4xl']} ${styles['font-bold']} ${styles['text-gray-900']} ${styles['mb-6']}`}>Registration Process</h2>
                        <div className={`${styles['w-full']} ${styles['h-px']} ${styles['bg-gradient-divider']}`}></div>
                    </div>

                    <div className={`${styles['grid']} ${styles['grid-cols-1']} ${styles['md-grid-cols-2']} ${styles['lg-grid-cols-3']} ${styles['gap-8']}`}>
                        {/* Step 1 */}
                        <div className={`${styles['bg-white']} ${styles['border']} ${styles['border-gray-200']} ${styles['rounded-2xl']} ${styles['p-10']} ${styles['shadow-lg']} ${styles['hover-shadow-xl']} ${styles['transition-all']} ${styles['duration-300']}`}>
                            <h3 className={`${styles['text-2xl']} ${styles['font-bold']} ${styles['text-gray-900']} ${styles['mb-4']}`}>1. Create Account</h3>
                            <div className={`${styles['w-full']} ${styles['h-px']} ${styles['bg-gradient-divider-left']} ${styles['mb-4']}`}></div>
                            <p className={`${styles['text-gray-600']} ${styles['text-base']} ${styles['leading-relaxed']}`}>
                                Complete the registration process and access your personal user dashboard.
                            </p>
                        </div>
                        {/* Step 2 */}
                        <div className={`${styles['bg-white']} ${styles['border']} ${styles['border-gray-200']} ${styles['rounded-2xl']} ${styles['p-10']} ${styles['shadow-lg']} ${styles['hover-shadow-xl']} ${styles['transition-all']} ${styles['duration-300']}`}>
                            <h3 className={`${styles['text-2xl']} ${styles['font-bold']} ${styles['text-gray-900']} ${styles['mb-4']}`}>2. Complete Verification</h3>
                            <div className={`${styles['w-full']} ${styles['h-px']} ${styles['bg-gradient-divider-left']} ${styles['mb-4']}`}></div>
                            <p className={`${styles['text-gray-600']} ${styles['text-base']} ${styles['leading-relaxed']}`}>
                                Complete identity verification process to activate the Flexy150 offer following registration.
                            </p>
                        </div>
                        {/* Step 3 */}
                        <div className={`${styles['bg-white']} ${styles['border']} ${styles['border-gray-200']} ${styles['rounded-2xl']} ${styles['p-10']} ${styles['shadow-lg']} ${styles['hover-shadow-xl']} ${styles['transition-all']} ${styles['duration-300']} ${styles['md-col-span-2']} ${styles['lg-col-span-1']}`}>
                            <h3 className={`${styles['text-2xl']} ${styles['font-bold']} ${styles['text-gray-900']} ${styles['mb-4']}`}>3. Activate Flexy150</h3>
                            <div className={`${styles['w-full']} ${styles['h-px']} ${styles['bg-gradient-divider-left']} ${styles['mb-4']}`}></div>
                            <p className={`${styles['text-gray-600']} ${styles['text-base']} ${styles['leading-relaxed']}`}>
                                After verification approval, navigate to the Flexy150 area in your dashboard to receive your credit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Terms Section */}
            <section className={`${styles['bg-gradient-gray']} ${styles['py-16']}`}>
                <div className={`${styles['max-w-6xl']} ${styles['mx-auto']} ${styles['px-4']} ${styles['md-px-6']}`}>
                    <div className={`${styles['text-center']} ${styles['mb-12']}`}>
                        <h2 className={`${styles['text-4xl']} ${styles['font-bold']} ${styles['text-green-dark']} ${styles['mb-4']}`}>Program Terms & Conditions</h2>
                        <p className={`${styles['text-gray-600']} ${styles['text-lg']}`}>Simple, transparent rules for the Flexy150 program</p>
                    </div>

                    <div className={`${styles['grid']} ${styles['grid-cols-1']} ${styles['md-grid-cols-2']} ${styles['gap-6']} ${styles['mb-10']}`}>
                        {[
                            { title: "$150 Trading Credit", desc: "Receive $150 tradeable credit to start your trading journey risk-free.", iconPath: "M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z", iconPath2: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" },
                            { title: "One-Time Offer", desc: "Each user can activate Flexy150 only once with Flexy Markets.", iconPath: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" },
                            { title: "30-Day Claim Period", desc: "Claim your credit within 30 days from account creation.", iconPath: "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" },
                            { title: "30-Day Validity", desc: "Credit remains valid for 30 days after activation.", iconPath: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" },
                            { title: "Withdrawal Requirements", desc: "Minimum $150 deposit required to withdraw profits earned from trading.", iconPath: "M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z", iconPath2: "M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z", color: "#e67e22" }
                        ].map((term, index) => (
                            <div key={index} className={`${styles['bg-white']} ${styles['rounded-2xl']} ${styles['p-6']} ${styles['shadow-lg']} hover:shadow-xl ${styles['transition-all']} ${styles['border-l-4']} ${styles['flex']} ${styles['items-start']} ${styles['gap-4']}`} style={{ borderColor: term.color || '#00685a' }}>
                                <div className={`${styles['flex-shrink-0']} w-12 h-12 ${styles['rounded-lg']} ${styles['flex']} ${styles['items-center']} ${styles['justify-center']}`} style={{ backgroundColor: term.color || '#00685a' }}>
                                    <svg className="w-7 h-7 text-white" style={{ width: '28px', height: '28px' }} fill="currentColor" viewBox="0 0 20 20">
                                        <path d={term.iconPath}></path>
                                        {term.iconPath2 && <path d={term.iconPath2} fillRule="evenodd" clipRule="evenodd"></path>}
                                    </svg>
                                </div>
                                <div className={`${styles['flex-1']}`}>
                                    <h3 className={`${styles['text-lg']} ${styles['font-bold']} ${styles['text-gray-900']} ${styles['mb-2']}`}>{term.title}</h3>
                                    <p className={`${styles['text-gray-600']} ${styles['text-sm']}`}>{term.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={`${styles['text-center']} ${styles['flex']} ${styles['justify-center']} ${styles['gap-4']} ${styles['px-4']} ${styles['bg-gradient-gray']}`}>
                    <a href="legal_documents/TermsandConditionsfortheFlexy150Plan.pdf" className={`${styles['bg-green-primary']} ${styles['hover-bg-green-dark']} ${styles['text-white']} ${styles['hover-text-white']} ${styles['font-bold']} ${styles['px-10']} ${styles['py-4']} ${styles['rounded-full']} ${styles['text-lg']} ${styles['shadow-xl']} ${styles['hover-shadow-xl']} ${styles['transition-all']} ${styles['duration-300']} ${styles['transform']} ${styles['hover-scale-105']}`}>
                        View Terms and Conditions
                    </a>
                </div>
            </section>

            {/* FAQ Section */}
            <section className={`${styles['bg-white']} ${styles['py-16']}`}>
                <div className={`${styles['max-w-4xl']} ${styles['mx-auto']} ${styles['px-6']}`}>
                    <div className={`${styles['text-center']} ${styles['mb-12']}`}>
                        <h2 className={`${styles['text-4xl']} ${styles['font-bold']} ${styles['text-gray-900']} ${styles['mb-6']}`}>Frequently Asked Questions</h2>
                        <div className={`${styles['w-full']} ${styles['h-px']} ${styles['bg-gradient-divider']} ${styles['mb-8']}`}></div>
                    </div>

                    <div className={`${styles['space-y-4']}`}>
                        {[
                            { q: "What is the Flexy150 program?", a: "The Flexy150 Program offers a completely risk-free beginning! New users at Flexy Markets receive $150 in trading credit, allowing them to begin trading without any upfront investment." },
                            { q: "How do I activate the Flexy150 program?", a: "Complete registration, undergo identity verification, and activate your $150 credit through the Flexy150 section within your user dashboard." },
                            { q: "Is Flexy150 available to existing members?", a: "No, the Flexy150 program is exclusively available to new registrations and accounts created within the previous 30 days." },
                            { q: "What are the requirements for trading and withdrawing profits?", a: "Execute trades using the provided $150 credit. To withdraw any profits generated from trading, you must deposit a minimum of $150 USD into your account. The $150 credit itself cannot be withdrawn, only the profits earned from trading with it." },
                            { q: "What are the specific withdrawal conditions for Flexy150?", a: "The $150 credit provided through Flexy150 can only be used for trading purposes. To withdraw any profits you earn from trading with this credit, you are required to make a minimum deposit of $150 USD to your trading account. The credit itself remains non-withdrawable and is exclusively for trading activities." }
                        ].map((item, index) => (
                            <details key={index} className={`${styles['bg-white']} ${styles['border']} ${styles['border-gray-200']} ${styles['rounded-2xl']} ${styles['overflow-hidden']} ${styles['faq-details']} ${styles['shadow-lg']} hover:shadow-xl ${styles['transition-all']} ${styles['duration-300']} ${styles['mb-6']}`} open={index === 0}>
                                <summary className={`${styles['cursor-pointer']} ${styles['px-10']} ${styles['py-8']} ${styles['text-gray-900']} ${styles['font-bold']} ${styles['text-xl']} hover:bg-gray-50 ${styles['transition-all']} ${styles['flex']} ${styles['justify-between']} ${styles['items-center']}`}>
                                    {item.q}
                                    <svg className="w-6 h-6 transform transition-transform" style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <div className={`${styles['px-10']} ${styles['pb-12']} ${styles['text-gray-600']} ${styles['text-lg']} ${styles['leading-relaxed']} ${styles['border-t']} ${styles['border-gray-100']} ${styles['pt-8']}`}>
                                    {item.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
