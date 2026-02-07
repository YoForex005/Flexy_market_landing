import pool from '@/lib/db';
import BlogCard from '@/components/BlogCard';
import Link from 'next/link';
// Define interface locally if not present globally
interface MappedPost {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    image_url: string;
    author: string;
    created_at: Date;
    tags: string[];
    views: number;
}

// Fetch posts from mql5 'blogs' table with pagination - Optimized query
async function getPosts(page: number = 1, limit: number = 12): Promise<{ success: boolean; data: MappedPost[]; total: number; error?: string }> {
    try {
        const offset = (page - 1) * limit;

        // Get total count for pagination statements
        const countRes = await pool.query('SELECT COUNT(*) FROM blogs WHERE status = $1', ['published']);
        const total = parseInt(countRes.rows[0].count);

        // Fetch paginated data - optimized to select only needed fields and truncate content
        const res = await pool.query(
            `SELECT id, title, slug, seo_slug, featured_image, author, created_at, tags, views, substring(content from 1 for 200) as content_snippet 
             FROM blogs 
             WHERE status = $1 
             ORDER BY created_at DESC 
             LIMIT $2 OFFSET $3`,
            ['published', limit, offset]
        );

        const mappedPosts = res.rows.map((row: any) => {
            // Create excerpt from content_snippet by stripping HTML
            const plainText = row.content_snippet ? row.content_snippet.replace(/<[^>]+>/g, '') : '';
            const excerpt = plainText.substring(0, 150) + '...';

            return {
                id: row.id,
                title: row.title,
                slug: row.seo_slug || row.slug || '',
                excerpt: excerpt,
                content: row.content || '',
                // Smart image path handling
                image_url: row.featured_image
                    ? (row.featured_image.startsWith('/') || row.featured_image.startsWith('http')
                        ? row.featured_image
                        : `/images/${row.featured_image}`)
                    : '/images/candlestick-chart-3d.webp',
                author: row.author || 'Flexy Team',
                created_at: row.created_at,
                tags: row.tags ? row.tags.split(',').map((tag: string) => tag.trim()) : [],
                views: parseInt(row.views) || 0
            };
        });

        return { success: true, data: mappedPosts, total };
    } catch (error: any) {
        console.error('Database Error:', error);
        return { success: false, data: [], total: 0, error: error.message || 'Unknown database error' };
    }
}

export default async function BlogGrid({ page }: { page: number }) {
    const limit = 12;
    const result = await getPosts(page, limit);
    const totalPages = Math.ceil(result.total / limit);

    if (!result.success) {
        return (
            <div className="text-center py-5">
                <div className="alert alert-danger d-inline-block">
                    <i className="fas fa-exclamation-triangle me-2"></i>
                    <strong>Database Error:</strong> {result.error}
                </div>
            </div>
        );
    }

    if (result.data.length === 0) {
        return (
            <div className="text-center py-5">
                <div className="alert alert-info d-inline-block">
                    No posts found in the database.
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="row g-4 justify-content-center">
                {result.data.map((post) => (
                    <div key={post.id} className="col-lg-4 col-md-6">
                        <BlogCard post={{
                            ...post,
                            created_at: new Date(post.created_at).toLocaleDateString('en-GB', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric'
                            }),
                            // Ensure tags and views are passed through
                            tags: post.tags,
                            views: post.views
                        }} />
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="d-flex justify-content-center w-100 mt-5">
                    <div className="d-flex align-items-center gap-3 p-3 rounded-pill bg-light border shadow-sm">
                        <Link
                            href={page > 1 ? `/blog?page=${page - 1}` : '#'}
                            className={`btn btn-sm rounded-pill px-3 fw-bold ${page <= 1 ? 'btn-secondary disabled opacity-50' : 'btn-outline-dark'}`}
                            aria-disabled={page <= 1}
                            style={{ minWidth: '100px' }}
                        >
                            &laquo; Previous
                        </Link>

                        <span className="fw-bold text-dark px-2 small text-uppercase tracking-wide">
                            Page {page} of {totalPages}
                        </span>

                        <Link
                            href={page < totalPages ? `/blog?page=${page + 1}` : '#'}
                            className={`btn btn-sm rounded-pill px-3 fw-bold ${page >= totalPages ? 'btn-secondary disabled opacity-50' : 'btn-outline-dark'}`}
                            aria-disabled={page >= totalPages}
                            style={{ minWidth: '100px' }}
                        >
                            Next &raquo;
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}
