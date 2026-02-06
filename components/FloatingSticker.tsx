"use client";

import Image from 'next/image';

interface FloatingStickerProps {
    countryCode?: string; // e.g., 'us', 'eu', 'gb'
    imageUrl?: string;    // Direct URL for custom icons
    iconClass?: string;   // FontAwesome icon class (e.g. 'fab fa-apple')
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    rotate?: string;
    delay?: string;
    size?: number;
    color?: string; // Brand color for the icon
}

export default function FloatingSticker({ countryCode, imageUrl, iconClass, top, left, right, bottom, rotate = "0deg", delay = "0s", size = 80, color = "#0f4941" }: FloatingStickerProps) {
    // Priority: iconClass -> imageUrl -> countryCode
    const src = imageUrl
        ? imageUrl
        : countryCode
            ? `https://flagcdn.com/w160/${countryCode.toLowerCase()}.png`
            : '';

    if (!src && !iconClass) return null;

    return (
        <div
            className="floating-sticker"
            style={{
                position: 'absolute',
                top,
                left,
                right,
                bottom,
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: '#fff',
                borderRadius: '24px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.08), 0 5px 15px rgba(0,0,0,0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: `rotate(${rotate})`,
                animation: `float-sticker 6s ease-in-out infinite`,
                animationDelay: delay,
                zIndex: 5
            }}
        >
            <div
                style={{
                    width: '70%',
                    height: '70%',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {iconClass ? (
                    <i className={iconClass} style={{ fontSize: `${size * 0.5}px`, color: color }}></i>
                ) : (
                    src && <Image
                        src={src}
                        alt="sticker icon"
                        width={size}
                        height={size}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain'
                        }}
                    />
                )}
            </div>

            <style jsx>{`
                @keyframes float-sticker {
                    0%, 100% { transform: rotate(${rotate}) translateY(0); }
                    50% { transform: rotate(${rotate}) translateY(-15px); }
                }
            `}</style>
        </div>
    );
}
