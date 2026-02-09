import { MetadataRoute } from 'next';
import pool from '@/lib/db';

const BASE_URL = 'https://flexymarkets.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const staticRoutes = [
        '',
        '/about',
        '/account',
        '/analytical-tools',
        '/blog',
        '/commodities',
        '/contact',
        '/cryptocurrencies',
        '/economic-calendar',
        '/energies',
        '/equity-indices',
        '/execution-policy',
        '/flexy-copy-trading',
        '/forex-calculator',
        '/forex-trading',
        '/learning-centre',
        '/legal-documents',
        '/live_education',
        '/margin-leverage',
        '/mt5',
        '/news-analysis',
        '/platforms',
        '/precious-metals',
        '/promotions',
        '/shares',
        '/stock-derivatives',
        '/thematic-indices',
        '/turbo-stocks',
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Fetch dynamic blog posts
    let blogRoutes: MetadataRoute.Sitemap = [];
    try {
        const res = await pool.query<{ seo_slug: string; slug: string; created_at: Date }>(
            "SELECT seo_slug, slug, created_at FROM blogs WHERE status = 'published'"
        );

        blogRoutes = res.rows.map((post) => ({
            url: `${BASE_URL}/blog/${post.seo_slug || post.slug}`,
            lastModified: post.created_at,
            changeFrequency: 'weekly' as const,
            priority: 0.6,
        }));
    } catch (error) {
        console.error('Failed to generate blog sitemap:', error);
    }

    return [...staticRoutes, ...blogRoutes];
}
