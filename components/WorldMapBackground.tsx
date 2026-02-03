"use client";

import React from 'react';

export default function WorldMapBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0, opacity: 0.4 }}>
            {/* Simplified Dotted Map Representation using CSS Radial Gradients to simulate a grid/map texture */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
            }}></div>
        </div>
    );
}
