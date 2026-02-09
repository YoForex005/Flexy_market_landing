import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 1080, 1920],
    imageSizes: [16, 32, 64, 128, 256],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.coincap.io',
      },
      {
        protocol: 'https',
        hostname: '*.r2.dev',
      },
    ],
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Tree-shake and optimize imports
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['bootstrap', '@emailjs/browser'],
  },
  allowedDevOrigins: ['100.89.159.98'],

  // Disable gzip compression (leave it to the CDN/Proxy)
  compress: false,

  // Remove X-Powered-By header
  poweredByHeader: false,

  reactStrictMode: true,

  // Aggressive caching for static assets
  async headers() {
    return [
      {
        // Cache fonts, images, video for 1 year
        source: '/:path*.(woff|woff2|webp|png|jpg|jpeg|svg|ico|mp4)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Security + performance headers
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
