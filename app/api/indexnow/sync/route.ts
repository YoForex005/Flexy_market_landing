import { NextRequest, NextResponse } from 'next/server';
import { getSitemapUrls, submitBulkUrls } from '@/lib/indexnow';

const CRON_SECRET = process.env.CRON_SECRET;

export async function GET(req: NextRequest) {
    return handleSync(req);
}

export async function POST(req: NextRequest) {
    return handleSync(req);
}

async function handleSync(req: NextRequest) {
    const authHeader = req.headers.get('authorization');
    const cronSecret = req.headers.get('x-cron-secret');

    // Vercel Cron jobs use "Authorization: Bearer <token>"
    const isVercelCron = authHeader === `Bearer ${CRON_SECRET}`;
    // Legacy support for custom header
    const isLegacySecret = CRON_SECRET && cronSecret === CRON_SECRET;

    if (!CRON_SECRET || (!isVercelCron && !isLegacySecret)) {
        console.error('Unauthorized IndexNow sync attempt');
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        console.log('Starting IndexNow sitemap sync...');
        const urls = await getSitemapUrls();
        if (urls.length === 0) {
            console.warn('No URLs found in sitemap during IndexNow sync');
            return NextResponse.json({ message: 'No URLs found in sitemap' });
        }

        const result = await submitBulkUrls(urls);
        console.log(`Successfully submitted ${urls.length} URLs to IndexNow`);
        return NextResponse.json({
            message: 'Sitemap sync completed successfully',
            urlsCount: urls.length,
            result
        });
    } catch (error: any) {
        console.error('IndexNow sync error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

