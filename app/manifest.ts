import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Flexy Markets',
        short_name: 'FlexyMarkets',
        description: 'Trade CFD on Forex, Shares, Indices, Commodities & Cryptocurrencies with a regulated broker.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0f4941',
        icons: [
            {
                src: '/hd_logo.webp',
                sizes: 'any',
                type: 'image/webp',
            },
            {
                src: '/hd_logo.webp',
                sizes: '192x192',
                type: 'image/webp',
            },
            {
                src: '/hd_logo.webp',
                sizes: '512x512',
                type: 'image/webp',
            },
        ],
    };
}
