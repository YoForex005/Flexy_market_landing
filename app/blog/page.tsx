
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import pool from '@/lib/db';
import AnimatedBackground from '@/components/AnimatedBackground';
import BlogCard from '@/components/BlogCard';
import Link from 'next/link';

// Define Post interface matching the component expectation
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

// Fetch posts from mql5 'blogs' table with pagination
async function getPosts(page: number = 1, limit: number = 12): Promise<{ success: boolean; data: MappedPost[]; total: number; error?: string }> {
    try {
        const offset = (page - 1) * limit;

        // Get total count for pagination statements
        const countRes = await pool.query('SELECT COUNT(*) FROM blogs WHERE status = $1', ['published']);
        const total = parseInt(countRes.rows[0].count);

        // Fetch paginated data
        const res = await pool.query('SELECT * FROM blogs WHERE status = $1 ORDER BY created_at DESC LIMIT $2 OFFSET $3', ['published', limit, offset]);

        const mappedPosts = res.rows.map((row: any) => {
            // Create excerpt from content by stripping HTML
            const plainText = row.content ? row.content.replace(/<[^>]+>/g, '') : '';
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
        // console.error('Database Error:', error); // Commented out to prevent noise in build logs if expected
        console.error('Database Error:', error);
        return { success: false, data: [], total: 0, error: error.message || 'Unknown database error' };
    }
}

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
    const { page: pageParam } = await searchParams; // Await searchParams
    const page = parseInt(pageParam || '1');
    const limit = 12;
    const result = await getPosts(page, limit);
    const totalPages = Math.ceil(result.total / limit);

    return (
        <main className="position-relative bg-white" style={{ minHeight: "100vh" }}>
            {/* Background Animation */}
            <div className="position-fixed top-0 start-0 w-100 h-100" style={{ zIndex: 0 }}>
                <AnimatedBackground variant="aurora" intensity="medium" />
            </div>

            <NavBar />

            {/* HERO SECTION */}
            <div className="container position-relative z-1 pt-5 mt-5">
                <div className="text-center py-5">
                    <div className="d-inline-flex align-items-center justify-content-center mb-4 px-3 py-1 rounded-pill border border-emerald-200 bg-emerald-50 text-emerald-800 shadow-sm">
                        <span className="fw-bold text-uppercase fs-7 tracking-wide">
                            Market Insights
                        </span>
                    </div>

                    <h1 className="display-3 fw-bold mb-3 text-dark tracking-tight">
                        Latest <span style={{ color: '#0f4941' }}>Trading Analysis</span>
                    </h1>

                    <p className="lead mx-auto mb-5 text-secondary" style={{ maxWidth: "600px" }}>
                        Stay ahead of the markets with expert insights, educational guides, and breaking financial news.
                    </p>
                </div>
            </div>

            {/* BLOG GRID */}
            <div className="container position-relative z-1 pb-5 mb-5">
                {!result.success ? (
                    <div className="text-center py-5">
                        <div className="alert alert-danger d-inline-block">
                            <i className="fas fa-exclamation-triangle me-2"></i>
                            <strong>Database Error:</strong> {result.error}
                        </div>
                    </div>
                ) : result.data.length === 0 ? (
                    <div className="text-center py-5">
                        <div className="alert alert-info d-inline-block">
                            No posts found in the database.
                        </div>
                    </div>
                ) : (
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
                )}
            </div>

            <div className="position-relative z-1">
                <Footer />
            </div>
        </main>
    );
}
