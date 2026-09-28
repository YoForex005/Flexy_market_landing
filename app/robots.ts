import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    // Match the legacy route without blocking /promotions or promotion image assets.
    const disallow = ['/promotion$', '/promotion/'];

    return {
        rules: [
            {
                userAgent: [
                    'GPTBot',
                    'ChatGPT-User',
                    'Google-Extended',
                    'ClaudeBot',
                    'anthropic-ai',
                    'CCBot',
                    'PerplexityBot',
                    'Bytespider',
                    'Googlebot',
                    'Bingbot',
                ],
                allow: '/',
                disallow,
            },
            {
                userAgent: '*',
                allow: '/',
                disallow,
            },
        ],
        sitemap: 'https://flexymarkets.com/sitemap.xml',
    };
}
