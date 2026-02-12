import { NextRequest, NextResponse } from 'next/server';
import { submitSingleUrl, submitBulkUrls } from '@/lib/indexnow';

export async function POST(req: NextRequest) {
    const apiKey = req.headers.get('x-api-key');

    if (apiKey !== process.env.API_SECRET_KEY) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const body = await req.json();
        const { url, urls } = body;

        if (urls && Array.isArray(urls)) {
            await submitBulkUrls(urls);
            return NextResponse.json({ success: true, message: `Submitted ${urls.length} URLs.` });
        } else if (url) {
            await submitSingleUrl(url);
            return NextResponse.json({ success: true, message: `Submitted ${url}` });
        } else {
            return NextResponse.json({ error: 'Missing "url" or "urls" in body' }, { status: 400 });
        }

    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
