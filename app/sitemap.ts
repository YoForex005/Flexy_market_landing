import { MetadataRoute } from 'next';
import pool from '@/lib/db';

// Generate sitemap dynamically at runtime, not during build
// This prevents build failures when database is unreachable
export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Regenerate every hour

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

    // Fetch dynamic blog posts with a timeout to prevent build failures
    let blogRoutes: MetadataRoute.Sitemap = [];

    // Helper function to add timeout to promises
    const withTimeout = <T>(promise: Promise<T>, ms: number): Promise<T> => {
        const timeout = new Promise<never>((_, reject) =>
            setTimeout(() => reject(new Error(`Database query timed out after ${ms}ms`)), ms)
        );
        return Promise.race([promise, timeout]);
    };

    try {
        // Set a 10 second timeout for the database query
        const res = await withTimeout(
            pool.query<{ seo_slug: string; slug: string; created_at: Date }>(
                "SELECT seo_slug, slug, created_at FROM blogs WHERE status = 'published'"
            ),
            10000
        );

        blogRoutes = res.rows.map((post) => ({
            url: `${BASE_URL}/blog/${post.seo_slug || post.slug}`,
            lastModified: post.created_at,
            changeFrequency: 'weekly' as const,
            priority: 0.6,
        }));
    } catch (error) {
        console.error('Failed to generate blog sitemap (continuing with static routes only):', error);
        // Continue without blog routes - the sitemap will still work
    }

    return [...staticRoutes, ...blogRoutes];
}
