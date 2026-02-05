/* eslint-disable @next/next/no-img-element */
"use client";


import AnimatedBackground from './AnimatedBackground';

export default function Discover() {
    return (
        <div className="discover my-5 py-5 position-relative">
            {/* Subtle Gradient Waves Background */}
            <AnimatedBackground variant="waves" intensity="subtle" />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>

                {/* Header Section */}
                <div className="row text-center mb-5">
                    <div className="col-lg-12">
                        <h2 className="display-4 fw-bold" style={{ color: '#000', fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
                            Discover Our Traders&apos; <span style={{ color: '#0f664a' }}>Favourites</span>
                        </h2>
                        <p className="lead text-muted mt-3 mx-auto" style={{ fontSize: '1.1rem', maxWidth: '700px' }}>
                            Explore some of our must-have products that keep everyone trading with us time and again.
                        </p>
                    </div>
                </div>

                {/* Cards Section */}
                <div className="discover_items mt-4">
                    <div className="row g-4 d-flex align-items-stretch">

                        {/* Card 1: Seamless Trading (Uses Gold Gift Box) */}
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div
                                className="discover-card h-100 rounded-5 p-4 p-md-5 overflow-hidden position-relative"
                                style={{
                                    background: 'linear-gradient(135deg, #0a3d35 0%, #0f4941 100%)',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                                    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                                    border: '1px solid rgba(15, 102, 74, 0.3)'
                                }}
                            >
                                <div className="row h-100 align-items-center">
                                    <div className="col-md-7 z-2">
                                        <h3 className="h2 fw-bold mb-3 text-white">Seamless Trading</h3>
                                        <p className="mb-4 text-white-50" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
                                            Get full access to Flexy Market&apos;s top-rated, award-winning trading platforms designed to make your trading journey smooth and profitable.
                                        </p>
                                        <a
                                            href="https://user.flexymarkets.com/accounts/signUps"
                                            className="btn fw-bold rounded-pill px-4 py-2 text-white"
                                            style={{
                                                background: 'transparent',
                                                border: '2px solid rgba(46, 204, 113, 0.5)',
                                                transition: 'all 0.3s'
                                            }}
                                        >
                                            Join Now
                                        </a>
                                    </div>
                                    <div className="col-md-5 z-1 mt-4 mt-md-0 d-flex justify-content-center position-relative">
                                        <div className="image-crop-container">
                                            <img
                                                src="/images/gift-box-3d.png"
                                                alt="Seamless Trading Gift Box"
                                                className="img-fluid drop-shadow-3d zoom-image blend-screen"
                                                style={{
                                                    maxHeight: '250px',
                                                    filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))',
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Maximize Your Returns (Uses Silver Graph) */}
                        <div className="col-lg-6">
                            <div
                                className="discover-card h-100 rounded-5 p-4 p-md-5 overflow-hidden position-relative"
                                style={{
                                    background: 'linear-gradient(135deg, #e8f5f0 0%, #d4ebe3 100%)',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                                    border: '1px solid rgba(15, 102, 74, 0.3)'
                                }}
                            >
                                <div className="row h-100 align-items-center">
                                    <div className="col-md-7 z-2">
                                        <h3 className="h2 fw-bold mb-3" style={{ color: '#0f4941' }}>Maximize<br />Your Returns</h3>
                                        <p className="mb-4" style={{ color: '#344054', fontSize: '1.05rem', lineHeight: '1.6' }}>
                                            Use our extensive range of trading tools to minimize risk, maximize profits, and unlock your true trading potential.
                                        </p>
                                        <a
                                            href="https://user.flexymarkets.com/accounts/signUps"
                                            className="btn fw-bold rounded-pill px-4 py-2"
                                            style={{
                                                color: '#0f4941',
                                                background: 'transparent',
                                                border: '2px solid rgba(15, 102, 74, 0.3)',
                                                transition: 'all 0.3s'
                                            }}
                                        >
                                            Join Now
                                        </a>
                                    </div>
                                    <div className="col-md-5 z-1 mt-4 mt-md-0 d-flex justify-content-center position-relative">
                                        <div className="image-crop-container">
                                            <img
                                                src="/images/growth-chart-3d.png"
                                                alt="Maximize Returns Graph"
                                                className="img-fluid drop-shadow-3d zoom-image"
                                                style={{
                                                    maxHeight: '280px',
                                                    filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.2))',
                                                    maskImage: 'radial-gradient(circle closest-side, black 65%, transparent 95%)',
                                                    WebkitMaskImage: 'radial-gradient(circle closest-side, black 65%, transparent 95%)'
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 3: Empower Your Strategy (Uses New Gold Trophy) */}
                        <div className="col-lg-12">
                            <div
                                className="discover-card rounded-5 p-4 p-md-5 overflow-hidden position-relative mt-4"
                                style={{
                                    background: 'linear-gradient(135deg, #0a3d35 0%, #0f4941 100%)',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                                    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                                    minHeight: '300px'
                                }}
                            >
                                <div className="row align-items-center">
                                    <div className="col-md-7 z-2">
                                        <h3 className="h2 fw-bold mb-3 text-white">Empower Your Strategy</h3>
                                        <p className="mb-4 text-white-50" style={{ fontSize: '1.05rem', lineHeight: '1.6', maxWidth: '600px' }}>
                                            Join 10,000+ traders leveraging expert strategies and insights to stay ahead in the game. Start your winning journey today.
                                        </p>
                                        <a
                                            href="https://user.flexymarkets.com/accounts/signUps"
                                            className="btn fw-bold rounded-pill px-5 py-3 text-white"
                                            style={{
                                                background: '#0f664a',
                                                border: 'none',
                                                boxShadow: '0 4px 15px rgba(15, 102, 74, 0.4)'
                                            }}
                                        >
                                            Join Now
                                        </a>
                                    </div>
                                    <div className="col-md-5 z-1 mt-4 mt-md-0 d-flex justify-content-center justify-content-md-end position-relative">
                                        <div className="image-crop-container">
                                            <img
                                                src="/images/trophy-new-3d.png"
                                                alt="Winning Trophy"
                                                className="img-fluid zoom-image trophy-rotate blend-screen"
                                                style={{
                                                    maxHeight: '330px',
                                                    filter: 'brightness(1.15) contrast(1.05) drop-shadow(0 0 30px rgba(255,215,0,0.15))',
                                                    clipPath: 'inset(0 0 40px 0)', /* Crops the bottom logo */
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Inline CSS for Hover Effects & Cropping */}
                <style jsx>{`
                    /* Floating Card Effect */
                    .discover-card:hover {
                        transform: translateY(-10px) !important;
                    }
                    
                    /* Image Container to Crop Watermark (Bottom Right) */
                    .image-crop-container {
                        overflow: hidden;
                        border-radius: 20px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                    }

                    /* Zoom Image Setup */
                    .zoom-image {
                        transform: scale(1.1);
                        width: auto;
                        object-fit: contain;
                    }

                    /* Blend Mode for Dark Cards (Removes Black Background) */
                    .blend-screen {
                        mix-blend-mode: screen; 
                    }
                    
                    /* Rotate Trophy */
                    .trophy-rotate {
                         transform: scale(1.1) rotate(-5deg);
                    }

                    /* No Hover Effects */
                `}</style>
            </div>
        </div>
    );
}
