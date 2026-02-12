import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: [
                '*',
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
            disallow: ['/api/', '/admin/'],
        },
        sitemap: 'https://flexymarkets.com/sitemap.xml',
    };
}
