'use client';

import React from 'react';

interface BlogImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    fallbackSrc?: string;
}

export default function BlogImage({ src, alt, fallbackSrc = "/images/candlestick-chart-3d.webp", ...props }: BlogImageProps) {
    return (
        <img
            src={src}
            alt={alt}
            onError={(e) => {
                e.currentTarget.src = fallbackSrc;
            }}
            {...props}
        />
    );
}
