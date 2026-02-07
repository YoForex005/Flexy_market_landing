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
    ],
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Tree-shake and optimize imports
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['bootstrap', 'aos', '@emailjs/browser'],
  },

  // Enable gzip compression
  compress: true,

  // Remove X-Powered-By header
  poweredByHeader: false,

  reactStrictMode: true,
};

export default nextConfig;
