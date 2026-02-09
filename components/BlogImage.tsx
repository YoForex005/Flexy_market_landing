"use client";

import React, { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

interface BlogImageProps extends Omit<ImageProps, 'src'> {
    src: string;
    fallbackSrc?: string;
}

export default function BlogImage({ src, alt, fallbackSrc = "/images/candlestick-chart-3d.webp", ...props }: BlogImageProps) {
    const [imgSrc, setImgSrc] = useState(src);

    useEffect(() => {
        setImgSrc(src);
    }, [src]);

    return (
        <Image
            src={imgSrc}
            alt={alt}
            onError={() => {
                if (imgSrc !== fallbackSrc) {
                    setImgSrc(fallbackSrc);
                }
            }}
            fill
            unoptimized
            style={{ objectFit: 'cover' }}
            {...props}
        />
    );
}
