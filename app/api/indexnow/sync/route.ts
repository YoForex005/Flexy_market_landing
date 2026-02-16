import { NextRequest, NextResponse } from 'next/server';
import { getSitemapUrls, submitBulkUrls } from '@/lib/indexnow';

const CRON_SECRET = process.env.CRON_SECRET;

export async function POST(req: NextRequest) {
    const cronSecret = req.headers.get('x-cron-secret');

    // For cron routes, we often check for an Authorization header or a custom header
    if (!CRON_SECRET || cronSecret !== CRON_SECRET) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const urls = await getSitemapUrls();
        if (urls.length === 0) {
            return NextResponse.json({ message: 'No URLs found in sitemap' });
        }

        const result = await submitBulkUrls(urls);
        return NextResponse.json({
            message: 'Sitemap sync triggered successfully',
            urlsCount: urls.length,
            result
        });
    } catch (error: any) {
        console.error('IndexNow sync error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
