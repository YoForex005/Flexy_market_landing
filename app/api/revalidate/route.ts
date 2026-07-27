import { timingSafeEqual } from 'node:crypto';
import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

const BLOG_DETAIL_PATH = /^\/blog\/[A-Za-z0-9](?:[A-Za-z0-9._~-]*[A-Za-z0-9])?\/?$/;

function secretsMatch(expected: string, supplied: string): boolean {
    const expectedBuffer = Buffer.from(expected);
    const suppliedBuffer = Buffer.from(supplied);

    return expectedBuffer.length === suppliedBuffer.length
        && timingSafeEqual(expectedBuffer, suppliedBuffer);
}

function normalizeDetailPath(value: unknown): string | null {
    if (typeof value !== 'string') return null;

    const path = value.split(/[?#]/, 1)[0];
    if (!BLOG_DETAIL_PATH.test(path) || path.includes('..')) return null;

    return path.endsWith('/') ? path.slice(0, -1) : path;
}

export async function POST(request: NextRequest) {
    const expectedSecret = process.env.REVALIDATE_SECRET?.trim();

    if (!expectedSecret) {
        return NextResponse.json(
            { revalidated: false, error: 'Revalidation is not configured.' },
            { status: 503 }
        );
    }

    let body: { path?: unknown; secret?: unknown } = {};
    try {
        body = await request.json();
    } catch {
        return NextResponse.json(
            { revalidated: false, error: 'A JSON request body is required.' },
            { status: 400 }
        );
    }

    const headerSecret = request.headers.get('x-revalidate-secret')?.trim() || '';
    const bodySecret = typeof body.secret === 'string' ? body.secret.trim() : '';
    const suppliedSecret = headerSecret || bodySecret;

    if (!suppliedSecret || !secretsMatch(expectedSecret, suppliedSecret)) {
        return NextResponse.json(
            { revalidated: false, error: 'Invalid revalidation secret.' },
            { status: 401 }
        );
    }

    const detailPath = normalizeDetailPath(body.path);
    if (!detailPath) {
        return NextResponse.json(
            { revalidated: false, error: 'A valid /blog/{slug} path is required.' },
            { status: 400 }
        );
    }

    const paths = ['/blog', detailPath, '/sitemap.xml'];
    for (const path of paths) {
        revalidatePath(path);
    }

    return NextResponse.json({
        revalidated: true,
        paths,
        revalidatedAt: new Date().toISOString(),
    });
}
