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
        '/deposit-bonus',
        '/economic-calendar',
        '/energies',
        '/equity-indices',
        '/execution-policy',
        '/flexy-copy-trading',
        '/flexy-150',
        '/forex-calculator',
        '/forex-trading',
        '/learning-centre',
        '/legal-documents',
        '/live-education',
        '/margin-leverage',
        '/rtx5',
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
        // Return one sitemap row per eligible published blog.
        const res = await withTimeout(
            pool.query<{ slug: string; last_modified: Date | null }>(
                `SELECT sm.seo_slug AS slug,
                        COALESCE(b.updated_at, b.published_at, b.created_at) AS last_modified
                 FROM blogs b
                 INNER JOIN LATERAL (
                     SELECT BTRIM(sm.seo_slug) AS seo_slug
                     FROM seo_meta sm
                     WHERE sm.post_id = b.id
                       AND NULLIF(BTRIM(sm.seo_slug), '') IS NOT NULL
                     ORDER BY sm.id DESC
                     LIMIT 1
                 ) sm ON TRUE
                 WHERE b.status = 'published'`
            ),
            10000
        );

        blogRoutes = res.rows.map((post) => ({
            url: `${BASE_URL}/blog/${post.slug}`,
            ...(post.last_modified ? { lastModified: post.last_modified } : {}),
            changeFrequency: 'weekly' as const,
            priority: 0.6,
        }));
    } catch (error) {
        console.error('Failed to generate blog sitemap (continuing with static routes only):', error);
        // Continue without blog routes - the sitemap will still work
    }

    return [...staticRoutes, ...blogRoutes];
}
