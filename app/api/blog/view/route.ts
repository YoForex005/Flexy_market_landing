import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function POST(request: Request) {
    try {
        const { slug } = await request.json();

        if (!slug) {
            return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
        }

        // Increment view count for the blog post associated with the slug
        // We join with seo_meta to find the post_id from the slug
        const query = `
            UPDATE blogs b
            SET views = COALESCE(b.views, 0) + 1
            FROM seo_meta sm
            WHERE b.id = sm.post_id AND sm.seo_slug = $1
            RETURNING b.views;
        `;

        const result = await pool.query(query, [slug]);

        if (result.rows.length === 0) {
            return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
        }

        const newViews = result.rows[0].views;

        return NextResponse.json({ views: newViews });

    } catch (error) {
        console.error('Error incrementing view count:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const slug = searchParams.get('slug');

        if (!slug) {
            return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
        }

        const query = `
            SELECT b.views
            FROM blogs b
            INNER JOIN seo_meta sm ON b.id = sm.post_id
            WHERE sm.seo_slug = $1
        `;

        const result = await pool.query(query, [slug]);

        if (result.rows.length === 0) {
            return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
        }

        return NextResponse.json({ views: result.rows[0].views });

    } catch (error) {
        console.error('Error fetching view count:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
