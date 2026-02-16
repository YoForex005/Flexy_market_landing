import { NextRequest, NextResponse } from 'next/server';
import { submitSingleUrl, submitBulkUrls } from '@/lib/indexnow';

const API_SECRET_KEY = process.env.API_SECRET_KEY;

export async function POST(req: NextRequest) {
    const apiKey = req.headers.get('x-api-key');

    if (!API_SECRET_KEY || apiKey !== API_SECRET_KEY) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const body = await req.json();
        const { url, urls } = body;

        if (urls && Array.isArray(urls)) {
            const result = await submitBulkUrls(urls);
            return NextResponse.json(result);
        } else if (url) {
            const result = await submitSingleUrl(url);
            return NextResponse.json(result);
        } else {
            return NextResponse.json({ error: 'Missing url or urls in request body' }, { status: 400 });
        }
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
