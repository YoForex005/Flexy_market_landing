"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Loader() {
    const [isLoading, setIsLoading] = useState(true);
    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        const timer = setTimeout(() => setIsLoading(false), 1800);
        const removeTimer = setTimeout(() => setShouldRender(false), 2400);

        return () => {
            clearTimeout(timer);
            clearTimeout(removeTimer);
            document.body.style.overflow = 'unset';
        };
    }, [isLoading]);

    if (!shouldRender) return null;

    return (
        <>
            {/* Global keyframes — NOT styled-jsx, guaranteed to work */}
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes fxAmbient{0%,100%{opacity:.5;transform:scale(1) translate(0,0)}50%{opacity:1;transform:scale(1.1) translate(10px,-10px)}}
                @keyframes fxFadeIn{from{opacity:0;transform:translateY(20px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}
                @keyframes fxOrbitRotate{to{transform:rotate(360deg)}}
                @keyframes fxArcMorph{0%{stroke-dashoffset:502.65}50%{stroke-dashoffset:150}100%{stroke-dashoffset:502.65}}
                @keyframes fxBreathe{0%,100%{transform:translate(-50%,-50%) scale(1)}50%{transform:translate(-50%,-50%) scale(1.06)}}
                @keyframes fxTextReveal{from{opacity:0;transform:translateY(15px);filter:blur(8px)}to{opacity:1;transform:translateY(0);filter:blur(0)}}
                @keyframes fxDotPop{from{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}
                @keyframes fxSweep{0%{transform:translateX(-100%)}100%{transform:translateX(300%)}}
            `}} />

            <div
                style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 9999,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    opacity: isLoading ? 1 : 0,
                    transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                    pointerEvents: isLoading ? 'all' : 'none',
                }}
            >
                {/* BG gradient */}
                <div style={{
                    position: 'absolute', inset: 0, zIndex: 0,
                    background: 'linear-gradient(150deg, #061a15 0%, #0a3028 35%, #0f4941 65%, #082a22 100%)',
                }} />

                {/* Trading grid */}
                <div style={{
                    position: 'absolute', inset: 0, zIndex: 1,
                    backgroundImage: 'linear-gradient(rgba(46,204,113,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(46,204,113,0.03) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                    maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 70%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 70%)',
                }} />

                {/* Glow 1 */}
                <div style={{
                    position: 'absolute', borderRadius: '50%', filter: 'blur(80px)',
                    pointerEvents: 'none', zIndex: 1,
                    width: 500, height: 500,
                    background: 'radial-gradient(circle, rgba(46,204,113,0.12) 0%, transparent 70%)',
                    top: '-20%', left: '-10%',
                    animation: 'fxAmbient 8s ease-in-out infinite',
                }} />

                {/* Glow 2 */}
                <div style={{
                    position: 'absolute', borderRadius: '50%', filter: 'blur(80px)',
                    pointerEvents: 'none', zIndex: 1,
                    width: 400, height: 400,
                    background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)',
                    bottom: '-15%', right: '-10%',
                    animation: 'fxAmbient 10s ease-in-out infinite reverse',
                }} />

                {/* Center content */}
                <div style={{
                    position: 'relative', zIndex: 10, textAlign: 'center',
                    animation: 'fxFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                }}>

                    {/* Orbital ring */}
                    <div style={{ position: 'relative', width: 160, height: 160, margin: '0 auto 30px' }}>
                        <svg viewBox="0 0 200 200" style={{
                            width: '100%', height: '100%',
                            animation: 'fxOrbitRotate 3s linear infinite',
                            filter: 'drop-shadow(0 0 20px rgba(46,204,113,0.15))',
                        }}>
                            <defs>
                                <linearGradient id="fxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#2ecc71" stopOpacity={1} />
                                    <stop offset="50%" stopColor="#d4af37" stopOpacity={1} />
                                    <stop offset="100%" stopColor="#2ecc71" stopOpacity={0.3} />
                                </linearGradient>
                            </defs>
                            {/* Outer ring */}
                            <circle cx="100" cy="100" r="95" fill="none" stroke="rgba(46,204,113,0.04)" strokeWidth="1" />
                            {/* Track ring */}
                            <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(46,204,113,0.06)" strokeWidth="1" />
                            {/* Animated arc */}
                            <circle
                                cx="100" cy="100" r="80"
                                fill="none" stroke="url(#fxGrad)"
                                strokeWidth="2.5" strokeLinecap="round"
                                strokeDasharray="502.65" strokeDashoffset="380"
                                style={{ animation: 'fxArcMorph 2.4s ease-in-out infinite' }}
                            />
                            {/* Orbiting green dot */}
                            <circle cx="100" cy="20" r="3" fill="#2ecc71" style={{ filter: 'drop-shadow(0 0 6px rgba(46,204,113,0.8))' }}>
                                <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="2s" repeatCount="indefinite" />
                            </circle>
                            {/* Orbiting gold dot */}
                            <circle cx="100" cy="180" r="2" fill="#d4af37" opacity="0.6" style={{ filter: 'drop-shadow(0 0 4px rgba(212,175,55,0.6))' }}>
                                <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="3s" repeatCount="indefinite" />
                            </circle>
                        </svg>

                        {/* Logo center */}
                        <div style={{
                            position: 'absolute', top: '50%', left: '50%',
                            transform: 'translate(-50%, -50%)',
                            animation: 'fxBreathe 2.5s ease-in-out infinite',
                        }}>
                            <Image
                                src="/hd_logo.webp"
                                alt="Flexy Markets"
                                width={52} height={52}
                                priority
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </div>

                    {/* Brand name */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 10 }}>
                        <span style={{
                            fontSize: 26, fontWeight: 700, letterSpacing: 8, color: '#fff',
                            opacity: 0, animation: 'fxTextReveal 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s forwards',
                        }}>FLEXY</span>
                        <span style={{
                            width: 5, height: 5, borderRadius: '50%', background: '#2ecc71',
                            boxShadow: '0 0 10px rgba(46,204,113,0.6)',
                            opacity: 0, animation: 'fxDotPop 0.4s ease 0.6s forwards',
                            display: 'inline-block',
                        }} />
                        <span style={{
                            fontSize: 26, fontWeight: 600, letterSpacing: 8,
                            background: 'linear-gradient(135deg, #2ecc71 0%, #a8e6cf 40%, #d4af37 100%)',
                            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            opacity: 0, animation: 'fxTextReveal 0.7s cubic-bezier(0.16,1,0.3,1) 0.5s forwards',
                        }}>MARKETS</span>
                    </div>

                    {/* Tagline */}
                    <p style={{
                        fontSize: 12, fontWeight: 500, letterSpacing: 4, textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.3)', margin: '0 0 28px',
                        opacity: 0, animation: 'fxTextReveal 0.6s ease 0.8s forwards',
                    }}>Your Gateway to Global Markets</p>

                    {/* Progress bar */}
                    <div style={{
                        width: 180, height: 2, background: 'rgba(255,255,255,0.06)',
                        borderRadius: 2, margin: '0 auto', overflow: 'hidden',
                        opacity: 0, animation: 'fxTextReveal 0.5s ease 0.7s forwards',
                    }}>
                        <div style={{
                            width: '50%', height: '100%', borderRadius: 2,
                            background: 'linear-gradient(90deg, transparent, #2ecc71, #d4af37, transparent)',
                            animation: 'fxSweep 1.5s ease-in-out infinite',
                        }} />
                    </div>
                </div>
            </div>
        </>
    );
}
