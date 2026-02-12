import { NextRequest, NextResponse } from 'next/server';
import { getSitemapUrls, submitBulkUrls } from '@/lib/indexnow';

export async function POST(req: NextRequest) {
    const cronSecret = req.headers.get('x-cron-secret');

    // Verify cron secret to prevent unauthorized access
    if (cronSecret !== process.env.CRON_SECRET) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        // 1. Get URLs from sitemap
        // Note: You might want to filter these or start with a fresh list
        // Ideally, IndexNow is for *changed* URLs. Submitting the whole sitemap 
        // repeatedly is okay but inefficient if the site is huge. 
        // For this implementation, we sync everything found in the sitemap.
        const urls = await getSitemapUrls();

        if (urls.length === 0) {
            return NextResponse.json({ success: true, message: 'No URLs found in sitemap to sync.' });
        }

        // 2. Submit to IndexNow
        await submitBulkUrls(urls);

        return NextResponse.json({
            success: true,
            message: `Synced ${urls.length} URLs from sitemap to IndexNow.`
        });

    } catch (error) {
        console.error('Sync Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
