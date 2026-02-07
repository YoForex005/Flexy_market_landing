import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Performance Optimizations */

  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
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

  // Experimental features for better performance
  experimental: {
    optimizeCss: false,
    optimizePackageImports: ['bootstrap', 'aos'],
  },

  // Disable compression to fix HTTP2 errors
  compress: false,

  // Faster development builds
  reactStrictMode: true,
};

export default nextConfig;
